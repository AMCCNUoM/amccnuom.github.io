// Shared data + palette for the AMCCN site directions.

// Themes in alphabetical order. Each carries a list of associated labs with
// placeholder external URLs — replace `url` with real lab pages later.
const AMCCN_THEMES = [
  { id: 'action',       title: 'Action',                  blurb: 'How the brain plans, executes and refines movement.',
    description: 'Research in this theme investigates...',
    labs: [
      { name: 'Lab 1', lead: 'Dr X', url: '#action-lab-1' },
      { name: 'Lab 2', lead: 'Dr Y', url: '#action-lab-2' },
      { name: 'Lab 3', lead: 'Dr Z', url: '#action-lab-3' },
    ] },
  { id: 'attention',    title: 'Attention',               blurb: 'How we select what to focus on, and what not.',
    description: 'Research in this theme investigates...',
    labs: [
      { name: 'Lab 1', lead: 'Dr X', url: '#attention-lab-1' },
      { name: 'Lab 2', lead: 'Dr Y', url: '#attention-lab-2' },
      { name: 'Lab 3', lead: 'Dr Z', url: '#attention-lab-3' },
    ] },
  { id: 'modelling',    title: 'Computational modelling', blurb: 'Mathematical accounts of how cognition is implemented neurally.',
    description: 'Research in this theme investigates...',
    labs: [
      { name: 'Lab 1', lead: 'Dr X', url: '#modelling-lab-1' },
      { name: 'Lab 2', lead: 'Dr Y', url: '#modelling-lab-2' },
      { name: 'Lab 3', lead: 'Dr Z', url: '#modelling-lab-3' },
    ] },
  { id: 'decision',     title: 'Decision making',         blurb: 'Weighing choices and committing to a course of action.',
    description: 'Research in this theme investigates...',
    labs: [
      { name: 'Lab 1', lead: 'Dr X', url: '#decision-lab-1' },
      { name: 'Lab 2', lead: 'Dr Y', url: '#decision-lab-2' },
      { name: 'Lab 3', lead: 'Dr Z', url: '#decision-lab-3' },
    ] },
  { id: 'xr',           title: 'Extended reality',        blurb: 'Studying the brain in immersive virtual environments.',
    description: 'Research in this theme investigates...',
    labs: [
      { name: 'Lab 1', lead: 'Dr X', url: '#xr-lab-1' },
      { name: 'Lab 2', lead: 'Dr Y', url: '#xr-lab-2' },
      { name: 'Lab 3', lead: 'Dr Z', url: '#xr-lab-3' },
    ] },
  { id: 'language',     title: 'Language',                blurb: 'How we speak, read, and understand.',
    description: 'Research in this theme investigates...',
    labs: [
      { name: 'Lab 1', lead: 'Dr X', url: '#language-lab-1' },
      { name: 'Lab 2', lead: 'Dr Y', url: '#language-lab-2' },
      { name: 'Lab 3', lead: 'Dr Z', url: '#language-lab-3' },
    ] },
  { id: 'memory',       title: 'Memory',                  blurb: 'Encoding, storing, and retrieving events.',
    description: 'Research in this theme investigates...',
    labs: [
      { name: 'Lab 1', lead: 'Dr X', url: '#memory-lab-1' },
      { name: 'Lab 2', lead: 'Dr Y', url: '#memory-lab-2' },
      { name: 'Lab 3', lead: 'Dr Z', url: '#memory-lab-3' },
    ] },
  { id: 'imaging',      title: 'Neuroimaging',            blurb: 'Looking inside the working brain with MRI and EEG.',
    description: 'Research in this theme investigates...',
    labs: [
      { name: 'Lab 1', lead: 'Dr X', url: '#imaging-lab-1' },
      { name: 'Lab 2', lead: 'Dr Y', url: '#imaging-lab-2' },
      { name: 'Lab 3', lead: 'Dr Z', url: '#imaging-lab-3' },
    ] },
  { id: 'modulation',   title: 'Neuromodulation',         blurb: 'Modulating and stimulating brain activity with TMS, tDCS and TI.',
    description: 'Research in this theme investigates...',
    labs: [
      { name: 'Lab 1', lead: 'Dr X', url: '#modulation-lab-1' },
      { name: 'Lab 2', lead: 'Dr Y', url: '#modulation-lab-2' },
      { name: 'Lab 3', lead: 'Dr Z', url: '#modulation-lab-3' },
    ] },
  { id: 'perception',   title: 'Perception',              blurb: 'How the senses build our experience of the world.',
    description: 'Research in this theme investigates...',
    labs: [
      { name: 'Lab 1', lead: 'Dr X', url: '#perception-lab-1' },
      { name: 'Lab 2', lead: 'Dr Y', url: '#perception-lab-2' },
      { name: 'Lab 3', lead: 'Dr Z', url: '#perception-lab-3' },
    ] },
  { id: 'physiology',   title: 'Physiological measures',  blurb: 'Eye, heart, and skin as windows to the mind.',
    description: 'Research in this theme investigates...',
    labs: [
      { name: 'Lab 1', lead: 'Dr X', url: '#physiology-lab-1' },
      { name: 'Lab 2', lead: 'Dr Y', url: '#physiology-lab-2' },
      { name: 'Lab 3', lead: 'Dr Z', url: '#physiology-lab-3' },
    ] },
  { id: 'translational',title: 'Translational work',      blurb: 'Carrying lab findings into clinics and communities.',
    description: 'Research in this theme investigates...',
    labs: [
      { name: 'Lab 1', lead: 'Dr X', url: '#translational-lab-1' },
      { name: 'Lab 2', lead: 'Dr Y', url: '#translational-lab-2' },
      { name: 'Lab 3', lead: 'Dr Z', url: '#translational-lab-3' },
    ] },
];

