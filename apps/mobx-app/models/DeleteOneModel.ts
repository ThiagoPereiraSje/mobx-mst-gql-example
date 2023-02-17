import { Instance } from "mobx-state-tree"
import { DeleteOneModelBase } from "./DeleteOneModel.base"

/* The TypeScript type of an instance of DeleteOneModel */
export interface DeleteOneModelType extends Instance<typeof DeleteOneModel.Type> {}

/* A graphql query fragment builders for DeleteOneModel */
export { selectFromDeleteOne, deleteOneModelPrimitives, DeleteOneModelSelector } from "./DeleteOneModel.base"

/**
 * DeleteOneModel
 */
export const DeleteOneModel = DeleteOneModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
