import { useTheme } from '@/contexts/ThemeContext'

const nl = {
  nav: {
    links: ['Collectie', 'Projecten', 'Expertise', 'Divisies', 'Contact'],
    cta: 'Offerte aanvragen',
    mobileFooter: 'Est. 1987 — Nederland',
  },
  hero: {
    badge: 'S+B — 100 Jaar Marktleider',
    overline: 'Laboratorium · Onderwijs · Industrie',
    heading: ['Gebouwd voor', 'laboratoria, onderwijs', 'en industrie.'],
    subtitle: 'Custom engineered environments designed for performance, safety and longevity.',
    cta1: 'Bekijk collectie',
    cta2: 'Projecten',
    scroll: 'Scroll',
  },
  collection: {
    overline: 'Collectie',
    heading: ['Acht categorieën,', 'één visie op kwaliteit.'],
    subheading: 'Van laboratoriumwerkbank tot cleanroom — elk product engineered voor precisie en duurzaamheid.',
    viewLabel: 'Bekijk',
    categories: [
      { name: 'Labomeubilair', description: 'Maatwerk werkbanken voor elk laboratoriumdiscipline' },
      { name: 'Practicumlokalen', description: 'Turn-key inrichting van onderwijspracticumlokalen' },
      { name: 'Cleanrooms', description: 'ISO-gecertificeerde cleanroomconstructie' },
      { name: 'Industriële interieurs', description: 'Robuuste industriële werkplekoplossingen' },
      { name: 'Ventilatiesystemen', description: 'Precisie luchttechniek & extractiesystemen' },
      { name: 'Opslagsystemen', description: 'Modulaire opslag & chemicaliënkasten' },
      { name: 'Ergonomische werkplekken', description: 'Hoogteversttelbare, veiligheidsgerichte werkstations' },
      { name: 'Technische werkbanken', description: 'Maatwerk technisch meubilair & werkbanksystemen' },
    ],
  },
  products: {
    overline: 'Producten',
    heading: ['Vakmanschap in', 'elk detail.'],
    subheading: 'Elke S+B oplossing wordt gefabriceerd in onze eigen fabriek in Nederland — van tekening tot oplevering.',
    detailsLabel: 'Meer details',
    items: [
      {
        title: 'Laboratoriumwerkbanken',
        subtitle: 'Custom lab bench system met geïntegreerde services',
        description: 'Onze laboratoriumwerkbanken worden volledig op maat gefabriceerd in onze Nederlandse fabriek. Met geïntegreerde gas-, water- en elektriciteitsaansluitingen, verzonken spoelbakken en chemisch-resistente oppervlakken voor elke toepassing.',
      },
      {
        title: 'Afzuigkasten & Extractie',
        subtitle: 'Precisie extractiemeubilair voor gevaarlijke stoffen',
        description: 'Laboratoriumafzuigkasten en lokale extractiesystemen, ontworpen voor maximale veiligheid en minimaal energieverbruik. Beschikbaar in VAV-uitvoering met automatische snelheidsregeling voor variabele belasting. Volledig conform EN 14175.',
      },
      {
        title: 'Opslagsystemen',
        subtitle: 'Hoogwaardige opslagwanden voor laboratoriumbenodigdheden',
        description: 'Modulaire opslagkasten en hoge opslagwanden voor laboratoria en technische omgevingen. Voorzien van schuifrail en bijpassende ladder voor veilige toegang tot hogere planken. Gecertificeerd voor opslag van gevaarlijke stoffen conform ADR/REACH.',
      },
      {
        title: 'Maatwerk Werkstations',
        subtitle: 'Precision-engineered werkplekken voor research & industrie',
        description: 'Onze maatwerk werkstations combineren ergonomie, duurzaamheid en een strakke esthetiek. Volledig op maat gefabriceerd — van ronde eilandwerkbanken tot lange wandopstellingen. Ontworpen voor omgevingen waar precisie en uitstraling samenkomen.',
      },
    ],
  },
  expertise: {
    overline: 'Vakkennis',
    heading: ['Expertise &', 'Vakkennis.'],
    subheading: 'Bijna vier decennia ingenieurservaring vertaald in zes kerngebieden die de basis vormen van elk S+B-project. Van materiaalkennis tot luchttechniek — wij beheersen het complete spectrum.',
    pillars: [
      { label: 'Veiligheid & Normen', description: 'Volledig conform NEN, ARBO en VPR-regelgeving. Elk ontwerp doorloopt een formeel veiligheidsauditproces.' },
      { label: 'Ergonomie', description: 'Hoogteverstelling, houding-geoptimaliseerde ontwerpen en antropometrische analyse voor elke werkplek.' },
      { label: 'Luchttechniek', description: 'Nauwkeurige luchtstromingsberekeningen, extractiesystemen en cleanroomklasse-engineering.' },
      { label: 'Duurzaamheid', description: 'Materialen met lange levenscyclus, Europese fabricage en circulair ontwerp als standaard.' },
      { label: 'Materiaalkennis', description: 'HPL, roestvrij staal, Corian, epoxy en gespecialiseerde oppervlakken voor iedere toepassing.' },
      { label: 'Maatwerk Engineering', description: 'Van concept tot productie: CAD-ontwerp, prototyping en fabriekslijn in eigen beheer.' },
    ],
  },
  businessUnits: {
    overline: 'Divisies',
    heading: ['Onze', 'Divisies.'],
    subheading: 'Vijf gespecialiseerde divisies onder één groep. Elk merk is marktleider in zijn segment.',
    discoverLabel: 'Ontdek',
    units: [
      { tagline: 'Laboratoriuminterieurs voor onderzoek en industrie', description: 'Van universitaire onderzoekslaboratoria tot industriële QC-labs. S+B Lab ontwerpt en produceert complete laboratoriumomgevingen met bijbehorende installaties, extractie en veiligheidsvoorzieningen.' },
      { tagline: 'Practicumlokalen en onderwijsomgevingen', description: 'Praktijklokalen voor MBO, HBO en universiteiten. S+B Scholen realiseert flexibele, veilige leeromgevingen die voldoen aan de strengste onderwijsnormen en decennialang meegaan.' },
      { tagline: 'Industriële werkplekken en maatwerk productie', description: 'Zware industriële werkstations, assemblagelijnen en testomgevingen. Solid Factory levert robuuste oplossingen voor de maakindustrie, met focus op ergonomie, veiligheid en efficiëntie.' },
      { tagline: 'Luchttechnische oplossingen en ventilatie', description: 'Specialistische ventilatie- en extractiesystemen voor laboratoriumomgevingen. Labair ontwerpt en installeert luchttechnische systemen conform de hoogste veiligheidsnormen.' },
      { tagline: 'De groep achter de merken', description: 'De moederorganisatie die strategie, engineering, fabricage en installatie integreert onder één dak. Opgericht in 1987, actief in 12 landen, met een eigen productiefaciliteit in Nederland.' },
    ],
  },
  projects: {
    overline: 'Projecten',
    heading: ['Gerealiseerde', 'omgevingen.'],
    subheading: 'Elk project is een uniek vraagstuk. Wij engineeren maatwerkoplossingen die decennialang meegaan.',
    projectLinkLabel: 'Meer over dit project',
    items: [
      {
        industry: 'Food & Research',
        description: 'Volledig geïntegreerd onderzoekslaboratorium voor FrieslandCampina in Wageningen. Maatwerk eilandwerkbanken met groene accenten, glazen laboratoriumwanden en geïntegreerde afzuigkasten. Ontworpen voor intensief dagelijks gebruik in een professionele R&D-omgeving.',
        stats: [{ label: 'laboratoria' }, { label: 'gecertificeerd' }, { label: 'omgeving' }],
      },
      {
        industry: 'Academisch',
        description: 'Grootschalig universitair laboratorium voor de Universiteit Twente, uitgerust met een complete wand van professionele afzuigkasten. De blauwe afzuigkasten zijn voorzien van VAV-regeling voor variabel luchtvolumetransport en zijn volledig conform EN 14175. Hoogwaardige opslagsystemen met ladderRail voor de grote opslagwanden.',
        stats: [{ label: '14175 conform' }, { label: 'afzuigregeling' }, { label: 'onderzoek' }],
      },
      {
        industry: 'Food & Nutrition',
        description: 'Iconisch open laboratoriumconcept voor Danone Utrecht. De rondingswerkbanken met geïntegreerde servicekolommen zijn volledig op maat ontworpen. De gebogen witte HPL-bladen met blauwe servicekokers creëren een luchtig, ergonomisch werkconcept over een groot vloeroppervlak.',
        stats: [{ label: 'm² laboratorium' }, { label: 'rondingsontwerp' }, { label: 'conform' }],
      },
      {
        industry: 'Medisch / Bloedonderzoek',
        description: 'Medisch laboratoriuminterieur voor Sanquin in Amsterdam. Stalen draagstructuur met HPL-bladen, afzuigarmen en gespecialiseerde medische kasten. De oranje accenten op de afzuigkast geven het lab een herkenbare visuele identiteit. Volledig ARBO- en ISO-conform voor bloedonderzoek en medische diagnostiek.',
        stats: [{ label: 'gecertificeerd' }, { label: 'conform' }, { label: 'diagnostiek' }],
      },
    ],
  },
  trust: {
    overline: 'Autoriteit',
    heading: ['Bewezen in', 'de praktijk.'],
    stats: [
      { label: 'Jaar marktleider', description: 'Marktleider in laboratoriuminterieurs' },
      { label: 'Projecten gerealiseerd', description: 'Verspreid over Europa' },
      { label: 'Landen geleverd', description: 'Internationaal netwerk' },
      { label: 'Klanttevredenheid', description: 'Gemeten over 5 jaar' },
    ],
    manufacturing: {
      heading: 'Europese Fabricage',
      description: 'Alle producten worden geproduceerd in onze eigen fabriek in Nederland. Volledige controle over kwaliteit, levertijden en maatvoering — van tekentafel tot installatie.',
      badge: '🇳🇱 Made in Netherlands',
    },
    certifications: {
      heading: 'Certificeringen',
      description: 'S+B Groep is gecertificeerd volgens de hoogste internationale normen.',
    },
    process: {
      heading: 'Ons Proces',
      steps: [
        { label: 'Ontwerp', desc: 'Intake, analyse en conceptontwerp' },
        { label: 'Engineering', desc: 'Technische uitwerking en CAD' },
        { label: 'Productie', desc: 'Fabricage in eigen fabriek NL' },
        { label: 'Installatie', desc: 'Montage en oplevering op locatie' },
      ],
    },
  },
  footer: {
    tagline: '100 jaar marktleider in laboratoriuminterieurs, practicumlokalen en industriële werkplekken op maat. Gevestigd in Capelle aan den IJssel, actief in heel Europa.',
    companyHeading: 'S+B Groep',
    divisionsHeading: 'Divisies',
    servicesHeading: 'Diensten',
    contactHeading: 'Contact',
    followHeading: 'Volg ons',
    cta: 'Offerte aanvragen',
    privacyLabel: 'Privacy',
    sitemapLabel: 'Sitemap',
    copyright: 'Alle rechten voorbehouden.',
    services: ['Labomeubilair', 'Practicumlokalen', 'Cleanrooms', 'Industriële interieurs', 'Ventilatiesystemen', 'Technische werkbanken'],
  },
}

