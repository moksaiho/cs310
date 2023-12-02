/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const aws = require('aws-sdk');
// import aws from 'aws-sdk';
const ddb = new aws.DynamoDB();

const TableName = process.env.USERTABLE;

exports.handler = async event => {
  // insert code to be executed by your lambda trigger
  // save a user to dynamoDB
  console.log(event.request, event?.request?.userAttributes);
  if (!event?.request?.userAttributes?.sub) {
    console.log('No sub provided');
    return;
  }
  const now = new Date();
  const timestamp = now.getTime();
  const userItem = {
    __typename: {S: 'User'},
    _lastChangedAt: {N: timestamp.toString()},
    _version: {N: '1'},
    createdAt: {S: now.toISOString()},
    updatedAt: {S: now.toISOString()},
    id: {S: event.request.userAttributes.sub},
    name: {S: event.request.userAttributes.email},
  };
  const params = {
    Item: userItem,
    TableName: TableName,
  };
  try {
    await ddb.putItem(params).promise();
    console.log('success!');
  } catch (err) {
    console.log(err);
  }
  return event;
};
