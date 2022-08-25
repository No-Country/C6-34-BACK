import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'

const placeById = async (req: NextApiRequest, res: NextApiResponse) => {
    const db = new DB()
    const id = req.query.id
    const entry = await db.getPlaceById(id as string)
    res.status(200).json(entry)
}

export default placeById