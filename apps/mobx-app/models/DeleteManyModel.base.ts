/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * DeleteManyBase
 * auto generated base class for the model DeleteManyModel.
 */
export const DeleteManyModelBase = ModelBase
  .named('DeleteMany')
  .props({
    __typename: types.optional(types.literal("delete_many"), "delete_many"),
    ids: types.union(types.undefined, types.array(types.identifier)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class DeleteManyModelSelector extends QueryBuilder {
  get ids() { return this.__attr(`ids`) }
}
export function selectFromDeleteMany() {
  return new DeleteManyModelSelector()
}

export const deleteManyModelPrimitives = selectFromDeleteMany().ids
