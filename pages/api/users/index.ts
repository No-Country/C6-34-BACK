import { IncomingMessage, ServerResponse } from 'http'
import DB from '@database'

const allUsers = async (req: IncomingMessage, res: ServerResponse) => {
    const db = new DB()
    const allEntries = await db.getAllUsers()
    const length = allEntries.length

    res.statusCode = 200
    res.setHeader('Content-type','application/json' )
    res.end(JSON.stringify({data: allEntries}))
}

export default allUsers