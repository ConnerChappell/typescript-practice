import './App.css'
import Counter from './Counter'
// import TextField from './TextField';

function App() {
    return (
        <div className="App">
            <Counter>
                {({ count, setCount }) => (
                    <div>
                        {count}
                        <button onClick={() => setCount(count + 1)}></button>
                    </div>
                )}
            </Counter>
        </div>
    )
}

export default App
