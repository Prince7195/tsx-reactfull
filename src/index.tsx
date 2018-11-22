import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./components/Home";
import 'react-datasheet/lib/react-datasheet.css';
// import 'handsontable/dist/handsontable.full.css';
import "../custom.css";
import "../styles.css";
import { Layout } from "./Layout";
import { DataSheet } from "./components/DataSheet";
import { Datasets } from "./components/Datasets";
import { HandsonTable } from "./components/Handsontable";

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
          <Route exact={true} path="/dataSheet" component={DataSheet} />
          <Route exact={true} path="/handsontable" component={HandsonTable} />
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
