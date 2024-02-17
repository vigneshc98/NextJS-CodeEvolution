import { Metadata } from "next";

type props = {
    params: {productId: string}
}

export const generateMetadata = async ({params}: props) : Promise<Metadata> =>{  //adding Promise<Metadata> for better intellisence
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`iPhone ${params.productId}`)
        }, 100);
    });
    return {
        title : `Product ${title}`,
        description: 'iPhone description'
    }
}

export default function Products({params}: props){
    return (
        <>
        <h1>Product Details of product {params.productId} </h1>
        </>
    );
}