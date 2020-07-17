/**
 *
 *
 * <App />
 *
 *
 */
import React, { FunctionComponent } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return (
    <Container>
      <Typography component="h1" variant="h1">
        It works!
      </Typography>
      <Typography component="p" variant="body1">
        This is the App component. If you're seeing this, things are going
        pretty well for you.
      </Typography>
    </Container>
  );
};

export default App;
