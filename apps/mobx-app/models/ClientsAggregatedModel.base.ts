/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ClientsAggregatedCountModel, ClientsAggregatedCountModelType } from "./ClientsAggregatedCountModel"
import { ClientsAggregatedCountModelSelector } from "./ClientsAggregatedCountModel.base"
import { ClientsAggregatedFieldsModel, ClientsAggregatedFieldsModelType } from "./ClientsAggregatedFieldsModel"
import { ClientsAggregatedFieldsModelSelector } from "./ClientsAggregatedFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * ClientsAggregatedBase
 * auto generated base class for the model ClientsAggregatedModel.
 */
export const ClientsAggregatedModelBase = ModelBase
  .named('ClientsAggregated')
  .props({
    __typename: types.optional(types.literal("clients_aggregated"), "clients_aggregated"),
    group: types.union(types.undefined, types.null, types.frozen()),
    countAll: types.union(types.undefined, types.null, types.integer),
    count: types.union(types.undefined, types.null, types.late((): any => ClientsAggregatedCountModel)),
    countDistinct: types.union(types.undefined, types.null, types.late((): any => ClientsAggregatedCountModel)),
    avg: types.union(types.undefined, types.null, types.late((): any => ClientsAggregatedFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => ClientsAggregatedFieldsModel)),
    avgDistinct: types.union(types.undefined, types.null, types.late((): any => ClientsAggregatedFieldsModel)),
    sumDistinct: types.union(types.undefined, types.null, types.late((): any => ClientsAggregatedFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => ClientsAggregatedFieldsModel)),
    max: types.union(types.undefined, types.null, types.late((): any => ClientsAggregatedFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ClientsAggregatedModelSelector extends QueryBuilder {
  get group() { return this.__attr(`group`) }
  get countAll() { return this.__attr(`countAll`) }
  count(builder: string | ClientsAggregatedCountModelSelector | ((selector: ClientsAggregatedCountModelSelector) => ClientsAggregatedCountModelSelector) | undefined) { return this.__child(`count`, ClientsAggregatedCountModelSelector, builder) }
  countDistinct(builder: string | ClientsAggregatedCountModelSelector | ((selector: ClientsAggregatedCountModelSelector) => ClientsAggregatedCountModelSelector) | undefined) { return this.__child(`countDistinct`, ClientsAggregatedCountModelSelector, builder) }
  avg(builder: string | ClientsAggregatedFieldsModelSelector | ((selector: ClientsAggregatedFieldsModelSelector) => ClientsAggregatedFieldsModelSelector) | undefined) { return this.__child(`avg`, ClientsAggregatedFieldsModelSelector, builder) }
  sum(builder: string | ClientsAggregatedFieldsModelSelector | ((selector: ClientsAggregatedFieldsModelSelector) => ClientsAggregatedFieldsModelSelector) | undefined) { return this.__child(`sum`, ClientsAggregatedFieldsModelSelector, builder) }
  avgDistinct(builder: string | ClientsAggregatedFieldsModelSelector | ((selector: ClientsAggregatedFieldsModelSelector) => ClientsAggregatedFieldsModelSelector) | undefined) { return this.__child(`avgDistinct`, ClientsAggregatedFieldsModelSelector, builder) }
  sumDistinct(builder: string | ClientsAggregatedFieldsModelSelector | ((selector: ClientsAggregatedFieldsModelSelector) => ClientsAggregatedFieldsModelSelector) | undefined) { return this.__child(`sumDistinct`, ClientsAggregatedFieldsModelSelector, builder) }
  min(builder: string | ClientsAggregatedFieldsModelSelector | ((selector: ClientsAggregatedFieldsModelSelector) => ClientsAggregatedFieldsModelSelector) | undefined) { return this.__child(`min`, ClientsAggregatedFieldsModelSelector, builder) }
  max(builder: string | ClientsAggregatedFieldsModelSelector | ((selector: ClientsAggregatedFieldsModelSelector) => ClientsAggregatedFieldsModelSelector) | undefined) { return this.__child(`max`, ClientsAggregatedFieldsModelSelector, builder) }
}
export function selectFromClientsAggregated() {
  return new ClientsAggregatedModelSelector()
}

export const clientsAggregatedModelPrimitives = selectFromClientsAggregated().group.countAll
