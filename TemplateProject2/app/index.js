import React from "react";
import { AppRegistry } from "react-native";
import { App } from "./components";
import {name as appName} from '../app.json';

const TemplateProject = () => {
  return (
    <App />
  );
};

export default TemplateProject;

AppRegistry.registerComponent(appName, () => TemplateProject);
