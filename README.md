# Built an AI-powered study assistant with interactive chat UI using HTML, CSS, and JavaScript

A simple web-based study companion that allows users to enter a topic and receive:

- 📖 A summary of the topic
- ❓ Important questions
- 🧠 A 5-question multiple-choice quiz

## Features

- HTML, CSS, JavaScript frontend
- Placeholder for API integration (e.g., OpenAI, your own backend)
- Clean, modern UI

## Getting Started

1. Clone the repository (or copy files into your workspace):
   ```bash
   git clone <your-repo-url>
   cd smartprep-ai
   ```
2. Serve the static files using any HTTP server (e.g., `Live Server` extension, `python -m http.server`) or open `index.html` directly.
3. Replace the `fetch` URL in `script.js` with a real API endpoint that accepts POST requests with a JSON body `{ topic }` and returns JSON in the form:
   ```json
   {
     "summary": "...",
     "questions": ["...", "..."],
     "quiz": [
       {
         "question": "...",
         "options": ["A", "B", "C", "D"],
         "answer": "A"
       }
     ]
   }
   ```
4. Push to GitHub and share the repo link.

## Final UI Idea

A clean card-based layout with a header, input box for topic, and dynamically-generated result cards for summary, questions, and quiz. The `style.css` file contains basic styling which can be extended with animations or a CSS framework like Tailwind or Bootstrap.

---

✨ **Note:** To send it to a GitHub account, create a repository there and push your local folder with `git init`, `git add .`, `git commit -m "Initial commit"`, and `git remote add origin <url>` followed by `git push -u origin main`.

Good luck building SmartPrep AI!
