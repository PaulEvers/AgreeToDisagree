import { Injectable } from '@angular/core';
import { Proposition } from '../classes/Proposition';
import { AngularFirestore } from '@angular/fire/firestore';
import { Answer } from '../classes/Answer';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFirestore) { }

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

    return this.db.collection('propositions').doc(questionId).collection('answers')
      .add(aObject).then(doc => {
        doc.update({ id: doc.id });
      }).catch(err => console.log(err));
  }
}
