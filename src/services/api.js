// Replace this with your Google Apps Script web app URL after deploying
const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || '';

export async function submitSurvey(answers) {
  const timestamp = new Date().toISOString();

  // Log for debugging
  console.log('Survey submitted:', { timestamp, answers });

  // If no Google Script URL configured, just log locally
  if (!GOOGLE_SCRIPT_URL) {
    console.warn('No GOOGLE_SCRIPT_URL configured - data not saved to sheet');
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { success: true };
  }

  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Google Apps Script requires this
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        timestamp,
        ...answers,
      }),
    });

    // With no-cors, we can't read the response, but if no error thrown, assume success
    return { success: true };
  } catch (error) {
    console.error('Failed to submit survey:', error);
    throw new Error('Failed to submit survey. Please try again.');
  }
}
