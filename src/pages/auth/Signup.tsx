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

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleRegister = async () => {
    // Logika register di sini
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? grey[300] : "#000000",
      },
      background: {
        default: darkMode ? grey[900] : "#ffffff",
        paper: darkMode ? grey[900] : "#ffffff", // Sama seperti background layar
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
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
