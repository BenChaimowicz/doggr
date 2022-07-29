import React from "react";

const SideBarButton = ({
  icon,
  clickFunc,
}: {
  icon: React.ReactNode;
  clickFunc: () => void;
}) => {
  return (
    <div
      className="flex w-16 h-16 justify-center items-center cursor-pointer mb-8 hover:animate-spin
      rounded-full
    bg-greensheen hover:bg-tealblue  
      transition-all duration-200 ease-in-out shadow-sm hover:shadow-lg"
      onClick={clickFunc}
    >
      {icon}
    </div>
  );
};

export default SideBarButton;
