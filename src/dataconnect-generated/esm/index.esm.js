import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'todoredux',
  location: 'us-central1'
};

export const createTodoItemRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateTodoItem');
}
createTodoItemRef.operationName = 'CreateTodoItem';

export function createTodoItem(dc) {
  return executeMutation(createTodoItemRef(dc));
}

export const listTodoListsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListTodoLists');
}
listTodoListsRef.operationName = 'ListTodoLists';

export function listTodoLists(dc) {
  return executeQuery(listTodoListsRef(dc));
}

export const updateTodoListRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateTodoList', inputVars);
}
updateTodoListRef.operationName = 'UpdateTodoList';

export function updateTodoList(dcOrVars, vars) {
  return executeMutation(updateTodoListRef(dcOrVars, vars));
}

export const getUserRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUser');
}
getUserRef.operationName = 'GetUser';

export function getUser(dc) {
  return executeQuery(getUserRef(dc));
}

