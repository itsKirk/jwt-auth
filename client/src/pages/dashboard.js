import { useScrollTrigger, Zoom, Fab } from "@mui/material";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";
import CountryCard from "../components/country";
import { Link } from "react-router-dom";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const ScrollTopButton = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Zoom in={trigger}>
      <Fab
        color="primary"
        size="medium"
        aria-label="scroll back to top"
        onClick={handleClick}
        style={{ position: "fixed", bottom: 16, right: 16 }}>
        <KeyboardArrowUp />
      </Fab>
    </Zoom>
  );
};

const ScrollBottomButton = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <Zoom in={trigger}>
      <Fab
        color="primary"
        size="medium"
        aria-label="scroll to bottom"
        onClick={handleClick}
        style={{ position: "fixed", top: 16, right: 16 }}>
        <KeyboardArrowDown />
      </Fab>
    </Zoom>
  );
};

const Dashboard = ({ countries }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <Box sx={{ my: 2, display: "flex", justifyContent: "flex-end" }}>
        <TextField
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearch}
        />
      </Box>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {countries &&
          countries
            .filter((country) =>
              country.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((country) => (
              <Link
                to={`/country/${country._id}`}
                key={country._id}>
                <CountryCard country={country} />
              </Link>
            ))}
      </div>
      <ScrollTopButton />
      <ScrollBottomButton />
    </div>
  );
};

export default Dashboard;
