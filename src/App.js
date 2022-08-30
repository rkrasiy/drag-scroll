import DragElements from "./components/drag-elements";

function App() {
  return (
    <div className="App">
      <div className="container mx-auto max-w-[1300px] p-4">
        <h1 className="text-3xl text-center">Drag and scroll</h1>
        <DragElements />
      </div>
    </div>
  );
}

export default App;
