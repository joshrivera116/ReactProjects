
import Content from './components/Content';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { useState } from 'react';
import './styles.css'

function App() {
  const [selectType, setSelectType] = useState("all");
  
  const handleTypeSelect = (type) => {
    setSelectType(type)
  }
  return (
    <div className="App">
      <Navbar onTypeSelect={(e) => handleTypeSelect(e)}/>
      <Content selectType={selectType}/>
      <Footer />
    </div>
  );
}

export default App;
