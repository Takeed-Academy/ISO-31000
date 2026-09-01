/*
 * Takeed Academy — ISO 31000:2018 Bilingual Practice Question Bank
 * 50 questions: Arabic / English
 * Difficulty distribution: 15 basic, 20 intermediate, 15 advanced
 *
 * IMPORTANT:
 * - `answer` is a ZERO-BASED index into the original options array.
 * - If options are shuffled, keep Arabic/English option mapping synchronized.
 * - Prefer storing the selected ORIGINAL option index, not the displayed position.
 */

window.ISO31000_QUESTIONS = [
  {
    "id": 1,
    "difficulty": "basic",
    "topic": "concepts",
    "ar": {
      "question": "أي عبارة تميّز بصورة أفضل بين الخطر والمشكلة القائمة في سياق إدارة المخاطر؟",
      "options": [
        "الخطر يرتبط بعدم يقين قد يؤثر في الأهداف، بينما المشكلة حالة معروفة تتطلب التعامل معها.",
        "الخطر هو أي حدث سلبي وقع بالفعل، بينما المشكلة حدث مستقبلي غير مؤكد.",
        "الخطر يتعلق فقط بالخسائر المالية المتوقعة، بينما المشكلة قد تكون تشغيلية أو قانونية أو مرتبطة بالأداء بعد تحقق الانحراف.",
        "الخطر والمشكلة مصطلحان متطابقان ويمكن استخدامهما بالتبادل في جميع الحالات."
      ],
      "explanation": "إدارة المخاطر تركز على أثر عدم اليقين في الأهداف؛ أما المشكلة القائمة فهي حالة حدثت أو أصبحت معروفة وتحتاج إلى استجابة."
    },
    "en": {
      "question": "Which statement best distinguishes a risk from an existing issue in a risk management context?",
      "options": [
        "A risk involves uncertainty that may affect objectives, while an issue is a known condition requiring action.",
        "A risk is any negative event that has already happened, while an issue is an uncertain future event.",
        "A risk concerns only expected financial loss, while an issue may be operational, legal, or performance-related after a deviation has occurred.",
        "Risk and issue are identical terms and can be used interchangeably in every situation."
      ],
      "explanation": "Risk management focuses on the effect of uncertainty on objectives; an issue is a condition that has occurred or is already known and requires a response."
    },
    "answer": 0
  },
  {
    "id": 2,
    "difficulty": "basic",
    "topic": "scope",
    "ar": {
      "question": "أي منظمة يمكنها استخدام إرشادات ISO 31000 بصورة مناسبة؟",
      "options": [
        "المنظمات المالية فقط بسبب طبيعة المخاطر الكمية.",
        "أي منظمة بصرف النظر عن حجمها أو قطاعها أو نوع نشاطها.",
        "المنظمات الحاصلة على شهادة نظام إدارة أخرى فقط.",
        "المنظمات الكبيرة التي لديها إدارة مخاطر مستقلة فقط."
      ],
      "explanation": "ISO 31000 يقدم إرشادات عامة يمكن تخصيصها لمختلف المنظمات والقطاعات والأنشطة."
    },
    "en": {
      "question": "Which organization can appropriately use ISO 31000 guidance?",
      "options": [
        "Financial organizations only because their risks are quantitative.",
        "Any organization regardless of size, sector, or type of activity.",
        "Organizations certified to another management system standard only.",
        "Large organizations with a separate risk department only."
      ],
      "explanation": "ISO 31000 provides general guidance that can be customized for different organizations, sectors, and activities."
    },
    "answer": 1
  },
  {
    "id": 3,
    "difficulty": "basic",
    "topic": "principles",
    "ar": {
      "question": "ما النتيجة الرئيسية التي تستهدفها إدارة المخاطر الجيدة وفق ISO 31000؟",
      "options": [
        "إلغاء جميع أشكال عدم اليقين في بيئة العمل.",
        "ضمان عدم وقوع أي حادث أو خسارة مستقبلية.",
        "إنشاء القيمة وحمايتها أثناء السعي لتحقيق الأهداف.",
        "استبدال الحكم الإداري بنظام موحد للدرجات الرقمية."
      ],
      "explanation": "الغاية المركزية للمبادئ هي دعم إنشاء القيمة وحمايتها، وليس القضاء التام على عدم اليقين."
    },
    "en": {
      "question": "What is the principal outcome sought by effective risk management under ISO 31000?",
      "options": [
        "Eliminating all uncertainty from the business environment.",
        "Guaranteeing that no future incident or loss will occur.",
        "Creating and protecting value while pursuing objectives.",
        "Replacing management judgment with one numerical scoring system."
      ],
      "explanation": "The central purpose of the principles is to support the creation and protection of value, not to eliminate uncertainty completely."
    },
    "answer": 2
  },
  {
    "id": 4,
    "difficulty": "basic",
    "topic": "principles",
    "ar": {
      "question": "عندما تُناقش المخاطر كجزء طبيعي من التخطيط والميزانية واعتماد المشروعات، فأي مبدأ يظهر بصورة أوضح؟",
      "options": [
        "Inclusive — الشمولية.",
        "Dynamic — الديناميكية.",
        "Customized — التخصيص.",
        "Integrated — التكامل."
      ],
      "explanation": "التكامل يعني أن إدارة المخاطر جزء من الحوكمة والأنشطة والقرارات، وليست نشاطًا منفصلًا."
    },
    "en": {
      "question": "When risk is discussed as a normal part of planning, budgeting, and project approval, which principle is most evident?",
      "options": [
        "Inclusive.",
        "Dynamic.",
        "Customized.",
        "Integrated."
      ],
      "explanation": "Integration means risk management is part of governance, activities, and decision-making rather than a separate exercise."
    },
    "answer": 3
  },
  {
    "id": 5,
    "difficulty": "basic",
    "topic": "principles",
    "ar": {
      "question": "ماذا يعني أن تكون إدارة المخاطر Customized؟",
      "options": [
        "تصميم النهج بما يلائم أهداف المنظمة وسياقها وطبيعة مخاطرها.",
        "استخدام نفس أدوات التحليل في جميع الإدارات لتحقيق الاتساق.",
        "تعديل نتائج التقييم بعد صدور القرار الإداري النهائي.",
        "السماح لكل موظف باختيار معايير قبول المخاطر الخاصة به."
      ],
      "explanation": "التخصيص يعني ملاءمة إطار وعملية إدارة المخاطر للسياق والأهداف والاحتياجات الفعلية للمنظمة."
    },
    "en": {
      "question": "What does it mean for risk management to be Customized?",
      "options": [
        "Designing the approach to fit the organization's objectives, context, and risk profile.",
        "Using the same analysis tools in every department to achieve consistency.",
        "Changing assessment results after the final management decision is issued.",
        "Allowing each employee to choose personal risk acceptance criteria."
      ],
      "explanation": "Customization means tailoring the risk management framework and process to the organization's context, objectives, and real needs."
    },
    "answer": 0
  },
  {
    "id": 6,
    "difficulty": "basic",
    "topic": "principles",
    "ar": {
      "question": "أي ممارسة تتفق أكثر مع مبدأ Inclusive؟",
      "options": [
        "نشر جميع معلومات المخاطر لجميع الأطراف ذات العلاقة وبالمستوى نفسه من التفصيل لضمان المشاركة الكاملة دون قيود على السرية.",
        "الحصول على مدخلات أصحاب المصلحة المناسبين في الوقت الذي يمكن أن تؤثر فيه على القرار.",
        "إعطاء كل صاحب مصلحة حق الاعتراض النهائي على أي قرار مخاطر.",
        "الاقتصار على استشارة الأشخاص الذين يوافقون على رأي الإدارة."
      ],
      "explanation": "الشمولية تتعلق بالمشاركة المناسبة وفي الوقت المناسب بما يحسن الوعي وجودة القرار، مع مراعاة الملاءمة والسرية."
    },
    "en": {
      "question": "Which practice is most consistent with the Inclusive principle?",
      "options": [
        "Publishing all risk information to every relevant party at the same level of detail to guarantee full participation without confidentiality limits.",
        "Obtaining input from relevant stakeholders while it can still influence the decision.",
        "Giving every stakeholder a final veto over any risk decision.",
        "Consulting only people who already agree with management's view."
      ],
      "explanation": "Inclusiveness concerns appropriate and timely involvement that improves awareness and decision quality while respecting relevance and confidentiality."
    },
    "answer": 1
  },
  {
    "id": 7,
    "difficulty": "basic",
    "topic": "principles",
    "ar": {
      "question": "أي سلوك يعبّر عن كون إدارة المخاطر Dynamic؟",
      "options": [
        "تجميد سجل المخاطر حتى موعد المراجعة السنوية.",
        "استخدام نفس الافتراضات حتى لو تغيرت البيئة الخارجية.",
        "اكتشاف التغيرات والاستجابة لها وإعادة النظر في المخاطر عند الحاجة.",
        "تغيير تصنيف المخاطر وفق جدول ثابت حتى دون ظهور معلومات جديدة أو تغيرات في السياق."
      ],
      "explanation": "النهج الديناميكي يلتقط التغيرات في السياق والمخاطر ويستجيب لها في الوقت المناسب."
    },
    "en": {
      "question": "Which behavior demonstrates that risk management is Dynamic?",
      "options": [
        "Freezing the risk register until the annual review date.",
        "Using the same assumptions even when the external environment changes.",
        "Detecting changes, responding to them, and reconsidering risks when needed.",
        "Changing risk ratings on a fixed schedule even when no relevant new information or contextual change has emerged."
      ],
      "explanation": "A dynamic approach detects changes in context and risk and responds to them in a timely way."
    },
    "answer": 2
  },
  {
    "id": 8,
    "difficulty": "basic",
    "topic": "principles",
    "ar": {
      "question": "كيف ينبغي التعامل مع جودة المعلومات عند إدارة المخاطر؟",
      "options": [
        "انتظار بيانات كاملة ومؤكدة قبل اتخاذ أي قرار له علاقة بالمخاطر حتى لا يعتمد القرار على معلومات ناقصة.",
        "استخدام المعلومات التاريخية فقط لأنها أكثر موضوعية.",
        "استخدام رأي الإدارة العليا بدل البيانات عندما توجد اختلافات.",
        "استخدام أفضل المعلومات المتاحة مع فهم مصادرها وحدودها وعدم يقينها."
      ],
      "explanation": "القرارات الواقعية كثيرًا ما تُتخذ تحت عدم يقين؛ لذلك تُستخدم أفضل المعلومات المتاحة مع إدراك محدوديتها."
    },
    "en": {
      "question": "How should information quality be handled when managing risk?",
      "options": [
        "Waiting for complete and fully confirmed data before making any risk-related decision so the decision never relies on incomplete information.",
        "Use historical information only because it is more objective.",
        "Use senior management opinion instead of data whenever views differ.",
        "Use the best available information while understanding its sources, limits, and uncertainty."
      ],
      "explanation": "Real decisions are often made under uncertainty, so the best available information is used with awareness of its limitations."
    },
    "answer": 3
  },
  {
    "id": 9,
    "difficulty": "basic",
    "topic": "principles",
    "ar": {
      "question": "لماذا تدخل العوامل البشرية والثقافية ضمن إدارة المخاطر؟",
      "options": [
        "لأن السلوك والقيم والحوافز قد تؤثر في إدراك المخاطر وتنفيذ الضوابط.",
        "لأنها تُستخدم أساسًا لتقييم مخاطر الموارد البشرية والتوظيف وقياس مدى التزام العاملين بالإجراءات الداخلية المعتمدة.",
        "لأنها تحل محل الحاجة إلى البيانات والتحليل الموضوعي.",
        "لأن ISO 31000 يطلب إنشاء إدارة مستقلة للثقافة المؤسسية."
      ],
      "explanation": "السلوك والثقافة والحوافز والإدراك يمكن أن تدعم أو تضعف إدارة المخاطر والضوابط في مختلف المستويات."
    },
    "en": {
      "question": "Why are human and cultural factors relevant to risk management?",
      "options": [
        "Because behavior, values, and incentives can affect risk perception and control implementation.",
        "Because they are used mainly for human-resources and recruitment risks and for measuring employee compliance with approved internal procedures.",
        "Because they replace the need for data and objective analysis.",
        "Because ISO 31000 requires a separate corporate culture department."
      ],
      "explanation": "Behavior, culture, incentives, and perception can strengthen or weaken risk management and controls at many levels."
    },
    "answer": 0
  },
  {
    "id": 10,
    "difficulty": "basic",
    "topic": "principles",
    "ar": {
      "question": "ما المثال الأفضل على Continual Improvement في إدارة المخاطر؟",
      "options": [
        "إبقاء المنهج ومعايير التقييم دون تغيير لعدة دورات حتى تظل النتائج قابلة للمقارنة ولا تتأثر بالتغيرات التشغيلية القصيرة.",
        "مراجعة الممارسات وتطويرها استنادًا إلى الخبرة والتعلم والتغيرات.",
        "تغيير جميع المعايير سنويًا بغض النظر عن الأداء.",
        "تحسين العملية فقط بعد وقوع خسارة كبيرة."
      ],
      "explanation": "التحسين المستمر يعتمد على التعلم والخبرة والتغيرات في السياق والأداء لتطوير الإطار والعملية."
    },
    "en": {
      "question": "Which example best represents Continual Improvement in risk management?",
      "options": [
        "Keeping the approach and evaluation criteria unchanged for several cycles so results remain comparable and are not affected by short-term operational changes.",
        "Reviewing and improving practices based on experience, learning, and change.",
        "Changing all criteria every year regardless of performance.",
        "Improving the process only after a major loss occurs."
      ],
      "explanation": "Continual improvement uses learning, experience, contextual change, and performance information to improve the framework and process."
    },
    "answer": 1
  },
  {
    "id": 11,
    "difficulty": "basic",
    "topic": "framework",
    "ar": {
      "question": "أي عنصر يقع في قلب إطار إدارة المخاطر ويؤثر في نجاح بقية عناصره؟",
      "options": [
        "Risk identification — تحديد المخاطر.",
        "Risk evaluation — تقييم المخاطر.",
        "Leadership and commitment — القيادة والالتزام.",
        "Recording and reporting — التسجيل وإعداد التقارير."
      ],
      "explanation": "القيادة والالتزام عنصر محوري في الإطار لأنه يدعم الدمج والموارد والمساءلة وتصميم الممارسات المناسبة."
    },
    "en": {
      "question": "Which element sits at the center of the risk management framework and influences the success of the other elements?",
      "options": [
        "Risk identification.",
        "Risk evaluation.",
        "Leadership and commitment.",
        "Recording and reporting."
      ],
      "explanation": "Leadership and commitment are central because they support integration, resources, accountability, and appropriate design."
    },
    "answer": 2
  },
  {
    "id": 12,
    "difficulty": "basic",
    "topic": "process",
    "ar": {
      "question": "أي ثلاث مراحل تكوّن Risk Assessment ضمن عملية إدارة المخاطر؟",
      "options": [
        "Design, Implementation, Improvement.",
        "Communication, Treatment, Reporting.",
        "Planning, Auditing, Corrective Action.",
        "Identification, Analysis, Evaluation."
      ],
      "explanation": "تقييم المخاطر Risk Assessment يتكون من تحديد المخاطر، ثم تحليلها، ثم تقييمها لدعم القرار."
    },
    "en": {
      "question": "Which three stages make up Risk Assessment within the risk management process?",
      "options": [
        "Design, Implementation, Improvement.",
        "Communication, Treatment, Reporting.",
        "Planning, Auditing, Corrective Action.",
        "Identification, Analysis, Evaluation."
      ],
      "explanation": "Risk assessment consists of risk identification, risk analysis, and risk evaluation to support decision-making."
    },
    "answer": 3
  },
  {
    "id": 13,
    "difficulty": "basic",
    "topic": "treatment",
    "ar": {
      "question": "أي عبارة عن Risk Treatment هي الأكثر دقة؟",
      "options": [
        "المعالجة قد تشمل تجنب الخطر أو تغييره أو مشاركته أو الاحتفاظ به وفق القرار.",
        "المعالجة تعني دائمًا خفض مستوى الخطر إلى الصفر.",
        "المعالجة لا تبدأ إلا بعد وقوع الحدث المرتبط بالخطر.",
        "المعالجة تعني نقل المسؤولية الكاملة عن الخطر إلى شركة تأمين أو طرف تعاقدي آخر بحيث لا يبقى على المنظمة أي تعرض لاحق."
      ],
      "explanation": "خيارات المعالجة متعددة، وقد تشمل تجنب الخطر أو تغيير احتماله أو عواقبه أو مشاركته أو الاحتفاظ به أو زيادته لاغتنام فرصة."
    },
    "en": {
      "question": "Which statement about Risk Treatment is most accurate?",
      "options": [
        "Treatment may involve avoiding, changing, sharing, or retaining risk depending on the decision.",
        "Treatment always means reducing risk to zero.",
        "Treatment begins only after the event associated with the risk occurs.",
        "Treatment means transferring full responsibility for the risk to an insurer or another contractual party so that the organization retains no further exposure."
      ],
      "explanation": "Treatment options are diverse and may include avoiding, changing likelihood or consequences, sharing, retaining, or even increasing risk to pursue an opportunity."
    },
    "answer": 0
  },
  {
    "id": 14,
    "difficulty": "basic",
    "topic": "monitoring",
    "ar": {
      "question": "ما الغرض الأهم من Monitoring and Review؟",
      "options": [
        "إغلاق المخاطر التي لم تقع خلال فترة المراقبة المحددة واعتبار عدم حدوثها دليلًا كافيًا على انخفاض مستوى التعرض مستقبلاً.",
        "متابعة التغيرات وفعالية الممارسات والضوابط وتحسين جودة النتائج.",
        "تقليل عدد الاجتماعات والتقارير المتعلقة بالمخاطر.",
        "ضمان ثبات مستوى الخطر من دورة تقييم إلى أخرى."
      ],
      "explanation": "المراقبة والمراجعة تساعد على التأكد من جودة وفعالية العملية ونتائجها ورصد التغيرات التي تستدعي التحديث."
    },
    "en": {
      "question": "What is the most important purpose of Monitoring and Review?",
      "options": [
        "Closing risks that have not occurred during the defined monitoring period and treating their absence as sufficient evidence of lower future exposure.",
        "Tracking change, effectiveness of practices and controls, and improving result quality.",
        "Reducing the number of risk-related meetings and reports.",
        "Ensuring the risk level remains unchanged from one assessment cycle to another."
      ],
      "explanation": "Monitoring and review help assure the quality and effectiveness of the process and its outcomes and detect changes requiring updates."
    },
    "answer": 1
  },
  {
    "id": 15,
    "difficulty": "basic",
    "topic": "scope",
    "ar": {
      "question": "كيف يوصف ISO 31000 من حيث الشهادة التنظيمية؟",
      "options": [
        "هو معيار متطلبات يُستخدم لمنح شهادة نظام إدارة مخاطر.",
        "هو معيار تدقيق مالي متخصص لا يُستخدم إلا مع المؤسسات المصرفية والمؤسسات التي تطبق نماذج كمية موحدة لقياس التعرض.",
        "هو دليل إرشادي لإدارة المخاطر وليس معيارًا مخصصًا لشهادة نظام إدارة.",
        "هو مواصفة فنية لتقييم أدوات وبرمجيات إدارة المخاطر."
      ],
      "explanation": "ISO 31000 يقدم إرشادات ومبادئ وإطارًا وعملية، ولا يُستخدم كمعيار شهادة لنظام إدارة مخاطر."
    },
    "en": {
      "question": "How should ISO 31000 be described in relation to organizational certification?",
      "options": [
        "It is a requirements standard used to certify a risk management system.",
        "It is a specialized financial audit standard used only by banks and organizations applying standardized quantitative exposure models.",
        "It is risk management guidance and is not a management-system certification standard.",
        "It is a technical specification for evaluating risk management software."
      ],
      "explanation": "ISO 31000 provides principles, a framework, and a process as guidance and is not used as a certifiable risk management system standard."
    },
    "answer": 2
  },
  {
    "id": 16,
    "difficulty": "intermediate",
    "topic": "integration",
    "ar": {
      "question": "يعتمد مجلس الإدارة الاستراتيجية أولًا، ثم يطلب من إدارة المخاطر تقييمها بعد اعتمادها. ما التحسين الأكثر نضجًا؟",
      "options": [
        "زيادة تفاصيل تقرير المخاطر الذي يصدر بعد اعتماد الاستراتيجية وإضافة مؤشرات متابعة دورية للتأكد من تنفيذ القرارات كما أقرها المجلس.",
        "فصل فريق المخاطر عن فرق التخطيط لضمان استقلاليته الكاملة.",
        "الاكتفاء بتحليل المخاطر ذات التأثير المالي على الاستراتيجية.",
        "إدماج اعتبارات المخاطر أثناء صياغة البدائل الاستراتيجية وقبل اعتماد القرار."
      ],
      "explanation": "القيمة الأكبر تظهر عندما تدخل معلومات المخاطر في القرار أثناء تكوينه، لا عندما تُضاف إليه بعد اعتماده."
    },
    "en": {
      "question": "The board approves strategy first and asks risk management to assess it afterward. What is the more mature improvement?",
      "options": [
        "Add more detail to the risk report issued after strategy approval and include periodic indicators to confirm decisions are implemented as approved by the board.",
        "Separate the risk team from planning teams to ensure complete independence.",
        "Limit the assessment to financial risks affecting the strategy.",
        "Integrate risk considerations while strategic options are being developed and before approval."
      ],
      "explanation": "Risk information adds the most value when it informs the decision as it is being formed, not only after approval."
    },
    "answer": 3
  },
  {
    "id": 17,
    "difficulty": "intermediate",
    "topic": "criteria",
    "ar": {
      "question": "عند وضع Risk Criteria لنشاط جديد، أي مجموعة اعتبارات هي الأكثر ملاءمة؟",
      "options": [
        "الأهداف والسياق والقيم والالتزامات وآراء أصحاب المصلحة المناسبة.",
        "التكلفة التاريخية للحوادث فقط لتجنب التقديرات الشخصية.",
        "متوسط درجات المخاطر المستخدمة في شركات أخرى من نفس القطاع.",
        "عدد الضوابط القائمة وعدد الموظفين المسؤولين عنها فقط."
      ],
      "explanation": "معايير المخاطر ينبغي أن تعكس الأهداف والسياق والقيم والالتزامات والقدرة على اتخاذ القرار، لا أن تكون رقمًا معزولًا."
    },
    "en": {
      "question": "When establishing Risk Criteria for a new activity, which set of considerations is most appropriate?",
      "options": [
        "Objectives, context, values, obligations, and relevant stakeholder views.",
        "Historical incident cost only, to avoid subjective estimates.",
        "Average risk scores used by other companies in the same sector.",
        "The number of existing controls and employees responsible for them only."
      ],
      "explanation": "Risk criteria should reflect objectives, context, values, obligations, and decision needs rather than being an isolated number."
    },
    "answer": 0
  },
  {
    "id": 18,
    "difficulty": "intermediate",
    "topic": "context",
    "ar": {
      "question": "تخطط شركة لدخول ثلاث دول تختلف في التشريعات وسلاسل الإمداد والثقافة. ما الخطوة الأكثر فائدة قبل بدء تحديد المخاطر؟",
      "options": [
        "نسخ سجل المخاطر المستخدم في السوق المحلي وإضافة أسماء الدول الجديدة.",
        "تحديد نطاق القرار وفهم السياق الداخلي والخارجي ووضع معايير مناسبة.",
        "اختيار معالجة موحدة مسبقًا لجميع المخاطر التي قد تظهر.",
        "حساب متوسط احتمالية التعطل في الدول الثلاث قبل تعريف الأهداف."
      ],
      "explanation": "فهم النطاق والسياق والمعايير يضع أساسًا صحيحًا لتحديد المخاطر وتحليلها في بيئة متعددة الاختلافات."
    },
    "en": {
      "question": "A company plans to enter three countries with different regulations, supply chains, and cultures. What is the most useful step before identifying risks?",
      "options": [
        "Copy the domestic risk register and add the names of the new countries.",
        "Define the decision scope, understand internal and external context, and establish suitable criteria.",
        "Choose one standard treatment in advance for all risks that may arise.",
        "Calculate average disruption likelihood across the three countries before defining objectives."
      ],
      "explanation": "Understanding scope, context, and criteria provides a sound basis for identifying and analyzing risk in a varied environment."
    },
    "answer": 1
  },
  {
    "id": 19,
    "difficulty": "intermediate",
    "topic": "identification",
    "ar": {
      "question": "في سيناريو: تعطل مزود الطاقة عن مركز البيانات، فتوقفت الخدمة الإلكترونية لساعتين. ما المثال الأقرب إلى Consequence؟",
      "options": [
        "الاعتماد على مزود طاقة خارجي.",
        "تعطل مزود الطاقة.",
        "توقف الخدمة الإلكترونية لساعتين.",
        "وجود عقد خدمة مع المزود."
      ],
      "explanation": "العاقبة هي النتيجة المترتبة على الحدث؛ هنا تمثلها فترة توقف الخدمة."
    },
    "en": {
      "question": "In this scenario, a power provider fails and an online service is unavailable for two hours. Which item is closest to a Consequence?",
      "options": [
        "Dependence on an external power provider.",
        "Failure of the power provider.",
        "Two hours of online service unavailability.",
        "The existence of a service contract with the provider."
      ],
      "explanation": "A consequence is the outcome resulting from an event; here it is the period of service unavailability."
    },
    "answer": 2
  },
  {
    "id": 20,
    "difficulty": "intermediate",
    "topic": "analysis",
    "ar": {
      "question": "أثناء Risk Analysis، لماذا يجب فهم الضوابط القائمة وليس فقط الاحتمالية والعواقب؟",
      "options": [
        "لأن وجود أي ضابط يعني أن الخطر أصبح مقبولًا تلقائيًا.",
        "لأن عدد الضوابط يحدد درجة الخطر مباشرة دون الحاجة إلى تحليل مدى فعاليتها أو عدم اليقين المرتبط بها.",
        "لأن تحليل المخاطر يهدف أساسًا إلى تدقيق الالتزام بالإجراءات.",
        "لأن فعالية الضوابط تؤثر في طبيعة ومستوى الخطر الذي تواجهه المنظمة."
      ],
      "explanation": "تحليل المخاطر يأخذ في الاعتبار الضوابط وفعاليتها إلى جانب مصادر الخطر والأحداث والعواقب والاحتمالية وعدم اليقين."
    },
    "en": {
      "question": "During Risk Analysis, why is it important to understand existing controls rather than considering only likelihood and consequences?",
      "options": [
        "Because the existence of any control automatically makes the risk acceptable.",
        "Because the number of controls directly determines the risk score without analyzing their effectiveness or the uncertainty associated with them.",
        "Because risk analysis is primarily an audit of procedural compliance.",
        "Because control effectiveness influences the nature and level of risk faced by the organization."
      ],
      "explanation": "Risk analysis considers controls and their effectiveness together with sources, events, consequences, likelihood, and uncertainty."
    },
    "answer": 3
  },
  {
    "id": 21,
    "difficulty": "intermediate",
    "topic": "analysis",
    "ar": {
      "question": "خطران لهما نفس تقدير الاحتمالية والعواقب، لكن الضابط في الأول مُختبر وموثوق بينما الضابط في الثاني جديد وغير مُثبت. ما الاستنتاج الأفضل؟",
      "options": [
        "قد تختلف النظرة إلى الخطر بسبب اختلاف فعالية الضوابط ودرجة عدم اليقين.",
        "يجب أن تكون نتيجة التحليل متطابقة لأن الاحتمالية والعواقب متساوية.",
        "الخطر الثاني يصبح تلقائيًا High مهما كانت معايير المنظمة.",
        "لا تؤثر الضوابط في التحليل؛ تؤخذ في الاعتبار فقط أثناء المعالجة."
      ],
      "explanation": "فعالية الضوابط وجودة الأدلة وعدم اليقين عوامل مهمة في فهم الخطر، حتى لو تشابهت بعض الدرجات الأولية."
    },
    "en": {
      "question": "Two risks have the same likelihood and consequence estimates, but the first control is tested and reliable while the second is new and unproven. What is the best conclusion?",
      "options": [
        "The risk view may differ because control effectiveness and uncertainty differ.",
        "The analysis result must be identical because likelihood and consequences are equal.",
        "The second risk automatically becomes High regardless of the organization's criteria.",
        "Controls do not affect analysis; they are considered only during treatment."
      ],
      "explanation": "Control effectiveness, evidence quality, and uncertainty are important to understanding risk even when some initial ratings are similar."
    },
    "answer": 0
  },
  {
    "id": 22,
    "difficulty": "intermediate",
    "topic": "evaluation",
    "ar": {
      "question": "بعد مقارنة نتائج التحليل بمعايير المخاطر، أي قرار يمكن أن ينتج بصورة مشروعة من Risk Evaluation؟",
      "options": [
        "اختيار شركة التأمين التي ستتحمل مسؤولية الخطر بالكامل.",
        "الحاجة إلى تحليل إضافي أو معالجة أو الإبقاء على الوضع أو إعادة النظر في الأهداف.",
        "تحديد السبب الجذري لجميع الأحداث قبل تسجيل أي نتيجة.",
        "إغلاق كل خطر يقع داخل المنطقة المقبولة فورًا ومنع إعادة فتحه أو مراجعته إلا إذا وقع الحدث المرتبط به فعليًا."
      ],
      "explanation": "التقييم يدعم القرار وقد يقود إلى تحليل إضافي أو معالجة أو الحفاظ على الضوابط أو إعادة النظر في الأهداف أو عدم اتخاذ إجراء إضافي."
    },
    "en": {
      "question": "After comparing analysis results with risk criteria, which decision can legitimately result from Risk Evaluation?",
      "options": [
        "Selecting the insurer that will assume full responsibility for the risk.",
        "Further analysis, treatment, maintaining the current situation, or reconsidering objectives.",
        "Determining the root cause of every event before recording any result.",
        "Closing every risk inside the acceptable zone immediately and preventing it from being reopened or reviewed unless the associated event actually occurs."
      ],
      "explanation": "Evaluation supports decisions and may lead to further analysis, treatment, maintaining controls, reconsidering objectives, or no additional action."
    },
    "answer": 1
  },
  {
    "id": 23,
    "difficulty": "intermediate",
    "topic": "treatment",
    "ar": {
      "question": "لدى المنظمة خياران لمعالجة خطر: الأول أقل تكلفة لكنه أبطأ، والثاني أسرع لكنه أعلى تكلفة. ما أساس الاختيار الأفضل؟",
      "options": [
        "اختيار الأقل تكلفة دائمًا لأن إدارة المخاطر تهدف إلى كفاءة الموارد.",
        "اختيار الأسرع دائمًا لأن بقاء الخطر لأي فترة غير مقبول.",
        "مقارنة المنافع والتكاليف والالتزامات والآثار الجانبية ومدى تحقيق الأهداف.",
        "استخدام الخيار الذي يخفض الدرجة الرقمية أكثر بصرف النظر عن الالتزامات والآثار المحتملة على تحقيق الأهداف."
      ],
      "explanation": "اختيار المعالجة يحتاج إلى موازنة أوسع من مجرد التكلفة أو سرعة التنفيذ، بما في ذلك الالتزامات وآثار القرار على الأهداف."
    },
    "en": {
      "question": "An organization has two treatment options: one is cheaper but slower, and the other is faster but more expensive. What is the best basis for selection?",
      "options": [
        "Always select the cheapest option because risk management seeks resource efficiency.",
        "Always select the fastest option because leaving risk in place is unacceptable.",
        "Compare benefits, costs, obligations, side effects, and contribution to objectives.",
        "Use whichever option produces the greatest numerical risk reduction regardless of obligations and potential effects on achieving objectives."
      ],
      "explanation": "Treatment selection requires a broader balance than cost or speed alone, including obligations and the decision's effect on objectives."
    },
    "answer": 2
  },
  {
    "id": 24,
    "difficulty": "intermediate",
    "topic": "treatment",
    "ar": {
      "question": "أي محتوى يجعل Risk Treatment Plan أكثر قابلية للتنفيذ والمتابعة؟",
      "options": [
        "اسم الخطر ومستواه فقط لتجنب التعقيد.",
        "قائمة شاملة بالسياسات والإجراءات التنظيمية المرتبطة وغير المرتبطة بالخطر بهدف إثبات اكتمال خطة المعالجة.",
        "وصف العواقب التاريخية دون تحديد من سينفذ المعالجة.",
        "الإجراءات والموارد والمسؤوليات والمواعيد ومقاييس الأداء والمتابعة."
      ],
      "explanation": "خطة المعالجة الفعالة توضح ماذا سيُفعل، ومن سينفذه، والموارد والجدول وكيف ستُقاس وتُراجع النتائج."
    },
    "en": {
      "question": "Which content makes a Risk Treatment Plan more actionable and monitorable?",
      "options": [
        "Only the risk name and rating to avoid complexity.",
        "A comprehensive list of organizational policies and procedures, related or unrelated to the risk, to demonstrate that the treatment plan is complete.",
        "A description of historical consequences without identifying who will implement treatment.",
        "Actions, resources, responsibilities, timing, performance measures, and follow-up."
      ],
      "explanation": "An effective treatment plan clarifies what will be done, by whom, with what resources, when, and how results will be measured and reviewed."
    },
    "answer": 3
  },
  {
    "id": 25,
    "difficulty": "intermediate",
    "topic": "treatment",
    "ar": {
      "question": "نقلت منظمة جزءًا من التعرض المالي عبر عقد تأمين. ما العبارة الأكثر دقة؟",
      "options": [
        "قد تتم مشاركة بعض العواقب، لكن المنظمة قد تظل معرضة لمخاطر أو آثار أخرى.",
        "لم يعد هناك أي خطر أو التزام يحتاج إلى المتابعة لأن عقد التأمين نقل التعرض والمسؤولية التشغيلية بالكامل إلى الطرف الآخر.",
        "أصبح الخطر مسؤولية شركة التأمين ولا حاجة لمراقبته.",
        "التأمين لا يُعد خيار معالجة في أي تطبيق لإدارة المخاطر."
      ],
      "explanation": "المشاركة أو النقل التعاقدي قد يغير توزيع بعض الآثار، لكنه لا يلغي بالضرورة كل التعرض أو المسؤوليات أو المخاطر المتبقية."
    },
    "en": {
      "question": "An organization transfers part of its financial exposure through an insurance contract. Which statement is most accurate?",
      "options": [
        "Some consequences may be shared, but the organization may remain exposed to other risks or impacts.",
        "There is no remaining risk or obligation requiring follow-up because the insurance contract transferred both exposure and operational responsibility completely to the other party.",
        "The risk becomes the insurer's responsibility and no further monitoring is needed.",
        "Insurance cannot be a treatment option in any risk management application."
      ],
      "explanation": "Contractual sharing or transfer may change the distribution of some consequences, but it does not necessarily remove all exposure, obligations, or residual risk."
    },
    "answer": 0
  },
  {
    "id": 26,
    "difficulty": "intermediate",
    "topic": "communication",
    "ar": {
      "question": "ما الفرق العملي الأفضل بين Communication وConsultation في إدارة المخاطر؟",
      "options": [
        "الاتصال داخلي فقط، والاستشارة خارجية فقط.",
        "الاتصال يهدف إلى دعم الوعي والفهم، والاستشارة تسعى للحصول على مدخلات وآراء للقرار.",
        "الاتصال يحدث قبل التقييم، والاستشارة بعد المعالجة فقط.",
        "الاستشارة تعني نقل مسؤولية القرار النهائي إلى أصحاب المصلحة الذين يشاركون في التقييم حتى تصبح النتيجة مقبولة لجميع الأطراف."
      ],
      "explanation": "الاتصال يساعد على تبادل وفهم المعلومات، بينما الاستشارة تضيف آراء ومدخلات يمكن أن تحسن عملية اتخاذ القرار."
    },
    "en": {
      "question": "What is the best practical distinction between Communication and Consultation in risk management?",
      "options": [
        "Communication is internal only, while consultation is external only.",
        "Communication supports awareness and understanding; consultation seeks input and views for decisions.",
        "Communication occurs before assessment, while consultation occurs only after treatment.",
        "Consultation means transferring final decision responsibility to the stakeholders involved in the assessment so that the outcome becomes acceptable to all parties."
      ],
      "explanation": "Communication supports the exchange and understanding of information, while consultation brings views and input that can improve decisions."
    },
    "answer": 1
  },
  {
    "id": 27,
    "difficulty": "intermediate",
    "topic": "reporting",
    "ar": {
      "question": "ما القيمة الأساسية من Recording and Reporting في عملية إدارة المخاطر؟",
      "options": [
        "إنتاج أكبر عدد ممكن من السجلات لإثبات وجود النظام.",
        "الاستغناء عن الاجتماعات لأن التقارير تحل محل الحوار الإداري.",
        "دعم القرارات والحوكمة والتواصل والتعلم وإمكانية تتبع ما تم عمله.",
        "حفظ النتائج السرية بعيدًا عن الأشخاص الذين يتخذون القرارات."
      ],
      "explanation": "التسجيل والتقارير ينبغي أن يخدما القرار والحوكمة والتواصل والتعلم، وليس أن يكونا غاية بيروقراطية بحد ذاتها."
    },
    "en": {
      "question": "What is the main value of Recording and Reporting in the risk management process?",
      "options": [
        "Producing as many records as possible to prove a system exists.",
        "Eliminating meetings because reports replace management dialogue.",
        "Supporting decisions, governance, communication, learning, and traceability of actions.",
        "Keeping results confidential from the people who make decisions."
      ],
      "explanation": "Recording and reporting should serve decisions, governance, communication, and learning rather than becoming bureaucracy for its own sake."
    },
    "answer": 2
  },
  {
    "id": 28,
    "difficulty": "intermediate",
    "topic": "dynamic",
    "ar": {
      "question": "بعد شهر من تقييم المشروع، ألغت الحكومة ترخيص مورد رئيسي. ما الإجراء الأنسب؟",
      "options": [
        "الانتظار حتى المراجعة المجدولة للحفاظ على ثبات دورة التقييم وعدم التأثير على قابلية مقارنة مستويات المخاطر بين الفترات المختلفة.",
        "تغيير اسم الخطر في السجل دون إعادة التحليل.",
        "إغلاق الخطر القديم واعتبار الوضع الجديد مشكلة تشغيلية فقط.",
        "مراجعة المخاطر والافتراضات المتأثرة فورًا وتحديث القرارات ذات الصلة."
      ],
      "explanation": "التغير الجوهري في السياق يستدعي إعادة النظر في المخاطر والافتراضات والقرارات بدل انتظار موعد دوري ثابت."
    },
    "en": {
      "question": "One month after a project risk assessment, the government revokes a key supplier's license. What is the most appropriate action?",
      "options": [
        "Wait for the scheduled review to preserve the stability of the assessment cycle and avoid affecting comparability of risk levels between periods.",
        "Rename the risk in the register without reanalysis.",
        "Close the old risk and treat the new situation as an operational issue only.",
        "Review affected risks and assumptions promptly and update related decisions."
      ],
      "explanation": "A material change in context calls for reconsidering affected risks, assumptions, and decisions rather than waiting for a fixed review date."
    },
    "answer": 3
  },
  {
    "id": 29,
    "difficulty": "intermediate",
    "topic": "stakeholders",
    "ar": {
      "question": "تعتبر الإدارة خطرًا معينًا منخفضًا، بينما يراه العملاء عالي الأهمية بسبب أثره على الثقة. ما النهج الأفضل؟",
      "options": [
        "فهم اختلاف التصورات وإدخاله بصورة مناسبة في التشاور ومعايير القرار.",
        "استخدام رأي الإدارة فقط لأنها صاحبة السلطة التنظيمية والمسؤولة عن تخصيص الموارد، مع تسجيل اعتراض العملاء كملاحظة في التقرير النهائي.",
        "أخذ متوسط الرأيين رقميًا وإغلاق النقاش.",
        "استبعاد رأي العملاء لأنه غير مبني على بيانات داخلية."
      ],
      "explanation": "أصحاب المصلحة قد يختلفون في القيم والتصورات، ويجب فهم ذلك واستخدامه بطريقة مناسبة في التواصل والمعايير والقرار."
    },
    "en": {
      "question": "Management views a risk as low, while customers consider it highly important because of its effect on trust. What is the best approach?",
      "options": [
        "Understand the different perceptions and appropriately reflect them in consultation and decision criteria.",
        "Use management's view only because it has organizational authority and resource responsibility, while recording customer concerns as a note in the final report.",
        "Average the two views numerically and close the discussion.",
        "Exclude the customer view because it is not based on internal data."
      ],
      "explanation": "Stakeholders may have different values and perceptions; these should be understood and appropriately reflected in communication, criteria, and decisions."
    },
    "answer": 0
  },
  {
    "id": 30,
    "difficulty": "intermediate",
    "topic": "information",
    "ar": {
      "question": "يعطي نموذجان تحليليان موثوقان تقديرين مختلفين بصورة ملحوظة لنفس الخطر. ما التصرف الأفضل؟",
      "options": [
        "اختيار النموذج الذي ينتج أقل مستوى خطر لتجنب التحفظ الزائد.",
        "فهم الافتراضات ومصادر الاختلاف وتوضيح عدم اليقين عند اتخاذ القرار.",
        "أخذ المتوسط الحسابي للنتيجتين واعتباره النتيجة النهائية ما دام كلا النموذجين موثقًا ويستخدم بيانات متاحة.",
        "إلغاء التحليل لأن اختلاف النماذج يعني عدم صلاحية البيانات."
      ],
      "explanation": "اختلاف النتائج قد يكشف حساسية للافتراضات أو البيانات؛ ينبغي فهمه وإظهاره بدل إخفائه داخل رقم واحد."
    },
    "en": {
      "question": "Two credible analytical models produce noticeably different estimates for the same risk. What is the best response?",
      "options": [
        "Choose the model that gives the lower risk level to avoid excessive conservatism.",
        "Understand assumptions and sources of difference and communicate uncertainty in the decision.",
        "Take the arithmetic average of both estimates and treat it as the final result as long as both models are documented and use available data.",
        "Cancel the analysis because model disagreement proves the data are invalid."
      ],
      "explanation": "Different results may reveal sensitivity to assumptions or data; this should be understood and communicated rather than hidden in one number."
    },
    "answer": 1
  },
  {
    "id": 31,
    "difficulty": "intermediate",
    "topic": "monitoring",
    "ar": {
      "question": "مؤشر الخسائر الفعلية مستقر، لكن عدد Near Misses يرتفع لعدة أشهر. ما الاستنتاج الأنسب؟",
      "options": [
        "لا توجد حاجة للمراجعة أو تعديل التقييم لأن الخسائر الفعلية لم ترتفع، ويمكن الاستمرار في استخدام المؤشرات الحالية حتى وقوع حادث مؤكد.",
        "يجب خفض مستوى الخطر لأن الحوادث لم تقع فعليًا.",
        "قد تكون هناك إشارة مبكرة لتغير الخطر تستدعي المراجعة والتحليل.",
        "Near Misses ليست معلومات ذات صلة بإدارة المخاطر."
      ],
      "explanation": "المؤشرات الاستباقية مثل الأحداث الوشيكة قد تكشف تغيرًا قبل ظهور الخسائر الفعلية، وتفيد المراقبة والمراجعة."
    },
    "en": {
      "question": "Actual loss indicators are stable, but Near Misses have increased for several months. What is the most appropriate conclusion?",
      "options": [
        "No review or reassessment is needed because actual losses have not increased, and current indicators can continue to be used until a confirmed incident occurs.",
        "The risk rating should be reduced because incidents have not actually occurred.",
        "This may be an early signal of changing risk and warrants review and analysis.",
        "Near misses are not relevant information for risk management."
      ],
      "explanation": "Leading indicators such as near misses may reveal change before actual losses occur and are useful for monitoring and review."
    },
    "answer": 2
  },
  {
    "id": 32,
    "difficulty": "intermediate",
    "topic": "objectives",
    "ar": {
      "question": "يمتلك قسم ما سجلًا يحتوي على 120 خطرًا، لكن لا يظهر ارتباط واضح بين المخاطر وأهداف القسم. ما التحسين الأول؟",
      "options": [
        "زيادة عدد المخاطر حتى تشمل كل احتمال ممكن.",
        "حذف كل خطر لا يحتوي على قيمة مالية مباشرة.",
        "تحويل السجل بالكامل إلى درجات رقمية موحدة لتسهيل المقارنة والترتيب، حتى إذا لم يكن هناك ارتباط مباشر ومحدد بين كل خطر وأهداف القسم.",
        "ربط المخاطر بالأهداف والقرارات التي قد تؤثر فيها لتحديد الأولويات."
      ],
      "explanation": "الخطر يُفهم بالنسبة إلى الأهداف؛ الربط بالأهداف يحسن المعنى والأولوية وجودة القرار."
    },
    "en": {
      "question": "A department has a register containing 120 risks, but there is no clear connection between the risks and departmental objectives. What should be improved first?",
      "options": [
        "Increase the number of risks until every possible event is included.",
        "Delete every risk that has no direct financial value.",
        "Convert the entire register to standardized numerical scores for easier comparison and ranking, even if each risk is not directly linked to departmental objectives.",
        "Link risks to the objectives and decisions they may affect so priorities become meaningful."
      ],
      "explanation": "Risk is understood in relation to objectives; linking risks to objectives improves meaning, prioritization, and decision quality."
    },
    "answer": 3
  },
  {
    "id": 33,
    "difficulty": "intermediate",
    "topic": "framework",
    "ar": {
      "question": "تستخدم الإدارة التنفيذية مقياس مخاطر من خمس درجات، بينما تستخدم الوحدات التشغيلية ثلاث درجات بتعريفات مختلفة. ما الخطر الإداري الرئيسي؟",
      "options": [
        "صعوبة تجميع ومقارنة المعلومات واتخاذ قرارات متسقة عبر المستويات.",
        "عدم إمكانية استخدام أكثر من ثلاث درجات وفق ISO 31000 لأن زيادة عدد المستويات تؤدي إلى دقة زائفة وتمنع المقارنة بين الوحدات المختلفة.",
        "انخفاض عدد المخاطر المسجلة في الوحدات التشغيلية.",
        "ضرورة تحويل جميع المخاطر إلى قيم مالية بدل الدرجات."
      ],
      "explanation": "ينبغي أن يسمح الإطار بالمقارنة والفهم المشترك مع إمكانية التخصيص؛ التعريفات غير المتوافقة قد تعوق التقارير والقرار."
    },
    "en": {
      "question": "Executive management uses a five-level risk scale, while operating units use three levels with different definitions. What is the main management concern?",
      "options": [
        "Difficulty aggregating and comparing information and making consistent decisions across levels.",
        "ISO 31000 does not permit more than three risk levels because additional levels create false precision and prevent comparison between different units.",
        "The operating units will record fewer risks.",
        "All risks must be converted to monetary values instead of ratings."
      ],
      "explanation": "The framework should support comparability and shared understanding while allowing customization; incompatible definitions can weaken reporting and decisions."
    },
    "answer": 0
  },
  {
    "id": 34,
    "difficulty": "intermediate",
    "topic": "treatment",
    "ar": {
      "question": "أدى تطبيق ضابط جديد للأمن السيبراني إلى إبطاء عملية خدمة العملاء وظهور خطر فقدان عملاء. كيف ينبغي التعامل مع ذلك؟",
      "options": [
        "اعتباره أثرًا مقبولًا تلقائيًا لأن الضابط أمني.",
        "تحديد الخطر الناتج وتحليله وتقييمه وموازنته مع فوائد المعالجة.",
        "إلغاء الضابط فورًا لأن أي معالجة لا ينبغي أن تُنشئ مخاطر جديدة.",
        "نقل تقييم أثر الخدمة إلى فريق المبيعات فقط دون إدخاله في عملية المخاطر."
      ],
      "explanation": "المعالجة قد تُنشئ مخاطر جديدة أو تعدل مخاطر أخرى، وينبغي إدخال ذلك في العملية بدل تجاهله."
    },
    "en": {
      "question": "A new cybersecurity control slows customer service and creates a risk of customer loss. How should this be handled?",
      "options": [
        "Treat the impact as automatically acceptable because the control is security-related.",
        "Identify, analyze, and evaluate the new risk and balance it against the treatment benefits.",
        "Remove the control immediately because treatment should never create new risks.",
        "Leave the service impact to the sales team without bringing it into the risk process."
      ],
      "explanation": "Treatment can create new risks or modify other risks, and these effects should be brought into the process rather than ignored."
    },
    "answer": 1
  },
  {
    "id": 35,
    "difficulty": "intermediate",
    "topic": "opportunity",
    "ar": {
      "question": "تستطيع المنظمة الحصول على فرصة سوقية مهمة إذا قبلت مستوى أعلى من تقلب الطلب لفترة محدودة. ما النهج الأكثر اتساقًا مع ISO 31000؟",
      "options": [
        "رفض الفرصة لأن إدارة المخاطر تركز على خفض التعرض دائمًا.",
        "قبول الفرصة دون تقييم للمخاطر لأن النتائج الإيجابية والفرص التجارية تخضع للتخطيط الاستراتيجي ولا تدخل ضمن نطاق إدارة المخاطر.",
        "دراسة قرار مدروس لزيادة أو تحمل بعض المخاطر إذا كان ذلك يدعم الأهداف ومعايير القرار.",
        "رفع مستوى الخطر في السجل فقط دون تغيير القرار أو المراقبة."
      ],
      "explanation": "إدارة المخاطر لا تعني دائمًا تقليل الخطر؛ قد يتم قبول أو زيادة التعرض بصورة مدروسة للاستفادة من فرصة."
    },
    "en": {
      "question": "An organization can capture an important market opportunity if it accepts higher demand volatility for a limited period. Which approach is most consistent with ISO 31000?",
      "options": [
        "Reject the opportunity because risk management always aims to reduce exposure.",
        "Accept the opportunity without risk assessment because positive outcomes and business opportunities belong to strategic planning rather than the risk management scope.",
        "Consider an informed decision to increase or retain some risk if it supports objectives and decision criteria.",
        "Increase the risk rating in the register without changing the decision or monitoring."
      ],
      "explanation": "Risk management does not always mean reducing risk; exposure may be retained or increased deliberately to pursue an opportunity."
    },
    "answer": 2
  },
  {
    "id": 36,
    "difficulty": "advanced",
    "topic": "analysis",
    "ar": {
      "question": "خطر ما يقع أسفل حد القبول وفق الدرجة المعتادة، لكن عواقبه القصوى قد تكون كارثية وتقدير الاحتمالية شديد عدم اليقين. ما النهج الأقوى؟",
      "options": [
        "قبوله مباشرة لأن النتيجة العددية أقل من الحد المحدد في المصفوفة، مع الاكتفاء بتوثيق السيناريو الكارثي كملاحظة غير مؤثرة على القرار.",
        "رفع الاحتمالية إلى أعلى درجة تلقائيًا كإجراء تحفظي.",
        "استبعاد السيناريو الكارثي لأنه لم يحدث تاريخيًا.",
        "إجراء تحليل أعمق والنظر في شدة العواقب وعدم اليقين وكيف تعكسها المعايير."
      ],
      "explanation": "القرار لا ينبغي أن يعتمد آليًا على درجة واحدة؛ قد تستلزم العواقب الكبيرة وعدم اليقين تحليلًا إضافيًا ومعايير تعكس طبيعة الخطر."
    },
    "en": {
      "question": "A risk falls below the normal acceptance threshold, but its extreme consequence could be catastrophic and likelihood is highly uncertain. What is the stronger approach?",
      "options": [
        "Accept it immediately because the numerical result is below the matrix threshold, documenting the catastrophic scenario only as a note that does not affect the decision.",
        "Automatically set likelihood to the highest category as a conservative measure.",
        "Exclude the catastrophic scenario because it has not occurred historically.",
        "Perform deeper analysis and consider consequence severity, uncertainty, and how criteria reflect them."
      ],
      "explanation": "A decision should not be driven mechanically by one score; severe consequences and high uncertainty may justify further analysis and criteria that reflect the nature of the risk."
    },
    "answer": 3
  },
  {
    "id": 37,
    "difficulty": "advanced",
    "topic": "portfolio",
    "ar": {
      "question": "خمسة مشروعات لديها مخاطر مقبولة كلٌ على حدة، لكنها جميعًا تعتمد على المورد نفسه. ما الذي قد يفوته التقييم المنفصل؟",
      "options": [
        "احتمال أن تتجمع أو تترابط المخاطر لتنتج تعرضًا كليًا غير مقبول.",
        "ضرورة إعادة تصنيف جميع المخاطر الفردية إلى مستوى High.",
        "عدم جواز وجود مورد واحد لأكثر من مشروع في نظام إدارة المخاطر.",
        "أن المخاطر المقبولة فرديًا لا تحتاج إلى أي مراقبة على مستوى المحفظة."
      ],
      "explanation": "الاعتماد المشترك قد يخلق تراكمًا أو ترابطًا بين المخاطر لا يظهر عند تقييم كل مشروع بمعزل عن الآخرين."
    },
    "en": {
      "question": "Five projects each have individually acceptable risks, but all depend on the same supplier. What might separate assessments miss?",
      "options": [
        "The possibility that risks aggregate or interact to create unacceptable total exposure.",
        "The need to reclassify every individual risk as High.",
        "A rule that one supplier cannot support more than one project in risk management.",
        "Individually acceptable risks require no portfolio-level monitoring."
      ],
      "explanation": "A shared dependency can create accumulation or interdependence that is not visible when each project is assessed in isolation."
    },
    "answer": 0
  },
  {
    "id": 38,
    "difficulty": "advanced",
    "topic": "methods",
    "ar": {
      "question": "تطلب الإدارة رقمًا واحدًا موحدًا لمقارنة مخاطر السلامة والسمعة والامتثال والاستثمار. ما التحفظ الأكثر أهمية؟",
      "options": [
        "كل هذه المخاطر يجب أن تُقاس ماليًا وإلا لا يمكن إدارتها.",
        "المقياس الموحد قد يخلق دقة زائفة إذا لم يعكس اختلاف طبيعة العواقب والمعايير والسياق.",
        "المقارنة بين أنواع المخاطر المختلفة ممنوعة تمامًا في ISO 31000، ولذلك ينبغي إعداد نظام تقييم منفصل وغير قابل للتجميع لكل فئة من فئات المخاطر.",
        "أفضل حل هو استخدام أعلى درجة محتملة لكل خطر لتجنب التحيز."
      ],
      "explanation": "الطرق ينبغي أن تكون مناسبة لطبيعة القرار والخطر؛ تحويل مخاطر مختلفة إلى رقم واحد قد يخفي فروقًا مهمة ويعطي انطباعًا زائفًا بالدقة."
    },
    "en": {
      "question": "Management asks for one standardized number to compare safety, reputation, compliance, and investment risks. What is the most important caution?",
      "options": [
        "All these risks must be monetized or they cannot be managed.",
        "A single metric can create false precision if it hides differences in consequences, criteria, and context.",
        "Comparing different risk types is completely prohibited by ISO 31000, so a separate non-aggregatable evaluation system should be created for each risk category.",
        "The best solution is to assign the highest possible score to every risk to avoid bias."
      ],
      "explanation": "Methods should suit the risk and decision; compressing very different risks into one number can hide important distinctions and create false precision."
    },
    "answer": 1
  },
  {
    "id": 39,
    "difficulty": "advanced",
    "topic": "controls",
    "ar": {
      "question": "تؤكد وثائق التصميم أن ضابطًا حرجًا قوي، لكن لا توجد بيانات تشغيلية تثبت أداءه الفعلي. كيف ينبغي التعامل مع فعالية الضابط؟",
      "options": [
        "اعتبار الضابط فعالًا بالكامل لأن التصميم تمت مراجعته واعتماده من الجهات المختصة، حتى لو لم تتوافر بعد بيانات تشغيلية عن أدائه الفعلي.",
        "تجاهل الضابط تمامًا حتى يحدث فشل فعلي في العمليات.",
        "التمييز بين جودة التصميم والأداء الفعلي واستخدام أدلة تشغيلية أو اختبار مناسب.",
        "خفض مستوى الخطر لأن عدم وجود حوادث يثبت فعالية الضابط."
      ],
      "explanation": "وجود تصميم جيد لا يساوي بالضرورة أداءً فعليًا جيدًا؛ تحليل الخطر يحتاج إلى فهم واقعي لفعالية الضوابط والأدلة المتاحة."
    },
    "en": {
      "question": "Design documents indicate that a critical control is strong, but there is no operational evidence of actual performance. How should control effectiveness be treated?",
      "options": [
        "Treat the control as fully effective because its design was reviewed and approved by the relevant functions, even if operational performance data are not yet available.",
        "Ignore the control entirely until an actual operational failure occurs.",
        "Distinguish design quality from actual performance and obtain operational evidence or suitable testing.",
        "Reduce the risk level because the absence of incidents proves the control is effective."
      ],
      "explanation": "Good design does not necessarily equal good operating performance; risk analysis needs a realistic understanding of control effectiveness and available evidence."
    },
    "answer": 2
  },
  {
    "id": 40,
    "difficulty": "advanced",
    "topic": "proportionality",
    "ar": {
      "question": "قرار استثماري كبير غير قابل للعكس بسهولة، بينما المعلومات المتاحة محدودة. كيف ينبغي أن يؤثر ذلك في عمق Risk Analysis؟",
      "options": [
        "يفضل تحليل أبسط لأن البيانات المحدودة لا تسمح بأي فائدة من التعمق.",
        "يجب استخدام مصفوفة 5×5 فقط لأنها توفر اتساقًا مع القرارات الأخرى.",
        "لا حاجة لتحليل المخاطر إذا كان القرار معتمدًا من مجلس الإدارة.",
        "يفضل تحليل أعمق يتناسب مع أهمية القرار وعدم اليقين وصعوبة التراجع عنه."
      ],
      "explanation": "مستوى التفصيل ينبغي أن يكون متناسبًا مع أهمية القرار وتعقيده وعدم اليقين؛ القرارات الكبيرة غير القابلة للعكس تستحق عادة تحليلًا أعمق."
    },
    "en": {
      "question": "A major investment decision is difficult to reverse, while available information is limited. How should this affect the depth of Risk Analysis?",
      "options": [
        "Use simpler analysis because limited data makes deeper analysis pointless.",
        "Use only a 5×5 matrix because it ensures consistency with other decisions.",
        "No risk analysis is needed once the board has approved the decision.",
        "Use deeper analysis proportionate to the decision's significance, uncertainty, and limited reversibility."
      ],
      "explanation": "The level of detail should be proportionate to decision significance, complexity, and uncertainty; major hard-to-reverse decisions generally justify deeper analysis."
    },
    "answer": 3
  },
  {
    "id": 41,
    "difficulty": "advanced",
    "topic": "emerging",
    "ar": {
      "question": "ظهرت تقنية جديدة قد تغير نموذج أعمال المنظمة خلال عامين، لكن أثرها غير واضح حتى الآن. كيف ينبغي التعامل معها؟",
      "options": [
        "اعتبارها مصدر تغير محتمل، مراقبة الإشارات وتحديث السيناريوهات مع تطور المعلومات.",
        "عدم تسجيلها حتى توجد بيانات تاريخية كافية.",
        "تصنيفها كخطر مرتفع تلقائيًا لأنها تقنية جديدة.",
        "نقل مسؤوليتها إلى إدارة الابتكار وإخراجها من عملية إدارة المخاطر إلى أن تصبح التقنية جزءًا من العمليات الرسمية ويظهر لها أثر قابل للقياس."
      ],
      "explanation": "المخاطر الناشئة قد تبدأ بإشارات غير كاملة؛ النهج الديناميكي يستخدم المراقبة والسيناريوهات والتحديث التدريجي مع تحسن المعلومات."
    },
    "en": {
      "question": "A new technology may change the organization's business model within two years, but its impact is still unclear. How should it be handled?",
      "options": [
        "Treat it as a possible source of change, monitor signals, and update scenarios as information develops.",
        "Do not record it until sufficient historical data exist.",
        "Automatically classify it as High risk because the technology is new.",
        "Transfer responsibility to the innovation team and remove it from the risk process until the technology becomes part of formal operations and produces measurable effects."
      ],
      "explanation": "Emerging risks may begin with incomplete signals; a dynamic approach uses monitoring, scenarios, and progressive updates as information improves."
    },
    "answer": 0
  },
  {
    "id": 42,
    "difficulty": "advanced",
    "topic": "criteria",
    "ar": {
      "question": "انخفضت قدرة المنظمة على تحمل خسائر نقدية بعد أزمة سيولة، بينما ظلت مصفوفة المخاطر كما هي. ما الإجراء الأكثر اتساقًا؟",
      "options": [
        "الإبقاء على المعايير حتى نهاية العام حتى لا تتغير النتائج السابقة.",
        "مراجعة معايير المخاطر لتتوافق مع القدرة الحالية على التحمل والأهداف والسياق.",
        "خفض كل المخاطر درجة واحدة لتعكس ضعف الوضع المالي.",
        "زيادة احتمالية جميع المخاطر المالية بصورة موحدة حتى تعكس المصفوفة انخفاض السيولة دون تغيير معايير التقييم المستخدمة."
      ],
      "explanation": "تغير القدرة على التحمل والسياق قد يغير معنى المقبول وغير المقبول، لذلك ينبغي مراجعة المعايير نفسها بدل تعديل الدرجات بصورة آلية."
    },
    "en": {
      "question": "The organization's ability to absorb cash losses decreases after a liquidity crisis, while the risk matrix remains unchanged. What is the most consistent action?",
      "options": [
        "Keep the criteria until year-end so previous results remain unchanged.",
        "Review risk criteria so they reflect current capacity, objectives, and context.",
        "Reduce every risk by one level to reflect the weaker financial position.",
        "Increase the likelihood of all financial risks uniformly so the matrix reflects lower liquidity without changing the evaluation criteria being used."
      ],
      "explanation": "A change in capacity and context may change what is acceptable, so the criteria should be reviewed rather than mechanically changing scores."
    },
    "answer": 1
  },
  {
    "id": 43,
    "difficulty": "advanced",
    "topic": "treatment",
    "ar": {
      "question": "أحد خيارات المعالجة يخفض الخطر بأكبر قدر، لكنه يتعارض مع التزام قانوني واضح. ما القرار الأنسب؟",
      "options": [
        "اختياره لأنه يحقق أقل مستوى خطر متبقٍ.",
        "اعتماده إذا وافق مالك الخطر على تحمل المسؤولية.",
        "استبعاده أو تعديله لأن اختيار المعالجة يجب أن يراعي الالتزامات والقيم إضافة إلى مستوى الخطر.",
        "استخدامه مؤقتًا لأن خفض الخطر له أولوية أعلى، ثم مراجعته لاحقًا عند تحديث التشريع أو انتهاء فترة المعالجة المخططة."
      ],
      "explanation": "فعالية خفض الخطر ليست العامل الوحيد؛ يجب أن تكون المعالجة متسقة مع الالتزامات القانونية والقيم والاعتبارات الأخرى ذات الصلة."
    },
    "en": {
      "question": "One treatment option reduces risk the most but conflicts with a clear legal obligation. What is the most appropriate decision?",
      "options": [
        "Select it because it gives the lowest residual risk.",
        "Approve it if the risk owner agrees to accept responsibility.",
        "Reject or modify it because treatment selection must consider obligations and values as well as risk level.",
        "Use it temporarily because risk reduction has higher priority, then review it when the law changes or the planned treatment period ends."
      ],
      "explanation": "Risk reduction effectiveness is not the only factor; treatment must also be consistent with legal obligations, values, and other relevant considerations."
    },
    "answer": 2
  },
  {
    "id": 44,
    "difficulty": "advanced",
    "topic": "framework",
    "ar": {
      "question": "تقول وحدة أعمال صغيرة إن إطار المخاطر المؤسسي مصمم للمشروعات الضخمة ويضيف عبئًا لا يتناسب مع قراراتها اليومية. ما الحل الأفضل؟",
      "options": [
        "إعفاء الوحدة بالكامل من إدارة المخاطر المؤسسية.",
        "إجبار الوحدة على تطبيق جميع النماذج وخطوات التوثيق بالتفصيل نفسه المستخدم في المشروعات الكبرى لضمان الاتساق الكامل بين الوحدات.",
        "نقل جميع قرارات المخاطر الخاصة بالوحدة إلى الإدارة المركزية.",
        "تبسيط وتخصيص الممارسة بما يتناسب مع طبيعة الوحدة مع الحفاظ على التكامل والمبادئ الأساسية."
      ],
      "explanation": "التخصيص والملاءمة يساعدان على التطبيق العملي، لكن ذلك لا يعني التخلي عن الدمج والحوكمة والمبادئ المشتركة."
    },
    "en": {
      "question": "A small business unit says the corporate risk framework was designed for large projects and creates disproportionate burden for daily decisions. What is the best solution?",
      "options": [
        "Exempt the unit completely from organizational risk management.",
        "Force the unit to use all forms and documentation steps at the same level of detail as major projects to ensure complete consistency across units.",
        "Move all risk decisions from the unit to central management.",
        "Simplify and tailor the practice to the unit while preserving integration and core principles."
      ],
      "explanation": "Customization and proportionality support practical application, but they do not mean abandoning integration, governance, or shared principles."
    },
    "answer": 3
  },
  {
    "id": 45,
    "difficulty": "advanced",
    "topic": "consultation",
    "ar": {
      "question": "يتطلب التشاور بشأن خطر اندماج محتمل معلومات حساسة تجاريًا. كيف يمكن تحقيق الشمولية بصورة ناضجة؟",
      "options": [
        "إشراك الأطراف المناسبة بالمعلومات اللازمة لدورهم مع حماية السرية والقيود المشروعة.",
        "نشر جميع التفاصيل والمعلومات الداعمة لجميع أصحاب المصلحة في الوقت نفسه لضمان الشفافية الكاملة ومنع اختلاف مستوى المعرفة بين الأطراف.",
        "إلغاء التشاور بالكامل لأن السرية أهم من جودة القرار.",
        "إشراك الأطراف الخارجية فقط بعد الإعلان الرسمي عن الاندماج."
      ],
      "explanation": "الشمولية لا تعني الإفصاح غير المقيد؛ يمكن تصميم الاستشارة لتكون مناسبة وفي الوقت المناسب وتحمي المعلومات الحساسة."
    },
    "en": {
      "question": "Consultation about a potential merger requires commercially sensitive information. How can inclusiveness be achieved maturely?",
      "options": [
        "Involve appropriate parties with the information needed for their role while protecting legitimate confidentiality.",
        "Publish all details and supporting information to every stakeholder at the same time to guarantee full transparency and prevent differences in information access.",
        "Cancel consultation entirely because confidentiality is more important than decision quality.",
        "Involve external parties only after the merger has been publicly announced."
      ],
      "explanation": "Inclusiveness does not require unrestricted disclosure; consultation can be designed to be appropriate and timely while protecting sensitive information."
    },
    "answer": 0
  },
  {
    "id": 46,
    "difficulty": "advanced",
    "topic": "information",
    "ar": {
      "question": "تقيّم المنظمة حدثًا نادرًا شديد الأثر لم يقع لديها سابقًا. ما الخطأ الأكثر خطورة؟",
      "options": [
        "استخدام السيناريوهات وآراء الخبراء مع توضيح عدم اليقين.",
        "اعتبار الاحتمالية صفرًا لمجرد عدم وجود تاريخ داخلي للحدث.",
        "مقارنة الخبرات الخارجية ذات الصلة بسياق المنظمة.",
        "اختبار حساسية القرار لافتراضات مختلفة."
      ],
      "explanation": "غياب السجل التاريخي لا يساوي استحالة الحدث؛ يمكن استخدام سيناريوهات وخبرات ومصادر أخرى مع بيان عدم اليقين."
    },
    "en": {
      "question": "An organization assesses a rare, high-impact event that has never occurred internally. What is the most serious mistake?",
      "options": [
        "Using scenarios and expert judgment while communicating uncertainty.",
        "Treating likelihood as zero simply because there is no internal event history.",
        "Comparing relevant external experience with the organization's context.",
        "Testing how the decision changes under different assumptions."
      ],
      "explanation": "No internal history does not mean an event is impossible; scenarios, expertise, and other sources can be used while uncertainty is made explicit."
    },
    "answer": 1
  },
  {
    "id": 47,
    "difficulty": "advanced",
    "topic": "residual-risk",
    "ar": {
      "question": "وافقت الإدارة على Residual Risk بعد تنفيذ المعالجة. أي ممارسة ينبغي أن تستمر؟",
      "options": [
        "حذف الخطر من السجل لأنه حصل على موافقة رسمية.",
        "منع أي تعديل على التقييم أو قرار القبول حتى انتهاء السنة المالية حتى تظل الموافقة الإدارية مستقرة وقابلة للمقارنة مع التقارير السابقة.",
        "متابعة الخطر والضوابط وتسجيل القرار ومراجعته عند تغير السياق أو الأداء.",
        "اعتبار المعالجة ناجحة نهائيًا دون الحاجة إلى قياس الفعالية."
      ],
      "explanation": "قبول الخطر المتبقي قرار في نقطة زمنية وليس نهاية دورة الإدارة؛ يستمر الرصد والمراجعة والتسجيل والاستجابة للتغير."
    },
    "en": {
      "question": "Management accepts Residual Risk after treatment. Which practice should continue?",
      "options": [
        "Delete the risk from the register because formal approval has been obtained.",
        "Prevent any reassessment or change to the acceptance decision until year-end so management approval remains stable and comparable with previous reports.",
        "Monitor the risk and controls, record the decision, and review it when context or performance changes.",
        "Treat the treatment as permanently successful without measuring effectiveness."
      ],
      "explanation": "Residual risk acceptance is a decision at a point in time, not the end of management; monitoring, review, recording, and response to change continue."
    },
    "answer": 2
  },
  {
    "id": 48,
    "difficulty": "advanced",
    "topic": "performance",
    "ar": {
      "question": "تقيس المنظمة نجاح إدارة المخاطر بعدد المخاطر التي تم إغلاقها كل ربع سنة. ما أوجه القصور في هذا المؤشر؟",
      "options": [
        "لا يجوز استخدام مؤشرات كمية في قياس أداء إدارة المخاطر لأن الفعالية يجب أن تُقاس فقط من خلال التقييمات النوعية وآراء الإدارة العليا.",
        "عدد المخاطر المفتوحة يجب أن يزيد دائمًا في النظام الناضج.",
        "المؤشر صحيح فقط إذا كان كل خطر بدرجة مالية محددة.",
        "قد يشجع على إغلاق السجلات بدل قياس أثر إدارة المخاطر في الأهداف وجودة القرارات والمرونة."
      ],
      "explanation": "التركيز على عدد المخاطر المغلقة قد يقيس النشاط الإداري بدل القيمة والنتائج؛ مؤشرات الأداء ينبغي أن ترتبط بفعالية الإطار والقرارات والأهداف."
    },
    "en": {
      "question": "An organization measures risk management success by the number of risks closed each quarter. What is the weakness in this indicator?",
      "options": [
        "Quantitative indicators cannot be used to measure risk management performance because effectiveness should be assessed only through qualitative reviews and senior management opinion.",
        "The number of open risks should always increase in a mature system.",
        "The indicator is valid only if every risk has a monetary value.",
        "It may encourage closing records rather than measuring effects on objectives, decision quality, and resilience."
      ],
      "explanation": "Counting closed risks may measure administrative activity rather than value and outcomes; performance measures should connect to framework effectiveness, decisions, and objectives."
    },
    "answer": 3
  },
  {
    "id": 49,
    "difficulty": "advanced",
    "topic": "governance",
    "ar": {
      "question": "أكدت المراجعة الداخلية أن جميع نماذج تقييم المخاطر مكتملة، لكنها وجدت أن افتراضًا استراتيجيًا رئيسيًا لم يُناقش مطلقًا. ما الاستنتاج الأقوى؟",
      "options": [
        "الالتزام بالإجراء وحده لا يضمن جودة إدارة المخاطر إذا لم تُفهم الافتراضات وعدم اليقين المؤثر في الأهداف.",
        "العملية فعالة لأن جميع النماذج المطلوبة مكتملة.",
        "المشكلة تخص الاستراتيجية فقط ولا علاقة لها بإدارة المخاطر.",
        "يكفي إضافة الافتراض إلى سجل المخاطر وتوثيقه في المراجعة التالية دون إعادة النظر في التحليلات أو القرارات السابقة المبنية عليه."
      ],
      "explanation": "الهدف ليس استكمال النماذج بل دعم أهداف وقرارات أفضل؛ إغفال افتراض جوهري قد يجعل العملية شكلية رغم اكتمال الوثائق."
    },
    "en": {
      "question": "Internal audit confirms that every risk assessment form is complete but finds that a major strategic assumption was never challenged. What is the strongest conclusion?",
      "options": [
        "Procedural compliance alone does not ensure good risk management if assumptions and uncertainty affecting objectives are not understood.",
        "The process is effective because all required forms are complete.",
        "The issue belongs only to strategy and is unrelated to risk management.",
        "Adding the assumption to the risk register and documenting it at the next review is sufficient without reconsidering earlier analyses or decisions based on it."
      ],
      "explanation": "The purpose is not form completion but better objectives and decisions; missing a critical assumption can make the process superficial despite complete documentation."
    },
    "answer": 0
  },
  {
    "id": 50,
    "difficulty": "advanced",
    "topic": "integration",
    "ar": {
      "question": "بعد اندماج شركتين، تستخدم كل منهما مصطلحات ومعايير مختلفة للمخاطر. ما النهج الأفضل لبناء ممارسة مشتركة؟",
      "options": [
        "فرض نظام الشركة الأكبر فورًا دون تحليل اختلاف السياقات.",
        "إنشاء لغة وحوكمة ومعايير مشتركة قابلة للمقارنة مع السماح بالتخصيص حيث يبرره السياق.",
        "الإبقاء على النظامين منفصلين بالكامل لأن التوحيد يضر بالتخصيص.",
        "اختيار النظام الذي يحتوي على أكبر عدد من درجات المخاطر وتطبيقه باعتباره الأكثر تفصيلًا وقابلية للضبط على جميع الوحدات."
      ],
      "explanation": "الدمج الناجح يحتاج إلى فهم مشترك وقابلية للمقارنة والحوكمة، مع الحفاظ على التخصيص المناسب للاختلافات الحقيقية في السياق."
    },
    "en": {
      "question": "After two companies merge, each uses different risk terminology and criteria. What is the best approach to build a common practice?",
      "options": [
        "Impose the larger company's system immediately without analyzing contextual differences.",
        "Establish shared language, governance, and comparable criteria while allowing justified contextual customization.",
        "Keep both systems completely separate because standardization harms customization.",
        "Choose the system with the greatest number of risk-rating levels and apply it across all units because it appears more detailed and configurable."
      ],
      "explanation": "Successful integration needs common understanding, comparability, and governance while preserving appropriate customization for genuine contextual differences."
    },
    "answer": 1
  }
];
