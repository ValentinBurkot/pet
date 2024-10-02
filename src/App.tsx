import { Outlet } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";

import "./scss/app.scss";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </Provider>
  );
}

export default App;
