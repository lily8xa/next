import {Suspense} from "react";
import {Props, UserDetails} from "@/components/userDetails/UserDetails";
import {Metadata} from "next";

export const generateMetadata=async ({params}:Props):Promise<Metadata>=>{
    const {id}=await params;
    return {title:'About User '+id}
}
const Page = ({ params }: Props) => {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <UserDetails params={params}/>
        </Suspense>
    );
};

export default Page;
