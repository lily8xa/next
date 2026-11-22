'use client'
import {createCar} from "@/app/actions/createCar";
import {useForm} from "react-hook-form";
import {CarFormType, carSchema} from "@/lib/schema";
import {zodResolver} from "@hookform/resolvers/zod";
import './CreateCar.css'

export const CreateCar= ()=>{
    const {register,handleSubmit,formState:{errors,isSubmitting}}=useForm<CarFormType>({resolver:zodResolver(carSchema)})
    const onSubmit=async (data:CarFormType)=>{
        await createCar(data)
    }
    return(
        <div>
            <form className={'form'} onSubmit={handleSubmit(onSubmit)}>
                <input className={'input'} type="text"  placeholder={'Enter Brand'}{...register('brand')}/>
                {errors.brand && (<p className={'error'}>{errors.brand.message}</p>)}
                <input className={'input'} type="number"  placeholder={'year'}{...register('year',{ valueAsNumber: true })}/>
                {errors.year && <p className={'error'}>{errors.year.message}</p>}
                <input className={'input'} type="number" placeholder={'prise'}{...register('price',{ valueAsNumber: true })}/>
                {errors.price && <p className={'error'}>{errors.price.message}</p>}
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Adding...' : 'Add Car'}
                </button>
            </form>

        </div>)
}
