

const BookCard = ({book}) => {
    console.log(book)
    return (
        <>
                <section>
                    <ul>
                        <div className="card">
                            <div className="bottom">
                                <h2>Title: book title here </h2>
                                <p>Author: </p>  
                            </div>
                        </div> 
                    </ul>
                </section>  
        </>
    );
};

export default BookCard;