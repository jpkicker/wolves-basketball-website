# Firestore Security Rules for Wellington Wolves Website

## Overview
This document contains the recommended Firestore security rules for the video highlights feature.

## Rules Configuration

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Highlights collection
    match /highlights/{highlightId} {
      // Allow anyone to read approved highlights (public viewing)
      allow read: if resource.data.approved == true;
      
      // Allow write only for authenticated team members
      // For now, using a simple password-based system
      // In production, consider implementing proper Firebase Auth
      allow write: if request.auth != null;
      
      // Validate highlight document structure
      allow create: if isValidHighlight(request.resource.data);
      allow update: if isValidHighlight(request.resource.data);
    }
    
    // Team configuration (for storing team password hash, etc.)
    match /config/{configId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null;
    }
  }
}

// Helper function to validate highlight data structure
function isValidHighlight(data) {
  return data.keys().hasAll(['playerId', 'playerName', 'title', 'youtubeUrl', 'youtubeVideoId', 'approved'])
    && data.playerId is string
    && data.playerName is string
    && data.title is string
    && data.youtubeUrl is string
    && data.youtubeVideoId is string
    && data.approved is bool
    && data.submittedAt is timestamp;
}
```

## Current Implementation (Test Mode)

For development and testing, the current rules are likely set to test mode:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

## Security Considerations

1. **Public Reading**: Anyone can read approved highlights, which is intended for coaches and parents to view player content.

2. **Write Restrictions**: Only authenticated users can create/update highlights. Currently using password-based auth in the app.

3. **Data Validation**: The rules validate that required fields are present and have correct types.

4. **Future Enhancements**:
   - Implement Firebase Authentication for more robust access control
   - Add role-based permissions (coaches vs players)
   - Add user-specific document ownership rules
   - Implement audit logging for highlight submissions

## Migration from Test Mode

When ready to implement security:

1. Replace test mode rules with the production rules above
2. Implement Firebase Authentication in the frontend
3. Update the Upload component to use Firebase Auth instead of password
4. Test thoroughly to ensure authorized access works correctly

## Database Collections

### `highlights`
- **Purpose**: Store video highlight submissions
- **Structure**:
  ```javascript
  {
    playerId: "ethan-ranney",
    playerName: "Ethan Ranney", 
    title: "Game Winner vs Miami Elite",
    youtubeUrl: "https://youtube.com/watch?v=...",
    youtubeVideoId: "dQw4w9WgXcQ",
    description: "Optional description",
    submittedAt: timestamp,
    approved: true
  }
  ```

### `config` (optional)
- **Purpose**: Store team configuration like hashed passwords
- **Structure**:
  ```javascript
  {
    teamPasswordHash: "hashed_password_here",
    allowedUploaders: ["email1", "email2"]
  }
  ```

## Deployment Notes

- Test rules thoroughly in Firebase emulator before deploying to production
- Monitor Firebase console for any security rule violations
- Regularly review access logs for suspicious activity