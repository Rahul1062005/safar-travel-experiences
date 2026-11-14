import goaImage from '../assets/images/goa.jpg';
import kashmirImage from '../assets/images/kashmir.jpg';
import keralaImage from '../assets/images/kerala.jpg';
import manaliImage from '../assets/images/manali.jpg';
import rajasthanImage from '../assets/images/rajasthan.jpg';
import rishikeshImage from '../assets/images/rishikesh.jpg';

export const DESTINATION_CATEGORIES = [
  'All',
  'Mountains',
  'Coastal & Water',
  'Heritage',
  'Wellness',
];

/**
 * Curated sample Indian destinations for the Safar portfolio concept.
 * Powers the Homepage preview grid, /destinations discovery listing,
 * and /destinations/:slug detail pages from one single source of truth.
 */
export const DESTINATIONS = [
  {
    id: 'dest-manali',
    slug: 'manali',
    name: 'Manali',
    region: 'Himachal Pradesh',
    zone: 'North India',
    category: 'Mountains',
    tripType: 'Mountains & Valleys',
    shortDescription:
      'Pine-lined mountain slopes, cedar trails, and snow-dusted Himalayan passes suited to unhurried hillside stays.',
    heroIntro:
      'Set along the upper Beas valley at the edge of the Pir Panjal range, Manali pairs cedar-shaded lanes with crisp Himalayan air.',
    image: manaliImage,
    imageAlt:
      'Snow-covered Himalayan peaks rising above misty pine trees and hillside cottages in Manali',
    featured: true,
    about: [
      'Manali blends accessible mountain scenery with small orchard hamlets tucked away from the busiest town roads. Across Old Manali, Vashisht, and nearby Naggar, travellers find stone-and-timber architecture, quiet cafes overlooking the river, and terraced apple orchards.',
      'Its appeal lies in variety at a comfortable pace: you can spend one morning walking beneath tall deodar forests and the next driving up toward sweeping high-altitude valley viewpoints without rushing between distant cities.',
    ],
    bestTime: {
      season: 'Spring to Early Summer & Autumn',
      months: 'March – June & October – November',
      summary:
        'Spring and early summer offer clear mountain mornings and mild temperatures ideal for valley walks. October and November bring crisp skies after the rains, while December to February sees winter snowfall that may limit high-pass road access.',
    },
    attractions: [
      {
        name: 'Solang Valley',
        kind: 'Mountain Valley',
        description:
          'An open alpine meadow framed by steep ridges, known for broad valley panoramas and seasonal snow slopes.',
      },
      {
        name: 'Old Manali & Manu Temple Road',
        kind: 'Hillside Quarter',
        description:
          'A walkable hillside enclave of cedar groves, traditional wooden homes, and relaxed cafes along the Manalsu stream.',
      },
      {
        name: 'Hadimba Devi Temple',
        kind: 'Historic Timber Shrine',
        description:
          'A distinctive 16th-century pagoda-style wooden temple surrounded by towering deodar forest.',
      },
      {
        name: 'Naggar Village & Castle',
        kind: 'Heritage & Views',
        description:
          'A quieter historic hill settlement south of Manali offering traditional Kullu stonework and wide views across the Beas valley.',
      },
    ],
    thingsToDo: [
      {
        title: 'Forest walks around Van Vihar and Old Manali',
        detail: 'Follow shaded paths through tall deodar groves and along riverside trails.',
      },
      {
        title: 'Scenic valley drive toward Atal Tunnel & Sissu',
        detail: 'Experience the dramatic landscape shift from green Kullu slopes to Lahaul ridges.',
      },
      {
        title: 'Heritage stroll in Naggar',
        detail: 'Visit Naggar Castle and nearby wooden shrines at an unhurried afternoon pace.',
      },
      {
        title: 'Natural hot spring visit at Vashisht',
        detail: 'Stop by the hillside village lanes above the Beas valley known for warm mineral springs.',
      },
    ],
    travelInfo: {
      suggestedDuration: '4 to 5 days',
      gettingThere:
        'Reached via overnight Volvo coaches or highway drives from Chandigarh and Delhi, or seasonal flights into Bhuntar (Kullu-Manali) Airport roughly 50 km away.',
      firstTimerTips: [
        'Pack a light windproof jacket even in May and June, as evenings cool quickly near the river.',
        'Consider staying in Old Manali, Vashisht, or Naggar if you prefer quieter surroundings over Mall Road.',
        'Keep buffer hours during monsoon (July–August) or heavy winter snowfall when mountain roads slow down.',
      ],
    },
  },
  {
    id: 'dest-kashmir',
    slug: 'kashmir',
    name: 'Kashmir',
    region: 'Jammu & Kashmir',
    zone: 'North India',
    category: 'Mountains',
    tripType: 'Lakes & Alpine Meadows',
    shortDescription:
      'Quiet morning shikara rides on Dal Lake, poplar-fringed shores, and sweeping alpine meadows.',
    heroIntro:
      'From mirror-still waters in Srinagar to pine-rimmed rivers in Pahalgam, Kashmir rewards travellers who slow down for light, seasons, and landscape.',
    image: kashmirImage,
    imageAlt:
      'Traditional wooden shikara boats gliding across misty Dal Lake beneath cloud-draped mountains in Kashmir',
    featured: true,
    about: [
      'Few regions in India combine water, garden architecture, and high mountain valleys as closely as the Kashmir Valley. Srinagar centers life around Dal and Nigeen lakes, where wooden houseboats, floating vegetable gardens, and Mughal-era terraced gardens anchor daily rhythm.',
      'Within a few hours’ drive from Srinagar, the scenery opens into the rolling meadows of Gulmarg, the Lidder River valley of Pahalgam, and high alpine passes toward Sonamarg — letting travellers balance cultural warmth with quiet mountain air.',
    ],
    bestTime: {
      season: 'Spring Blossoms, Pleasant Summer & Golden Autumn',
      months: 'April – June & September – November',
      summary:
        'April brings blooming gardens and fresh valley greens, May–June offers comfortable meadow days, and October turns Srinagar’s chinar trees warm amber. December–February appeals specifically to winter snow travellers.',
    },
    attractions: [
      {
        name: 'Dal Lake & Nigeen Lake',
        kind: 'Lake & Heritage',
        description:
          'Classic Srinagar waterways best explored on calm early-morning shikara rides past floating gardens and cedar houseboats.',
      },
      {
        name: 'Mughal Gardens (Shalimar & Nishat)',
        kind: 'Terraced Gardens',
        description:
          'Symmetric 17th-century terraced gardens featuring fountains, shaded chinar trees, and views across Dal Lake.',
      },
      {
        name: 'Pahalgam & Betaab Valley',
        kind: 'River Valley',
        description:
          'A scenic valley town beside the clear Lidder River, surrounded by dense pine slopes and open meadows.',
      },
      {
        name: 'Gulmarg Meadows',
        kind: 'Alpine Plateau',
        description:
          'An elevated bowl of rolling wildflower meadows in summer and deep snow slopes in winter, linked by the Gulmarg Gondola.',
      },
    ],
    thingsToDo: [
      {
        title: 'Dawn shikara ride on Dal Lake',
        detail: 'Watch the morning mist lift off the water while passing quiet lakeside channels.',
      },
      {
        title: 'Evening walk along Srinagar’s old craft quarters',
        detail: 'Explore traditional walnut-wood carving, papier-mache, and handwoven pashmina workshops.',
      },
      {
        title: 'Riverside picnic and trail time in Pahalgam',
        detail: 'Spend an unhurried afternoon along the Lidder River or short meadow trails toward Aru Valley.',
      },
      {
        title: 'Sample local Kashmiri kahwa and wazwan dishes',
        detail: 'Warm up with saffron-almond kahwa tea and freshly baked local breads from neighborhood bakeries.',
      },
    ],
    travelInfo: {
      suggestedDuration: '5 to 6 days',
      gettingThere:
        'Srinagar International Airport connects directly with Delhi and major Indian hubs; road access from Jammu runs through scenic highway tunnels.',
      firstTimerTips: [
        'Note that prepaid SIM cards from outside Jammu & Kashmir often do not work locally — carry a postpaid connection.',
        'Nigeen Lake offers a noticeably quieter houseboat stay compared with the busier ghats of Dal Lake.',
        'Dress in breathable layers, as sunny valley afternoons shift quickly to cool evenings.',
      ],
    },
  },
  {
    id: 'dest-goa',
    slug: 'goa',
    name: 'Goa',
    region: 'Konkan Coast',
    zone: 'West India',
    category: 'Coastal & Water',
    tripType: 'Coastal Retreat',
    shortDescription:
      'Sun-warmed palm coves, quiet southern beaches, and heritage Latin quarters made for slower coastal days.',
    heroIntro:
      'Beyond busy party strips lies another Goa — quiet southern coves, Portuguese-era lanes in Fontainhas, and calm riverside backwaters.',
    image: goaImage,
    imageAlt: 'Coconut palms framing a quiet sandy shoreline and sunlit Arabian Sea coast in Goa',
    featured: true,
    about: [
      'Goa is compact enough to explore comfortably yet surprisingly varied in mood. South Goa stretches through wide, palm-backed sands like Palolem, Agonda, and Benaulim where mornings begin with quiet walks along the water rather than loud crowds.',
      'Inland, heritage villages, spice plantations, and Panjim’s pastel-toned Fontainhas neighbourhood preserve centuries of Konkan and Indo-Portuguese architecture, making Goa rewarding for culture and food travellers as well as beachgoers.',
    ],
    bestTime: {
      season: 'Dry Coastal Winter',
      months: 'November – February',
      summary:
        'November to February brings clear skies, calm sea breezes, and comfortable humidity for beach time and heritage walks. Monsoon (June–September) transforms the interior hills lush green, though sea swimming is usually restricted.',
    },
    attractions: [
      {
        name: 'Palolem & Agonda Coves',
        kind: 'South Goa Coast',
        description:
          'Crescent-shaped sandy bays fringed by coconut palms, suited to peaceful sunrise walks and relaxed evenings.',
      },
      {
        name: 'Fontainhas Latin Quarter, Panjim',
        kind: 'Heritage Quarter',
        description:
          'Narrow winding lanes lined with ochre, indigo, and terracotta-roofed heritage homes and small bakeries.',
      },
      {
        name: 'Old Goa Churches & Heritage Precinct',
        kind: 'Historic Architecture',
        description:
          'Monumental 16th-century laterite and lime-plaster cathedrals framed by quiet green lawns.',
      },
      {
        name: 'Cabo de Rama Headland',
        kind: 'Coastal Fort & Viewpoint',
        description:
          'A quiet cliffside fort overlooking sweeping Arabian Sea curves between Betul and Agonda.',
      },
    ],
    thingsToDo: [
      {
        title: 'Early morning heritage walk in Fontainhas',
        detail: 'Stroll quiet lanes before midday heat while capturing pastel facades and tiled street plaques.',
      },
      {
        title: 'Slow beach days in South Goa',
        detail: 'Pair quiet afternoon reading under palm shade with sunset views along wide, unhurried sands.',
      },
      {
        title: 'Mandovi or Chapora riverside sunset',
        detail: 'Take in calmer river views or coastal fort ramparts away from peak beach traffic.',
      },
      {
        title: 'Visit a traditional Konkan spice farm',
        detail: 'Walk through shaded cardamom, black pepper, and nutmeg groves inland near Ponda.',
      },
    ],
    travelInfo: {
      suggestedDuration: '3 to 4 days',
      gettingThere:
        'Served by Manohar International Airport (MOPA) in the north and Dabolim Airport (GOI) near the center, alongside major Konkan Railway stations like Madgaon.',
      firstTimerTips: [
        'Base yourself in South Goa (Agonda, Palolem, Benaulim, or Cavelossim) for calm beaches, or near Panjim for heritage access.',
        'Because distances between North and South Goa take longer than they appear on a map, group sights by region each day.',
        'Carry breathable cotton clothing, sun protection, and comfortable sandals for cobbled quarters.',
      ],
    },
  },
  {
    id: 'dest-rajasthan',
    slug: 'rajasthan',
    name: 'Rajasthan',
    region: 'Udaipur & Jaipur',
    zone: 'West India',
    category: 'Heritage',
    tripType: 'Heritage & Architecture',
    shortDescription:
      'Sandstone forts, serene lakeside palaces, and living craft traditions shaped across royal desert cities.',
    heroIntro:
      'Anchored by Jaipur’s terracotta-hued streets and Udaipur’s marble lake palaces, Rajasthan brings architectural grandeur together with living craft heritage.',
    image: rajasthanImage,
    imageAlt:
      'Sandstone and marble facade of the Udaipur City Palace reflecting on calm Lake Pichola water',
    featured: true,
    about: [
      'Rajasthan rewards unhurried architectural exploration. Rather than trying to cover every desert city in a rush, pairing Jaipur and Udaipur gives first-time visitors two deeply contrasting moods: the bold pink sandstone geometry of the Aravalli capital and the tranquil, lakeside courtyards of Mewar.',
      'Between forts and palaces, the state comes alive in small details — block-printed textiles in local studios, carved stepwells catching morning shadows, and warm evening light across hillside ramparts.',
    ],
    bestTime: {
      season: 'Cool Desert Winter',
      months: 'October – March',
      summary:
        'October through March provides pleasant sunny days and crisp evenings ideal for walking up fort ramparts and exploring open courtyards. April to June brings intense daytime heat across the plains.',
    },
    attractions: [
      {
        name: 'City Palace & Lake Pichola, Udaipur',
        kind: 'Lakeside Palace',
        description:
          'Expansive marble and granite palace balconies overlooking tranquil Lake Pichola and the Aravalli hills.',
      },
      {
        name: 'Amer Fort, Jaipur',
        kind: 'Hilltop Fortress',
        description:
          'An iconic sandstone-and-marble hilltop complex featuring carved courtyards and views over Maota Lake.',
      },
      {
        name: 'Hawa Mahal & Old Jaipur Bazaars',
        kind: 'Historic Facade & Markets',
        description:
          'Jaipur’s honeycomb pink-sandstone facade rising above traditional jewel, textile, and craft lanes.',
      },
      {
        name: 'Sajjangarh (Monsoon Palace) & Fateh Sagar',
        kind: 'Sunset Viewpoint',
        description:
          'Elevated Aravalli hilltop vantage point offering wide evening vistas across Udaipur’s connected lakes.',
      },
    ],
    thingsToDo: [
      {
        title: 'Late-afternoon boat ride on Lake Pichola',
        detail: 'Watch golden-hour sunlight warm the sandstone walls of Udaipur’s ghats and island palaces.',
      },
      {
        title: 'Early-morning visit to Amer Fort and Panna Meena ka Kund',
        detail: 'Arrive soon after opening to appreciate the symmetrical stepwell and fort courtyards in calm light.',
      },
      {
        title: 'Explore Jaipur’s handblock printing and blue pottery crafts',
        detail: 'Visit artisan workshops around Sanganer or Bagru to observe traditional dyeing and carving techniques.',
      },
      {
        title: 'Heritage courtyard dining',
        detail: 'Enjoy traditional Rajasthani thali hospitality in calm haveli courtyards after sightseeing.',
      },
    ],
    travelInfo: {
      suggestedDuration: '5 to 6 days',
      gettingThere:
        'Jaipur and Udaipur both have domestic airports and direct rail/expressway links from Delhi, Mumbai, and Ahmedabad.',
      firstTimerTips: [
        'Start fort and palace visits around 8:30–9:00 AM for cooler walking temperatures and softer photography light.',
        'Wear supportive walking shoes — historic fort ramparts often involve uneven stone ramps and stairs.',
        'Pack a light sweater or shawl from December to February, as desert mornings and nights feel chilly.',
      ],
    },
  },
  {
    id: 'dest-kerala',
    slug: 'kerala',
    name: 'Kerala',
    region: 'Alleppey & Munnar',
    zone: 'South India',
    category: 'Coastal & Water',
    tripType: 'Backwaters & Hills',
    shortDescription:
      'Palm-shaded backwater canals, emerald tea estates, and calm coastal towns paced by water and breeze.',
    heroIntro:
      'Moving seamlessly from misty Western Ghats tea slopes in Munnar to calm coconut-fringed waterways in Alleppey, Kerala invites an unhurried rhythm.',
    image: keralaImage,
    imageAlt:
      'Traditional wooden boat cruising along palm-lined Kerala backwaters under a clear blue sky',
    featured: true,
    about: [
      'Kerala stands out for how closely its contrasting landscapes sit together. Within a single half-day drive, crisp mountain air and rolling tea plantations above 1,500 metres descend into lush lowland spice valleys and the vast network of Vembanad and Alleppey waterways.',
      'Rather than rushing across multiple districts, pairing Munnar’s hill trails with Alleppey’s backwaters and Fort Kochi’s quiet coastal heritage creates a deeply restorative South Indian journey.',
    ],
    bestTime: {
      season: 'Post-Monsoon & Coastal Winter',
      months: 'September – March',
      summary:
        'September through March brings comfortable coastal temperatures, lush greenery following the rains, and pleasant hill weather in Munnar. June to August offers atmospheric monsoon retreats, though hill driving requires extra caution.',
    },
    attractions: [
      {
        name: 'Alleppey Backwater Canals',
        kind: 'Waterways',
        description:
          'A calm labyrinth of palm-lined canals, village embankments, and emerald paddy fields navigated by wooden boats.',
      },
      {
        name: 'Munnar Tea Estates & Eravikulam Hills',
        kind: 'Hill Station',
        description:
          'Sculpted green slopes carpeted in heritage tea plantations wrapped in cool morning mist.',
      },
      {
        name: 'Fort Kochi Heritage Precinct',
        kind: 'Coastal Town',
        description:
          'Tree-shaded colonial lanes, Chinese fishing nets along the harbour, and centuries-old spice-trading architecture.',
      },
      {
        name: 'Vembanad Lake & Kumarakom Bird Sanctuary',
        kind: 'Wetland & Nature',
        description:
          'Quiet lakeside walking trails along India’s longest lake, rich in migratory waterbirds and mangrove shade.',
      },
    ],
    thingsToDo: [
      {
        title: 'Narrow-canal shikara or canoe excursion in Alleppey',
        detail: 'Slip into smaller village waterways that large houseboats cannot enter to see everyday canal life.',
      },
      {
        title: 'Morning ridge walk through Munnar tea gardens',
        detail: 'Walk quiet estate roads early in the day while mist drifts across the valleys.',
      },
      {
        title: 'Walk along Fort Kochi’s harbourfront at sunset',
        detail: 'Browse independent art cafes and spice warehouses before watching fishing nets lift at dusk.',
      },
      {
        title: 'Sample fresh Kerala coastal cuisine',
        detail: 'Enjoy appam with vegetable or coconut stews and locally roasted Malabar filter coffee.',
      },
    ],
    travelInfo: {
      suggestedDuration: '5 days',
      gettingThere:
        'Cochin International Airport (COK) serves as the natural gateway, roughly 3.5–4 hours uphill to Munnar and 1.5–2 hours south to Alleppey.',
      firstTimerTips: [
        'Keep a light fleece or cardigan for Munnar evenings even when Kochi feels warm and tropical.',
        'Pair a larger backwater cruise with a smaller morning canoe ride for a quieter, closer look at village canals.',
        'Allow extra driving time on winding Western Ghats hill roads between Kochi and Munnar.',
      ],
    },
  },
  {
    id: 'dest-rishikesh',
    slug: 'rishikesh',
    name: 'Rishikesh',
    region: 'Uttarakhand',
    zone: 'North India',
    category: 'Wellness',
    tripType: 'River & Wellness',
    shortDescription:
      'Where the clear Ganga leaves the Himalayan foothills — ideal for quiet riverside mornings and gentle treks.',
    heroIntro:
      'Tucked in a wooded valley where the emerald Ganga meets the Shivalik foothills, Rishikesh balances mindful calm with accessible outdoor experiences.',
    image: rishikeshImage,
    imageAlt:
      'Clear emerald Ganga river winding between forested Himalayan foothills in Rishikesh',
    featured: true,
    about: [
      'Rishikesh feels noticeably different from larger hill towns. Rather than perched high on a narrow ridge, it spreads along the clear, snow-fed Ganga river banks at the foothills of Uttarakhand, connecting leafy ashram precincts, river beaches, and forested hillside trails.',
      'Whether a traveller visits for a restorative yoga retreat, quiet riverside reading, gentle forest waterfall hikes, or a calm long weekend away from Delhi, Rishikesh adapts easily to both reflective and active schedules.',
    ],
    bestTime: {
      season: 'Spring & Post-Monsoon Autumn',
      months: 'February – May & September – November',
      summary:
        'Spring and autumn bring bright blue skies, cool mornings, and clear green river water ideal for walks and riverside activities. Winter (December–January) feels peaceful and crisp, while monsoon swells the river.',
    },
    attractions: [
      {
        name: 'Triveni Ghat & Evening Ganga Aarti',
        kind: 'Riverside Ghat',
        description:
          'An atmospheric riverside gathering at dusk filled with brass lamps, chants, and warm reflections on the water.',
      },
      {
        name: 'Tapovan & Upper Ganga Riverbank',
        kind: 'Wellness Enclave',
        description:
          'Leafy hillside lanes dotted with yoga studios, quiet retreats, and sunlit riverside viewpoints.',
      },
      {
        name: 'Beatles Ashram (Chaurasi Kutia)',
        kind: 'Forest Heritage',
        description:
          'Quiet forest-surrounded meditation domes tucked inside the boundary of Rajaji forest reserve.',
      },
      {
        name: 'Neer Garh & Patna Waterfalls',
        kind: 'Foothill Nature Trails',
        description:
          'Short, accessible forest hikes leading to terraced rocky pools overlooking the Ganga valley.',
      },
    ],
    thingsToDo: [
      {
        title: 'Sunrise walk along quiet sandy riverbanks',
        detail: 'Head north of Tapovan toward Shivpuri where white river sand meets clear green currents.',
      },
      {
        title: 'Morning yoga or breathwork drop-in session',
        detail: 'Join an open beginner-friendly class overlooking wooded valley slopes.',
      },
      {
        title: 'Short forest hike to Neer Garh Waterfall',
        detail: 'Follow a shaded mountain trail up from the Lakshman Jhula road for wide river views.',
      },
      {
        title: 'Evening Ganga Aarti at Parmarth Niketan or Triveni Ghat',
        detail: 'Experience sunset lamps floating gently along the river current as hills darken.',
      },
    ],
    travelInfo: {
      suggestedDuration: '3 to 4 days',
      gettingThere:
        'Approximately 25 km from Dehradun’s Jolly Grant Airport, or an easy train/road journey from Delhi via Haridwar.',
      firstTimerTips: [
        'Stay slightly upstream around Tapovan or Shivpuri if you want quieter river views away from town traffic.',
        'Carry modest, comfortable clothing and sturdy walking shoes for steep lanes and river steps.',
        'Remember that Rishikesh is predominantly vegetarian and alcohol-free across town precincts.',
      ],
    },
  },
];
