import Delete from '../../assets/images/delete.svg';

const Book = ({ literature }) => {
  return (
    <>
      <div className="cardDiv">
        <img
          id="placeholder"
          className=""
          key={literature.id}
          src={literature.cover}
          alt={literature.title}
          data-id={literature.id}
        />
        <h3>{literature.title}</h3>
        <h4>{`by ${literature.author}`}</h4>
        <h5>{`Pages: ${literature.pages}`}</h5>
        <h5>{literature.read ? 'Finished' : 'Not Finished'}</h5>
        <div className="delete-div" id="delete-div">
          <img src={Delete} className="delete" id="delete" alt="delete" />
        </div>
      </div>
    </>
  );
};

export default Book;
