// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import AccountDetails from "./component/AccountDetails/accountDetails";
import AllChat from "./component/AllChats/allChat";
import SideBar from "./component/sideBar";

function App() {
  return (
    <>
      <div className="flex justify-center items-center w-full h-screen bg-slate-200">
        <div className="flex max-w-4xl w-full h-[80vh] bg-slate-500 shadow-lg">
          <SideBar />
          <AllChat />
        </div>
        {/* <BrowserRouter>
          <Routes>
            <Route path="/allChats" element={<AllChat />} />
            <Route path="/accountDetails" element={<AccountDetails />} />
          </Routes>
        </BrowserRouter> */}
      </div>
    </>
  );
}

export default App;
