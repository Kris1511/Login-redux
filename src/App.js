import './App.css';
import Login from './Components/Login';
import Profile from './Components/Profile';

function App() {
  return (
    <div className='App'>
      <h1>Login using redux</h1>
      <Profile />
      <Login />
    </div>
  );
}

export default App;
