import DragElements from "./components/drag-elements";

function App() {
  return (
    <div className="App">
      <div className="lg:container m-auto lg:mx-auto p-4">
        <h1 className="text-3xl text-center">Drag and scroll</h1>
        <DragElements />
      </div>
    </div>
  );
}

export default App;
