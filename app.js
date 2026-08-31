/*
 * Takeed Academy — ISO 31000:2018 Risk Management Practice Questions
 * Bilingual (Arabic RTL / English LTR) static practice tool.
 *
 * ANSWER-MAPPING CONTRACT (do not change casually):
 *   - Each question gets ONE permutation `order` of the original option indices.
 *   - `order[displayPosition] === originalOptionIndex`.
 *   - The SAME `order` renders both ar.options and en.options, so switching
 *     language never reorders or remaps anything.
 *   - Selections are stored as the ORIGINAL option index:
 *         answers[questionId] = order[clickedDisplayPosition]
 *   - Correctness is therefore language- and shuffle-independent:
 *         answers[questionId] === question.answer
 *   - `order` is persisted, so Resume restores the identical display order.
 */

(function () {
  "use strict";

  var STORAGE_KEY = "takeedIso31000Practice.v1";
  var BANK = (typeof window !== "undefined" && window.ISO31000_QUESTIONS) || [];

  /* Arabic is the default because index.html is served as lang="ar" dir="rtl".
     Sniffing navigator.language would flip direction after first paint and
     cause a visible layout jump, so the choice is left to the user.
     NOTE: must be defined before `state` is initialised below. */
  var DEFAULT_LANG = "ar";

  /* ---------------------------------------------------------------- i18n */

  var I18N = {
    ar: {
      dir: "rtl",
      htmlLang: "ar",
      docTitle: "ISO 31000:2018 إدارة المخاطر — أسئلة تدريبية",
      brandTitle: "ISO 31000:2018",
      brandSubtitle: "أسئلة تدريبية",
      skip: "تخطٍّ إلى المحتوى",
      langLabel: "اللغة",

      heroEyebrow: "أداة مراجعة تدريبية",
      heroTitle: "ISO 31000:2018 — إدارة المخاطر",
      heroSubtitle: "أسئلة تدريبية ثنائية اللغة",
      heroDescription: "بنك تدريبي يساعد على مراجعة مبادئ وإطار وعملية إدارة المخاطر وفق ISO 31000:2018. هذه الأسئلة لأغراض التدريب والمراجعة وليست اختبار اعتماد رسمي.",

      statQuestions: "سؤالًا في البنك",
      statLevels: "مستويات صعوبة",
      statLanguages: "لغتان",

      setupTitle: "إعداد جلسة التدريب",
      setupHint: "اختر عدد الأسئلة ومستوى الصعوبة، ثم ابدأ. يتم اختيار الأسئلة عشوائيًا في كل جلسة جديدة.",
      countLabel: "عدد الأسئلة",
      difficultyLabel: "مستوى الصعوبة",
      count10: "10 أسئلة",
      count25: "25 سؤالًا",
      count50: "جميع الأسئلة (50)",
      diffAll: "جميع المستويات",
      diffBasic: "أساسي",
      diffIntermediate: "متوسط",
      diffAdvanced: "متقدم",
      availableNote: "المتاح بهذا الاختيار: {n} سؤالًا",
      cappedNote: "المتاح بهذا الاختيار {n} سؤالًا فقط، وستبدأ الجلسة بها جميعًا.",
      startPractice: "ابدأ التدريب",

      resumeTitle: "لديك جلسة تدريب غير مكتملة",
      resumeBody: "يمكنك استكمال الجلسة السابقة بنفس ترتيب الأسئلة والخيارات، أو بدء جلسة جديدة.",
      resumeMeta: "التقدم: {answered} من {total} — الوقت المنقضي {time}",
      resumeAction: "استكمال التدريب",
      resumeFinishedTitle: "لديك نتيجة جلسة سابقة",
      resumeFinishedBody: "يمكنك عرض نتيجة جلستك السابقة ومراجعة إجاباتها، أو بدء جلسة جديدة.",
      viewLastResults: "عرض النتيجة السابقة",
      discardSession: "بدء جلسة جديدة",

      practiceEyebrow: "جلسة تدريب",
      questionOf: "السؤال {current} من {total}",
      answeredCount: "{n} مُجاب",
      flaggedCount: "{n} مُعلَّم",
      elapsed: "الوقت المنقضي",
      progressLabel: "التقدم",
      previous: "السابق",
      next: "التالي",
      clearAnswer: "مسح الإجابة",
      flag: "تعليم للمراجعة",
      unflag: "إلغاء التعليم",
      finish: "إنهاء التدريب",
      questionMap: "لوحة الأسئلة",
      toggleMap: "لوحة الأسئلة",
      legendCurrent: "الحالي",
      legendAnswered: "مُجاب",
      legendUnanswered: "غير مُجاب",
      legendFlagged: "مُعلَّم",
      goToQuestion: "الانتقال إلى السؤال {n}",

      confirmTitle: "إنهاء جلسة التدريب",
      confirmUnanswered: "لديك {n} من الأسئلة غير مجابة. هل تريد إنهاء التدريب وإظهار النتائج؟",
      confirmComplete: "لقد أجبت عن جميع الأسئلة. هل تريد إنهاء التدريب وإظهار النتائج؟",
      confirmYes: "إنهاء وعرض النتائج",
      confirmNo: "العودة للأسئلة",

      resultsEyebrow: "ملخص الأداء",
      resultsTitle: "نتيجة جلسة التدريب",
      scoreLabel: "النسبة",
      correct: "إجابات صحيحة",
      incorrect: "إجابات خاطئة",
      unanswered: "غير مجابة",
      totalQuestions: "إجمالي الأسئلة",
      timeTaken: "الوقت المستغرق",
      breakdownTitle: "التوزيع حسب مستوى الصعوبة",
      performanceLabel: "مستوى الأداء التدريبي",
      perfStrong: "أداء قوي",
      perfGood: "أداء جيد",
      perfDeveloping: "أداء يحتاج إلى تطوير",
      perfFoundational: "أداء يحتاج إلى مراجعة أساسية",
      practiceOnlyNote: "هذه نتيجة تدريبية لأغراض المراجعة الذاتية فقط، وليست نتيجة اختبار اعتماد.",
      reviewAnswers: "مراجعة الإجابات",
      newSession: "جلسة تدريب جديدة",

      reviewEyebrow: "مراجعة تفصيلية",
      reviewTitle: "مراجعة الإجابات",
      backToResults: "العودة إلى النتيجة",
      filterAll: "الكل",
      filterIncorrect: "الخاطئة",
      filterUnanswered: "غير المجابة",
      filterFlagged: "المُعلَّمة",
      filterEmpty: "لا توجد أسئلة ضمن هذا التصنيف.",
      yourAnswer: "إجابتك",
      correctAnswer: "الإجابة الصحيحة",
      noAnswer: "لم تتم الإجابة",
      explanation: "الشرح",
      statusCorrect: "صحيحة",
      statusIncorrect: "خاطئة",
      statusUnanswered: "غير مجابة",
      statusFlagged: "مُعلَّم",
      questionN: "سؤال {n}",

      restart: "إعادة ضبط الجلسة",
      restartConfirmTitle: "بدء جلسة جديدة",
      restartConfirmBody: "سيتم حذف تقدّم الجلسة الحالية وإجاباتها. هل تريد المتابعة؟",
      restartYes: "نعم، ابدأ من جديد",
      cancel: "إلغاء",

      footerBrand: "Takeed Academy — ISO 31000:2018 Practice Questions",
      footerNote: "مادة تدريبية تعليمية مُعدة لأغراض المراجعة. معايير ISO محمية بحقوق الملكية الخاصة بالمنظمة الدولية للتقييس، وهذا الموقع يعرض مفاهيم بصياغة تعليمية ولا يعيد نشر نص المعيار.",

      bankErrorTitle: "تعذّر تحميل بنك الأسئلة",
      bankErrorBody: "لم يتم العثور على ملف الأسئلة. تأكد من وجود الملف data/questions.js بجانب الصفحة."
    },

    en: {
      dir: "ltr",
      htmlLang: "en",
      docTitle: "ISO 31000:2018 Risk Management — Practice Questions",
      brandTitle: "ISO 31000:2018",
      brandSubtitle: "Practice Questions",
      skip: "Skip to content",
      langLabel: "Language",

      heroEyebrow: "Practice and revision tool",
      heroTitle: "ISO 31000:2018 — Risk Management",
      heroSubtitle: "Bilingual Practice Questions",
      heroDescription: "A practice bank for reviewing the principles, framework, and risk management process of ISO 31000:2018. These questions are for learning and revision and are not an official certification examination.",

      statQuestions: "questions in the bank",
      statLevels: "difficulty levels",
      statLanguages: "languages",

      setupTitle: "Set up your practice session",
      setupHint: "Choose how many questions and which difficulty level, then begin. Questions are selected at random for every new session.",
      countLabel: "Number of questions",
      difficultyLabel: "Difficulty level",
      count10: "10 Questions",
      count25: "25 Questions",
      count50: "All 50 Questions",
      diffAll: "All Levels",
      diffBasic: "Basic",
      diffIntermediate: "Intermediate",
      diffAdvanced: "Advanced",
      availableNote: "Available with this selection: {n} questions",
      cappedNote: "Only {n} questions match this selection, so the session will use all of them.",
      startPractice: "Start Practice",

      resumeTitle: "You have an unfinished practice session",
      resumeBody: "You can resume your previous session with the same question and option order, or start a new one.",
      resumeMeta: "Progress: {answered} of {total} — elapsed {time}",
      resumeAction: "Resume Practice",
      resumeFinishedTitle: "You have results from a previous session",
      resumeFinishedBody: "You can view your previous results and review those answers, or start a new session.",
      viewLastResults: "View Previous Results",
      discardSession: "Start New Session",

      practiceEyebrow: "Practice session",
      questionOf: "Question {current} of {total}",
      answeredCount: "{n} answered",
      flaggedCount: "{n} flagged",
      elapsed: "Elapsed time",
      progressLabel: "Progress",
      previous: "Previous",
      next: "Next",
      clearAnswer: "Clear Answer",
      flag: "Flag for Review",
      unflag: "Unflag",
      finish: "Finish Practice",
      questionMap: "Question Palette",
      toggleMap: "Question palette",
      legendCurrent: "Current",
      legendAnswered: "Answered",
      legendUnanswered: "Unanswered",
      legendFlagged: "Flagged",
      goToQuestion: "Go to question {n}",

      confirmTitle: "Finish practice session",
      confirmUnanswered: "You have {n} unanswered questions. Do you want to finish the practice session and view your results?",
      confirmComplete: "You have answered every question. Do you want to finish the practice session and view your results?",
      confirmYes: "Finish and view results",
      confirmNo: "Back to questions",

      resultsEyebrow: "Performance summary",
      resultsTitle: "Practice Session Results",
      scoreLabel: "Score",
      correct: "Correct answers",
      incorrect: "Incorrect answers",
      unanswered: "Unanswered",
      totalQuestions: "Total questions",
      timeTaken: "Time taken",
      breakdownTitle: "Breakdown by difficulty",
      performanceLabel: "Practice performance",
      perfStrong: "Strong performance",
      perfGood: "Good performance",
      perfDeveloping: "Developing performance",
      perfFoundational: "Needs foundational review",
      practiceOnlyNote: "This is a practice result for self-revision only. It is not a certification examination result.",
      reviewAnswers: "Review Answers",
      newSession: "New Practice Session",

      reviewEyebrow: "Detailed review",
      reviewTitle: "Review Answers",
      backToResults: "Back to Results",
      filterAll: "All",
      filterIncorrect: "Incorrect",
      filterUnanswered: "Unanswered",
      filterFlagged: "Flagged",
      filterEmpty: "No questions match this filter.",
      yourAnswer: "Your answer",
      correctAnswer: "Correct answer",
      noAnswer: "Not answered",
      explanation: "Explanation",
      statusCorrect: "Correct",
      statusIncorrect: "Incorrect",
      statusUnanswered: "Unanswered",
      statusFlagged: "Flagged",
      questionN: "Question {n}",

      restart: "Reset session",
      restartConfirmTitle: "Start a new session",
      restartConfirmBody: "This will discard the current session progress and answers. Do you want to continue?",
      restartYes: "Yes, start over",
      cancel: "Cancel",

      footerBrand: "Takeed Academy — ISO 31000:2018 Practice Questions",
      footerNote: "Educational practice material prepared for Takeed Academy. ISO standards are the copyright of ISO. This practice tool paraphrases concepts for learning purposes and does not reproduce the standard.",

      bankErrorTitle: "Question bank could not be loaded",
      bankErrorBody: "The question data file was not found. Make sure data/questions.js sits next to this page."
    }
  };

  var DIFFICULTY_KEYS = { basic: "diffBasic", intermediate: "diffIntermediate", advanced: "diffAdvanced" };
  var DIFFICULTY_ORDER = ["basic", "intermediate", "advanced"];

  /* --------------------------------------------------------------- state */

  var state = loadState();
  var timerHandle = null;
  var pendingModal = null;

  function defaultState() {
    return {
      lang: DEFAULT_LANG,
      view: "setup",
      config: { count: 10, difficulty: "all" },
      session: null
    };
  }

  function loadState() {
    var fallback = defaultState();
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return fallback;
      var saved = JSON.parse(raw);
      var merged = {
        lang: saved.lang === "ar" || saved.lang === "en" ? saved.lang : fallback.lang,
        view: "setup",
        config: {
          count: saved.config && saved.config.count ? saved.config.count : 10,
          difficulty: saved.config && saved.config.difficulty ? saved.config.difficulty : "all"
        },
        session: sanitizeSession(saved.session)
      };
      return merged;
    } catch (e) {
      return fallback;
    }
  }

  /* A stored session is only trusted if every id still exists in the bank and
     every persisted permutation is a genuine permutation of [0..n-1]. */
  function sanitizeSession(session) {
    if (!session || !Array.isArray(session.ids) || !session.ids.length) return null;
    var byId = {};
    BANK.forEach(function (q) { byId[q.id] = q; });

    var ids = session.ids.filter(function (id) { return Object.prototype.hasOwnProperty.call(byId, id); });
    if (ids.length !== session.ids.length || !ids.length) return null;

    var orders = {};
    for (var i = 0; i < ids.length; i++) {
      var id = ids[i];
      var order = session.orders && session.orders[id];
      var size = byId[id].en.options.length;
      if (!isPermutation(order, size)) return null;
      orders[id] = order.slice();
    }

    var answers = {};
    Object.keys(session.answers || {}).forEach(function (key) {
      var id = Number(key);
      var value = session.answers[key];
      if (ids.indexOf(id) === -1) return;
      if (!Number.isInteger(value) || value < 0 || value >= byId[id].en.options.length) return;
      answers[id] = value;
    });

    var flags = {};
    Object.keys(session.flags || {}).forEach(function (key) {
      var id = Number(key);
      if (ids.indexOf(id) !== -1 && session.flags[key] === true) flags[id] = true;
    });

    var current = Number(session.current);
    if (!Number.isInteger(current) || current < 0 || current >= ids.length) current = 0;

    var elapsed = Number(session.elapsedSeconds);
    if (!Number.isFinite(elapsed) || elapsed < 0) elapsed = 0;

    return {
      ids: ids,
      orders: orders,
      answers: answers,
      flags: flags,
      current: current,
      elapsedSeconds: Math.floor(elapsed),
      finished: session.finished === true,
      reviewFilter: ["all", "incorrect", "unanswered", "flagged"].indexOf(session.reviewFilter) !== -1
        ? session.reviewFilter : "all",
      config: {
        count: session.config && session.config.count ? session.config.count : ids.length,
        difficulty: session.config && session.config.difficulty ? session.config.difficulty : "all"
      }
    };
  }

  function isPermutation(arr, size) {
    if (!Array.isArray(arr) || arr.length !== size) return false;
    var seen = new Array(size).fill(false);
    for (var i = 0; i < arr.length; i++) {
      var v = arr[i];
      if (!Number.isInteger(v) || v < 0 || v >= size || seen[v]) return false;
      seen[v] = true;
    }
    return true;
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        lang: state.lang,
        config: state.config,
        session: state.session
      }));
    } catch (e) {
      /* Private-mode or quota failures must not break the session in memory. */
    }
  }

  /* ------------------------------------------------------------ utilities */

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function t(key, vars) {
    var dict = I18N[state.lang] || I18N.en;
    var value = dict[key];
    if (value === undefined) value = (I18N.en[key] !== undefined ? I18N.en[key] : key);
    if (vars) {
      Object.keys(vars).forEach(function (name) {
        value = value.split("{" + name + "}").join(String(vars[name]));
      });
    }
    return value;
  }

  function esc(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function formatClock(totalSeconds) {
    var s = Math.max(0, Math.floor(totalSeconds));
    var h = Math.floor(s / 3600);
    var m = Math.floor((s % 3600) / 60);
    var sec = s % 60;
    var pad = function (n) { return String(n).padStart(2, "0"); };
    return h > 0 ? h + ":" + pad(m) + ":" + pad(sec) : pad(m) + ":" + pad(sec);
  }

  /* Latin digits everywhere keeps Arabic and English numerals consistent and
     avoids mixed-numeral rendering inside RTL text. */
  function num(value) { return String(value); }

  function icon(name) {
    var paths = {
      play: '<path d="M6 4l14 8-14 8z"/>',
      arrowNext: '<path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
      arrowPrev: '<path d="M19 12H6M11 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
      flag: '<path d="M5 21V4M5 4h11l-1.5 3.5L16 11H5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
      check: '<path d="M20 6 9 17l-5-5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>',
      cross: '<path d="M18 6 6 18M6 6l12 12" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>',
      dash: '<path d="M6 12h12" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/>',
      eraser: '<path d="M4 18h16M8 18 4 14l8-8 6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
      grid: '<path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
      send: '<path d="M4 12 20 5l-6 15-3-7z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
      rotate: '<path d="M4 12a8 8 0 1 1 2.6 5.9M4 18v-5h5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
      list: '<path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'
    };
    var body = paths[name] || "";
    /* Directional glyphs mirror with the writing direction. */
    var flip = (name === "arrowNext" || name === "arrowPrev") && state.lang === "ar"
      ? ' style="transform:scaleX(-1)"' : "";
    return '<svg class="ic" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false"' + flip + '>' + body + "</svg>";
  }

  function announce(message) {
    var region = $("#liveRegion");
    if (region) region.textContent = message;
  }

  /* --------------------------------------------------- session lifecycle */

  function availableQuestions(difficulty) {
    if (!difficulty || difficulty === "all") return BANK.slice();
    return BANK.filter(function (q) { return q.difficulty === difficulty; });
  }

  function shuffled(list) {
    var arr = list.slice();
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
    }
    return arr;
  }

  function startSession(count, difficulty) {
    var pool = shuffled(availableQuestions(difficulty));
    var take = Math.min(count, pool.length);
    var picked = pool.slice(0, take);

    var ids = [];
    var orders = {};
    picked.forEach(function (q) {
      ids.push(q.id);
      /* ONE permutation per question, shared by both languages. */
      orders[q.id] = shuffled(q.en.options.map(function (_, i) { return i; }));
    });

    state.config = { count: count, difficulty: difficulty };
    state.session = {
      ids: ids,
      orders: orders,
      answers: {},
      flags: {},
      current: 0,
      elapsedSeconds: 0,
      finished: false,
      reviewFilter: "all",
      config: { count: count, difficulty: difficulty }
    };
    state.view = "practice";
    saveState();
    startTimer();
    render();
  }

  function questionById(id) {
    for (var i = 0; i < BANK.length; i++) if (BANK[i].id === id) return BANK[i];
    return null;
  }

  function currentQuestion() {
    if (!state.session) return null;
    return questionById(state.session.ids[state.session.current]);
  }

  function localized(question) {
    return question[state.lang] || question.en;
  }

  /* Display position -> original option index. */
  function displayOptions(question) {
    var order = state.session.orders[question.id];
    var loc = localized(question);
    return order.map(function (originalIndex) {
      return { originalIndex: originalIndex, text: loc.options[originalIndex] };
    });
  }

  function selectAnswer(question, displayPosition) {
    var originalIndex = state.session.orders[question.id][displayPosition];
    state.session.answers[question.id] = originalIndex;
    saveState();
    render();
  }

  function clearAnswer(question) {
    delete state.session.answers[question.id];
    saveState();
    render();
  }

  function toggleFlag(question) {
    if (state.session.flags[question.id]) delete state.session.flags[question.id];
    else state.session.flags[question.id] = true;
    saveState();
    render();
  }

  function goTo(index) {
    var total = state.session.ids.length;
    state.session.current = Math.min(Math.max(index, 0), total - 1);
    saveState();
    render();
    var main = $("#mainContent");
    if (main) main.focus({ preventScroll: true });
  }

  function answeredCount() {
    if (!state.session) return 0;
    return state.session.ids.filter(function (id) {
      return Object.prototype.hasOwnProperty.call(state.session.answers, id);
    }).length;
  }

  function flaggedCount() {
    if (!state.session) return 0;
    return state.session.ids.filter(function (id) { return state.session.flags[id]; }).length;
  }

  function isCorrect(id) {
    var q = questionById(id);
    if (!q) return false;
    return state.session.answers[id] === q.answer;
  }

  function scoreSession() {
    var s = state.session;
    var totals = { correct: 0, incorrect: 0, unanswered: 0, total: s.ids.length };
    var byDifficulty = {};
    DIFFICULTY_ORDER.forEach(function (d) { byDifficulty[d] = { correct: 0, total: 0 }; });

    s.ids.forEach(function (id) {
      var q = questionById(id);
      var bucket = byDifficulty[q.difficulty] || (byDifficulty[q.difficulty] = { correct: 0, total: 0 });
      bucket.total += 1;
      if (!Object.prototype.hasOwnProperty.call(s.answers, id)) {
        totals.unanswered += 1;
      } else if (isCorrect(id)) {
        totals.correct += 1;
        bucket.correct += 1;
      } else {
        totals.incorrect += 1;
      }
    });

    totals.percent = totals.total ? Math.round((totals.correct / totals.total) * 100) : 0;
    totals.byDifficulty = byDifficulty;
    return totals;
  }

  function finishSession() {
    state.session.finished = true;
    state.view = "results";
    stopTimer();
    saveState();
    render();
  }

  function discardSession() {
    state.session = null;
    state.view = "setup";
    stopTimer();
    saveState();
    render();
  }

  /* ---------------------------------------------------------------- timer */

  function startTimer() {
    stopTimer();
    if (!state.session || state.session.finished) return;
    timerHandle = window.setInterval(function () {
      if (!state.session || state.session.finished) { stopTimer(); return; }
      state.session.elapsedSeconds += 1;
      var el = $("#elapsedValue");
      if (el) el.textContent = formatClock(state.session.elapsedSeconds);
      if (state.session.elapsedSeconds % 5 === 0) saveState();
    }, 1000);
  }

  function stopTimer() {
    if (timerHandle) { window.clearInterval(timerHandle); timerHandle = null; }
  }

  /* --------------------------------------------------------------- render */

  function render() {
    applyLanguageChrome();
    renderSetup();
    renderPractice();
    renderResults();
    renderReview();

    $all(".view-pane").forEach(function (pane) { pane.classList.remove("is-active"); });
    var active = $("#" + state.view + "View");
    if (active) active.classList.add("is-active");

    var restart = $("#restartSession");
    if (restart) {
      var show = !!state.session;
      restart.hidden = !show;
      restart.setAttribute("aria-label", t("restart"));
      restart.setAttribute("title", t("restart"));
      restart.innerHTML = icon("rotate");
    }
  }

  function applyLanguageChrome() {
    /* Defensive: never let an unexpected lang value blank the whole page. */
    if (!I18N[state.lang]) state.lang = DEFAULT_LANG;
    var dict = I18N[state.lang];
    var html = document.documentElement;
    html.setAttribute("lang", dict.htmlLang);
    html.setAttribute("dir", dict.dir);
    document.title = dict.docTitle + " | Takeed Academy";

    var brandTitle = $("#brandTitle");
    var brandSubtitle = $("#brandSubtitle");
    if (brandTitle) brandTitle.textContent = t("brandTitle");
    if (brandSubtitle) brandSubtitle.textContent = t("brandSubtitle");

    var skip = $("#skipLink");
    if (skip) skip.textContent = t("skip");

    var switcher = $("#langSwitch");
    if (switcher) {
      switcher.setAttribute("aria-label", t("langLabel"));
      $all(".lang-button", switcher).forEach(function (btn) {
        var on = btn.getAttribute("data-lang") === state.lang;
        btn.classList.toggle("is-active", on);
        btn.setAttribute("aria-pressed", on ? "true" : "false");
      });
    }

    var fb = $("#footerBrand");
    var fn = $("#footerNote");
    if (fb) fb.textContent = t("footerBrand");
    if (fn) fn.textContent = t("footerNote");
  }

  /* -------------------------------------------------------- setup screen */

  function renderSetup() {
    var host = $("#setupView");
    if (!host) return;

    if (!BANK.length) {
      host.innerHTML =
        '<section class="panel-card error-card">' +
        '<h1 id="setupTitle">' + esc(t("bankErrorTitle")) + "</h1>" +
        "<p>" + esc(t("bankErrorBody")) + "</p>" +
        "</section>";
      return;
    }

    var resumeBlock = "";
    if (state.session) {
      var s = state.session;
      if (s.finished) {
        resumeBlock =
          '<section class="panel-card resume-card">' +
          '<p class="eyebrow">' + esc(t("resumeFinishedTitle")) + "</p>" +
          "<p>" + esc(t("resumeFinishedBody")) + "</p>" +
          '<div class="button-row">' +
          '<button class="primary-button" type="button" data-action="view-results">' + icon("list") +
          "<span>" + esc(t("viewLastResults")) + "</span></button>" +
          '<button class="ghost-button" type="button" data-action="discard-session">' +
          "<span>" + esc(t("discardSession")) + "</span></button>" +
          "</div></section>";
      } else {
        resumeBlock =
          '<section class="panel-card resume-card">' +
          '<p class="eyebrow">' + esc(t("resumeTitle")) + "</p>" +
          "<p>" + esc(t("resumeBody")) + "</p>" +
          '<p class="resume-meta">' + esc(t("resumeMeta", {
            answered: num(answeredCount()),
            total: num(s.ids.length),
            time: formatClock(s.elapsedSeconds)
          })) + "</p>" +
          '<div class="button-row">' +
          '<button class="primary-button" type="button" data-action="resume-session">' + icon("play") +
          "<span>" + esc(t("resumeAction")) + "</span></button>" +
          '<button class="ghost-button" type="button" data-action="discard-session">' +
          "<span>" + esc(t("discardSession")) + "</span></button>" +
          "</div></section>";
      }
    }

    var available = availableQuestions(state.config.difficulty).length;
    var capped = state.config.count > available;

    host.innerHTML =
      '<section class="hero">' +
      '<p class="eyebrow">' + esc(t("heroEyebrow")) + "</p>" +
      '<h1 id="setupTitle">' + esc(t("heroTitle")) + "</h1>" +
      '<p class="hero-subtitle">' + esc(t("heroSubtitle")) + "</p>" +
      '<p class="hero-description">' + esc(t("heroDescription")) + "</p>" +
      '<div class="stat-row">' +
      '<span><strong>' + num(BANK.length) + "</strong>" + esc(t("statQuestions")) + "</span>" +
      '<span><strong>3</strong>' + esc(t("statLevels")) + "</span>" +
      '<span><strong>2</strong>' + esc(t("statLanguages")) + "</span>" +
      "</div></section>" +
      resumeBlock +
      '<section class="panel-card setup-card">' +
      "<h2>" + esc(t("setupTitle")) + "</h2>" +
      '<p class="muted-text">' + esc(t("setupHint")) + "</p>" +
      '<div class="option-group" role="group" aria-label="' + esc(t("countLabel")) + '">' +
      '<span class="group-label">' + esc(t("countLabel")) + "</span>" +
      '<div class="choice-row">' +
      choiceButton("count", 10, t("count10"), state.config.count === 10) +
      choiceButton("count", 25, t("count25"), state.config.count === 25) +
      choiceButton("count", 50, t("count50"), state.config.count === 50) +
      "</div></div>" +
      '<div class="option-group" role="group" aria-label="' + esc(t("difficultyLabel")) + '">' +
      '<span class="group-label">' + esc(t("difficultyLabel")) + "</span>" +
      '<div class="choice-row">' +
      choiceButton("difficulty", "all", t("diffAll"), state.config.difficulty === "all") +
      choiceButton("difficulty", "basic", t("diffBasic"), state.config.difficulty === "basic") +
      choiceButton("difficulty", "intermediate", t("diffIntermediate"), state.config.difficulty === "intermediate") +
      choiceButton("difficulty", "advanced", t("diffAdvanced"), state.config.difficulty === "advanced") +
      "</div></div>" +
      '<p class="availability-note' + (capped ? " is-capped" : "") + '">' +
      esc(capped ? t("cappedNote", { n: num(available) }) : t("availableNote", { n: num(available) })) +
      "</p>" +
      '<div class="button-row">' +
      '<button class="primary-button" type="button" data-action="start-session">' + icon("play") +
      "<span>" + esc(t("startPractice")) + "</span></button>" +
      "</div></section>";
  }

  function choiceButton(group, value, label, active) {
    return '<button class="choice-button' + (active ? " is-active" : "") +
      '" type="button" data-choice="' + group + '" data-value="' + esc(value) +
      '" aria-pressed="' + (active ? "true" : "false") + '">' + esc(label) + "</button>";
  }

  /* ----------------------------------------------------- practice screen */

  function renderPractice() {
    var host = $("#practiceView");
    if (!host) return;
    if (!state.session || state.session.finished) { host.innerHTML = ""; return; }

    var s = state.session;
    var question = currentQuestion();
    if (!question) { host.innerHTML = ""; return; }

    var total = s.ids.length;
    var position = s.current + 1;
    var selected = s.answers[question.id];
    var hasAnswer = Object.prototype.hasOwnProperty.call(s.answers, question.id);
    var flagged = !!s.flags[question.id];
    var percent = Math.round((answeredCount() / total) * 100);
    var loc = localized(question);

    var options = displayOptions(question).map(function (opt, position2) {
      var isSelected = hasAnswer && selected === opt.originalIndex;
      return '<button class="answer-option' + (isSelected ? " is-selected" : "") +
        '" type="button" data-select="' + position2 + '" aria-pressed="' + (isSelected ? "true" : "false") + '">' +
        '<span class="answer-letter">' + String.fromCharCode(65 + position2) + "</span>" +
        '<span class="answer-text">' + esc(opt.text) + "</span>" +
        "</button>";
    }).join("");

    host.innerHTML =
      '<div class="section-head">' +
      "<div>" +
      '<p class="eyebrow">' + esc(t("practiceEyebrow")) + "</p>" +
      '<h1 id="practiceTitle">' + esc(t("questionOf", { current: num(position), total: num(total) })) + "</h1>" +
      "</div>" +
      '<div class="metric-row">' +
      "<span>" + esc(t("answeredCount", { n: num(answeredCount()) })) + "</span>" +
      "<span>" + esc(t("flaggedCount", { n: num(flaggedCount()) })) + "</span>" +
      '<span class="timer-metric"><small>' + esc(t("elapsed")) + '</small><strong id="elapsedValue">' +
      formatClock(s.elapsedSeconds) + "</strong></span>" +
      "</div></div>" +

      '<div class="progress-block">' +
      '<div class="progress-label"><span>' + esc(t("progressLabel")) + "</span><strong>" +
      num(percent) + "%</strong></div>" +
      '<div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + percent +
      '"><span style="width:' + percent + '%"></span></div>' +
      "</div>" +

      '<div class="practice-grid">' +
      '<section class="panel-card question-card">' +
      '<p class="question-text">' + esc(loc.question) + "</p>" +
      '<div class="answer-list">' + options + "</div>" +
      '<div class="question-actions">' +
      '<div class="button-row">' +
      '<button class="exam-nav-button" type="button" data-action="prev"' + (s.current === 0 ? " disabled" : "") + ">" +
      icon("arrowPrev") + "<span>" + esc(t("previous")) + "</span></button>" +
      '<button class="exam-nav-button" type="button" data-action="next"' +
      (s.current === total - 1 ? " disabled" : "") + "><span>" + esc(t("next")) + "</span>" + icon("arrowNext") + "</button>" +
      "</div>" +
      '<div class="button-row">' +
      '<button class="ghost-button" type="button" data-action="clear"' + (hasAnswer ? "" : " disabled") + ">" +
      icon("eraser") + "<span>" + esc(t("clearAnswer")) + "</span></button>" +
      '<button class="ghost-button' + (flagged ? " is-flagged" : "") + '" type="button" data-action="flag">' +
      icon("flag") + "<span>" + esc(flagged ? t("unflag") : t("flag")) + "</span></button>" +
      '<button class="primary-button" type="button" data-action="confirm-finish">' + icon("send") +
      "<span>" + esc(t("finish")) + "</span></button>" +
      "</div></div></section>" +

      '<aside class="panel-card palette-card">' +
      '<details class="palette-details" open>' +
      "<summary>" + icon("grid") + "<span>" + esc(t("questionMap")) + "</span></summary>" +
      '<div class="jump-grid">' + renderPalette() + "</div>" +
      '<ul class="palette-legend">' +
      '<li><span class="dot is-current"></span>' + esc(t("legendCurrent")) + "</li>" +
      '<li><span class="dot is-answered"></span>' + esc(t("legendAnswered")) + "</li>" +
      '<li><span class="dot is-unanswered"></span>' + esc(t("legendUnanswered")) + "</li>" +
      '<li><span class="dot is-flagged"></span>' + esc(t("legendFlagged")) + "</li>" +
      "</ul></details></aside></div>";
  }

  function renderPalette() {
    var s = state.session;
    return s.ids.map(function (id, index) {
      var classes = ["question-jump"];
      if (index === s.current) classes.push("is-current");
      if (Object.prototype.hasOwnProperty.call(s.answers, id)) classes.push("is-answered");
      else classes.push("is-unanswered");
      if (s.flags[id]) classes.push("is-flagged");
      return '<button class="' + classes.join(" ") + '" type="button" data-jump="' + index +
        '" aria-label="' + esc(t("goToQuestion", { n: num(index + 1) })) + '"' +
        (index === s.current ? ' aria-current="true"' : "") + ">" + num(index + 1) + "</button>";
    }).join("");
  }

  /* ------------------------------------------------------ results screen */

  function renderResults() {
    var host = $("#resultsView");
    if (!host) return;
    if (!state.session || !state.session.finished) { host.innerHTML = ""; return; }

    var totals = scoreSession();
    var perf = totals.percent >= 85 ? "perfStrong"
      : totals.percent >= 70 ? "perfGood"
        : totals.percent >= 50 ? "perfDeveloping" : "perfFoundational";

    var rows = DIFFICULTY_ORDER.filter(function (d) {
      return totals.byDifficulty[d] && totals.byDifficulty[d].total > 0;
    }).map(function (d) {
      var b = totals.byDifficulty[d];
      var pct = b.total ? Math.round((b.correct / b.total) * 100) : 0;
      return '<li class="breakdown-row">' +
        '<span class="breakdown-name">' + esc(t(DIFFICULTY_KEYS[d])) + "</span>" +
        '<span class="breakdown-bar"><span style="width:' + pct + '%"></span></span>' +
        '<span class="breakdown-score">' + num(b.correct) + " / " + num(b.total) + "</span>" +
        "</li>";
    }).join("");

    host.innerHTML =
      '<div class="section-head">' +
      "<div>" +
      '<p class="eyebrow">' + esc(t("resultsEyebrow")) + "</p>" +
      '<h1 id="resultsTitle">' + esc(t("resultsTitle")) + "</h1>" +
      "</div></div>" +

      '<section class="panel-card score-card">' +
      '<div class="score-dial" style="--pct:' + totals.percent + '">' +
      '<strong>' + num(totals.percent) + "%</strong>" +
      "<small>" + esc(t("scoreLabel")) + "</small>" +
      "</div>" +
      '<div class="score-facts">' +
      '<p class="performance-label">' + esc(t("performanceLabel")) + ": <strong>" + esc(t(perf)) + "</strong></p>" +
      '<ul class="fact-list">' +
      '<li><span class="fact-icon is-correct">' + icon("check") + "</span><span>" + esc(t("correct")) +
      '</span><strong>' + num(totals.correct) + "</strong></li>" +
      '<li><span class="fact-icon is-incorrect">' + icon("cross") + "</span><span>" + esc(t("incorrect")) +
      '</span><strong>' + num(totals.incorrect) + "</strong></li>" +
      '<li><span class="fact-icon is-blank">' + icon("dash") + "</span><span>" + esc(t("unanswered")) +
      '</span><strong>' + num(totals.unanswered) + "</strong></li>" +
      "<li><span></span><span>" + esc(t("totalQuestions")) + "</span><strong>" + num(totals.total) + "</strong></li>" +
      "<li><span></span><span>" + esc(t("timeTaken")) + "</span><strong>" +
      formatClock(state.session.elapsedSeconds) + "</strong></li>" +
      "</ul></div></section>" +

      '<section class="panel-card">' +
      "<h2>" + esc(t("breakdownTitle")) + "</h2>" +
      '<ul class="breakdown-list">' + rows + "</ul>" +
      "</section>" +

      '<p class="practice-disclaimer">' + esc(t("practiceOnlyNote")) + "</p>" +

      '<div class="button-row">' +
      '<button class="primary-button" type="button" data-action="open-review">' + icon("list") +
      "<span>" + esc(t("reviewAnswers")) + "</span></button>" +
      '<button class="ghost-button" type="button" data-action="confirm-restart">' + icon("rotate") +
      "<span>" + esc(t("newSession")) + "</span></button>" +
      "</div>";
  }

  /* ------------------------------------------------------- review screen */

  function renderReview() {
    var host = $("#reviewView");
    if (!host) return;
    if (!state.session || !state.session.finished) { host.innerHTML = ""; return; }

    var s = state.session;
    var filter = s.reviewFilter || "all";

    var visible = s.ids.filter(function (id) {
      var answered = Object.prototype.hasOwnProperty.call(s.answers, id);
      if (filter === "incorrect") return answered && !isCorrect(id);
      if (filter === "unanswered") return !answered;
      if (filter === "flagged") return !!s.flags[id];
      return true;
    });

    var counts = {
      all: s.ids.length,
      incorrect: s.ids.filter(function (id) {
        return Object.prototype.hasOwnProperty.call(s.answers, id) && !isCorrect(id);
      }).length,
      unanswered: s.ids.filter(function (id) {
        return !Object.prototype.hasOwnProperty.call(s.answers, id);
      }).length,
      flagged: s.ids.filter(function (id) { return !!s.flags[id]; }).length
    };

    var filters = [
      ["all", t("filterAll"), counts.all],
      ["incorrect", t("filterIncorrect"), counts.incorrect],
      ["unanswered", t("filterUnanswered"), counts.unanswered],
      ["flagged", t("filterFlagged"), counts.flagged]
    ].map(function (item) {
      var active = filter === item[0];
      return '<button class="filter-button' + (active ? " is-active" : "") +
        '" type="button" data-filter="' + item[0] + '" aria-pressed="' + (active ? "true" : "false") + '">' +
        esc(item[1]) + '<span class="filter-count">' + num(item[2]) + "</span></button>";
    }).join("");

    var cards = visible.map(function (id) {
      return reviewCard(id, s.ids.indexOf(id) + 1);
    }).join("");

    host.innerHTML =
      '<div class="section-head">' +
      "<div>" +
      '<p class="eyebrow">' + esc(t("reviewEyebrow")) + "</p>" +
      '<h1 id="reviewTitle">' + esc(t("reviewTitle")) + "</h1>" +
      "</div>" +
      '<div class="button-row">' +
      '<button class="ghost-button" type="button" data-action="back-to-results">' +
      "<span>" + esc(t("backToResults")) + "</span></button>" +
      "</div></div>" +
      '<div class="filter-row" role="group">' + filters + "</div>" +
      (cards || '<p class="empty-note">' + esc(t("filterEmpty")) + "</p>");
  }

  function reviewCard(id, position) {
    var s = state.session;
    var question = questionById(id);
    var loc = localized(question);
    var order = s.orders[id];
    var answered = Object.prototype.hasOwnProperty.call(s.answers, id);
    var chosen = s.answers[id];
    var correct = answered && chosen === question.answer;

    var statusKey = !answered ? "statusUnanswered" : (correct ? "statusCorrect" : "statusIncorrect");
    var statusClass = !answered ? "is-blank" : (correct ? "is-correct" : "is-incorrect");

    var optionRows = order.map(function (originalIndex, displayPosition) {
      var classes = ["review-option"];
      var marker = "";
      if (originalIndex === question.answer) {
        classes.push("is-correct");
        marker = '<span class="review-mark is-correct">' + icon("check") + "</span>";
      }
      if (answered && originalIndex === chosen && originalIndex !== question.answer) {
        classes.push("is-chosen-wrong");
        marker = '<span class="review-mark is-incorrect">' + icon("cross") + "</span>";
      }
      if (answered && originalIndex === chosen && originalIndex === question.answer) {
        classes.push("is-chosen-right");
      }
      return '<li class="' + classes.join(" ") + '">' +
        '<span class="answer-letter">' + String.fromCharCode(65 + displayPosition) + "</span>" +
        '<span class="answer-text">' + esc(loc.options[originalIndex]) + "</span>" +
        marker + "</li>";
    }).join("");

    var chosenText = answered ? loc.options[chosen] : t("noAnswer");

    return '<article class="panel-card review-card ' + statusClass + '">' +
      '<header class="review-head">' +
      '<span class="review-index">' + esc(t("questionN", { n: num(position) })) + "</span>" +
      '<span class="badge badge-difficulty">' + esc(t(DIFFICULTY_KEYS[question.difficulty])) + "</span>" +
      (s.flags[id] ? '<span class="badge badge-flagged">' + icon("flag") + esc(t("statusFlagged")) + "</span>" : "") +
      '<span class="badge badge-status ' + statusClass + '">' + esc(t(statusKey)) + "</span>" +
      "</header>" +
      '<p class="question-text">' + esc(loc.question) + "</p>" +
      '<ul class="review-options">' + optionRows + "</ul>" +
      '<dl class="review-summary">' +
      "<dt>" + esc(t("yourAnswer")) + "</dt><dd" + (answered ? "" : ' class="is-blank"') + ">" + esc(chosenText) + "</dd>" +
      "<dt>" + esc(t("correctAnswer")) + "</dt><dd>" + esc(loc.options[question.answer]) + "</dd>" +
      "</dl>" +
      '<div class="explanation"><strong>' + esc(t("explanation")) + "</strong><p>" + esc(loc.explanation) + "</p></div>" +
      "</article>";
  }

  /* ---------------------------------------------------------------- modal */

  function openModal(config) {
    pendingModal = config;
    var layer = $("#modalLayer");
    var card = $("#modalCard");
    if (!layer || !card) return;
    card.innerHTML =
      '<h2 id="modalTitle">' + esc(config.title) + "</h2>" +
      "<p>" + esc(config.body) + "</p>" +
      '<div class="button-row">' +
      '<button class="primary-button" type="button" data-modal="confirm">' + esc(config.confirmLabel) + "</button>" +
      '<button class="ghost-button" type="button" data-modal="cancel">' + esc(config.cancelLabel) + "</button>" +
      "</div>";
    layer.hidden = false;
    document.body.classList.add("modal-open");
    var first = card.querySelector("[data-modal='confirm']");
    if (first) first.focus();
    announce(config.title);
  }

  function closeModal() {
    pendingModal = null;
    var layer = $("#modalLayer");
    if (layer) layer.hidden = true;
    document.body.classList.remove("modal-open");
  }

  function confirmFinish() {
    var remaining = state.session.ids.length - answeredCount();
    openModal({
      title: t("confirmTitle"),
      body: remaining > 0 ? t("confirmUnanswered", { n: num(remaining) }) : t("confirmComplete"),
      confirmLabel: t("confirmYes"),
      cancelLabel: t("confirmNo"),
      onConfirm: finishSession
    });
  }

  function confirmRestart() {
    openModal({
      title: t("restartConfirmTitle"),
      body: t("restartConfirmBody"),
      confirmLabel: t("restartYes"),
      cancelLabel: t("cancel"),
      onConfirm: discardSession
    });
  }

  /* --------------------------------------------------------------- events */

  function setLanguage(lang) {
    if (lang !== "ar" && lang !== "en") return;
    if (state.lang === lang) return;
    state.lang = lang;
    saveState();
    /* Nothing about the session changes: ids, orders, answers and flags are
       all language-neutral, so re-rendering simply swaps the strings. */
    render();
    if (pendingModal) openModal({
      title: t(pendingModal.titleKey || "confirmTitle"),
      body: pendingModal.body,
      confirmLabel: t("confirmYes"),
      cancelLabel: t("confirmNo"),
      onConfirm: pendingModal.onConfirm
    });
  }

  function onClick(event) {
    var langBtn = event.target.closest("[data-lang]");
    if (langBtn) { setLanguage(langBtn.getAttribute("data-lang")); return; }

    var modalBtn = event.target.closest("[data-modal]");
    if (modalBtn) {
      var kind = modalBtn.getAttribute("data-modal");
      var handler = pendingModal && pendingModal.onConfirm;
      closeModal();
      if (kind === "confirm" && handler) handler();
      return;
    }

    var choice = event.target.closest("[data-choice]");
    if (choice) {
      var group = choice.getAttribute("data-choice");
      var raw = choice.getAttribute("data-value");
      if (group === "count") state.config.count = Number(raw);
      else state.config.difficulty = raw;
      saveState();
      renderSetup();
      return;
    }

    var restart = event.target.closest("#restartSession");
    if (restart) { confirmRestart(); return; }

    var select = event.target.closest("[data-select]");
    if (select && state.session && !state.session.finished) {
      selectAnswer(currentQuestion(), Number(select.getAttribute("data-select")));
      return;
    }

    var jump = event.target.closest("[data-jump]");
    if (jump && state.session) { goTo(Number(jump.getAttribute("data-jump"))); return; }

    var filter = event.target.closest("[data-filter]");
    if (filter && state.session) {
      state.session.reviewFilter = filter.getAttribute("data-filter");
      saveState();
      renderReview();
      return;
    }

    var action = event.target.closest("[data-action]");
    if (!action) return;
    handleAction(action.getAttribute("data-action"));
  }

  function handleAction(action) {
    switch (action) {
      case "start-session":
        startSession(state.config.count, state.config.difficulty);
        break;
      case "resume-session":
        state.view = "practice";
        saveState();
        startTimer();
        render();
        break;
      case "view-results":
        state.view = "results";
        saveState();
        render();
        break;
      case "discard-session":
        confirmRestart();
        break;
      case "prev":
        goTo(state.session.current - 1);
        break;
      case "next":
        goTo(state.session.current + 1);
        break;
      case "clear":
        clearAnswer(currentQuestion());
        break;
      case "flag":
        toggleFlag(currentQuestion());
        break;
      case "confirm-finish":
        confirmFinish();
        break;
      case "open-review":
        state.view = "review";
        saveState();
        render();
        break;
      case "back-to-results":
        state.view = "results";
        saveState();
        render();
        break;
      case "confirm-restart":
        confirmRestart();
        break;
    }
  }

  function onKeydown(event) {
    if (event.key === "Escape" && pendingModal) { closeModal(); render(); return; }
    if (!state.session || state.session.finished || state.view !== "practice" || pendingModal) return;
    var tag = (event.target.tagName || "").toLowerCase();
    if (tag === "input" || tag === "textarea") return;

    /* Arrow keys follow reading order: in RTL, Left advances. */
    var forward = state.lang === "ar" ? "ArrowLeft" : "ArrowRight";
    var back = state.lang === "ar" ? "ArrowRight" : "ArrowLeft";
    if (event.key === forward) { event.preventDefault(); goTo(state.session.current + 1); }
    else if (event.key === back) { event.preventDefault(); goTo(state.session.current - 1); }
    else if (/^[1-4]$/.test(event.key)) {
      var q = currentQuestion();
      var pos = Number(event.key) - 1;
      if (q && pos < state.session.orders[q.id].length) { event.preventDefault(); selectAnswer(q, pos); }
    }
  }

  /* ----------------------------------------------------------------- init */

  function init() {
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKeydown);
    window.addEventListener("beforeunload", saveState);
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) saveState();
    });

    var layer = $("#modalLayer");
    if (layer) layer.addEventListener("click", function (e) {
      if (e.target === layer) { closeModal(); render(); }
    });

    render();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
