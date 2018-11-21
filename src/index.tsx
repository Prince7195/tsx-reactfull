import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./components/Home";
import "../custom.css";
import "../styles.css";
import { Layout } from "./Layout";
import { Dashboard } from "./components/Dashboard";
import { Datasets } from "./components/Datasets";

class BaseApp extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/datasets" component={Datasets} />
          <Route exact={true} path="/dashboard" component={Dashboard} />
        </Layout>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <BaseApp />
  </BrowserRouter>,
  document.getElementById("app")
);
