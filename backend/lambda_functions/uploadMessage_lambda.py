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
    print("**lambda: uploadMessage**")
    
    
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
    userid = event.get("userid")
    datatype = event.get("datatype")
    body = event.get("body")

    print("**Opening connection**")
    dbConn = datatier.get_dbConn(rds_endpoint, rds_portnum, rds_username, rds_pwd, rds_dbname)

    #case distinction between text and image message:
    #txt message
    if datatype == ".txt":
      print("Updating DB, datatype is .txt...")

      #create DB entry for the txt message
      sql = "INSERT INTO messages (userid, datatype, body) VALUES (%s, %s, %s);"
      datatier.perform_action(dbConn, sql, [userid, datatype, body])
      #end if

    #image message
    else:
      #upload the encoded data onto s3
      #TODO: create bucket in s3
      print("Uploading image s3...")

      #generate unique bucketkey for the image
      bucketkey = bucketname + "/" + str(uuid.uuid4()) + "datatype"
      #decode the image into bytes
      decoded_image = base64.b64decode(body) 
      #upload those bytes onto s3
      s3.put_object(Body = decoded_image, Bucket=bucketname, Key=bucketkey)

      print("Upload sucess! Updating DB, datatype is ", datatype, "...")

      #create DB entry for this image
      sql = "INSERT INTO messages (userid, datatype, body) VALUES (%s, %s, %s);"
      datatier.perform_action(dbConn, sql, [userid, datatype, bucketkey])
      #end else
    
    print("DB update success!")
    return{
      "statusCode": 200,
      "data": []
    }


  except Exception as err:
    print("**ERROR**")
    print(str(err))

    return{
      "statusCode":400,
      "data": str(err)
    }
