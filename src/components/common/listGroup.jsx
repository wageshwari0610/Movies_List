import React, { Component } from "react";

const ListGroup = props => {
  const { items , name , value , selectedValue } = props;
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li key={item[value]}
        onClick={()=> props.onItemSelect(item)}
        className= {selectedValue===item? "list-group-item active" : "list-group-item "}>
            {item[name] }
            
        </li> 
      ))}
    </ul>
    
    
  );
};

ListGroup.defaultProps = {
  name : "name",
  value : "_id"
};

export default ListGroup;
