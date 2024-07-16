import { Link } from 'react-router-dom';
import './BookCard.css'

const BookCard = ({ book }) => {

    return (
        <>
            {book.items.map((item) => {
                const thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                if (thumbnail != undefined) {
                    return (
                        <Link key={item.id} to={`/books/${item.id}`} state={{ book: item }}>
                            <div className="card">
                                <img src={thumbnail} alt="book image" />
                                <div className="bottom">
                                    <h4 className="title">{item.volumeInfo.title}</h4>
                                    <h5 className="author">{item.volumeInfo.authors}</h5>
                                </div>
                            </div>
                        </Link>
                    )
                }
                return null;
            })}
        </>
    );
};

export default BookCard;