import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Person } from "@mui/icons-material";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import EventIcon from "@mui/icons-material/Event";
import SpeakerIcon from "@mui/icons-material/RecordVoiceOver";
import ReportIcon from "@mui/icons-material/Description";

export default function Navbar() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: "100%", position: "fixed", bottom: 0, zIndex: 10 }}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          component={Link}
          to="/"
          sx={{
            color: value === 0 ? "#5e3eda" : "#6e6e6e",
            borderTop: value === 0 ? "3px solid #5e3eda" : "none",
          }}
        />
        <BottomNavigationAction
          label="Events"
          icon={<EventIcon />}
          component={Link}
          to="/event"
          sx={{
            color: value === 1 ? "#5e3eda" : "#6e6e6e",
            borderTop: value === 1 ? "3px solid #5e3eda" : "none",
          }}
        />
        <BottomNavigationAction
          label="Speakers"
          icon={<SpeakerIcon />}
          component={Link}
          to="/speakers"
          sx={{
            color: value === 2 ? "#5e3eda" : "#6e6e6e",
            borderTop: value === 2 ? "3px solid #5e3eda" : "none",
          }}
        />
        <BottomNavigationAction
          label="Reports"
          icon={<ReportIcon />}
          component={Link}
          to="/reports"
          sx={{
            color: value === 3 ? "#5e3eda" : "#6e6e6e",
            borderTop: value === 3 ? "3px solid #5e3eda" : "none",
          }}
        />
        <BottomNavigationAction
          label="Profile"
          icon={<Person />}
          component={Link}
          to="/profile"
          sx={{
            color: value === 4 ? "#5e3eda" : "#6e6e6e",
            borderTop: value === 4 ? "3px solid #5e3eda" : "none",
          }}
        />
      </BottomNavigation>
    </Box>
  );
}
