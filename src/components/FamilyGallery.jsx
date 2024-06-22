import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, IconButton } from '@material-ui/core';
import { AddAPhoto } from '@material-ui/icons'; // Material UI Icon
import axios from 'axios';
import config from '../config.json'

const FamilyGallery = ({ familyId }) => {
  const [photos, setPhotos] = useState([]);
  const [newPhoto, setNewPhoto] = useState('');

  useEffect(() => {
    const fetchFamilyPhotos = async () => {
      try {
        const response = await axios.get(`${config.apiUrl}/family/${familyId}/photos`); // Assuming a dedicated photos endpoint
        setPhotos(response.data);
      } catch (error) {
        console.error(error); // Handle errors appropriately
      }
    };

    if (familyId) fetchFamilyPhotos(); // Fetch photos if familyId is available
  }, [familyId]);

  const handleUploadPhoto = async () => {
    if (!newPhoto) return;

    try {
      const response = await axios.post(`${config.apiUrl}/families/${familyId}/upload-photo`, { content: newPhoto });
      setPhotos([response.data, ...photos]); // Add new photos to gallery
      setNewPhoto(''); // Clear the new photo content
    } catch (error) {
      console.error(error); // Handle errors appropriately
    }
  };

  return (
    <Grid container spacing={2}>
      {photos.length === 0 ? (
        <Grid item xs={12}>
          <Typography variant="body1">No photos found in this family album.</Typography>
        </Grid>
      ) : (
        photos.map((photo) => (
          <Grid item key={photo._id} xs={3}>
            <Card>
              <CardContent style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={photo.imageUrl} alt={`Family Pic ${photo._id}`} style={{ width: '100%' }} />
              </CardContent>
            </Card>
          </Grid>
        ))
      )}
      {/* Add a button to upload photos (optional) */}
    </Grid>
  );
};

export default FamilyGallery;
