/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
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
export const onCreateChatroom = /* GraphQL */ `
  subscription OnCreateChatroom($filter: ModelSubscriptionChatroomFilterInput) {
    onCreateChatroom(filter: $filter) {
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
export const onUpdateChatroom = /* GraphQL */ `
  subscription OnUpdateChatroom($filter: ModelSubscriptionChatroomFilterInput) {
    onUpdateChatroom(filter: $filter) {
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
export const onDeleteChatroom = /* GraphQL */ `
  subscription OnDeleteChatroom($filter: ModelSubscriptionChatroomFilterInput) {
    onDeleteChatroom(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateChatroomUser = /* GraphQL */ `
  subscription OnCreateChatroomUser(
    $filter: ModelSubscriptionChatroomUserFilterInput
  ) {
    onCreateChatroomUser(filter: $filter) {
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
export const onUpdateChatroomUser = /* GraphQL */ `
  subscription OnUpdateChatroomUser(
    $filter: ModelSubscriptionChatroomUserFilterInput
  ) {
    onUpdateChatroomUser(filter: $filter) {
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
export const onDeleteChatroomUser = /* GraphQL */ `
  subscription OnDeleteChatroomUser(
    $filter: ModelSubscriptionChatroomUserFilterInput
  ) {
    onDeleteChatroomUser(filter: $filter) {
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
