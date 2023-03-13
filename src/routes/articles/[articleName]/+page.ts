import type { PageLoad } from './$types'
import { error } from '@sveltejs/kit'
import { getCollection } from 'sveltefirets'
import type { JDOM, ReaderHighlight, ReaderScribble } from '$lib/documents.interface'
import type { Document } from '$lib/documents.interface'

export const load: PageLoad = async ({ params }) => {
  const articleName = params.articleName

  // Get the JDOMs - cannot be blank!
  const jdoms = await getCollection<JDOM>(`sources/${articleName}/jdom`)
  if (jdoms.length === 0) {
    throw error(404, 'Not found')
  }

  // Get the reader scribbles - might be blank!
  const readerScribbles = await getCollection<{ id: ReaderScribble }>(
    `sources/${articleName}/reader_scribbles`
  )

  // Get the reader highlights - might be blank!
  const readerHighlights = await getCollection<{ id: ReaderHighlight }>(
    `sources/${articleName}/reader_highlights`
  )

  const doc: Document = {
    id: articleName,
    jdom: jdoms,
    reader_scribbles: readerScribbles,
    reader_highlights: readerHighlights
  }

  return doc
  // throw error(404, 'Not found')
}
