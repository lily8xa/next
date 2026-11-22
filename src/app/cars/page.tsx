import {Cars} from "@/components/cars/Cars";
import {Metadata} from "next";
export const generateMetadata=async ():Promise<Metadata>=>{
    return {title:'All Cars'}
}

const carView=async ()=>{
return(<><Cars/></>)
}
export default carView;
