import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Calendar } from 'react-native-calendars';
import { I18nManager, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import { LocaleConfig } from 'react-native-calendars';
import { Icon } from '../Icon';
import moment from 'moment';
import { globalStyle } from '../../constants/Styles';
import useShadow from '../../hooks/useShadow';


const CalenderPicker = () => {
    const shadowStyle = useShadow()
    const lang = useSelector(state => state.app.lang)
    if (lang?.includes('ar')) {
        LocaleConfig.locales['ar'] = {
            monthNames: ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيو', '	يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
            monthNamesShort: ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيو', '	يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
            dayNames: ['الأحد', 'الأثنين', 'التلاث', 'الاربع', 'الخميس', 'الجمعة', 'السبت'],
            dayNamesShort: ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'],
            today: 'اليوم'
        };
        LocaleConfig.defaultLocale = 'ar'
    }
    const scaleValueToRevertBasedOnRTL = I18nManager.isRTL ? -1 : 1
    return (
        <Calendar
            renderArrow={(direction) => <Icon name="right-arrow" size={18} color={Colors.secondary} style={{ transform: [{ scaleX: direction === 'right' ? scaleValueToRevertBasedOnRTL : -scaleValueToRevertBasedOnRTL }] }} />}
            style={[styles.calendar, shadowStyle(20, 0.2)]}
            theme={theme}
            enableSwipeMonths
            current={new Date()}
            minDate={'2012-05-10'}
            markedDates={{
                '2021-12-16': { selected: true },
            }}
        />
    )
}

export default CalenderPicker

// Specify theme properties to override specific styles for calendar parts. Default = {}
const theme = {
    textSectionTitleColor: Colors.secondary,
    selectedDayBackgroundColor: Colors.primary,
    selectedDayTextColor: '#ffffff',
    todayTextColor: Colors.secondary,
    dayTextColor: Colors.primary,
    textDisabledColor: Colors.grey,
    selectedDotColor: '#ffffff',
    monthTextColor: Colors.secondary,
    textDayFontFamily: globalStyle.font500.fontFamily,
    textMonthFontFamily: globalStyle.font600.fontFamily,
    textDayHeaderFontFamily: globalStyle.font700.fontFamily,
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16
}

const styles = StyleSheet.create({
    calendar: {
        marginHorizontal: 10,
        marginBottom: 10,
        padding: 10,
        borderRadius: 10
    },

});
