import './App.css';
import ChangeColor from './Components/ChangeColor';
import Login from './Components/Login';
import Profile from './Components/Profile';

function App() {
  return (
    <div className='App'>
      <h1>Login using redux</h1>
      <Profile />
      <Login />
      <ChangeColor />
    </div>
  );
}

export default App;
