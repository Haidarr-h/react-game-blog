import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App() {

  const items = ["Bogor", "Jakarta", "Bekasi", "Depok", "Tangerang"];

  const selecItem = (item: string) => console.log("you clicked ", item);

  return (
    <div>
      <Message name="Haidare"></Message>
      <br />
      <ListGroup items={items} heading="Beautiful Cities" onSelectedItems={selecItem}></ListGroup>

    </div>
  );
}

export default App;
