import React from 'react';
import {
  asset,
  View,
  Model,
  StyleSheet
} from 'react-vr';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Model
          source={{
            obj: asset('/penholder/Table_Set_obj.obj'),
            mtl: asset('/penholder/Table_Set_obj.mtl')
          }}
          style={{
            transform: [
              { translate: [-2.5, 0.70, -4]},
              { scale: 0.001 },
              { rotateX: -90}
            ]
          }}
        />
      </View>
    );
  }
};