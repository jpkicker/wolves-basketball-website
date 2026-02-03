// Enhanced Player roster data for Wellington Wolves 17u Elite
// Includes stats, bio, highlights for recruiting profiles

import canaanImage from 'url:../assets/headshots/canaan-removebg-preview.png';
import ethanImage from 'url:../assets/headshots/ethan-removebg-preview.png';
import nicholasImage from 'url:../assets/headshots/nick-removebg-preview.png';
import rjImage from 'url:../assets/headshots/rj-baptiste-removebg-preview.png';
import camdenImage from 'url:../assets/headshots/cam-removebg-preview.png';
import maxImage from 'url:../assets/headshots/max-removebg-preview.png';

export const rosterEnhanced = [
  {
    id: "canaan-gedeon",
    number: 2,
    firstName: "CANAAN",
    lastName: "GEDEON",
    position: "Guard",
    initial: "CG",
    image: canaanImage,
    instagram: "c_gedeon.21",
    // Enhanced fields
    height: "5'11\"",
    weight: "165",
    gradYear: 2026,
    school: "Wellington High School",
    gpa: "3.4",
    bio: "Dynamic point guard with exceptional court vision and leadership abilities. Known for creating opportunities for teammates while being a scoring threat from anywhere on the court. Two-year varsity starter with a relentless work ethic.",
    stats: {
      season: "2024-25",
      gp: 31,
      ppg: 12.3,
      rpg: 3.0,
      apg: 2.5,
      spg: 0.8,
      bpg: 0.1,
      fgPct: 49,
      threePct: 34,
      ftPct: 56
    },
    highlights: [
      { title: "Season Highlights 2024-25", url: "https://youtube.com/watch?v=example1" },
      { title: "Tournament MVP Performance", url: "https://youtube.com/watch?v=example2" }
    ],
    recruiting: {
      hudl: "https://hudl.com/profile/example",
      email: "recruit@example.com",
      interests: ["D1", "D2", "D3"],
      status: "Open"
    }
  },
  {
    id: "ethan-ranney",
    number: 3,
    firstName: "ETHAN",
    lastName: "RANNEY",
    position: "Guard",
    initial: "ER",
    image: ethanImage,
    instagram: "ethanranney3",
    // Enhanced fields
    height: "6'0\"",
    weight: "175",
    gradYear: 2026,
    school: "Wellington High School",
    gpa: "3.5",
    bio: "Versatile shooting guard with a smooth stroke and high basketball IQ. Excels at reading defenses and making the right play. Strong defender who takes pride in shutting down the opponent's best player. Team captain and vocal leader on and off the court.",
    stats: {
      season: "2024-25",
      gp: 31,
      ppg: 3.1,
      rpg: 1.5,
      apg: 0.7,
      spg: 0.3,
      bpg: 0.0,
      fgPct: 34,
      threePct: 35,
      ftPct: 50
    },
    highlights: [
      { title: "Junior Year Highlights", url: "https://youtube.com/watch?v=example3" },
      { title: "28-Point Game vs Palm Beach Lakes", url: "https://youtube.com/watch?v=example4" },
      { title: "Defensive Showcase", url: "https://youtube.com/watch?v=example5" }
    ],
    recruiting: {
      hudl: "https://hudl.com/profile/ethan-ranney",
      email: "ethanranney@example.com",
      interests: ["D1", "D2"],
      status: "Open"
    }
  },
  {
    id: "nicholas-cruz",
    number: 99,
    firstName: "NICHOLAS",
    lastName: "CRUZ",
    position: "Guard",
    initial: "NC",
    image: nicholasImage,
    instagram: "iamnickcruz4",
    height: "5'10\"",
    weight: "160",
    gradYear: 2026,
    school: "Wellington High School",
    gpa: "3.3",
    bio: "Quick and crafty guard who excels at getting to the rim. Fearless competitor with a knack for making big plays in clutch moments.",
    stats: {
      season: "2024-25",
      gp: 31,
      ppg: 4.5,
      rpg: 2.2,
      apg: 1.9,
      spg: 1.0,
      bpg: 0.0,
      fgPct: 37,
      threePct: 31,
      ftPct: 68
    },
    highlights: [],
    recruiting: {
      hudl: "",
      email: "",
      interests: ["D2", "D3"],
      status: "Open"
    }
  },
  {
    id: "rj-jean-baptiste",
    number: 5,
    firstName: "RJ",
    lastName: "JEAN-BAPTISTE",
    position: "Guard",
    initial: "RJ",
    image: rjImage,
    instagram: "bxngout.rjj",
    height: "6'1\"",
    weight: "170",
    gradYear: 2026,
    school: "Wellington High School",
    gpa: "3.2",
    bio: "Athletic combo guard with explosive scoring ability. Can score at all three levels and is developing into a lockdown defender.",
    stats: {
      season: "2024-25",
      gp: 31,
      ppg: 7.8,
      rpg: 2.5,
      apg: 3.3,
      spg: 1.0,
      bpg: 0.1,
      fgPct: 37,
      threePct: 28,
      ftPct: 67
    },
    highlights: [],
    recruiting: {
      hudl: "",
      email: "",
      interests: ["D1", "D2"],
      status: "Open"
    }
  },
  {
    id: "camden-player",
    number: 10,
    firstName: "MAX",
    lastName: "GOLDIE",
    position: "Forward",
    initial: "MG",
    image: maxImage,
    instagram: "",
    height: "6'4\"",
    weight: "195",
    gradYear: 2026,
    school: "Wellington High School",
    gpa: "3.6",
    bio: "Skilled forward with a versatile game. Can stretch the floor with his shooting or attack the basket. Strong rebounder and rim protector.",
    stats: {
      season: "2024-25",
      gp: 24,
      ppg: 1.9,
      rpg: 2.0,
      apg: 1.0,
      spg: 1.0,
      bpg: 0.0,
      fgPct: 21,
      threePct: 14,
      ftPct: 44
    },
    highlights: [],
    recruiting: {
      hudl: "",
      email: "",
      interests: ["D2", "D3"],
      status: "Open"
    }
  },
  {
    id: "camden-hutchinson",
    number: 24,
    firstName: "CAMDEN",
    lastName: "HUTCHINSON",
    position: "Forward",
    initial: "CH",
    image: camdenImage,
    instagram: "",
    height: "6'5\"",
    weight: "200",
    gradYear: 2026,
    school: "Wellington High School",
    gpa: "3.4",
    bio: "Long and athletic forward with excellent potential. Uses his length to disrupt passing lanes and alter shots. Developing offensive game.",
    stats: {
      season: "2024-25",
      gp: 31,
      ppg: 12.9,
      rpg: 7.2,
      apg: 0.7,
      spg: 0.9,
      bpg: 0.7,
      fgPct: 58,
      threePct: 27,
      ftPct: 51
    },
    highlights: [],
    recruiting: {
      hudl: "",
      email: "",
      interests: ["D2", "D3"],
      status: "Open"
    }
  }
];

export default rosterEnhanced;