type T = typeof nl

const en: T = {
  nav: {
    links: ['Collection', 'Projects', 'Expertise', 'Divisions', 'Contact'],
    cta: 'Request quote',
    mobileFooter: 'Est. 1987 — Netherlands',
  },
  hero: {
    badge: 'S+B — 100 Years Market Leader',
    overline: 'Laboratory · Education · Industry',
    heading: ['Built for', 'laboratories, education', 'and industry.'],
    subtitle: 'Custom engineered environments designed for performance, safety and longevity.',
    cta1: 'View collection',
    cta2: 'Projects',
    scroll: 'Scroll',
  },
  collection: {
    overline: 'Collection',
    heading: ['Eight categories,', 'one vision of quality.'],
    subheading: 'From laboratory workbench to cleanroom — every product engineered for precision and durability.',
    viewLabel: 'View',
    categories: [
      { name: 'Lab Furniture', description: 'Custom workbenches for every laboratory discipline' },
      { name: 'Practice Rooms', description: 'Turn-key fit-out of educational practice rooms' },
      { name: 'Cleanrooms', description: 'ISO-certified cleanroom construction' },
      { name: 'Industrial Interiors', description: 'Robust industrial workplace solutions' },
      { name: 'Ventilation Systems', description: 'Precision air technology & extraction systems' },
      { name: 'Storage Systems', description: 'Modular storage & chemical cabinets' },
      { name: 'Ergonomic Workplaces', description: 'Height-adjustable, safety-focused workstations' },
      { name: 'Technical Workbenches', description: 'Custom technical furniture & workbench systems' },
    ],
  },
  products: {
    overline: 'Products',
    heading: ['Craftsmanship in', 'every detail.'],
    subheading: 'Every S+B solution is manufactured in our own factory in the Netherlands — from drawing to delivery.',
    detailsLabel: 'More details',
    items: [
      {
        title: 'Laboratory Workbenches',
        subtitle: 'Custom lab bench system with integrated services',
        description: 'Our laboratory workbenches are fully custom-manufactured in our Dutch factory. With integrated gas, water and electricity connections, recessed sinks and chemically resistant surfaces for every application.',
      },
      {
        title: 'Fume Hoods & Extraction',
        subtitle: 'Precision extraction furniture for hazardous substances',
        description: 'Laboratory fume hoods and local extraction systems, designed for maximum safety and minimal energy consumption. Available in VAV configuration with automatic speed control for variable loads. Fully compliant with EN 14175.',
      },
      {
        title: 'Storage Systems',
        subtitle: 'High-quality storage walls for laboratory supplies',
        description: 'Modular storage cabinets and tall storage walls for laboratories and technical environments. Fitted with sliding rail and matching ladder for safe access to higher shelves. Certified for storage of hazardous substances in accordance with ADR/REACH.',
      },
      {
        title: 'Custom Workstations',
        subtitle: 'Precision-engineered workplaces for research & industry',
        description: 'Our custom workstations combine ergonomics, durability and a clean aesthetic. Fully custom-manufactured — from circular island workbenches to long wall installations. Designed for environments where precision and appearance come together.',
      },
    ],
  },
  expertise: {
    overline: 'Knowledge',
    heading: ['Expertise &', 'Knowledge.'],
    subheading: 'Nearly four decades of engineering experience translated into six core areas that form the foundation of every S+B project. From material knowledge to air technology — we master the complete spectrum.',
    pillars: [
      { label: 'Safety & Standards', description: 'Fully compliant with NEN, ARBO and VPR regulations. Every design undergoes a formal safety audit process.' },
      { label: 'Ergonomics', description: 'Height adjustment, posture-optimised designs and anthropometric analysis for every workplace.' },
      { label: 'Air Technology', description: 'Precise airflow calculations, extraction systems and cleanroom class engineering.' },
      { label: 'Sustainability', description: 'Long lifecycle materials, European manufacturing and circular design as standard.' },
      { label: 'Material Knowledge', description: 'HPL, stainless steel, Corian, epoxy and specialised surfaces for every application.' },
      { label: 'Custom Engineering', description: 'From concept to production: CAD design, prototyping and factory line in-house.' },
    ],
  },
  businessUnits: {
    overline: 'Divisions',
    heading: ['Our', 'Divisions.'],
    subheading: 'Five specialised divisions under one group. Every brand is market leader in its segment.',
    discoverLabel: 'Discover',
    units: [
      { tagline: 'Laboratory interiors for research and industry', description: 'From university research laboratories to industrial QC labs. S+B Lab designs and produces complete laboratory environments with associated installations, extraction and safety provisions.' },
      { tagline: 'Practice rooms and educational environments', description: 'Practice rooms for MBO, HBO and universities. S+B Scholen creates flexible, safe learning environments that meet the strictest educational standards and last for decades.' },
      { tagline: 'Industrial workplaces and custom production', description: 'Heavy industrial workstations, assembly lines and test environments. Solid Factory delivers robust solutions for the manufacturing industry, with a focus on ergonomics, safety and efficiency.' },
      { tagline: 'Air technology solutions and ventilation', description: 'Specialist ventilation and extraction systems for laboratory environments. Labair designs and installs air technology systems in accordance with the highest safety standards.' },
      { tagline: 'The group behind the brands', description: 'The parent organisation that integrates strategy, engineering, manufacturing and installation under one roof. Founded in 1987, active in 12 countries, with its own production facility in the Netherlands.' },
    ],
  },
  projects: {
    overline: 'Projects',
    heading: ['Realised', 'environments.'],
    subheading: 'Every project is a unique challenge. We engineer custom solutions that last for decades.',
    projectLinkLabel: 'More about this project',
    items: [
      {
        industry: 'Food & Research',
        description: 'Fully integrated research laboratory for FrieslandCampina in Wageningen. Custom island workbenches with green accents, glass laboratory walls and integrated fume hoods. Designed for intensive daily use in a professional R&D environment.',
        stats: [{ label: 'laboratories' }, { label: 'certified' }, { label: 'environment' }],
      },
      {
        industry: 'Academic',
        description: 'Large-scale university laboratory for the University of Twente, equipped with a complete wall of professional fume hoods. The blue fume hoods feature VAV control for variable air volume transport and are fully compliant with EN 14175. High-quality storage systems with ladder rail for the large storage walls.',
        stats: [{ label: '14175 compliant' }, { label: 'extraction control' }, { label: 'research' }],
      },
      {
        industry: 'Food & Nutrition',
        description: 'Iconic open laboratory concept for Danone Utrecht. The curved workbenches with integrated service columns are fully custom-designed. The curved white HPL tops with blue service ducts create an airy, ergonomic work concept across a large floor area.',
        stats: [{ label: 'm² laboratory' }, { label: 'curved design' }, { label: 'compliant' }],
      },
      {
        industry: 'Medical / Blood Research',
        description: 'Medical laboratory interior for Sanquin in Amsterdam. Steel structure with HPL tops, extraction arms and specialised medical cabinets. The orange accents on the fume hood give the lab a recognisable visual identity. Fully ARBO and ISO compliant for blood research and medical diagnostics.',
        stats: [{ label: 'certified' }, { label: 'compliant' }, { label: 'diagnostics' }],
      },
    ],
  },
  trust: {
    overline: 'Authority',
    heading: ['Proven in', 'practice.'],
    stats: [
      { label: 'Years market leader', description: 'Market leader in laboratory interiors' },
      { label: 'Projects realised', description: 'Across Europe' },
      { label: 'Countries served', description: 'International network' },
      { label: 'Client satisfaction', description: 'Measured over 5 years' },
    ],
    manufacturing: {
      heading: 'European Manufacturing',
      description: 'All products are manufactured in our own factory in the Netherlands. Full control over quality, delivery times and dimensions — from drawing board to installation.',
      badge: '🇳🇱 Made in Netherlands',
    },
    certifications: {
      heading: 'Certifications',
      description: 'S+B Group is certified to the highest international standards.',
    },
    process: {
      heading: 'Our Process',
      steps: [
        { label: 'Design', desc: 'Intake, analysis and concept design' },
        { label: 'Engineering', desc: 'Technical elaboration and CAD' },
        { label: 'Production', desc: 'Manufacturing in own factory NL' },
        { label: 'Installation', desc: 'Assembly and delivery on site' },
      ],
    },
  },
  footer: {
    tagline: '100 years market leader in laboratory interiors, practice rooms and industrial workplaces tailored to your needs. Based in Capelle aan den IJssel, active throughout Europe.',
    companyHeading: 'S+B Group',
    divisionsHeading: 'Divisions',
    servicesHeading: 'Services',
    contactHeading: 'Contact',
    followHeading: 'Follow us',
    cta: 'Request quote',
    privacyLabel: 'Privacy',
    sitemapLabel: 'Sitemap',
    copyright: 'All rights reserved.',
    services: ['Lab Furniture', 'Practice Rooms', 'Cleanrooms', 'Industrial Interiors', 'Ventilation Systems', 'Technical Workbenches'],
  },
}

