import { BrowserRouter, Route, Routes } from "react-router";
import { AppBar } from "./component/AppBar";
import { AllePage } from "./pages/Alle";

function App() {

  return (
    <BrowserRouter>
    <AppBar />
      <Routes>
        <Route path="/" element={<AllePage />} />
        <Route path="/indland" element={<h1>Indland</h1>} />
        <Route path="/udland" element={<h1>Udland</h1>} />
        <Route path="/teknologi" element={<h1>Teknologi</h1>} />
        <Route path="/sport" element={<h1>Sport</h1>} />
        <Route path="/politik" element={<h1>Politik</h1>} />
        <Route path="/samfund" element={<h1>Samfund</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
