// Direction 1 — "Reading Room"
// Classic, centered, Oxbridge-restrained. EB Garamond + Source Sans 3.

function ReadingRoom({ palette: p }) {
  const [page, setPage] = React.useState('home');
  const [themeId, setThemeId] = React.useState(null);
  const goPage = (id) => { setThemeId(null); setPage(id); };
  const goTheme = (id) => { setThemeId(id); };
  const activeTheme = themeId ? AMCCN_THEMES.find(t => t.id === themeId) : null;
  const FONT_SERIF = '"EB Garamond", "Source Serif 4", Garamond, "Times New Roman", serif';
  const FONT_SANS  = '"Source Sans 3", "Helvetica Neue", Helvetica, Arial, sans-serif';
  const FONT_MONO  = '"JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace';

  const baseStyle = {
    width: '100%', minHeight: '100vh', overflow: 'visible',
    background: p.paper, color: p.body,
    fontFamily: FONT_SANS, fontSize: 15, lineHeight: 1.55,
    displa// Shared data + palette for the AMCCN site directions.

// Themes in alphabetical order. Each carries a list of associated labs, drawn
// from the AMCCN labs/PIs list. URLs remain placeholders until lab pages are added.
const AMCCN_THEMES = [
  { id: 'action',       title: 'Action',                  blurb: 'How the brain plans, executes and refines movement.',
    description: 'Research in this theme spans the planning, execution and adaptive refinement of movement — from reaching and grasping in healthy adults to motor recovery after stroke. Methods include kinematic recording, EMG, TMS, and concurrent imaging during action.',
    labs: [
      { name: 'Perception, Action &amp; Decision Lab (PADLab)', lead: 'Dr George Farmer', url: '#action-padlab' },
      { name: 'Body Eyes and Movement Lab (BEAMLab)', lead: 'Prof Ellen Poliakoff', url: '#action-beamlab-poliakoff' },
      { name: 'Body Eyes and Movement Lab (BEAMLab)', lead: 'Prof Emma Gowen', url: '#action-beamlab-gowen' },
    ] },
  { id: 'attention',    title: 'Attention',               blurb: 'How we select what to focus on, and ignore what we don\u2019t.',
    description: 'Centre attention research investigates how the brain selects between competing inputs, sustains focus over time, and recovers from distraction — with implications for education, ageing, and clinical attention disorders.',
    labs: [
      { name: 'Perception, Action &amp; Decision Lab (PADLab)', lead: 'Dr George Farmer', url: '#attention-padlab' },
      { name: 'M-Eye Lab (Manchester-Eye lab)', lead: 'Dr Johan Hulleman', url: '#attention-m-eye-lab' },
      { name: 'Memory Mechanisms &amp; Neuropsychology Lab (MMN Lab)', lead: 'Dr Alex Kafkas', url: '#attention-mmn-lab' },
      { name: 'Memory and Cognitive Aging Research Unit (MACARU)', lead: 'Prof Daniela Montaldi', url: '#attention-macaru' },
      { name: 'NINS Lab - Non-Invasive Neural Stimulation Lab', lead: 'Dr Gorana Pobric', url: '#attention-nins-lab' },
      { name: 'Body Eyes and Movement Lab (BEAMLab)', lead: 'Prof Ellen Poliakoff', url: '#attention-beamlab-poliakoff' },
      { name: 'Body Eyes and Movement Lab (BEAMLab)', lead: 'Prof Emma Gowen', url: '#attention-beamlab-gowen' },
    ] },
  { id: 'modelling',    title: 'Computational modelling', blurb: 'Mathematical accounts of how cognition could work.',
    description: 'Computational research at the Centre develops and tests formal models of perception, learning, memory and decision making — drawing on Bayesian inference, reinforcement learning, deep networks and dynamical systems.',
    labs: [
      { name: 'Perception, Action &amp; Decision Lab (PADLab)', lead: 'Dr George Farmer', url: '#modelling-padlab' },
      { name: 'Dynamic &amp; Adaptive Memory Lab (DAMLab)', lead: 'Dr Darya Frank', url: '#modelling-damlab' },
      { name: 'Studying Plasticity in Nuerodevelopment Lab (SPiN-LAB)', lead: 'Dr Caroline Lea-Carnall', url: '#modelling-spin-lab' },
      { name: 'Neuroimaging and modelling Group (NIMO)', lead: 'Dr William Lloyd', url: '#modelling-nimo-lloyd' },
      { name: 'Memory and Cognitive Aging Research Unit (MACARU)', lead: 'Prof Daniela Montaldi', url: '#modelling-macaru' },
      { name: 'Modelling, Imaging, Structure and Cognition (MISC) Lab', lead: 'Dr Nils Muhlert', url: '#modelling-misc-lab' },
      { name: 'Neuroimaging and modelling Group (NIMO)', lead: 'Prof Laura Parkes', url: '#modelling-nimo-parkes' },
    ] },
  { id: 'decision',     title: 'Decision making',         blurb: 'Weighing choices and committing to a course of action.',
    description: 'Decision-making research at AMCCN looks at how people and animals integrate evidence, weigh outcomes against risks, and commit to action — under uncertainty, time pressure, fatigue and clinical disorder.',
    labs: [
      { name: 'Perception, Action &amp; Decision Lab (PADLab)', lead: 'Dr George Farmer', url: '#decision-padlab' },
      { name: 'NINS Lab - Non-Invasive Neural Stimulation Lab', lead: 'Dr Gorana Pobric', url: '#decision-nins-lab' },
    ] },
  { id: 'xr',           title: 'Extended reality',        blurb: 'Studying the brain inside immersive virtual environments.',
    description: 'The XR theme runs experiments inside head-mounted virtual and augmented environments, with concurrent eye-tracking, motion capture, EEG and physiological measures. Applications include navigation, rehabilitation, and naturalistic memory research.',
    labs: [
      { name: 'Dynamic &amp; Adaptive Memory Lab (DAMLab)', lead: 'Dr Darya Frank', url: '#xr-damlab' },
      { name: 'Memory and Cognitive Aging Research Unit (MACARU)', lead: 'Prof Daniela Montaldi', url: '#xr-macaru' },
    ] },
  { id: 'language',     title: 'Language',                blurb: 'The systems that let us speak, read, and understand.',
    description: 'Language research at the Centre covers reading, listening and conversation across the lifespan — from early word-learning to language change in older age and aphasia. Methods range from naturalistic recording to MEG and intracranial work with clinical partners.',
    labs: [
      { name: 'NINS Lab - Non-Invasive Neural Stimulation Lab', lead: 'Dr Gorana Pobric', url: '#language-nins-lab' },
      { name: 'Multimodal Neuroimaging and Memory Lab &amp; EEG Facility', lead: 'Dr Jason Taylor', url: '#language-multimodal-neuroimaging-memory-lab' },
    ] },
  { id: 'memory',       title: 'Memory',                  blurb: 'Encoding, storing, and retrieving the events of a life.',
    description: 'Memory is a flagship strand of Centre research, in honour of Andrew Mayes himself. Work spans episodic and semantic memory, sleep-dependent consolidation, working memory, and the memory changes that accompany ageing and disease.',
    labs: [
      { name: 'Dynamic &amp; Adaptive Memory Lab (DAMLab)', lead: 'Dr Darya Frank', url: '#memory-damlab' },
      { name: 'Memory Mechanisms &amp; Neuropsychology Lab (MMN Lab)', lead: 'Dr Alex Kafkas', url: '#memory-mmn-lab' },
      { name: 'Memory and Cognitive Aging Research Unit (MACARU)', lead: 'Prof Daniela Montaldi', url: '#memory-macaru' },
      { name: 'NINS Lab - Non-Invasive Neural Stimulation Lab', lead: 'Dr Gorana Pobric', url: '#memory-nins-lab' },
      { name: 'Multimodal Neuroimaging and Memory Lab &amp; EEG Facility', lead: 'Dr Jason Taylor', url: '#memory-multimodal-neuroimaging-memory-lab' },
    ] },
  { id: 'imaging',      title: 'Neuroimaging',            blurb: 'Looking inside the working brain with MRI, MEG and EEG.',
    description: 'The neuroimaging theme develops and applies methods across MRI (3T &amp; 7T), MEG and EEG. The Centre operates two research-dedicated scanners and supports method development alongside applied imaging across all twelve themes.',
    labs: [
      { name: 'Dynamic &amp; Adaptive Memory Lab (DAMLab)', lead: 'Dr Darya Frank', url: '#imaging-damlab' },
      { name: 'Memory Mechanisms &amp; Neuropsychology Lab (MMN Lab)', lead: 'Dr Alex Kafkas', url: '#imaging-mmn-lab' },
      { name: 'Studying Plasticity in Nuerodevelopment Lab (SPiN-LAB)', lead: 'Dr Caroline Lea-Carnall', url: '#imaging-spin-lab' },
      { name: 'Neuroimaging and modelling Group (NIMO)', lead: 'Dr William Lloyd', url: '#imaging-nimo-lloyd' },
      { name: 'Memory and Cognitive Aging Research Unit (MACARU)', lead: 'Prof Daniela Montaldi', url: '#imaging-macaru' },
      { name: 'Modelling, Imaging, Structure and Cognition (MISC) Lab', lead: 'Dr Nils Muhlert', url: '#imaging-misc-lab' },
      { name: 'Neuroimaging and modelling Group (NIMO)', lead: 'Prof Laura Parkes', url: '#imaging-nimo-parkes' },
      { name: 'Multimodal Neuroimaging and Memory Lab &amp; EEG Facility', lead: 'Dr Jason Taylor', url: '#imaging-multimodal-neuroimaging-memory-lab' },
    ] },
  { id: 'modulation',   title: 'Neuromodulation',         blurb: 'Gently nudging brain activity with TMS, tDCS and ultrasound.',
    description: 'Centre researchers use TMS, tDCS and transcranial ultrasound to test causal hypotheses about brain function and to develop new clinical protocols. Many studies pair stimulation with concurrent MRI, MEG or EEG.',
    labs: [
      { name: 'Studying Plasticity in Nuerodevelopment Lab (SPiN-LAB)', lead: 'Dr Caroline Lea-Carnall', url: '#modulation-spin-lab' },
      { name: 'NINS Lab - Non-Invasive Neural Stimulation Lab', lead: 'Dr Gorana Pobric', url: '#modulation-nins-lab' },
      { name: 'Multimodal Neuroimaging and Memory Lab &amp; EEG Facility', lead: 'Dr Jason Taylor', url: '#modulation-multimodal-neuroimaging-memory-lab' },
    ] },
  { id: 'perception',   title: 'Perception',              blurb: 'How the senses build our experience of the world.',
    description: 'Perception research at AMCCN spans vision, hearing, touch and the multisensory integration that binds them. Studies range from low-level psychophysics to naturalistic perception in everyday environments.',
    labs: [
      { name: 'Perception, Action &amp; Decision Lab (PADLab)', lead: 'Dr George Farmer', url: '#perception-padlab' },
      { name: 'M-Eye Lab (Manchester-Eye lab)', lead: 'Dr Johan Hulleman', url: '#perception-m-eye-lab' },
      { name: 'NINS Lab - Non-Invasive Neural Stimulation Lab', lead: 'Dr Gorana Pobric', url: '#perception-nins-lab' },
      { name: 'Body Eyes and Movement Lab (BEAMLab)', lead: 'Prof Ellen Poliakoff', url: '#perception-beamlab-poliakoff' },
      { name: 'Body Eyes and Movement Lab (BEAMLab)', lead: 'Prof Emma Gowen', url: '#perception-beamlab-gowen' },
    ] },
  { id: 'physiology',   title: 'Physiological measures',  blurb: 'Heart, eye, sweat and skin as windows on the mind.',
    description: 'This theme uses peripheral physiological signals — heart rate variability, pupillometry, galvanic skin response, respiration — to index cognitive and emotional states, often in combination with central neural measures.',
    labs: [
      { name: 'Perception, Action &amp; Decision Lab (PADLab)', lead: 'Dr George Farmer', url: '#physiology-padlab' },
      { name: 'Dynamic &amp; Adaptive Memory Lab (DAMLab)', lead: 'Dr Darya Frank', url: '#physiology-damlab' },
      { name: 'Memory Mechanisms &amp; Neuropsychology Lab (MMN Lab)', lead: 'Dr Alex Kafkas', url: '#physiology-mmn-lab' },
      { name: 'Neuroimaging and modelling Group (NIMO)', lead: 'Dr William Lloyd', url: '#physiology-nimo-lloyd' },
      { name: 'Memory and Cognitive Aging Research Unit (MACARU)', lead: 'Prof Daniela Montaldi', url: '#physiology-macaru' },
      { name: 'Neuroimaging and modelling Group (NIMO)', lead: 'Prof Laura Parkes', url: '#physiology-nimo-parkes' },
      { name: 'Neuroimaging and modelling Group (NIMO)', lead: 'Dr Andy Tyler', url: '#physiology-nimo-tyler' },
    ] },
  { id: 'translational',title: 'Translational work',      blurb: 'Carrying lab findings into clinics and communities.',
    description: 'The translational theme moves Centre science into NHS pathways and community settings — including memory-assessment clinics, stroke rehabilitation services, and assistive technology for everyday life.',
    labs: [
      { name: 'Studying Plasticity in Nuerodevelopment Lab (SPiN-LAB)', lead: 'Dr Caroline Lea-Carnall', url: '#translational-spin-lab' },
      { name: 'Neuroimaging and modelling Group (NIMO)', lead: 'Dr William Lloyd', url: '#translational-nimo-lloyd' },
      { name: 'Modelling, Imaging, Structure and Cognition (MISC) Lab', lead: 'Dr Nils Muhlert', url: '#translational-misc-lab' },
      { name: 'Neuroimaging and modelling Group (NIMO)', lead: 'Prof Laura Parkes', url: '#translational-nimo-parkes' },
      { name: 'NINS Lab - Non-Invasive Neural Stimulation Lab', lead: 'Dr Gorana Pobric', url: '#translational-nins-lab' },
      { name: 'Body Eyes and Movement Lab (BEAMLab)', lead: 'Prof Ellen Poliakoff', url: '#translational-beamlab-poliakoff' },
      { name: 'Body Eyes and Movement Lab (BEAMLab)', lead: 'Prof Emma Gowen', url: '#translational-beamlab-gowen' },
      { name: 'Multimodal Neuroimaging and Memory Lab &amp; EEG Facility', lead: 'Dr Jason Taylor', url: '#translational-multimodal-neuroimaging-memory-lab' },
      { name: 'Neuroimaging and modelling Group (NIMO)', lead: 'Dr Andy Tyler', url: '#translational-nimo-tyler' },
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
y: 'flex', flexDirection: 'column',
  };

  // ─── HEADER ─────────────────────────────────────────────────
  const Header = () => (
    <header data-screen-label={`Reading Room · ${page}`} style={{ borderBottom: `1px solid ${p.rule}`, background: p.paper }}>
      {/* Top bar with crest mark */}
      <div style={{ background: p.ink, color: p.paper, padding: '8px 0', textAlign: 'center', fontFamily: FONT_MONO, fontSize: 10.5, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
        University of Manchester &nbsp;•&nbsp; Faculty of Biology, Medicine and Health
      </div>
      <div style={{ padding: '36px 80px 18px', textAlign: 'center' }}>
        {/* Crest */}
        <div aria-hidden style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
            <circle cx="22" cy="22" r="21" stroke={p.ink} strokeWidth="1"/>
            <text x="22" y="20" textAnchor="middle" fontFamily={FONT_SERIF} fontSize="14" fontStyle="italic" fill={p.ink}>AM</text>
            <text x="22" y="32" textAnchor="middle" fontFamily={FONT_SERIF} fontSize="9" fill={p.ink} letterSpacing="1">CCN</text>
          </svg>
        </div>
        <div style={{ fontFamily: FONT_SERIF, fontSize: 26, fontWeight: 500, color: p.ink, letterSpacing: '0.005em' }}>
          Andrew Mayes Centre
        </div>
        <div style={{ fontFamily: FONT_SERIF, fontSize: 24, color: p.ink, marginTop: 2 }}>
          for Cognitive Neuroscience
        </div>
      </div>
      {/* Nav */}
      <nav style={{ borderTop: `1px solid ${p.rule}`, padding: '14px 0', display: 'flex', justifyContent: 'center', gap: 44, fontFamily: FONT_SANS, fontSize: 12.5, letterSpacing: '0.16em', textTransform: 'uppercase' }}>
        {AMCCN_NAV.map(n => {
          const isActive = !themeId && page === n.id;
          const isResearchAndTheme = themeId && n.id === 'research';
          const active = isActive || isResearchAndTheme;
          return (
            <a key={n.id} onClick={(e) => { e.preventDefault(); goPage(n.id); }} href={`#${n.id}`}
               style={{
                 cursor: 'pointer', color: active ? p.ink : p.soft,
                 textDecoration: 'none', borderBottom: active ? `1.5px solid ${p.ink}` : '1.5px solid transparent',
                 paddingBottom: 4, fontWeight: active ? 600 : 500,
               }}>{n.label}</a>
          );
        })}
      </nav>
    </header>
  );

  const Footer = () => (
    <footer style={{ marginTop: 'auto', borderTop: `1px solid ${p.rule}`, padding: '28px 80px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', fontSize: 12.5, color: p.soft, fontFamily: FONT_SANS }}>
      <div>
        <div style={{ fontFamily: FONT_SERIF, fontStyle: 'italic', color: p.ink, fontSize: 15, marginBottom: 6 }}>Andrew Mayes Centre for Cognitive Neuroscience</div>
        <div>Zochonis Building &nbsp;·&nbsp; Brunswick Street &nbsp;·&nbsp; Manchester M13 9PL</div>
        <div>amccn@placeholder.ac.uk &nbsp;·&nbsp; +44 (0)161 000 0000</div>
      </div>
      <div style={{ fontFamily: FONT_SERIF, fontStyle: 'italic', fontSize: 12, color: p.soft }}>
        Site developed by Darya Frank
      </div>
    </footer>
  );

  // ─── HOME ───────────────────────────────────────────────────
  const Home = () => (
    <div>
      {/* Intro */}
      <section style={{ padding: '56px 80px 28px', textAlign: 'center', maxWidth: 760, margin: '0 auto' }}>
        <div style={{ fontFamily: FONT_MONO, fontSize: 10.5, letterSpacing: '0.22em', textTransform: 'uppercase', color: p.accent, marginBottom: 18 }}>
        </div>
        <h1 style={{ fontFamily: FONT_SERIF, fontWeight: 400, fontSize: 44, lineHeight: 1.18, color: p.ink, margin: '0 0 20px', letterSpacing: '-0.005em' }}>
          Uncovering brain mechanisms in health and disease
        </h1>
        <p style={{ fontSize: 17, lineHeight: 1.7, color: p.body, fontFamily: FONT_SERIF, margin: 0 }}>
          We bring together scientists from different fields to ask how the human brain generates cognition, we develop methods to answer thees questions
          — and to translate what we learn into clinical and everyday benefit.
        </p>
      </section>

      {/* Themes */}
      <section style={{ padding: '32px 80px 40px' }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <h2 style={{ fontFamily: FONT_SERIF, fontStyle: 'italic', fontWeight: 400, fontSize: 26, color: p.ink, margin: 0 }}>
            What we work on
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: p.rule, border: `1px solid ${p.rule}` }}>
          {AMCCN_THEMES.map((t, i) => (
            <a key={t.id} href={`#${t.id}`} onClick={(e) => { e.preventDefault(); goTheme(t.id); }}
               style={{
                 background: p.paper, padding: '22px 20px 24px', textDecoration: 'none', color: 'inherit',
                 cursor: 'pointer', display: 'block', minHeight: 132, position: 'relative',
                 transition: 'background .15s',
               }}
               onMouseEnter={(e) => e.currentTarget.style.background = p.paper2}
               onMouseLeave={(e) => e.currentTarget.style.background = p.paper}>
              <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'baseline', marginBottom: 8 }}>
                <span style={{ fontFamily: FONT_SERIF, fontSize: 14, color: p.soft }}>→</span>
              </div>
              <div style={{ fontFamily: FONT_SERIF, fontSize: 21, color: p.ink, marginBottom: 6, lineHeight: 1.15 }}>
                {t.title}
              </div>
              <div style={{ fontSize: 12.5, color: p.body, lineHeight: 1.5 }}>
                {t.blurb}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Two-up: spotlight + figures */}
      <section style={{ padding: '24px 80px 56px', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 40, alignItems: 'flex-start' }}>
        <div>
          <div style={{ fontFamily: FONT_MONO, fontSize: 10.5, letterSpacing: '0.22em', textTransform: 'uppercase', color: p.soft, marginBottom: 12 }}>
            Spotlight · May 2026
          </div>
          <h3 style={{ fontFamily: FONT_SERIF, fontWeight: 400, fontSize: 24, color: p.ink, margin: '0 0 12px', lineHeight: 1.25 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </h3>
          <p style={{ fontSize: 14.5, color: p.body, margin: '0 0 14px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <a href="#" onClick={(e) => e.preventDefault()} style={{ fontFamily: FONT_MONO, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: p.accent, textDecoration: 'none', borderBottom: `1px solid ${p.accent}`, paddingBottom: 2 }}>
            Read the paper →
          </a>
        </div>
        <StripedPlaceholder label="Figure ·" h={200} palette={p} />
      </section>
    </div>
  );

  // ─── THEME DETAIL PAGE ───────────────────────────────────────
  const ThemePage = ({ theme, index }) => (
    <div>
      {/* Breadcrumb / back row */}
      <div style={{ padding: '24px 80px 0', maxWidth: 980, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: FONT_MONO, fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: p.soft }}>
        <a href="#home" onClick={(e) => { e.preventDefault(); goPage('home'); }}
           style={{ color: p.soft, textDecoration: 'none', cursor: 'pointer' }}>
          ← &nbsp; Home / Research themes
        </a>
      </div>

      {/* Hero */}
      <section style={{ padding: '32px 80px 24px', textAlign: 'center', maxWidth: 760, margin: '0 auto' }}>
        <div style={{ fontFamily: FONT_MONO, fontSize: 10.5, letterSpacing: '0.22em', textTransform: 'uppercase', color: p.accent, marginBottom: 14 }}>
          Research theme — {theme.title}
        </div>
        <h1 style={{ fontFamily: FONT_SERIF, fontWeight: 400, fontSize: 56, lineHeight: 1.05, color: p.ink, margin: '0 0 18px', letterSpacing: '-0.01em' }}>
          <em>{theme.title}</em>
        </h1>
        <p style={{ fontFamily: FONT_SERIF, fontSize: 19, lineHeight: 1.55, color: p.body, margin: 0 }}>
          {theme.blurb}
        </p>
      </section>

      {/* Description */}
      <section style={{ padding: '12px 80px 28px', maxWidth: 760, margin: '0 auto' }}>
        <p style={{ fontSize: 15.5, lineHeight: 1.7, color: p.body, fontFamily: FONT_SERIF, margin: 0, columnCount: 1 }}
           dangerouslySetInnerHTML={{ __html: theme.description }} />
      </section>

      {/* Labs */}
      <section style={{ padding: '12px 80px 24px', maxWidth: 980, margin: '0 auto' }}>
        <div style={{ borderTop: `1px solid ${p.rule}`, borderBottom: `1px solid ${p.rule}`, padding: '14px 0', textAlign: 'center', marginBottom: 18 }}>
          <div style={{ fontFamily: FONT_MONO, fontSize: 10.5, letterSpacing: '0.22em', textTransform: 'uppercase', color: p.soft, marginBottom: 4 }}>
            Laboratories &amp; groups working in this theme
          </div>
        </div>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {theme.labs.map((lab, i) => (
            <li key={i} style={{ borderBottom: `1px solid ${p.rule}` }}>
              <a href={lab.url} target="_blank" rel="noopener noreferrer"
                 style={{ display: 'grid', gridTemplateColumns: '60px 1fr 220px 30px', gap: 24, alignItems: 'baseline', padding: '20px 8px', textDecoration: 'none', color: 'inherit', cursor: 'pointer', transition: 'background .15s' }}
                 onMouseEnter={(e) => e.currentTarget.style.background = p.paper2}
                 onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                <span style={{ fontFamily: FONT_MONO, fontSize: 11, color: p.accent, letterSpacing: '0.08em' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span style={{ fontFamily: FONT_SERIF, fontSize: 22, color: p.ink, lineHeight: 1.2 }}
                      dangerouslySetInnerHTML={{ __html: lab.name }} />
                <span style={{ fontSize: 13.5, color: p.soft, fontStyle: 'italic', fontFamily: FONT_SERIF }}>
                  Led by {lab.lead}
                </span>
                <span aria-hidden style={{ textAlign: 'right', fontFamily: FONT_SERIF, color: p.soft, fontSize: 16 }}>↗</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Other themes nav */}
      <section style={{ padding: '24px 80px 40px', maxWidth: 980, margin: '0 auto', borderTop: `1px solid ${p.rule}`, marginTop: 12 }}>
        <div style={{ fontFamily: FONT_MONO, fontSize: 10.5, letterSpacing: '0.22em', textTransform: 'uppercase', color: p.soft, marginBottom: 14, textAlign: 'center' }}>
          Other research themes
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px 14px' }}>
          {AMCCN_THEMES.filter(t => t.id !== theme.id).map(t => (
            <a key={t.id} href={`#${t.id}`} onClick={(e) => { e.preventDefault(); goTheme(t.id); }}
               style={{ fontFamily: FONT_SERIF, fontSize: 15, color: p.ink, textDecoration: 'none', borderBottom: `1px solid ${p.rule}`, paddingBottom: 2, cursor: 'pointer' }}>
              {t.title}
            </a>
          ))}
        </div>
      </section>
    </div>
  );

  // ─── SUBPAGES (skeleton) ─────────────────────────────────────
  const PageHeader = ({ kicker, title, lede }) => (
    <section style={{ padding: '56px 80px 28px', textAlign: 'center', maxWidth: 760, margin: '0 auto' }}>
      <div style={{ fontFamily: FONT_MONO, fontSize: 10.5, letterSpacing: '0.22em', textTransform: 'uppercase', color: p.accent, marginBottom: 14 }}>
        {kicker}
      </div>
      <h1 style={{ fontFamily: FONT_SERIF, fontWeight: 400, fontSize: 40, lineHeight: 1.2, color: p.ink, margin: '0 0 16px' }}>
        {title}
      </h1>
      <p style={{ fontFamily: FONT_SERIF, fontSize: 17, lineHeight: 1.65, color: p.body, margin: 0 }}>
        {lede}
      </p>
    </section>
  );

  const SkeletonRows = ({ rows }) => (
    <section style={{ padding: '12px 80px 40px' }}>
      <div style={{ borderTop: `1px solid ${p.rule}` }}>
        {rows.map((r, i) => (
          <div key={i} style={{ borderBottom: `1px solid ${p.rule}`, padding: '22px 0', display: 'grid', gridTemplateColumns: '90px 1fr 1fr 60px', gap: 24, alignItems: 'baseline' }}>
            <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: p.accent, letterSpacing: '0.12em' }}>
              {String(i + 1).padStart(2, '0')}
            </div>
            <div style={{ fontFamily: FONT_SERIF, fontSize: 22, color: p.ink, lineHeight: 1.2 }}>{r.title}</div>
            <div style={{ fontSize: 13.5, color: p.body }}>{r.blurb}</div>
            <div style={{ textAlign: 'right', fontFamily: FONT_SERIF, color: p.soft }}>→</div>
          </div>
        ))}
      </div>
    </section>
  );

  const Research = () => (
    <div>
      <PageHeader
        kicker="Research"
        title="Twelve research themes"
        lede="Our research is organised across twelve themes. Click a theme to see the labs and groups working in that area." />
      <section style={{ padding: '12px 80px 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: p.rule, border: `1px solid ${p.rule}` }}>
          {AMCCN_THEMES.map((t, i) => (
            <a key={t.id} href={`#${t.id}`} onClick={(e) => { e.preventDefault(); goTheme(t.id); }}
               style={{
                 background: p.paper, padding: '22px 20px 24px', textDecoration: 'none', color: 'inherit',
                 cursor: 'pointer', display: 'block', minHeight: 132, position: 'relative',
                 transition: 'background .15s',
               }}
               onMouseEnter={(e) => e.currentTarget.style.background = p.paper2}
               onMouseLeave={(e) => e.currentTarget.style.background = p.paper}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
                <span style={{ fontFamily: FONT_MONO, fontSize: 10, letterSpacing: '0.12em', color: p.accent }}>
                  No. {String(i + 1).padStart(2, '0')}
                </span>
                <span style={{ fontFamily: FONT_SERIF, fontSize: 14, color: p.soft }}>→</span>
              </div>
              <div style={{ fontFamily: FONT_SERIF, fontSize: 21, color: p.ink, marginBottom: 6, lineHeight: 1.15 }}>
                {t.title}
              </div>
              <div style={{ fontSize: 12.5, color: p.body, lineHeight: 1.5 }}>
                {t.blurb}
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );

  const Training = () => (
    <div>
      <PageHeader
        kicker="Training"
        title="PhD, MSc and post&#8209;doctoral training"
        lede="We host one of the largest cohorts of cognitive-neuroscience graduate students in the UK, and welcome applications from researchers at every career stage." />
      <section style={{ padding: '12px 80px 28px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {[
          { kicker: 'Doctoral', title: 'PhD in Cognitive Neuroscience', body: 'A four-year structured programme with rotations across two laboratories and an integrated methods curriculum.' },
          { kicker: 'Masters',  title: 'MSc Mind &amp; Brain',              body: 'A taught year covering imaging, behaviour and computational methods, with a six-month research project.' },
          { kicker: 'Fellows',  title: 'Post-doctoral fellowships',     body: 'Independent fellowships hosted by Centre PIs, with mentoring, lab access and bridging support.' },
        ].map((c, i) => (
          <div key={i} style={{ border: `1px solid ${p.rule}`, padding: '22px 22px 24px', background: p.paper }}>
            <div style={{ fontFamily: FONT_MONO, fontSize: 10.5, letterSpacing: '0.22em', textTransform: 'uppercase', color: p.accent, marginBottom: 10 }}>{c.kicker}</div>
            <div style={{ fontFamily: FONT_SERIF, fontSize: 22, color: p.ink, marginBottom: 8 }} dangerouslySetInnerHTML={{ __html: c.title }} />
            <div style={{ fontSize: 13.5, color: p.body }} dangerouslySetInnerHTML={{ __html: c.body }} />
          </div>
        ))}
      </section>
      <section style={{ padding: '12px 80px 40px' }}>
        <StripedPlaceholder label="Photo · graduate cohort 2025" h={180} palette={p} />
      </section>
    </div>
  );

  const Facilities = () => (
    <div>
      <PageHeader
        kicker="Facilities"
        title="Imaging suites, labs &amp; testing rooms"
        lede="Centre researchers have shared access to MRI, MEG, EEG, eye-tracking, TMS, tDCS and a dedicated extended-reality suite, alongside behavioural testing rooms across two buildings." />
      <SkeletonRows rows={[
        { title: 'MRI',                    blurb: '2x 3T MRI scanners.' },
        { title: 'EEG',                    blurb: '3x EEG suites.' },
        { title: 'TMS / tDCS / TI', blurb: 'Non-invasive brain stimulation paired with concurrent imaging where required.' },
        { title: 'Extended-reality lab',   blurb: 'Wireless VR with motion tracking, and movement platforms' },
        { title: 'Physiological tracking', blurb: 'Eye-tracking, pupillometry, ECG and skin-conductance recording (SCR) for indexing cognitive and emotional state.' },
      ]} />
    </div>
  );

  const Engagement = () => (
    <div>
      <PageHeader
        kicker="Public engagement"
        title="Bringing the working brain into public view"
        lede="We run schools workshops, public lectures, festival events and citizen-science studies across Greater Manchester. Everyone is welcome — no prior knowledge required." />
      <section style={{ padding: '12px 80px 28px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
        {[
          { kicker: 'Schools',     title: 'Brain Days',           body: 'Half-day visits for Year 9–13 groups: live demos, hands-on exhibits, Q&amp;A with researchers.' },
          { kicker: 'Public',      title: 'AMCCN Evening Lectures', body: 'Termly free public lectures on memory, attention, action and the science of everyday mind.' },
          { kicker: 'Festivals',   title: 'Manchester Science Festival', body: 'Annual exhibits including the popular \u201cYour Brain on the Bus\u201d travelling lab.' },
          { kicker: 'Citizen sci', title: 'Studies you can join', body: 'Online and in-person studies open to anyone aged 6 and up. Contributions help advance the science.' },
        ].map((c, i) => (
          <div key={i} style={{ borderTop: `1px solid ${p.rule}`, padding: '20px 0' }}>
            <div style={{ fontFamily: FONT_MONO, fontSize: 10.5, letterSpacing: '0.22em', textTransform: 'uppercase', color: p.accent, marginBottom: 8 }}>{c.kicker}</div>
            <div style={{ fontFamily: FONT_SERIF, fontSize: 22, color: p.ink, marginBottom: 6 }}>{c.title}</div>
            <div style={{ fontSize: 13.5, color: p.body }} dangerouslySetInnerHTML={{ __html: c.body }} />
          </div>
        ))}
      </section>
      <section style={{ padding: '4px 80px 40px' }}>
        <StripedPlaceholder label="Photo · Brain Day 2025" h={180} palette={p} />
      </section>
    </div>
  );

  return (
    <div style={baseStyle}>
      <Header />
      <main style={{ flex: 1 }}>
        {activeTheme        && <ThemePage theme={activeTheme} index={AMCCN_THEMES.findIndex(t => t.id === activeTheme.id)} />}
        {!activeTheme && page === 'home'       && <Home />}
        {!activeTheme && page === 'research'   && <Research />}
        {!activeTheme && page === 'training'   && <Training />}
        {!activeTheme && page === 'facilities' && <Facilities />}
        {!activeTheme && page === 'engagement' && <Engagement />}
      </main>
      <Footer />
    </div>
  );
}

window.ReadingRoom = ReadingRoom;
