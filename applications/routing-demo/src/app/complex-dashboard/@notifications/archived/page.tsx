import Card from "@/components/card";
import Link from "next/link";

export default function ArchivedNotification(){
    return <>
    <Card><div>
       <div> Archived Notification</div>
        <Link href="/complex-dashboard">default</Link>
        </div></Card>
    </>
}