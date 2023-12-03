/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      content
      userID
      chatroomID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        userID
        chatroomID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const messagesByUserID = /* GraphQL */ `
  query MessagesByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        userID
        chatroomID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const messagesByChatroomID = /* GraphQL */ `
  query MessagesByChatroomID(
    $chatroomID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByChatroomID(
      chatroomID: $chatroomID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        userID
        chatroomID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getChatroom = /* GraphQL */ `
  query GetChatroom($id: ID!) {
    getChatroom(id: $id) {
      id
      newMessages
      LastMessage {
        id
        content
        userID
        chatroomID
        createdAt
        updatedAt
        __typename
      }
      Messages {
        nextToken
        __typename
      }
      Users {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      chatroomLastMessageId
      __typename
    }
  }
`;
export const listChatrooms = /* GraphQL */ `
  query ListChatrooms(
    $filter: ModelChatroomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatrooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        newMessages
        createdAt
        updatedAt
        chatroomLastMessageId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      Message {
        nextToken
        __typename
      }
      chatrooms {
        nextToken
        __typename
      }
      imageUri
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        imageUri
        status
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getChatroomUser = /* GraphQL */ `
  query GetChatroomUser($id: ID!) {
    getChatroomUser(id: $id) {
      id
      chatroomId
      userId
      chatroom {
        id
        newMessages
        createdAt
        updatedAt
        chatroomLastMessageId
        __typename
      }
      user {
        id
        name
        imageUri
        status
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listChatroomUsers = /* GraphQL */ `
  query ListChatroomUsers(
    $filter: ModelChatroomUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatroomUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        chatroomId
        userId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const chatroomUsersByChatroomId = /* GraphQL */ `
  query ChatroomUsersByChatroomId(
    $chatroomId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelChatroomUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    chatroomUsersByChatroomId(
      chatroomId: $chatroomId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        chatroomId
        userId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const chatroomUsersByUserId = /* GraphQL */ `
  query ChatroomUsersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelChatroomUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    chatroomUsersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        chatroomId
        userId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
