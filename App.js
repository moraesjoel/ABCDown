import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Main, CurrencySelection, HelloPage, PlayPage } from './screens';

const AppNavigator = createStackNavigator(
  {
    Main,
    CurrencySelection,
    HelloPage,
    PlayPage,
  },
  {
    headerMode: 'none',
    mode: 'modal',
  },
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => <AppContainer />;

export default App;
