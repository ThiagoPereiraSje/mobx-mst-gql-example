/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * ClientsAggregatedCountBase
 * auto generated base class for the model ClientsAggregatedCountModel.
 */
export const ClientsAggregatedCountModelBase = ModelBase
  .named('ClientsAggregatedCount')
  .props({
    __typename: types.optional(types.literal("clients_aggregated_count"), "clients_aggregated_count"),
    id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.integer),
    description: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ClientsAggregatedCountModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  get description() { return this.__attr(`description`) }
}
export function selectFromClientsAggregatedCount() {
  return new ClientsAggregatedCountModelSelector()
}

export const clientsAggregatedCountModelPrimitives = selectFromClientsAggregatedCount().name.description
