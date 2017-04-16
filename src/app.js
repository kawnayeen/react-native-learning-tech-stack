/**
 * Created by kawnayeen on 4/16/17.
 */
import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

const App = () => (
    <Provider store={createStore(reducers)}>
        <View />
    </Provider>
);

export default App;
