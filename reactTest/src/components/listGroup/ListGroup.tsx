// import { MouseEvent } from "react";

import { useState } from "react";
import styles from './ListGroup.module.css'

interface Props {
  items: string[];
  title: string;
  // onSelectItem: (item: string) => void;
}

function ListGroup({ items, title }: Props) {
  //let items = ["dog", "cat", "fish", "goat", "tiger"];
  // let selectedItem = 0;
  // items = [];
  // const handleEvent = (event: MouseEvent) => console.log(event);
  const [selectedItem, setSelectedItem] = useState(-1);

  const checkEmpty = () => {
    items.length === 0 && <p>No items Found</p>;
  };

  return (
    <>
      <h1>{title}</h1>
      {checkEmpty()}
        <ul className={[styles['list-group'], styles['container']].join(" ")}>
        {items.map((item, index) => (
          <li
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedItem(index);
              // onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
