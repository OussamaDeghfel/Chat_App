import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

// import AccountDetails from "./component/AccountDetails/accountDetails";
import AllChat from "./component/AllChats/allChat";
import Authentication from "./component/auth/authentication";
// import SideBar from "./component/sideBar";
import {ProtectedRoutes} from "./component/protectedRoutes";

import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLoading(false);
        return;
      }
      setUser(null);
      setIsLoading(false)
    });

    return () => unSubscribe();
  });

  if(isLoading) return <div>Loading...</div>

  return (
    <>
      <div className="flex justify-center items-center w-full h-screen bg-slate-200">
        <div className="flex max-w-4xl w-full h-[80vh] bg-slate-500 shadow-inner">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Authentication />} />
              <Route
                path="/allChat"
                element={
                  <ProtectedRoutes user={user}>
                    <AllChat />
                  </ProtectedRoutes>
                }
              />
            </Routes>
          </BrowserRouter>
          {/* <SideBar />
           */}
        </div>
      </div>
    </>
  );
}

export default App;
