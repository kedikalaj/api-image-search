import SearchBar from "./components/SearchBar"
import ImageList from "./components/ImageList"
import searchImages from './api';
import { useState } from "react";
import './style.css';

 function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term)=>{
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div className="container">
      <SearchBar onSubmit={handleSubmit}/>
      <ImageList images={images}/>
    </div>
  );
}

export default App;
