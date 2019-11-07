'use strict';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function CustomHeader(title) {
    return (
        <View>
            <Text style={{
                fontSize: 17,
                fontWeight: "300",
                margin: 10,
                marginRight: 50,
                color: "#3A3F3D"
            }}>
                {title + "."}
            </Text>
        </View>
    )
};
