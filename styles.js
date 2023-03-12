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
        width: 233,
        height: 139,
    },
    buttonContainer: {
        buttonContainer: {
            flexDirection: 'row',
        },
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        width: '100%',
    },
    button: {
        backgroundColor: colors.dark_blue,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
})

export default styles;