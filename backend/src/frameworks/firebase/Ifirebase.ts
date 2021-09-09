import firebase from "firebase";
import FirebaseFramework from "./";

interface IFirebase {
  firestoreCollection(collection: string): firebase.firestore.CollectionReference<firebase.firestore.DocumentData>;
  storeData(collection: string, data: Object): void;
  findData(collection: string, filter: string, param: string | number): Promise<Object | undefined>;
}

export { IFirebase, FirebaseFramework as Database };