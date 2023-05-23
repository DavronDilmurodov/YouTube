import { Layout } from "./components/layout";
import "./app.css";
import { Route, Routes } from "react-router-dom";
// import { Home } from "./pages/home/home.component";
import { Video } from "./pages/videos/video.component";
// import { Users } from "./pages/users/users.component";
import { useAuth } from "./hooks/useAuth";
import { Login } from "./pages/login";
import { About } from "./pages/about/about";
import { Suspense, lazy } from "react";

const Home = lazy(() =>
  import("./pages/home").then((component) => ({
    default: component.Home,
  }))
);

// const Video = lazy(() =>
//   import("./pages/videos").then((component) => ({
//     default: component.Video,
//   }))
// );

// const Users = lazy(() =>
//   import("./pages/users").then((component) => ({
//     default: component.Users,
//   }))
// );

export const App = () => {
  const [token] = useAuth();

  if (token) {
    return (
      <Layout>
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video/:id" element={<Video />} />
            {/* <Route path="/users" element={<Users />} /> */}
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </Layout>
    );
  }
  return <Login />;
};
