import collectionData from './../database/collection.json'
import { Collection, Entity } from '../types'

const collection: Collection = collectionData as Collection

export default class TemplateService {
    public static async getCollection(): Promise<Collection> {
        return Promise.resolve(collection)
    }

    public static async createCollection(collectionToCreate: Collection): Promise<Collection> {
        // insert Data
        return Promise.resolve(collectionToCreate)
    }

    public static async updateCollection(collectionToUpdate: Collection): Promise<Collection> {
        // update Data
        return Promise.resolve(collectionToUpdate)
    }

    public static async deleteCollection(collectionId: string): Promise<void> {
        // delete Data
        return Promise.resolve()
    }

    public static async getEntity(id: number): Promise<Entity | undefined> {
        return collection.find((item) => item.id === id)
    }

    public static async createEntity(entity: Entity): Promise<Entity> {
        // save Entity
        return entity
    }
}
