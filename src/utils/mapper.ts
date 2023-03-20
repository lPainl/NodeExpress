import { Collection, Entity } from '../types'
import { parseCollection, parseDescription, parseId, parseStatus } from './parse'

export const mapEntity = (entityReq: any): Entity => {
    return {
        id: parseId(entityReq.id),
        description: parseDescription(entityReq.description),
        status: parseStatus(entityReq.status),
    }
}

export const mapCollection = (collectionReq: any): Collection => {
    return parseCollection(collectionReq)
}
