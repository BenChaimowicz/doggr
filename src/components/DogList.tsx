import React, { useEffect, useState } from "react";
import { getDogList } from "../api/Dog.api";
import { IDog } from "../interfaces/Dog.interface";
import DogItem from "./DogItem";
import Spinner from "./Spinner";

const DogList = () => {
  const [dogs, setDogs] = useState<IDog[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const fetchDogs = async () => {
    setIsLoaded(false);
    const dogsRes = await getDogList();
    setDogs(dogsRes);
    setIsLoaded(true);
  };

  useEffect(()=> {
    fetchDogs();
  }, []);
  
  return (
    <div className="container h-full pt-4">
      {isLoaded ? dogs.map((dog) => (
        <DogItem dog={dog} key={dog.id}></DogItem>
      )) : <Spinner/>}
    </div>
  );
};

export default DogList;
