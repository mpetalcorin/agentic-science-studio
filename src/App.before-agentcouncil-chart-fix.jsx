import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  FlaskConical,
  Network,
  Dna,
  Code2,
  Search,
  ShieldCheck,
  BarChart3,
  GitBranch,
  FileText,
  Activity,
  Sparkles,
  Sun,
  Moon,
  RefreshCw,
  CheckCircle2,
  AlertTriangle,
  Beaker,
  Eye,
  Pill,
  Database,
  Layers,
  Cpu,
  BookOpen,
  Workflow,
  Microscope,
  Atom,
  FlaskRound,
  Stethoscope,
  LineChart as LineChartIcon,
  Boxes,
  Bot,
  Gauge,
  GitCompare,
  TestTube2,
  Orbit,
  ScanSearch,
  Binary,
  CircuitBoard,
  Radar as RadarIcon,
  MicroscopeIcon,
  WandSparkles,
  MessageSquareText,
  TriangleAlert,
  ChevronRight,
  ClipboardCheck,
  ServerCog,
  Hospital,
  Sigma,
  NetworkIcon,
} from "lucide-react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  LineChart,
  Line,
  ScatterChart,
  Scatter,
  ZAxis,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const agentCards = [
  {
    name: "Robin Discovery Agent",
    subtitle: "Multi-agent scientific discovery",
    icon: FlaskConical,
    color: "from-emerald-300 via-cyan-300 to-sky-400",
    description:
      "Automates literature review, target mapping, candidate prioritisation, experiment planning, and validation loops for disease-focused discovery.",
    modules: ["Literature miner", "Target mapper", "Candidate ranker", "Assay planner"],
  },
  {
    name: "Co-Scientist Agent",
    subtitle: "Hypothesis generation and critique",
    icon: Brain,
    color: "from-violet-300 via-fuchsia-300 to-pink-400",
    description:
      "Generates, debates, ranks, refines, and stress-tests biomedical hypotheses before recommending experimental or computational next steps.",
    modules: ["Generator", "Critic", "Tournament", "Evolution"],
  },
  {
    name: "ERA Software Agent",
    subtitle: "Expert-level empirical software builder",
    icon: Code2,
    color: "from-orange-300 via-rose-300 to-red-400",
    description:
      "Writes and improves scientific software using benchmark-driven iteration, objective scoring, code review, and reproducibility checks.",
    modules: ["Code generator", "Benchmark engine", "Tree search", "Repro guard"],
  },
  {
    name: "Translational Review Agent",
    subtitle: "Safety, feasibility, and clinical logic",
    icon: Hospital,
    color: "from-blue-300 via-indigo-300 to-violet-400",
    description:
      "Checks disease relevance, clinical tractability, assay feasibility, safety risks, regulatory friction, and translational readiness.",
    modules: ["Safety triage", "Assay readiness", "Clinical path", "Risk register"],
  },
];

