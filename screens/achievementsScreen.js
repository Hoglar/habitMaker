'use strict';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';


const styles = StyleSheet.create({
    achievementScreenMainframe: {
        flex: 1,
        backgroundColor: "#536573",
    },
    achievementScreenView: {
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between"
    },
    singleAchievementBox: {
        margin: 10,
        borderWidth: 2,
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "space-around",
        padding: 5
    },
    boxTitle: {
        fontSize: 16,
        letterSpacing: 3
    }
})

class AchievementsScreen extends React.Component {

    render() {
        console.log(this.props.achievements)
        return (

            <ScrollView style={styles.achievementScreenMainframe}>
                <View style={styles.achievementScreenView}>
                    {(this.props.achievements.length > 0) ?
                        this.props.achievements.map((achievement, index) => (
                             <View key={index}
                                   style={[styles.singleAchievementBox,(
                                       (achievement.goodOrBad === "good")
                                            ? {backgroundColor: "#7AA889"}
                                            : {backgroundColor: "#E5B0A6"}
                                   )]}>
                                 <Text style={styles.boxTitle}>
                                     {achievement.title}
                                 </Text>
                                 <Text>
                                     {achievement.level}
                                 </Text>
                                 <Text>
                                     {achievement.levelUpDate || "0000"}
                                 </Text>
                             </View>
                        ))
                    : null}
                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = state => ({
    achievements: state.achievements
})
export default connect(mapStateToProps)(AchievementsScreen);
