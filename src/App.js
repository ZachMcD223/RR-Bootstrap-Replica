import './App.css';
import Background from './components/Background';
import StoreListings from './components/StoreListings';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="App">
      <TopBar/>
     <Background />
     <StoreListings />
    </div>
  );
}

export default App;
