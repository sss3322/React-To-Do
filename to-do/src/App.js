import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoUI from './ToDoUI';



export const Newcontext = React.createContext();

function App() {
  const [data, setData] = React.useState([]);

  return (
    <Router>
      <div className="App">
        <Newcontext.Provider value={[data, setData]}>
          <Routes>
            <Route path="/" element={<TodoUI />} />
            
            
          </Routes>
        </Newcontext.Provider>
      </div>
    </Router>
  );
}

export default App;
