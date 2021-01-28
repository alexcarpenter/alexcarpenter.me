import db from '@/lib/firebase';

export default async (req, res) => {
  const slug = req.query.slug.join('/');
  if (req.method === 'POST') {
    const ref = db.ref('views').child(slug);
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
    const snapshot = await db.ref('views').child(slug).once('value');
    const views = snapshot.val();

    return res.status(200).json({ total: views });
  }
};
