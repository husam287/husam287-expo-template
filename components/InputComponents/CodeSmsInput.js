import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, I18nManager } from 'react-native';

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Colors from '../../constants/Colors';
import Metrics from '../../constants/Metrics';
import { globalStyle } from '../../constants/Styles';
import useShadow from '../../hooks/useShadow';

const styles = StyleSheet.create({
    root: { flex: 1, padding: 20 },
    codeFieldRoot: {
        marginTop: 27,
        justifyContent: 'space-between',
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    },
    cell: {
        width: Metrics.screenWidth / 5,
        height: Metrics.screenWidth / 5,
        borderRadius: Metrics.screenWidth / 10,
        fontSize: Metrics.screenWidth / 9,
        textAlign: 'center',
        ...globalStyle.font700,
        backgroundColor: Colors.verifySmsBgColor,
        color: "#fff",
        overflow:'hidden'
    },
    focusCell: {
        borderColor: '#000',
    },
    cleanCell: {
        color: "#fff",
        backgroundColor: Colors.grey
    }
});

const CELL_COUNT = 4;

const CodeSmsInput = ({ setCode }) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const shadowStyle = useShadow()
    useEffect(() => {
        setTimeout(() => {
            ref.current.focus()
        }, 100);
    }, [])

    const changeValue = (e) => {
        setValue(e);
        setCode(e);
    }

    return (
        <View style={styles.root}>
            <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={changeValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                onf
                renderCell={({ index, symbol, isFocused }) => (
                    <Text
                        key={index}
                        style={[styles.cell, isFocused && styles.focusCell, !symbol && styles.cleanCell, shadowStyle(10, 0.15)]}
                        onLayout={getCellOnLayoutHandler(index)}>
                        {symbol || (isFocused ? <Cursor /> : "-")}
                    </Text>
                )}
            />
        </View>
    );
};

export default CodeSmsInput;