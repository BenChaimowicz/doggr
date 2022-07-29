import React, { useEffect, useState } from "react";
import { getParks } from "../api/Park.api";
import { IPark } from "../interfaces/Park.interface";
import ParkItem from "./ParkItem";
import Spinner from "./Spinner";

const ParkList = () => {
  const [parks, setParks] = useState<IPark[]>([]);
  const [isLoaded, setIsLoaded] =   useState<boolean>(false); 
  
  const fetchParks = async () => {
    setIsLoaded(false);
    const parksRes = await getParks();
    setParks(parksRes);
    setIsLoaded(true);
  };

  useEffect(()=> {
    fetchParks();
  }, [])

  return <div className="container h-full w-full flex flex-row flex-wrap pt-4">
    {isLoaded ? parks.map(park => {
        return <ParkItem park={park}></ParkItem>
    }) : <Spinner/>}
  </div>;
};

export default ParkList;
