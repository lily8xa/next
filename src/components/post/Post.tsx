import {FC} from "react";
import {PostType} from "@/models/PostType";
import Link from "next/link";

export const Post:FC<PostType>=({id,title})=>{
    return(
        <div className={'main-user'}><Link href={'/posts/'+id.toString()}>{title}</Link></div>
    )
}
