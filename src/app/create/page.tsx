import {Metadata} from "next";
import {CreateCar} from "@/components/createCar/CreateCar";

export const generateMetadata=async ():Promise<Metadata>=>{
    return {title:'Create Car'}
}

const CreateCarPage = () => {
    return (
        <div>
            <CreateCar />
        </div>
    );
};

export default CreateCarPage;
