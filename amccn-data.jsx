// Shared data + palette for the AMCCN site directions.

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
