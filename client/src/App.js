import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import CountryDetails from "./components/countryDetails";
import Login from "./pages/login";
import NotFound from "./pages/notFound";
import Signup from "./pages/signup";
import { useAuthContext } from "./hooks/useAuthContext";
import { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "./pages/dashboard";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuthContext();
  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const fetchCountries = async () => {
      setError(null);
      try {
        const response = await axios.get(apiUrl + "/api/countries", {
          headers: {
            "Content-Type": "application/json",
            Authorization: user.token,
          },
        });
        if (response.status === 200) {
          console.log(response);
          setCountries(response.data);
        }
      } catch (error) {
        console.log("Error fetching countries:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchCountries();
    } else {
      setLoading(false);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  useEffect(() => {
    console.log(countries);
  }, [countries]);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-2xl text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/dashboard"
            element={
              user ? (
                <>
                  {error ? (
                    <div className="flex items-center justify-center h-screen">
                      <div className="text-2xl text-gray-600">{error}</div>
                    </div>
                  ) : (
                    <Dashboard countries={countries} />
                  )}
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          <Route
            path="/country/:_id"
            element={<CountryDetails />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={
              user ? (
                <Navigate
                  to="/dashboard"
                  state={countries}
                />
              ) : (
                <Signup />
              )
            }
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
