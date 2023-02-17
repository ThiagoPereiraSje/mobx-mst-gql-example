/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * ClientsAggregatedFieldsBase
 * auto generated base class for the model ClientsAggregatedFieldsModel.
 */
export const ClientsAggregatedFieldsModelBase = ModelBase
  .named('ClientsAggregatedFields')
  .props({
    __typename: types.optional(types.literal("clients_aggregated_fields"), "clients_aggregated_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ClientsAggregatedFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromClientsAggregatedFields() {
  return new ClientsAggregatedFieldsModelSelector()
}

export const clientsAggregatedFieldsModelPrimitives = selectFromClientsAggregatedFields()
