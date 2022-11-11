// import Main from "./function_components/Main";

// import DataFetch from "./fetch_data.tsx/fetch_data";

// import Demo from "./class_components/Demo"
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import DataFetch from "./fetch_data.tsx/fetch_data";

export default function App() {
  const obj = {name: 'Alice', age: 29, country: 'Austria'};
  return (
    <div>
      {/* <Main {...obj} /> */}
      {/* <Demo/> */}
      <DataFetch/>
      {/* <BrowserRouter>
      <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter> */}
    </div>
  );
}


