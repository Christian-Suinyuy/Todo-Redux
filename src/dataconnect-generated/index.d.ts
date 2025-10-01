import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CreateTodoItemData {
  todoItem_insert: TodoItem_Key;
}

export interface GetUserData {
  user?: {
    id: UUIDString;
    username: string;
    email?: string | null;
  } & User_Key;
}

export interface ListTodoListsData {
  todoLists: ({
    id: UUIDString;
    name: string;
    description?: string | null;
    isCompleted?: boolean | null;
  } & TodoList_Key)[];
}

export interface TodoItem_Key {
  id: UUIDString;
  __typename?: 'TodoItem_Key';
}

export interface TodoList_Key {
  id: UUIDString;
  __typename?: 'TodoList_Key';
}

export interface UpdateTodoListData {
  todoList_update?: TodoList_Key | null;
}

export interface UpdateTodoListVariables {
  todoListId: UUIDString;
  isCompleted: boolean;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateTodoItemRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateTodoItemData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateTodoItemData, undefined>;
  operationName: string;
}
export const createTodoItemRef: CreateTodoItemRef;

export function createTodoItem(): MutationPromise<CreateTodoItemData, undefined>;
export function createTodoItem(dc: DataConnect): MutationPromise<CreateTodoItemData, undefined>;

interface ListTodoListsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListTodoListsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListTodoListsData, undefined>;
  operationName: string;
}
export const listTodoListsRef: ListTodoListsRef;

export function listTodoLists(): QueryPromise<ListTodoListsData, undefined>;
export function listTodoLists(dc: DataConnect): QueryPromise<ListTodoListsData, undefined>;

interface UpdateTodoListRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateTodoListVariables): MutationRef<UpdateTodoListData, UpdateTodoListVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateTodoListVariables): MutationRef<UpdateTodoListData, UpdateTodoListVariables>;
  operationName: string;
}
export const updateTodoListRef: UpdateTodoListRef;

export function updateTodoList(vars: UpdateTodoListVariables): MutationPromise<UpdateTodoListData, UpdateTodoListVariables>;
export function updateTodoList(dc: DataConnect, vars: UpdateTodoListVariables): MutationPromise<UpdateTodoListData, UpdateTodoListVariables>;

interface GetUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetUserData, undefined>;
  operationName: string;
}
export const getUserRef: GetUserRef;

export function getUser(): QueryPromise<GetUserData, undefined>;
export function getUser(dc: DataConnect): QueryPromise<GetUserData, undefined>;

