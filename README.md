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

### Why options are re-arranged even though nothing is shuffled

The authored bank has its correct answers in a strict `A, B, C, D, A, B, C, D…`
cycle across all 50 questions. Showing options in the authored order would let a
learner score 100% by tapping A, B, C, D repeatedly without reading anything.

So each question is given a **fixed arrangement derived from its own id**
(`fixedOptionOrder` in `app.js`). It is identical on every device, in every
session, and after every reload — which is what keeps the printed answer key
valid — but it is not the authored order, so the cycle is broken. Measured over
this bank the correct letters land A 13 / B 12 / C 13 / D 12, and no blind
strategy beats 26%.

No question text and no correct answer was altered; only the position an option
is displayed in changes.

`tools/build_model_answer.py` reimplements the same function, and
`tools/verify_all.sh` fails the build if the two ever disagree — so the PDF can
never drift from the site.

---

## How a session works

Press **Start Practice**. Every session covers all 50 questions in the same fixed
order, one question per screen.

Answer a question, then press **Next**. The first press reveals the result rather
than navigating:

- the correct option is highlighted in green, your wrong pick in red;
- a verdict banner says whether you were right, and names the correct option;
- the explanation for that question is shown straight away.

Press **Next** again to move on. The question locks once revealed, so the
explanation cannot be used to change the answer. Questions you skip without
answering advance on a single press. The palette shows which questions you got
right and wrong.

---

## Changing how sessions are configured

The setup screen is deliberately a single button. What a session looks like is
fixed by three constants at the top of `app.js`:

```js
var SESSION_SIZE = "all";        // "all", or a number such as 10 / 25
var SESSION_DIFFICULTY = "all";  // "all" | "basic" | "intermediate" | "advanced"
var SESSION_MODE = "study";      // "study" | "exam"
var SHUFFLE_QUESTIONS = false;   // fixed question order
var SHUFFLE_OPTIONS = false;     // fixed option order
```

The engine still supports every one of those values, so shortening sessions,
restricting them to one difficulty level, or switching to exam behaviour is a
one-line change — no UI work required.

`SESSION_MODE = "exam"` restores the original brief's behaviour: nothing is
revealed while you work — no correct answers, no explanations, and no correctness
hints in the palette — and the score and explanations appear only at the end.

---

## Features

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
  an option, `Enter` to reveal then advance, `Esc` to dismiss a dialog.
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
