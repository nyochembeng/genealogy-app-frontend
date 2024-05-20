import React from 'react';

const Node = ({ node }) => {
  return (
    <div className="node">
      <h3>{node.name}</h3>
      <p>{node.dateOfBirth}</p>
      <p>{node.placeOfResidence}</p>
      <p>{node.phoneNumber}</p>
    </div>
  );
};

export default Node;
