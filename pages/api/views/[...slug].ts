import type { NextApiRequest, NextApiResponse } from 'next';
import db from '@/lib/firebase';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query;
  const _slug = typeof slug === 'string' ? slug : slug.join('/');

  if (req.method === 'POST') {
    const ref = db.ref('views').child(_slug);
    const { snapshot } = await ref.transaction((currentViews) => {
      if (currentViews === null) {
        return 1;
      }
      return currentViews + 1;
    });
    return res.status(200).json({
      total: snapshot.val(),
    });
  }

  if (req.method === 'GET') {
    const snapshot = await db.ref('views').child(_slug).once('value');
    const views = snapshot.val();
    return res.status(200).json({ total: views });
  }
};
