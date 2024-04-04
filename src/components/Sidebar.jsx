import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link for navigation

const Sidebar = () => {
  return (
    <Box
      width="250px"
      height="100vh"
      backgroundColor="#ffffff"
      boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
      position="fixed"
      left="0"
      top="0"
      overflowY="auto"
      padding="20px"
    >
      {/* Sidebar Header */}
      <Typography variant="h5" mb={2}>
        Navigation
      </Typography>

      {/* Sidebar Links */}
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/shipping">Shipping</Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </Box>
  );
};

export default Sidebar;
