import { Instance } from "mobx-state-tree"
import { DeleteManyModelBase } from "./DeleteManyModel.base"

/* The TypeScript type of an instance of DeleteManyModel */
export interface DeleteManyModelType extends Instance<typeof DeleteManyModel.Type> {}

/* A graphql query fragment builders for DeleteManyModel */
export { selectFromDeleteMany, deleteManyModelPrimitives, DeleteManyModelSelector } from "./DeleteManyModel.base"

/**
 * DeleteManyModel
 */
export const DeleteManyModel = DeleteManyModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
