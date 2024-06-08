import {FC, useEffect, useState} from "react";

import {carService} from "../../services/carService";
import {ICarWithAuth} from "../../interfaces/ICarWithAuth";
import {CarComponent} from "../CarComponent/CarComponent";



const CarsCompoment:FC = () => {

    const [cars, setCars] = useState<ICarWithAuth[]>([])

    useEffect(() => {
        carService.getCars().then((response) => {
            if (response) {
                setCars(response.items);
            }
        })
    }, []);

    return (
        <div>
            {
                cars.map(car => <CarComponent key={car.id} car={car}/>)
            }
        </div>
    );
};

export {CarsCompoment};