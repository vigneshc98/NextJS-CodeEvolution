import Link from "next/link";

export default function Home(){
    return <>
    <h1>Welcom home!</h1>
    <h1><Link href="blog">Blogs</Link></h1>
    <h1><Link href="products">Products</Link></h1>
    <h1><Link href="order-product">Order Product</Link></h1>
    <h1><Link href="complex-dashboard">Complex DashBoard</Link></h1>
    </>;
}