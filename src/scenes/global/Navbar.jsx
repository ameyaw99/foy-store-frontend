import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton, Modal } from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { setIsCartOpen } from "../../state";
import Search from "../../components/Search";

const Navbar = () => {
  const navigate = useNavigate(); // Use useNavigate hook
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const [openSearch, setOpenSearch] = useState(false); // State for managing search component visibility

  const handleSearchClick = () => {
    setOpenSearch(true); // Open search component popup
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="60px"
      backgroundColor="rgba(255,255,255,0.95)"
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box display="flex" alignItems="center" columnGap="20px">
          <IconButton sx={{ color: "black" }} onClick={handleSearchClick}>
            {/* Add onClick event handler to search button */}
            <SearchOutlined />
          </IconButton>
          <IconButton sx={{ color: "black" }}>
            <PersonOutline />
          </IconButton>{" "}
        </Box>
        <Box display="flex" justifyContent="flex-end" columnGap="20px" flex="1">
          <Badge
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            <IconButton
              sx={{ color: "black" }}
              onClick={() => dispatch(setIsCartOpen({}))}
            >
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>
          <IconButton sx={{ color: "black" }}>
            <MenuOutlined />
          </IconButton>
        </Box>
      </Box>
      {/* Search component popup */}
      <Modal open={openSearch} onClose={() => setOpenSearch(false)}>
        <Search />
      </Modal>
    </Box>
  );
};

export default Navbar;
