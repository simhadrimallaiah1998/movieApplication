import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieWorld from "./MovieWorld";
import Login from "./Login";
import NotFound from "./NotFound";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/movie/:name" element={<MovieWorld />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
