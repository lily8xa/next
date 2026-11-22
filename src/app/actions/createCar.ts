'use server'
import {CarFormType, carSchema} from "@/lib/schema";
import {postCar} from "@/servises/api.servise";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";

export async function createCar(data:CarFormType): Promise<void> {
    const result=carSchema.safeParse(data);
    if(!result.success){
        console.log('error',result.error);
        return
    }await postCar(result.data)
    revalidatePath('/cars')
    redirect('/cars')
}
