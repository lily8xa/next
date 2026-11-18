import {FC} from "react";
import {UserType} from "@/models/UserType";
import Link from "next/link";
import './User.css'

export const User:FC<UserType>=({id,name,username})=> {
    return (
        <div className={'main-user'} key={id}><Link href={'/users/'+id.toString()}>{name} {username}</Link></div>
    );
}
