import React from 'react';
import { View, Text } from 'react-native';

const App: React.FC = () => {
    return (
        <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
            }}
        >
            <Text
                style={{
                    fontWeight: 'bold',
                    fontSize: 30,
                    color: '#000',
                }}
            >
                Hello World
            </Text>
        </View>
    );
};

export default App;
