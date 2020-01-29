'use strict';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

class CustomHeader extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <Text style={{
                    fontSize: 17,
                    fontWeight: "300",
                    marginLeft: 20,
                    marginRight: 10,
                    color: "#FFE1BA",
                    lineHeight: 16,
                    letterSpacing: 3,

                }}>
                    {this.props.quote.text + "."}
                </Text>
            </View>
        )
    }
};
const mapStateToProps = state => ({
    quote: state.quote
})

export default connect(mapStateToProps)(CustomHeader);
