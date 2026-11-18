import {Props} from "@/components/userDetails/UserDetails";
import {getAllCommentById} from "@/services/api.service";

export const CommentDetails = async ({params}:Props) => {
    const {id}=await params;
    const comment=await getAllCommentById(id);
    return (
        <div  className={'user-details'}><h1>{comment.name}-Post id:{comment.postId}</h1>
            <p>{comment.body}</p>
            <p>Email: {comment.email}</p>
        </div>
    );
};
