import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Switch,
  Avatar,
  Badge,
  Collapse,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import EventIcon from '@mui/icons-material/Event';
import SpeakerIcon from '@mui/icons-material/RecordVoiceOver';
import ReportIcon from '@mui/icons-material/Description';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';

const menuItems = [
  { label: 'Home', icon: <HomeIcon /> },
  { label: 'Events', icon: <EventIcon /> },
  { label: 'Speakers', icon: <SpeakerIcon /> },
  { label: 'Reports', icon: <ReportIcon /> },
  { label: 'Notifications', icon: <NotificationsIcon />, badge: 3 },
  { label: 'Messages', icon: <MessageIcon /> },
  { label: 'Settings', icon: <SettingsIcon /> },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleDrawerToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <AppBar position="static" elevation={0} sx={{ backgroundColor: '#fff', color: '#000' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            disableRipple
            disableFocusRipple
            onClick={handleDrawerToggle}
            sx={{
              color: '#000',
              ':focus': {
                outline: '2px solid black'
              }
            }}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Divider />

      <Collapse in={menuOpen}>
        <List sx={{ width: '100%', padding: 2, backgroundColor: '#f5f5f5' }}>
          {menuItems.map((item, index) => (
            <ListItem button key={index} onClick={handleDrawerToggle}>
              <ListItemIcon>
                {item.badge ? (
                  <Badge badgeContent={item.badge} color="error">
                    {item.icon}
                  </Badge>
                ) : (
                  item.icon
                )}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
              />
            </ListItem>
          ))}

          <ListItem>
            <Switch
              edge="start"
              checked={darkMode}
              onChange={handleDarkModeToggle}
            />
            <ListItemText primary="Dark mode" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Avatar />
            </ListItemIcon>
            <ListItemText
              primary="Rudra Devi"
              secondary="rudra.devi@gmail.com"
            />
          </ListItem>
        </List>
      </Collapse>
    </div>
  );
};

export default Navbar;
