import { Fragment } from "react";

function ListGroup() {
  let items = ["Bogor", "Jakarta", "Bekasi", "Depok", "Tangerang"];
  //   items = [];

  const message = () => {
    return items.length === 0 && <p>No item kota brother</p>;
  };

  return (
    <>
      <h3>List Grup wilayah kota mantap</h3>
      {message()}
      <ul className="list-group">
        {items.map((item) => (
          <li
            key={item}
            className="list-group-item"
            onClick={() => console.log("you clicked", item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
