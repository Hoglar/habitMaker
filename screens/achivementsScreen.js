'use strict';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

class AchivementsScreen extends React.Component {
    render() {
        console.log(this.props.achievements)
        return (
            <View>
                <Text>
                    {this.props.achievements[0].title}
                </Text>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    achievements: state.achievements
})
export default connect(mapStateToProps)(AchivementsScreen);
