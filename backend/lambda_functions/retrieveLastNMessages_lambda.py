import json
import boto3
import os
import uuid
import base64
import datatier
import base64

from configparser import ConfigParser

def lambda_handler(event, context):
  try:
    print("**STARTING**")
    print("**lambda: retrieveLastNMessages**")
    
    
    #
    # setup AWS based on config file:
    #
    config_file = 'config.ini'
    os.environ['AWS_SHARED_CREDENTIALS_FILE'] = config_file
    
    configur = ConfigParser()
    configur.read(config_file)
    
    #
    # configure for S3 access:
    #
    s3_profile = 's3readwrite'
    boto3.setup_default_session(profile_name=s3_profile)
    
    bucketname = configur.get('s3', 'bucket_name')
    
    s3 = boto3.resource('s3')
    bucket = s3.Bucket(bucketname)
    
    #
    # configure for RDS access
    #
    rds_endpoint = configur.get('rds', 'endpoint')
    rds_portnum = int(configur.get('rds', 'port_number'))
    rds_username = configur.get('rds', 'user_name')
    rds_pwd = configur.get('rds', 'user_pwd')
    rds_dbname = configur.get('rds', 'db_name')

    #start actual computation:
    #get the json data from the http post request
    n = event.get("n")

    print("**Opening connection**")
    dbConn = datatier.get_dbConn(rds_endpoint, rds_portnum, rds_username, rds_pwd, rds_dbname)

    #get the latest n messages
    print("Retrieving the latest ", n ," messages from the DB...")

    sql = "SELECT* FROM messages ORDER by messageid DESC LIMIT %s;"
    rows = datatier.retrieve_all_rows(dbConn, sql, n)

    print("DB query success! Building output")

    #write write the message body into output as base64 encoded string
    output = []

    for row in rows:
      datatype = row[2]
      body = row[3]
      #if this is a .txt message, the data in the body is the content and already in b64 encoding
      if datatype == ".txt":
        output.append(body)
      #else we have an image message, body is the bucketkey and we need to use it to get the image data from s3
      #then we encoding the image data in b64
      else:
        response = s3.get_object(Bucket=bucketname, Key=body)
        image_bytes = response['Body'].read()
        output.append(base64.b64encode(image_bytes))
    #end for
    
    print("output write done!")
    return{
      "statusCode": 200,
      "data": output
    }


  except Exception as err:
    print("**ERROR**")
    print(str(err))

    return{
      "statusCode":400,
      "data": str(err)
    }
