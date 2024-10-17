import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, Avatar, Button, TextField, Grid } from '@mui/material';
import DropdownUser from '../Header/Dropdown';

const ProfilePage: React.FC = () => {
  interface UserProfile {
    name: string;
    email: string;
    class: string | null;
    role: string;
  }

  const [profileData, setProfileData] = useState<UserProfile | null>(null);
  const [editMode, setEditMode] = useState(false);  

  const fetchProfileData = async () => {
    try {
      console.log('Authorization Token:', localStorage.getItem('token')); // Log the token
      const response = await fetch('http://localhost:3001/user/profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch profile data');
      }

      const result = await response.json();
      console.log('Fetched data:', result); // Log the entire response

      if (result && result.data) {
        setProfileData(result.data);
      } else {
        console.error('Unexpected response structure:', result);
      }
    } catch (error) {
      console.error('Error fetching profile data:', error);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  const handleEditClick = () => {
    setEditMode((prevMode) => !prevMode);
  };

  const handleSaveChanges = async () => {
    console.log("Save changes");
    fetchProfileData();
    setEditMode(false);
  };

  return (
    <Box sx={{ padding: '20px' }}>
      
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

      <Card
        variant="outlined"
        sx={{ display: 'flex', alignItems: 'center', padding: '20px', marginBottom: '20px' }}
      >
        <Avatar
          sx={{
            width: 90,
            height: 90,
            marginRight: '20px',
            borderRadius: '50%',
            objectFit: 'cover',
          }}
          src="/prof_img.jpg"
          alt="Profile"
        />
        <Box>
          <Typography variant="h6">{profileData ? profileData.name : 'Loading...'}</Typography>
          <Typography variant="subtitle1">{profileData ? profileData.role : 'Loading...'}</Typography>
          <Typography variant="subtitle2">{profileData ? profileData.class : 'Loading...'}</Typography>
        </Box>
        <Button
          variant="outlined"
          sx={{ marginLeft: 'auto' }} 
          onClick={handleEditClick}
        >
          {editMode ? 'Cancel' : 'Edit'}
        </Button>
      </Card>

      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" sx={{ marginBottom: '20px' }}>
            Personal Information
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              {editMode ? (
                <TextField
                  label="Name"
                  defaultValue={profileData ? profileData.name : ''}
                  variant="outlined"
                  fullWidth
                />
              ) : (
                <Box>
                  <Typography variant="subtitle1" color="textSecondary">Name</Typography>
                  <Typography variant="body1">{profileData ? profileData.name : 'Loading...'}</Typography>
                </Box>
              )}
            </Grid>

            <Grid item xs={12} sm={6}>
              {editMode ? (
                <TextField
                  label="Email Address"
                  defaultValue={profileData ? profileData.email : ''}
                  variant="outlined"
                  fullWidth
                />
              ) : (
                <Box>
                  <Typography variant="subtitle1" color="textSecondary">Email Address</Typography>
                  <Typography variant="body1">{profileData ? profileData.email : 'Loading...'}</Typography>
                </Box>
              )}
            </Grid>

            <Grid item xs={12} sm={6}>
              {editMode ? (
                <TextField
                  label="Class"
                  defaultValue={profileData ? profileData.class : ''}
                  variant="outlined"
                  fullWidth
                />
              ) : (
                <Box>
                  <Typography variant="subtitle1" color="textSecondary">Class</Typography>
                  <Typography variant="body1">{profileData?.class ? profileData.class : 'Set up class first'}</Typography>
                </Box>
              )}
            </Grid>
          </Grid>
        </CardContent>

        {editMode && (
          <Box display="flex" justifyContent="flex-end" padding="10px">
            <Button
              variant="contained"
              color="primary"
              onClick={handleSaveChanges}
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
