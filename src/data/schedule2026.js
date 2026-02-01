// Tournament schedule data for Wellington Wolves 17u Elite - 2026 Season
// Update this file to change schedule information

export const tournaments = [
  {
    id: 1,
    date: "03/06 - 03/08",
    name: "March Madness",
    city: "Wellington",
    state: "FL",
    circuit: "LOCAL",
    venue: {
      name: "Village Park",
      address: "Wellington, FL"
    },
    hotelLink: null,
    details: "Local Wellington Wolves tournament. No travel required."
  },
  {
    id: 2,
    date: "03/13 - 03/15",
    name: "Conrad Foss Memorial",
    city: "Wesley Chapel",
    state: "FL",
    circuit: "AAU",
    venue: {
      name: "Wiregrass Ranch Sports Complex",
      address: "Wesley Chapel, FL"
    },
    hotelLink: null,
    details: "Hotel: Holiday Inn Express, 2775 Cypress Ridge Road, Wesley Chapel, FL 33544. $189/night."
  },
  {
    id: 3,
    date: "03/20 - 03/22",
    name: "Jamboree",
    city: "Tavares",
    state: "FL",
    circuit: "AAU",
    venue: {
      name: "TBD",
      address: "Tavares, FL"
    },
    hotelLink: null,
    details: "Hotel: Holiday Inn Express, Tavares, FL. $189/night."
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
    hotelLink: "https://eventconnect.io",
    details: "Hotel: Courtyard by Marriott Boston Littleton, 102 Constitution Avenue, Littleton, MA 01460. $193/night. Flight: Boston Logan Intl (JetBlue)."
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
    hotelLink: "https://eventconnect.io",
    details: "Hotel: Hampton Inn & Suites Las Vegas Airport, 6575 S Eastern Ave, Las Vegas, NV 89119. $189/night. Flight: Las Vegas Intl (Spirit via DFW)."
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
      address: "Wesley Chapel, FL"
    },
    hotelLink: "https://eventconnect.io",
    details: "Hotel: Residence Inn by Marriott Tampa Wesley Chapel, 2867 Lajuana Blvd, Wesley Chapel, FL 33543. $180/night."
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
      address: "Tavares, FL"
    },
    hotelLink: "https://eventconnect.io",
    details: "Hotel: Holiday Inn Express, Tavares, FL. $189/night."
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
    details: "Hotel: Hampton Inn & Suites Johns Creek, 6440 East Johns Crossing, Johns Creek, GA 30097. $124/night. Flight: ATL (Spirit)."
  },
  {
    id: 9,
    date: "05/22 - 05/24",
    name: "OTR Memorial Day Classic",
    city: "Orlando",
    state: "FL",
    circuit: "OTR",
    venue: {
      name: "Game Point Events Center",
      address: "6700 Kingspointe Pkwy, Orlando, FL 32819"
    },
    hotelLink: null,
    details: "Hotel: Dockside Inn, 7125 Universal Boulevard, Orlando, FL 32819. $200/night."
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
    hotelLink: "https://eventconnect.io",
    details: "Hotel: DoubleTree by Hilton Gainesville, 3726 Southwest 40th Boulevard, Gainesville, FL 32608. $149/night."
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
    hotelLink: "https://eventconnect.io",
    details: "Hotel: Fairfield Inn & Suites by Marriott Richmond Ashland, 11625 Lakeridge Parkway, Ashland, VA 23005. $189/night. Flight: ATL then drive (Delta)."
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
    details: "Hotel: TBD. Flight: ATL (Spirit or Delta), ~45 min drive to Cartersville."
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
    hotelLink: "https://eventconnect.io",
    details: "Hotel: Fairfield Inn & Suites Orlando Int'l Drive/Convention Center, 8214 Universal Boulevard, Orlando, FL 32819. $179/night. Championship event."
  }
];

// Circuit logo/badge colors for styling
export const circuitColors = {
  NXTpro: { bg: "#000000", text: "#FFFFFF", accent: "#E31837" },
  HOOPSEEN: { bg: "#1E3A5F", text: "#FFFFFF", accent: "#FFD700" },
  OTR: { bg: "#FF6B00", text: "#FFFFFF", accent: "#000000" },
  AAU: { bg: "#003087", text: "#FFFFFF", accent: "#C8102E" },
  LOCAL: { bg: "#001f3f", text: "#FFFFFF", accent: "#FFD700" }
};
