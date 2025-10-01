import React from "react";
import Card from "./card/Card";
import cardData from "./cardData";
const Layout = () => {
  console.log(cardData);
  return (
    <div className="p-[1rem] bg-white flex flex-wrap justify-center gap-4 overflow-auto  h-[calc(100vh-96px)]">
      {cardData.map((items) => {
        return <Card imgUrl={items.UserImg} name={items.userName} profile={items.profile} />;
      })}
    </div>
  );
};

export default Layout;
