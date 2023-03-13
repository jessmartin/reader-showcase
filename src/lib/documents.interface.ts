import type { IFirestoreMetaData } from 'sveltefirets'

export interface JDOM {
  text: string
  marks: Mark[]
  readingOrder: ReadingOrder[]
}

export interface Document extends IFirestoreMetaData {
  id: string
  jdom: JDOM[]
  reader_scribbles?: {
    id: ReaderScribble
  }[]
  reader_highlights?: {
    id: ReaderHighlight
  }[]
}

export interface Mark {
  start: number
  end: number
  type: string
  labels?: string[]
}

export interface ReadingOrder {
  start: number
  end: number
  index: number
}

export interface ReaderScribble {
  type: { value: 'reader_scribbles' }
  deleted: boolean
  diameter: number
  id: { value: string }
  pageIndex: number
  points: Point[]
  rgbaColor: RGBAColor
}

export interface Point {
  x: number
  y: number
  pressure: number
}

export interface RGBAColor {
  red: number
  green: number
  blue: number
  alpha: number
}

export interface ReaderHighlight {
  type: { value: 'reader_highlights' }
  deleted: boolean
  startOffset: number
  endOffset: number
  id: { value: string }
}
