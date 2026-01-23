# 🟡 Mags Mustard Survey — Build Plan

## Project Overview

Build a fun, branded web app to collect survey responses for Mags' mustard-making venture. The app should feel playful, mustard-themed, and more engaging than a standard Google Form.

**Vibe:** Retro-fun, hand-made feel, mustard yellow everywhere, playful copy, maybe slightly chaotic in a charming way — like a friend's passion project.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React (Vite) |
| Styling | Tailwind CSS |
| Data Storage | Google Sheets (via Google Sheets API) |
| Hosting | Google Cloud Run (containerized) |
| Build | Docker |

---

## Core Features

### 1. Multi-Step Survey Flow
- Don't show all questions at once — guide users through one question (or small group) at a time
- Progress indicator (e.g., "Question 3 of 7" or a mustard jar filling up)
- Smooth transitions between steps

### 2. Conditional Logic
- If user answers "No" to "Do you like mustard?" → skip to the "Why don't you like it?" question
- Mustard lovers get the full question set

### 3. Survey Questions (from Mags' original)

| # | Question | Type | Options |
|---|----------|------|---------|
| 1 | Do you like Mustard? | Single select | Yes, No |
| 2 | What is your favourite type of Mustard? | Single select | English, Dijon, Wholegrain, American/Yellow, Honey Mustard, Other (text) |
| 3 | How often do you use Mustard? | Single select | Daily, Weekly, Monthly, Rarely, Never |
| 4 | What is your favourite Mustard Brand? (& why?) | Text input | — |
| 5 | Favourite way to use Mustard / crazy uses? | Text input | — |
| 6 | What flavours would you try? | Multi-select | Sweet, Spicy, Smoky, Herby, Tangy, Hot, Experimental, Other (text) |
| 7 | (Non-fans) Why don't you like mustard? | Multi-select | Too Spicy, Too Sour, Too Strong/Sharp, Don't know how to use it, Don't like the taste, Texture, Other (text) |

### 4. Fun Submission Experience
- Celebratory animation on submit (confetti? mustard splat? jar filling?)
- Thank you message with Mags' personality: "You're officially a Mustard-teer! 🟡"

### 5. Data Storage → Google Sheets
- Each submission = one row in the sheet
- Columns match the questions above
- Include timestamp column
- Use Google Sheets API (service account approach)

---

## Design / Branding Guidelines

### Color Palette
| Name | Hex | Usage |
|------|-----|-------|
| Mustard Yellow | `#FFDB58` | Primary background, accents |
| Dijon Gold | `#C49102` | Headers, buttons |
| Dark Brown | `#3D2314` | Text |
| Cream | `#FFFEF0` | Card backgrounds |
| Hot Dog Red | `#C41E3A` | Accent/highlight (sparingly) |

### Typography
- Headers: Something fun/retro — consider Google Fonts like `Fredoka One`, `Baloo 2`, or `Lilita One`
- Body: Clean and readable — `Inter`, `Nunito`, or `DM Sans`

### Visual Elements
- Mustard jar illustrations (can be simple SVGs or CSS art)
- Subtle grain/texture overlay for that artisanal feel
- Hand-drawn style icons if possible
- Maybe a squiggly underline or blob shapes

### Tone of Copy
- Playful, warm, friend-talking-to-friend
- Use Mags' phrasing: "Mustard-teers", "The Mustard Queen", "2026 is the year of the condiment!"
- Emoji use is encouraged 🟡🌭✨

---

## Project Structure

