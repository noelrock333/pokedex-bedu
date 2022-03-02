import PokedexLeft from './components/PokedexLeft'
import PokedexRight from './components/PokedexRight';
// import ComponenteConEstado from './components/ComponenteConEstado'
// import ComponenteSinEstado from './components/ComponenteSinEstado';

function App() {
  return (
    <div className="App">
      <PokedexLeft />
      <PokedexRight />
      {/* <ComponenteConEstado color="green"/>
      <ComponenteSinEstado color="green" /> */}
    </div>
  );
}

export default App;
