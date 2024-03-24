import react from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from '../theme/theme';

export const ProfileScreen = ( navigation: any) => {
    return(
        <View style = {styles.container}>
            <Text style={styles.profile}>Profile</Text>
            <Image source={{uri: 'https://singifyai.fineshare.com/song-ai/covers/xxxtentacion.webp'}} width={300} height={300}/>
        </View>
    )
}