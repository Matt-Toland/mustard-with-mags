/**
 * Google Apps Script for Mustard by Mags Survey
 *
 * SETUP INSTRUCTIONS:
 * 1. Create a new Google Sheet
 * 2. Go to Extensions > Apps Script
 * 3. Delete any code in the editor and paste this entire file
 * 4. Click Deploy > New deployment
 * 5. Choose "Web app" as the type
 * 6. Set "Execute as" to "Me"
 * 7. Set "Who has access" to "Anyone"
 * 8. Click Deploy and authorize when prompted
 * 9. Copy the Web app URL
 * 10. Create a .env file in your project with:
 *     VITE_GOOGLE_SCRIPT_URL=your_web_app_url_here
 */

// Column headers - these match your survey question IDs
const HEADERS = [
  'timestamp',
  'name',
  'email',
  'likesMustard',
  'favouriteType',
  'frequency',
  'favouriteBrand',
  'favouriteUse',
  'flavoursToTry',
  'whyDislike'
];

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Add headers if this is a fresh sheet
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
    }

    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);

    // Build row in correct column order
    const row = HEADERS.map(header => {
      const value = data[header];
      // Handle arrays (multi-select) by joining with commas
      if (Array.isArray(value)) {
        return value.join(', ');
      }
      return value || '';
    });

    // Append the row
    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function - run this in Apps Script to verify it works
function testDoPost() {
  const testEvent = {
    postData: {
      contents: JSON.stringify({
        timestamp: new Date().toISOString(),
        name: 'Test User',
        email: 'test@example.com',
        likesMustard: 'Yes',
        favouriteType: 'Dijon',
        frequency: 'Weekly',
        favouriteBrand: 'Maille',
        favouriteUse: 'On sandwiches',
        flavoursToTry: ['Spicy', 'Smoky'],
        whyDislike: ''
      })
    }
  };

  doPost(testEvent);
  Logger.log('Test row added to sheet!');
}
