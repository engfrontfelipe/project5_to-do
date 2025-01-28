class Task{
    title: string
    priority: string
    status: string
    description: string
    id: number
    static id: any

    constructor(
        title: string,
        priority: string,
        status: string,
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