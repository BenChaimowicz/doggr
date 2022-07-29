import React from "react";
import { IDog } from "../interfaces/Dog.interface";

const DogItem = ({ dog }: { dog: IDog }) => {
  return (
    <div className="container flex-auto h-max max-w-xs rounded-lg bg-etonblue flex-col justify-center align-middle p-2">
      <div className="justify-center sm:w-auto sm:h-auto">
        <img className="flex justify-center" src={dog.photo} alt="" />
      </div>
      <div className="text-black justify-center">
        Name: {dog.name}
      </div>
      <div className="text-black justify-center">
        Age: {dog.age < 12 ? `${dog.age} months` : dog.age}
      </div>
    </div>
  );
};

export default DogItem;