const advancedModules = [
  {
    title: "Autonomous Literature Intelligence",
    icon: ScanSearch,
    description: "Continuously maps claims, contradictions, datasets, mechanisms, citations, and experimental gaps across PubMed-style evidence streams.",
    score: 94,
  },
  {
    title: "Mechanistic Knowledge Graph",
    icon: NetworkIcon,
    description: "Connects genes, proteins, pathways, phenotypes, drugs, assays, omics signatures, and disease contexts into a navigable reasoning graph.",
    score: 91,
  },
  {
    title: "Hypothesis Tournament Engine",
    icon: GitCompare,
    description: "Generates competing hypotheses, forces structured critique, then ranks ideas by novelty, plausibility, testability, and translational value.",
    score: 89,
  },
  {
    title: "Wet-Lab Protocol Designer",
    icon: TestTube2,
    description: "Converts mechanistic hypotheses into cell models, controls, dose ranges, endpoint assays, statistical plans, and go/no-go gates.",
    score: 86,
  },
  {
    title: "Empirical Software Factory",
    icon: ServerCog,
    description: "Builds analysis notebooks, benchmark scripts, model cards, method cards, reproducibility bundles, and figure-generation pipelines.",
    score: 92,
  },
  {
    title: "Causal Failure Mode Auditor",
    icon: TriangleAlert,
    description: "Searches for confounders, missing controls, unsupported claims, leakage risks, artefacts, and over-interpretation before decisions are made.",
    score: 88,
  },
  {
    title: "Drug Repurposing Radar",
    icon: Pill,
    description: "Ranks approved or investigational compounds by target logic, safety profile, disease relevance, assay evidence, and combination potential.",
    score: 90,
  },
  {
    title: "Multi-Omics Integrator",
    icon: Dna,
    description: "Combines transcriptomics, proteomics, metabolomics, CRISPR screens, imaging readouts, and clinical features into decision-ready evidence.",
    score: 87,
  },
  {
    title: "Human Review Cockpit",
    icon: ClipboardCheck,
    description: "Creates auditable approval checkpoints, uncertainty summaries, source provenance, and expert-review memos for responsible agentic science.",
    score: 95,
  },
];

const pipeline = [
  { step: "Question", icon: Search, text: "Define disease, phenotype, biological scale, clinical context, and constraints." },
  { step: "Evidence", icon: BookOpen, text: "Mine literature, datasets, assays, mechanisms, and negative results." },
  { step: "Graph", icon: Network, text: "Build a mechanistic knowledge graph across targets, pathways, drugs, and phenotypes." },
  { step: "Hypotheses", icon: Brain, text: "Generate, critique, evolve, and rank competing mechanistic explanations." },
  { step: "Targets", icon: Atom, text: "Prioritise genes, proteins, pathways, and intervention points." },
  { step: "Experiments", icon: Beaker, text: "Design wet-lab and in silico validation plans with controls." },
  { step: "Software", icon: Code2, text: "Build analysis code and benchmark performance." },
  { step: "Decision", icon: ShieldCheck, text: "Human review, audit trail, uncertainty report, and go/no-go decision." },
];

const projects = [
  {
    disease: "Dry age-related macular degeneration",
    target: "RPE phagocytosis, ABCA1, lipid handling",
    candidate: "ROCK inhibition strategy",
    confidence: 88,
    status: "Validation-ready",
  },
  {
    disease: "Cancer metabolism",
    target: "LDHA, GLS, mitochondrial redox, lactate export",
    candidate: "Metabolic combination therapy",
    confidence: 84,
    status: "Hypothesis refinement",
  },
  {
    disease: "DNA repair vulnerability",
    target: "ATR, POLQ, RAD52, replication stress",
    candidate: "Synthetic lethality prioritisation",
    confidence: 81,
    status: "Computational triage",
  },
  {
    disease: "Mitochondrial dysfunction",
    target: "mtDNA repair, ATP synthase, redox resilience",
    candidate: "Mitochondrial genome engineering toolkit",
    confidence: 77,
    status: "Experimental design",
  },
];

const reasoningData = [
  { name: "Literature", Robin: 92, CoScientist: 88, ERA: 58, Translational: 76 },
  { name: "Hypothesis", Robin: 84, CoScientist: 96, ERA: 61, Translational: 82 },
  { name: "Coding", Robin: 66, CoScientist: 70, ERA: 97, Translational: 58 },
  { name: "Validation", Robin: 90, CoScientist: 84, ERA: 89, Translational: 93 },
  { name: "Audit", Robin: 78, CoScientist: 83, ERA: 88, Translational: 96 },
  { name: "Translation", Robin: 72, CoScientist: 77, ERA: 60, Translational: 95 },
];

const benchmarkData = [
  { month: "Jan", hypotheses: 34, validated: 9, rejected: 18 },
  { month: "Feb", hypotheses: 48, validated: 13, rejected: 26 },
  { month: "Mar", hypotheses: 71, validated: 21, rejected: 38 },
  { month: "Apr", hypotheses: 96, validated: 29, rejected: 52 },
  { month: "May", hypotheses: 128, validated: 38, rejected: 73 },
  { month: "Jun", hypotheses: 156, validated: 51, rejected: 86 },
];

