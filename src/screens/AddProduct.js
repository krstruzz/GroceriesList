import React from 'react';
import { AsyncStorage } from 'react-native';
import {
    Body,
    Container,
    Content,
    Right,
    Text,
    CheckBox,
    List,
    ListItem,
    Fab,
    Icon
} from 'native-base';


export default class AddProduct extends React.Component {
    render() {
        return (
            <Container/>
        );
    }

    async addNewProduct(name) {
        const newProductsList = this.state.allProducts.concat({
            name: name,
            id: Math.floor(Math.random() * 100000)
        });

        await AsyncStorage.setItem(
            '@allProducts',
            JSON.stringify(newProductsList)
        );

        this.setState({
            allProducts: newProductsList
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            allProducts: [
                { id: 1, name: 'bread' },
                { id: 2, name: 'eggs' },
                { id: 3, name: 'paper towels' },
                { id: 4, name: 'milk' },
            ],
            productsInList: []
        };
    }
}