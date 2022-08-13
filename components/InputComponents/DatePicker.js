import React, { useState } from 'react';
import { Platform } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import i18n from '../../assets/i18n';

const DatePicker = ({ show, setShow, onChangeDate, maximumDate = new Date(), minimumDate }) => {

    const [date, setDate] = useState(new Date())
    const onChange = (selectedDate) => {
        onCancelHandler()
        const currentDate = selectedDate;
        onChangeDate(currentDate)
        setDate(currentDate)
    };

    const onCancelHandler = () => {
        setShow(false)
    }

    return (
        <DateTimePickerModal
            isVisible={show}
            display={Platform.OS === "ios" ? "spinner" : "default"}
            maximumDate={new Date(maximumDate)}
            minimumDate={minimumDate}
            date={date}
            onCancel={onCancelHandler}
            onConfirm={onChange}
            cancelTextIOS={i18n.t('Cancel')}
            confirmTextIOS={i18n.t('Confirm')}
        />
    );
}

export default DatePicker

