import './App.scss';
import Navigation from './components/Navigation'
import WheatherInfo from './pages/WheatherInfo';

function App() {
  return (
    <>
      <div className="main-container">
        <Navigation/>
        <WheatherInfo/>
      </div>
    </>
  );
}

export default App;