import React from "react";
import { AppRegistry } from "react-native";
import { App } from "./components";
import { name as appName } from "../app.json";

const {{cookiecutter.project_name}} = () => {
  return <App />;
};

export default {{cookiecutter.project_name}};

AppRegistry.registerComponent("{{cookiecutter.project_name}}", () => {{cookiecutter.project_name}});
