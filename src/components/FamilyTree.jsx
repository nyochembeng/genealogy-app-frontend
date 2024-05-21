import React, { useState, useEffect } from 'react';
import { Tree } from 'react-family-tree'; // Import React Family Tree
import axios from 'axios';

const FamilyTree = ({ familyId }) => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchFamilyMembers = async () => {
      try {
        const response = await axios.get(`/api/families/${familyId}`);
        const familyMembers = response.data.members;
        setMembers(familyMembers);
      } catch (error) {
        console.error(error); // Handle errors appropriately
      }
    };

    fetchFamilyMembers();
  }, [familyId]); // Re-fetch members if familyId changes

  const getNodeData = async (memberId) => {
    try {
      const response = await axios.get(`/api/users/${memberId}`); // Fetch detailed user data
      return {
        // Extract relevant data from user response
        name: response.data.firstName + ' ' + response.data.lastName,
        children: response.data.fathersName ? [response.data.fathersName] : [], // Recursively fetch children (fathersName)
        spouse: response.data.mothersName, // Spouse data (mothersName)
      };
    } catch (error) {
      console.error(error); // Handle errors appropriately
      return null; // Or return a default node if data retrieval fails
    }
  };

  return (
    <Tree
      nodes={members.map((member) => ({
        id: member._id, // Use member's ID as unique identifier
        data: getNodeData(member._id), // Fetch data asynchronously using getNodeData
      }))}
      // Other configuration options for React Family Tree (refer to documentation)
    />
  );
};

export default FamilyTree;
