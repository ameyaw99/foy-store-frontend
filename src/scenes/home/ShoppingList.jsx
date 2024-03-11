import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Item from "../../components/Item";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../state";
import Items from "../../Item";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const items = useSelector((state) => state.cart.items);
  const breakPoint = useMediaQuery("(min-width:600px)");
  console.log(items);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItems() {
    // Simulate the asynchronous behavior of fetching data
    // by using a setTimeout
    setTimeout(() => {
      dispatch(setItems(Items));
    }, 1000); // Simulating a 1-second delay, adjust as needed
  }

  useEffect(() => {
    getItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const Tees = items.filter((item) => item.category === "Tees");
  const Beanies = items.filter((item) => item.category === "Beanies");
  const Caps = items.filter((item) => item.category === "Caps");

  return (
    <Box width="80%" margin="80px auto">
      <div className="logo-">
        <img src="" alt="" />
      </div>
      <Typography variant="h3" textAlign="center">
        {/* Our Featured <b>Products</b> */}
      </Typography>
      {/* <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: breakPoint ? "block" : "none" } }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}
      >
        <Tab label="ALL" value="all" />
        <Tab label="Tees" value="Tees" />
        <Tab label="Beanies" value="Beanies" />
        <Tab label="Caps" value="Caps" />
      </Tabs> */}
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 100px)"
        justifyContent="space-around"
        rowGap="10px"
        columnGap="1.33%"
      >
        {value === "all" &&
          items.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "Tees" &&
          Tees.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "Beanies" &&
          Beanies.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "Caps" &&
          Caps.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
      </Box>
    </Box>
  );
};

export default ShoppingList;
