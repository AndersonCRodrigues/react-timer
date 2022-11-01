import { useState } from 'react';
import { FormTimer } from '../components/formTimer';
import { Timer } from '../components/timer';
import '../styles/App.css';

function App() {

  const [tempo, setTempo] = useState({});

  const handleChangeTime = ({target}) => {
    const { name, value } = target;
    setTempo({ ...tempo, [name]: value });
  }

  console.log(tempo);
  return (
   <div>
      <FormTimer handleChangeTime={handleChangeTime} tempo={tempo}/>
      <Timer />
   </div>
  );
}

export default App;
