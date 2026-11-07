// Links and contact details used across the site.

export const siteName = 'Dr Matthew Hooton';

// Shown as text only, never as a mailto link.
export const emailText = 'mh2143 [at] cam.ac.uk';

// Both forms post here. The hidden subject field tells the two apart in the inbox.
export const formEndpoint = 'https://formspree.io/f/mjglegwj';

export const profiles = {
  ads: 'https://ui.adsabs.harvard.edu/search/fq=%7B!type%3Daqp%20v%3D%24fq_database%7D&fq_database=(database%3Aastronomy%20OR%20database%3Aphysics)&q=%20author%3A%22hooton%2C%20m.j.%22&sort=date%20desc%2C%20bibcode%20desc&p_=0',
  orcid: 'https://orcid.org/0000-0003-0030-332X',
  scholar: 'https://scholar.google.com/citations?user=wQCKRdgAAAAJ&hl=en',
  github: 'https://github.com/mhooton',
};

// Mentorship is left out of the main menu, which is for the academic pages. Families reach it
// directly, and it is linked from Home, Research and the footer.
export const nav = [
  { href: '/research/', label: 'Research' },
  { href: '/publications/', label: 'Publications' },
  { href: '/contact/', label: 'Contact' },
] as const;
