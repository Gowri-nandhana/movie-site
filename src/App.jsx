import { BrowserRouter, Routes,Route } from "react-router-dom";
import Form from "./components/Form/Form";
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
import PostDetails from "./components/PostDetails/PostDetails";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import TrailerPage from "./components/TrailerPage/TrailerPage";



function App() {


  
  return (
    <div>

    
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/form" element={<Form />} />
          <Route path="/movies" element={<Movies />} />
          <Route path=":id" element={<PostDetails />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/movie/:id/trailer" element={<TrailerPage/>}/>
         
        </Routes>
      </BrowserRouter>





    

      

      {/* <Form/> */}
    </div>
  );
}

export default App;
