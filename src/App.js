import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieWorld from "./MovieWorld";
import Login from "./Login";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/movie" element={<MovieWorld />}></Route>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
