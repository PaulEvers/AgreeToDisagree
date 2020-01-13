import { Injectable } from '@angular/core';
import { Proposition } from '../classes/Proposition';
import { AngularFirestore } from '@angular/fire/firestore';
import { Answer } from '../classes/Answer';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFirestore) { }

  async getLatestProp() {
    return (await (await this.db.collection('propositions').ref.orderBy('added', 'desc').get()).docs[0].data()) as Proposition;
  }

  uploadProposition(proposition: Proposition) {
    const pString = JSON.stringify(proposition);
    const pObject = JSON.parse(pString);

    return this.db.collection('propositions').add(pObject)
      .then(doc => {
        doc.update({ id: doc.id });
      })
      .catch(err => console.log(err));
  }

  uploadAnswer(questionId: string, answer: Answer) {
    const aString = JSON.stringify(answer);
    const aObject = JSON.parse(aString);

    return this.db.collection('propositions').doc(questionId).update({
      answers: firebase.firestore.FieldValue.arrayUnion(aObject)
    }).catch(err => console.log(err));
  }

  getLatestProposition() {
    this.db.collection('propositions').get().subscribe(props => {
      console.log(props);
    });
  }

}
