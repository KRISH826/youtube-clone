/** @format */

import "./App.scss";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Feed from "./pages/Feed";
import SearchResult from "./pages/SearchResult";
import VideoDetails from "./pages/VideoDetails";
import Sidebar from "./components/Sidebar";

function App() {
  const { pathname } = useLocation();
  const pagename = pathname.split("/")?.filter(Boolean)?.[0];
  return (
    <>
      <div className='flex flex-col'>
        <Navbar />
        <div className='flex flex-row h-full'>
          {pagename !== "video" && <Sidebar />}
          <main
            className={`py-2 px-5 flex-1 ${
              pagename !== "video" && "pl-[250px]"
            }`}>
            <Routes>
              <Route path='/' element={<Feed />} />
              <Route
                path='/searchresult/:searchQuery'
                element={<SearchResult />}
              />
              <Route path='/video/:id' element={<VideoDetails />} />
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
