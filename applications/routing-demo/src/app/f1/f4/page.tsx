import Link from "next/link";

export default function F4(){
    return <>
    <h1>F4</h1>
    <Link href="f3">F3</Link>
    <div><Link href="../about">About</Link></div>
    </>
}