import { Component } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';
import Signup from './routes/Signup';
import Submit from './components/Submit';
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Routes> 
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/contact' element={<Contact />}/>
          <Route path='/signup' element={<Signup />} />
          <Route path='/submit' element={<Submit/>} />
        </Routes>
        </div>
    );
  }
}
export default App;