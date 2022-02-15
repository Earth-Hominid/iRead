import Book from './Book';

const Books = () => {
  return (
    <>
      {library.map((literature, index) => (
        <div key={index}>
          <Book key={index} literature={literature} />
        </div>
      ))}
    </>
  );
};
export default Books;
