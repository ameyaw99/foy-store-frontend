import { Box, Container } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const Confirmation = () => {
  return (
    <Container>
      <Box my={10}>
        {" "}
        {/* Adjust the margin top and bottom */}
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          You have successfully made an Order —{" "}
          <strong>Congrats on Making your Purchase</strong>
        </Alert>
      </Box>
    </Container>
  );
};

export default Confirmation;
