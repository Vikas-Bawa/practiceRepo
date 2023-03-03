import logo from './logo.svg';
import './App.css';
import UseReducer from './components/UseReducer';
import User from './components/User';
import HomeContainer from './containers/HomeContainer';
import HeaderContainer from './containers/HeaderContainer';

function App() {
  const person = {
    name: 'Aditya',
    age: 34
  }
  return (
    <div className="App">
        {/* <UseReducer/> */}
        {/* <User obj={person}/> */}
        <HeaderContainer/>
        <HomeContainer/>
    </div>
  );
}

export default App;
