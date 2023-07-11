import "./App.scss";
import { FaHome } from "react-icons/fa";

function App() {
  return (
    <div className="container">
      {/* header */}
      <header className="header">
        <span>
          <FaHome />
        </span>
        <h3>CC-todolist</h3>
      </header>
      {/* sidebar */}
      <aside className="sidebar">Sidebar</aside>
      {/* content */}
      <main className="content">Content</main>
    </div>
  );
}

export default App;
