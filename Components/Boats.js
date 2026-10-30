import React from 'react';
import {View, Text, Image,ScrollView} from 'react-native';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";



// Ex1: User-defined component Boat with properties con_name, icon_color,name, description , picture
const Boat = ({name, description , picture}) => {
    return (
        <View>
            <Text></Text>
            <Text>
                <FontAwesome6 name={"sailboat"} size={20} color={"grey"} />
                {name}
               {description}

            </Text>

            <Image source = {picture}
                   style={{width: 400, height: 500}} />

        </View>
    );
};

export default Boat;