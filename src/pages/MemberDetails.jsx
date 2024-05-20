import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Avatar } from '@material-ui/core';

const MemberDetails = ({ members }) => {
  const { id } = useParams();
  const member = members.find((m) => m._id === id);

  return (
    <Container>
      {member ? (
        <>
          <Avatar src={member.profilePic} alt={member.firstName} />
          <Typography variant="h4">{`${member.firstName} ${member.lastName}`}</Typography>
          <Typography variant="body1">{member.biography}</Typography>
          {/* Add more member details */}
        </>
      ) : (
        <Typography variant="h6">Member not found</Typography>
      )}
    </Container>
  );
};

export default MemberDetails;
