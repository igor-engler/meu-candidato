import firebase from "firebase";
import { Database } from "../frameworks/firebase/Ifirebase";

export default (): firebase.app.App => {
  const connection = Database.getInstanceOfDatabase();

  return connection;
};