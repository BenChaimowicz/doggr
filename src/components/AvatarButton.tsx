import React from "react";
import {FaUserAlt} from 'react-icons/fa';

const AvatarButton = ({ image }: { image: string | null }) => {


  return (
    <div>
        {image ? <img src={image} className='w-8 h-8' alt="" /> : <FaUserAlt size='32'></FaUserAlt>}
        {/* <img src={defaultUserImage} className='w-16 h-16' alt="" /> */}
    </div>
  );
};

export default AvatarButton;
