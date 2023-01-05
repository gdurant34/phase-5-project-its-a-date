import React, { useEffect } from "react";
import { CardGroup } from "semantic-ui-react";
import { useRecoilState, useRecoilValue } from 'recoil';
import { relationshipsStateAtom, currentUserStateAtom } from '../recoil/atoms'
import RelationshipCard from "./RelationshipCard";



function RelationshipDisplay() {

  const [relationships, setRelationships] = useRecoilState(relationshipsStateAtom)
  const currentUser = useRecoilValue(currentUserStateAtom)

  useEffect(() => {
    if (currentUser) {
    fetch('/relationships')
      .then(r => r.json())
      .then(setRelationships)
    }
  }, [currentUser])

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