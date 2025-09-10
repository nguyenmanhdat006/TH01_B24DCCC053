import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const exercises = [
    { id: 1, title: "Exercise 1", path: "/exercise1" },
    { id: 2, title: "Exercise 2", path: "/exercise2" },
    { id: 3, title: "Exercise 3", path: "/exercise3" },
    { id: 4, title: "Exercise 4", path: "/exercise4" },
    { id: 5, title: "Exercise 5", path: "/exercise5" },
  ];

  return (
    <div className="home-container">
      <h1 className="home-heading">Danh sách bài tập</h1>
      <div className="home-grid">
        {exercises.map((exercise) => (
          <Link key={exercise.id} to={exercise.path} className="home-card">
            {exercise.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
