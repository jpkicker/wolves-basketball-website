// Tournament schedule data for Wellington Wolves 17u Elite - 2026 Season
// Update this file to change schedule information

export const tournaments = [
  {
    id: 1,
    date: "03/14 - 03/16",
    name: "Conrad Foss Memorial",
    city: "Wesley Chapel",
    state: "FL",
    circuit: "HOOPSEEN",
    venue: {
      name: "Wiregrass Ranch Sports Complex",
      address: "3021 Sports Coast Way, Wesley Chapel, FL 33543"
    },
    hotelLink: null,
    details: "Check-in begins Friday at 4:00 PM. Games start Saturday morning."
  },
  {
    id: 2,
    date: "04/11 - 04/13",
    name: "Puma NXTpro (Providence, RI)",
    city: "Tiverton",
    state: "RI",
    circuit: "NXTpro",
    venue: {
      name: "Longplex Family & Sports Center",
      address: "300 Industrial Way, Tiverton, RI 02878"
    },
    hotelLink: "https://eventconnect.io",
    details: "Event Connect hotel booking available. NXTpro circuit event."
  },
  {
    id: 3,
    date: "04/18 - 04/20",
    name: "Puma NXTpro (Wesley Chapel, FL)",
    city: "Wesley Chapel",
    state: "FL",
    circuit: "NXTpro",
    venue: {
      name: "Wiregrass Ranch Sports Complex",
      address: "3021 Sports Coast Way, Wesley Chapel, FL 33543"
    },
    hotelLink: "https://eventconnect.io",
    details: "Event Connect hotel booking available. NXTpro circuit event."
  },
  {
    id: 4,
    date: "04/25 - 04/27",
    name: "Puma NXTpro (Plano, TX)",
    city: "Murphy",
    state: "TX",
    circuit: "NXTpro",
    venue: {
      name: "PSA Murphy",
      address: "330 N Murphy Rd, Murphy, TX 75094"
    },
    hotelLink: "https://eventconnect.io",
    details: "Event Connect hotel booking available. NXTpro circuit event."
  },
  {
    id: 5,
    date: "05/01 - 05/03",
    name: "Puma NXTpro (Wesley Chapel, FL)",
    city: "Wesley Chapel",
    state: "FL",
    circuit: "NXTpro",
    venue: {
      name: "Wiregrass Ranch Sports Campus",
      address: "3021 Sports Coast Way, Wesley Chapel, FL 33543"
    },
    hotelLink: "https://eventconnect.io",
    details: "Event Connect hotel booking available. NXTpro circuit event.",
    details: "Fri 5/1: 5:00 PM vs Kissimmee AllStars (Court 2) | Sat 5/2: 5:15 PM vs FCA Saints (Court 2), 7:25 PM vs Palmetto City Hurricanes (Court 2) | Sun 5/3: 4:10 PM vs Orlando Bad Boys (Court 1)",
    games: [
      { date: "05/01", time: "5:00 PM", opponent: "Kissimmee AllStars 17U", court: "Court 2", homeAway: "Home" },
      { date: "05/02", time: "5:15 PM", opponent: "FCA Saints 17U (FL)", court: "Court 2", homeAway: "Away" },
      { date: "05/02", time: "7:25 PM", opponent: "Palmetto City Hurricanes 17U (SC)", court: "Court 2", homeAway: "Home" },
      { date: "05/03", time: "4:10 PM", opponent: "Orlando Bad Boys 17U (FL)", court: "Court 1", homeAway: "Away" }
    ]
  },
  {
    id: 6,
    date: "05/09 - 05/11",
    name: "Puma NXTpro (Westford, MA)",
    city: "Westford",
    state: "MA",
    circuit: "NXTpro",
    venue: {
      name: "The Mill Works",
      address: "22 Towns End Rd, Westford, MA 01886"
    },
    hotelLink: "https://eventconnect.io",
    details: "Event Connect hotel booking available. NXTpro circuit event."
  },
  {
    id: 7,
    date: "05/15 - 05/17",
    name: "Atlanta Jam (HOOPSEEN LIVE)",
    city: "Suwanee",
    state: "GA",
    circuit: "HOOPSEEN",
    venue: {
      name: "Suwanee Sports Academy",
      address: "3640 Burnette Road, Suwanee, GA 30024"
    },
    hotelLink: null,
    details: "Premier HOOPSEEN event with excellent college scouting exposure."
  },
  {
    id: 8,
    date: "05/24 - 05/26",
    name: "Memorial Day Classic",
    city: "Orlando",
    state: "FL",
    circuit: "OTR",
    venue: {
      name: "Game Point Events Center",
      address: "6700 Kingspointe Pkwy, Orlando, FL 32819"
    },
    hotelLink: null,
    details: "On The Radar Memorial Day Classic. High-level competition."
  },
  {
    id: 9,
    date: "07/04 - 07/06",
    name: "Puma NXTpro (Gainesville, FL)",
    city: "Gainesville",
    state: "FL",
    circuit: "NXTpro",
    venue: {
      name: "Alachua County Sports & Event Center",
      address: "4870 Celebration Pointe Ave, Gainesville, FL 32608"
    },
    hotelLink: "https://eventconnect.io",
    details: "Event Connect hotel booking available. NXTpro circuit event."
  },
  {
    id: 10,
    date: "07/10 - 07/13",
    name: "Best of the South (HOOPSEEN LIVE)",
    city: "Atlanta",
    state: "GA",
    circuit: "HOOPSEEN",
    venue: {
      name: "Georgia International Convention Center",
      address: "2000 Convention Center Concourse, College Park, GA 30337"
    },
    hotelLink: null,
    details: "Premier summer event with top-tier college scouting exposure."
  },
  {
    id: 11,
    date: "07/24 - 07/27",
    name: "Puma NXTpro FINALS",
    city: "Orlando",
    state: "FL",
    circuit: "NXTpro",
    venue: {
      name: "Orange County Convention Center",
      address: "9800 International Dr., Orlando, FL 32819"
    },
    hotelLink: "https://eventconnect.io",
    details: "Championship event. Event Connect hotel booking available."
  }
];

export const teamEvents = [
  {
    id: 102,
    date: "04/11 - 04/12",
    name: "Publix Fundraiser",
    city: "Royal Palm Beach",
    state: "FL",
    circuit: "FUNDRAISER",
    venue: {
      name: "Publix at The Groves",
      address: "125 S State Road 7, Royal Palm Beach, FL 33414"
    },
    hotelLink: null,
    details: "Team fundraising event at Publix. Volunteers needed - check Wolf's Den for sign-up details."
  }
];

// Circuit logo/badge colors for styling
export const circuitColors = {
  NXTpro: { bg: "#000000", text: "#FFFFFF", accent: "#E31837" },
  HOOPSEEN: { bg: "#1E3A5F", text: "#FFFFFF", accent: "#FFD700" },
  OTR: { bg: "#FF6B00", text: "#FFFFFF", accent: "#000000" },
  "US Amateur": { bg: "#003087", text: "#FFFFFF", accent: "#C8102E" }
};
