import { Instance } from "mobx-state-tree"
import { ClientsAggregatedCountModelBase } from "./ClientsAggregatedCountModel.base"

/* The TypeScript type of an instance of ClientsAggregatedCountModel */
export interface ClientsAggregatedCountModelType extends Instance<typeof ClientsAggregatedCountModel.Type> {}

/* A graphql query fragment builders for ClientsAggregatedCountModel */
export { selectFromClientsAggregatedCount, clientsAggregatedCountModelPrimitives, ClientsAggregatedCountModelSelector } from "./ClientsAggregatedCountModel.base"

/**
 * ClientsAggregatedCountModel
 */
export const ClientsAggregatedCountModel = ClientsAggregatedCountModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
