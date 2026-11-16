import {FC} from "react";
import {UserType} from "@/models/UserType";

 const UserPage:FC<UserType> = async ({id}) => {
// const {id}=await id;
    return (
        <div>{id}</div>
    );
};
export default UserPage
