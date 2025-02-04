import React from "react";

const BookList = ({books}) => {
  return (
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
  );
};
export default BookList;