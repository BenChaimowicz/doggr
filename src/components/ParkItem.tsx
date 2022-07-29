import React from "react";
import { IPark } from "../interfaces/Park.interface";

const ParkItem = ({ park }: { park: IPark }) => {
  const defaultParkImage = "/parkplaceholder.jpg";

  return (
    <div className="p-2 md:h-96 md:w-120">
      <div className="container flex flex-auto h-full max-w-xs rounded-lg bg-etonblue flex-col justify-center align-middle p-2">
        <div className="flex basis-2/3 overflow-auto">
          <img
            className=""
            src={
              park.photos && park.photos.length > 0
                ? park.photos[0]
                : defaultParkImage
            }
            alt=""
          />
        </div>
        <div className="flex basis-1/3 flex-col justify-center items-center">
        <div className="text-black justify-center">
          Name: {park.name}
        </div>
        <div className="text-black justify-center">
          Location: {}
        </div>
        <div className="text-black justify-center cursor-pointer">
          Dogs: {park.dogs?.length}
        </div>
        </div>
      </div>
    </div>
  );
};

export default ParkItem;
