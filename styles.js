import { StyleSheet } from 'react-native';

const colors = {
    dark_yellow: '#ffc300',
    black: '#000814',
    light_yellow: '#ffd60a',
    dark_blue: '#001d3d',
    light_blue: '#003566',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.dark_yellow,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        flex: 1,
        paddingTop: 50,
    },
    image: {
        width: 130,
        height: 190,
    },
    skipButtonContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    skipButtonText: {
        color: colors.black,
        textDecorationLine: 'underline',
    }
})

export default styles;