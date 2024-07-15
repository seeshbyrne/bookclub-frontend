

const BookList = ({books}) => {
    
    return (
        <div>
            {books.map(book => (
                <BookCard key={book.name} book={book} />
            ))}
        </div>
    )
};

export default BookList;