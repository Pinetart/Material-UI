import React from "react";
import { Typography, Button, Container } from "@material-ui/core";
import PublishIcon from "@material-ui/icons/Publish";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

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
        startIcon={<PublishIcon />}
        endIcon={<ArrowForwardIosIcon />}
      >
        Submit
      </Button>
      <br />
    </Container>
  );
}
