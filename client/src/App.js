// import { AppBar, Container, Grid, Grow, Typography } from "@material-ui/core";

import "./App.css";
import { Form } from "./component/Form/Form";
import { Navbar } from "./component/Nav/Navbar";
import { Posts } from "./component/Posts/Posts";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <div>
          <Posts />
        </div>
        <div>
          <Form />
        </div>
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
