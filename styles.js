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
    buttonContainer: {
        buttonContainer: {
            flexDirection: 'row',
        },
    },
    button: {
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: colors.dark_blue,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
})

export default styles;