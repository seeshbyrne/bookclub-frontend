import { useState } from "react";
import BookDetails from "../BookDetails/BookDetails";

const BookCard = ({book}) => {
    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState();

    return (
        <>
                {book.items.map((item) => {
                    const thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    return (
                       
                        <div key={item.id} className="card" onClick={()=>{setShow(true);setItem(item)}}>
                                <img src={thumbnail} alt="" />
                                <div className="bottom">
                                    <h3 className="title">{item.volumeInfo.title}</h3>
                                </div>
                        </div>
                    )
                })}
            {show && <BookDetails show={show} item={bookItem} onClose={()=>setShow(false)}/>}
        </>
    );
};

export default BookCard;