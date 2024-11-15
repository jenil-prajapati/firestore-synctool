const admin = require('firebase-admin');
const fs = require('fs');

// Initialize Firebase with service account credentials
const serviceAccount = require('./credentials.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const areasCollection = db.collection('area'); // Match the collection name exactly as in Firestore

// Function to sync JSON data to Firestore
async function syncAreas() {
  const areasData = JSON.parse(fs.readFileSync('areas.json', 'utf8'));

  
  for (const area of areasData) {
    const docRef = areasCollection.doc(area.id);
    const doc = await docRef.get();

    // Only update if there are differences to avoid unnecessary writes
    if (!doc.exists || JSON.stringify(doc.data()) !== JSON.stringify(area)) {
      await docRef.set({
        id: area.id,
        name: area.name,
        easy: area.easy,
        medium: area.medium,
        hard: area.hard
      });
      console.log(`Updated/added document with id: ${area.id}`);
    } else {
      console.log(`No changes for document with id: ${area.id}`);
    }
  }
}

syncAreas()
  .then(() => {
    console.log('Sync completed');
    process.exit();
  })
  .catch((error) => {
    console.error('Error syncing data:', error);
  });
