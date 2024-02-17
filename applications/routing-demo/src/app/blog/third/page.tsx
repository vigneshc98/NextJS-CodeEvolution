import { Metadata } from "next"

export const metadata : Metadata = {
    title : {
        absolute: 'Third Blog'
    }
}

export default function SecondBlog(){
    return <h1>Second Blog</h1>
}