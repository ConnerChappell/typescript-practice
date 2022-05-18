import './App.css';
import TextField from './TextField';

function App() {
  return (
    <div className="App">
      <TextField text='hello' person={{firstName: '', lastName: ''}} />
    </div>
  );
}

export default App;
