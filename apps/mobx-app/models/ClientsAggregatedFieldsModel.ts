import { Instance } from "mobx-state-tree"
import { ClientsAggregatedFieldsModelBase } from "./ClientsAggregatedFieldsModel.base"

/* The TypeScript type of an instance of ClientsAggregatedFieldsModel */
export interface ClientsAggregatedFieldsModelType extends Instance<typeof ClientsAggregatedFieldsModel.Type> {}

/* A graphql query fragment builders for ClientsAggregatedFieldsModel */
export { selectFromClientsAggregatedFields, clientsAggregatedFieldsModelPrimitives, ClientsAggregatedFieldsModelSelector } from "./ClientsAggregatedFieldsModel.base"

/**
 * ClientsAggregatedFieldsModel
 */
export const ClientsAggregatedFieldsModel = ClientsAggregatedFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
