import React, { useState } from "react";
import {
  Typography,
  Button,
  Container,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
} from "@material-ui/core"; //Components
import PublishIcon from "@material-ui/icons/Publish";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CachedIcon from "@material-ui/icons/Cached";
import { makeStyles } from "@material-ui/core"; //Functions
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  field: {
    marginBottom: 20,
    marginTop: 20,
    display: "block",
  },
});

export default function Create() {
  const classes = useStyles();
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("todos");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    title == "" ? setTitleError(true) : setTitleError(false);
    details == "" ? setDetailsError(true) : setDetailsError(false);
    title && details
      ? setTimeout(() => {
          fetch(" http://localhost:8000/notes", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, details, category }),
          }).then(() => {
            setIsLoading(false);
            history.push("/");
          });
        }, 1200)
      : console.log("fail");

    setTitle("");
    setDetails("");
    setCategory("todos");
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
          value={title}
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
          value={details}
          className={classes.field}
          fullWidth
          multiline
          rows={4}
          error={detailsError}
        ></TextField>

        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel
              value="reminders"
              control={<Radio />}
              label="Reminders"
            />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>

        {!isLoading && (
          <Button
            type="submit"
            color="primary"
            variant="contained"
            startIcon={<PublishIcon />}
            endIcon={<ArrowForwardIosIcon />}
          >
            Submit
          </Button>
        )}

        {isLoading && (
          <Button
            type="submit"
            color="primary"
            variant="contained"
            endIcon={<CachedIcon />}
            style={{ pointerEvents: "none" }}
          >
            Submitting Record
          </Button>
        )}
      </form>
    </Container>
  );
}
