import './App.scss';
import Navigation from './layouts/Navigation'
import WeatherInfo from './pages/WeatherInfo';

function App() {
  return (
    <>
      <div className="main-container">
        <Navigation />
        <WeatherInfo />
      </div>
    </>
  );
}

export default App;