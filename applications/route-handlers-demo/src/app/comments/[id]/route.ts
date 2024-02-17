import { redirect } from "next/navigation";
import { comments } from "../comments";

//Get comment by id
export async function GET(_request: Request, {params}:{ params: {id : string}}){
    if(parseInt(params.id )> comments.length){
        redirect('/comments');
    }
    const result = comments.find((comment)=> comment.id === parseInt(params.id));
    return Response.json(result);
}

//Update comment
export async function PATCH(request: Request, {params}:{ params: {id : string}}){
    const {text} = await request.json();
    const index = comments.findIndex((comment)=> comment.id === parseInt(params.id));
    comments[index].text = text;
    return Response.json(comments[index]);
}


//delete comment
export async function DELETE(_request: Request, {params}:{ params: {id : string}}){
    const index = comments.findIndex((comment)=> comment.id === parseInt(params.id));
    comments.splice(index, 1);
    return Response.json(comments[index]);
}