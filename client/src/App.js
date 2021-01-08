// import { AppBar, Container, Grid, Grow, Typography } from "@material-ui/core";

import "./App.css";
import { Navbar } from "./component/Nav/Navbar";
import { Reminiz } from "./component/reminiz/Reminiz";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Reminiz />
      </div>
    </div>
    // <Container maxidth='lg'>
    //   <AppBar position='static' >
    //     <Typography variant="h4" align='center'>Reminiz</Typography>
    //   </AppBar>

    //   <Grow in>
    //     <Container>
    //       <Grid>
    //         <Grid item> <Posts /> </Grid>
    //         <Grid item> <Form/> </Grid>
    //       </Grid>
    //     </Container>
    //   </Grow>
    // </Container>
  );
}

export default App;
