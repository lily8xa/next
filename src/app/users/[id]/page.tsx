import {Suspense} from "react";
import {Props, UserDetails} from "@/components/userDetails/UserDetails";


const Page = ({ params }: Props) => {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <UserDetails params={params}/>
        </Suspense>
    );
};

export default Page;
