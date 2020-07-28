import React from 'react';
import Book from "./Book"

export default ({books}) => <ul className="col-sm-4">{books.map((book, index) => <Book {...book} key={index} />)}</ul>

export default BookList;