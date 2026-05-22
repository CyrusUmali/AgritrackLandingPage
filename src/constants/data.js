 

// Nav links
export const NAV_LINKS = [
  { label: 'Features',     href: '#features', id: 'features' },
  { label: "Who it's for", href: '#who',      id: 'who'      },
  { label: 'How it works', href: '#how',      id: 'how'      },
  { label: 'Contact',      href: '#contact',  id: 'contact'  },
];

// Hero
export const HERO_STATS = [
  { num: '68+',   label: 'Farms mapped'    },
  { num: '6',     label: 'Sectors tracked' },
  { num: '9.6ha', label: 'Land monitored'  },
];

// Logo bar
export const LOGO_BAR_ITEMS = [
  'Live Dashboard',
  'Satellite Mapping',
  'Yield Analytics',
  'Role-based Access',
  'PDF & Excel Reports',
];

// Features
export const FEATURES = [
  {
    icon: 'map-pin',
    title: 'Interactive farm mapping',
    desc: 'Draw farm polygons over satellite imagery. Every plot is geotagged with area, barangay, owner, and crop type.',
  },

  {
    icon: 'bar-chart',
    title: 'Yield & production analytics',
    desc: 'Track harvest volumes per crop, farm, and sector. Compare monthly and yearly performance with clear charts.',
  },

  {
    icon: 'cloud',
    title: 'Live weather integration',
    desc: 'Real-time temperature, humidity, wind, and pressure overlaid per farm location. Plan advisories proactively.',
  },

  {
    icon: 'map',
    title: 'Barangay heat maps',
    desc: 'Color-coded choropleth maps reveal high, medium, and low yield zones across every barangay by crop type.',
  },

  {
    icon: 'users',
    title: 'Farmer & association registry',
    desc: 'Complete directory of farmers, organizations, and sectors — each linked to their farms and production records.',
  },

  {
    icon: 'file',
    title: 'Exportable reports',
    desc: 'One-click Excel and PDF export, filtered by farm, sector, or date range. No manual spreadsheet work.',
  },
];

// Stats
export const STATS = [
  { num: '68+',   label: 'Registered farms\nacross all barangays'         },
  { num: '6',     label: 'Agricultural sectors\nCorn, Rice, Fishery & more' },
  { num: '9.6ha', label: 'Total land area\nunder monitoring'              },
  { num: '502kg', label: 'Annual yield volume\ntracked in 2025'           },
];

// How it works
export const HOW_STEPS = [
  { num: '1', title: 'Sign in securely',      desc: 'Use your credentials or Google Sign-In. Your role automatically determines your view and permissions.' },
  { num: '2', title: 'Explore the dashboard', desc: 'See live farm counts, harvest totals, sector breakdowns, and weather — all in one home screen.'        },
  { num: '3', title: 'Navigate the map',      desc: 'Browse satellite-mapped farms, tap polygons for details, and filter by product or barangay.'             },
  { num: '4', title: 'Analyze & export',      desc: 'Pull production charts, compare yields by year or sector, and download official reports in one click.'   },
];

// Audience
export const AUDIENCE = [
  {
    type: 'dark',
    tag: 'DA Officers & Admin',
    title: 'Command-level agricultural intelligence',
    desc: "Bird's-eye view of every farm, farmer, and harvest. Make data-driven decisions with full visibility across all barangays.",
    perks: [
      'Municipal and barangay-level dashboard',
      'Manage farmers, associations & sectors',
      'Generate Excel & PDF reports instantly',
      'Multi-crop yield comparison analytics',
      'Real-time weather data per locality',
    ],
  },
  {
    type: 'light',
    tag: 'Farmers',
    title: 'Your farm, your data — always accessible',
    desc: 'Access your registered farm profile, view harvest records, and track production history — no more guessing about your own numbers.',
    perks: [
      'View your farm on the satellite map',
      'Track crop yield by month or year',
      'Download your own production reports',
      'Live weather for your area',
      'Secure Google Sign-In access',
    ],
  },
];

