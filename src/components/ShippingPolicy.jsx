import React from "react";
import { Container, Typography } from "@mui/material";

const ShippingPolicy = () => {
  return (
    <Container maxWidth="md">
      <Typography
        variant="h3"
        gutterBottom
        sx={{ marginTop: 10, marginBottom: 2 }}
      >
        Shipping Policy
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>US DOMESTIC ORDERS:</strong> Ship within 5-10 working days.
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>INTERNATIONAL ORDERS:</strong> Ship within 5-15 working days,
        unless a pre-order ship is given.
      </Typography>
      <Typography variant="body1" gutterBottom>
        It's the customer's responsibility to pay import taxes. Regulations for
        import duties and taxes may vary, and we are unable to control nor
        predict their amount. If you refuse a shipment from the UK or any other
        country, you are responsible for the original shipping charges and
        courier cost.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Please note that international shipments may take longer to be delivered
        due to the customs process in your country.
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>ALL SALES ARE FINAL:</strong> No refunds or exchanges unless the
        item is faulty.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Order inquiries email: focusonyourself03@gmail.com
      </Typography>
    </Container>
  );
};

export default ShippingPolicy;
