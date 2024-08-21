import { LockOutlined, DarkMode, LightMode } from "@mui/icons-material";
import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Grid,
  IconButton,
  Switch,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { grey } from "@mui/material/colors";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? grey[300] : "#000000",
      },
      background: {
        default: darkMode ? grey[900] : "#ffffff",
        paper: darkMode ? grey[900] : "#ffffff", // Sesuaikan agar tidak terlihat seperti card
      },
      text: {
        primary: darkMode ? grey[300] : "#000000",
      },
    },
  });

  const handleToggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const handleLogin = () => {
    // Logika login di sini
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
            Login
          </Typography>

          <Box component="form" sx={{ mt: 3, width: "100%" }} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: "primary.main",
                color: darkMode ? "#000000" : "#ffffff",
              }}
              onClick={handleLogin}
            >
              Login
            </Button>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
