const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'todoredux',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

const createTodoItemRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateTodoItem');
}
createTodoItemRef.operationName = 'CreateTodoItem';
exports.createTodoItemRef = createTodoItemRef;

exports.createTodoItem = function createTodoItem(dc) {
  return executeMutation(createTodoItemRef(dc));
};

const listTodoListsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListTodoLists');
}
listTodoListsRef.operationName = 'ListTodoLists';
exports.listTodoListsRef = listTodoListsRef;

exports.listTodoLists = function listTodoLists(dc) {
  return executeQuery(listTodoListsRef(dc));
};

const updateTodoListRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateTodoList', inputVars);
}
updateTodoListRef.operationName = 'UpdateTodoList';
exports.updateTodoListRef = updateTodoListRef;

exports.updateTodoList = function updateTodoList(dcOrVars, vars) {
  return executeMutation(updateTodoListRef(dcOrVars, vars));
};

const getUserRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUser');
}
getUserRef.operationName = 'GetUser';
exports.getUserRef = getUserRef;

exports.getUser = function getUser(dc) {
  return executeQuery(getUserRef(dc));
};
