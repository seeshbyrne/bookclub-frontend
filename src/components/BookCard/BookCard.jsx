import { useState } from "react";
import BookDetails from "../BookDetails/BookDetails";
import { Link } from 'react-router-dom';

const BookCard = ({book}) => {
    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState();

    return (
        <>
                {book.items.map((item) => {
                    const thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    if(thumbnail != undefined)
                    {
                      return (
                        <Link key={item.id} to={`/books/${item.id}`} state={{ book: item }}>
                            <div className="card">
                        {/* // <Link key={item.id} to={"/books/" + item.id}>
                        // <div key={item.id} className="card" onClick={()=>{setShow(true);setItem(item)}}> */}
                                <img src={thumbnail} alt="book image" />
                                <div className="bottom">
                                    <h3 className="title">{item.volumeInfo.title}</h3>
                                    <h4 className="author">{item.volumeInfo.authors}</h4>
                                </div>
                        </div>
                        </Link>
                    )  
                    }
                    return null;
                })}
            {/* {show && <BookDetails show={show} item={bookItem} onClose={()=>setShow(false)}/>} */}
        </>
    );
};

export default BookCard;