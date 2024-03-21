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
import logo from "../../assets/foyImages/logo.png";

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
    // Assuming dispatch and setItems are defined elsewhere
    dispatch(setItems(Items));
  }

  useEffect(() => {
    getItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const Tees = items.filter((item) => item.category === "Tees");
  const Beanies = items.filter((item) => item.category === "Beanies");
  const Caps = items.filter((item) => item.category === "Caps");

  return (
    <Box width="80%" margin="80px auto">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ maxWidth: "100px", height: "auto" }}
        />
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
        gridTemplateColumns="repeat(auto-fill, 110px)"
        justifyContent="space-around"
        rowGap="10px"
        columnGap="1.33%"
        // sx={{
        //   rowGap: "20px", // Default row gap
        //   gridTemplateColumns: "repeat(auto-fill, 110px)", // Default grid columns
        //   "@media (min-width: 768px)": {
        //     gridTemplateColumns: "repeat(auto-fill, 300px)", // Change grid columns for larger screens
        //     rowGap: "10px", // Change row gap for larger screens
        //   },
        // }}
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
