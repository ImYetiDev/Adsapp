import react from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from '../theme/theme';

export const HomeScreen = ( navigation: any) => {
    return(
        <View style = {styles.container}>
            <Text style={styles.text}>Home</Text>
            <Image source={{uri: 'https://st1.uvnimg.com/dims4/default/7e54d2d/2147483647/thumbnail/1024x576%3E/quality/75/?url=https%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Fassets%2Fvixes%2Fs%2Fsnowman.jpg'}} width={300} height={300} />
        </View>
    )
}