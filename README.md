# Firestore Sync Tool

This tool allows you to sync data from a JSON file (`areas.json`) to a specified Firestore collection. It reads the data from `areas.json` and updates the Firestore database only if there are changes, minimizing unnecessary writes.

## Project Structure


## Prerequisites

- **Node.js**: Version 8 or higher.
- **Firebase Project**: Set up a Firestore database in Firebase.
- **Service Account Key**: A Firebase service account key for authenticating the tool.

## Setup

 **Clone this Repository**:
   ```bash
   git clone <repository-url>
   cd firestore-sync-tool
```

## Setup
1. npm install
2. credentials.json firestore setup
3. node syncAreas.js
