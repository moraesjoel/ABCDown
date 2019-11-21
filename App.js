import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import { Main, InsertName, HelloPage, PlayPage, PlayPage2, PlayPage3, PlayPage4 } from './screens';

const AppNavigator = createStackNavigator(
  {
    Main,
    InsertName,
    HelloPage,
    PlayPage,
    PlayPage2,
    PlayPage3,
    PlayPage4,
  },
  {
    headerMode: 'none',
    mode: 'modal',
  },
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => <AppContainer />;

export default App;
