// import React from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  AvatarGroup,
  Avatar,
  Divider,
  Stack,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';

const EventModal = ({ open, onClose, eventData }) => {
  const { eventName, date, description, speakers, attendees } = eventData;
  const { darkMode } = useContext(ThemeContext);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        <Typography variant="h5">{eventName}</Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {date}
        </Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: darkMode ? '#fff' : '#000',
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1" gutterBottom>
          {description}
        </Typography>
        <Box display="flex" alignItems="center" mt={2} mb={2}>
          <AvatarGroup max={3}>
            {speakers?.map((speaker, index) => (
              <Avatar key={index} alt={speaker} src={speaker} />
            ))}
          </AvatarGroup>
        </Box>
        <Typography variant="body2">
            {speakers?.length} Guest Speakers
          </Typography>
        <Typography variant="body2">
          {attendees?.length} Attendees
        </Typography>
      </DialogContent>
      <Divider />
      <DialogActions sx={{ 
        backgroundColor: darkMode ? '#ADA9BB' : '#F8FAFC', 
      }}>
        <Box sx={{ 
          margin: 2, 
          width: '100%', 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          justifyContent: 'space-between', 
          gap: '8px',
        }}>
          <Button sx={{ color: '#000', backgroundColor: '#fff' }} onClick={onClose}>
            Close
          </Button>
          <Stack direction={{ xs: 'column', md: 'row'}} spacing={2}>
            <Button variant="contained" color="error" onClick={onClose}>
              Delete
            </Button>
            <Button variant="contained" color="primary" onClick={onClose}>
              Mark as completed
            </Button>
        </Stack>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

EventModal.propTypes = {
  open: PropTypes.bool.isRequired,      // Controls modal visibility
  onClose: PropTypes.func.isRequired,   // Function to close modal
  eventData: PropTypes.shape({
    eventName: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    speakers: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string,        // URL for avatar
      })
    ).isRequired,
    attendees: PropTypes.number.isRequired,
  }).isRequired,
};

export default EventModal;
