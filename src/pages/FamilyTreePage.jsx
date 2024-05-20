import React from 'react';
import FamilyTree from 'react-family-tree';
import Node from './Node'; // Create a Node component to represent each family member

const FamilyTreePage = ({ members }) => {
  return (
    <div className="family-tree-container">
      <h1>Family Tree</h1>
      <FamilyTree nodes={members} rootId={members[0]?.id} width={800} height={600} renderNode={(node) => (
        <Node key={node.id} node={node} />
      )}/>
    </div>
  );
};

export default FamilyTreePage;