const softwareData = [
  { task: "Baseline", score: 62 },
  { task: "LLM code", score: 74 },
  { task: "Tree search", score: 86 },
  { task: "Human review", score: 91 },
  { task: "Repro bundle", score: 94 },
];

const omicsData = [
  { x: 12, y: 34, z: 160, label: "ABCA1" },
  { x: 24, y: 51, z: 240, label: "LDHA" },
  { x: 41, y: 27, z: 180, label: "ATR" },
  { x: 56, y: 62, z: 300, label: "POLQ" },
  { x: 73, y: 45, z: 220, label: "GLS" },
  { x: 88, y: 76, z: 260, label: "RAD52" },
  { x: 65, y: 22, z: 190, label: "ATP5F1" },
];

const readinessData = [
  { name: "Evidence", value: 28 },
  { name: "Assay", value: 22 },
  { name: "Safety", value: 19 },
  { name: "Novelty", value: 16 },
  { name: "Translation", value: 15 },
];

const codeQualityData = [
  { stage: "Draft", tests: 31, reproducibility: 42, documentation: 28 },
  { stage: "Critique", tests: 48, reproducibility: 58, documentation: 45 },
  { stage: "Search", tests: 69, reproducibility: 74, documentation: 64 },
  { stage: "Review", tests: 86, reproducibility: 89, documentation: 82 },
  { stage: "Release", tests: 94, reproducibility: 96, documentation: 91 },
];

const auditItems = [
  "Source-grounded evidence chain",
  "Hypothesis provenance log",
  "Assay feasibility checklist",
  "Dataset leakage detection",
  "Model-card and method-card export",
  "Human approval before biological claims",
  "Contradiction and negative evidence search",
  "Independent replication recommendation",
];

const councilMessages = [
  { role: "Robin", text: "I found a mechanistic link between disease phenotype, cellular assay readout, and repurposable target class." },
  { role: "Co-Scientist", text: "I propose three competing hypotheses, then rank them by plausibility, novelty, and testability." },
  { role: "ERA", text: "I generated benchmark code, compared baselines, and improved the method through iterative search." },
  { role: "Reviewer", text: "I flagged missing controls, safety assumptions, and unsupported leaps before any translational claim." },
];

function Badge({ children }) {
  return <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-slate-200">{children}</span>;
}

