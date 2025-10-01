# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListTodoLists*](#listtodolists)
  - [*GetUser*](#getuser)
- [**Mutations**](#mutations)
  - [*CreateTodoItem*](#createtodoitem)
  - [*UpdateTodoList*](#updatetodolist)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListTodoLists
You can execute the `ListTodoLists` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listTodoLists(): QueryPromise<ListTodoListsData, undefined>;

interface ListTodoListsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListTodoListsData, undefined>;
}
export const listTodoListsRef: ListTodoListsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listTodoLists(dc: DataConnect): QueryPromise<ListTodoListsData, undefined>;

interface ListTodoListsRef {
  ...
  (dc: DataConnect): QueryRef<ListTodoListsData, undefined>;
}
export const listTodoListsRef: ListTodoListsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listTodoListsRef:
```typescript
const name = listTodoListsRef.operationName;
console.log(name);
```

### Variables
The `ListTodoLists` query has no variables.
### Return Type
Recall that executing the `ListTodoLists` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListTodoListsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListTodoListsData {
  todoLists: ({
    id: UUIDString;
    name: string;
    description?: string | null;
    isCompleted?: boolean | null;
  } & TodoList_Key)[];
}
```
### Using `ListTodoLists`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listTodoLists } from '@dataconnect/generated';


// Call the `listTodoLists()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listTodoLists();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listTodoLists(dataConnect);

console.log(data.todoLists);

// Or, you can use the `Promise` API.
listTodoLists().then((response) => {
  const data = response.data;
  console.log(data.todoLists);
});
```

### Using `ListTodoLists`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listTodoListsRef } from '@dataconnect/generated';


// Call the `listTodoListsRef()` function to get a reference to the query.
const ref = listTodoListsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listTodoListsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.todoLists);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.todoLists);
});
```

## GetUser
You can execute the `GetUser` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getUser(): QueryPromise<GetUserData, undefined>;

interface GetUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetUserData, undefined>;
}
export const getUserRef: GetUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getUser(dc: DataConnect): QueryPromise<GetUserData, undefined>;

interface GetUserRef {
  ...
  (dc: DataConnect): QueryRef<GetUserData, undefined>;
}
export const getUserRef: GetUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getUserRef:
```typescript
const name = getUserRef.operationName;
console.log(name);
```

### Variables
The `GetUser` query has no variables.
### Return Type
Recall that executing the `GetUser` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetUserData {
  user?: {
    id: UUIDString;
    username: string;
    email?: string | null;
  } & User_Key;
}
```
### Using `GetUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getUser } from '@dataconnect/generated';


// Call the `getUser()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getUser(dataConnect);

console.log(data.user);

// Or, you can use the `Promise` API.
getUser().then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

### Using `GetUser`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUserRef } from '@dataconnect/generated';


// Call the `getUserRef()` function to get a reference to the query.
const ref = getUserRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getUserRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.user);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateTodoItem
You can execute the `CreateTodoItem` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createTodoItem(): MutationPromise<CreateTodoItemData, undefined>;

interface CreateTodoItemRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateTodoItemData, undefined>;
}
export const createTodoItemRef: CreateTodoItemRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createTodoItem(dc: DataConnect): MutationPromise<CreateTodoItemData, undefined>;

interface CreateTodoItemRef {
  ...
  (dc: DataConnect): MutationRef<CreateTodoItemData, undefined>;
}
export const createTodoItemRef: CreateTodoItemRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createTodoItemRef:
```typescript
const name = createTodoItemRef.operationName;
console.log(name);
```

### Variables
The `CreateTodoItem` mutation has no variables.
### Return Type
Recall that executing the `CreateTodoItem` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateTodoItemData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateTodoItemData {
  todoItem_insert: TodoItem_Key;
}
```
### Using `CreateTodoItem`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createTodoItem } from '@dataconnect/generated';


// Call the `createTodoItem()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createTodoItem();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createTodoItem(dataConnect);

console.log(data.todoItem_insert);

// Or, you can use the `Promise` API.
createTodoItem().then((response) => {
  const data = response.data;
  console.log(data.todoItem_insert);
});
```

### Using `CreateTodoItem`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createTodoItemRef } from '@dataconnect/generated';


// Call the `createTodoItemRef()` function to get a reference to the mutation.
const ref = createTodoItemRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createTodoItemRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.todoItem_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.todoItem_insert);
});
```

## UpdateTodoList
You can execute the `UpdateTodoList` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateTodoList(vars: UpdateTodoListVariables): MutationPromise<UpdateTodoListData, UpdateTodoListVariables>;

interface UpdateTodoListRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateTodoListVariables): MutationRef<UpdateTodoListData, UpdateTodoListVariables>;
}
export const updateTodoListRef: UpdateTodoListRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateTodoList(dc: DataConnect, vars: UpdateTodoListVariables): MutationPromise<UpdateTodoListData, UpdateTodoListVariables>;

interface UpdateTodoListRef {
  ...
  (dc: DataConnect, vars: UpdateTodoListVariables): MutationRef<UpdateTodoListData, UpdateTodoListVariables>;
}
export const updateTodoListRef: UpdateTodoListRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateTodoListRef:
```typescript
const name = updateTodoListRef.operationName;
console.log(name);
```

### Variables
The `UpdateTodoList` mutation requires an argument of type `UpdateTodoListVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateTodoListVariables {
  todoListId: UUIDString;
  isCompleted: boolean;
}
```
### Return Type
Recall that executing the `UpdateTodoList` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateTodoListData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateTodoListData {
  todoList_update?: TodoList_Key | null;
}
```
### Using `UpdateTodoList`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateTodoList, UpdateTodoListVariables } from '@dataconnect/generated';

// The `UpdateTodoList` mutation requires an argument of type `UpdateTodoListVariables`:
const updateTodoListVars: UpdateTodoListVariables = {
  todoListId: ..., 
  isCompleted: ..., 
};

// Call the `updateTodoList()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateTodoList(updateTodoListVars);
// Variables can be defined inline as well.
const { data } = await updateTodoList({ todoListId: ..., isCompleted: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateTodoList(dataConnect, updateTodoListVars);

console.log(data.todoList_update);

// Or, you can use the `Promise` API.
updateTodoList(updateTodoListVars).then((response) => {
  const data = response.data;
  console.log(data.todoList_update);
});
```

### Using `UpdateTodoList`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateTodoListRef, UpdateTodoListVariables } from '@dataconnect/generated';

// The `UpdateTodoList` mutation requires an argument of type `UpdateTodoListVariables`:
const updateTodoListVars: UpdateTodoListVariables = {
  todoListId: ..., 
  isCompleted: ..., 
};

// Call the `updateTodoListRef()` function to get a reference to the mutation.
const ref = updateTodoListRef(updateTodoListVars);
// Variables can be defined inline as well.
const ref = updateTodoListRef({ todoListId: ..., isCompleted: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateTodoListRef(dataConnect, updateTodoListVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.todoList_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.todoList_update);
});
```

