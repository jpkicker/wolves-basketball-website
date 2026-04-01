// Team announcements data for Wellington Wolves 17u Elite
// Update this file to add or modify announcements
// Announcements are displayed in reverse chronological order (newest first)

export const announcements = [
  {
    id: 4,
    date: "2026-04-01",
    title: "🏀 Publix Fundraiser — This Saturday! Player Sign-Up Slots",
    category: "Team News",
    content: `Join us this Saturday for our first team fundraiser at Publix, Wellington Woodswalk Plaza (9855 Lake Worth Rd, Wellington 33411). 100% of proceeds go directly toward tournament fees, coaches' travel, and other team needs. Coaches will be present — all players are required to participate. Players must arrive 15 minutes before their shift.

📍 Location: Publix — Wellington Woodswalk Plaza, 9855 Lake Worth Rd, Wellington, FL 33411
📅 Date: Saturday, April 4, 2026
⏰ Hours: 9:00 AM – 3:00 PM

━━━━━━━━━━━━━━━━━━━━━━
🕘 SHIFT 1 — 9:00 AM to 12:00 PM
━━━━━━━━━━━━━━━━━━━━━━
1. Ethan Ranney
2. Nicholas Cruz
3. Camden Wesley-Kam
4. Chase Ursini-Gardner
5. Max Modric

━━━━━━━━━━━━━━━━━━━━━━
🕛 SHIFT 2 — 12:00 PM to 3:00 PM
━━━━━━━━━━━━━━━━━━━━━━
1. Canaan Gedeon
2. RJ Jean-Baptiste
3. Cristian Brown
4. Jorge Lopez
5. Genesis Perozo

Thank you for your support — let's make this a great one! 💛🖤🐺`
  },
  {
    id: 1,
    date: "2026-01-15",
    title: "Welcome to the 2026 Season!",
    content: "We're excited to announce our transition to Wellington Wolves 17u Elite as a Puma NXTpro team! This season brings new opportunities for high-level competition and exposure across the country.",
    category: "Team News"
  },
  {
    id: 2,
    date: "2026-01-20",
    title: "2026 Tournament Schedule Released",
    content: "Our 2026 tournament schedule is now available on the Travel page. This season includes multiple NXTpro circuit events, HOOPSEEN showcases, and the prestigious Best of the South tournament.",
    category: "Schedule"
  },
  {
    id: 3,
    date: "2026-01-28",
    title: "Hotel Booking for Providence Event",
    content: "Hotel booking is now open for our April 11-13 NXTpro event in Providence, RI. Please book through Event Connect using the link on the Travel page. Early booking is recommended!",
    category: "Travel"
  }
];

// Helper function to format date
export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

// Category colors for badges
export const categoryColors = {
  "Team News": { bg: "#001f3f", text: "#ffd700" },
  "Schedule": { bg: "#2e7d32", text: "#ffffff" },
  "Travel": { bg: "#1565c0", text: "#ffffff" },
  "Roster": { bg: "#7b1fa2", text: "#ffffff" },
  "General": { bg: "#616161", text: "#ffffff" }
};
