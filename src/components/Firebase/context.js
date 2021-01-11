import React from "react";
const FirebaseContext = React.createContext(null); //create context crée deux componn FirebaseContext.Providercomposant+FirebaseContext.Consumercomposant
export const withFirebase = (Component) => (props) => (
  <FirebaseContext.Consumer>
    {(firebase) => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);
export default FirebaseContext;
