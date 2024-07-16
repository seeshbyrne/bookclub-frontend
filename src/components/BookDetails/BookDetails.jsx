

// const BookDetails =({ show, item,onClose }) => {
    
//     if(!show)
//     {
//         return null;
//     }
//     let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
//     return(
//         <>
//             <div className="overlay">
//                 <div className="overlay-inner">
//                     <button className="close" onClick={onClose}><i class="fas fa-times"></i></button>
//                     <div className="inner-box">
//                         <img src={thumbnail} alt="" />
//                         <div className="info">
//                             <h1>{item.volumeInfo.title}</h1>
//                             <h3>{item.volumeInfo.authors.join(', ')}</h3>
//                             <h4>{item.volumeInfo.publisher}<span>{item.volumeInfo.publishedDate}</span></h4><br/>
//                             <a href={item.volumeInfo.previewLink}>
//                                 <button>More</button>
//                             </a>
//                         </div>
//                     </div>
//                     <h4 className="description">{item.volumeInfo.description}</h4>
//                 </div>
//             </div>
//         </>
//     )
// }


import { useLocation } from 'react-router-dom';

const BookDetails = () => {
  const location = useLocation();
  const { book } = location.state || {};

  if (!book) {
    return <div>No book details available</div>;
  }

  const thumbnail = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;

  return (
    <div className="overlay">
      <div className="overlay-inner">
        <button className="close" onClick={() => window.history.back()}><i className="fas fa-times"></i></button>
        <div className="inner-box">
          <img src={thumbnail} alt="" />
          <div className="info">
            <h1>{book.volumeInfo.title}</h1>
            <h3>{book.volumeInfo.authors.join(', ')}</h3>
            <h4>{book.volumeInfo.publisher}<span>{book.volumeInfo.publishedDate}</span></h4><br />
            <a href={book.volumeInfo.previewLink}>
              <button>More</button>
            </a>
          </div>
        </div>
        <h4 className="description">{book.volumeInfo.description}</h4>
      </div>
    </div>
  );
};







export default BookDetails;