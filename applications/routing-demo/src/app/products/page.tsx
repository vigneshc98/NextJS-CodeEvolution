import Link from "next/link";

export default function Products(){
    const productId = 100;
    return (
        <>
        <h1>Product Details</h1>
        <h1><Link href="products/1" replace>Product 1</Link></h1>
        <h1><Link href={`products/${productId}`}>Product {productId}</Link></h1>
        </>
    );
}