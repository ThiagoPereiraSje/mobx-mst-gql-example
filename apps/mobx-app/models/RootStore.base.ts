/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { ObservableMap } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin, QueryOptions, withTypedRefs } from "mst-gql"

import { ClientsModel, ClientsModelType } from "./ClientsModel"
import { clientsModelPrimitives, ClientsModelSelector } from "./ClientsModel.base"
import { ClientsAggregatedModel, ClientsAggregatedModelType } from "./ClientsAggregatedModel"
import { clientsAggregatedModelPrimitives, ClientsAggregatedModelSelector } from "./ClientsAggregatedModel.base"
import { ClientsAggregatedCountModel, ClientsAggregatedCountModelType } from "./ClientsAggregatedCountModel"
import { clientsAggregatedCountModelPrimitives, ClientsAggregatedCountModelSelector } from "./ClientsAggregatedCountModel.base"
import { ClientsAggregatedFieldsModel, ClientsAggregatedFieldsModelType } from "./ClientsAggregatedFieldsModel"
import { clientsAggregatedFieldsModelPrimitives, ClientsAggregatedFieldsModelSelector } from "./ClientsAggregatedFieldsModel.base"
import { DeleteManyModel, DeleteManyModelType } from "./DeleteManyModel"
import { deleteManyModelPrimitives, DeleteManyModelSelector } from "./DeleteManyModel.base"
import { DeleteOneModel, DeleteOneModelType } from "./DeleteOneModel"
import { deleteOneModelPrimitives, DeleteOneModelSelector } from "./DeleteOneModel.base"



export type ClientsFilter = {
  id?: (NumberFilterOperators | null)
  name?: (StringFilterOperators | null)
  description?: (StringFilterOperators | null)
  _and?: (ClientsFilter | null)[]
  _or?: (ClientsFilter | null)[]
}
export type NumberFilterOperators = {
  _eq?: (any | null)
  _neq?: (any | null)
  _in?: (any | null)[]
  _nin?: (any | null)[]
  _gt?: (any | null)
  _gte?: (any | null)
  _lt?: (any | null)
  _lte?: (any | null)
  _null?: (boolean | null)
  _nnull?: (boolean | null)
  _between?: (any | null)[]
  _nbetween?: (any | null)[]
}
export type StringFilterOperators = {
  _eq?: (string | null)
  _neq?: (string | null)
  _contains?: (string | null)
  _icontains?: (string | null)
  _ncontains?: (string | null)
  _starts_with?: (string | null)
  _nstarts_with?: (string | null)
  _ends_with?: (string | null)
  _nends_with?: (string | null)
  _in?: (string | null)[]
  _nin?: (string | null)[]
  _null?: (boolean | null)
  _nnull?: (boolean | null)
  _empty?: (boolean | null)
  _nempty?: (boolean | null)
}
export type CreateClientsInput = {
  id?: (string | null)
  name?: (string | null)
  description?: (string | null)
}
export type UpdateClientsInput = {
  id?: (string | null)
  name?: (string | null)
  description?: (string | null)
}
/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  clients: ObservableMap<string, ClientsModelType>,
  deleteOnes: ObservableMap<string, DeleteOneModelType>
}


/**
* Enums for the names of base graphql actions
*/
export enum RootStoreBaseQueries {
queryClients="queryClients",
queryClients_by_id="queryClients_by_id",
queryClients_aggregated="queryClients_aggregated"
}
export enum RootStoreBaseMutations {
mutateCreate_clients_items="mutateCreate_clients_items",
mutateCreate_clients_item="mutateCreate_clients_item",
mutateUpdate_clients_items="mutateUpdate_clients_items",
mutateUpdate_clients_batch="mutateUpdate_clients_batch",
mutateUpdate_clients_item="mutateUpdate_clients_item",
mutateDelete_clients_items="mutateDelete_clients_items",
mutateDelete_clients_item="mutateDelete_clients_item"
}

