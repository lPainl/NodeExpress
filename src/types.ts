export enum Status {
    Pending = 'pending',
    Uncompleted = 'uncompleted',
    Completed = 'completed',
}

export interface Entity {
    id: number
    description: string
    status: Status
}

export type Collection = Entity[]
