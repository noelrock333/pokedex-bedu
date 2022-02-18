import PokedexLeft from './components/PokedexLeft'
import ComponenteConEstado from './components/ComponenteConEstado'
import ComponenteSinEstado from './components/ComponenteSinEstado';

function App() {
  return (
    <div className="App">
      {/* <PokedexLeft /> */}
      <ComponenteConEstado color="green"/>
      <ComponenteSinEstado color="green" />
    </div>
  );
}

export default App;
