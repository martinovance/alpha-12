import { useState, useContext } from 'react';
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
import { ThemeContext } from '../context/ThemeContext';
import { NavLink } from 'react-router-dom';

const menuItems = [
  { label: 'Home', icon: <HomeIcon />, link: '/' },
  { label: 'Events', icon: <EventIcon />, link: '/events' },
  { label: 'Speakers', icon: <SpeakerIcon />, link: '/speakers' },
  { label: 'Reports', icon: <ReportIcon />, link: '/reports' },
  { label: 'Notifications', icon: <NotificationsIcon />, link: '/notfications', badge: 3 },
  { label: 'Messages', icon: <MessageIcon />, link: '/messages' },
  { label: 'Settings', icon: <SettingsIcon />, link: '/settings' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const handleDrawerToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <AppBar position="static" elevation={0} sx={{ 
        backgroundColor: darkMode ? 'grey.900' : '#fff',        
        color: darkMode ? '#fff': '#000', 
      }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
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
              color: darkMode ? '#fff': '#000', 
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
        <List sx={{ width: '100%', height: '100vh', padding: 2, backgroundColor: darkMode ? 'primary' : '#f5f5f5' }}>
          {menuItems.map((item, index) => (
            <ListItem 
              button 
              key={index} 
              onClick={handleDrawerToggle}
              component={NavLink} 
              to={item.link} 
              exact
              sx={{
                '&.active': {
                  backgroundColor: darkMode ? '#8576FF' : '#FCF7FF',
                  '&:hover': {
                    color: darkMode ? '#000' : 'default',
                  },
                }
              }}
            >
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
              />
              <Badge 
                badgeContent={item.badge} 
                color="error"
                sx={{ mr: 1 }}
              />
            </ListItem>
          ))}

          <ListItem>
            <Switch
              edge="start"
              checked={darkMode}
              onChange={toggleDarkMode}
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
