// Temporary until https://github.com/facebook/react-native/pull/13049
jest.mock('Linking', () => {
  return {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    openURL: jest.genMockFn().mockReturnValue(Promise.resolve()),
    canOpenURL: jest.genMockFn().mockReturnValue(Promise.resolve(true)),
    getInitialURL: jest.genMockFn().mockReturnValue(Promise.resolve()),
  };
});

// Temporary until https://github.com/facebook/react-native/pull/13048
jest.mock('ScrollView', () => {
  const React = require('React');
  const View = require('View');
  const requireNativeComponent = require('requireNativeComponent');
  const RCTScrollView = requireNativeComponent('RCTScrollView');
  const ScrollViewComponent = jest.genMockFromModule('ScrollView');

  class ScrollViewMock extends ScrollViewComponent {
    render() {
      return (
        <RCTScrollView {...this.props}>
          {this.props.refreshControl}
          <View>
            {this.props.children}
          </View>
        </RCTScrollView>
      );
    }
  }

  return ScrollViewMock;
});

