import Navigation from './navigation/Navigation';
import Header from './header/Header';
import LibraryControl from './library/LibraryControl';
import Library from './library/Library';
import '../styles/styles.css';

function App() {
  return (
    <body>
      <Navigation />
      <Header />
      <LibraryControl />
      <Library />
    </body>
  );
}

export default App;
