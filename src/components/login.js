import React from "react";
import {
  styled,
  Paper,
  Grid,
  Avatar,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ForwardRoundedIcon from "@mui/icons-material/ForwardRounded";
import logo from '../images/logo.png';

const MuiGrid = styled(Grid)({
    backgroundColor: 'white',
})

const MuiPaper = styled(Paper)({
  padding: 20,
  height: "70vh",
  width: "28rem",
  margin: "5rem 10rem",
});

const MuiTextField = styled(TextField)({
  paddingBottom: "1rem",
});

const MuiButton = styled(Button)({
  textTransform: "capitalize",
  fontWeight: "bold",
  fontSize: "1rem",
  marginTop: "4rem",
});

const MuiLink = styled(Link)({
  textDecoration: "none",
  color: "white",
});

const MuiImg = styled("img")({
  margin: "5rem 5rem",
});


const LogIn = () => {
  return (
    <MuiGrid container direction="row">
      <MuiPaper elevation={3}>
        <Grid align="center">
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <MuiTextField
          label="Username"
          placeholder="Enter Username"
          fullWidth
          required
        />
        <MuiTextField
          label="Password"
          placeholder="Enter Password"
          type="password"
          fullWidth
          required
        />
        <FormControlLabel control={<Checkbox />} label="Remember me" />
        <MuiButton
          variant="contained"
          endIcon={<ForwardRoundedIcon />}
          fullWidth
        >
          <MuiLink href="/homepage">Get Started</MuiLink>
        </MuiButton>
      </MuiPaper>
      <Grid item>
        <MuiImg src={logo} alt='logo'/>
      </Grid>
    </MuiGrid>
  );
};

export default LogIn;
