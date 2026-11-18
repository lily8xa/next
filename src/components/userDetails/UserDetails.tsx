import {getAllUserById} from "@/services/api.service";
import './UserDetail.css'

export type Props = {
    params: Promise<{ id: string }>;
};

export const UserDetails = async ({ params }: Props) => {
    const { id } = await params;
    const user = await getAllUserById(id);

    return (
        <div className={'user-details'}>
            <p>{id}-{user.username}</p>
            <p>Email:{user.email}, name:{user.name}</p>
            <p>Website:{user.website}</p>
            <p>Address:{user.address.city}, Street-{user.address.street}</p>
            <p>Phone:{user.phone}</p>
        </div>
    );
};
