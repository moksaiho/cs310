/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createChatroom = /* GraphQL */ `
  mutation CreateChatroom(
    $input: CreateChatroomInput!
    $condition: ModelChatroomConditionInput
  ) {
    createChatroom(input: $input, condition: $condition) {
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
export const updateChatroom = /* GraphQL */ `
  mutation UpdateChatroom(
    $input: UpdateChatroomInput!
    $condition: ModelChatroomConditionInput
  ) {
    updateChatroom(input: $input, condition: $condition) {
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
export const deleteChatroom = /* GraphQL */ `
  mutation DeleteChatroom(
    $input: DeleteChatroomInput!
    $condition: ModelChatroomConditionInput
  ) {
    deleteChatroom(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createChatroomUser = /* GraphQL */ `
  mutation CreateChatroomUser(
    $input: CreateChatroomUserInput!
    $condition: ModelChatroomUserConditionInput
  ) {
    createChatroomUser(input: $input, condition: $condition) {
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
export const updateChatroomUser = /* GraphQL */ `
  mutation UpdateChatroomUser(
    $input: UpdateChatroomUserInput!
    $condition: ModelChatroomUserConditionInput
  ) {
    updateChatroomUser(input: $input, condition: $condition) {
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
export const deleteChatroomUser = /* GraphQL */ `
  mutation DeleteChatroomUser(
    $input: DeleteChatroomUserInput!
    $condition: ModelChatroomUserConditionInput
  ) {
    deleteChatroomUser(input: $input, condition: $condition) {
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
