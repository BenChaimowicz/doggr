import React, { useState } from "react";
import SideBarButton from "./SideBarButton";
import { FaBone, FaDog } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
import { GiParkBench } from "react-icons/gi";
import AvatarButton from "./AvatarButton";
import { useAtom } from "jotai";
import { CurrentUserAtom } from "../store/CurrentUser.store";
import { useLocation } from "wouter";
import {useGeolocated} from 'react-geolocated';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentUser] = useAtom(CurrentUserAtom);
  const [location, setLocation] = useLocation();
  const {coords, isGeolocationAvailable,isGeolocationEnabled} = useGeolocated({
    positionOptions: { enableHighAccuracy: false}
  });
  const iconSize: number = 32;

  return (
    <div className="top-0 left-0 fixed bg-etonblue w-24 h-full pt-6 flex flex-col justify-start items-center">
      <SideBarButton
        clickFunc={() => setLocation('/')}
        icon={
          <AvatarButton image={currentUser?.picture || null}></AvatarButton>
        }
      ></SideBarButton>
      <SideBarButton
        clickFunc={() => setLocation('/dogs')}
        icon={<FaDog size={iconSize}></FaDog>}
      ></SideBarButton>
      <SideBarButton
        clickFunc={() => setLocation('/parks')}
        icon={<GiParkBench size={iconSize}></GiParkBench>}
      ></SideBarButton>
      <SideBarButton
        clickFunc={() => console.log("works")}
        icon={<HiSpeakerphone size={iconSize}></HiSpeakerphone>}
      ></SideBarButton>
    </div>
  );
};

export default SideBar;