const de: T = {
  nav: {
    links: ['Kollektion', 'Projekte', 'Expertise', 'Abteilungen', 'Kontakt'],
    cta: 'Angebot anfordern',
    mobileFooter: 'Gegr. 1987 — Niederlande',
  },
  hero: {
    badge: 'S+B — 100 Jahre Marktführer',
    overline: 'Labor · Bildung · Industrie',
    heading: ['Gebaut für', 'Labore, Bildung', 'und Industrie.'],
    subtitle: 'Maßgeschneiderte Umgebungen für Leistung, Sicherheit und Langlebigkeit.',
    cta1: 'Kollektion ansehen',
    cta2: 'Projekte',
    scroll: 'Scrollen',
  },
  collection: {
    overline: 'Kollektion',
    heading: ['Acht Kategorien,', 'eine Vision der Qualität.'],
    subheading: 'Von der Laborbank bis zum Reinraum — jedes Produkt für Präzision und Langlebigkeit entwickelt.',
    viewLabel: 'Ansehen',
    categories: [
      { name: 'Labormöbel', description: 'Maßgeschneiderte Werkbänke für jede Labordisziplin' },
      { name: 'Übungsräume', description: 'Schlüsselfertige Einrichtung von Bildungsübungsräumen' },
      { name: 'Reinräume', description: 'ISO-zertifizierter Reinraumbau' },
      { name: 'Industrieinnenräume', description: 'Robuste industrielle Arbeitsplatzlösungen' },
      { name: 'Lüftungssysteme', description: 'Präzisions-Lufttechnik & Absaugsysteme' },
      { name: 'Lagersysteme', description: 'Modulare Lagerung & Chemikalienschränke' },
      { name: 'Ergonomische Arbeitsplätze', description: 'Höhenverstellbare, sicherheitsorientierte Arbeitsstationen' },
      { name: 'Technische Werkbänke', description: 'Maßgeschneiderte technische Möbel & Werkbanksysteme' },
    ],
  },
  products: {
    overline: 'Produkte',
    heading: ['Handwerkskunst in', 'jedem Detail.'],
    subheading: 'Jede S+B Lösung wird in unserer eigenen Fabrik in den Niederlanden hergestellt — von der Zeichnung bis zur Übergabe.',
    detailsLabel: 'Mehr Details',
    items: [
      {
        title: 'Laborwerkbänke',
        subtitle: 'Maßgeschneidertes Laborbankensystem mit integrierten Versorgungen',
        description: 'Unsere Laborwerkbänke werden vollständig maßgeschneidert in unserer niederländischen Fabrik hergestellt. Mit integrierten Gas-, Wasser- und Stromanschlüssen, versenkten Spülbecken und chemisch beständigen Oberflächen für jede Anwendung.',
      },
      {
        title: 'Abzüge & Absaugung',
        subtitle: 'Präzisions-Absaugmöbel für Gefahrstoffe',
        description: 'Labor-Abzüge und lokale Absaugsysteme, konzipiert für maximale Sicherheit und minimalen Energieverbrauch. Erhältlich in VAV-Ausführung mit automatischer Drehzahlregelung für variable Lasten. Vollständig konform mit EN 14175.',
      },
      {
        title: 'Lagersysteme',
        subtitle: 'Hochwertige Lagerwände für Laborbedarf',
        description: 'Modulare Lagerschränke und hohe Lagerwände für Labore und technische Umgebungen. Mit Schienensystem und passender Leiter für sicheren Zugang zu höheren Regalen. Zertifiziert für die Lagerung gefährlicher Stoffe gemäß ADR/REACH.',
      },
      {
        title: 'Maßgeschneiderte Arbeitsstationen',
        subtitle: 'Präzisions-Arbeitsplätze für Forschung & Industrie',
        description: 'Unsere maßgeschneiderten Arbeitsstationen kombinieren Ergonomie, Langlebigkeit und ein klares Ästhetik. Vollständig maßgeschneidert — von runden Inselwerkbänken bis zu langen Wandaufstellungen. Entwickelt für Umgebungen, in denen Präzision und Ausstrahlung zusammenkommen.',
      },
    ],
  },
  expertise: {
    overline: 'Fachwissen',
    heading: ['Expertise &', 'Fachwissen.'],
    subheading: 'Fast vier Jahrzehnte Ingenieurerfahrung in sechs Kernbereichen, die die Grundlage jedes S+B-Projekts bilden. Von Materialwissen bis Lufttechnik — wir beherrschen das komplette Spektrum.',
    pillars: [
      { label: 'Sicherheit & Normen', description: 'Vollständig konform mit NEN, ARBO und VPR-Vorschriften. Jedes Design durchläuft einen formalen Sicherheitsauditprozess.' },
      { label: 'Ergonomie', description: 'Höhenverstellung, haltungsoptimierte Designs und anthropometrische Analyse für jeden Arbeitsplatz.' },
      { label: 'Lufttechnik', description: 'Präzise Luftstromberechnungen, Absaugsysteme und Reinraumklasse-Engineering.' },
      { label: 'Nachhaltigkeit', description: 'Langlebige Materialien, europäische Fertigung und zirkuläres Design als Standard.' },
      { label: 'Materialwissen', description: 'HPL, Edelstahl, Corian, Epoxid und spezialisierte Oberflächen für jede Anwendung.' },
      { label: 'Maßgeschneidertes Engineering', description: 'Von der Konzeption bis zur Produktion: CAD-Design, Prototyping und Fertigungslinie im eigenen Haus.' },
    ],
  },
  businessUnits: {
    overline: 'Abteilungen',
    heading: ['Unsere', 'Abteilungen.'],
    subheading: 'Fünf spezialisierte Abteilungen unter einer Gruppe. Jede Marke ist Marktführer in ihrem Segment.',
    discoverLabel: 'Entdecken',
    units: [
      { tagline: 'Laborinnenräume für Forschung und Industrie', description: 'Von Universitätsforschungslaboren bis zu industriellen QC-Laboren. S+B Lab entwirft und produziert komplette Laborumgebungen mit zugehörigen Installationen, Absaugung und Sicherheitseinrichtungen.' },
      { tagline: 'Übungsräume und Lernumgebungen', description: 'Praxisräume für MBO, HBO und Universitäten. S+B Scholen realisiert flexible, sichere Lernumgebungen, die die strengsten Bildungsnormen erfüllen und jahrzehntelang halten.' },
      { tagline: 'Industrielle Arbeitsplätze und maßgeschneiderte Produktion', description: 'Schwere industrielle Arbeitsstationen, Montagelinien und Testumgebungen. Solid Factory liefert robuste Lösungen für die Fertigungsindustrie, mit Fokus auf Ergonomie, Sicherheit und Effizienz.' },
      { tagline: 'Lufttechnische Lösungen und Belüftung', description: 'Spezialisierte Belüftungs- und Absaugsysteme für Laborumgebungen. Labair entwirft und installiert lufttechnische Systeme gemäß den höchsten Sicherheitsstandards.' },
      { tagline: 'Die Gruppe hinter den Marken', description: 'Die Mutterorganisation, die Strategie, Engineering, Fertigung und Installation unter einem Dach integriert. Gegründet 1987, tätig in 12 Ländern, mit einer eigenen Produktionsstätte in den Niederlanden.' },
    ],
  },
  projects: {
    overline: 'Projekte',
    heading: ['Realisierte', 'Umgebungen.'],
    subheading: 'Jedes Projekt ist eine einzigartige Herausforderung. Wir entwickeln maßgeschneiderte Lösungen, die jahrzehntelang halten.',
    projectLinkLabel: 'Mehr über dieses Projekt',
    items: [
      {
        industry: 'Food & Research',
        description: 'Vollständig integriertes Forschungslaboratorium für FrieslandCampina in Wageningen. Maßgeschneiderte Inselwerkbänke mit grünen Akzenten, gläserne Laborwände und integrierte Abzüge. Entwickelt für intensiven täglichen Einsatz in einer professionellen F&E-Umgebung.',
        stats: [{ label: 'Laboratorien' }, { label: 'zertifiziert' }, { label: 'Umgebung' }],
      },
      {
        industry: 'Akademisch',
        description: 'Großmaßstäbliches Universitätslaboratorium für die Universität Twente, ausgestattet mit einer kompletten Wand professioneller Abzüge. Die blauen Abzüge verfügen über VAV-Regelung und sind vollständig konform mit EN 14175. Hochwertige Lagersysteme mit Leiterschiene für die großen Lagerwände.',
        stats: [{ label: '14175 konform' }, { label: 'Absaugregelung' }, { label: 'Forschung' }],
      },
      {
        industry: 'Food & Nutrition',
        description: 'Ikonisches offenes Laboratoriumskonzept für Danone Utrecht. Die Rundungswerkbänke mit integrierten Servicesäulen sind vollständig maßgeschneidert. Die gebogenen weißen HPL-Platten mit blauen Servicekanälen schaffen ein luftiges, ergonomisches Arbeitskonzept über eine große Grundfläche.',
        stats: [{ label: 'm² Labor' }, { label: 'Rundungsdesign' }, { label: 'konform' }],
      },
      {
        industry: 'Medizin / Blutforschung',
        description: 'Medizinisches Laborinneneinrichtung für Sanquin in Amsterdam. Stahlkonstruktion mit HPL-Platten, Absaugarmen und spezialisierten medizinischen Schränken. Die orangefarbenen Akzente verleihen dem Labor eine erkennbare visuelle Identität. Vollständig ARBO- und ISO-konform.',
        stats: [{ label: 'zertifiziert' }, { label: 'konform' }, { label: 'Diagnostik' }],
      },
    ],
  },
  trust: {
    overline: 'Autorität',
    heading: ['Bewährt in', 'der Praxis.'],
    stats: [
      { label: 'Jahre Marktführer', description: 'Marktführer in Laborinnenräumen' },
      { label: 'Projekte realisiert', description: 'In ganz Europa' },
      { label: 'Belieferte Länder', description: 'Internationales Netzwerk' },
      { label: 'Kundenzufriedenheit', description: 'Über 5 Jahre gemessen' },
    ],
    manufacturing: {
      heading: 'Europäische Fertigung',
      description: 'Alle Produkte werden in unserer eigenen Fabrik in den Niederlanden hergestellt. Vollständige Kontrolle über Qualität, Lieferzeiten und Maßhaltigkeit — von der Zeichentafel bis zur Installation.',
      badge: '🇳🇱 Made in Netherlands',
    },
    certifications: {
      heading: 'Zertifizierungen',
      description: 'S+B Gruppe ist nach den höchsten internationalen Normen zertifiziert.',
    },
    process: {
      heading: 'Unser Prozess',
      steps: [
        { label: 'Entwurf', desc: 'Aufnahme, Analyse und Konzeptdesign' },
        { label: 'Engineering', desc: 'Technische Ausarbeitung und CAD' },
        { label: 'Produktion', desc: 'Fertigung in eigener Fabrik NL' },
        { label: 'Installation', desc: 'Montage und Übergabe vor Ort' },
      ],
    },
  },
  footer: {
    tagline: '100 Jahre Marktführer in Laborinnenräumen, Übungsräumen und maßgeschneiderten Industriearbeitsplätzen. Ansässig in Capelle aan den IJssel, aktiv in ganz Europa.',
    companyHeading: 'S+B Gruppe',
    divisionsHeading: 'Abteilungen',
    servicesHeading: 'Leistungen',
    contactHeading: 'Kontakt',
    followHeading: 'Folgen Sie uns',
    cta: 'Angebot anfordern',
    privacyLabel: 'Datenschutz',
    sitemapLabel: 'Sitemap',
    copyright: 'Alle Rechte vorbehalten.',
    services: ['Labormöbel', 'Übungsräume', 'Reinräume', 'Industrieinnenräume', 'Lüftungssysteme', 'Technische Werkbänke'],
  },
}

