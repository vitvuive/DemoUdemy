import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import Header from '../components/Header';
import LibraryList from './LibraryList';
const App = () => {
    return (
        //Cac view nam trong provider moi co the su dung duoc Store
        <Provider store={createStore(reducer)}>
            <View style={{ flex: 1 }}>
                <Header headerText="Tech Stack" />
                <LibraryList />
            </View>
        </Provider>
    );
};

export default App;
