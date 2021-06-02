import admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
      projectId: 'personal-website-290318',
    }),
    databaseURL: 'https://personal-website-290318-default-rtdb.firebaseio.com/',
  });
}

export default admin.database();
