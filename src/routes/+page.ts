import { getCollection } from 'sveltefirets'
import { limit } from 'firebase/firestore'
import type { PageLoad } from './$types'
import type { Document } from '$lib/documents.interface'

export const load: PageLoad = async () => {
  const documents = await getCollection<Document>(`sources`, [limit(5)])

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
