export const siteConfig = {
  name: 'Biodry India',
  title: 'Biodry India - Permanent, Non-Invasive Rising Damp Cure',
  description: 'Swiss-engineered, energy-free technology designed to permanently dry damp walls, eliminate black mold, and restore structural masonry without chemical injections.',
  url: 'https://biodry.in',
  ogImage: 'https://biodry.in/images/og-image.jpg',
  contacts: {
    email: 'contact@biodry.in',
    phone: '+91 98765 43210',
    address: {
      streetAddress: 'Swiss Tech Plaza, Block A',
      addressLocality: 'New Delhi',
      addressRegion: 'Delhi',
      postalCode: '110001',
      addressCountry: 'IN',
    },
  },
  faqs: [
    {
      question: 'How does the Biodry system work without electricity?',
      answer: 'Biodry operates by capturing the natural electromagnetic field lines of the earth. It reflects these waves with an inverted polarity, canceling out the capillary electrical charges in the wall that draw water upwards. Gravity then naturally pulls the water back down into the ground.',
    },
    {
      question: 'Is the Biodry system safe for humans and pets?',
      answer: 'Yes, absolutely. The device does not emit any harmful radiation or high-frequency waves. It operates entirely on natural resonance principles, making it 100% safe for humans, plants, pets, and historical structures.',
    },
    {
      question: 'How long does it take for a wall to dry completely?',
      answer: 'Drying times vary depending on the thickness of the masonry, severity of the dampness, and ventilation. On average, walls dry completely within 6 to 18 months, with significant progress visible after the first few months.',
    },
  ],
};

export type SiteConfig = typeof siteConfig;
