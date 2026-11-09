// Package names, public-facing prices and highlights transcribed from the
// reference screenshots supplied for this redesign. Itineraries below are
// original suggested day plans built around the routes/highlights visible in
// those screenshots; confirm operational details with the client before sale.
export const tourPackages = [
  {
    id: "kashmir-paradise-tour", name: "Kashmir Paradise Tour", tier: "Budget", duration: "6D / 5N", days: 6, price: 16900, originalPrice: 20000,
    route: "Srinagar – Gulmarg – Pahalgam", image: "/Images/dallake.jpg", save: "₹3,100",
    summary: "A classic first visit combining Srinagar's lakes and gardens with the meadows of Gulmarg and Pahalgam.",
    highlights: ["Shikara ride on Dal Lake", "Gulmarg meadow and optional Gondola", "Pahalgam valley and riverside scenery", "Mughal Gardens of Srinagar"],
    itinerary: [
      ["Arrival in Srinagar", "Meet the local team, transfer to your hotel or houseboat and enjoy a relaxed evening by Dal Lake."],
      ["Srinagar sightseeing", "Explore the Mughal Gardens and enjoy a Shikara ride on Dal Lake."],
      ["Srinagar to Gulmarg", "Travel to Gulmarg and spend time among its meadows and mountain views. Gondola and pony rides can be arranged optionally."],
      ["Gulmarg to Pahalgam", "Drive through the Kashmir countryside to Pahalgam and enjoy the Lidder riverside area."],
      ["Pahalgam exploration", "Discover the valley at a relaxed pace; local union excursions to Betaab or Aru Valley can be arranged separately."],
      ["Departure", "Return to Srinagar for your onward departure, subject to flight timing."]
    ]
  },
  {
    id: "best-of-kashmir-tour", name: "Best of Kashmir Tour", tier: "Premium", duration: "6D / 5N", days: 6, price: 20900, originalPrice: 25000,
    route: "Srinagar – Sonamarg – Gulmarg – Pahalgam", image: "/Images/sonamarg.jpg", save: "₹4,100", popular: true,
    summary: "A six-day valley sampler covering Srinagar, Sonamarg, Gulmarg and Pahalgam.",
    highlights: ["Four major Kashmir destinations in one trip", "Sonamarg and Thajiwas Glacier excursion", "Gulmarg meadow and Pahalgam valley", "Houseboat stay on Dal Lake"],
    itinerary: [
      ["Arrive in Srinagar", "Airport pickup, hotel or houseboat check-in and free time to settle in."],
      ["Srinagar city and Dal Lake", "Visit selected Mughal Gardens and enjoy a Shikara experience on Dal Lake."],
      ["Sonamarg excursion", "Explore Sonamarg's mountain scenery and the Thajiwas Glacier area. Pony or local transfers may be extra."],
      ["Gulmarg excursion", "Spend the day in Gulmarg's meadows with optional Gondola tickets and other activities."],
      ["Pahalgam excursion", "Visit Pahalgam and enjoy the Lidder Valley. Betaab and Aru Valley local transfers can be arranged separately."],
      ["Departure from Srinagar", "Transfer to Srinagar Airport for your onward journey."]
    ]
  },
  {
    id: "kashmir-honeymoon-tour", name: "Kashmir Honeymoon Tour", tier: "Luxury", duration: "7D / 6N", days: 7, price: 27900, originalPrice: 30000,
    route: "Srinagar – Pahalgam – Gulmarg – Sonamarg", image: "/Images/honeymoon.jpg", save: "₹2,100",
    summary: "A romantic Kashmir escape with scenic stays, a houseboat experience and time for memorable couple moments.",
    highlights: ["Romantic deluxe houseboat stay", "Candlelight dinner and Shikara experience", "Gulmarg Gondola option for two", "Sonamarg glacier excursion"],
    itinerary: [
      ["Arrival and romantic welcome", "Arrive in Srinagar, transfer to your stay and enjoy a relaxed evening together."],
      ["Srinagar and Dal Lake", "Explore the Mughal Gardens and enjoy a Shikara ride; planned honeymoon touches can be coordinated with the stay."],
      ["Srinagar to Pahalgam", "Travel to Pahalgam through scenic countryside and enjoy the riverside setting."],
      ["Pahalgam valley day", "Explore Pahalgam and its surrounding viewpoints; local valley transfers are subject to local arrangements."],
      ["Pahalgam to Gulmarg", "Continue to Gulmarg and enjoy the mountain resort atmosphere."],
      ["Gulmarg and Sonamarg experience", "Enjoy Gulmarg activities and the planned Sonamarg excursion according to road and weather conditions."],
      ["Departure", "Return to Srinagar Airport for your onward journey."]
    ]
  },
  {
    id: "charismatic-kashmir-tour", name: "Charismatic Kashmir Tour", tier: "Ultra-Luxury", duration: "6D / 5N", days: 6, price: 29900, originalPrice: 35000,
    route: "Srinagar – Pahalgam – Betaab & Aru Valley – Sonamarg", image: "/Images/pahalgam.jpg", save: "₹5,100",
    summary: "A premium-paced journey through Kashmir's celebrated valleys, with upgraded stays and scenic excursions.",
    highlights: ["Betaab and Aru Valley exploration", "Premium stays throughout", "Gulmarg Gondola and Khilanmarg options", "Sonamarg, the Valley of Gold"],
    itinerary: [
      ["Arrive in Srinagar", "Airport pickup, premium stay check-in and leisure time."],
      ["Srinagar highlights", "Explore the lakefront and selected Mughal Gardens, with a Shikara ride on Dal Lake."],
      ["Srinagar to Pahalgam", "Drive to Pahalgam and enjoy its riverside scenery."],
      ["Betaab and Aru Valley", "Explore the famous Pahalgam side valleys using local union transport where required."],
      ["Sonamarg excursion", "Enjoy the mountain landscapes of Sonamarg and the Thajiwas area, subject to weather and access."],
      ["Departure from Srinagar", "Return to Srinagar Airport for your onward flight."]
    ]
  },
  {
    id: "kashmir-angling-tour", name: "Kashmir Angling Tour", tier: "Premium", duration: "6D / 5N", days: 6, price: 20900, originalPrice: 25000,
    route: "Srinagar – Pahalgam – Sonamarg", image: "/Images/pahalgam.jpg", save: "₹4,100",
    summary: "A nature-focused break for travellers interested in Kashmir's trout streams and mountain landscapes.",
    highlights: ["Brown-trout angling around Lidder Valley", "Sindh Valley fishing experience", "Deluxe houseboat stays", "Trout season generally April–September; permits and access must be confirmed"],
    itinerary: [
      ["Arrival in Srinagar", "Arrive, check in and review the fishing plan and local conditions with the team."],
      ["Srinagar to Pahalgam", "Travel to Pahalgam and explore the Lidder riverside area."],
      ["Lidder Valley angling day", "Spend the day at approved fishing stretches, subject to permits, season and local regulations."],
      ["Pahalgam to Sonamarg", "Travel towards Sonamarg and enjoy the Sindh Valley scenery."],
      ["Sindh Valley angling and return", "Planned angling time at an authorised stretch, then return towards Srinagar."],
      ["Departure", "Transfer to Srinagar Airport for your onward journey."]
    ]
  },
  {
    id: "kashmir-family-tour", name: "Kashmir Family Tour", tier: "Premium", duration: "7D / 6N", days: 7, price: 35900, originalPrice: 40000,
    route: "Srinagar – Sonamarg – Pahalgam – Gulmarg", image: "/Images/family.jpg", save: "₹4,100",
    summary: "A family-friendly itinerary with a balanced mix of lakes, meadows, mountain excursions and relaxed travel days.",
    highlights: ["All-ages friendly itinerary", "Sonamarg Glacier and Thajiwas excursion", "Betaab Valley and Baisaran meadows", "Gulmarg Gondola and horse-riding options"],
    itinerary: [
      ["Arrival in Srinagar", "Airport pickup, check-in and time to rest after the journey."],
      ["Srinagar sightseeing", "Visit selected Mughal Gardens and enjoy Dal Lake and its Shikara experience."],
      ["Sonamarg excursion", "Explore Sonamarg and the Thajiwas Glacier area; local pony or union transport may cost extra."],
      ["Srinagar to Pahalgam", "Drive to Pahalgam and enjoy the valley surroundings."],
      ["Pahalgam family day", "Explore Betaab Valley and Baisaran options using local transport where required."],
      ["Pahalgam to Gulmarg", "Travel to Gulmarg for meadow views and optional Gondola or horse-riding activities."],
      ["Departure", "Return to Srinagar Airport for your onward journey."]
    ]
  },
  {
    id: "srinagar-gulmarg-getaway", name: "Srinagar Gulmarg Getaway", tier: "Budget", duration: "4D / 3N", days: 4, price: 11900, originalPrice: 14000,
    route: "Srinagar – Gulmarg", image: "/Images/gulmarg.jpg", save: "₹2,100",
    summary: "A short break built around Srinagar's lakes and gardens and a full-day visit to Gulmarg.",
    highlights: ["Perfect short weekend break", "Dal Lake Shikara ride", "Mughal Gardens of Srinagar", "Gulmarg meadow and Gondola option"],
    itinerary: [
      ["Arrival in Srinagar", "Airport transfer and check-in. Enjoy an evening Shikara ride on Dal Lake and an overnight stay in Srinagar."],
      ["Srinagar sightseeing", "Visit the Mughal Gardens, including Nishat, Shalimar and Chashme Shahi, with time for the old city if schedule permits."],
      ["Srinagar – Gulmarg – Srinagar", "Full-day excursion to Gulmarg and its flower meadows. Gondola cable car and pony rides are optional. Return to Srinagar."],
      ["Departure", "Breakfast and transfer to the airport."]
    ]
  },
  {
    id: "grand-kashmir-tour", name: "Grand Kashmir Tour", tier: "Ultra-Luxury", duration: "8D / 7N", days: 8, price: 34900, originalPrice: 40000,
    route: "Srinagar – Sonamarg – Gulmarg – Pahalgam – Doodhpathri", image: "/Images/doodhpathri.jpg", save: "₹5,100",
    summary: "An extended Kashmir journey combining the major valleys with the quieter meadows of Doodhpathri.",
    highlights: ["Four major valleys plus Doodhpathri", "Full seven-night grand itinerary", "Houseboat and premium hotel stays", "Gondola, glacier and meadow experiences"],
    itinerary: [
      ["Arrival in Srinagar", "Airport pickup, premium stay check-in and leisure time."],
      ["Srinagar and Dal Lake", "Explore selected Mughal Gardens and enjoy a Shikara ride."],
      ["Sonamarg excursion", "Spend the day among Sonamarg's mountain scenery and the Thajiwas area."],
      ["Srinagar to Gulmarg", "Travel to Gulmarg and enjoy its meadows, with optional Gondola activities."],
      ["Gulmarg to Pahalgam", "Continue to Pahalgam through scenic countryside and check in for your stay."],
      ["Pahalgam valley exploration", "Explore the Lidder Valley and optional local excursions to Betaab or Aru Valley."],
      ["Doodhpathri excursion", "Visit Doodhpathri's meadows and streams, then return to Srinagar."],
      ["Departure", "Transfer to Srinagar Airport for your onward journey."]
    ]
  }
];

export const commonInclusions = [
  "Accommodation as specified in the confirmed itinerary",
  "Breakfast and dinner where stated in the final booking confirmation",
  "Airport transfers and sightseeing transport as specified",
  "Driver allowance, fuel, tolls and parking for the agreed route",
  "On-trip assistance from the Tamjeed Tours team"
];
export const commonExclusions = [
  "Airfare or train tickets to and from Kashmir",
  "GST and other applicable taxes unless stated otherwise",
  "Lunch, snacks and meals not listed in the confirmed plan",
  "Gondola, pony rides, local union taxis and optional activities unless specifically included",
  "Entry fees, personal expenses, tips and travel insurance"
];
