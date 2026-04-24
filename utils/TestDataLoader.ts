import * as fs from 'fs'
export class TestDataLoader {
    static getUsers() {
        return JSON.parse(fs.readFileSync('./test-data/users.json', 'utf-8'))

    }
}