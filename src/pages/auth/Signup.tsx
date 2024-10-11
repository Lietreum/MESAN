import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
  IconButton,
  createTheme,
  ThemeProvider,
  Switch,
} from "@mui/material";
import { LockOutlined, DarkMode, LightMode } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { grey } from "@mui/material/colors";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/auth/register", // Sesuaikan URL dengan backend register route
        {
          firstName,
          lastName,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Assuming the backend sends a JWT token on successful registration
      const { token } = response.data;

      // Save the JWT token to localStorage
      localStorage.setItem("token", token);

      // Redirect the user to the login page
      navigate("/login");
    } catch (error) {
      console.error("Register Failed:", error);
      alert("Register failed. Please check your credentials.");
    }
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? grey[300] : "#000000",
      },
      background: {
        default: darkMode ? grey[900] : "#ffffff",
        paper: darkMode ? grey[900] : "#ffffff",
      },
      text: {
        primary: darkMode ? grey[300] : "#000000",
      },
    },
  });

  const handleToggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        maxWidth={false}
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            maxWidth: 400,
            backgroundColor: theme.palette.background.paper,
            padding: 3,
            borderRadius: 2,
          }}
        >
          {/* Toggle Dark/Light Mode */}
          <Box
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconButton onClick={handleToggleDarkMode} color="inherit">
              {darkMode ? <LightMode /> : <DarkMode />}
            </IconButton>
            <Switch
              checked={darkMode}
              onChange={handleToggleDarkMode}
              color="default"
            />
          </Box>

          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlined />
          </Avatar>

          <Typography variant="h5" fontWeight="bold" align="center">
            Register
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            Use School Account
          </Typography>

          <Box component="form" sx={{ mt: 3, width: "100%" }} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  autoComplete="given-name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
            </Grid>

            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: "primary.main",
                color: darkMode ? "#000000" : "#ffffff",
              }}
              onClick={handleRegister}
            >
              Register
            </Button>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  Already have an account? Log In
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Register;
