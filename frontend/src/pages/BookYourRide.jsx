import React from "react";
import BookCarForm from "../Components/BookCarForm/BookCarForm";
import CarDetails from "../Components/CarDetails/CarDeatils";

import SideBar from "../Components/SideBar/SideBar";
import { useParams } from "react-router-dom";

function BookYourRide() {
  //   const [cars, setCars] = useState([]);
  const { carId } = useParams();
  console.log("Car ID from useParams:", carId);

  return (
    <div className="min-h-screen flex bg-gray-100 ">
      <SideBar />

      <div className="max-w-7xl mx-auto my-20 flex flex-col lg:flex-row gap-8 items-start justify-center">
        <BookCarForm carId={carId} />
        <CarDetails carId={carId} />
      </div>
    </div>
  );
}

export default BookYourRide;
