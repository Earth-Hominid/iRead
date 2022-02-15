import { useState } from 'react';
import Delete from '../../assets/images/delete.svg';

const Book = ({ literature }) => {
  const [isRead, setIsRead] = useState();

  return (
    <>
      <div className="cardDiv">
        <img
          id="placeholder"
          className="cart__product__image"
          key={literature.id}
          src={literature.image}
          alt={literature.name}
          data-id={literature.id}
        />
        <h3>{literature.title}</h3>
        <h4>{`by ${literature.author}`}</h4>
        <h5>{isRead ? 'Finished' : 'Not Finished'}</h5>
        <div className="delete-div" id="delete-div">
          <img src={Delete} className="delete" id="delete" alt="delete" />
        </div>
      </div>
    </>
  );
};

export default Book;
