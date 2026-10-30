import React from 'react';
import {ScrollView, Text} from 'react-native';
import Boats from './Components/Boats';

class AllBoats extends React.Component {
  render(){
    return(
        <ScrollView>
            <Text></Text>
            <Text>
                GetABoat - For Sale
            </Text>
          <Boats name={"SEA RAY 500 SUNDANCER \n"}
                 description={"Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."}
                 picture={require("./img/sea_ray.jpg")}/>

          <Boats name={"FOUR WINNS HORIZON 180 \n"}
                 description={"A sporty look and refined details truly set the Horizon 180 above all others."}
                 picture={require("./img/four_winns.jpg")}/>

          <Boats name={"Flipper 640 ST \n"}
                 description={"A modern take on the classic, traditional hardtop and perfect for a family picnic."}
                 picture={require("./img/flipper.jpg")}/>

          <Boats name={"PRINCESS V48 \n"}
                 description={"There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."}
                 picture={require("./img/princess.jpg")}/>

          <Boats name={"BAYLINER 175 BOWRIDER \n"}
                 description={"Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."}
                 picture={require("./img/bayliner.jpg")}/>

              <Boats name={"FAILINE TARGA 47 \n"}
                 description={"Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."}
                 picture={require("./img/fairline.jpg")}/>

        </ScrollView>
    );
  };
}

export default AllBoats;