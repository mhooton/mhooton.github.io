// Paper lists for Home and Publications. Links go to ADS where the old site had one,
// otherwise to the DOI, or to arXiv for a preprint.

export interface Paper {
  title: string;
  /** Short author list, as it appears in the citation line. */
  authors: string;
  journal: string;
  year: number;
  url: string;
  firstAuthor?: boolean;
}

// Papers I led or co-led. The first four also appear on Home.
export const ledPapers: Paper[] = [
  {
    title:
      'Spi-OPS: Spitzer and CHEOPS confirm the near-polar orbit of MASCARA-1 b and reveal a hint of dayside reflection',
    authors: 'Hooton, Hoyer, Kitzmann et al.',
    journal: 'Astronomy & Astrophysics',
    year: 2022,
    url: 'https://ui.adsabs.harvard.edu/abs/2022A%26A...658A..75H',
    firstAuthor: true,
  },
  {
    title: 'JWST NIRSpec finds no clear signs of an atmosphere on TOI-1685 b',
    authors: 'Fisher, Hooton, Gressier et al.',
    journal: 'Monthly Notices of the RAS',
    year: 2026,
    url: 'https://ui.adsabs.harvard.edu/abs/2026MNRAS.545f2187F',
  },
  {
    title: 'TOI-2407 b: a warm Neptune in the desert',
    authors: 'Janó Muñoz, Hooton, Pedersen et al.',
    journal: 'Monthly Notices of the RAS',
    year: 2025,
    url: 'https://ui.adsabs.harvard.edu/abs/2025MNRAS.541..630J',
  },
  {
    title: 'Storms or systematics? The changing secondary eclipse depth of WASP-12b',
    authors: 'Hooton, de Mooij, Watson et al.',
    journal: 'Monthly Notices of the RAS',
    year: 2019,
    url: 'https://ui.adsabs.harvard.edu/abs/2019MNRAS.486.2397H',
    firstAuthor: true,
  },
  {
    title: 'A ground-based near-ultraviolet secondary eclipse observation of KELT-9b',
    authors: 'Hooton, Watson, de Mooij et al.',
    journal: 'The Astrophysical Journal Letters',
    year: 2018,
    url: 'https://ui.adsabs.harvard.edu/abs/2018ApJ...869L..25H',
    firstAuthor: true,
  },
  {
    title: 'The atmosphere and architecture of WASP-189 b probed by its CHEOPS phase curve',
    authors: 'Deline, Hooton, Lendl et al.',
    journal: 'Astronomy & Astrophysics',
    year: 2022,
    url: 'https://ui.adsabs.harvard.edu/abs/2022A%26A...659A..74D',
  },
  {
    title:
      'TOI-1685 b is a hot rocky super-Earth: updates to the stellar and planet parameters of a popular JWST Cycle 2 target',
    authors: 'Burt, Hooton, Mamajek et al.',
    journal: 'The Astrophysical Journal Letters',
    year: 2024,
    url: 'https://doi.org/10.3847/2041-8213/ad5b52',
  },
  {
    title:
      'On-sky performance and prospects of near-infrared CMOS detectors in exoplanet detection: first year of SPIRIT',
    authors: 'Janó Muñoz, Hooton, Pedersen et al.',
    journal: 'arXiv preprint',
    year: 2026,
    url: 'https://arxiv.org/abs/2610.19902',
  },
];

export const selectedCollaborations: Paper[] = [
  {
    title:
      'Gas-depleted planet formation occurred in the four-planet system around the red dwarf LHS 1903',
    authors: 'Wilson et al.',
    journal: 'Science',
    year: 2026,
    url: 'https://ui.adsabs.harvard.edu/abs/2026Sci...392l2348W',
  },
  {
    title:
      'Detection of an Earth-sized exoplanet orbiting the nearby ultracool dwarf star SPECULOOS-3',
    authors: 'Gillon et al.',
    journal: 'Nature Astronomy',
    year: 2024,
    url: 'https://ui.adsabs.harvard.edu/abs/2024NatAs...8..865G',
  },
  {
    title: 'A resonant sextuplet of sub-Neptunes transiting the bright star HD 110067',
    authors: 'Luque et al.',
    journal: 'Nature',
    year: 2023,
    url: 'https://ui.adsabs.harvard.edu/abs/2023Natur.623..932L',
  },
  {
    title:
      'Transit detection of the long-period volatile-rich super-Earth ν² Lupi d with CHEOPS',
    authors: 'Delrez et al.',
    journal: 'Nature Astronomy',
    year: 2021,
    url: 'https://ui.adsabs.harvard.edu/abs/2021NatAs...5..775D',
  },
  {
    title: 'Six transiting planets and a chain of Laplace resonances in TOI-178',
    authors: 'Leleu et al.',
    journal: 'Astronomy & Astrophysics',
    year: 2021,
    url: 'https://ui.adsabs.harvard.edu/abs/2021A%26A...649A..26L',
  },
];

// Shown on Home ("All 86 papers on NASA ADS").
export const paperCount = 86;