const es: T = {
  nav: {
    links: ['Colección', 'Proyectos', 'Experiencia', 'Divisiones', 'Contacto'],
    cta: 'Solicitar presupuesto',
    mobileFooter: 'Fund. 1987 — Países Bajos',
  },
  hero: {
    badge: 'S+B — 100 Años Líder del Mercado',
    overline: 'Laboratorio · Educación · Industria',
    heading: ['Construido para', 'laboratorios, educación', 'e industria.'],
    subtitle: 'Entornos personalizados diseñados para rendimiento, seguridad y durabilidad.',
    cta1: 'Ver colección',
    cta2: 'Proyectos',
    scroll: 'Scroll',
  },
  collection: {
    overline: 'Colección',
    heading: ['Ocho categorías,', 'una visión de calidad.'],
    subheading: 'De la mesa de laboratorio a la sala limpia — cada producto diseñado para precisión y durabilidad.',
    viewLabel: 'Ver',
    categories: [
      { name: 'Mobiliario de laboratorio', description: 'Bancadas a medida para cada disciplina de laboratorio' },
      { name: 'Aulas prácticas', description: 'Equipamiento llave en mano de aulas educativas' },
      { name: 'Salas limpias', description: 'Construcción de salas limpias certificadas ISO' },
      { name: 'Interiores industriales', description: 'Soluciones robustas para espacios de trabajo industriales' },
      { name: 'Sistemas de ventilación', description: 'Tecnología de aire de precisión y sistemas de extracción' },
      { name: 'Sistemas de almacenamiento', description: 'Almacenamiento modular y armarios para químicos' },
      { name: 'Puestos ergonómicos', description: 'Estaciones de trabajo regulables y orientadas a la seguridad' },
      { name: 'Bancadas técnicas', description: 'Mobiliario técnico a medida y sistemas de bancadas' },
    ],
  },
  products: {
    overline: 'Productos',
    heading: ['Artesanía en', 'cada detalle.'],
    subheading: 'Cada solución S+B se fabrica en nuestra propia fábrica en los Países Bajos — del plano a la entrega.',
    detailsLabel: 'Más detalles',
    items: [
      {
        title: 'Bancadas de laboratorio',
        subtitle: 'Sistema de bancadas a medida con servicios integrados',
        description: 'Nuestras bancadas de laboratorio se fabrican completamente a medida en nuestra fábrica holandesa. Con conexiones integradas de gas, agua y electricidad, fregaderos embutidos y superficies resistentes a los productos químicos para cada aplicación.',
      },
      {
        title: 'Vitrinas y extracción',
        subtitle: 'Mobiliario de extracción de precisión para sustancias peligrosas',
        description: 'Vitrinas de laboratorio y sistemas de extracción local, diseñados para máxima seguridad y mínimo consumo energético. Disponible en versión VAV con control automático de velocidad para carga variable. Totalmente conforme con EN 14175.',
      },
      {
        title: 'Sistemas de almacenamiento',
        subtitle: 'Paredes de almacenamiento de alta calidad para laboratorio',
        description: 'Armarios de almacenamiento modulares y paredes de almacenamiento altas para laboratorios y entornos técnicos. Con sistema de raíl deslizante y escalera para acceso seguro a estantes superiores. Certificado para almacenamiento de sustancias peligrosas según ADR/REACH.',
      },
      {
        title: 'Puestos de trabajo a medida',
        subtitle: 'Espacios de trabajo de precisión para investigación e industria',
        description: 'Nuestros puestos de trabajo a medida combinan ergonomía, durabilidad y una estética limpia. Completamente personalizados — desde bancadas circulares hasta instalaciones de pared largas. Diseñados para entornos donde la precisión y la apariencia se encuentran.',
      },
    ],
  },
  expertise: {
    overline: 'Conocimiento',
    heading: ['Experiencia &', 'Conocimiento.'],
    subheading: 'Casi cuatro décadas de experiencia en ingeniería en seis áreas clave que forman la base de cada proyecto S+B. Del conocimiento de materiales a la tecnología del aire — dominamos el espectro completo.',
    pillars: [
      { label: 'Seguridad & Normas', description: 'Totalmente conforme con regulaciones NEN, ARBO y VPR. Cada diseño pasa por un proceso formal de auditoría de seguridad.' },
      { label: 'Ergonomía', description: 'Regulación de altura, diseños optimizados para la postura y análisis antropométrico para cada puesto de trabajo.' },
      { label: 'Tecnología del aire', description: 'Cálculos precisos de flujo de aire, sistemas de extracción e ingeniería de clase de sala limpia.' },
      { label: 'Sostenibilidad', description: 'Materiales de largo ciclo de vida, fabricación europea y diseño circular como estándar.' },
      { label: 'Conocimiento de materiales', description: 'HPL, acero inoxidable, Corian, epoxi y superficies especializadas para cada aplicación.' },
      { label: 'Ingeniería a medida', description: 'Del concepto a la producción: diseño CAD, prototipado y línea de fábrica in-house.' },
    ],
  },
  businessUnits: {
    overline: 'Divisiones',
    heading: ['Nuestras', 'Divisiones.'],
    subheading: 'Cinco divisiones especializadas bajo un grupo. Cada marca es líder del mercado en su segmento.',
    discoverLabel: 'Descubrir',
    units: [
      { tagline: 'Interiores de laboratorio para investigación e industria', description: 'Desde laboratorios de investigación universitaria hasta laboratorios de QC industriales. S+B Lab diseña y produce entornos de laboratorio completos con instalaciones, extracción y medidas de seguridad.' },
      { tagline: 'Aulas prácticas y entornos educativos', description: 'Aulas prácticas para MBO, HBO y universidades. S+B Scholen realiza entornos de aprendizaje flexibles y seguros que cumplen los estándares educativos más estrictos y duran décadas.' },
      { tagline: 'Puestos de trabajo industriales y producción a medida', description: 'Estaciones de trabajo industriales pesadas, líneas de montaje y entornos de prueba. Solid Factory ofrece soluciones robustas para la industria manufacturera, con enfoque en ergonomía, seguridad y eficiencia.' },
      { tagline: 'Soluciones de climatización y ventilación', description: 'Sistemas especializados de ventilación y extracción para entornos de laboratorio. Labair diseña e instala sistemas de climatización conforme a los más altos estándares de seguridad.' },
      { tagline: 'El grupo detrás de las marcas', description: 'La organización matriz que integra estrategia, ingeniería, fabricación e instalación bajo un mismo techo. Fundada en 1987, activa en 12 países, con una propia instalación de producción en los Países Bajos.' },
    ],
  },
  projects: {
    overline: 'Proyectos',
    heading: ['Entornos', 'realizados.'],
    subheading: 'Cada proyecto es un desafío único. Desarrollamos soluciones a medida que duran décadas.',
    projectLinkLabel: 'Más sobre este proyecto',
    items: [
      {
        industry: 'Food & Research',
        description: 'Laboratorio de investigación totalmente integrado para FrieslandCampina en Wageningen. Bancadas de isla a medida con acentos verdes, paredes de laboratorio de vidrio y vitrinas integradas. Diseñado para uso diario intensivo en un entorno profesional de I+D.',
        stats: [{ label: 'laboratorios' }, { label: 'certificado' }, { label: 'entorno' }],
      },
      {
        industry: 'Académico',
        description: 'Laboratorio universitario a gran escala para la Universidad de Twente, equipado con una pared completa de vitrinas profesionales. Las vitrinas azules cuentan con control VAV y cumplen totalmente con EN 14175. Sistemas de almacenamiento de alta calidad con raíl para las grandes paredes de almacenamiento.',
        stats: [{ label: '14175 conforme' }, { label: 'control de extracción' }, { label: 'investigación' }],
      },
      {
        industry: 'Food & Nutrition',
        description: 'Concepto de laboratorio abierto icónico para Danone Utrecht. Las bancadas curvas con columnas de servicio integradas están completamente diseñadas a medida. Los tableros de HPL blanco curvo con conductos de servicio azules crean un concepto de trabajo aireado y ergonómico.',
        stats: [{ label: 'm² laboratorio' }, { label: 'diseño curvo' }, { label: 'conforme' }],
      },
      {
        industry: 'Médico / Análisis de sangre',
        description: 'Interior de laboratorio médico para Sanquin en Ámsterdam. Estructura de acero con tableros de HPL, brazos de extracción y armarios médicos especializados. Los acentos naranjas dan al laboratorio una identidad visual reconocible. Totalmente conforme con ARBO e ISO.',
        stats: [{ label: 'certificado' }, { label: 'conforme' }, { label: 'diagnóstico' }],
      },
    ],
  },
  trust: {
    overline: 'Autoridad',
    heading: ['Demostrado en', 'la práctica.'],
    stats: [
      { label: 'Años líder del mercado', description: 'Líder del mercado en interiores de laboratorio' },
      { label: 'Proyectos realizados', description: 'En toda Europa' },
      { label: 'Países suministrados', description: 'Red internacional' },
      { label: 'Satisfacción del cliente', description: 'Medida durante 5 años' },
    ],
    manufacturing: {
      heading: 'Fabricación europea',
      description: 'Todos los productos se fabrican en nuestra propia fábrica en los Países Bajos. Control total sobre calidad, tiempos de entrega y dimensiones — de la mesa de dibujo a la instalación.',
      badge: '🇳🇱 Made in Netherlands',
    },
    certifications: {
      heading: 'Certificaciones',
      description: 'S+B Group está certificado según los más altos estándares internacionales.',
    },
    process: {
      heading: 'Nuestro proceso',
      steps: [
        { label: 'Diseño', desc: 'Toma de datos, análisis y concepto' },
        { label: 'Ingeniería', desc: 'Desarrollo técnico y CAD' },
        { label: 'Producción', desc: 'Fabricación en fábrica propia NL' },
        { label: 'Instalación', desc: 'Montaje y entrega en obra' },
      ],
    },
  },
  footer: {
    tagline: '100 años líder del mercado en interiores de laboratorio, aulas prácticas y espacios de trabajo industriales a medida. Con sede en Capelle aan den IJssel, activo en toda Europa.',
    companyHeading: 'S+B Grupo',
    divisionsHeading: 'Divisiones',
    servicesHeading: 'Servicios',
    contactHeading: 'Contacto',
    followHeading: 'Síguenos',
    cta: 'Solicitar presupuesto',
    privacyLabel: 'Privacidad',
    sitemapLabel: 'Mapa del sitio',
    copyright: 'Todos los derechos reservados.',
    services: ['Mobiliario de laboratorio', 'Aulas prácticas', 'Salas limpias', 'Interiores industriales', 'Sistemas de ventilación', 'Bancadas técnicas'],
  },
}

