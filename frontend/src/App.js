import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/components/Header';
import Search from '../src/components/Search';

const App = () => {
  const [word, setWord] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
  }


  return (
    <div>
      <Header title="Mezzanine Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit}/>
    </div>
  );
}


export default App;