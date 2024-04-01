import React from "react";
import ShoppingList from "./ShoppingList";
import Subscribe from "../../components/Subscribe";
import Subscribe1 from "../../components/Subscribe1";

const Home = () => {
  return (
    <div>
      <ShoppingList />
      {/* <Subscribe /> */}
      <Subscribe1 />
    </div>
  );
};

export default Home;
