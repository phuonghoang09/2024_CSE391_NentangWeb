import { Container } from 'react-bootstrap';
import './bootstrap.min.css'
import './App.scss';
import MainComponent from './components/MainComponent';

function App() {
  return (
    <div className='container mainContainer mt-5 w-100 p-5'>
      <h1>TODO LIST</h1>
      <MainComponent />
    </div>
  )
}

export default App;
