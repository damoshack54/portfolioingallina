/* Change this file to get your personal Porfolio */


// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Portfolio Damiano Ingallina",
  description:
    "Una persona appassionata che si impegna costantemente per lavorare su prodotti end-to-end che sviluppino sistemi sociali e tecnici sostenibili e scalabili per creare impatto.",
  og: {
    title: "Portfolio Damiano Ingallina",
    type: "website",
    url: "https://portfolioingallina.netlify.app/",
  },
};

//Home Page
const greeting = {
  title: "Damiano Ingallina",
  logo_name: "DamianoIngallina",
  //nickname: "Damoshack",
  subTitle:
    "Una persona appassionata che si impegna costantemente per lavorare su prodotti end-to-end che sviluppino sistemi sociali e tecnici sostenibili e scalabili per creare impatto.",
  resumeLink:
    "https://drive.google.com/file/d/1KWNNDFsilP17i_3Db6wODpzUUMVU7Qo6/view?usp=sharing",
};

const socialMediaLinks = [

  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/damiano-i-756917193/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:ingallina2000@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/DamianoI5",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/damiano.ingallina",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/_damiano2000_/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Chi Sono?",
      fileName: "DataScienceImg",
      skills: [
        "Specialista in Informatica e Telecomunicazioni con oltre 6 anni di esperienza nello sviluppo web,progettazione digitale e gestione operativa di team multidisciplinari.", 
        "Unisco competenze tecniche avanzate a una solida visione manageriale, con focus su ottimizzazione dei costi, incremento della redditività e miglioramento dell’esperienza cliente.", 
        "Mi contraddistinguono una leadership naturale, un forte orientamento ai risultati, eccellenti capacità di negoziazione e una spiccata adattabilità ai contesti in evoluzione.",
        "Motivato da ambienti dinamici e sfidanti, sono determinato a contribuire in modo concreto alla crescita e al successo di organizzazioni ambiziose, attraverso soluzioni digitali efficaci e strategie operative vincenti.",
      ],
      softwareSkills: [
        {
          skillName: "Programmazione",
          fontAwesomeClassname: "streamline-freehand:file-code-html",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Analizza Dati",
          fontAwesomeClassname: "streamline-freehand:app-window-graph",
          style: {
            backgroundColor: "trasparent",
            
          },
        },
        {
          skillName: "Lavorazione Dati",
          fontAwesomeClassname: "streamline-freehand:app-window-search-text",
          style: {
            backgroundColor: "transparent",
           
          },
        },
          {
          skillName: "Soddisfazione Cliente",
          fontAwesomeClassname: "streamline-freehand:business-deal-handshake",
          style: {
            backgroundColor: "transparent",
          
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡  Progettazione e sviluppo dell'interfaccia utente per siti web responsive.",
        "⚡  Realizzazione di applicazioni mobili multipiattaforma e native, in completa autonomia.",
        "⚡  Sviluppo della logica e delle funzionalità lato server per applicazioni web e mobile.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Progettazione di interfacce utente intuitive e coinvolgenti per applicazioni web e mobile.",
        "⚡ Ideazione e personalizzazione di loghi, con possibilità di sviluppo grafico da zero.",
        "⚡ Definizione e ottimizzazione dei flussi funzionali dell’applicazione per migliorare l’esperienza utente.",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

//Education Page
const competitiveSites = {
  competitiveSites: [
    

    {
      siteName: "Cisco academy",
      iconifyClassname: "simple-icons:cisco",
      style: {
        color: "#F79F1B",
      },
      //profileLink: "",
    },
    {
      siteName: "Certificazioni",
      iconifyClassname: "streamline-kameleon-color:certificate-2",
      style: {
        color: "#F79F1B",
      },
      //profileLink: "",
    },
    {
      siteName: "Educazione",
      iconifyClassname: "streamline-emojis:man-student-2",
      style: {
        color: "#F79F1B",
      },
     //profileLink: "",
    },
    {
      siteName: "Stelle certificate 5+",
      iconifyClassname: "arcticons:5star-students",
      style: {
        color: "#F79F1B",
      },
      //profileLink: "",
    },
  ],
}; 

const degrees = {
  degrees: [
    {
      title: "I.I.S Ramacca Palagonia Vincenzo Scuderi",
      subtitle: "Istituto Tecnico Tecnologico Informatica e Telecomunicazione",
      logo_path: "iisramaccapalagonia.png",
      alt_name: "iisramaccapalagonia",
      duration: "2014 - 2019",
      descriptions: [
        "⚡ Ho studiato materie di base dell'ingegneria del software come DS, Algoritmi, DBMS, Sistemi Operativi, CA, Robotica unita a Software di progettazione sperimentale",
        "⚡ Oltre a questo, ho seguito corsi su Deep Learning, Data Science, Cloud Computing e Sviluppo Full Stack, compresi i corsi di CISCO CCNNA ",
        "⚡ Ho terminato i miei studi nel 2019, diplomandomi con la votazione di 92/100",
      ],
      website_link: "https://www.iisramacca-palagonia.edu.it/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "CISCO ACADEMY SAFER INTERNET AMBASSADOR",
      subtitle: "-Damiano Ingallina",
      logo_path: "ciscoacademy.png",
      //certificate_link: "",
      alt_name: "Cisco Academy",
    },
    {
      title: "CISCO_CCNA R&S Introduction to Networks",
      subtitle: "- Damiano Ingallina",
      logo_path: "ciscoacademy.png",
      //certificate_link: "",
      alt_name: "Cisco Academy",
    },
    {
      title: "ECDL Full Standard",
      subtitle: "- Damiano Ingallina",
      logo_path: "ecdl.gif",
      //certificate_link:"",
      alt_name: "ECDL",
    },
  ],
};

// Experience Page
const experience = {
  title: "Esperienze",
  subtitle: "Lavoro, Tirocinio e Volontariato",
  description:
    "Professionista poliedrico con esperienza trasversale in sviluppo software, design UI/UX e architetture di sistemi basati su Machine Learning e Deep Learning. Ho supportato realtà aziendali consolidate, specializzandomi principalmente nello sviluppo di soluzioni di Intelligenza Artificiale. Appassionato di condivisione del sapere, partecipo attivamente all’organizzazione di eventi tech e rappresento diverse community open source come ambassador e promotore.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Esperienza Lavorativa",
      work: true,
      experiences: [
        {
          title: "Hotel Manager",
          company: "Hotel City Hall Catania",
          company_url: "https://www.bebcityhallcatania.it/",
          logo_path: "cityhall.png",
          duration: "Giu 2023 -Attuale",
          location: "Catania, CT, 95124",
          description:
            "Coordinamento operativo quotidiano dell’hotel con focus su customer experience, ottenendo un aumento del soddisfacimento clienti del 25% (basato su recensioni e survey interne). Riduzione dei costi operativi del 18% attraverso l’ottimizzazione delle forniture, dei turni e della gestione delle risorse. Leadership solida su un team di 5+ unità, con focus su empowerment e formazione continua: +30% in performance operative misurate. Implementazione di campagne di marketing digitale e partnership locali, con un incremento delle prenotazioni dirette del 40% in 6 mesi. Rinegoziazione dei contratti con fornitori strategici, migliorando i margini operativi del 15% e mantenendo elevati standard qualitativi.",
          color: "#000000",
        },
        {
          title: "Addetto Vendite",
          company: "Euronics La Via Lattea S.P.A",
          company_url: "https://www.lavialattea.it/",
          logo_path: "euronics.png",
          duration: "Dic 2022 - Mag 2023",
          location: "Catania, CT, 95124",
          description:
            "Responsabile delle vendite nel reparto elettronica, con un incremento medio del 15% sul target mensile grazie a tecniche di vendita consulenziale. Elevata capacità di relazione e ascolto attivo, con un tasso di fidelizzazione cliente stimato al 90% nel ciclo di vendita. Gestione autonoma delle operazioni di cassa, apertura/chiusura punto vendita e controllo inventario, riducendo gli errori di stock del 20%. Approccio proattivo nella promozione di prodotti e offerte, contribuendo all’ottimizzazione del sell-out su categorie strategiche. Collaborazione attiva con il team per il raggiungimento degli obiettivi di reparto e il mantenimento degli standard espositivi.",
          color: "#0879bf",
        },
        {
          title: "Responsabile siti web e management",
          company: "Motofficina Ingallina 54",
          company_url: "https://www.motofficinaingallina54.com/",
          logo_path: "ingallina.png",
          duration: "Mar 2018 - Lug 2020",
          location: "Catania, CT, 95124",
          description:
            "Gestione completa del sito web aziendale, con focus su usabilità, prestazioni e SEO: incremento del traffico organico del 45% in 12 mesi. Ottimizzazione contenuti e struttura del sito, migliorando il posizionamento su Google per parole chiave strategiche locali e di settore. Coordinamento di un piccolo team cross-funzionale (sviluppo, grafica, copy) per il raggiungimento degli obiettivi digitali e commerciali. Analisi periodica di metriche web (Google Analytics, Search Console) e implementazione di miglioramenti basati su dati reali. Costruzione e mantenimento di relazioni efficaci con clienti, stakeholder e fornitori digitali, garantendo soddisfazione e continuità operativa.",
          color: "#9b1578",
        },

        {
          title: "Autodidatta nel Web e nella Grafica ",
          company: "",
          company_url: "",
          logo_path: "damiauto.png",
          duration: "Mar 2018 - In Continuo aggiornamento",
          location: "Catania, CT, 95124",
          description:
            "Durante questo periodo, ho approfondito in modo autonomo tecnologie quali HTML, CSS, PHP, e WordPress, portando avanti progetti web completi: sviluppo front‑end, backend leggero, ottimizzazione SEO e interfacce utente intuitive. Ho curato personalmente la progettazione grafica (utilizzando Adobe Photoshop, Illustrator, Lightroom), realizzando layout e asset visivi per siti aziendali.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Esperienza Tirocinio (Attualmente Nessuna)",
      experiences: [
      ],
    },
    {
      title: "Esperienza Volontariato (Attualmente Nessuna)",
      experiences: [
       
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Progetti & Lavori",
  description:
    "Sono un professionista nel settore informatico con una forte passione per il web design, lo sviluppo digitale e l'organizzazione operativa. Mi occupo di progettazione, creazione e gestione di siti web, con un approccio orientato all’efficienza, alla chiarezza e all’usabilità. Negli anni ho sviluppato competenze trasversali che spaziano dall’ambito tecnico a quello gestionale, unendo precisione, autonomia e visione strategica. Lavoro con dedizione su ogni progetto, curando ogni fase: dall’analisi iniziale alle soluzioni su misura per il cliente. Mi aggiorno costantemente sulle tendenze digitali per offrire sempre soluzioni moderne, funzionali e orientate ai risultati.",
  avatar_image_path: "projects_image.svg",
  avatar_image_path: "people.GIF",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contatti",
    profile_image_path: "damianoingallina.png",
    description:
      "Sono disponibile su quasi tutti i social media. Puoi mandarmi un messaggio, ti risponderò entro 24 ore.",
  },
   blogSection: {
  },
  addressSection: {
    title: "Indirizzo",
    subtitle: "Via Francesco Battiato 2A, CT, Sicilia 95124",
    locality: "Italia",
    country: "ITA",
    region: "Sicilia",
    postalCode: "95124",
    streetAddress: "Centro",
    avatar_image_path: "address_image.svg",
    //location_map_link: "https://maps.app.goo.gl/xfehLwWJzjoKARxs8",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
