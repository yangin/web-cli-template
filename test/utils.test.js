import { encodeJSON, decodeJSON } from '../src/utils/base64'

describe('Base64 test', () => {
  test('EncodeJSON', () => {
    const testData = {
      site: 'web',
      say: 'hello world'
    }
    const testSuccess = '%7B%22site%22%3A%22web%22%2C%22say%22%3A%22hello%20world%22%7D'

    expect(encodeJSON(testData)).toBe(testSuccess)
  })
  test('DecodeJSON', () => {
    const testData = '%7B%22site%22%3A%22web%22%2C%22say%22%3A%22hello%20world%22%7D'
    const testSuccess = {
      site: 'web',
      say: 'hello world'
    }

    expect(decodeJSON(testData)).toEqual(testSuccess)
  })
})
