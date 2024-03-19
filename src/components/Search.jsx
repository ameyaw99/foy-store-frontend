import React, { useState } from "react";
import Items from "../Item";
import { Modal, Typography, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  // Function to handle search
  const handleSearch = (e) => {
    e.preventDefault();
    const results = Items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
    setOpen(true);
  };

  // Function to handle item click
  const handleItemClick = (item) => {
    setOpen(false); // Close the modal
    navigate(`/item/${item.id}`); // Navigate to item details page
  };

  return (
    <>
      {!open && ( // Conditionally render search bar if modal is closed
        <form className="max-w-md mx-auto" onSubmit={handleSearch}>
          <label htmlFor="default-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Tees, Beanies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-black hover:bg-black-600 focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-4 py-2"
            >
              Search
            </button>
          </div>
        </form>
      )}
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={{ margin: "auto", width: "80%", maxWidth: 600 }}>
          {searchResults.map((item) => (
            <Card key={item.id} style={{ marginBottom: 10 }}>
              <CardContent
                onClick={() => handleItemClick(item)}
                style={{ cursor: "pointer" }}
              >
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body1">{item.shortDescription}</Typography>
                <Typography variant="body2">Price: ${item.price}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default Search;
