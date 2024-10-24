import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const StyledDrawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    backgroundColor: theme.palette.mode === 'dark' ? '#484554' : '#fff',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

export const Drawer = ({ open, children, ...props }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
      <StyledDrawer variant="permanent" open={open} {...props} sx={{
        backgroundColor: darkMode ? '#484554' : '#fff',
      }}>
        {children}
      </StyledDrawer>
  );
};

Drawer.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node,
};
