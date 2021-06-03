export interface EntradasBlog{
    id: string
    title: string
    date: string
    author: string
    content: string
    tags: string
    img: string
    comments: [{usuario:string, comentario:string}]
}