import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    marginBottom: 15,
    backgroundColor: '#ccb3ff',
    flexDirection: 'row',
  },
  footer: {
    marginTop: 15,
    backgroundColor: '#ccb3ff',
    flexDirection: 'row'
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 21,
    textAlign: 'center',
    padding: 5
  },
  copy: {
    color: 'white',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 14,
    textAlign: 'center',
    padding: 5
  },
  gameboard: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    borderColor: "black",
    borderWidth: 1,
    alignSelf: "center",
    margin: 10,
    borderRadius: 0,
    backgroundColor: "#ccb3ff",
  },
  textInput: {
    backgroundColor: "#ccb3ff"
  },
  pikkuCont: {
    flex: 4,
    margin:10,
    textAlign:"center"
  },
  textAlign: {
    textAlign: "center",
    marginBottom: 15
  }
});