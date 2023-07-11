import "./App.scss";
import { Header } from './components/Header';
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div className="container">
      {/* header */}
      <Header/>
      {/* sidebar */}
      <Sidebar/>
      {/* content */}
      <main className="content">Content</main>
    </div>
  );
}

export default App;
