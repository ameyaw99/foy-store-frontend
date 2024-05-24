import React, { useEffect, useState } from "react";
import { Box, Button, IconButton, Typography, Tab, Tabs } from "@mui/material";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { addToCart } from "../../state";
import Items from "../../Item";
import Item from "../../components/Item"; // Ensure this import is added

const ItemDetails = () => {
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const [value, setValue] = useState("description");
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);
  const [displayedImage, setDisplayedImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getItem = (itemId) => {
    const selectedItem = Items.find((item) => item.id === itemId);
    setItem(selectedItem);
    setDisplayedImage(selectedItem?.image);
  };

  const getItems = () => {
    setItems(Items);
  };

  useEffect(() => {
    getItem(itemId);
    getItems();
  }, [itemId]);

  const handleImageClick = (image) => {
    setDisplayedImage(image);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="bg-neutral-950 text-white -mt-5 -mb-24">
      <Box width="80%" m="80px auto">
        <Box display="flex" flexWrap="wrap" columnGap="40px">
          <Box
            flex="1 1 40%"
            mb="40px"
            onClick={() => handleImageClick(item?.image)}
          >
            <img
              alt={item?.name}
              width="100%"
              height="100%"
              src={displayedImage}
              style={{ objectFit: "contain" }}
            />
          </Box>

          <Box flex="1 1 50%" mb="40px">
            <Box m="65px 0 25px 0">
              <Typography variant="h3" color="white">
                {item?.name}
              </Typography>
              <Typography color="white">${item?.price}</Typography>
              <Typography sx={{ mt: "20px" }} color="white">
                <div>{item?.shortDescription}</div>
              </Typography>
            </Box>

            <Box flex="1 1 50%" mb="40px">
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Box
                  onClick={() => handleImageClick(item?.image)}
                  style={{ marginRight: "10px", cursor: "pointer" }}
                >
                  <img
                    src={item?.image}
                    alt={item?.name}
                    style={{ width: "50px", height: "50px" }}
                  />
                </Box>

                {item?.image2 && (
                  <Box
                    onClick={() => handleImageClick(item?.image2)}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={item?.image2}
                      alt={item?.name}
                      style={{ width: "50px", height: "50px" }}
                    />
                  </Box>
                )}
              </Box>
            </Box>

            <Box display="flex" alignItems="center" minHeight="50px">
              <Box
                display="flex"
                alignItems="center"
                border={`1.5px solid white`}
                mr="20px"
                p="2px 5px"
              >
                <IconButton
                  onClick={() => setCount(Math.max(count - 1, 0))}
                  sx={{ color: "white" }}
                >
                  <RemoveIcon />
                </IconButton>
                <Typography sx={{ p: "0 5px" }} color="white">
                  {count}
                </Typography>
                <IconButton
                  onClick={() => setCount(count + 1)}
                  sx={{ color: "white" }}
                >
                  <AddIcon />
                </IconButton>
              </Box>
              <Button
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: 0,
                  minWidth: "150px",
                  padding: "10px 40px",
                }}
                onClick={() =>
                  dispatch(
                    addToCart({ item: { ...item, count, size: selectedSize } })
                  )
                }
              >
                ADD TO CART
              </Button>
            </Box>

            {/* Available Sizes for Specific Shirts */}
            {(item?.id === "1" || item?.id === "3") && (
              <Box mt="20px">
                <Typography variant="h6" color="white">
                  Select Size:
                </Typography>
                <Box display="flex" gap="10px">
                  {["M", "L"].map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? "contained" : "outlined"}
                      color="primary"
                      onClick={() => handleSizeSelect(size)}
                      sx={{
                        borderColor: "white",
                        color: selectedSize === size ? "black" : "white",
                        backgroundColor:
                          selectedSize === size ? "white" : "transparent",
                        "&:hover": {
                          borderColor: "white",
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                        },
                      }}
                    >
                      {size}
                    </Button>
                  ))}
                </Box>
              </Box>
            )}

            <Box>
              <Box m="20px 0 5px 0" display="flex">
                <Typography sx={{ marginRight: "5px", color: "white" }}>
                  Care Instructions:
                </Typography>
                <Typography sx={{ fontWeight: "bold", color: "white" }}>
                  Wash With Care.
                </Typography>
                <Typography
                  sx={{ fontWeight: "bold", ml: "10px", color: "white" }}
                >
                  Place Clothing Inside Out On Low Heat If Possible
                </Typography>
              </Box>
              <Typography color="white">
                CATEGORIES: {item?.category}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box m="20px 0 ">
          <Tabs value={value} onChange={handleChange}>
            <Tab
              label="DESCRIPTION"
              value="description"
              sx={{
                color: "white",
                "&.Mui-selected": {
                  color: "white",
                },
              }}
            />
            <Tab
              label="REVIEWS"
              value="reviews"
              sx={{
                color: "white",
                "&.Mui-selected": {
                  color: "white",
                },
              }}
            />
          </Tabs>
        </Box>
        <Box display="flex" flexWrap="wrap" gap="15px">
          {value === "description" && (
            <div style={{ color: "white" }}>{item?.longDescription}</div>
          )}
          {value === "reviews" && <div style={{ color: "white" }}>reviews</div>}
        </Box>

        <Box mt="50px" width="100%">
          <Typography variant="h3" fontWeight="bold" color="white">
            Related Products
          </Typography>
          <Box
            mt="20px"
            display="flex"
            flexWrap="wrap"
            columnGap="1.33%"
            justifyContent="space-between"
          >
            {items.slice(0, 4).map((item, i) => (
              <Item key={`${item.name}-${i}`} item={item} />
            ))}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ItemDetails;
