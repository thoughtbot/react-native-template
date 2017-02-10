import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { App } from './components';
import store from './redux/store';

const {{cookiecutter.project_name}} = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent('{{cookiecutter.project_name}}', () => {{cookiecutter.project_name}});
