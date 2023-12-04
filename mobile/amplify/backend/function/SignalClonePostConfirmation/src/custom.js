// /**
//  * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
//  */
// const aws = require('aws-sdk');
// // import aws from 'aws-sdk';
// const ddb = new aws.DynamoDB();

// const TableName = process.env.USERTABLE;

// exports.handler = async event => {
//   // insert code to be executed by your lambda trigger
//   // save a user to dynamoDB
//   console.log(event.request, event?.request?.userAttributes);
//   if (!event?.request?.userAttributes?.sub) {
//     console.log('No sub provided');
//     return;
//   }
//   const now = new Date();
//   const timestamp = now.getTime();
//   const userItem = {
//     __typename: {S: 'User'},
//     _lastChangedAt: {N: timestamp.toString()},
//     _version: {N: '1'},
//     createdAt: {S: now.toISOString()},
//     updatedAt: {S: now.toISOString()},
//     id: {S: event.request.userAttributes.sub},
//     name: {S: event.request.userAttributes.email},
//   };
//   const params = {
//     Item: userItem,
//     TableName: TableName,
//   };
//   try {
//     await ddb.putItem(params).promise();
//     console.log('success!');
//   } catch (err) {
//     console.log(err);
//   }
//   return event;
// };

//
// database.js
//
// Exports
// dbConnection: connection object to our MySQL database in AWS RDS
//

const mysql = require('mysql');

//
// creates connection object, but doesn't open connnection:9307
//
exports.handler = async event => {
  try {
    const dbConnection = mysql.createConnection({
      host: 'mysql-nu-cs310.coyvpckopjmn.us-east-2.rds.amazonaws.com',
      port: 3306,
      user: 'riverFinalApp-read-write',
      password: 'def456!!',
      database: 'riverFinalApp',
      multipleStatements: true, // allow multiple queries in one call
    });

    dbConnection.connect();

    dbConnection.on('error', err => {
      console.error('Database connection error:', err);
    });

    dbConnection.on('end', () => {
      console.log('Database connection closed.');
    });

    // Your handler code here
    console.log(event.request, event?.request?.userAttributes);
    if (!event?.request?.userAttributes?.sub) {
      console.log('No sub provided');
      return;
    }
    const id = event?.request?.userAttributes?.sub;
    const name = event?.request?.userAttributes?.email;
    let sql = `INSERT INTO users(userid,username, imageUri)  
                 values(?,?,?);`;

    const insertResult = await new Promise((resolve, reject) => {
      dbConnection.query(sql, [id, name, null], (err, results, _) => {
        if (err) {
          console.log('87行', err);
          reject(err);
        } else {
          console.log('result是', results);
          resolve(results);
        }
      });
    });

    if (insertResult.affectedRows === 1) {
      console.log('insert success');
    }

    dbConnection.end();
    console.log('complete');
  } catch (error) {
    console.error('Error:', error);
  }
};
