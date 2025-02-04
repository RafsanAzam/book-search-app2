import './index.css';
import React, {useState} from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const handleSearch = async () => {
    if(searchTerm.trim() === '') return;

    try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
        );
        setBooks(response.data.items || []);
    } catch (error) {
      setError ('Failed to fetch books. Please try again.')
    }
  };
  return (
    <div className='min-h-screen bg-gray-100 p-4'>
      <h1 className='text-3xl font-bold text-center'>Book Search App</h1>
      <SearchBar
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}         
      />
      {error && <p className='text-center text-red-500'>{error}</p>}
      <BookList books={books}/>
      
    </div>
  );
}

export default App;
