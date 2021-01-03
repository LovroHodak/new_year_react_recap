import React from "react";
import ShoppingItem from "./ShoppingItem";

export default function ShoppingList(props) {
  return (
    <div>
        <h2>In ShoppingList</h2>
      <div>
        {props.items && props.items.map((item, i) => {
          return <ShoppingItem 
                    key={i} 
                    singleItem={item}
                    onCheck={props.checkHandler}
                    onDelete={props.checkDelete}
                />;
        })}
      </div>
    </div>
  );
}
