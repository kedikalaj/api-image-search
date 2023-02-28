import { useState } from "react";
import "./searchbar.css";
function SearchBar({onSubmit}) {

  const [term, setTerm] = useState('');

  const handleFormSubmit =(event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (event) =>{
    setTerm(event.target.value);
    
  };
    return (
    <div className="search-bar"> 
      <form  onSubmit={handleFormSubmit}> 
      <label>Image Search With API</label>
       <input value={term} onChange={handleChange}/>
      
       <button  onSubmit={handleFormSubmit}> Search </button>
     </form>
    </div>
    );
  }
  
  export default SearchBar;
  