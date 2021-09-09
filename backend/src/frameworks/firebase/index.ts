import firebase from "firebase";
import { config } from "../../config";
import { IFirebase } from "./Ifirebase";

class FirebaseFramework implements IFirebase {

  private static INSTANCE: firebase.app.App;

  private database(): firebase.app.App {
    return firebase.initializeApp(config.firebaseConfig);
  };

  public static getInstanceOfDatabase(): firebase.app.App {
    if (!FirebaseFramework.INSTANCE) {
      FirebaseFramework.INSTANCE = new FirebaseFramework().database();
    }

    return FirebaseFramework.INSTANCE;
  }

  firestoreCollection(collection: string): firebase.firestore.CollectionReference<firebase.firestore.DocumentData> {
    return FirebaseFramework.getInstanceOfDatabase().firestore().collection(collection);
  };

  storeData(collection: string, data: Object) {
    const ref_collection = this.firestoreCollection(collection);

    data = new Object(Object.assign({}, data))
    ref_collection.doc().set(data)
  }

  async findData(collection: string, filter: string, param: string | number): Promise<Object | undefined> {
    const ref_collection = this.firestoreCollection(collection);
    const document = await ref_collection.where(filter, '==', param).get();

    if (!document.empty) {
      const dataRetrived = document.docs[0].data()

      const data = new Object(dataRetrived);

      return data;
    }

    return undefined;
  }
};

export default FirebaseFramework;
