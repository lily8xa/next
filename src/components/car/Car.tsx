import {CarType} from "@/models/carType/CarType";
import {FC} from "react";
import './Car.css'

export const Car:FC<CarType> = ({brand,price,year}) => {
    return (
        <div className={'car'}><h1>Brand- {brand}</h1>
            <p>Prise {price} USD</p>
            <p>{year} year</p>
        </div>
    );
};
