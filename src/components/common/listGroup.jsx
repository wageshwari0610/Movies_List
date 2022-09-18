import React from "react";

const ListGroup = props => {
  const { items , name , value ,selectedValue } = props;
  return (
    <div>
      {items.map((item) => (
        <li key={item[value]}
        onClick={()=> props.onItemSelect(item)}
        className= {selectedValue===item? "list-group-item active" : "list-group-item "}>
            {item[name] }
            
        </li> 
        
      ))}
    
    </div>
    
    
  );
};

ListGroup.defaultProps = {
  name : "name",
  value : "_id"
};

export default ListGroup;
