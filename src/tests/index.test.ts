import { describe, it, expect } from 'vitest'
import { documentToHtml } from '$lib/util'

describe('documentToHtml', () => {
  it('generates html with paragraphs and stuff', () => {
    const html = ''
    expect(html).toBe('<html><head></head><body></body></html>')
  })
})
