import * as React from 'react';
import { Link } from 'react-router-dom'
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
import { Avatar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import EventIcon from '@mui/icons-material/Event';
import SpeakerIcon from '@mui/icons-material/RecordVoiceOver';
import ReportIcon from '@mui/icons-material/Description';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import { KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight } from '@mui/icons-material';

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

export function Sidebar() {
  const [open, setOpen] = React.useState(true);

  const toggleBar = () => {
    setOpen(!open)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <Box sx={{ p: 1, height: '50px', display: 'flex', alignItems: 'center' }}>
          <Avatar />
        </Box>
        <Divider />
        <List>
          {NAVDETAILS.map((text, index) => (
            <ListItem key={index} 
              component={Link} 
              to={text.link} 
              disablePadding 
              sx={{ 
                display: 'block', 
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
                <ListItemButton
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
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
                    {text.icon}
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
                </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <ListItem onClick={toggleBar}>
            <ListItemIcon               
              sx={{ minWidth: '50px' }}
            >
              {open ? (
                <KeyboardDoubleArrowLeft alt="arrow-left" />
              ) : (
                <KeyboardDoubleArrowRight alt="arrow-right" />
              )}
            </ListItemIcon>
            <ListItemText
              primary="Collapse"
            />
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
      </Drawer>
    </Box>
  );
}
