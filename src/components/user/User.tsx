import {FC} from "react";
import {UserType} from "@/models/UserType";
import Link from "next/link";

export const User:FC<UserType>=({id,name,username})=> {
    return (
        <div key={id}><Link href={'/users'+id.toString()}>{name} {username}</Link></div>
    );
}
