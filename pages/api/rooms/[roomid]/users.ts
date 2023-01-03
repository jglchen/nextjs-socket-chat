import { getUsersInRoom } from '@/lib/users';
import type { NextApiRequest, NextApiResponse } from 'next';

function handler(req: NextApiRequest, res: NextApiResponse) {
    const { roomid } = req.query;
    try {
        const users = getUsersInRoom(roomid as string);
        res.status(200).json({users});
    } catch (err) {    
        res.status(500).end();
    }
}    

export default handler;
