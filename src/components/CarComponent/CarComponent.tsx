import {FC} from "react";
import {ICarWithAuth} from "../../interfaces/ICarWithAuth";

interface IProps {
    car: ICarWithAuth
}

const CarComponent:FC<IProps> = ({car}) => {
    const {id, brand, price, year, photo} = car

    return (
        <div>
            <div>Id: {id}</div>
            <div>Brand: {brand}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <hr/>
        </div>
    );
};

export {CarComponent};