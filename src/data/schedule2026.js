// Tournament schedule data for Wellington Wolves 17u Elite - 2026 Season
// Update this file to change schedule information

export const tournaments = [
  {
    id: 1,
    date: "03/06 - 03/08",
    name: "March Madness",
    city: "Wellington",
    state: "FL",
    circuit: "USAB",
    venue: {
      name: "Village Park",
      address: "11700 Pierson Rd, Wellington, FL 33414"
    },
    hotelLink: null,
    details: "US Amateur Basketball tournament. Local event - no travel required."
  },
  {
    id: 2,
    date: "03/13 - 03/15",
    name: "Conrad P. Foss Memorial",
    city: "Wesley Chapel",
    state: "FL",
    circuit: "HOOPSEEN",
    venue: {
      name: "Wiregrass Ranch Sports Campus",
      address: "3021 Sports Complex Blvd, Wesley Chapel, FL 33543"
    },
    hotelLink: null,
    details: "Hotel: Residence Inn by Marriott Tampa Wesley Chapel (next to Wiregrass facility). $229/night. Matching 15U team hotel.",
    games: [
      {
        day: "Sat, Mar 14",
        time: "12:00 PM EDT",
        court: "Court 2",
        opponent: "SCE UA Grind",
        homeAway: "Home",
        division: "Boys Varsity Showcase, Pool A"
      },
      {
        day: "Sat, Mar 14",
        time: "4:40 PM EDT",
        court: "Court 1",
        opponent: "SCE UA Rise",
        homeAway: "Home",
        division: "Boys Varsity Showcase, Pool A"
      },
      {
        day: "Sun, Mar 15",
        time: "9:40 AM EDT",
        court: "Court 1",
        opponent: "TNT Hoopsquad 2026",
        homeAway: "Home",
        division: "Boys Varsity Showcase, Pool A"
      },
      {
        day: "Sun, Mar 15",
        time: "12:00 PM EDT",
        court: "Court 1",
        opponent: "SWFL Hoops",
        homeAway: "Home",
        division: "Boys Varsity Showcase, Pool A"
      }
    ]
  },
  {
    id: 3,
    date: "03/20 - 03/22",
    name: "Jamboree",
    city: "Tavares",
    state: "FL",
    circuit: "AAU",
    venue: {
      name: "Big House",
      address: "400 E Alfred St, Tavares, FL 32778"
    },
    hotelLink: null,
    details: "🏨 Hotel: Hampton Inn & Suites Orlando-North/Altamonte Springs, 161 Douglas Avenue, Altamonte Springs, FL 32714. Check-in 3/20, Check-out 3/22 (2 nights)."
  },
  {
    id: 4,
    date: "03/27 - 03/29",
    name: "Puma NXT PRO (Boston)",
    city: "Westford",
    state: "MA",
    circuit: "NXTpro",
    venue: {
      name: "The Mill Works",
      address: "22 Towns Farm Rd, Westford, MA 01886"
    },
    hotelLink: null,
    details: "🏨 Hotel: Residence Inn by Marriott Boston Concord. Check-in 3/27, Check-out 3/29 (2 nights). Feel free to book through Expedia, Hotels.com, or any service you prefer. ✈ Recommended Flights: JetBlue #722 PBI→BOS Fri 3/27 6:35 AM–9:39 AM (3h 04m) | JetBlue #721 BOS→PBI Sun 3/29 7:25 PM–10:49 PM (3h 24m) — $216.80/person roundtrip."
  },
  {
    id: 5,
    date: "04/17 - 04/19",
    name: "Puma NXT PRO (Las Vegas)",
    city: "Henderson",
    state: "NV",
    circuit: "NXTpro",
    venue: {
      name: "Supreme Courtz",
      address: "2100 Olympic Avenue, Henderson, NV 89014"
    },
    hotelLink: null,
    details: "🏨 Hotel: Holiday Inn Express & Suites Las Vegas - E Tropicana. Check-in 4/16, Check-out 4/19 (3 nights). Feel free to book through Expedia, Hotels.com, or any service you prefer. ✈ Recommended Flights: Frontier #4551 MIA→LAS Apr 16 arrives 8:42 AM | Frontier #4552 LAS→MIA Apr 19 arrives 11:49 PM — $196.96/person roundtrip (non-refundable)."
  },
  {
    id: 6,
    date: "05/01 - 05/03",
    name: "Puma NXT PRO (Tampa)",
    city: "Wesley Chapel",
    state: "FL",
    circuit: "NXTpro",
    venue: {
      name: "Wiregrass Ranch Sports Complex",
      address: "3021 Sports Complex Blvd, Wesley Chapel, FL 33543"
    },
    hotelLink: null,
    details: "🏨 Hotel: Fairfield Inn & Suites by Marriott Tampa Wesley Chapel. Check-in 5/1, Check-out 5/3 (2 nights). Feel free to book through Expedia, Hotels.com, or any service you prefer."
  },
  {
    id: 7,
    date: "05/08 - 05/10",
    name: "Puma NXT PRO (Tavares)",
    city: "Tavares",
    state: "FL",
    circuit: "NXTpro",
    venue: {
      name: "Big House",
      address: "400 E Alfred St, Tavares, FL 32778"
    },
    hotelLink: null,
    details: "🏨 Hotel: Hampton Inn Leesburg/Tavares. Check-in 5/8, Check-out 5/10 (2 nights). Feel free to book through Expedia, Hotels.com, or any service you prefer."
  },
  {
    id: 8,
    date: "05/15 - 05/17",
    name: "Sweet 16 in ATL (OTR LIVE)",
    city: "Johns Creek",
    state: "GA",
    circuit: "OTR",
    venue: {
      name: "TBD",
      address: "Atlanta, GA Area"
    },
    hotelLink: null,
    details: "Hotel: Hampton Inn & Suites Johns Creek, 6440 East Johns Crossing, Johns Creek, GA 30097. $124/night."
  },
  {
    id: 9,
    date: "05/22 - 05/25",
    name: "OTR Memorial Day Classic",
    city: "Orlando",
    state: "FL",
    circuit: "OTR",
    venue: {
      name: "Game Point Events Center",
      address: "6700 Kingspointe Pkwy, Orlando, FL 32819"
    },
    hotelLink: null,
    details: "🏨 Hotel: Universal's Stella Nova Resort, Orlando, FL (staying with other Wolves teams). Arrive Friday 5/22, depart Monday 5/25 (3 nights). Possible game on Monday. Rate TBD."
  },
  {
    id: 10,
    date: "07/03 - 07/05",
    name: "Puma NXT PRO (Gainesville)",
    city: "Gainesville",
    state: "FL",
    circuit: "NXTpro",
    venue: {
      name: "Alachua County Sports & Event Center",
      address: "4870 Celebration Pointe Ave, Gainesville, FL 32608"
    },
    hotelLink: null,
    details: "🏨 Hotel: Hilton Garden Inn Gainesville. Check-in 7/3, Check-out 7/5 (2 nights). Feel free to book through Expedia, Hotels.com, or any service you prefer."
  },
  {
    id: 11,
    date: "07/09 - 07/12",
    name: "Puma NXT PRO LIVE (Richmond)",
    city: "Glen Allen",
    state: "VA",
    circuit: "NXTpro",
    venue: {
      name: "Henrico Sports & Events Center",
      address: "1 All Star Boulevard, Glen Allen, VA 23059"
    },
    hotelLink: null,
    details: "🏨 Hotel: Embassy Suites by Hilton Richmond. Check-in 7/8, Check-out 7/12 (4 nights). Feel free to book through Expedia, Hotels.com, or any service you prefer."
  },
  {
    id: 12,
    date: "07/16 - 07/19",
    name: "Power 24 (OTR LIVE)",
    city: "Cartersville",
    state: "GA",
    circuit: "OTR",
    venue: {
      name: "TBD",
      address: "Cartersville, GA"
    },
    hotelLink: null,
    details: "Hotel: TBD."
  },
  {
    id: 13,
    date: "07/24 - 07/27",
    name: "Puma NXT PRO FINALS",
    city: "Orlando",
    state: "FL",
    circuit: "NXTpro",
    venue: {
      name: "Orange County Convention Center",
      address: "9800 International Dr., Orlando, FL 32819"
    },
    hotelLink: null,
    details: "🏨 Hotel: Residence Inn by Marriott Orlando Convention Center. Check-in 7/23, Check-out 7/27 (4 nights). Championship event. Feel free to book through Expedia, Hotels.com, or any service you prefer."
  }
];

// Team Events (Fundraisers, etc.)
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
  },
  {
    id: 103,
    date: "04/04 - 04/05",
    name: "Publix Fundraiser",
    city: "Wellington",
    state: "FL",
    circuit: "FUNDRAISER",
    venue: {
      name: "Publix at Wellington Woodswalk Plaza",
      address: "9855 Lake Worth Rd, Wellington, FL 33411" // Assuming 33411 is the correct zip for that area.
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
  AAU: { bg: "#003087", text: "#FFFFFF", accent: "#C8102E" },
  USAB: { bg: "#002a5c", text: "#FFFFFF", accent: "#e51b24" },
  LOCAL: { bg: "#001f3f", text: "#FFFFFF", accent: "#FFD700" },
  FUNDRAISER: { bg: "#228B22", text: "#FFFFFF", accent: "#FFD700" }
};
