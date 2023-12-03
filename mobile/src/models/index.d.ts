import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content: string;
  readonly userID: string;
  readonly chatroomID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content: string;
  readonly userID: string;
  readonly chatroomID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Message = LazyLoading extends LazyLoadingDisabled ? EagerMessage : LazyMessage

export declare const Message: (new (init: ModelInit<Message>) => Message) & {
  copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}

type EagerChatroom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Chatroom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly newMessages?: number | null;
  readonly LastMessage?: Message | null;
  readonly Messages?: (Message | null)[] | null;
  readonly Users?: (ChatroomUser | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly chatroomLastMessageId?: string | null;
}

type LazyChatroom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Chatroom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly newMessages?: number | null;
  readonly LastMessage: AsyncItem<Message | undefined>;
  readonly Messages: AsyncCollection<Message>;
  readonly Users: AsyncCollection<ChatroomUser>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly chatroomLastMessageId?: string | null;
}

export declare type Chatroom = LazyLoading extends LazyLoadingDisabled ? EagerChatroom : LazyChatroom

export declare const Chatroom: (new (init: ModelInit<Chatroom>) => Chatroom) & {
  copyOf(source: Chatroom, mutator: (draft: MutableModel<Chatroom>) => MutableModel<Chatroom> | void): Chatroom;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly Message?: (Message | null)[] | null;
  readonly chatrooms?: (ChatroomUser | null)[] | null;
  readonly imageUri?: string | null;
  readonly status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly Message: AsyncCollection<Message>;
  readonly chatrooms: AsyncCollection<ChatroomUser>;
  readonly imageUri?: string | null;
  readonly status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerChatroomUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatroomUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly chatroomId?: string | null;
  readonly userId?: string | null;
  readonly chatroom: Chatroom;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyChatroomUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatroomUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly chatroomId?: string | null;
  readonly userId?: string | null;
  readonly chatroom: AsyncItem<Chatroom>;
  readonly user: AsyncItem<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ChatroomUser = LazyLoading extends LazyLoadingDisabled ? EagerChatroomUser : LazyChatroomUser

export declare const ChatroomUser: (new (init: ModelInit<ChatroomUser>) => ChatroomUser) & {
  copyOf(source: ChatroomUser, mutator: (draft: MutableModel<ChatroomUser>) => MutableModel<ChatroomUser> | void): ChatroomUser;
}