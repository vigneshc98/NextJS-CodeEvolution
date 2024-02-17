"use client"
export default function ErrorHandler({error, reset}: {
    error: Error,
    reset: ()=> void;
}){
    return <>
    <h1>{error.message}</h1>
    <button onClick={reset}>retry</button>
    </>
}