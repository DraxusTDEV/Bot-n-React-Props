import Button from "./components/Button";

const App = () => {
  return (
    <div>
      <h1>React Buttons</h1>
      <Button></Button>
      <Button texto={"Nuevo Botón"} color={"red"}></Button>
      <Button texto="Warning" color="orange" />
      <button style={{ backgroundColor: "blue", width: "150px" }}>Click</button>
      <Button texto="Prueba" color="green" />
    </div>
  );
};

export default App;
