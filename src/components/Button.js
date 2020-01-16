import React, { PureComponent } from 'react';
import {Text , TouchableOpacity} from 'react-native';

const button = ({ onClick , children }) => {
    const { buttonStyle , btnText } = styles;
    return (
        <TouchableOpacity onPress={onClick}  style={buttonStyle}>
            <Text style={btnText}>{children}</Text>    
        </TouchableOpacity>
        
    );
};

const styles = {
    btnText: {
        alignSelf: 'center',
        fontSize:16,
        fontWeight: 'bold',
        color: '#007aff',
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderColor: '#007aff',
        borderRadius: 5,
        borderWidth: 1,
        marginLeft: 5,
        marginRight:5
    }
}
export default button;