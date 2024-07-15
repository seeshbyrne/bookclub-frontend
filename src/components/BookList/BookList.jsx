import BookCard from "../BookCard/BookCard";

const BookList = ({ books }) => {
    // const bookListItems = props.books.map((book) => (
    //     <Link key={ book._id } to {"/books/" + book._id }>
    //         <article>
    //             <header>
    //                 <h2>{ book.title }</h2>
    //                 <p>
    //                     { book.author }
    //                 </p>
    //             </header>
    //         </article>
    // //     </Link>
    // ))
    return (
        // <main>
        //     { bookListItems }
        // </main>




        <div>
            {books.map(book => (
                <BookCard key={book.id} book={book} />
            ))}
        </div>
    )
};

export default BookList;