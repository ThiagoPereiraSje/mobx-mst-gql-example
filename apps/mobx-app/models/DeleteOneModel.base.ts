/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * DeleteOneBase
 * auto generated base class for the model DeleteOneModel.
 */
export const DeleteOneModelBase = ModelBase
  .named('DeleteOne')
  .props({
    __typename: types.optional(types.literal("delete_one"), "delete_one"),
    id: types.identifier,
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class DeleteOneModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromDeleteOne() {
  return new DeleteOneModelSelector()
}

export const deleteOneModelPrimitives = selectFromDeleteOne()
