import { addMessage, getMessagesInRoom } from '@/lib/messages';
import type { NextApiRequest, NextApiResponse } from 'next';

function handler(req: NextApiRequest, res: NextApiResponse) {
    const { roomid } = req.query;
    try {
        const messages = getMessagesInRoom(roomid as string);
        res.status(200).json({messages});
    } catch (err) {    
        res.status(500).end();
    }
}    

export default handler;
