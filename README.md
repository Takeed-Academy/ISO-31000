# ISO 31000:2018 Risk Management — Practice Questions

**ISO 31000:2018 إدارة المخاطر — أسئلة تدريبية**

A bilingual (Arabic RTL / English LTR) static practice site for reviewing the
principles, framework, and risk management process of ISO 31000:2018.

Built for **Takeed Academy**. This is a practice and revision tool — it is not an
official certification examination.

---

## Deploying to GitHub Pages

1. Create a repository and push the contents of this folder to the default branch.
2. In the repository, open **Settings → Pages**.
3. Under *Build and deployment*, set **Source** to `Deploy from a branch`, pick your
   branch and the `/ (root)` folder, then save.
4. The site appears at `https://<user>.github.io/<repo>/` within a minute or two.

Everything uses relative paths, so the site also works from a subdirectory, from a
plain web server, or by opening `index.html` directly from disk.

A `.nojekyll` file is included so GitHub Pages serves every file as-is.

---

## Running locally

Just open `index.html` in a browser — there is no build step, no bundler, and no
backend. The question bank is loaded as a plain script (`data/questions.js`), so
no `fetch()` and therefore no local web server is required.

If you prefer to serve it:

```
python3 -m http.server 8000
```

---

## Project structure

```
ISO31000-Practice-Questions/
├── index.html                  Page shell (all copy is injected by app.js)
├── styles.css                  Takeed design system, RTL-aware
├── app.js                      i18n dictionary + practice engine
├── data/
│   ├── questions.js            50-question bilingual bank (loaded by the page)
│   └── questions.json          Identical bank as JSON, for reuse elsewhere
├── assets/logos/               Takeed wordmark, mark, and SVG logo
├── .nojekyll                   Disables Jekyll processing on GitHub Pages
└── README.md
```

---

## Question bank

| Property | Value |
| --- | --- |
| Total questions | 50 |
| Basic | 15 |
| Intermediate | 20 |
| Advanced | 15 |
| Options per question | 4 |
| Languages | Arabic + English |
| Answer indexing | zero-based, against the **original** option order |

`data/questions.js` and `data/questions.json` hold byte-identical content. The page
uses the `.js` form; the `.json` form is kept for any other tooling that needs it.

Question text, options, explanations, and correct answers are used exactly as
supplied — nothing was reworded, reordered, shortened, or re-keyed.

---

## How answer mapping stays correct

Shuffling options is the usual source of scoring bugs in bilingual quizzes. The
engine avoids it with one rule:

1. When a session starts, each question gets **one** permutation of its option
   indices, e.g. `[2, 0, 3, 1]`.
2. That same permutation renders **both** `ar.options` and `en.options`. Arabic and
   English are never shuffled independently.
3. A selection is stored as the **original** option index, never the on-screen
   position:

   ```js
   answers[questionId] = order[clickedDisplayPosition];
   ```

4. Scoring compares original indices: `answers[questionId] === question.answer`.

Because nothing in the session record refers to a screen position or a language,
switching between Arabic and English mid-session only swaps the strings. The
question, the option order, the selection, and the flag all stay put.

The permutation is persisted, so resuming after a refresh restores the identical
layout instead of reshuffling.

---

## Two practice modes

Chosen on the setup screen before each session.

### Study mode (default)

Answer a question, press **Check Answer**, and the result appears immediately:

- the correct option is highlighted in green, your wrong pick in red;
- a verdict banner says whether you were right, and names the correct option;
- the explanation for that question is shown straight away.

The question then locks, so the revealed explanation cannot be used to change the
answer. The question palette also shows which questions you got right and wrong.

### Exam mode

Nothing is revealed while you work — no correct answers, no explanations, and no
correctness hints in the palette. Your score and all explanations appear only after
you finish the session. This is the behaviour required by the original brief.

Both modes share the same scoring, results, and review screens.

---

## Features

- Session setup: 10 / 25 / all 50 questions, filtered by All / Basic / Intermediate
  / Advanced, in Study or Exam mode. Requesting more than are available caps
  silently rather than erroring.
- One question per screen, with progress bar, elapsed timer, and answer counters.
- Question palette showing current / answered / unanswered / flagged, with direct
  jump to any question.
- Flag for review, clear answer, previous / next.
- Confirmation before finishing, naming how many questions are still unanswered.
- Results: score, correct / incorrect / unanswered, time taken, and a per-difficulty
  breakdown.
- Review: every question with your answer, the correct answer, the explanation, and
  status badges — filterable by All / Incorrect / Unanswered / Flagged.
- Session autosaves to `localStorage`; reopening offers **Resume Practice**.
- Keyboard: `←` / `→` to move between questions (mirrored in RTL), `1`–`4` to select
  an option, `Enter` to check the answer then advance (study mode), `Esc` to dismiss
  a dialog.
- Difficulty is hidden while answering and shown only in review, so it can't hint at
  the answer.

---

## Browser support

Modern evergreen browsers (Chrome, Edge, Firefox, Safari). The layout uses CSS
logical properties and `conic-gradient`, both supported since 2021.

Session saving uses `localStorage`. If it is unavailable — private browsing with
storage disabled, or some browsers when opening from `file://` — the site still
works fully for the current session; only resume-after-refresh is lost.

---

## Licensing and content note

Educational practice material prepared for Takeed Academy. ISO standards are the
copyright of ISO. This practice tool paraphrases concepts for learning purposes and
does not reproduce the standard.

مادة تدريبية تعليمية مُعدة لأغراض المراجعة. معايير ISO محمية بحقوق الملكية الخاصة
بالمنظمة الدولية للتقييس، وهذا الموقع يعرض مفاهيم بصياغة تعليمية ولا يعيد نشر نص
المعيار.
