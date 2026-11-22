'use client'
import {createCar} from "@/app/actions/createCar";
import {useForm} from "react-hook-form";
import {CarFormType, carSchema} from "@/lib/schema";
import {zodResolver} from "@hookform/resolvers/zod";

export const CreateCar= ()=>{
    const {register,handleSubmit,formState:{errors,isSubmitting}}=useForm<CarFormType>({resolver:zodResolver(carSchema)})
    const onSubmit=async (data:CarFormType)=>{
        await createCar(data)
    }
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text"  placeholder={'Enter Brand'}{...register('brand')}/>
                {errors.brand && (<p>{errors.brand.message}</p>)}
                <input type="number"  placeholder={'year'}{...register('year',{ valueAsNumber: true })}/>
                {errors.year && <p>{errors.year.message}</p>}
                <input type="number" placeholder={'prise'}{...register('price',{ valueAsNumber: true })}/>
                {errors.price && <p>{errors.price.message}</p>}
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Adding...' : 'Add Car'}
                </button>
            </form>

        </div>)
}