/**
* Store, managing, among others, all the objects received through graphQL
*/
export const RootStoreBase = withTypedRefs<Refs>()(MSTGQLStore
  .named("RootStore")
  .extend(configureStoreMixin([['clients', () => ClientsModel], ['clients_aggregated', () => ClientsAggregatedModel], ['clients_aggregated_count', () => ClientsAggregatedCountModel], ['clients_aggregated_fields', () => ClientsAggregatedFieldsModel], ['delete_many', () => DeleteManyModel], ['delete_one', () => DeleteOneModel]], ['clients', 'delete_one'], "js"))
  .props({
    clients: types.optional(types.map(types.late((): any => ClientsModel)), {}),
    deleteOnes: types.optional(types.map(types.late((): any => DeleteOneModel)), {})
  })
  .actions(self => ({
    queryClients(variables: { filter?: (ClientsFilter | null), sort?: (string | null)[], limit?: (number | null), offset?: (number | null), page?: (number | null), search?: (string | null) }, resultSelector: string | ((qb: ClientsModelSelector) => ClientsModelSelector) = clientsModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ clients: ClientsModelType[]}>(`query clients($filter: clients_filter, $sort: [String], $limit: Int, $offset: Int, $page: Int, $search: String) { clients(filter: $filter, sort: $sort, limit: $limit, offset: $offset, page: $page, search: $search) {
        ${typeof resultSelector === "function" ? resultSelector(new ClientsModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryClients_by_id(variables: { id: string }, resultSelector: string | ((qb: ClientsModelSelector) => ClientsModelSelector) = clientsModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ clients_by_id: ClientsModelType}>(`query clients_by_id($id: ID!) { clients_by_id(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new ClientsModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryClients_aggregated(variables: { groupBy?: (string | null)[], filter?: (ClientsFilter | null), limit?: (number | null), search?: (string | null), sort?: (string | null)[] }, resultSelector: string | ((qb: ClientsAggregatedModelSelector) => ClientsAggregatedModelSelector) = clientsAggregatedModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ clients_aggregated: ClientsAggregatedModelType[]}>(`query clients_aggregated($groupBy: [String], $filter: clients_filter, $limit: Int, $search: String, $sort: [String]) { clients_aggregated(groupBy: $groupBy, filter: $filter, limit: $limit, search: $search, sort: $sort) {
        ${typeof resultSelector === "function" ? resultSelector(new ClientsAggregatedModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    mutateCreate_clients_items(variables: { filter?: (ClientsFilter | null), sort?: (string | null)[], limit?: (number | null), offset?: (number | null), page?: (number | null), search?: (string | null), data?: CreateClientsInput[] }, resultSelector: string | ((qb: ClientsModelSelector) => ClientsModelSelector) = clientsModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ create_clients_items: ClientsModelType[]}>(`mutation create_clients_items($filter: clients_filter, $sort: [String], $limit: Int, $offset: Int, $page: Int, $search: String, $data: [create_clients_input!]) { create_clients_items(filter: $filter, sort: $sort, limit: $limit, offset: $offset, page: $page, search: $search, data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new ClientsModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreate_clients_item(variables: { data: CreateClientsInput }, resultSelector: string | ((qb: ClientsModelSelector) => ClientsModelSelector) = clientsModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ create_clients_item: ClientsModelType}>(`mutation create_clients_item($data: create_clients_input!) { create_clients_item(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new ClientsModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdate_clients_items(variables: { filter?: (ClientsFilter | null), sort?: (string | null)[], limit?: (number | null), offset?: (number | null), page?: (number | null), search?: (string | null), ids?: (string | null)[], data: UpdateClientsInput }, resultSelector: string | ((qb: ClientsModelSelector) => ClientsModelSelector) = clientsModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ update_clients_items: ClientsModelType[]}>(`mutation update_clients_items($filter: clients_filter, $sort: [String], $limit: Int, $offset: Int, $page: Int, $search: String, $ids: [ID]!, $data: update_clients_input!) { update_clients_items(filter: $filter, sort: $sort, limit: $limit, offset: $offset, page: $page, search: $search, ids: $ids, data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new ClientsModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdate_clients_batch(variables: { filter?: (ClientsFilter | null), sort?: (string | null)[], limit?: (number | null), offset?: (number | null), page?: (number | null), search?: (string | null), data?: UpdateClientsInput[] }, resultSelector: string | ((qb: ClientsModelSelector) => ClientsModelSelector) = clientsModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ update_clients_batch: ClientsModelType[]}>(`mutation update_clients_batch($filter: clients_filter, $sort: [String], $limit: Int, $offset: Int, $page: Int, $search: String, $data: [update_clients_input!]) { update_clients_batch(filter: $filter, sort: $sort, limit: $limit, offset: $offset, page: $page, search: $search, data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new ClientsModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdate_clients_item(variables: { id: string, data: UpdateClientsInput }, resultSelector: string | ((qb: ClientsModelSelector) => ClientsModelSelector) = clientsModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ update_clients_item: ClientsModelType}>(`mutation update_clients_item($id: ID!, $data: update_clients_input!) { update_clients_item(id: $id, data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new ClientsModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDelete_clients_items(variables: { ids?: (string | null)[] }, resultSelector: string | ((qb: DeleteManyModelSelector) => DeleteManyModelSelector) = deleteManyModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ delete_clients_items: DeleteManyModelType}>(`mutation delete_clients_items($ids: [ID]!) { delete_clients_items(ids: $ids) {
        ${typeof resultSelector === "function" ? resultSelector(new DeleteManyModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDelete_clients_item(variables: { id: string }, resultSelector: string | ((qb: DeleteOneModelSelector) => DeleteOneModelSelector) = deleteOneModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ delete_clients_item: DeleteOneModelType}>(`mutation delete_clients_item($id: ID!) { delete_clients_item(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new DeleteOneModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
  })))
