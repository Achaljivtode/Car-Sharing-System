import React, { useEffect, useState } from "react";
import HeroServiceCard from "./HeroServiceCard";
// import { fetchCars } from "../../api";

function HeroServices() {
  const [cars, setCars] = useState([]); //  Store fetched cars

  // useEffect(() => {
  //   async function getCars() {
  //     const carData = await fetchCars(); //  Fetch cars from backend
  //     console.log("Fetched Cars:", carData);
  //     if (carData) {
  //       setCars(carData);
  //     }
  //   }
  //   getCars();
  // }, []);
  return (
    <div>
      <h1 className="text-center  text-3xl font-semibold my-20">Services</h1>
      <div className="max-w-7xl mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cars.length > 0 ? (
          cars.map((car) => <HeroServiceCard key={car.id} car={car} />)
        ) : (
          <p className="text-center text-gray-500 col-span-3">
            Loading cars...
          </p>
        )}
      </div>
    </div>
  );
}

export default HeroServices;
