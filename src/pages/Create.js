import React from "react";
import { Typography } from "@material-ui/core";

export default function Create() {
  return (
    <div>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a new note
      </Typography>
    </div>
  );
}