function GlowOrb({ className, delay = 0 }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${className}`}
      animate={{ scale: [1, 1.18, 1], opacity: [0.35, 0.65, 0.35] }}
      transition={{ duration: 6, repeat: Infinity, delay }}
    />
  );
}

function MetricCard({ icon: Icon, label, value, detail }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-2xl shadow-cyan-950/20 backdrop-blur"
    >
      <div className="flex items-center justify-between">
        <div className="rounded-2xl bg-white/10 p-3 transition group-hover:bg-cyan-300/15">
          <Icon className="h-6 w-6 text-cyan-300" />
        </div>
        <Activity className="h-4 w-4 text-emerald-300" />
      </div>
      <p className="mt-4 text-sm text-slate-400">{label}</p>
      <h3 className="mt-1 text-3xl font-bold text-white">{value}</h3>
      <p className="mt-2 text-sm text-slate-400">{detail}</p>
    </motion.div>
  );
}

function AgentCard({ agent, active, onClick, index }) {
  const Icon = agent.icon;
  return (
    <motion.button
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      onClick={onClick}
      className={`w-full rounded-3xl border p-5 text-left transition hover:bg-white/10 ${active ? "border-cyan-300/60 bg-white/10 shadow-2xl shadow-cyan-950/30" : "border-white/10 bg-slate-900/60"
        }`}
    >
      <div className="flex items-start gap-4">
        <motion.div
          className={`rounded-2xl bg-gradient-to-br ${agent.color} p-3 shadow-lg`}
          animate={active ? { rotate: [0, 4, -4, 0] } : { rotate: 0 }}
          transition={{ duration: 2.5, repeat: active ? Infinity : 0 }}
        >
          <Icon className="h-7 w-7 text-slate-950" />
        </motion.div>
        <div>
          <h3 className="text-lg font-semibold text-white">{agent.name}</h3>
          <p className="text-sm text-cyan-200">{agent.subtitle}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-300">{agent.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {agent.modules.map((m) => (
          <Badge key={m}>{m}</Badge>
        ))}
      </div>
    </motion.button>
  );
}

function ProjectRow({ project }) {
  return (
    <motion.div whileHover={{ scale: 1.01 }} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h4 className="font-semibold text-white">{project.disease}</h4>
          <p className="mt-1 text-sm text-slate-400">Target logic: {project.target}</p>
          <p className="mt-1 text-sm text-cyan-200">Candidate path: {project.candidate}</p>
        </div>
        <div className="min-w-52">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>{project.status}</span>
            <span>{project.confidence}%</span>
          </div>
          <div className="mt-2 h-2 rounded-full bg-slate-800">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${project.confidence}%` }}
              transition={{ duration: 1.1 }}
              className="h-2 rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function AnimatedMolecule({ isDark = true }) {
  const nodes = [
    { x: 50, y: 50, size: 18, label: "AI" },
    { x: 28, y: 28, size: 12, label: "Target" },
    { x: 70, y: 28, size: 12, label: "Drug" },
    { x: 24, y: 70, size: 12, label: "Assay" },
    { x: 76, y: 72, size: 12, label: "Code" },
    { x: 50, y: 86, size: 10, label: "Audit" },
  ];
  const edges = [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [1, 2], [3, 4], [4, 5]
  ];
  return (
    <div className="relative h-80 overflow-hidden rounded-3xl border border-cyan-300/20 bg-slate-950/70">
      <GlowOrb className="left-8 top-8 h-28 w-28 bg-cyan-400/30" />
      <GlowOrb className="bottom-8 right-8 h-32 w-32 bg-violet-400/25" delay={1.4} />
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        {edges.map(([a, b], i) => (
          <motion.line
            key={`${a}-${b}`}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="rgba(103,232,249,0.45)"
            strokeWidth="0.55"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.4, delay: i * 0.12 }}
          />
        ))}
        {nodes.map((n, i) => (
          <g key={n.label}>
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={n.size / 2}
              fill={i === 0 ? "#67e8f9" : "#111827"}
              stroke={i === 0 ? "#a7f3d0" : "#67e8f9"}
              strokeWidth="0.7"
              animate={{ r: [n.size / 2, n.size / 2 + 1.2, n.size / 2] }}
              transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.2 }}
            />
            <text x={n.x} y={n.y + 0.7} textAnchor="middle" fontSize="3.2" fill={i === 0 ? "#020617" : "#e2e8f0"}>
              {n.label}
            </text>
          </g>
        ))}
      </svg>
      <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-slate-900/70 p-4 backdrop-blur">
        <div className="flex items-center gap-2 text-sm text-cyan-200">
          <Orbit className="h-4 w-4" /> Animated discovery graph
        </div>
        <p className="mt-2 text-sm leading-6 text-slate-300">Agents coordinate evidence, targets, drugs, assays, code, and audit decisions as one scientific reasoning network.</p>
      </div>
      <motion.button
        type="button"
        whileHover={{ scale: 1.06, y: -2 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className={`theme-toggle-button ${isDark ? "theme-dark-button" : "theme-light-button"}`}
        aria-label="Toggle light and dark mode"
      >
        <span className="flex items-center gap-2">
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          {isDark ? "Light mode" : "Dark mode"}
        </span>
      </motion.button>

    </div>
  );
}

