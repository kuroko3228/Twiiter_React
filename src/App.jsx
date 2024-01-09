import "./global.css";
import {
   Route,
   RouterProvider,
   Outlet,
   createRoutesFromElements,
   createBrowserRouter,
} from "react-router-dom";

import { useUsers } from "./store/useUsers";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import TrendsColumn from "./components/TrendsColumn/TrendsColumn";
import Container from "./components/Container/Container";
import Profile from "./components/Profile/Profile";
import Registration from "./components/Registration/Registration";
import Explore from "./components/Explore/Explore";
import Notifications from "./components/Notifications/Notifications";
import Messages from "./components/Messages/Messages";
import Lists from "./components/Lists/Lists";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Communities from "./components/Communities/Communities";

function App() {
   const { users } = useUsers();

   const router = createBrowserRouter(
      createRoutesFromElements(
         <Route path="/" element={<RootLayout />}>
            <Route index element={<Profile />} />
            <Route path="profile" element={<Profile />} />
            <Route path="home" element={<Home />} />
            <Route path="explore" element={<Explore />} />
            <Route path="notifications/*" element={<Notifications />} />
            <Route path="messages" element={<Messages />} />
            <Route path="lists" element={<Lists />} />
            <Route path="bookmarks" element={<Bookmarks />} />
            <Route path="communities" element={<Communities />} />
         </Route>
      )
   );

   function RootLayout() {
      return (
         <Container>
            <Navbar />
            <Outlet />
            <TrendsColumn />
         </Container>
      );
   }

   return (
      <>
         {users.length !== 0 ? (
            <RouterProvider router={router} />
         ) : (
            <Registration />
         )}
      </>
   );
}

export default App;
