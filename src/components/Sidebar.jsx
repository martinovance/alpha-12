import * as React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Drawer } from '../shared/Drawer';
import { Avatar, Badge, Switch, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import EventIcon from '@mui/icons-material/Event';
import SpeakerIcon from '@mui/icons-material/RecordVoiceOver';
import ReportIcon from '@mui/icons-material/Description';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import { KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight } from '@mui/icons-material';
import { ThemeContext } from '../context/ThemeContext';

// import { ThemeContext } from '../ThemeContext';

const NAVDETAILS = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: 'Events',
    icon: <EventIcon />,
    link: "/events",
  },
  {
    title: 'Speakers',
    icon: <SpeakerIcon />,
    link: "/speakers",
  },
  {
    title: 'Reports',
    icon: <ReportIcon />,
    link: "/reports",
  },
  {
    title: 'Notifications',
    icon: <NotificationsIcon />,
    link: "/notifications",
    badge: 3,
  },
  {
    title: 'Messages',
    icon: <MessageIcon />,
    link: "/messages",
  },
  {
    title: 'Settings',
    icon: <SettingsIcon />,
    link: "/settings",
  },
]

export function Sidebar({ toggleBar, open }) {
  const { darkMode, toggleDarkMode } = React.useContext(ThemeContext);

  return (
    <Box sx={{ 
      display: 'flex',
    }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open} sx={{
        backgroundColor: darkMode ? 'grey.900' : 'grey.100',
      }}>
        <Box sx={{ p: 1, height: '50px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Avatar />
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
            Logo
          </Typography>
        </Box>
        <Divider />
        <List>
          {NAVDETAILS.map((text, index) => (
            <ListItem key={index} 
              disablePadding 
              sx={{ 
                display: 'block', 
                textDecoration: 'none',
                color: 'inherit',
                px: 0.5,
              }}
            >
                <ListItemButton
                  component={NavLink} 
                  to={text.link} 
                  exact
                  sx={[
                    {
                      minHeight: 48,
                      px: 1.5,
                      textDecoration: 'none',
                      '&.active': {
                        backgroundColor: darkMode ? '#8576FF' : '#FCF7FF',
                        '&:hover': {
                          color: darkMode ? '#000' : 'default',
                        },
                      },
                    },
                    open
                      ? {
                          justifyContent: 'initial',
                        }
                      : {
                          justifyContent: 'center',
                        },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: 'center',
                      },
                      open
                        ? {
                            mr: 3,
                          }
                        : {
                            mr: 'auto',
                          },
                    ]}
                  >
                    {text.badge ? (
                      <Badge badgeContent={!open ? text.badge : null} color="error">
                        {text.icon}
                      </Badge>
                    ) : (
                        text.icon
                    )}
                  </ListItemIcon>
                  <ListItemText 
                    primary={text.title} 
                    sx={[
                      open
                        ? {
                            opacity: 1,
                          }
                        : {
                            opacity: 0,
                          },
                    ]}
                  />
                  {open ? (
                    <Badge 
                      badgeContent={text.badge} 
                      color="error"
                      sx={{ mr: 1 }}
                    />
                  ) : null}
                </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <ListItem onClick={toggleBar}>
            <ListItemIcon               
              sx={{ 
                minWidth: '45px',
                ml: !open ? '-5px' : null,
              }}
            >
              {open ? (
                <KeyboardDoubleArrowLeft alt="arrow-left" />
              ) : (
                <KeyboardDoubleArrowRight alt="arrow-right" />
              )}
            </ListItemIcon>
            <ListItemText
              primary="Collapse"
              sx={{ 
                opacity: open ? 1 : 0 
              }}
            />
        </ListItem>
        <ListItem>
            <Switch
              edge="start"
              checked={darkMode}
              onChange={toggleDarkMode}
              sx={{ ml: !open ? '-21px' : null }}
            />
            <ListItemText primary="Dark mode" sx={{ opacity: open ? 1 : 0 }} />
          </ListItem>
        <ListItem>
            <ListItemIcon sx={{ ml: !open ? '-12px' : null }}>
              <Avatar />
            </ListItemIcon>
            <ListItemText
              primary="Rudra Devi"
              secondary="rudra.devi@gmail.com"
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItem>
      </Drawer>
    </Box>
  );
}

Sidebar.propTypes = {
  toggleBar: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}
