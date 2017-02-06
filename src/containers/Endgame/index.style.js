/* @flow */
import { StyleSheet } from 'react-native'
import metrics from 'src/config/metrics'
import colors from 'src/config/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    backgroundColor: '#F7F7F7',
    width: metrics.DEVICE_WIDTH * 0.8,
    height: metrics.DEVICE_HEIGHT * 0.8,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.TRANSPARENT_DARK,
    shadowColor: colors.TRANSPARENT_DARK,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2
    },
    elevation: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Permanent Marker',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowRadius: 0,
    textShadowOffset: {
      height: 0,
      width: 0
    }
  }
})