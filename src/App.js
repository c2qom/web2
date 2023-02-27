import Header from "./components/Header";
 
function App() {
 
  const clickMe = (name) => {
    console.log('Hello: '+ name);
  }
 
  return (
    <div>
      <Header />
      <button onClick={ () => clickMe('Fikri') }>Click Me</button>
    </div>
  );
}
 
export default App;