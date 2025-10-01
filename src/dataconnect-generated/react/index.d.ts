import { CreateTodoItemData, ListTodoListsData, UpdateTodoListData, UpdateTodoListVariables, GetUserData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateTodoItem(options?: useDataConnectMutationOptions<CreateTodoItemData, FirebaseError, void>): UseDataConnectMutationResult<CreateTodoItemData, undefined>;
export function useCreateTodoItem(dc: DataConnect, options?: useDataConnectMutationOptions<CreateTodoItemData, FirebaseError, void>): UseDataConnectMutationResult<CreateTodoItemData, undefined>;

export function useListTodoLists(options?: useDataConnectQueryOptions<ListTodoListsData>): UseDataConnectQueryResult<ListTodoListsData, undefined>;
export function useListTodoLists(dc: DataConnect, options?: useDataConnectQueryOptions<ListTodoListsData>): UseDataConnectQueryResult<ListTodoListsData, undefined>;

export function useUpdateTodoList(options?: useDataConnectMutationOptions<UpdateTodoListData, FirebaseError, UpdateTodoListVariables>): UseDataConnectMutationResult<UpdateTodoListData, UpdateTodoListVariables>;
export function useUpdateTodoList(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateTodoListData, FirebaseError, UpdateTodoListVariables>): UseDataConnectMutationResult<UpdateTodoListData, UpdateTodoListVariables>;

export function useGetUser(options?: useDataConnectQueryOptions<GetUserData>): UseDataConnectQueryResult<GetUserData, undefined>;
export function useGetUser(dc: DataConnect, options?: useDataConnectQueryOptions<GetUserData>): UseDataConnectQueryResult<GetUserData, undefined>;
