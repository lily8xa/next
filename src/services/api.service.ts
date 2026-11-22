import {UserType} from "@/models/UserType";
import {PostType} from "@/models/PostType";
import {CommentType} from "@/models/CommentType";

const baseUrls='https://jsonplaceholder.typicode.com';

export const getAllUsers = async (): Promise<UserType[]> => {
    'use cache';
    const response = await fetch(`${baseUrls}/users`);

    if (!response.ok) {
        throw new Error('no users');
    }

    return await response.json();
};
export const getAllUserById=async (id:string): Promise<UserType> => {
    const response = await fetch(`${baseUrls}/users/${id}`);
    if(!response.ok){
        throw new Error('no user by id')
    }
    return await response.json();
};
export const getAllPosts=async (): Promise<PostType[]> => {
    'use cache'
    const response = await fetch(`${baseUrls}/posts`);
    if(!response.ok){
        throw new Error('no posts');
    }
    return await response.json();
}
export const getAllPostById=async (id:string): Promise<PostType> => {
    const response=await fetch(`${baseUrls}/posts/${id}`);
    if(!response.ok){
        throw new Error('no post by id')
    }
    return await response.json();
}
export const getAllComments=async (): Promise<CommentType[]> => {
    'use cache'
    const response=await fetch(`${baseUrls}/comments`);
    if (!response.ok){
        throw new Error('no comments');
    }
    return await response.json();
}
export const getAllCommentById=async (id:string): Promise<CommentType> => {
    const response = await fetch(`${baseUrls}/comments/${id}`);
    if (!response.ok){
        throw new Error('no comment by id')
    }
    return await response.json();
}
