import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";

function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [tg])

  return (
    <div className="App">
        <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
