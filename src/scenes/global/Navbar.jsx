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
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate(); // Use useNavigate hook
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const [openSearch, setOpenSearch] = useState(false); // State for managing search component visibility

  const handleSearchClick = () => {
    setOpenSearch(true); // Open search component popup
  };

  return (
    <div className="bg-neutral-950 text-white">
      <Box
        display="flex"
        alignItems="center"
        width="100%"
        height="60px"
        position="fixed"
        top="0"
        left="0"
        zIndex="1"
        className="bg-neutral-950 text-white"
      >
        <Box
          width="80%"
          margin="auto"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box display="flex" alignItems="center" columnGap="20px">
            <IconButton sx={{ color: "white" }} onClick={handleSearchClick}>
              {/* Add onClick event handler to search button */}
              <SearchOutlined />
            </IconButton>
            <Link to="/">
              <IconButton sx={{ color: "white" }}>
                <PersonOutline />
              </IconButton>
            </Link>
          </Box>
          <Box
            display="flex"
            justifyContent="flex-end"
            columnGap="20px"
            flex="1"
          >
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
                sx={{ color: "white" }}
                onClick={() => dispatch(setIsCartOpen({}))}
              >
                <ShoppingBagOutlined />
              </IconButton>
            </Badge>
            <IconButton
              sx={{ color: "white" }}
              onClick={() => {
                // Scroll to the footer section
                document
                  .getElementById("footer")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              <MenuOutlined />
            </IconButton>
          </Box>
        </Box>
        <Modal open={openSearch} onClose={() => setOpenSearch(false)}>
          <Search />
        </Modal>
      </Box>
    </div>
  );
};

export default Navbar;
