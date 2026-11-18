import {getAllUsers} from "@/services/api.service";
import {User} from "@/components/user/User";
import {Metadata} from "next";

export const generateMetadata=async ():Promise<Metadata>=>{
    return {title:'All Users'}
}
const UsersPage = async () => {
    const users = await getAllUsers();
    console.log(users);

    return (
        <div>
            {users.map((user) => (
                <User key={user.id} {...user}/>
            ))}
        </div>
    );
};

export default UsersPage;
