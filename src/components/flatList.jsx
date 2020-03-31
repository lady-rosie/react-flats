import React from 'react';
import Flat from './flat';

const FlatList = ({ flats, selectFlat }) => {
  return (
    <div className="flat-list">
      {flats.map((flat,index) =>
        <Flat
        flat={flat}
        key={flat.name}
        index={index}
        selectFlat={selectFlat} />)}
    </div>
  );
};

export default FlatList;
