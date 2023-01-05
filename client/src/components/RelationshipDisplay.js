import React, { useEffect } from "react";
import { CardGroup } from "semantic-ui-react";
import { useRecoilState } from 'recoil';
import { relationshipsStateAtom } from '../recoil/atoms'
import RelationshipCard from "./RelationshipCard";



function RelationshipDisplay() {

  const [relationships, setRelationships] = useRecoilState(relationshipsStateAtom)

  useEffect(() => {
    fetch('/relationships')
      .then(r => r.json())
      .then(setRelationships)
  }, [])

//   console.log(relationships)

  const cards = relationships.map(relationship => (
    <RelationshipCard key={relationship.id} relationship={relationship} />
  ))

  return (
    <div className="container">
      <CardGroup itemsPerRow={1} >
        {cards}
      </CardGroup>
    </div>
  );
};

export default RelationshipDisplay;