function ModuleCard({ module, index }) {
  const Icon = module.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
      whileHover={{ y: -6, scale: 1.015 }}
      className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-xl shadow-slate-950/20"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="rounded-2xl bg-cyan-300/10 p-3">
          <Icon className="h-6 w-6 text-cyan-300" />
        </div>
        <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-200">{module.score}% ready</div>
      </div>
      <h4 className="mt-4 text-lg font-semibold text-white">{module.title}</h4>
      <p className="mt-3 text-sm leading-6 text-slate-400">{module.description}</p>
      <div className="mt-4 h-2 rounded-full bg-slate-800">
        <motion.div initial={{ width: 0 }} whileInView={{ width: `${module.score}%` }} viewport={{ once: true }} transition={{ duration: 1 }} className="h-2 rounded-full bg-gradient-to-r from-cyan-300 via-emerald-300 to-violet-300" />
      </div>
    </motion.div>
  );
}

function AgentCouncil() {
  const [active, setActive] = useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setActive((x) => (x + 1) % councilMessages.length), 2600);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-cyan-200">Live council simulation</p>
          <h3 className="mt-1 text-2xl font-bold text-white">Agents debate the next experiment</h3>
        </div>
        <MessageSquareText className="h-8 w-8 text-cyan-300" />
      </div>
      <div className="mt-6 space-y-3">
        {councilMessages.map((m, i) => (
          <motion.div
            key={m.role}
            animate={{ opacity: i === active ? 1 : 0.45, scale: i === active ? 1.02 : 1 }}
            className={`rounded-2xl border p-4 ${i === active ? "border-cyan-300/50 bg-cyan-300/10" : "border-white/10 bg-white/[0.04]"}`}
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <Bot className="h-4 w-4 text-cyan-300" /> {m.role}
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-300">{m.text}</p>
          </motion.div>
        ))}
      </div>
      <motion.button
        type="button"
        whileHover={{ scale: 1.06, y: -2 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className={`theme-toggle-button ${isDark ? "theme-dark-button" : "theme-light-button"}`}
        aria-label="Toggle light and dark mode"
      >
        <span className="flex items-center gap-2">
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          {isDark ? "Light mode" : "Dark mode"}
        </span>
      </motion.button>

    </div>
  );
}

