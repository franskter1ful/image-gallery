import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/components/Header';
import Search from '../src/components/Search';
import ImageCard from '../src/components/ImageCard';
//import _default from "react-bootstrap/esm/CardColumns";

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

const App = () => {
  const [word, setWord] = useState('');
  const [images, setImages] = useState([]);

  //console.log(images);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages([data, ...images]);
      })
      .catch((err) => {
        console.log(err);
      });
    setWord('');
  };

  return (
    <div>
      <Header title="Mezzanine Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <ImageCard />
    </div>
  );
};

export default App;
