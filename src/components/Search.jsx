import React, { useState } from 'react';
import { Container, TextField, List, ListItem, ListItemText } from '@material-ui/core';

const Search = ({ members }) => {
  const [query, setQuery] = useState("");

  const filteredMembers = members.filter(member =>
    `${member.firstName} ${member.lastName}`.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Container>
      <TextField
        label="Search Family Members"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        fullWidth
      />
      <List>
        {filteredMembers.map((member, index) => (
          <ListItem key={index}>
            <ListItemText primary={`${member.firstName} ${member.lastName}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Search;
