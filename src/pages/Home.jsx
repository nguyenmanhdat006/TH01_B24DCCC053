import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Danh sách bài tập</h1>
      <nav>
        <ul>
          <li>
            <Link to="/exercise1">Exercise 1</Link>
          </li>
          <li>
            <Link to="/exercise2">Exercise 2</Link>
          </li>
          <li>
            <Link to="/exercise3">Exercise 3</Link>
          </li>
          <li>
            <Link to="/exercise4">Exercise 4</Link>
          </li>
          <li>
            <Link to="/exercise5">Exercise 5</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;