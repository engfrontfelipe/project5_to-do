import { PriorityEnum, StatusEnum } from "../utils/enums/Tasks"

class Task{
    title: string
    priority: PriorityEnum
    status: StatusEnum
    description: string
    id: number
    static id: any

    constructor(
        title: string,
        priority: PriorityEnum,
        status: StatusEnum,
        description: string,
        id: number
    ){
        this.title = title
        this.priority = priority
        this.status = status
        this.description = description
        this.id = id

    }


}

export default Task