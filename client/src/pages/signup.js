import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [formError, setError] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const { signup, error, isLoading } = useSignup();
  const handleSubmit = async (e) => {
    setError(null);
    e.preventDefault();
    if (password !== repeatPassword) {
      setError("Passwords do not match");
      return;
    }
    await signup({ name, email, password });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Box
        sx={{
          maxWidth: "400px",
          width: "100%",
          p: 4,
          backgroundColor: "#fff",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          position: "relative",
        }}>
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          Signup for an Account
        </h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Repeat Password"
            variant="outlined"
            fullWidth
            type="password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            disabled={isLoading}>
            {isLoading ? (
              <CircularProgress
                size={24}
                color="inherit"
              />
            ) : (
              "Signup"
            )}
          </Button>
        </form>
        {error && !formError && (
          <div className="bg-red-100 text-red-600 py-2 px-4 rounded my-4 text-center">
            {error}
          </div>
        )}
        {formError && !error && (
          <div className="bg-red-100 text-red-600 py-2 px-4 rounded my-4 text-center">
            {formError}
          </div>
        )}
        {formError && error && (
          <div className="bg-red-100 text-red-600 py-2 px-4 rounded my-4 text-center">
            {formError}
          </div>
        )}
      </Box>
    </Box>
  );
};

export default Signup;