export default function AgenticScienceStudio() {
  const [activeAgent, setActiveAgent] = useState(0);
  const [theme, setTheme] = useState("dark");
  const selectedAgent = agentCards[activeAgent];
  const isDark = theme === "dark";

  const generatedPlan = useMemo(() => {
    const base = [
      "Parse the biological question into disease, phenotype, cell type, target class, assay type, and clinical constraint.",
      "Retrieve peer-reviewed evidence, patents, datasets, public omics resources, known drugs, and negative controls.",
      "Generate mechanistic hypotheses, then force each hypothesis through critique, contradiction search, and feasibility scoring.",
      "Rank targets and interventions using biological plausibility, assay readiness, safety, novelty, and translational tractability.",
      "Produce executable analysis code, validation notebooks, figures, model cards, and an auditable research report.",
    ];
    if (activeAgent === 0) return base.concat("Prioritise candidates for wet-lab validation using Robin-style evidence-to-experiment loops.");
    if (activeAgent === 1) return base.concat("Run a Co-Scientist-style debate among generation, reflection, ranking, and evolution agents.");
    if (activeAgent === 2) return base.concat("Build benchmark-driven empirical software using ERA-style iterative code search and scoring.");
    return base.concat("Run translational review for clinical plausibility, safety assumptions, assay practicality, and decision risk.");
  }, [activeAgent]);

  return (
    <div className={`relative min-h-screen overflow-hidden transition-colors duration-500 ${isDark ? "theme-dark bg-[radial-gradient(circle_at_top_left,#164e63,transparent_35%),radial-gradient(circle_at_top_right,#4c1d95,transparent_35%),linear-gradient(135deg,#020617,#0f172a_45%,#111827)] text-slate-100" : "theme-light text-slate-900"}`}>
      <GlowOrb className="-left-20 top-20 h-72 w-72 bg-cyan-400/20" />
      <GlowOrb className="right-0 top-32 h-96 w-96 bg-violet-500/20" delay={1.2} />
      <GlowOrb className="bottom-0 left-1/3 h-72 w-72 bg-emerald-400/10" delay={2.3} />

      <header className="relative mx-auto max-w-7xl px-6 py-8">
        <nav className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="rounded-2xl bg-gradient-to-br from-cyan-300 to-emerald-300 p-3"
            >
              <Sparkles className="h-7 w-7 text-slate-950" />
            </motion.div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-200">aAidea</p>
              <h1 className="text-xl font-bold text-white">Agentic Science Studio</h1>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge>Robin-inspired discovery</Badge>
            <Badge>Co-Scientist reasoning</Badge>
            <Badge>ERA-style software</Badge>
            <Badge>Clinical audit layer</Badge>
          </div>
        </nav>

        <section className="grid gap-8 py-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
              <Cpu className="h-4 w-4" /> AI agents for multi-level scientific reasoning
            </p>
            <h2 className="max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">
              A command centre for agentic scientific discovery.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              A high-impact dashboard that combines multi-agent discovery, hypothesis tournaments, drug repurposing, empirical software generation, wet-lab planning, multi-omics integration, and human-governed audit trails.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="rounded-2xl bg-gradient-to-r from-cyan-300 to-emerald-300 px-5 py-3 font-semibold text-slate-950 shadow-xl shadow-cyan-950/30">
                Launch demo workflow
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="rounded-2xl border border-white/15 bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/15">
                Export research report
              </motion.button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, delay: 0.1 }}>
            <AnimatedMolecule isDark={isDark} />
          </motion.div>
        </section>
      </header>

      <main className="relative mx-auto max-w-7xl px-6 pb-16">
        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard icon={Dna} label="Biomedical domains" value="12+" detail="Oncology, retinal disease, ageing, metabolism, DNA repair" />
          <MetricCard icon={GitBranch} label="Reasoning loops" value="8" detail="Evidence, graph, debate, ranking, coding, validation, audit" />
          <MetricCard icon={Database} label="Data sources" value="Multi-omics" detail="Papers, assays, omics, clinical signals, benchmarks" />
          <MetricCard icon={ShieldCheck} label="Governance" value="Human-in-loop" detail="Transparent evidence chains before claims or action" />
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-4">
          {agentCards.map((agent, idx) => (
            <AgentCard key={agent.name} agent={agent} active={idx === activeAgent} onClick={() => setActiveAgent(idx)} index={idx} />
          ))}
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-slate-950/30">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-cyan-200">Selected agent workflow</p>
                <h3 className="mt-1 text-2xl font-bold text-white">{selectedAgent.name}</h3>
              </div>
              <selectedAgent.icon className="h-8 w-8 text-cyan-300" />
            </div>
            <div className="mt-6 space-y-3">
              <AnimatePresence mode="wait">
                <motion.div key={activeAgent} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="space-y-3">
                  {generatedPlan.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                    >
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-300" />
                      <p className="text-sm leading-6 text-slate-300">{i + 1}. {item}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-slate-950/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-cyan-200">End-to-end pipeline</p>
                <h3 className="mt-1 text-2xl font-bold text-white">From question to validated decision</h3>
              </div>
              <Workflow className="h-8 w-8 text-cyan-300" />
            </div>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {pipeline.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.step}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: i * 0.04 }}
                    whileHover={{ y: -5 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-cyan-300/10 p-2">
                        <Icon className="h-5 w-5 text-cyan-300" />
                      </div>
                      <h4 className="font-semibold text-white">{p.step}</h4>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{p.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm text-cyan-200">Advanced platform modules</p>
              <h3 className="text-3xl font-black text-white">Everything needed for agentic science</h3>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-slate-400">Each module is designed as an auditable component, not a black-box answer generator. The goal is controlled acceleration, source-grounded reasoning, and experimentally testable output.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {advancedModules.map((module, i) => (
              <ModuleCard key={module.title} module={module} index={i} />
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-cyan-200">Reasoning capability map</p>
                <h3 className="mt-1 text-2xl font-bold text-white">Four-agent scientific council</h3>
              </div>
              <RadarIcon className="h-8 w-8 text-cyan-300" />
            </div>
            <div className="mt-6 h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={reasoningData}>
                  <PolarGrid stroke="rgba(255,255,255,0.15)" />
                  <PolarAngleAxis dataKey="name" tick={{ fill: "#cbd5e1", fontSize: 12 }} />
                  <Radar name="Robin" dataKey="Robin" stroke="#67e8f9" fill="#67e8f9" fillOpacity={0.22} />
                  <Radar name="Co-Scientist" dataKey="CoScientist" stroke="#c084fc" fill="#c084fc" fillOpacity={0.17} />
                  <Radar name="ERA" dataKey="ERA" stroke="#fb7185" fill="#fb7185" fillOpacity={0.15} />
                  <Radar name="Translational" dataKey="Translational" stroke="#34d399" fill="#34d399" fillOpacity={0.12} />
                  <Tooltip contentStyle={{ background: "#020617", border: "1px solid rgba(255,255,255,0.12)", color: "white" }} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <AgentCouncil />
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-cyan-200">Discovery portfolio</p>
                <h3 className="mt-1 text-2xl font-bold text-white">Candidate scientific programmes</h3>
              </div>
              <Pill className="h-8 w-8 text-cyan-300" />
            </div>
            <div className="mt-6 space-y-4">
              {projects.map((project) => (
                <ProjectRow key={project.disease} project={project} />
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-cyan-200">Hypothesis throughput</p>
                <h3 className="mt-1 text-2xl font-bold text-white">Generated, validated, rejected</h3>
              </div>
              <BarChart3 className="h-8 w-8 text-cyan-300" />
            </div>
            <div className="mt-6 h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={benchmarkData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="month" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip contentStyle={{ background: "#020617", border: "1px solid rgba(255,255,255,0.12)", color: "white" }} />
                  <Area type="monotone" dataKey="hypotheses" stroke="#67e8f9" fill="#67e8f9" fillOpacity={0.2} />
                  <Area type="monotone" dataKey="validated" stroke="#34d399" fill="#34d399" fillOpacity={0.18} />
                  <Area type="monotone" dataKey="rejected" stroke="#fb7185" fill="#fb7185" fillOpacity={0.12} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 lg:col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-cyan-200">Multi-omics target landscape</p>
                <h3 className="mt-1 text-2xl font-bold text-white">Prioritised nodes across disease mechanisms</h3>
              </div>
              <Sigma className="h-8 w-8 text-cyan-300" />
            </div>
            <div className="mt-6 h-80">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="x" name="Evidence" stroke="#94a3b8" />
                  <YAxis dataKey="y" name="Translation" stroke="#94a3b8" />
                  <ZAxis dataKey="z" range={[90, 360]} />
                  <Tooltip cursor={{ strokeDasharray: "3 3" }} contentStyle={{ background: "#020617", border: "1px solid rgba(255,255,255,0.12)", color: "white" }} />
                  <Scatter name="Targets" data={omicsData} fill="#67e8f9" />
                </ScatterChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-cyan-200">Readiness weighting</p>
                <h3 className="mt-1 text-2xl font-bold text-white">Decision criteria</h3>
              </div>
              <Gauge className="h-8 w-8 text-cyan-300" />
            </div>
            <div className="mt-6 h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={readinessData} dataKey="value" nameKey="name" innerRadius={58} outerRadius={96} paddingAngle={4}>
                    {readinessData.map((entry, index) => (
                      <Cell key={`cell-${entry.name}`} fill={["#67e8f9", "#34d399", "#c084fc", "#fb7185", "#fbbf24"][index]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ background: "#020617", border: "1px solid rgba(255,255,255,0.12)", color: "white" }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 lg:col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-cyan-200">Empirical software engine</p>
                <h3 className="mt-1 text-2xl font-bold text-white">Benchmark-driven method improvement</h3>
              </div>
              <Code2 className="h-8 w-8 text-cyan-300" />
            </div>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={softwareData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="task" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip contentStyle={{ background: "#020617", border: "1px solid rgba(255,255,255,0.12)", color: "white" }} />
                    <Bar dataKey="score" fill="#67e8f9" radius={[12, 12, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 font-mono text-sm leading-7 text-slate-300">
                <p className="text-emerald-300">agentic_science.run()</p>
                <p>question = "Find a testable repurposing strategy"</p>
                <p>evidence = retrieve_sources(question)</p>
                <p>graph = build_mechanistic_graph(evidence)</p>
                <p>hypotheses = debate_and_rank(graph)</p>
                <p>code = generate_analysis_pipeline(hypotheses)</p>
                <p>score = benchmark(code, controls)</p>
                <p>report = export_audit_trail(score)</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-cyan-200">Trust layer</p>
                <h3 className="mt-1 text-2xl font-bold text-white">Audit controls</h3>
              </div>
              <Eye className="h-8 w-8 text-cyan-300" />
            </div>
            <div className="mt-6 space-y-3">
              {auditItems.map((item) => (
                <motion.div whileHover={{ x: 5 }} key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                  <ShieldCheck className="h-5 w-5 text-emerald-300" />
                  <span className="text-sm text-slate-300">{item}</span>
                </motion.div>
              ))}
              <div className="mt-4 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4">
                <div className="flex gap-3">
                  <AlertTriangle className="h-5 w-5 shrink-0 text-amber-200" />
                  <p className="text-sm leading-6 text-amber-100">
                    This demo is a research workflow interface. Biological claims require independent source verification, experimental validation, and expert review.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-white/10 bg-slate-900/70 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-cyan-200">Code quality evolution</p>
              <h3 className="mt-1 text-2xl font-bold text-white">Testing, reproducibility, and documentation improve through agentic iteration</h3>
            </div>
            <CircuitBoard className="h-8 w-8 text-cyan-300" />
          </div>
          <div className="mt-6 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={codeQualityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="stage" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{ background: "#020617", border: "1px solid rgba(255,255,255,0.12)", color: "white" }} />
                <Line type="monotone" dataKey="tests" stroke="#67e8f9" strokeWidth={3} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="reproducibility" stroke="#34d399" strokeWidth={3} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="documentation" stroke="#c084fc" strokeWidth={3} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-300/10 via-slate-900/80 to-violet-400/10 p-6">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm text-cyan-200">Report composer</p>
              <h3 className="mt-2 text-3xl font-black text-white">Generate a scientist-readable decision memo</h3>
              <p className="mt-4 leading-7 text-slate-300">
                The final output should be a transparent memo containing the biological question, evidence table, mechanistic graph, assumptions, ranked hypotheses, failure modes, proposed experiments, software benchmarks, and decision recommendations.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <FileText className="h-6 w-6 text-cyan-300" />
                <h4 className="font-semibold text-white">Agentic Science Decision Memo</h4>
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {["Mechanistic rationale", "Evidence quality", "Counterarguments", "Experimental plan", "Code benchmark", "Human approval", "Clinical risk", "Replication plan"].map((x) => (
                  <motion.div whileHover={{ x: 4 }} key={x} className="rounded-2xl bg-white/[0.04] p-4 text-sm text-slate-300">
                    <Layers className="mb-2 h-5 w-5 text-cyan-300" />
                    {x}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <motion.button
        type="button"
        whileHover={{ scale: 1.06, y: -2 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className={`theme-toggle-button ${isDark ? "theme-dark-button" : "theme-light-button"}`}
        aria-label="Toggle light and dark mode"
      >
        <span className="flex items-center gap-2">
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          {isDark ? "Light mode" : "Dark mode"}
        </span>
      </motion.button>

    </div>
  );
}
