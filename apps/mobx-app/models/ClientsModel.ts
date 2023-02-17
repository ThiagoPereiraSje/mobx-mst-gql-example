import { Instance } from "mobx-state-tree"
import { ClientsModelBase } from "./ClientsModel.base"

/* The TypeScript type of an instance of ClientsModel */
export interface ClientsModelType extends Instance<typeof ClientsModel.Type> {}

/* A graphql query fragment builders for ClientsModel */
export { selectFromClients, clientsModelPrimitives, ClientsModelSelector } from "./ClientsModel.base"

/**
 * ClientsModel
 */
export const ClientsModel = ClientsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
