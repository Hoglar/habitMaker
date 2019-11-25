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
            <View>
                <Text style={{
                    fontSize: 17,
                    fontWeight: "300",
                    marginLeft: 20,
                    marginRight: 50,
                    color: "#3A3F3D",
                    lineHeight: 16,
                    letterSpacing: 3
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