// Testimonials
export const TESTIMONIALS = [
  { initials: 'RA', name: 'Ricardo A.',  role: 'DA Agricultural Technician · San Pablo City', tag: 'DA Officer', featured: false, text: 'Noon, kailangan naming pumunta sa opisina para sa mga ulat. Ngayon, makikita ko na agad ang lahat — mga sakahan, ani, at magsasaka — sa isang screen. Nakakatipid talaga ng oras.' },
  { initials: 'JU', name: 'Jehu U.',     role: 'Rice Farmer · Barangay San Lucas 1',           tag: 'Farmer',    featured: true,  text: 'Ginamit ko ang AI crop recommendation para sa aking bukid sa San Lucas. Sinabi nito na rice ang pinaka-angkop — at tama siya. Mas mataas ang ani ko ngayong taon.' },
  { initials: 'ML', name: 'Maria L.',    role: 'Municipal Agriculturist · San Pablo City',      tag: 'DA Officer', featured: false, text: 'Ang barangay heat map ay sobrang helpful. Nakikita namin agad kung saang barangay mababa ang ani. Hindi na namin kailangan ng manual na tally pagkatapos ng bawat season.' },
  { initials: 'BP', name: 'Bernardo P.', role: 'Corn Farmer · Barangay San Pedro',              tag: 'Farmer',    featured: false, text: 'Dati hindi ko alam ang eksaktong laki ng aking lupa. Sa AgriTrack, nakita ko na 0.455 hectares pala ang aking bukid, kasama na ang mapa. Maganda para sa dokumentasyon.' },
  { initials: 'CT', name: 'Cynthia T.',  role: 'Vegetable Farmer · Barangay Concepcion',        tag: 'Farmer',    featured: false, text: 'The chatbot is surprisingly accurate. I asked about fertilizer schedules for ampalaya and it gave a detailed answer based on my own soil data. Like having an agronomist on call.' },
  { initials: 'EV', name: 'Eduardo V.',  role: 'Agricultural Inspector · San Pablo City',       tag: 'DA Officer', featured: false, text: 'Generating the sector performance report used to take half a day. With AgriTrack I click export and have a full PDF in under a minute. My supervisor is happy, I am happy.' },
];

// FAQ
export const FAQ_ITEMS = [
  { q: 'How do I get access to AgriTrack?',                          a: 'Access is managed by the Department of Agriculture in San Pablo City. Your DA agricultural technician registers your farm and creates your account. You\'ll receive login credentials for the web, Android app, or Windows desktop version.' },
  { q: 'Is AgriTrack free for farmers?',                             a: 'Yes, AgriTrack is completely free for registered farmers. The system is provided by the Department of Agriculture as a public service to support the farming communities of San Pablo City.' },
  { q: "What's the difference between the DA and farmer view?",      a: 'DA officers see the full municipal dashboard — all farms, all barangays, all farmers, production reports, barangay heat maps, and sector analytics. Farmers see only their own registered farm profile, harvest records, and crop recommendations.' },
  { q: 'Can I use AgriTrack on my phone in the field?',              a: 'Yes. AgriTrack is available as an Android app. The web version also works on mobile browsers. The Windows desktop app is designed for office use where DA officers manage data and generate reports.' },
  { q: 'How does the AI crop recommendation work?',                  a: 'You input your soil parameters — nitrogen, phosphorus, potassium, pH, temperature, humidity, and rainfall. A machine learning model ranks the best crops for your exact conditions. The Gemini AI feature then provides soil improvement guidance.' },
  { q: 'Is my farm data private and secure?',                        a: 'Yes. Access is role-based — farmers can only see their own data. DA officers see aggregate municipal data as part of their official function. The system uses secure Google Sign-In authentication.' },
  { q: 'Can I export my harvest records as a document?',             a: 'Yes. Both farmers and DA officers can export production records as Excel (.xlsx) or PDF files, filtered by date range, crop type, or sector. Useful for loan applications, subsidy documentation, or official DA reports.' },
];

// Carousel slides
export const CAROUSEL_SLIDES = [
  { label: 'Dashboard Overview', 
    image: './images/dashboard.png',
    desc: 'Municipal overview — farm counts, yield totals, sector distribution, and live weather at a glance.',              screen: 'AgriTrack · Dashboard', hue: '140deg' },
  { label: 'Satellite Farm Map', 
    image: './images/satellite.png',
    desc: 'Every registered farm plotted on satellite imagery with polygon boundaries, crop type, and weather data.',         screen: 'AgriTrack · Mapa',      hue: '155deg' },
  { label: 'Production Analytics',
    image: './images/analytics.png',
    desc: 'Per-farm yearly and monthly yield charts, exportable as Excel or PDF for official DA reporting.',                  screen: 'AgriTrack · Mga Ani',   hue: '35deg'  },
  { label: 'Barangay Heat Map', 
    image: './images/heatmap.png',
    desc: 'Color-coded choropleth map showing yield performance across every barangay — high, medium, and low zones.',        screen: 'AgriTrack · Barangay',  hue: '200deg' },
  { label: 'Farm Details & Records',
    image: './images/detail.png',
    desc: 'Full farm profile — owner, location, sector, area, crop list, and production history all in one panel.',           screen: 'AgriTrack · Sakahan',   hue: '280deg' },
];

// Chatbot canned responses
export const CHAT_RESPONSES = {
  'best crops for my soil': 'Based on typical San Pablo City soil conditions, <strong>Rice, Corn, and Ampalaya</strong> tend to perform well. Use the Crop Advisor and enter your exact soil N-P-K, pH, and moisture levels for a personalized ranking. 🌾',
  'planting schedule':      'For <strong>wet-season rice</strong>, the ideal window is June–July. For <strong>corn</strong>, plant in March–April or October–November. Want a crop-specific calendar?',
  'weather advisory':       'Current conditions in San Pablo City: <strong>35°C, 44% humidity, broken clouds</strong>. Good conditions for field work today. 🌦️',
  'how to register':        'Visit the <strong>DA office in San Pablo City</strong> and bring your land title or Karpatan certificate. A DA technician will register your farm and create your account — it\'s free! 📋',
};
