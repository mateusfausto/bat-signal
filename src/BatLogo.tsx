import React from 'react';
import { View, Image } from 'react-native';
import batLogo from '../assets/bat-logo.png';

import { styles } from './BatLogoStyles';

export function BatLogo() {
  return (
    <View>
         <Image
            style={styles.logo}
            source={batLogo}     
        />

    </View>
  );
}