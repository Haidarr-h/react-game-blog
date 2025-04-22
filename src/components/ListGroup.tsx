import { useState, MouseEvent } from "react";

interface listProps {
  items: string[];
  heading: string;
  onSelectedItems: (item:string) => void;
}

function ListGroup({ items, heading, onSelectedItems }: listProps) {
  const message = () => {
    return items.length === 0 && <p>No item kota brother</p>;
  };
  // event handler
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const handleClick = (index: number, item: string) => {
    if (selectedIndex === index) {
      setSelectedIndex(-1);
    } else {
      setSelectedIndex(index);
    }
    onSelectedItems(item);
  };

  return (
    <>
      <h3>{heading}</h3>
      <br />
      {message()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              handleClick(index, item);
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
