import PokedexLeft from './components/PokedexLeft'
import PokedexRight from './components/PokedexRight';
import { Provider } from 'react-redux'
// HOC High Order Component
// Hooks

import store from './store/index'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PokedexLeft />
        <PokedexRight />
      </div>
    </Provider>
  );
}

export default App;