// Palette options. Each is { name, ink, paper, paper2, rule, accent, soft }.
//   ink     — primary forest tone (headers, headlines)
//   paper   — main background (ivory)
//   paper2  — secondary surface (cards, alt sections)
//   rule    — hairline rule colour
//   accent  — small punch of colour for numerals / arrows
//   soft    — desaturated text (captions, meta)
const AMCCN_PALETTES = {
  forest: {
    name: 'Forest',
    ink:    '#1f3a2c',
    paper:  '#f6f1e6',
    paper2: '#ede5d2',
    rule:   '#cdc3a8',
    accent: '#7a3b1f',
    soft:   '#5e5746',
    body:   '#2c2a23',
  },
  moss: {
    name: 'Moss',
    ink:    '#3e5a3a',
    paper:  '#f4eedf',
    paper2: '#e8dfc7',
    rule:   '#c9bf9f',
    accent: '#8a5a2e',
    soft:   '#5f5841',
    body:   '#332f24',
  },
  pine: {
    name: 'Pine',
    ink:    '#10241b',
    paper:  '#f1ece0',
    paper2: '#e2dac6',
    rule:   '#b6ac90',
    accent: '#5d3320',
    soft:   '#4d4737',
    body:   '#1f1d18',
  },
  olive: {
    name: 'Olive',
    ink:    '#4a4a23',
    paper:  '#f3ecd6',
    paper2: '#e6dcbd',
    rule:   '#bfb287',
    accent: '#7a4a25',
    soft:   '#615a3d',
    body:   '#2b2818',
  },
  monograph: {
  name: 'Monograph',
  ink:    '#1d2a2e',
  paper:  '#f1ead6',
  paper2: '#e6dcc0',
  rule:   '#b8a980',
  accent: '#6e2a23',
  soft:   '#6b6253',
  body:   '#2a241c',
  },
};

// Tiny SVG striped-placeholder builder — pass label + dims, drop in as background.
function StripedPlaceholder({ label, w = 'auto', h = 'auto', tone = 'paper2', palette, style }) {
  const p = palette || AMCCN_PALETTES.forest;
  const fill = tone === 'ink' ? p.ink : p.paper2;
  const fg = tone === 'ink' ? p.paper : p.ink;
  return (
    <div style={{
      position: 'relative', width: w, height: h, overflow: 'hidden',
      background: `repeating-linear-gradient(135deg, ${fill} 0 8px, ${tone === 'ink' ? '#000a' : p.rule} 8px 9px)`,
      border: `1px solid ${p.rule}`,
      ...style,
    }}>
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace',
        fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase',
        color: fg,
        background: tone === 'ink'
          ? 'linear-gradient(0deg, rgba(31,58,44,.6), rgba(31,58,44,.6))'
          : 'linear-gradient(0deg, rgba(246,241,230,.55), rgba(246,241,230,.55))',
      }}>
        <span style={{ padding: '4px 10px', background: tone === 'ink' ? p.ink : p.paper, border: `1px solid ${p.rule}`, fontWeight: 500 }}>
          {label}
        </span>
      </div>
    </div>
  );
}

const AMCCN_NAV = [
  { id: 'home',         label: 'Home' },
  { id: 'research',     label: 'Research' },
  { id: 'training',     label: 'Training' },
  { id: 'facilities',   label: 'Facilities' },
  { id: 'engagement',   label: 'Public engagement' },
];

Object.assign(window, { AMCCN_THEMES, AMCCN_PALETTES, AMCCN_NAV, StripedPlaceholder });
