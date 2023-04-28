import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, CreatePost } from "./pages";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
