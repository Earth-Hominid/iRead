import Book from './Book';
import myLibrary from '../../utils/useLibary';

const Books = () => {
  return (
    <>
      {myLibrary.map((literature, index) => (
        <div key={index}>
          <Book key={index} literature={literature} />
        </div>
      ))}
    </>
  );
};
export default Books;
