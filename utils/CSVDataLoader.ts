import * as fs from 'fs'
import * as path from 'path'
import { parse } from 'csv-parse/sync'

export interface LoginData {
  username: string
  password: string
  shouldSucceed: string
  expectedresult: string
}

export class CSVDataLoader {
  static getLoginData(): LoginData[] {
    const filePath = path.resolve(
      __dirname,'../test-data/login.csv'
    )
    const content = fs.readFileSync(filePath, 'utf-8')
    return parse(content, {
      columns: true,      // use first row as headers
      skip_empty_lines: true
    })
  }
}