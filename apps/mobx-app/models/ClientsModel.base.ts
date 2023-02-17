/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * ClientsBase
 * auto generated base class for the model ClientsModel.
 */
export const ClientsModelBase = ModelBase
  .named('Clients')
  .props({
    __typename: types.optional(types.literal("clients"), "clients"),
    id: types.identifier,
    name: types.union(types.undefined, types.null, types.string),
    description: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ClientsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  get description() { return this.__attr(`description`) }
}
export function selectFromClients() {
  return new ClientsModelSelector()
}

export const clientsModelPrimitives = selectFromClients().name.description
