import app from "firebase/app";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyC6OB8SGeed_kmGArf25_YnZ6xpzBYpWWQ",
  authDomain: "my-firebase-project-87bdd.firebaseapp.com",
  databaseURL: "https://my-firebase-project-87bdd.firebaseio.com",
  projectId: "my-firebase-project-87bdd",
  storageBucket: "my-firebase-project-87bdd.appspot.com",
  messagingSenderId: "217943413724",
  appId: "1:217943413724:web:12be9cad1e2e87b2077519",
  measurementId: "G-XET3CE4309",
};
class Firebase {
  constructor() {
    app.initializeApp(config); //pr initialiser une app avec firebase
    this.auth = app.auth();
  }
  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  doSignOut = () => this.auth.signOut();
  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);
  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);
}
export default Firebase;
