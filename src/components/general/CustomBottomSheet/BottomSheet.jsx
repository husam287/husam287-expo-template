import METRICS from 'constants/Metrics';
import React, { Component } from 'react';
import {
  View,
  Modal,
  TouchableOpacity,
  Animated,
  PanResponder,
} from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import styles from './styles';

const ContainerOfSheet = gestureHandlerRootHOC(({
  backgroundColor,
  onClose,
  panHandlers,
  draggable,
  panStyle,
  animatedHeight,
  radius,
  sheetBackgroundColor,
  hasDraggableIcon,
  dragIconStyle,
  dragIconColor,
  children,
}) => (
  <View
    style={[
      styles.wrapper,
      { backgroundColor: backgroundColor || '#25252599' },
    ]}
  >
    <TouchableOpacity
      style={styles.background}
      activeOpacity={1}
      onPress={onClose}
    />
    <Animated.View
      {...(draggable && panHandlers)}
      style={[
        panStyle,
        styles.container,
        {
          height: animatedHeight,
          borderTopRightRadius: radius || 10,
          borderTopLeftRadius: radius || 10,
          backgroundColor: sheetBackgroundColor || '#F3F3F3',
        },
      ]}
    >
      {hasDraggableIcon && (
      <View style={styles.draggableContainer}>
        <View
          style={[
            styles.draggableIcon,
            dragIconStyle,
            {
              backgroundColor: dragIconColor || '#A3A3A3',
            },
          ]}
        />
      </View>
      )}
      {children}
    </Animated.View>
  </View>
));

class BottomSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      animatedHeight: new Animated.Value(0),
      pan: new Animated.ValueXY(),
    };

    this.createPanResponder(props);
  }

  setModalVisible(visible) {
    const { closeFunction, height } = this.props;
    const { animatedHeight, pan } = this.state;
    if (visible) {
      this.setState({ modalVisible: visible });
      Animated.timing(animatedHeight, {
        toValue: height,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animatedHeight, {
        toValue: 0,
        duration: 400,
        useNativeDriver: false,
      }).start(() => {
        pan.setValue({ x: 0, y: 0 });
        this.setState({
          modalVisible: visible,
          animatedHeight: new Animated.Value(0),
        });
        if (typeof closeFunction === 'function') closeFunction();
      });
    }
  }

  createPanResponder(props) {
    const { height } = props;
    const { pan } = this.state;
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        if (gestureState.dy > 0) {
          Animated.event([null, { dy: pan.y }], {
            useNativeDriver: false,
          })(e, gestureState);
        }
      },
      onPanResponderRelease: (e, gestureState) => {
        const gestureLimitArea = height / 3;
        const gestureDistance = gestureState.dy;
        if (gestureDistance > gestureLimitArea) {
          this.setModalVisible(false);
        } else {
          Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
        }
      },
    });
  }

  // eslint-disable-next-line react/no-unused-class-component-methods
  show() {
    this.setModalVisible(true);
  }

  close() {
    this.setModalVisible(false);
  }

  render() {
    const {
      children,
      hasDraggableIcon,
      backgroundColor,
      sheetBackgroundColor,
      dragIconColor,
      dragIconStyle,
      draggable = true,
      onRequestClose,
      onClose = () => this.close(),
      radius,
      isForTyping = false,
    } = this.props;
    const { animatedHeight, pan, modalVisible } = this.state;
    const panStyle = {
      transform: pan.getTranslateTransform(),
    };

    return (
      <Modal transparent visible={modalVisible} onRequestClose={onRequestClose}>
        {isForTyping
          ? (
            <View style={{ height: METRICS.screenHeight }}>
              <ContainerOfSheet
                panHandlers={this.panResponder.panHandlers}
                onClose={onClose}
                draggable={draggable}
                panStyle={panStyle}
                animatedHeight={animatedHeight}
                radius={radius}
                backgroundColor={backgroundColor}
                sheetBackgroundColor={sheetBackgroundColor}
                hasDraggableIcon={hasDraggableIcon}
                dragIconStyle={dragIconStyle}
                dragIconColor={dragIconColor}
              >
                {children}
              </ContainerOfSheet>
            </View>
          )
          : (
            <ContainerOfSheet
              panHandlers={this.panResponder.panHandlers}
              onClose={onClose}
              draggable={draggable}
              panStyle={panStyle}
              animatedHeight={animatedHeight}
              radius={radius}
              backgroundColor={backgroundColor}
              sheetBackgroundColor={sheetBackgroundColor}
              hasDraggableIcon={hasDraggableIcon}
              dragIconStyle={dragIconStyle}
              dragIconColor={dragIconColor}
            >
              {children}
            </ContainerOfSheet>
          )}
      </Modal>
    );
  }
}

export default BottomSheet;
