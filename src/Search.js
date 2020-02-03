import React from 'react';

function Search(props) {

  return (
    <input type="text" value={props.value} onChange={
      (event) => {
        props.setValue(event.target.value)
      }}
    />
  )
}

export default Search;
