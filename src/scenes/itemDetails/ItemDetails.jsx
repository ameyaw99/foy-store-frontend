import { Box, Button, IconButton, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Item from "../../components/Item";
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../theme";
import { addToCart } from "../../state";
import { useDispatch } from "react-redux";
import Items from "../../Item";

const ItemDetails = () => {
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const [value, setValue] = useState("description");
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);
  const [displayedImage, setDisplayedImage] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Function to simulate fetching a single item by ID
  const getItem = (itemId) => {
    const selectedItem = Items.find((item) => item.id === itemId);
    setItem(selectedItem);
    setDisplayedImage(selectedItem?.image); // Set the initially displayed image
  };

  // Function to simulate fetching all items
  const getItems = () => {
    setItems(Items);
  };

  useEffect(() => {
    getItem(itemId);
    getItems();
  }, [itemId]); // Add itemId to the dependency array if needed

  const handleImageClick = (image) => {
    setDisplayedImage(image);
  };

  return (
    <Box width="80%" m="80px auto">
      <Box display="flex" flexWrap="wrap" columnGap="40px">
        {/* IMAGES */}
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

        {/* ACTIONS */}
        <Box flex="1 1 50%" mb="40px">
          <Box m="65px 0 25px 0">
            <Typography variant="h3">{item?.name}</Typography>
            <Typography>${item?.price}</Typography>
            <Typography sx={{ mt: "20px" }}>
              <div>{item?.shortDescription}</div>
            </Typography>
          </Box>

          <Box flex="1 1 50%" mb="40px">
            <Box display="flex" justifyContent="flex-start" alignItems="center">
              {/* First Image */}
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

              {/* Second Image */}
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
              border={`1.5px solid ${shades.neutral[300]}`}
              mr="20px"
              p="2px 5px"
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 0))}>
                <RemoveIcon />
              </IconButton>
              <Typography sx={{ p: "0 5px" }}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
            <Button
              sx={{
                backgroundColor: "#222222",
                color: "white",
                borderRadius: 0,
                minWidth: "150px",
                padding: "10px 40px",
              }}
              onClick={() => dispatch(addToCart({ item: { ...item, count } }))}
            >
              ADD TO CART
            </Button>
          </Box>
          <Box>
            <Box m="20px 0 5px 0" display="flex">
              <Typography sx={{ marginRight: "5px" }}>
                Care Instructions:
              </Typography>
              <Typography sx={{ fontWeight: "bold" }}>
                Wash With Care.
              </Typography>
              <Typography sx={{ fontWeight: "bold", ml: "10px" }}>
                Place Clothing Inside Out On Low Heat If Possible
              </Typography>
            </Box>

            <Typography>CATEGORIES: {item?.category}</Typography>
          </Box>
        </Box>
      </Box>

      {/* INFORMATION */}
      <Box m="20px 0">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="DESCRIPTION" value="description" />
          <Tab label="REVIEWS" value="reviews" />
        </Tabs>
      </Box>
      <Box display="flex" flexWrap="wrap" gap="15px">
        {value === "description" && <div>{item?.longDescription}</div>}

        {value === "reviews" && <div>reviews</div>}
      </Box>

      {/* RELATED ITEMS */}
      <Box mt="50px" width="100%">
        <Typography variant="h3" fontWeight="bold">
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
  );
};

export default ItemDetails;