const it: T = {
  nav: {
    links: ['Collezione', 'Progetti', 'Competenza', 'Divisioni', 'Contatto'],
    cta: 'Richiedi preventivo',
    mobileFooter: 'Fond. 1987 — Paesi Bassi',
  },
  hero: {
    badge: 'S+B — 100 Anni Leader del Mercato',
    overline: 'Laboratorio · Istruzione · Industria',
    heading: ['Costruito per', 'laboratori, istruzione', 'e industria.'],
    subtitle: 'Ambienti personalizzati progettati per prestazioni, sicurezza e longevità.',
    cta1: 'Vedi collezione',
    cta2: 'Progetti',
    scroll: 'Scorri',
  },
  collection: {
    overline: 'Collezione',
    heading: ['Otto categorie,', 'una visione di qualità.'],
    subheading: 'Dal banco da laboratorio alla camera bianca — ogni prodotto progettato per precisione e durabilità.',
    viewLabel: 'Vedi',
    categories: [
      { name: 'Arredamento da laboratorio', description: 'Banconi su misura per ogni disciplina di laboratorio' },
      { name: 'Aule pratiche', description: 'Allestimento chiavi in mano di aule pratiche educative' },
      { name: 'Camere bianche', description: 'Costruzione di camere bianche certificate ISO' },
      { name: 'Interni industriali', description: 'Soluzioni robuste per ambienti di lavoro industriali' },
      { name: 'Sistemi di ventilazione', description: "Tecnologia dell'aria di precisione e sistemi di estrazione" },
      { name: 'Sistemi di stoccaggio', description: 'Stoccaggio modulare e armadi per prodotti chimici' },
      { name: 'Postazioni ergonomiche', description: 'Stazioni di lavoro regolabili in altezza e orientate alla sicurezza' },
      { name: 'Banconi tecnici', description: 'Arredi tecnici su misura e sistemi di banconi' },
    ],
  },
  products: {
    overline: 'Prodotti',
    heading: ['Artigianato in', 'ogni dettaglio.'],
    subheading: 'Ogni soluzione S+B viene prodotta nel nostro stabilimento in Olanda — dal disegno alla consegna.',
    detailsLabel: 'Più dettagli',
    items: [
      {
        title: 'Banconi da laboratorio',
        subtitle: 'Sistema di banconi su misura con servizi integrati',
        description: "I nostri banconi da laboratorio sono completamente personalizzati e prodotti nel nostro stabilimento olandese. Con connessioni integrate di gas, acqua ed elettricità, lavandini a filo e superfici resistenti ai prodotti chimici per ogni applicazione.",
      },
      {
        title: 'Cappe e aspirazione',
        subtitle: 'Arredi di aspirazione di precisione per sostanze pericolose',
        description: 'Cappe da laboratorio e sistemi di aspirazione locale, progettati per la massima sicurezza e il minimo consumo energetico. Disponibile in versione VAV con controllo automatico della velocità per carichi variabili. Completamente conforme EN 14175.',
      },
      {
        title: 'Sistemi di stoccaggio',
        subtitle: 'Pareti di stoccaggio di alta qualità per le esigenze di laboratorio',
        description: 'Armadi di stoccaggio modulari e pareti di stoccaggio alte per laboratori e ambienti tecnici. Con sistema a binario scorrevole e scala abbinata per un accesso sicuro agli scaffali superiori. Certificato per lo stoccaggio di sostanze pericolose secondo ADR/REACH.',
      },
      {
        title: 'Postazioni su misura',
        subtitle: 'Ambienti di lavoro di precisione per ricerca e industria',
        description: "Le nostre postazioni su misura combinano ergonomia, durabilità e un'estetica pulita. Completamente personalizzate — dai banconi circolari alle lunghe installazioni a parete. Progettate per ambienti dove precisione e aspetto si incontrano.",
      },
    ],
  },
  expertise: {
    overline: 'Competenza',
    heading: ['Esperienza &', 'Competenza.'],
    subheading: "Quasi quattro decenni di esperienza ingegneristica in sei aree chiave che costituiscono la base di ogni progetto S+B. Dalla conoscenza dei materiali alla tecnologia dell'aria — padroneggiamo lo spettro completo.",
    pillars: [
      { label: 'Sicurezza & Norme', description: 'Completamente conforme alle normative NEN, ARBO e VPR. Ogni progetto attraversa un processo formale di audit della sicurezza.' },
      { label: 'Ergonomia', description: "Regolazione dell'altezza, design ottimizzati per la postura e analisi antropometrica per ogni posto di lavoro." },
      { label: "Tecnologia dell'aria", description: "Calcoli precisi del flusso d'aria, sistemi di estrazione e ingegneria di classe camera bianca." },
      { label: 'Sostenibilità', description: 'Materiali a lungo ciclo di vita, produzione europea e design circolare come standard.' },
      { label: 'Conoscenza dei materiali', description: 'HPL, acciaio inossidabile, Corian, epossidico e superfici specializzate per ogni applicazione.' },
      { label: 'Ingegneria su misura', description: 'Dal concept alla produzione: progettazione CAD, prototipazione e linea di fabbrica interna.' },
    ],
  },
  businessUnits: {
    overline: 'Divisioni',
    heading: ['Le nostre', 'Divisioni.'],
    subheading: 'Cinque divisioni specializzate sotto un gruppo. Ogni marchio è leader di mercato nel suo segmento.',
    discoverLabel: 'Scopri',
    units: [
      { tagline: 'Interni di laboratorio per ricerca e industria', description: 'Dai laboratori di ricerca universitaria ai laboratori QC industriali. S+B Lab progetta e produce ambienti di laboratorio completi con installazioni, aspirazione e misure di sicurezza.' },
      { tagline: 'Aule pratiche e ambienti educativi', description: 'Aule pratiche per MBO, HBO e università. S+B Scholen realizza ambienti di apprendimento flessibili e sicuri che soddisfano i più severi standard educativi e durano decenni.' },
      { tagline: 'Postazioni di lavoro industriali e produzione su misura', description: "Postazioni di lavoro industriali pesanti, linee di assemblaggio e ambienti di test. Solid Factory fornisce soluzioni robuste per l'industria manifatturiera, con focus su ergonomia, sicurezza ed efficienza." },
      { tagline: 'Soluzioni di climatizzazione e ventilazione', description: 'Sistemi specializzati di ventilazione e aspirazione per ambienti di laboratorio. Labair progetta e installa sistemi di climatizzazione conformi ai più alti standard di sicurezza.' },
      { tagline: 'Il gruppo dietro i marchi', description: "L'organizzazione madre che integra strategia, ingegneria, produzione e installazione sotto un unico tetto. Fondata nel 1987, attiva in 12 paesi, con una propria struttura produttiva nei Paesi Bassi." },
    ],
  },
  projects: {
    overline: 'Progetti',
    heading: ['Ambienti', 'realizzati.'],
    subheading: 'Ogni progetto è una sfida unica. Sviluppiamo soluzioni su misura che durano decenni.',
    projectLinkLabel: 'Più su questo progetto',
    items: [
      {
        industry: 'Food & Research',
        description: 'Laboratorio di ricerca completamente integrato per FrieslandCampina a Wageningen. Banconi isola su misura con accenti verdi, pareti di laboratorio in vetro e cappe integrate. Progettato per un uso quotidiano intensivo in un ambiente R&S professionale.',
        stats: [{ label: 'laboratori' }, { label: 'certificato' }, { label: 'ambiente' }],
      },
      {
        industry: 'Accademico',
        description: "Laboratorio universitario su larga scala per l'Università di Twente, dotato di una parete completa di cappe professionali. Le cappe blu dispongono di controllo VAV e sono completamente conformi a EN 14175. Sistemi di stoccaggio di alta qualità con binario per le grandi pareti di stoccaggio.",
        stats: [{ label: '14175 conforme' }, { label: 'controllo aspirazione' }, { label: 'ricerca' }],
      },
      {
        industry: 'Food & Nutrition',
        description: "Iconico concetto di laboratorio aperto per Danone Utrecht. I banconi curvi con colonne di servizio integrate sono completamente progettati su misura. I piani in HPL bianco curvo con canali di servizio blu creano un concetto di lavoro arioso ed ergonomico su una grande superficie.",
        stats: [{ label: 'm² laboratorio' }, { label: 'design curvato' }, { label: 'conforme' }],
      },
      {
        industry: 'Medico / Ricerca sul sangue',
        description: "Interno di laboratorio medico per Sanquin ad Amsterdam. Struttura in acciaio con piani in HPL, bracci di aspirazione e armadi medici specializzati. Gli accenti arancioni sulla cappa danno al laboratorio una identità visiva riconoscibile. Completamente conforme ARBO e ISO.",
        stats: [{ label: 'certificato' }, { label: 'conforme' }, { label: 'diagnostica' }],
      },
    ],
  },
  trust: {
    overline: 'Autorità',
    heading: ['Dimostrato nella', 'pratica.'],
    stats: [
      { label: 'Anni leader del mercato', description: 'Leader del mercato negli interni di laboratorio' },
      { label: 'Progetti realizzati', description: 'In tutta Europa' },
      { label: 'Paesi serviti', description: 'Rete internazionale' },
      { label: 'Soddisfazione del cliente', description: 'Misurata su 5 anni' },
    ],
    manufacturing: {
      heading: 'Produzione europea',
      description: "Tutti i prodotti sono prodotti nel nostro stabilimento nei Paesi Bassi. Controllo totale su qualità, tempi di consegna e dimensioni — dalla tavola da disegno all'installazione.",
      badge: '🇳🇱 Made in Netherlands',
    },
    certifications: {
      heading: 'Certificazioni',
      description: 'S+B Group è certificato secondo i più alti standard internazionali.',
    },
    process: {
      heading: 'Il nostro processo',
      steps: [
        { label: 'Progettazione', desc: 'Raccolta dati, analisi e concept' },
        { label: 'Engineering', desc: 'Elaborazione tecnica e CAD' },
        { label: 'Produzione', desc: 'Produzione nella fabbrica NL' },
        { label: 'Installazione', desc: 'Montaggio e consegna in loco' },
      ],
    },
  },
  footer: {
    tagline: '100 anni leader del mercato in interni di laboratorio, aule pratiche e spazi di lavoro industriali su misura. Con sede a Capelle aan den IJssel, attivo in tutta Europa.',
    companyHeading: 'S+B Gruppo',
    divisionsHeading: 'Divisioni',
    servicesHeading: 'Servizi',
    contactHeading: 'Contatto',
    followHeading: 'Seguici',
    cta: 'Richiedi preventivo',
    privacyLabel: 'Privacy',
    sitemapLabel: 'Mappa del sito',
    copyright: 'Tutti i diritti riservati.',
    services: ['Arredamento da laboratorio', 'Aule pratiche', 'Camere bianche', 'Interni industriali', 'Sistemi di ventilazione', 'Banconi tecnici'],
  },
}

const translations = { nl, en, de, es, it }

export function useTranslation() {
  const { language } = useTheme()
  return translations[language]
}
