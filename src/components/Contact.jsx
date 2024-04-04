import React from "react";
import { Container, Typography, Box, Link } from "@mui/material";

const Contact = () => {
  return (
    <Container maxWidth="md">
      <Typography
        variant="h3"
        gutterBottom
        sx={{ marginTop: 10, marginBottom: 2, textAlign: "center" }}
      >
        CONTACT
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ textAlign: "center" }}>
        INFORMATION
      </Typography>
      <Typography paragraph sx={{ textAlign: "center" }}>
        Questions about the Terms of Service should be sent to us at{" "}
        <Link
          href="mailto:focusonyourself03@gmail.com"
          className="text-blue-600"
        >
          focusonyourself03@gmail.com
        </Link>
        .
      </Typography>
    </Container>
  );
};

export default Contact;
