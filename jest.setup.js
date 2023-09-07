import 'whatwg-fetch'
import '@testing-library/jest-dom/extend-expect'
import {server} from './test/server.ts'

process.env.MARVEL_API_URL = 'http://localhost/marvel/api'
process.env.MARVEL_API_PRIVATE_KEY = '911d2cf82c6029b7b3060e869f1e6fb5'
process.env.MARVEL_API_PUBLIC_KEY = 'e17b966cb18526d76bcdfb5175a3f9511597c0b6'

beforeAll(() => server.listen())
// if you need to add a handler after calling setupServer for some specific test
// this will remove that handler for the rest of them
// (which is important for test isolation):
afterEach(() => server.resetHandlers())
afterAll(() => server.close())