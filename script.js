const translations = {
  it: {
    navHome: "Home",
    navPortfolio: "Portfolio",
    navAbout: "Chi Sono",
    navContact: "Contatti",

    eyebrow: "Modella • Fashion • Beauty",
    heroTitle: "Claudia Petrilli",
    heroLead: "Modella internazionale che unisce eleganza, sicurezza e raffinatezza editoriale con un'estetica beauty moderna.",
    ctaPortfolio: "Vedi Portfolio",
    ctaContact: "Prenota Sessione",
    statYears: "Anni",
    statHeight: "Altezza",
    statShoeSize: "Numero Scarpe",

    featuredEyebrow: "Lavori Selezionati",
    featuredTitle: "Portfolio editoriale e beauty",
    cardCategory1: "Editoriale",
    cardTitle1: "Eleganza raffinata",
    cardCategory2: "Beauty",
    cardTitle2: "Glamour morbido",
    cardCategory3: "Campagna",
    cardTitle3: "Espressione forte",

    quoteText: ""L'eleganza non è solo nel look, ma nella presenza."",

    portfolioEyebrow: "Portfolio",
    portfolioTitle: "Lavori selezionati",
    portfolioTag1: "Fashion",
    portfolioTitle1: "Seta e luce",
    portfolioTag2: "Beauty",
    portfolioTitle2: "Luminosa",
    portfolioTag3: "Editoriale",
    portfolioTitle3: "Dramma silenzioso",
    portfolioTag4: "Runway",
    portfolioTitle4: "Movimento",
    portfolioTag5: "Luxury",
    portfolioTitle5: "Mood di velluto",
    portfolioTag6: "Studio",
    portfolioTitle6: "Inquadratura senza tempo",

    aboutEyebrow: "Chi sono",
    aboutTitle: "Un volto moderno con eleganza senza tempo",
    aboutText1: "Claudia Petrilli è una modella nota per il suo portamento elegante, lo sguardo espressivo e la capacità di adattarsi con naturalezza a campagne editoriali, luxury e beauty.",
    aboutText2: "Il suo lavoro unisce raffinatezza e autenticità, creando immagini curate, personali e potenti.",
    infoLabel1: "Base",
    infoValue1: "Italia",
    infoLabel2: "Specialità",
    infoValue2: "Fashion / Beauty",
    infoLabel3: "Esperienza",
    infoValue3: "29 anni",

    contactEyebrow: "Contatti",
    contactTitle: "Per booking e collaborazioni",
    contactText: "Disponibile per editoriali, campagne, beauty e collaborazioni con brand in tutto il mondo.",
    contactEmailLabel: "Email",
    contactInstagramLabel: "Instagram",
    contactLocationLabel: "Location",
    contactLocation: "Roma, Italia",
    formName: "Nome",
    formEmail: "Email",
    formMessage: "Messaggio",
    formSubmit: "Invia Richiesta",
    formNamePlaceholder: "Inserisci il tuo nome",
    formEmailPlaceholder: "Inserisci la tua email",
    formMessagePlaceholder: "Scrivi il tuo messaggio",

    footerPortfolio: "Portfolio",
    footerContact: "Contatti"
  },

  en: {
    navHome: "Home",
    navPortfolio: "Portfolio",
    navAbout: "About",
    navContact: "Contact",

    eyebrow: "Model • Fashion • Beauty",
    heroTitle: "Claudia Petrilli",
    heroLead: "International model blending elegance, confidence, and editorial sophistication with a refined modern beauty aesthetic.",
    ctaPortfolio: "View Portfolio",
    ctaContact: "Book a Session",
    statYears: "Age",
    statHeight: "Height",
    statShoeSize: "Shoe Size",

    featuredEyebrow: "Selected Work",
    featuredTitle: "Editorial & beauty portfolio",
    cardCategory1: "Editorial",
    cardTitle1: "Refined elegance",
    cardCategory2: "Beauty",
    cardTitle2: "Soft glamour",
    cardCategory3: "Campaign",
    cardTitle3: "Bold expression",

    quoteText: ""Elegance is not only in the look — it is in the presence."",

    portfolioEyebrow: "Portfolio",
    portfolioTitle: "Selected work",
    portfolioTag1: "Fashion",
    portfolioTitle1: "Silk & light",
    portfolioTag2: "Beauty",
    portfolioTitle2: "Luminous",
    portfolioTag3: "Editorial",
    portfolioTitle3: "Quiet drama",
    portfolioTag4: "Runway",
    portfolioTitle4: "Movement",
    portfolioTag5: "Luxury",
    portfolioTitle5: "Velvet mood",
    portfolioTag6: "Studio",
    portfolioTitle6: "Timeless frame",

    aboutEyebrow: "About",
    aboutTitle: "A modern face with timeless elegance",
    aboutText1: "Claudia Petrilli is a model known for her elegant posture, expressive gaze, and ability to adapt effortlessly to editorial, luxury, and beauty campaigns.",
    aboutText2: "Her work blends sophistication with authenticity, creating imagery that feels polished, personal, and powerful.",
    infoLabel1: "Based in",
    infoValue1: "Italy",
    infoLabel2: "Speciality",
    infoValue2: "Fashion / Beauty",
    infoLabel3: "Age",
    infoValue3: "29 years",

    contactEyebrow: "Contact",
    contactTitle: "For bookings and collaborations",
    contactText: "Available for editorials, campaigns, beauty work, and brand collaborations worldwide.",
    contactEmailLabel: "Email",
    contactInstagramLabel: "Instagram",
    contactLocationLabel: "Location",
    contactLocation: "Rome, Italy",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    formSubmit: "Send Request",
    formNamePlaceholder: "Enter your name",
    formEmailPlaceholder: "Enter your email",
    formMessagePlaceholder: "Write your message",

    footerPortfolio: "Portfolio",
    footerContact: "Contact"
  }
};

const savedLang = localStorage.getItem("preferredLanguage") || "it";
let currentLang = savedLang;

function applyTranslations(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-placeholder");
    if (translations[lang][key]) {
      el.setAttribute("placeholder", translations[lang][key]);
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  localStorage.setItem("preferredLanguage", lang);
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    applyTranslations(btn.dataset.lang);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  applyTranslations(currentLang);
});

document.querySelector(".contact-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const submitButton = document.querySelector(".contact-form .btn");
  const originalText = submitButton.textContent;

  submitButton.textContent = currentLang === "it" ? "Richiesta Inviata" : "Request Sent";
  submitButton.disabled = true;

  setTimeout(() => {
    submitButton.textContent = originalText;
    submitButton.disabled = false;
    document.querySelector(".contact-form").reset();
  }, 1800);
});