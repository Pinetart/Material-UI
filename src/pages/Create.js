import React from "react";
import { Typography, Button, Container } from "@material-ui/core";

export default function Create() {
  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a new note
      </Typography>
      <Button
        onClick={() => {
          console.log("you clicked me");
        }}
        type="submit"
        color="secondary"
        variant="contained"
      >
        Submit
      </Button>

      {/* <ButtonGroup color="secondary" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
        <Button>Four</Button>
      </ButtonGroup> */}
    </Container>
  );
}
