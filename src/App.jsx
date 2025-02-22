import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./routes/Homepage";
import SinglePostPage from "./routes/SinglePostPage";
import PostListPage from "./routes/PostListPage";
import Write from "./routes/Write"; // Import the Write component
import ErrorBoundary from "./components/ErrorBoundary"; // Import the ErrorBoundary component

const App = () => {
  return (
    <Router>
      <div className="px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64">
        {/* NAVBAR */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/posts/:slug" element={<SinglePostPage />} /> {/* Define the SinglePostPage route */}
          <Route path="/posts" element={<PostListPage />} />
          <Route path="/write" element={<Write />} /> {/* Define the Write route */}
          <Route path="*" element={<ErrorBoundary />} /> {/* Catch-all route for undefined paths */}
        </Routes>

        {/* BREADCRUMB */}
        {/* INTRODUCTION */}
        {/* FEATURED POSTS */}
        {/* POST LIST */}
      </div>
    </Router>
  );
};

export default App;