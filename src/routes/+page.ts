import { getCollection, getFirebaseApp } from 'sveltefirets'
import { getFirestore, limit } from 'firebase/firestore'
import type { PageLoad } from './$types'
import type { IDocument } from '$lib/documents.interface'

export const load: PageLoad = async () => {
  const db = getFirestore(getFirebaseApp())
  console.log(db.toJSON())

  const documents = await getCollection<IDocument>(`sources`, [limit(5)])
  console.log(documents)

  return { documents }

  // This code works, but it's using the underlying firestore v9 API directly
  // I'd like to use the sveltefirets API instead.
  // Keeping for reference
  // --------------------
  // const db = getFirestore(getFirebaseApp())
  // console.log(db.toJSON())
  // const colRef = collection(db, 'sources')
  // console.log(colRef)
  // const colSnap = await getDocs(colRef)
  // console.log(colSnap.docs)
  // if (colSnap.empty) {
  //   console.log('No matching collection.')
  // } else {
  //   colSnap.forEach((doc) => {
  //     console.log(doc.id, '=>', doc.data())
  //   })
  // }
  // get a list of all collections in the docStorage database
  // const collections = await db.collection('documents').get()
}
