import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, TextField, Button } from '@material-ui/core';
import axios from 'axios';

const FamilyNewsfeed = ({ familyId }) => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  useEffect(() => {
    const fetchFamilyPosts = async () => {
      try {
        const response = await axios.get(`/api/families/${familyId}/posts`); // Assuming a dedicated posts endpoint
        setPosts(response.data);
      } catch (error) {
        console.error(error); // Handle errors appropriately
      }
    };

    if (familyId) fetchFamilyPosts(); // Fetch posts if familyId is available
  }, [familyId]);

  const handlePostChange = (e) => {
    setNewPost(e.target.value);
  };

  const handleSubmitPost = async () => {
    if (!newPost) return;

    try {
      const response = await axios.post(`/api/families/${familyId}/posts`, { content: newPost });
      setPosts([response.data, ...posts]); // Add new post to the beginning of the list
      setNewPost(''); // Clear the new post content
    } catch (error) {
      console.error(error); // Handle errors appropriately
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          label="Share something with your family..."
          multiline
          fullWidth
          value={newPost}
          onChange={handlePostChange}
        />
        <Button variant="contained" color="primary" onClick={handleSubmitPost}>
          Post
        </Button>
      </Grid>
      {posts.map((post) => (
        <Grid item xs={12} key={post._id}>
          <Card>
            <CardContent>
              <Typography variant="body1">{post.content}</Typography>
              {/* Optionally display additional information like author and timestamp */}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default FamilyNewsfeed;
