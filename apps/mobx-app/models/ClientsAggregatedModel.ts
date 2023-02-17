import { Instance } from "mobx-state-tree"
import { ClientsAggregatedModelBase } from "./ClientsAggregatedModel.base"

/* The TypeScript type of an instance of ClientsAggregatedModel */
export interface ClientsAggregatedModelType extends Instance<typeof ClientsAggregatedModel.Type> {}

/* A graphql query fragment builders for ClientsAggregatedModel */
export { selectFromClientsAggregated, clientsAggregatedModelPrimitives, ClientsAggregatedModelSelector } from "./ClientsAggregatedModel.base"

/**
 * ClientsAggregatedModel
 */
export const ClientsAggregatedModel = ClientsAggregatedModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
