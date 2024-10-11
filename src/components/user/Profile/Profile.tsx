import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Avatar, Button, TextField, Grid } from '@mui/material';

const ProfilePage: React.FC = () => {
  const [editMode, setEditMode] = useState(false);  
  const handleEditClick = () => {
    setEditMode((prevMode) => !prevMode);
  };

  return (
    <Box sx={{ padding: '20px' }}>
      {/* Back Button */}
      <Button
        variant="text"
        sx={{
          marginBottom: '20px',
          color: 'black',
          fontFamily: 'Arial, sans-serif',
          fontSize: '18px',
          fontWeight: 'bold',
          textTransform: 'none',
          letterSpacing: '0.5px',
          '&:hover': {
            color: 'orange',
          },
        }}
      >
        &lt; Back
      </Button>

      {/* Profile Section */}
      <Card
        variant="outlined"
        sx={{ display: 'flex', alignItems: 'center', padding: '20px', marginBottom: '20px' }}
      >
        <Avatar
          sx={{ width: 80, height: 80, marginRight: '20px' }}
          src="https://via.placeholder.com/80"
          alt="Profile"
        />
        <Box>
          <Typography variant="h6">Abdan Salhari</Typography>
          <Typography variant="subtitle1">User</Typography>
          <Typography variant="subtitle2">Bandung, Indonesia</Typography>
        </Box>
        <Button
          variant="outlined"
          sx={{ marginLeft: 'auto' }}
          onClick={handleEditClick}
        >
          {editMode ? 'Cancel' : 'Edit'}
        </Button>
      </Card>

      {/* Personal Information Section */}
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" sx={{ marginBottom: '20px' }}>
            Personal Information
          </Typography>

          {/* Grid Layout for Information Fields */}
          <Grid container spacing={2}>
            {/* First Name */}
            <Grid item xs={12} sm={6}>
              {editMode ? (
                <TextField label="First Name" defaultValue="Abdan" variant="outlined" fullWidth />
              ) : (
                <Box>
                  <Typography variant="subtitle1" color="textSecondary">
                    First Name
                  </Typography>
                  <Typography variant="body1">Abdan</Typography>
                </Box>
              )}
            </Grid>

            {/* Last Name */}
            <Grid item xs={12} sm={6}>
              {editMode ? (
                <TextField label="Last Name" defaultValue="Salhari" variant="outlined" fullWidth />
              ) : (
                <Box>
                  <Typography variant="subtitle1" color="textSecondary">
                    Last Name
                  </Typography>
                  <Typography variant="body1">Salhari</Typography>
                </Box>
              )}
            </Grid>

            {/* Email Address */}
            <Grid item xs={12} sm={6}>
              {editMode ? (
                <TextField label="Email Address" defaultValue="abdansal@gmail.com" variant="outlined" fullWidth />
              ) : (
                <Box>
                  <Typography variant="subtitle1" color="textSecondary">
                    Email Address
                  </Typography>
                  <Typography variant="body1">abdansal@gmail.com</Typography>
                </Box>
              )}
            </Grid>

            {/* Phone */}
            <Grid item xs={12} sm={6}>
              {editMode ? (
                <TextField label="Phone" defaultValue="+62 087786606782" variant="outlined" fullWidth />
              ) : (
                <Box>
                  <Typography variant="subtitle1" color="textSecondary">
                    Phone
                  </Typography>
                  <Typography variant="body1">+62 087786606782</Typography>
                </Box>
              )}
            </Grid>

            {/* Bio */}
            <Grid item xs={12}>
              {editMode ? (
                <TextField
                  label="Bio"
                  defaultValue="Keep it up!"
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                />
              ) : (
                <Box>
                  <Typography variant="subtitle1" color="textSecondary">
                    Bio
                  </Typography>
                  <Typography variant="body1">Keep it up!</Typography>
                </Box>
              )}
            </Grid>
          </Grid>
        </CardContent>

        {/* Edit and Cancel Buttons */}
        {editMode && (
          <Box display="flex" justifyContent="flex-end" padding="10px">
            <Button
              variant="contained"
              color="primary"
              onClick={handleEditClick}
              sx={{ marginRight: '10px' }}
            >
              Save
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleEditClick}>
              Cancel
            </Button>
          </Box>
        )}
      </Card>
    </Box>
  );
};

export default ProfilePage;
