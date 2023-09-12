import './App.css';
import { UsersProvider } from './UserContext';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <UsersProvider>
        <Users />
      </UsersProvider>
    </div>
  );
}

export default App;
