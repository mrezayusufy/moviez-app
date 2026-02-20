import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  tabBarContainer: {
    flexDirection: 'row',
    backgroundColor: '#1F1B2E',
    borderRadius: 35,
    paddingVertical: 0,
    paddingHorizontal: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  tabBar: {
    display: 'none',
  },
  tabButtonContainer: {
    position: 'relative',
    marginHorizontal: 0,
  },
  tabButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 28,
    minWidth: 64,
    height: 50,
  },
  activeTabButton: {
    paddingHorizontal: 20,
  },
  activeBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 28,
  },
  labelContainer: {
    marginLeft: 8,
  }, 
  imageBg: {
    width: "100%",
    position: "absolute",
    zIndex: 0,
    top: 0,
  },
  logo: {
    width: 80,
    height: 80,
    marginTop: 80,
    marginBottom: 20,
    marginInline: "auto",
  }
})