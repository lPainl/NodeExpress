import { Status } from '../types'

export const isNumber = (numberReq: any) => {
    return typeof numberReq === 'number' && !isNaN(numberReq)
}
export const isString = (stringReq: any) => {
    return typeof stringReq === 'string' || stringReq instanceof String
}

export const isDate = (dateReq: any): boolean => {
    return Boolean(Date.parse(dateReq))
}

export const isArray = (arrayReq: any): boolean => {
    return arrayReq instanceof Array
}

export const isStatus = (statusReq: any): boolean => {
    return Object.values(Status).includes(statusReq)
}
