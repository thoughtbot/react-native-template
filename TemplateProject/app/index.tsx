import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { App } from './components';
import store from './redux/store';

// The `ComponentProvider` type is not properly configured to allow stateless
// components to be returned. So we work around this by typing this as `any`.
// tslint:disable:max-line-length -next-line
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/a7e97698706ada9de04ffe7b3322da625dc3994b/types/react-native/index.d.ts#L440 tslint:disable -line max-line-length
const TemplateProject: any = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default TemplateProject;

AppRegistry.registerComponent('TemplateProject', () => TemplateProject);
