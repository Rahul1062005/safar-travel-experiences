import goaImage from '../assets/images/goa.jpg';
import kashmirImage from '../assets/images/kashmir.jpg';
import keralaImage from '../assets/images/kerala.jpg';
import manaliImage from '../assets/images/manali.jpg';
import rajasthanImage from '../assets/images/rajasthan.jpg';
import rishikeshImage from '../assets/images/rishikesh.jpg';

export const PACKAGE_CATEGORIES = [
  'All',
  'Mountains',
  'Heritage',
  'Coastal & Water',
  'Wellness',
];

export const PACKAGE_DURATIONS = ['All', '3–4 Days', '5–6 Days'];

/**
 * Sample travel packages for Safar (illustrative portfolio demo content only).
 * All prices, inclusions, and itineraries are illustrative guides rather than live offers.
 */
export const PACKAGES = [
  {
    id: 'pkg-himalayan-escape',
    slug: 'himalayan-escape',
    title: 'Himalayan Escape',
    destinationSlug: 'manali',
    destinationName: 'Manali, Himachal Pradesh',
    category: 'Mountains',
    duration: '5 Days / 4 Nights',
    days: 5,
    durationGroup: '5–6 Days',
    startingPrice: 18500,
    shortDescription:
      'A balanced mountain stay blending Old Manali walks, Solang Valley views, and unhurried cedar-forest mornings.',
    heroIntro:
      'Five unhurried days across Manali, Naggar, and the upper Beas valley — crafted for first-time mountain visitors who want clear views without hurried transit.',
    image: manaliImage,
    imageAlt: 'Snow-capped Himalayan peaks above misty pine slopes in Manali',
    tags: ['Mountains', 'Scenic', 'Slow Travel'],
    featured: true,
    overview: [
      'Designed around sensible mountain pacing, this sample itinerary gives you four nights anchored in one comfortable Manali hillside stay rather than packing and unpacking daily.',
      'Days balance well-known highlights like Solang Valley and Hadimba’s cedar grove with quieter afternoon corners in Old Manali and heritage Naggar village.',
    ],
    idealFor:
      'Couples, small families, and first-time Himalayan visitors seeking comfortable scenic stays without strenuous trekking.',
    highlights: [
      'Four-night single-base stay in Old Manali or Vashisht',
      'Morning cedar-forest walks around Hadimba Temple & Van Vihar',
      'Scenic excursion toward Solang Valley & Atal Tunnel viewpoint',
      'Unhurried heritage afternoon at Naggar Castle & orchard lanes',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in the Beas Valley & Old Manali Stroll',
        location: 'Manali',
        description:
          'Arrive in Manali, check in to your hillside stay, and take a gentle late-afternoon walk across the Manalsu bridge into Old Manali’s quiet lanes.',
      },
      {
        day: 2,
        title: 'Cedar Forests, Hadimba Temple & Vashisht',
        location: 'Manali & Vashisht',
        description:
          'Explore the tall deodar groves surrounding Hadimba Devi Temple in calm morning light, followed by a relaxed visit to Vashisht village above the valley.',
      },
      {
        day: 3,
        title: 'Solang Valley & High-Pass Scenic Drive',
        location: 'Solang & Atal Tunnel',
        description:
          'Head north into open alpine meadows at Solang Valley and continue toward the Atal Tunnel south portal (weather permitting) for dramatic Pir Panjal views.',
      },
      {
        day: 4,
        title: 'Naggar Heritage & Orchard Afternoon',
        location: 'Naggar',
        description:
          'Drive down a scenic left-bank valley road to Naggar Castle, visit traditional wooden shrines, and enjoy panoramic valley tea before returning to Manali.',
      },
      {
        day: 5,
        title: 'Unhurried Morning & Departure',
        location: 'Manali',
        description:
          'Enjoy a slow breakfast overlooking pine ridges before departing Manali by afternoon road transfer or onward coach.',
      },
    ],
    inclusions: [
      '4 nights illustrative accommodation in a curated Manali hillside stay',
      'Daily breakfast featuring simple regional and continental options',
      'Private local cab transfers for Solang Valley and Naggar day excursions',
      'Sample route planning notes with suggested walking times and stops',
    ],
    exclusions: [
      'Intercity flights, train tickets, or overnight Volvo fares to Manali',
      'Lunches, dinners, and personal cafe stops',
      'Adventure activity fees (such as paragliding or ropeways) at Solang',
      'Monument entry tickets and personal travel insurance',
    ],
    importantInfo: {
      bestSeason: 'March – June & October – November',
      pace: 'Relaxed · Single hotel base with 1–2 hour scenic day drives',
      disclaimer:
        'Illustrative sample itinerary and starting budget only — no live availability, supplier reservations, or confirmed bookings are offered in this portfolio preview.',
    },
  },
  {
    id: 'pkg-royal-udaipur-jaipur',
    slug: 'royal-udaipur-and-jaipur',
    title: 'Royal Udaipur & Jaipur',
    destinationSlug: 'rajasthan',
    destinationName: 'Udaipur & Jaipur, Rajasthan',
    category: 'Heritage',
    duration: '6 Days / 5 Nights',
    days: 6,
    durationGroup: '5–6 Days',
    startingPrice: 26500,
    shortDescription:
      'Explore lakeside courtyards in Udaipur and hilltop forts in Jaipur with comfortable road transfers and heritage stays.',
    heroIntro:
      'Connect Rajasthan’s serene City of Lakes with the sandstone grandeur of Jaipur across six calmly paced heritage days.',
    image: rajasthanImage,
    imageAlt: 'City Palace overlooking Lake Pichola in Udaipur, Rajasthan',
    tags: ['Heritage', 'Architecture', 'Culture'],
    featured: true,
    overview: [
      'Covering Rajasthan in a week often becomes exhausting when travellers attempt four or five cities at once. This sample route pairs just two iconic cities — Jaipur and Udaipur — so every fort, courtyard, and lakeside sunset gets room to breathe.',
      'Morning sightseeing avoids midday heat, leaving late afternoons free for Lake Pichola boat rides, craft workshops, and quiet haveli dinners.',
    ],
    idealFor:
      'Culture-focused travellers, couples, and family groups looking for iconic heritage architecture at a sensible pace.',
    highlights: [
      'Sunrise-hour visits to Amer Fort & symmetrical Panna Meena stepwell',
      'Old Jaipur walk past Hawa Mahal and traditional craft lanes',
      'Guided courtyard exploration of Udaipur City Palace',
      'Golden-hour boat route across Lake Pichola & Sajjangarh ridge views',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive in Jaipur & Haveli Evening',
        location: 'Jaipur',
        description:
          'Arrive in Jaipur, settle into a calm heritage-style stay, and enjoy an unhurried evening settling into the Pink City’s rhythm.',
      },
      {
        day: 2,
        title: 'Amer Fort, Stepwell & Old City Facades',
        location: 'Jaipur',
        description:
          'Visit Amer Fort in cool morning light alongside Panna Meena ka Kund, then pause by Jal Mahal and the pink sandstone facade of Hawa Mahal.',
      },
      {
        day: 3,
        title: 'Jantar Mantar, Local Crafts & City Markets',
        location: 'Jaipur',
        description:
          'Spend the morning at City Palace Jaipur and Jantar Mantar, leaving the afternoon open to explore block-printing studios or quiet bookshops.',
      },
      {
        day: 4,
        title: 'Scenic Transfer to Udaipur & Lake Evening',
        location: 'Jaipur to Udaipur',
        description:
          'Travel comfortably south to Udaipur (by highway drive or intercity train/flight) and take an evening stroll along Fateh Sagar or Gangaur Ghat.',
      },
      {
        day: 5,
        title: 'Udaipur City Palace & Lake Pichola Sunset',
        location: 'Udaipur',
        description:
          'Walk through City Palace’s carved balconies and Jagdish Temple lanes before taking a late-afternoon boat ride across Lake Pichola.',
      },
      {
        day: 6,
        title: 'Morning Bazaar Walk & Departure',
        location: 'Udaipur',
        description:
          'Enjoy breakfast overlooking Udaipur’s old quarter roofs before heading to the airport or railway station.',
      },
    ],
    inclusions: [
      '5 nights illustrative heritage-style accommodation (3 nights Jaipur, 2 nights Udaipur)',
      'Daily breakfast across both cities',
      'Illustrative private sedan/SUV transfers for local sightseeing and Jaipur–Udaipur travel',
      'Curated city walking notes for Old Jaipur and Udaipur ghats',
    ],
    exclusions: [
      'Inbound/outbound flights or rail tickets into Jaipur / out of Udaipur',
      'Monument, palace, and Lake Pichola boat entry fees',
      'Lunches, dinners, and personal craft shopping',
      'Independent heritage guides if hired on-site',
    ],
    importantInfo: {
      bestSeason: 'October – March',
      pace: 'Moderate · Two-city route with early morning sightseeing windows',
      disclaimer:
        'Illustrative sample itinerary and starting budget only — no live availability, supplier reservations, or confirmed bookings are offered in this portfolio preview.',
    },
  },
  {
    id: 'pkg-kerala-backwaters',
    slug: 'kerala-backwaters-and-hills',
    title: 'Kerala Backwaters & Hills',
    destinationSlug: 'kerala',
    destinationName: 'Alleppey & Munnar, Kerala',
    category: 'Coastal & Water',
    duration: '5 Days / 4 Nights',
    days: 5,
    durationGroup: '5–6 Days',
    startingPrice: 22900,
    shortDescription:
      'Move gently from misty tea gardens in Munnar to a quiet afternoon glide through Alleppey backwater canals.',
    heroIntro:
      'Experience Kerala’s signature contrast — cool tea-carpeted hills in Munnar followed by palm-shaded backwater channels and Fort Kochi.',
    image: keralaImage,
    imageAlt: 'Wooden cruise boat moving through palm-fringed backwaters in Kerala',
    tags: ['Backwaters', 'Nature', 'Couples & Families'],
    featured: true,
    overview: [
      'Starting from Cochin, this five-day sample journey heads into the green folds of the Western Ghats for two crisp nights among Munnar’s tea estates before descending to the tranquil waters of Alleppey.',
      'The closing evening in Fort Kochi brings coastal breezes, historic trading streets, and fresh Malabar cooking together before departure.',
    ],
    idealFor:
      'Couples, nature lovers, and multi-generational families wanting mild drives and restorative scenery.',
    highlights: [
      'Scenic hill ascent past Cheeyappara waterfalls into Munnar',
      'Guided morning walk along lush Western Ghats tea estate trails',
      'Quiet backwater cruise through Alleppey’s palm-lined canals',
      'Sunset stroll past Fort Kochi’s iconic Chinese fishing nets',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Kochi Arrival & Hill Drive to Munnar',
        location: 'Kochi to Munnar',
        description:
          'Leave Cochin airport or station and climb winding green ghat roads lined with spice gardens and seasonal waterfalls into Munnar.',
      },
      {
        day: 2,
        title: 'Munnar Tea Gardens & Mountain Viewpoints',
        location: 'Munnar',
        description:
          'Walk through misty tea ridges in crisp morning air, visit a tea heritage museum, and take in sweeping ridge views around Mattupetty or Eravikulam.',
      },
      {
        day: 3,
        title: 'Descent to Alleppey Backwaters',
        location: 'Munnar to Alleppey',
        description:
          'Drive down from the hills into Kerala’s lowland palm belt and spend the afternoon gliding quietly across Alleppey’s canals.',
      },
      {
        day: 4,
        title: 'Morning Village Canals & Fort Kochi',
        location: 'Alleppey to Fort Kochi',
        description:
          'Enjoy an early narrow-canal canoe route before driving north to historic Fort Kochi for a late-afternoon harbour walk.',
      },
      {
        day: 5,
        title: 'Fort Kochi Cafes & Departure',
        location: 'Kochi',
        description:
          'Browse Fort Kochi’s quiet bookshops and spice lanes over morning filter coffee before onward travel.',
      },
    ],
    inclusions: [
      '4 nights illustrative stay (2 nights Munnar, 1 night Alleppey backwater/resort, 1 night Fort Kochi)',
      'Daily breakfast plus illustrative backwater lunch during cruise',
      'Private AC vehicle for Cochin–Munnar–Alleppey–Kochi loop',
      'Early-morning narrow-canal canoe experience note',
    ],
    exclusions: [
      'Flights or rail travel to and from Kochi',
      'National park entry fees and camera charges',
      'Dinners and personal cultural performance tickets',
      'Travel insurance and personal expenses',
    ],
    importantInfo: {
      bestSeason: 'September – March',
      pace: 'Relaxed · Scenic hill-to-coast loop with manageable 3–4 hour drives',
      disclaimer:
        'Illustrative sample itinerary and starting budget only — no live availability, supplier reservations, or confirmed bookings are offered in this portfolio preview.',
    },
  },
  {
    id: 'pkg-kashmir-valley',
    slug: 'kashmir-valley-and-dal-lake',
    title: 'Kashmir Valley & Dal Lake',
    destinationSlug: 'kashmir',
    destinationName: 'Srinagar & Pahalgam, Kashmir',
    category: 'Mountains',
    duration: '6 Days / 5 Nights',
    days: 6,
    durationGroup: '5–6 Days',
    startingPrice: 29500,
    shortDescription:
      'Morning shikara routes across Dal Lake paired with riverside walks through Pahalgam and Gulmarg pine meadows.',
    heroIntro:
      'Six classic valley days connecting Srinagar’s calm lake life, Mughal terraced gardens, and the pine meadows of Pahalgam and Gulmarg.',
    image: kashmirImage,
    imageAlt: 'Shikara boats gliding across misty Dal Lake in Kashmir',
    tags: ['Lakes', 'Mountains', 'Guided'],
    featured: false,
    overview: [
      'Kashmir’s magic emerges when you avoid overly rushed day trips. This six-day sample outline splits stays between Srinagar and riverside Pahalgam so you experience both early morning mist on the lake and quiet dusk in the pine valleys.',
      'A dedicated meadow excursion to Gulmarg rounds out the trip with sweeping views across snow-capped Himalayan crests.',
    ],
    idealFor:
      'Couples, photographers, and small families looking for scenic valley landscapes and unhurried lake stays.',
    highlights: [
      'Dawn shikara glide across Dal & Nigeen lakes',
      'Chinar-shaded strolls through Shalimar and Nishat Mughal Gardens',
      'Two nights beside the clear Lidder River in Pahalgam',
      'Alpine meadow day excursion to Gulmarg’s green slopes',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Srinagar Arrival & Houseboat Welcome',
        location: 'Srinagar',
        description:
          'Arrive in Srinagar and settle into a traditional cedar houseboat or quiet lakeside stay, ending the afternoon with a relaxed shikara glide.',
      },
      {
        day: 2,
        title: 'Mughal Gardens & Old Srinagar Craft Lanes',
        location: 'Srinagar',
        description:
          'Explore Nishat Bagh and Shalimar Bagh along Dal Lake’s eastern shore before visiting traditional wood-carving and textile workshops.',
      },
      {
        day: 3,
        title: 'Drive to Pahalgam via Pampore',
        location: 'Srinagar to Pahalgam',
        description:
          'Drive past saffron fields and walnut groves into Pahalgam, spending a quiet evening walking beside the rushing Lidder River.',
      },
      {
        day: 4,
        title: 'Aru & Betaab Valley Meadow Day',
        location: 'Pahalgam',
        description:
          'Explore pine-surrounded river bends in Aru and Betaab valleys at an easy pace, with time for lakeside tea and photography.',
      },
      {
        day: 5,
        title: 'Gulmarg Alpine Day Excursion & Return to Srinagar',
        location: 'Gulmarg & Srinagar',
        description:
          'Ascend to Gulmarg’s elevated meadow plateau for cool mountain air and sweeping Himalayan views before returning to Srinagar.',
      },
      {
        day: 6,
        title: 'Morning Kahwa & Airport Departure',
        location: 'Srinagar',
        description:
          'Enjoy warm Kashmiri kahwa and fresh bakery bread before transferring to Srinagar airport.',
      },
    ],
    inclusions: [
      '5 nights illustrative accommodation (3 nights Srinagar, 2 nights Pahalgam)',
      'Daily breakfast and simple evening dinners as typical in valley stays',
      'Illustrative private vehicle transfers across Srinagar, Pahalgam, and Gulmarg',
      'One 1-hour sunrise shikara ride on Dal/Nigeen Lake',
    ],
    exclusions: [
      'Domestic flights to and from Srinagar',
      'Gulmarg Gondola cable car passes and local union vehicles in Pahalgam valleys',
      'Lunches, garden entry tickets, and personal purchases',
      'Winter snow-chain vehicle upgrades during peak snowfall',
    ],
    importantInfo: {
      bestSeason: 'April – June & September – November',
      pace: 'Balanced · Mix of lakeside leisure and scenic 2–3 hour valley drives',
      disclaimer:
        'Illustrative sample itinerary and starting budget only — no live availability, supplier reservations, or confirmed bookings are offered in this portfolio preview.',
    },
  },
  {
    id: 'pkg-south-goa-coast',
    slug: 'sunlit-south-goa-retreat',
    title: 'Sunlit South Goa Retreat',
    destinationSlug: 'goa',
    destinationName: 'South Goa & Fontainhas',
    category: 'Coastal & Water',
    duration: '4 Days / 3 Nights',
    days: 4,
    durationGroup: '3–4 Days',
    startingPrice: 16200,
    shortDescription:
      'Quiet sandy coves, heritage quarter walks in Panjim, and relaxed coastal evenings away from crowded strips.',
    heroIntro:
      'Four calm coastal days focused on South Goa’s palm-lined shores, heritage architecture in Panjim, and unhurried golden hours.',
    image: goaImage,
    imageAlt: 'Palm-fringed quiet beach in South Goa at golden hour',
    tags: ['Coastal', 'Weekend Break', 'Relaxed'],
    featured: false,
    overview: [
      'Designed specifically as an antidote to rushed party itineraries, this sample escape centers on South Goa’s wide, quieter beaches around Benaulim, Agonda, and Palolem.',
      'Half a day inland connects you to Panjim’s pastel Fontainhas lanes and Old Goa’s historic monuments without losing your relaxing coastal rhythm.',
    ],
    idealFor:
      'Weekend travellers, couples, and remote workers looking for quiet beaches and warm coastal architecture.',
    highlights: [
      'Three nights near quiet South Goa beaches',
      'Sunset viewpoint visit at historic Cabo de Rama headland',
      'Guided morning heritage walk through Fontainhas, Panjim',
      'Inland spice plantation and Konkan courtyard lunch option',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & South Goa Beach Sunset',
        location: 'South Goa',
        description:
          'Arrive in Goa, transfer south to your palm-shaded stay, and spend your first evening walking barefoot along quiet golden sand.',
      },
      {
        day: 2,
        title: 'Cabo de Rama Headland & Agonda Coast',
        location: 'Cabo de Rama & Agonda',
        description:
          'Enjoy a slow coastal morning before visiting the quiet cliff ramparts of Cabo de Rama Fort and lingering over sunset at Agonda.',
      },
      {
        day: 3,
        title: 'Fontainhas Latin Quarter & Old Goa Heritage',
        location: 'Panjim & Old Goa',
        description:
          'Drive up to Panjim for an unhurried morning stroll through Fontainhas’ tiled lanes and Old Goa’s historic plazas before returning south.',
      },
      {
        day: 4,
        title: 'Morning Swim & Departure',
        location: 'South Goa',
        description:
          'Fit in one final seaside coffee and calm morning swim before transferring to the airport or Madgaon railway station.',
      },
    ],
    inclusions: [
      '3 nights illustrative boutique stay in South Goa',
      'Daily breakfast with coastal bakery staples and fresh fruit',
      'Illustrative airport/station pickup, drop, and Panjim heritage day transfer',
      'Curated self-guided Fontainhas walking route notes',
    ],
    exclusions: [
      'Flights or Konkan rail tickets to Goa',
      'Lunches, dinners, and spice-farm entry tickets',
      'Scooter/car self-drive rentals if preferred independently',
      'Water sports or third-party boat excursions',
    ],
    importantInfo: {
      bestSeason: 'November – February',
      pace: 'Very Relaxed · Ample unscheduled beach and reading hours',
      disclaimer:
        'Illustrative sample itinerary and starting budget only — no live availability, supplier reservations, or confirmed bookings are offered in this portfolio preview.',
    },
  },
  {
    id: 'pkg-rishikesh-retreat',
    slug: 'rishikesh-riverside-retreat',
    title: 'Rishikesh Riverside Retreat',
    destinationSlug: 'rishikesh',
    destinationName: 'Rishikesh, Uttarakhand',
    category: 'Wellness',
    duration: '3 Days / 2 Nights',
    days: 3,
    durationGroup: '3–4 Days',
    startingPrice: 12800,
    shortDescription:
      'A restorative long-weekend escape combining morning river walks, foothill trails, and evening Ganga aarti visits.',
    heroIntro:
      'A restorative three-day reset set beside the clear Ganga foothills — made for long weekends of fresh air, gentle walks, and quiet river evenings.',
    image: rishikeshImage,
    imageAlt: 'Emerald Ganga river flowing through forested hills in Rishikesh',
    tags: ['Wellness', 'Short Break', 'Himalayan Foothills'],
    featured: false,
    overview: [
      'Perfect as a compact weekend or long-weekend break, this sample retreat balances calm early mornings by the water with accessible forest hikes and Rishikesh’s cultural ghats.',
      'Everything stays close enough to minimize driving, keeping your focus on foothill scenery, fresh food, and restful evenings.',
    ],
    idealFor:
      'Solo travellers, couples, and busy city residents seeking a short, calm foothill recharge.',
    highlights: [
      'Two nights in a leafy Tapovan or upper riverbank stay',
      'Morning breathwork/yoga session option overlooking hills',
      'Shaded foothill forest hike to Neer Garh Waterfall',
      'Dusk visit to the traditional riverside Ganga Aarti',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival, River Walk & Sunset Ganga Aarti',
        location: 'Rishikesh',
        description:
          'Arrive in Rishikesh, settle in around Tapovan, take a late-afternoon walk beside the river, and attend the warm evening Ganga Aarti.',
      },
      {
        day: 2,
        title: 'Morning Practice, Waterfall Trail & Quiet Cafes',
        location: 'Tapovan & Neer Garh',
        description:
          'Begin with an optional morning yoga session, hike the forest path up to Neer Garh Waterfall, and spend the afternoon reading by the Ganga.',
      },
      {
        day: 3,
        title: 'Forest Meditation Domes & Departure',
        location: 'Rishikesh',
        description:
          'Take a quiet morning walk to Chaurasi Kutia’s forest-surrounded heritage domes before heading back to Dehradun airport or Haridwar station.',
      },
    ],
    inclusions: [
      '2 nights illustrative stay in a peaceful Tapovan or riverside lodge',
      'Daily wholesome vegetarian breakfast',
      'Illustrative transfers from Dehradun airport or Haridwar railway station',
      'Evening ghat orientation and waterfall trail map',
    ],
    exclusions: [
      'Flights, trains, or highway travel from your origin city',
      'Drop-in yoga class fees and forest reserve entry tickets',
      'Lunches, dinners, and optional river-rafting trips',
      'Personal travel expenses',
    ],
    importantInfo: {
      bestSeason: 'February – May & September – November',
      pace: 'Gentle · Walkable foothill itinerary suited to a 3-day weekend',
      disclaimer:
        'Illustrative sample itinerary and starting budget only — no live availability, supplier reservations, or confirmed bookings are offered in this portfolio preview.',
    },
  },
  {
    id: 'pkg-manali-solang-trail',
    slug: 'manali-and-naggar-trail',
    title: 'Manali & Naggar Trail',
    destinationSlug: 'manali',
    destinationName: 'Manali & Naggar, Himachal',
    category: 'Mountains',
    duration: '4 Days / 3 Nights',
    days: 4,
    durationGroup: '3–4 Days',
    startingPrice: 15900,
    shortDescription:
      'Discover heritage wooden temples, orchard villages above the Beas River, and calm alpine day drives.',
    heroIntro:
      'A compact four-day Himachal escape centered on quiet orchard villages, wooden temple heritage in Naggar, and alpine valley views.',
    image: manaliImage,
    imageAlt: 'Himalayan valley and pine forest views around Manali',
    tags: ['Mountains', 'Weekend Break', 'Culture'],
    featured: false,
    overview: [
      'Ideal when you only have four days for the mountains, this sample route skips crowded commercial stops in favor of Kullu-Manali’s quieter cultural and scenic side.',
      'Pair heritage timber architecture in Naggar with pine forest trails and an easy half-day drive toward Solang Valley.',
    ],
    idealFor:
      'Weekend mountain explorers and small groups wanting authentic Himachal scenery in 4 days.',
    highlights: [
      'Quiet orchard stay experience between Naggar and Old Manali',
      'Visit Naggar Castle and Nicholas Roerich Gallery heritage grounds',
      'Half-day scenic alpine excursion to Solang Valley',
      'Deodar forest strolls around Hadimba and Manalsu stream',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Orchard Ridge Evening',
        location: 'Naggar / Manali',
        description:
          'Arrive in the upper Beas valley, check into your hillside stay, and unwind with mountain tea overlooking pine ridges.',
      },
      {
        day: 2,
        title: 'Naggar Castle & Village Heritage Walk',
        location: 'Naggar',
        description:
          'Explore historic wooden architecture at Naggar Castle, visit the quiet Roerich estate gardens, and stroll village orchard paths.',
      },
      {
        day: 3,
        title: 'Hadimba Woods & Solang Valley',
        location: 'Manali & Solang',
        description:
          'Spend morning hours beneath Old Manali’s towering deodars before heading up to open alpine views at Solang Valley.',
      },
      {
        day: 4,
        title: 'Morning Walk & Return Journey',
        location: 'Manali',
        description:
          'Take a brief final riverside walk after breakfast before your afternoon departure transfer.',
      },
    ],
    inclusions: [
      '3 nights illustrative Himachal mountain stay',
      'Daily breakfast',
      'Illustrative local sightseeing cab for Naggar and Solang Valley',
      'Suggested heritage walking notes',
    ],
    exclusions: [
      'Intercity transport to and from Kullu-Manali',
      'Lunches, dinners, and monument/gallery entry fees',
      'Optional seasonal adventure activities',
      'Personal purchases and insurance',
    ],
    importantInfo: {
      bestSeason: 'March – June & October – November',
      pace: 'Relaxed · Short mountain break with minimal road fatigue',
      disclaimer:
        'Illustrative sample itinerary and starting budget only — no live availability, supplier reservations, or confirmed bookings are offered in this portfolio preview.',
    },
  },
];

/**
 * Formats a numeric INR amount cleanly for Indian users (e.g., 18500 -> "₹18,500").
 */
export function formatIndicativePrice(amountInr) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amountInr);
}
