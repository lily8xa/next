import {getAllCars} from "@/servises/api.servise";
import {Car} from "@/components/car/Car";
import './Cars.css'

export const Cars = async () => {
    const cars=await getAllCars()
    return (
        <div className={'main-cars'}>{cars.map(car=><Car key={car.id}{...car}/>)}</div>
    );
};
