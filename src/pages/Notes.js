import { React, useEffect } from "react";
import useFetch from "../fetcher/useFetch";
import { Typography, Container } from "@material-ui/core";

export default function Notes() {
  const {
    data: notes,
    error,
    isLoading,
  } = useFetch("http://localhost:8000/notes");

  return (
    <div>
      {error && (
        <Container
          maxWidth="md"
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" component="h4" color="error">
            {error}
          </Typography>
        </Container>
      )}
      {isLoading && (
        <Container
          maxWidth="md"
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" component="h4" color="primary">
            Loading...
          </Typography>
        </Container>
      )}
      {console.log(notes)}
      {notes && notes.map((note) => <p key={note.id}>{note.title}</p>)}
    </div>
  );
}
