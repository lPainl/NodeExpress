import { isArray, isNumber, isStatus, isString } from './validators'
import { Collection, Entity } from '../types'
import { mapEntity } from './mapper'

export const parseId = (idReq: any) => {
    if (!isNumber(idReq) || idReq <= 0) {
        throw Error('Invalid Id')
    }
    return idReq
}

export const parseDescription = (descriptionReq: any) => {
    if (!isString(descriptionReq)) {
        throw Error('Invalid Description')
    }
    return descriptionReq
}

export const parseStatus = (statusReq: any) => {
    if (!isString(statusReq) || !isStatus(statusReq)) {
        throw Error('Invalid Status')
    }
    return statusReq
}

export const parseCollection = (collectionReq: any): Collection => {
    if (!isArray(collectionReq)) {
        throw Error('Invalid Status')
    }
    const newCollection: Collection = []
    collectionReq.map((entity: Entity) => {
        newCollection.push(mapEntity(entity))
    })
    return newCollection
}
