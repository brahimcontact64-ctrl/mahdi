(() => {
  'use strict';
  const config = window.COACH_CONFIG || {};
  const plans = Object.freeze({1: {months: 1, total: 25000}, 2: {months: 2, total: 45000}, 3: {months: 3, total: 60000}});
  const arabic = {
    currencyLabel:'دج',
    heroQualification:'تكوين في كمال الأجسام واللياقة البدنية', portraitLabel:'مدربك', portraitSpecialty:'كمال الأجسام · اللياقة البدنية',
    credentialsLabel:'التكوين وراء المرافقة', credentialsTitle1:'مدرب واحد. تكوينان.', credentialsTitle2:'التزام بمرافقتك.', credentialsIntro:'شهادات مهدي في كمال الأجسام واللياقة البدنية من International Coaching & Development Group في تلمسان.', credentialMuscle:'كمال الأجسام', credentialFitness:'اللياقة البدنية', credentialTraining:'تكوين المدربين · 50 ساعة', credentialsCta:'لنناقش هدفك ↗',
    skip:'الانتقال إلى المحتوى', brandSub:'تدريب رياضي شخصي', navApproach:'المنهج', navPrograms:'البرامج', navPricing:'الباقات', navCoach:'المدرب', start:'ابدأ الآن',
    heroLabel:'تدريب رياضي · الجزائر', heroLine1:'قدراتك.', heroLine2:'طموحك.', heroLine3:'خطوتك القادمة.', heroDescription:'تدريب يناسبك. تغذية تناسب هدفك. ومدرب يرافقك لبناء تقدّمك خطوة بخطوة.', discoverPlans:'اختر باقتك', discoverMethod:'اكتشف المنهج', heroPersonal:'مستواك. إيقاعك.', heroRemote:'تدريب عن بُعد', heroCaption:'الاستمرارية تصنع الفرق.', stampTop:'هدف واحد.', stampMain:'تقدّمك<br>الشخصي.', stampBottom:'نبنيه معًا.',
    strip1:'التدريب', strip2:'التغذية', strip3:'المتابعة', strip4:'التقدّم', approachLabel:'01 / منهج واضح للتقدّم', approachTitle1:'هدف واضح.', approachTitle2:'خطة تناسبك أنت.', approachIntro:'البرنامج المناسب هو الذي تستطيع الالتزام به. نبني مرافقتك حول مستواك، وقتك وحياتك اليومية.',
    pillar1Title:'تدرّب بخطة', pillar1Body:'حصص منظمة حسب هدفك والمعدات المتاحة لك، لتعرف ماذا تفعل وكيف تتقدّم.', pillar1Tag:'برنامج رياضي', pillar2Title:'نظّم تغذيتك', pillar2Body:'توجيهات غذائية تناسب عاداتك وهدفك، مع مناقشة المكمّلات عند الحاجة.', pillar2Tag:'مرافقة غذائية', pillar3Title:'تقدّم مع مدرب', pillar3Body:'تبادل حول حصصك، الصعوبات التي تواجهك وتقدّمك لتعديل الخطوات القادمة معًا.', pillar3Tag:'متابعة شخصية',
    programsLabel:'02 / نقطة البداية', programsTitle:'ما الهدف الذي<br>يدفعك للأمام؟', programsIntro:'نبدأ بهدف، ونبني حوله مسارك.', goalMuscle:'زيادة العضلات', goalWeight:'خسارة الوزن', goalFitness:'تحسين اللياقة', goalOther:'نحدّده معًا', chooseGoal:'هذا هو هدفي',
    pricingLabel:'03 / المدة التي تناسبك', pricingTitle1:'اختر المدة.', pricingTitle2:'ونبني معًا الخطة.', pricingIntro:'تدريب، مرافقة غذائية ومتابعة شخصية في كل باقة.', plan1Tag:'الخطوة الأولى', plan1Name:'البداية', month1:'شهر واحد من التدريب', plan1Monthly:'<bdi dir="ltr">25 000</bdi> دج / شهر', plan2Tag:'بناء الإيقاع', plan2Name:'التطوّر', month2:'شهران من التدريب', plan2Monthly:'<bdi dir="ltr">22 500</bdi> دج / شهر · توفير <bdi dir="ltr">5 000</bdi> دج*', plan3Tag:'الاستمرارية', plan3Name:'التحوّل', month3:'ثلاثة أشهر من التدريب', plan3Monthly:'<bdi dir="ltr">20 000</bdi> دج / شهر · توفير <bdi dir="ltr">15 000</bdi> دج*', feature1:'برنامج تدريب مناسب لمستواك', feature2:'مرافقة غذائية', feature3:'توجيهات حول المكمّلات', feature4:'متابعة وتعديلات مع المدرب', choose1:'اختر شهرًا واحدًا', choose2:'اختر شهرين', choose3:'اختر ثلاثة أشهر', savingsNote:'* مقارنة بتكلفة اشتراك شهر واحد بشكل منفصل لنفس المدة.', paymentNote:'لا دفع عند تقديم الطلب. يتم الاتفاق على طريقة الدفع مع المدرب قبل البداية.',
    coachLabel:'التدريب أيضًا علاقة ثقة.', coachTitle1:'أنت تبذل الجهد.', coachTitle2:'ونبقى على المسار.', coachIntro:'البرنامج وحده لا يكفي. أن تسأل، تفهم التمرين وتعدّل إيقاعك: هذا ما يعطي المرافقة معناها.', talkCoach:'ناقش هدفي مع المدرب', coachCardLabel:'مرافقتك الشخصية', coachDetail1Title:'حديث قبل البداية', coachDetail1Body:'مستواك، هدفك والوقت المتاح لك.', coachDetail2Title:'تكوين في كمال الأجسام واللياقة البدنية', coachDetail2Body:'شهادتان لتكوين المدربين من International Coaching & Development Group في تلمسان.', coachDetail3Title:'توقعات واضحة', coachDetail3Body:'يتم توضيح محتوى المتابعة والشروط قبل التسجيل.', viewDiploma:'تعرّف على تكويني ↗',
    processLabel:'بداية بسيطة', processTitle:'من التواصل الأول<br>إلى أول حصة.', step1Title:'شارك هدفك', step1Body:'اختر باقة وجهّز طلبك في لحظات.', step2Title:'تحدّث مع المدرب', step2Body:'تتفقان على البرنامج، المتابعة وطريقة الدفع.', step3Title:'ابدأ مسارك', step3Body:'تنطلق مرافقتك حسب الشروط المتفق عليها.',
    faqLabel:'قبل أن تبدأ', faqTitle:'أسئلتك.<br>إجابات واضحة.', faq1q:'هل يناسبني إذا كنت مبتدئًا؟', faq1a:'تستطيع تجهيز طلب مهما كان مستواك. التواصل الأول يساعد على التأكد أن المرافقة تناسب وضعك.', faq2q:'هل يجب أن أشترك في قاعة رياضية؟', faq2a:'اذكر هل تتدرّب في القاعة أو المنزل والمعدات المتاحة لك. يوضّح لك المدرب الإمكانيات خلال التواصل الأول.', faq3q:'ماذا تتضمن المرافقة الغذائية؟', faq3a:'تتعلق بتنظيم تغذيتك حول هدفك. تُناقش التفاصيل ومكان المكمّلات المحتمل مع المدرب.', faq4q:'كيف يتم التسجيل والدفع؟', faq4a:'جهّز طلبك ثم أرسله إلى المدرب. تتفقان على البداية، الشروط ووسيلة الدفع قبل أي تسديد.', faq5q:'هل النتائج مضمونة؟', faq5a:'تختلف النتائج حسب نقطة البداية، الالتزام والوضع الشخصي. الهدف هو بناء تقدّم واقعي دون وعد بنتيجة واحدة للجميع.',
    contactLabel:'خطوتك القادمة تبدأ منك.', contactTitle1:'هدفك.', contactTitle2:'نتحدّث عنه؟', contactIntro:'بعض المعلومات لنحضّر تواصلًا أول مفيدًا مع مدربك.', contactNote:'طلب واحد، دون التزام.<br>نختار المسار معًا.', emailWord:'البريد الإلكتروني', formTitle:'لنحضّر تواصلك الأول.', requiredNote:'* خانات إلزامية', nameLabel:'اسمك *', phoneLabel:'رقم واتساب *', emailLabel:'البريد الإلكتروني (اختياري)', goalLabel:'هدفك *', planLabel:'الباقة *', selectPlan1:'شهر واحد · ⁦25 000⁩ دج', selectPlan2:'شهران · ⁦45 000⁩ دج', selectPlan3:'3 أشهر · ⁦60 000⁩ دج', selectPlanDiscuss:'أريد المساعدة في الاختيار', levelLabel:'مستواك', levelBeginner:'مبتدئ', levelIntermediate:'متوسط', levelAdvanced:'متقدّم', placeLabel:'مكان التدريب', placeGym:'في القاعة', placeHome:'في المنزل', placeBoth:'كلاهما / نحدّده معًا', messageLabel:'كلمة عن هدفك (اختياري)', consent:'أوافق على إرسال هذه المعلومات إلى المدرب للتواصل معي بشأن طلبي.', prepareRequest:'جهّز طلبي', formPrivacy:'تراجع رسالتك قبل اختيار وسيلة الإرسال.', privacyLink:'الخصوصية',
    footerLine:'التقدّم يبدأ بخطوة أولى.', footerContact:'تواصل معنا', rights:'كل الحقوق محفوظة.', footerLocation:'تدريب رياضي · الجزائر', mobileNote:'تدريب + تغذية + متابعة',
    requestLabel:'خطوتك الأولى', requestTitle:'طلبك جاهز.', requestIntro:'راجع رسالتك ثم اختر طريقة إرسالها إلى المدرب.', contactUnavailable:'بيانات التواصل مع المدرب ستكون متاحة قريبًا. يمكنك نسخ طلبك للاحتفاظ به.', sendWhatsapp:'أرسل عبر واتساب', sendEmail:'أرسل بالبريد الإلكتروني', copyRequest:'انسخ طلبي', paymentLink:'اطّلع على طريقة الدفع', requestNote:'تجهيز الطلب أو نسخه لا يرسله إلى المدرب. الإرسال يتم داخل واتساب أو تطبيق البريد الإلكتروني.', diplomaTitle:'شهادات مهدي',
    privacyTitle:'معلوماتك الشخصية.', privacyBody1:'تُستخدم المعلومات لتجهيز طلب التدريب. لا يتم إرسال أي طلب تلقائيًا.', privacyBody2:'عندما تختار واتساب أو البريد، تُفتح الرسالة في الخدمة المختارة. أنت تقرّر إرسالها، وعندها تصل المعلومات إلى المدرب عبر تلك الخدمة.', privacyBody3:'هذا الموقع لا يحفظ معلومات النموذج. تجنّب إضافة وثائق أو تفاصيل طبية إلى رسالتك الأولى.', privacyBody4:'قد تُحفظ اللغة المفضّلة على جهازك لزيارتك القادمة.'
  };
  const dynamicText = {
    fr: {
      goalData: {
        muscle: ['01', 'Construire de la force.\nGagner en confiance.', 'Un entraînement progressif, une alimentation cohérente et un suivi pour développer votre masse musculaire selon votre niveau.', ['Des séances adaptées à votre niveau','Une progression structurée','Des repères alimentaires pratiques']],
        weight: ['02', 'Changer ses habitudes.\nTrouver son équilibre.', 'Un cadre pour organiser vos séances et votre alimentation, avec une progression adaptée à votre point de départ.', ['Un objectif défini avec le coach','Des habitudes alimentaires concrètes','Un rythme qui tient dans votre quotidien']],
        fitness: ['03', 'Bouger à nouveau.\nRetrouver son rythme.', 'Une reprise progressive pour construire votre condition physique et retrouver des habitudes d’entraînement régulières.', ['Un démarrage adapté à votre niveau','Du travail de force et de condition physique','Un accompagnement pour rester régulier']]
      },
      placeholders: {namePlaceholder:'Votre nom',emailPlaceholder:'vous@exemple.com',messagePlaceholder:'Votre objectif, vos disponibilités…'},
      defaultCoach:'Votre coach', close:'Fermer', menuOpen:'Ouvrir le menu', menuClose:'Fermer le menu', navigation:'Navigation principale', chooseGoal:'Choisir un objectif',
      copied:'Demande copiée. Vous pouvez la coller dans une conversation.', copyFallback:'Sélectionnez le message ci-dessus pour le copier.', nameError:'Indiquez votre nom.', phoneError:'Indiquez un numéro valide, avec 8 à 15 chiffres.',
      title:'Coaching sportif personnalisé en Algérie', description:'Entraînement, accompagnement alimentaire et suivi. Découvrez les formules de 1, 2 et 3 mois et préparez votre demande de coaching.',
      messageStart:'Bonjour, je souhaite découvrir votre coaching.', messageLabels:['Nom','WhatsApp','Email','Objectif','Formule','Niveau','Entraînement','Message'], messageEnd:'Pouvez-vous me confirmer le contenu du suivi, la disponibilité et les modalités de paiement ? Merci.', emailSubject:'Demande de coaching', healthConsent:'J’accepte d’être recontacté au sujet de cette demande.', month:'mois', currency:'DA', diplomaAlt:'Diplôme du coach', heroAlt:'Mahdi, votre coach en musculation et fitness'
    },
    ar: {
      goalData: {
        muscle: ['01','ابنِ قوّتك.\nوزِد ثقتك بنفسك.','تدريب تدريجي، تغذية منسجمة مع الهدف ومتابعة لتطوير كتلتك العضلية حسب مستواك.',['حصص تناسب مستواك','تقدّم بخطة منظمة','توجيهات غذائية عملية']],
        weight: ['02','غيّر عاداتك.\nوابحث عن التوازن.','إطار لتنظيم حصصك وتغذيتك مع تقدّم يناسب نقطة البداية.',['هدف يتم تحديده مع المدرب','عادات غذائية قابلة للتطبيق','إيقاع يناسب حياتك اليومية']],
        fitness: ['03','عُد للحركة.\nوابنِ إيقاعك.','عودة تدريجية لتحسين لياقتك وبناء عادات تدريب منتظمة.',['بداية تناسب مستواك','عمل على القوة واللياقة','مرافقة تساعدك على الاستمرارية']]
      },
      placeholders:{namePlaceholder:'اسمك الكامل',emailPlaceholder:'you@example.com',messagePlaceholder:'هدفك والوقت المتاح لك…'}, defaultCoach:'مدربك', close:'إغلاق', menuOpen:'افتح القائمة',menuClose:'أغلق القائمة', navigation:'القائمة الرئيسية',chooseGoal:'اختر هدفًا',
      copied:'تم نسخ الطلب. يمكنك لصقه في المحادثة.',copyFallback:'حدّد الرسالة أعلاه لنسخها.',nameError:'أدخل اسمك.',phoneError:'أدخل رقمًا صحيحًا من 8 إلى 15 رقمًا.',
      title:'تدريب رياضي شخصي في الجزائر',description:'تدريب، مرافقة غذائية ومتابعة. اكتشف باقات شهر، شهرين وثلاثة أشهر وجهّز طلب التدريب.',
      messageStart:'مرحبًا، أريد معرفة المزيد عن برنامج التدريب.',messageLabels:['الاسم','واتساب','البريد الإلكتروني','الهدف','الباقة','المستوى','مكان التدريب','رسالة'],messageEnd:'هل يمكن تأكيد محتوى المتابعة، إمكانية التسجيل وطريقة الدفع؟ شكرًا.',emailSubject:'طلب تدريب رياضي',healthConsent:'أوافق على التواصل معي بشأن هذا الطلب.',month:'أشهر',currency:'دج',diplomaAlt:'دبلوم المدرب',heroAlt:'مهدي، مدربك في كمال الأجسام واللياقة البدنية'
    }
  };
  const original = new Map();
  document.querySelectorAll('[data-i18n]').forEach(el => original.set(el, el.innerHTML));
  const form = document.getElementById('enquiry-form');
  const navigation = document.getElementById('navigation');
  const menu = document.querySelector('.menu-toggle');
  const requestDialog = document.getElementById('request-dialog');
  let locale = 'fr';
  let selectedGoal = 'muscle';
  let currentRequest = null;
  let requestMessage = '';
  const brand = typeof config.brand === 'string' && config.brand.trim() ? config.brand.trim() : 'MAHDI';
  document.querySelectorAll('[data-brand]').forEach(el => {el.textContent = brand;});
  document.getElementById('year').textContent = String(new Date().getFullYear());

  function safeUrl(value, localAllowed = false) {
    if (typeof value !== 'string' || !value.trim()) return null;
    try {
      const url = new URL(value, window.location.href);
      if (url.username || url.password) return null;
      if (url.protocol === 'https:' || (localAllowed && url.origin === window.location.origin)) return url.href;
    } catch (_) {}
    return null;
  }
  const whatsapp = typeof config.whatsapp === 'string' ? config.whatsapp.replace(/[\s()+.-]/g, '') : '';
  const whatsappNumber = /^[1-9]\d{7,14}$/.test(whatsapp) ? whatsapp : '';
  const email = typeof config.email === 'string' && /^[^\s@?&#]+@[^\s@?&#]+\.[^\s@?&#]+$/.test(config.email) ? config.email : '';
  const directWhatsapp = document.getElementById('direct-whatsapp');
  directWhatsapp.hidden = !whatsappNumber;
  if (whatsappNumber) directWhatsapp.href = 'https://wa.me/' + whatsappNumber;
  const directEmail = document.getElementById('direct-email');
  directEmail.hidden = !email;
  if (email) directEmail.href = 'mailto:' + email;
  const paymentUrl = safeUrl(config.paymentUrl);
  const diplomas = (Array.isArray(config.diplomas) ? config.diplomas : []).map(item => ({...item, url: safeUrl(item.image, true)})).filter(item => item.url);
  const coachPhoto = safeUrl(config.coachPhoto, true);
  if (coachPhoto) {
    const photo = document.getElementById('coach-photo');
    photo.src = coachPhoto; photo.hidden = false;
    photo.addEventListener('error', () => {photo.hidden = true;});
  }
  function renderDiplomas() {
    const gallery = document.getElementById('diploma-gallery');
    gallery.replaceChildren();
    diplomas.forEach(diploma => {
      const figure = document.createElement('figure');
      const caption = document.createElement('figcaption');
      caption.textContent = (locale === 'ar' ? diploma.titleAr : diploma.title) || dynamicText[locale].diplomaAlt;
      const image = document.createElement('img');
      image.src = diploma.url;
      image.alt = caption.textContent;
      image.loading = 'lazy';
      figure.append(caption, image);
      gallery.appendChild(figure);
    });
  }
  function updateGoal(goal) {
    if (!dynamicText[locale].goalData[goal]) return;
    selectedGoal = goal;
    const [index,title,description,checks] = dynamicText[locale].goalData[goal];
    document.getElementById('goal-index').textContent = index;
    document.getElementById('goal-title').textContent = title;
    document.getElementById('goal-description').textContent = description;
    const list = document.getElementById('goal-checks'); list.replaceChildren();
    checks.forEach(text => {const li = document.createElement('li');li.textContent = text;list.appendChild(li);});
    document.querySelectorAll('[data-goal]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.goal === goal)));
  }
  function updateMobilePlan() {
    const option = document.getElementById('form-plan').selectedOptions[0];
    document.getElementById('mobile-plan').textContent = option.textContent;
  }
  function closeMenu() {
    navigation.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label', dynamicText[locale].menuOpen);
  }
  function setLanguage(language) {
    if (!['fr','ar'].includes(language)) return;
    locale = language;
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(el => {el.innerHTML = locale === 'ar' ? (arabic[el.dataset.i18n] ?? original.get(el)) : original.get(el);});
    document.querySelectorAll('[data-placeholder]').forEach(el => {el.placeholder = dynamicText[locale].placeholders[el.dataset.placeholder] || '';});
    document.querySelectorAll('[data-language]').forEach(el => el.setAttribute('aria-pressed',String(el.dataset.language === locale)));
    document.querySelectorAll('[data-close]').forEach(el => el.setAttribute('aria-label',dynamicText[locale].close));
    document.querySelector('.goal-switch').setAttribute('aria-label',dynamicText[locale].chooseGoal);
    navigation.setAttribute('aria-label',dynamicText[locale].navigation);
    document.getElementById('coach-name').textContent = config.coachName && config.coachName !== 'Votre coach' ? config.coachName : dynamicText[locale].defaultCoach;
    document.getElementById('hero-image').alt = dynamicText[locale].heroAlt;
    renderDiplomas();
    document.getElementById('coach-photo').alt = dynamicText[locale].heroAlt;
    document.querySelectorAll('[data-certificate]').forEach((button,index) => {
      const diploma = diplomas[index];
      if (!diploma) return;
      const title = locale === 'ar' ? diploma.titleAr : diploma.title;
      button.setAttribute('aria-label',(locale === 'ar' ? 'تكبير الشهادة: ' : 'Agrandir le certificat : ') + title);
      button.querySelector('img').alt = title;
    });
    document.querySelector('.site-header .brand').setAttribute('aria-label',brand + (locale==='ar' ? '، الرئيسية' : ', accueil'));
    document.title = brand + ' — ' + dynamicText[locale].title;
    document.querySelector('meta[name="description"]').content = dynamicText[locale].description;
    document.querySelector('meta[property="og:title"]').content = document.title;
    document.querySelector('meta[property="og:description"]').content = dynamicText[locale].description;
    updateGoal(selectedGoal);updateMobilePlan();closeMenu();
    if (currentRequest) showRequest(currentRequest, false);
    try {localStorage.setItem('mahdi-language',locale);} catch (_) {}
  }
  document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click',()=>setLanguage(button.dataset.language)));
  document.querySelectorAll('[data-goal]').forEach(button => button.addEventListener('click',()=>updateGoal(button.dataset.goal)));
  document.getElementById('choose-goal').addEventListener('click', () => {
    document.getElementById('form-goal').value = selectedGoal;
    document.getElementById('contact').scrollIntoView({behavior:scrollBehavior()});
    form.elements.fullName.focus({preventScroll:true});
  });
  function scrollBehavior() {return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';}
  function selectPlan(plan) {
    if (!plans[plan] && plan !== 'discuss') throw new Error('Unknown coaching plan');
    document.getElementById('form-plan').value = String(plan);updateMobilePlan();
    document.getElementById('contact').scrollIntoView({behavior:scrollBehavior()});
    form.elements.fullName.focus({preventScroll:true});
  }
  document.querySelectorAll('[data-plan]').forEach(button => button.addEventListener('click',()=>selectPlan(button.dataset.plan)));
  document.getElementById('form-plan').addEventListener('change',updateMobilePlan);
  menu.addEventListener('click',()=>{
    const open = navigation.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open ? dynamicText[locale].menuClose : dynamicText[locale].menuOpen);
  });
  navigation.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',event=>{if(event.key === 'Escape') closeMenu();});
  function openDialog(dialog) {dialog.showModal();document.body.classList.add('modal-open');}
  document.querySelectorAll('dialog').forEach(dialog => {
    dialog.addEventListener('close',()=>{if(!document.querySelector('dialog[open]'))document.body.classList.remove('modal-open');});
    dialog.addEventListener('click',event=>{if(event.target === dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}});
  });
  document.querySelectorAll('[data-close]').forEach(button=>button.addEventListener('click',()=>button.closest('dialog').close()));
  document.getElementById('privacy-button').addEventListener('click',()=>openDialog(document.getElementById('privacy-dialog')));
  document.querySelectorAll('[data-certificate]').forEach(button => button.addEventListener('click', () => {
    if (!diplomas.length) return;
    const dialog = document.getElementById('diploma-dialog');
    openDialog(dialog);
    const figure = document.getElementById('diploma-gallery').children[Number(button.dataset.certificate)];
    if (figure) figure.scrollIntoView({block:'start', behavior:'instant'});
  }));
  function translatedOption(field, value) {
    const option = Array.from(form.elements[field].options).find(option=>option.value === value);
    return option ? option.textContent : '';
  }
  function buildMessage(data) {
    const t = dynamicText[locale];
    const values = [data.fullName,data.phone,data.email,translatedOption('goal',data.goal),translatedOption('plan',data.plan),translatedOption('level',data.level),translatedOption('place',data.place),data.message];
    return [t.messageStart,'',...values.map((value,i)=>value ? t.messageLabels[i]+': '+value : '').filter(Boolean),'',t.messageEnd,'',t.healthConsent].join('\n');
  }
  function showRequest(data, open = true) {
    currentRequest = data;requestMessage = buildMessage(data);
    document.getElementById('request-preview').textContent = requestMessage;
    document.getElementById('copy-status').textContent = '';
    const wa = document.getElementById('whatsapp-request');wa.hidden = !whatsappNumber;
    if(whatsappNumber)wa.href='https://wa.me/'+whatsappNumber+'?text='+encodeURIComponent(requestMessage);
    const emailLink = document.getElementById('email-request');emailLink.hidden = !email;
    if(email)emailLink.href='mailto:'+email+'?subject='+encodeURIComponent(dynamicText[locale].emailSubject+' — '+brand)+'&body='+encodeURIComponent(requestMessage);
    document.getElementById('contact-unavailable').hidden = Boolean(whatsappNumber || email);
    const pay = document.getElementById('payment-link');pay.hidden = !paymentUrl || data.plan === 'discuss';if(paymentUrl)pay.href=paymentUrl;
    if(open)openDialog(requestDialog);
  }
  form.addEventListener('input',event=>{if(event.target.setCustomValidity)event.target.setCustomValidity('');});
  form.addEventListener('submit',event=>{
    event.preventDefault();
    const name = form.elements.fullName.value.trim();
    const phone = form.elements.phone.value.trim();
    const phoneDigits = phone.replace(/\D/g,'');
    form.elements.fullName.setCustomValidity(name ? '' : dynamicText[locale].nameError);
    form.elements.phone.setCustomValidity(/^[+\d() .-]+$/.test(phone)&&phoneDigits.length>=8&&phoneDigits.length<=15 ? '' : dynamicText[locale].phoneError);
    if(!form.reportValidity())return;
    showRequest({fullName:name,phone,email:form.elements.email.value.trim(),goal:form.elements.goal.value,plan:form.elements.plan.value,level:form.elements.level.value,place:form.elements.place.value,message:form.elements.message.value.trim()});
  });
  document.getElementById('copy-request').addEventListener('click',async()=>{
    try {
      if(!navigator.clipboard?.writeText)throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(requestMessage);
      document.getElementById('copy-status').textContent=dynamicText[locale].copied;
    } catch (_) {
      const range=document.createRange();range.selectNodeContents(document.getElementById('request-preview'));const selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);
      document.getElementById('copy-status').textContent=dynamicText[locale].copyFallback;
    }
  });
  // Optional browser agent support follows the same visible plan-selection flow.
  const modelContext=document.modelContext;
  if(modelContext?.registerTool){
    const lifecycle=new AbortController();
    const register=tool=>{try{Promise.resolve(modelContext.registerTool(tool,{signal:lifecycle.signal})).catch(()=>{});}catch(_){}};
    register({name:'get_coaching_plans',title:'Get coaching plans',description:'Read the displayed coaching durations and total prices in Algerian dinars.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:false},execute(input){if(!input||typeof input!=='object'||Object.keys(input).length)throw new Error('Expected an empty object');return{currency:'DZD',plans:Object.values(plans),paymentCollected:false};}});
    register({name:'select_coaching_plan',title:'Select coaching plan',description:'Select an advertised coaching duration in the visible enquiry form. This stages a request and does not send it, reserve training or take payment.',inputSchema:{type:'object',properties:{months:{type:'integer',enum:[1,2,3]}},required:['months'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute(input){if(!input||typeof input!=='object'||Object.keys(input).length!==1||!Number.isInteger(input.months)||!plans[input.months])throw new Error('Expected months: 1, 2 or 3');selectPlan(String(input.months));return{selectedMonths:Number(form.elements.plan.value),totalDZD:plans[input.months].total,requestSent:false};}});
    window.addEventListener('pagehide',()=>lifecycle.abort(),{once:true});
  }
  let savedLocale='fr';try{savedLocale=localStorage.getItem('mahdi-language')||'fr';}catch(_){}
  setLanguage(['fr','ar'].includes(savedLocale)?savedLocale:'fr');
})();
