import './index.css';
import React, {useState} from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';


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
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
        {books.map((book) => (
          <div key={book.id} className='bg-white p-4 rounded-lg shadow-lg text-center'>
            {book.volumeInfo.imageLinks?.thumbnail && (
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title || 'Book Cover'}
                className='w-full h-48 object-contain mb-4 rounded-md'
              />
            )}
            <h2 className='font-semibold text-lg'>
              {book.volumeInfo.title || 'No Title'}
            </h2>
            <p className='text-gray-700'>
              Author: {book.volumeInfo.authors?.join(',') || 'unknown'}
            </p>
            <a 
             href={book.volumeInfo.previewLink}
             target="_blank"
             rel="noopener noreferrer"
             className='text-blue-500 hover:underline'
            >
              Preview
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
