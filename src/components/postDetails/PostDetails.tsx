import {Props} from "@/components/userDetails/UserDetails";
import {getAllPostById} from "@/services/api.service";

export const PostDetails =async ({params}:Props) => {
    const {id}=await params;
    const post=await getAllPostById(id)
    return (
        <div className={'user-details'}><h1>{post.title} User{post.userId}</h1>
            <p>{post.body}</p>
        </div>
    );
};
