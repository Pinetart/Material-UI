import React, { useState } from "react";
import { Typography, Button, Container, TextField } from "@material-ui/core"; //Components
import PublishIcon from "@material-ui/icons/Publish";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { makeStyles } from "@material-ui/core"; //Functions

const useStyles = makeStyles({
  field: {
    marginBottom: 20,
    marginTop: 20,
    display: "block",
  },
});

export default function Create() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    title == "" ? setTitleError(true) : setTitleError(false);
    details == "" ? setDetailsError(true) : setDetailsError(false);
  };

  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
        className={classes.field}
      >
        Create a new note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          label="Note Title"
          variant="outlined"
          color="secondary"
          required
          className={classes.field}
          fullWidth
          error={titleError}
        ></TextField>
        <TextField
          onChange={(e) => {
            setDetails(e.target.value);
          }}
          label="Note Details"
          variant="outlined"
          color="secondary"
          required
          className={classes.field}
          fullWidth
          multiline
          rows={4}
          error={detailsError}
        ></TextField>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          startIcon={<PublishIcon />}
          endIcon={<ArrowForwardIosIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
