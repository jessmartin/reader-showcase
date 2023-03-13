import { getCollection, getDocument, firebaseConfig, getFirebaseApp } from 'sveltefirets'
import { getFirestore, doc, getDoc, collection, collectionGroup, getDocs } from 'firebase/firestore'
import type { PageLoad } from './$types'
import type { IDocument } from '$lib/documents.interface'

export const load: PageLoad = async () => {
  console.log(JSON.stringify(firebaseConfig, null, 1))

  const db = getFirestore(getFirebaseApp())
  console.log(db.toJSON())
  const colRef = collection(db, 'sources')
  console.log(colRef)
  const colSnap = await getDocs(colRef)
  console.log(colSnap.docs)
  if (colSnap.empty) {
    console.log('No matching collection.')
  } else {
    colSnap.forEach((doc) => {
      console.log(doc.id, '=>', doc.data())
    })
  }

  // get a list of all collections in the docStorage database
  // const collections = await db.collection('documents').get()
}
