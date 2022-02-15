import GoodParts from '../assets/images/good.jpeg';
import Definitive from '../assets/images/def.jpg';
import Eloquent from '../assets/images/elo.jpeg';

const myLibrary = [
  {
    id: 1,
    title: `JavaScript: The Good Parts`,
    author: 'Douglas Crockford',
    pages: 172,
    cover: GoodParts,
    read: false,
  },
  {
    id: 2,
    title: `JavaScript: The Definitive Guide`,
    author: 'David Flanagan',
    pages: 706,
    cover: Definitive,
    read: true,
  },
  {
    id: 3,
    title: `Eloquent JavaScript: A Modern Introduction to Programming`,
    author: 'Marijn Haverbeke',
    pages: 472,
    cover: Eloquent,
    read: true,
  },
];

export default myLibrary;
