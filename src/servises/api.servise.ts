import {CarType} from "@/models/carType/CarType";

const baseUrl='http://bigbird.space/carsAPI/v1';
export const getAllCars=async ():Promise<CarType[]>=>{
    'use cache'
    const response=await fetch(`${baseUrl}/cars`,{ cache: 'no-store' });
    if(!response.ok){
        throw new Error(response.statusText);
    }
    return await response.json();
}
export const postCar = async (carData: Omit<CarType, 'id'>): Promise<CarType> => {
    const response = await fetch(`${baseUrl}/cars`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(carData),
    });
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
};
