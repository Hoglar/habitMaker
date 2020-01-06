'use strict';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

class AchievementsScreen extends React.Component {

    render() {
        console.log(this.props.achievements)
        return (
            <View>
                {(this.props.achievements.length > 0) ?
                    this.props.achievements.map((achievement, index) => (
                         <View key={index}>
                             <Text>
                                 {achievement.title}
                             </Text>
                         </View>
                    ))
                : null}
            </View>
        )
    }
}

const mapStateToProps = state => ({
    achievements: state.achievements
})
export default connect(mapStateToProps)(AchievementsScreen);