```
mags-mustard-survey/
├── src/
│   ├── components/
│   │   ├── Survey/
│   │   │   ├── SurveyContainer.jsx    # Main survey logic & state
│   │   │   ├── ProgressBar.jsx        # Visual progress indicator
│   │   │   ├── Question.jsx           # Generic question wrapper
│   │   │   ├── SingleSelect.jsx       # Radio button question
│   │   │   ├── MultiSelect.jsx        # Checkbox question
│   │   │   ├── TextInput.jsx          # Free text question
│   │   │   └── ThankYou.jsx           # Submission confirmation
│   │   ├── Layout/
│   │   │   ├── Header.jsx             # Logo, title
│   │   │   └── Footer.jsx             # Credits, link to Mags
│   │   └── ui/                        # Reusable UI components (Button, Card, etc.)
│   ├── hooks/
│   │   └── useSurvey.js               # Survey state management
│   ├── services/
│   │   └── sheetsApi.js               # Google Sheets submission logic
│   ├── data/
│   │   └── questions.js               # Survey questions config
│   ├── styles/
│   │   └── index.css                  # Tailwind + custom styles
│   ├── App.jsx
│   └── main.jsx
├── public/
│   └── assets/                        # Images, SVGs
├── Dockerfile
├── .env.example
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## Google Sheets Integration

### Setup Steps
1. Create a Google Cloud project
2. Enable Google Sheets API
3. Create a service account & download JSON key
4. Create the destination spreadsheet
5. Share the spreadsheet with the service account email (Editor access)

### Environment Variables
```
VITE_GOOGLE_SHEETS_ID=<spreadsheet-id>
GOOGLE_SERVICE_ACCOUNT_EMAIL=<service-account-email>
GOOGLE_PRIVATE_KEY=<private-key-from-json>
```

### Submission Flow
- Frontend collects all answers into an object
- POST to a small backend endpoint (or serverless function)
- Backend authenticates with Google Sheets API
- Appends a new row to the sheet

### Sheet Columns
```
Timestamp | Likes Mustard | Favourite Type | Frequency | Favourite Brand | Favourite Use | Flavours to Try | Why Dislike (if applicable)
```

---

## Deployment — Google Cloud Run

### Dockerfile
```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
```

### Deployment Steps
1. Build Docker image: `docker build -t mags-mustard-survey .`
2. Tag for GCR: `docker tag mags-mustard-survey gcr.io/[PROJECT_ID]/mags-mustard-survey`
3. Push: `docker push gcr.io/[PROJECT_ID]/mags-mustard-survey`
4. Deploy to Cloud Run:
   ```bash
   gcloud run deploy mags-mustard-survey \
     --image gcr.io/[PROJECT_ID]/mags-mustard-survey \
     --platform managed \
     --region europe-west1 \
     --allow-unauthenticated
   ```

### Backend for Sheets API
Since we need server-side auth for Google Sheets, options:
1. **Simple:** Add a Cloud Function / Cloud Run service just for the POST endpoint
2. **Integrated:** Make this a full-stack app with Express backend serving the React frontend

**Recommendation:** Separate Cloud Function for the sheets submission — keeps frontend simple and static.

---

## Nice-to-Haves (Stretch Goals)

- [ ] Animated mustard jar that fills up as you progress
- [ ] Sound effects (squeeze bottle sound on submit?)
- [ ] Share button after completion ("I helped Mags make mustard!")
- [ ] Easter egg: Konami code reveals a dancing mustard bottle
- [ ] Dark mode = "Dijon Mode" 🟤
- [ ] Live response counter on thank you page

---

## Development Checklist

- [ ] Initialize Vite + React project
- [ ] Set up Tailwind CSS with custom mustard theme
- [ ] Build question components
- [ ] Implement multi-step survey flow with state management
- [ ] Add conditional logic for mustard fans vs non-fans
- [ ] Create Google Cloud project & Sheets API setup
- [ ] Build Cloud Function for sheet submissions
- [ ] Design & implement branding (colors, fonts, illustrations)
- [ ] Add progress indicator
- [ ] Build thank you / confirmation screen
- [ ] Add form validation
- [ ] Test full submission flow
- [ ] Dockerize the app
- [ ] Deploy to Cloud Run
- [ ] Custom domain (optional)
- [ ] Share with Mags! 🎉

---

## Notes for the Agent

- Keep it simple but delightful — this is a passion project, not enterprise software
- Prioritize the fun factor in the UI
- Make sure mobile experience is great (people will share this link)
- The copy should sound like Mags wrote it, not a corporation
- If stuck on illustrations, simple CSS/SVG mustard jars work great

---

*Plan created for Mags' Mustard Survey App — 2026, Year of the Condiment* 🟡