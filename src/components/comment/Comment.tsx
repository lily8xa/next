import {FC} from "react";
import {CommentType} from "@/models/CommentType";
import Link from "next/link";

export const Comment:FC<CommentType> = ({id,name}) => {
    return (
        <div className={'main-user'}><Link href={'/comments/'+id.toString()}>{name}</Link></div>
    );
};
