import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    marginBottom: 15,
    backgroundColor: '#ccb3ff',
    flexDirection: 'row',
  },
  footer: {
    marginTop: 20,
    backgroundColor: '#ccb3ff',
    flexDirection: 'row'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  gameboard: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gameinfo: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 10
  },
  button: {
    borderColor: "black",
    borderWidth: 1,
    alignSelf: "center",
    margin: 10,
    borderRadius: 0,
    backgroundColor: "#ccb3ff"
  },
  textInput: {
    backgroundColor: "#ccb3ff"
  },
  pikkuCont: {
    flex: 3,
    margin:10,
    textAlign:"center"
  },
  textAlign: {
    textAlign: "center",
    marginBottom: 5
  }
});