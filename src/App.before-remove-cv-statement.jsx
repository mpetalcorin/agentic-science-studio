import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  AlertTriangle,
  Atom,
  BarChart3,
  Beaker,
  BookOpen,
  Bot,
  Brain,
  CheckCircle2,
  Clipboard,
  ChevronRight,
  ClipboardCheck,
  Code2,
  Cpu,
  Database,
  Dna,
  Download,
  Eye,
  ExternalLink,
  FileText,
  FlaskConical,
  GitCompare,
  GitBranch,
  Hospital,
  Moon,
  Network,
  Orbit,
  Pill,
  Plus,
  Radar as RadarIcon,
  ScanSearch,
  Search,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Sun,
  TestTube2,
  TriangleAlert,
  Workflow,
  X,
} from "lucide-react";
import AdvancedVisuals from "./AdvancedVisuals";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";

const agentCards = [
  {
    name: "aAidea Discovery Agent",
    subtitle: "Multi-agent scientific discovery",
    icon: FlaskConical,
    color: "from-emerald-300 via-cyan-300 to-sky-400",
    description:
      "Automates literature reasoning, target mapping, candidate prioritisation, assay planning, and evidence-to-experiment loops.",
    modules: ["Literature miner", "Target mapper", "Candidate ranker", "Assay planner"],
  },
  {
    name: "Co-Scientist Agent",
    subtitle: "Hypothesis generation and critique",
    icon: Brain,
    color: "from-violet-300 via-fuchsia-300 to-pink-400",
    description:
      "Generates, debates, ranks, refines, and stress-tests biomedical hypotheses before recommending the next experiment.",
    modules: ["Generator", "Critic", "Tournament", "Evolution"],
  },
  {
    name: "ERA Software Agent",
    subtitle: "Expert-level empirical software builder",
    icon: Code2,
    color: "from-orange-300 via-rose-300 to-red-400",
    description:
      "Builds scientific software through benchmark-driven iteration, code review, reproducibility checks, and reporting.",
    modules: ["Code generator", "Benchmark engine", "Tree search", "Repro guard"],
  },
  {
    name: "Translational Review Agent",
    subtitle: "Safety, feasibility, and clinical logic",
    icon: Hospital,
    color: "from-blue-300 via-indigo-300 to-violet-400",
    description:
      "Checks disease relevance, assay feasibility, safety assumptions, regulatory friction, and translational readiness.",
    modules: ["Safety triage", "Assay readiness", "Clinical path", "Risk register"],
  },
];


const aaideaLinks = [
  {
    title: "aAidea Main Website",
    category: "Company website",
    description: "Main aAidea homepage for AI, scientific software, digital products, and consulting.",
    href: "https://a-aidea.com",
  },
  {
    title: "GenAI Document Intelligence Studio",
    category: "Document AI",
    description: "A browser-based platform for document intelligence, report reasoning, and AI-assisted knowledge extraction.",
    href: "https://aidea-genai-document-intelligence-s.vercel.app/",
  },
  {
    title: "SeedState Platform",
    category: "Seed biology and decision support",
    description: "A digital decision-support platform for seed physiology, viability assessment, and seed-state reasoning.",
    href: "https://seedstate-platform.vercel.app/",
  },
  {
    title: "Seed Viability Nomograph",
    category: "Seed conservation tool",
    description: "Interactive tool for exploring seed viability, storage behaviour, and conservation decision logic.",
    href: "https://seed-viability-nomograph.vercel.app/",
  },
  {
    title: "ALT Vulnerability Map",
    category: "Cancer biology and DNA repair",
    description: "Scientific software concept for exploring vulnerabilities in ALT-positive cancers.",
    href: "https://alt-vulnmap.vercel.app/",
  },
  {
    title: "Dynamic Protein Systems Explorer",
    category: "Protein systems biology",
    description: "Interactive explorer for protein dynamics, cryo-EM state reasoning, and AI-guided molecular interpretation.",
    href: "https://dynamic-protein-systems-explorer.vercel.app/",
  },
  {
    title: "MitoGatekeeper Systems Studio",
    category: "Mitochondrial systems biology",
    description: "A systems-level platform for exploring mitochondrial ATP regulation, redox balance, and bioenergetic control.",
    href: "https://mitogatekeeper-systems-studio.vercel.app/",
  },
  {
    title: "Neural-Net Forecasting Studio",
    category: "Forecasting and machine learning",
    description: "A neural-network forecasting app for time-series analysis, baseline comparison, and decision-ready prediction.",
    href: "https://neural-net-forecasting-studio.vercel.app/",
  },
  {
    title: "Plato’s Cave Philosophy Studio",
    category: "Education and philosophy",
    description: "Interactive learning studio based on Plato’s allegory of the cave.",
    href: "https://platos-cave-philosophy-studio.vercel.app/",
  },
  {
    title: "Wedding Planner App",
    category: "Planning and productivity",
    description: "A multi-module wedding planning app for budgeting, guest management, timelines, and document generation.",
    href: "https://wedding-planner-app-bice.vercel.app/",
  },
];

function AideaLinksSection() {
  return (
    <section className="mt-10 rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-slate-950/30">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm text-cyan-200">aAidea ecosystem</p>
          <h3 className="mt-1 text-3xl font-black text-white">Connected apps and digital products</h3>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            Explore the wider aAidea product ecosystem, including scientific AI, document intelligence,
            seed biology, cancer biology, mitochondrial systems, forecasting, education, and productivity tools.
          </p>
        </div>

        <a
          href="https://a-aidea.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-300 to-emerald-300 px-5 py-3 font-semibold text-slate-950 shadow-xl shadow-cyan-950/30"
        >
          Visit aAidea
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {aaideaLinks.map((app, index) => (
          <motion.a
            key={app.title}
            href={app.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04 }}
            whileHover={{ y: -6, scale: 1.015 }}
            className="group rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-xl shadow-slate-950/20 transition hover:border-cyan-300/50 hover:bg-cyan-300/10"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                  {app.category}
                </p>
                <h4 className="mt-2 text-lg font-bold text-white">{app.title}</h4>
              </div>
              <ExternalLink className="h-5 w-5 shrink-0 text-cyan-300 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>

            <p className="mt-3 text-sm leading-6 text-slate-400">{app.description}</p>

            <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">
              Open app
              <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}


const advancedModules = [
  {
    title: "Autonomous Literature Intelligence",
    icon: ScanSearch,
    description:
      "Maps claims, contradictions, datasets, mechanisms, citations, and experimental gaps across scientific evidence streams.",
    score: 94,
    output:
      "Evidence map generated, key mechanisms, missing controls, contradictory claims, and experimental gaps identified.",
  },
  {
    title: "Mechanistic Knowledge Graph",
    icon: Network,
    description:
      "Connects genes, proteins, pathways, phenotypes, drugs, assays, omics signatures, and disease contexts.",
    score: 91,
    output:
      "Knowledge graph generated with disease nodes, target nodes, compound nodes, assay nodes, and uncertainty labels.",
  },
  {
    title: "Hypothesis Tournament Engine",
    icon: GitCompare,
    description:
      "Generates competing hypotheses, critiques them, and ranks ideas by novelty, plausibility, testability, and translational value.",
    score: 89,
    output:
      "Three ranked hypotheses generated with mechanistic rationale, failure modes, and suggested validation experiments.",
  },
  {
    title: "Wet-Lab Protocol Designer",
    icon: TestTube2,
    description:
      "Converts hypotheses into cell models, controls, dose ranges, endpoint assays, statistics, and go/no-go gates.",
    score: 86,
    output:
      "Wet-lab plan generated with model system, treatment arms, controls, endpoints, and decision thresholds.",
  },
  {
    title: "Empirical Software Factory",
    icon: ServerCog,
    description:
      "Builds notebooks, benchmark scripts, model cards, method cards, reproducibility bundles, and figure pipelines.",
    score: 92,
    output:
      "Reproducible software plan generated with folder structure, scripts, benchmark metrics, and exportable reports.",
  },
  {
    title: "Causal Failure Mode Auditor",
    icon: TriangleAlert,
    description:
      "Searches for confounders, leakage risks, artefacts, unsupported claims, missing controls, and over-interpretation.",
    score: 88,
    output:
      "Risk register generated with confounders, bias risks, unsupported assumptions, and mitigation steps.",
  },
  {
    title: "Drug Repurposing Radar",
    icon: Pill,
    description:
      "Ranks candidate compounds by target logic, safety profile, disease relevance, assay evidence, and combination potential.",
    score: 90,
    output:
      "Drug repurposing shortlist generated with ranked candidates, target logic, evidence level, and recommended next assay.",
  },
  {
    title: "Multi-Omics Integrator",
    icon: Dna,
    description:
      "Combines transcriptomics, proteomics, metabolomics, CRISPR screens, imaging readouts, and clinical features.",
    score: 87,
    output:
      "Multi-omics decision matrix generated with convergent targets, discordant signals, and priority biomarkers.",
  },
  {
    title: "Human Review Cockpit",
    icon: ClipboardCheck,
    description:
      "Creates auditable approval checkpoints, uncertainty summaries, provenance logs, and expert-review memos.",
    score: 95,
    output:
      "Human review checklist generated with evidence confidence, claim boundaries, and approval requirements.",
  },
];

const pipeline = [
  { step: "Question", icon: Search, text: "Define disease, phenotype, scale, context, and constraints." },
  { step: "Evidence", icon: BookOpen, text: "Mine literature, datasets, assays, mechanisms, and negative results." },
  { step: "Graph", icon: Network, text: "Build a mechanistic knowledge graph across targets, pathways, drugs, and phenotypes." },
  { step: "Hypotheses", icon: Brain, text: "Generate, critique, evolve, and rank competing mechanistic explanations." },
  { step: "Targets", icon: Atom, text: "Prioritise genes, proteins, pathways, and intervention points." },
  { step: "Experiments", icon: Beaker, text: "Design wet-lab and in silico validation plans with controls." },
  { step: "Software", icon: Code2, text: "Build analysis code and benchmark performance." },
  { step: "Decision", icon: ShieldCheck, text: "Human review, audit trail, uncertainty report, and go/no-go decision." },
];

const initialProjects = [
  {
    disease: "Dry age-related macular degeneration",
    target: "RPE phagocytosis, ABCA1, lipid handling",
    candidate: "ROCK-pathway modulation strategy",
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
  { name: "Literature", aAidea: 92, CoScientist: 88, ERA: 58, Translational: 76 },
  { name: "Hypothesis", aAidea: 84, CoScientist: 96, ERA: 61, Translational: 82 },
  { name: "Coding", aAidea: 66, CoScientist: 70, ERA: 97, Translational: 58 },
  { name: "Validation", aAidea: 90, CoScientist: 84, ERA: 89, Translational: 93 },
  { name: "Audit", aAidea: 78, CoScientist: 83, ERA: 88, Translational: 96 },
  { name: "Translation", aAidea: 72, CoScientist: 77, ERA: 60, Translational: 95 },
];

const benchmarkData = [
  { month: "Jan", hypotheses: 34, validated: 9, rejected: 18 },
  { month: "Feb", hypotheses: 48, validated: 13, rejected: 26 },
  { month: "Mar", hypotheses: 71, validated: 21, rejected: 38 },
  { month: "Apr", hypotheses: 96, validated: 29, rejected: 52 },
  { month: "May", hypotheses: 128, validated: 38, rejected: 73 },
  { month: "Jun", hypotheses: 156, validated: 51, rejected: 86 },
];

const omicsData = [
  { x: 12, y: 34, z: 160, label: "ABCA1" },
  { x: 24, y: 51, z: 240, label: "LDHA" },
  { x: 41, y: 27, z: 180, label: "ATR" },
  { x: 56, y: 62, z: 300, label: "POLQ" },
  { x: 73, y: 45, z: 220, label: "GLS" },
  { x: 88, y: 76, z: 260, label: "RAD52" },
];

const readinessData = [
  { name: "Evidence", value: 28 },
  { name: "Assay", value: 22 },
  { name: "Safety", value: 19 },
  { name: "Novelty", value: 16 },
  { name: "Translation", value: 15 },
];

const repurposingCandidates = [
  {
    compound: "Ripasudil-like ROCK strategy",
    target: "ROCK signalling",
    context: "Retinal pigment epithelium dysfunction",
    evidence: 86,
    safety: 78,
    priority: "High",
  },
  {
    compound: "Metformin combination",
    target: "Mitochondrial metabolism",
    context: "Cancer metabolic stress",
    evidence: 74,
    safety: 91,
    priority: "Medium-high",
  },
  {
    compound: "ATR inhibitor strategy",
    target: "Replication stress response",
    context: "DNA repair deficient tumours",
    evidence: 82,
    safety: 62,
    priority: "Medium",
  },
  {
    compound: "LDHA inhibitor strategy",
    target: "Lactate production",
    context: "Warburg-like cancer metabolism",
    evidence: 79,
    safety: 68,
    priority: "Medium-high",
  },
];

const hypotheses = [
  {
    title: "Restoring cellular clearance improves disease phenotype",
    novelty: 78,
    plausibility: 91,
    testability: 87,
    risk: 34,
  },
  {
    title: "Metabolic stress exposes a synthetic vulnerability",
    novelty: 84,
    plausibility: 86,
    testability: 81,
    risk: 45,
  },
  {
    title: "DNA repair context determines therapeutic window",
    novelty: 82,
    plausibility: 88,
    testability: 76,
    risk: 52,
  },
];


const evidenceCards = [
  {
    title: "Disease mechanism evidence",
    source: "Peer-reviewed literature stream",
    strength: "High",
    note: "Links phenotype, target biology, assay readout, and intervention logic."
  },
  {
    title: "Drug repurposing evidence",
    source: "Approved-drug and target-mechanism knowledge",
    strength: "Medium-high",
    note: "Prioritises candidates with plausible safety and tractability."
  },
  {
    title: "Experimental validation evidence",
    source: "Cell assay and endpoint design logic",
    strength: "Medium",
    note: "Requires wet-lab confirmation before biological claims are made."
  },
  {
    title: "Audit and risk evidence",
    source: "Human-in-the-loop review layer",
    strength: "High",
    note: "Flags unsupported claims, missing controls, and confounding risks."
  },
];

const graphNodes = [
  { label: "Disease", detail: "Defines phenotype, clinical context, and biological system." },
  { label: "Target", detail: "Connects genes, proteins, pathways, and intervention points." },
  { label: "Drug", detail: "Ranks repurposing candidates by mechanism and safety." },
  { label: "Assay", detail: "Defines model, controls, endpoints, and dose response." },
  { label: "Code", detail: "Generates analysis notebooks, model cards, and benchmark scripts." },
  { label: "Audit", detail: "Records provenance, uncertainty, and human approval." },
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
  { role: "aAidea", text: "I found a mechanistic link between disease phenotype, cellular assay readout, and repurposable target class." },
  { role: "Co-Scientist", text: "I propose competing hypotheses, then rank them by plausibility, novelty, and testability." },
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
      className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-2xl shadow-cyan-950/20 backdrop-blur"
    >
      <div className="flex items-center justify-between">
        <div className="rounded-2xl bg-white/10 p-3">
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
      type="button"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      onClick={onClick}
      className={`w-full rounded-3xl border p-5 text-left transition hover:bg-white/10 ${
        active ? "border-cyan-300/60 bg-white/10 shadow-2xl shadow-cyan-950/30" : "border-white/10 bg-slate-900/60"
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

function AnimatedMolecule() {
  const nodes = [
    { x: 50, y: 50, size: 18, label: "AI" },
    { x: 28, y: 28, size: 12, label: "Target" },
    { x: 70, y: 28, size: 12, label: "Drug" },
    { x: 24, y: 70, size: 12, label: "Assay" },
    { x: 76, y: 72, size: 12, label: "Code" },
    { x: 50, y: 86, size: 10, label: "Audit" },
  ];
  const edges = [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [1, 2], [3, 4], [4, 5]];

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
        <p className="mt-2 text-sm leading-6 text-slate-300">Agents coordinate evidence, targets, drugs, assays, code, and audit decisions as one reasoning network.</p>
      </div>
    </div>
  );
}

function ModuleCard({ module, index, onOpen }) {
  const Icon = module.icon;
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
      whileHover={{ y: -6, scale: 1.015 }}
      onClick={() => onOpen(module)}
      className="group rounded-3xl border border-white/10 bg-slate-900/70 p-5 text-left shadow-xl shadow-slate-950/20"
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
      <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-cyan-200">
        Open module <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
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
            <motion.div initial={{ width: 0 }} animate={{ width: `${project.confidence}%` }} transition={{ duration: 1.1 }} className="h-2 rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function AgentCouncil() {
  const [active, setActive] = useState(0);

  useEffect(() => {
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
        <Bot className="h-8 w-8 text-cyan-300" />
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
    </div>
  );
}

export default function AgenticScienceStudio() {
  const [activeAgent, setActiveAgent] = useState(0);
  const [theme, setTheme] = useState(() => localStorage.getItem("aaidea-theme") || "dark");
  const [workflowStarted, setWorkflowStarted] = useState(false);
  const [workflowStep, setWorkflowStep] = useState(0);
  const [activeModule, setActiveModule] = useState(null);
  const [question, setQuestion] = useState("Find drug repurposing strategies for dry AMD");
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem("aaidea-projects");
    return saved ? JSON.parse(saved) : initialProjects;
  });
  const [newProject, setNewProject] = useState({ disease: "", target: "", candidate: "", confidence: 75, status: "New" });
  const [activeGraphNode, setActiveGraphNode] = useState(graphNodes[0]);
  const [runHistory, setRunHistory] = useState([]);
  const [copied, setCopied] = useState(false);

  const selectedAgent = agentCards[activeAgent];
  const isDark = theme === "dark";

  useEffect(() => {
    localStorage.setItem("aaidea-theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("aaidea-projects", JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    if (!workflowStarted) return;
    setWorkflowStep(0);
    const id = setInterval(() => {
      setWorkflowStep((prev) => {
        if (prev >= pipeline.length - 1) {
          clearInterval(id);
          return prev;
        }
        return prev + 1;
      });
    }, 900);
    return () => clearInterval(id);
  }, [workflowStarted]);

  const generatedPlan = useMemo(() => {
    const base = [
      "Parse the biological question into disease, phenotype, cell type, target class, assay type, and clinical constraint.",
      "Retrieve scientific evidence, datasets, public omics resources, known drugs, controls, and contradictions.",
      "Generate mechanistic hypotheses, then critique each hypothesis for feasibility, bias, and missing controls.",
      "Rank targets and interventions using biological plausibility, assay readiness, safety, novelty, and translational tractability.",
      "Produce executable analysis code, validation notebooks, figures, model cards, and an auditable research report.",
    ];
    if (activeAgent === 0) return base.concat("Prioritise candidates for wet-lab validation using aAidea evidence-to-experiment loops.");
    if (activeAgent === 1) return base.concat("Run a Co-Scientist-style debate among generation, reflection, ranking, and evolution agents.");
    if (activeAgent === 2) return base.concat("Build benchmark-driven empirical software using iterative code search and scoring.");
    return base.concat("Run translational review for clinical plausibility, safety assumptions, assay practicality, and decision risk.");
  }, [activeAgent]);

  const simulatedAnswer = useMemo(() => {
    return {
      summary: `aAidea parsed the question, “${question}”, into disease context, mechanism, intervention class, assay plan, and audit requirements.`,
      recommendation:
        "Prioritise candidates with a clear mechanistic bridge between disease biology, measurable cellular phenotype, assay feasibility, and safety constraints.",
      nextExperiment:
        "Run a controlled in vitro validation with disease-relevant cells, positive and negative controls, dose-response design, and a predefined go/no-go endpoint.",
    };
  }, [question]);


  const reportText = useMemo(() => {
    return [
      "# aAidea Agentic Science Studio Decision Memo",
      "",
      `Scientific question: ${question}`,
      `Selected agent: ${selectedAgent.name}`,
      "",
      "## Simulated answer",
      simulatedAnswer.summary,
      simulatedAnswer.recommendation,
      simulatedAnswer.nextExperiment,
      "",
      "## Workflow plan",
      ...generatedPlan.map((step, i) => `${i + 1}. ${step}`),
      "",
      "## Evidence cards",
      ...evidenceCards.map((e) => `- ${e.title}, ${e.source}, strength: ${e.strength}, note: ${e.note}`),
      "",
      "## Drug repurposing candidates",
      ...repurposingCandidates.map((c) => `- ${c.compound}, target: ${c.target}, evidence: ${c.evidence}, safety: ${c.safety}, priority: ${c.priority}`),
      "",
      "## Projects",
      ...projects.map((project) => `- ${project.disease}, ${project.target}, ${project.candidate}, confidence ${project.confidence}%, status: ${project.status}`),
      "",
      "## Audit checklist",
      ...auditItems.map((item) => `- ${item}`),
    ].join("\\n");
  }, [question, selectedAgent.name, simulatedAnswer, generatedPlan, projects]);

  const copyReport = async () => {
    await navigator.clipboard.writeText(reportText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  const exportJson = () => {
    const payload = {
      app: "aAidea Agentic Science Studio",
      question,
      selectedAgent: selectedAgent.name,
      simulatedAnswer,
      workflowPlan: generatedPlan,
      evidenceCards,
      candidates: repurposingCandidates,
      projects,
      auditItems,
      runHistory,
      exportedAt: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "aAidea-Agentic-Science-Report.json";
    link.click();
    URL.revokeObjectURL(url);
  };

  const exportReport = () => {
    const blob = new Blob([reportText], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "aAidea-Agentic-Science-Decision-Memo.md";
    link.click();
    URL.revokeObjectURL(url);
  };

  const addProject = () => {
    if (!newProject.disease.trim()) return;
    setProjects((prev) => [
      {
        ...newProject,
        confidence: Number(newProject.confidence),
      },
      ...prev,
    ]);
    setNewProject({ disease: "", target: "", candidate: "", confidence: 75, status: "New" });
  };

  const pageClass = isDark
    ? "bg-[radial-gradient(circle_at_top_left,#164e63,transparent_35%),radial-gradient(circle_at_top_right,#4c1d95,transparent_35%),linear-gradient(135deg,#020617,#0f172a_45%,#111827)] text-slate-100"
    : "theme-light text-slate-900";

  return (
    <div className={`relative min-h-screen overflow-hidden transition-colors duration-500 ${pageClass}`}>
      <GlowOrb className="-left-20 top-20 h-72 w-72 bg-cyan-400/20" />
      <GlowOrb className="right-0 top-32 h-96 w-96 bg-violet-500/20" delay={1.2} />

      <button
        type="button"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className={`fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full px-4 py-3 font-semibold shadow-2xl ${
          isDark ? "bg-cyan-300 text-slate-950" : "bg-slate-950 text-white"
        }`}
      >
        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        {isDark ? "Light mode" : "Dark mode"}
      </button>

      <header className="relative mx-auto max-w-7xl px-6 py-8">
        <nav className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <motion.div animate={{ rotate: [0, 8, -8, 0] }} transition={{ duration: 4, repeat: Infinity }} className="rounded-2xl bg-gradient-to-br from-cyan-300 to-emerald-300 p-3">
              <Sparkles className="h-7 w-7 text-slate-950" />
            </motion.div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-200">aAidea</p>
              <h1 className="text-xl font-bold text-white">Agentic Science Studio</h1>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {agentCards.map((agent, idx) => (
              <button key={agent.name} type="button" onClick={() => setActiveAgent(idx)}>
                <Badge>{agent.name.replace(" Agent", "")}</Badge>
              </button>
            ))}
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
              A working front-end prototype for discovery agents, hypothesis tournaments, drug repurposing, empirical software generation, wet-lab planning, multi-omics integration, and human-governed audit trails.
            </p>

            <div className="mt-6 rounded-3xl border border-white/10 bg-slate-900/70 p-4">
              <label className="text-sm font-semibold text-cyan-200">Scientific question</label>
              <div className="mt-3 flex flex-col gap-3 md:flex-row">
                <input
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="min-h-12 flex-1 rounded-2xl border border-white/10 bg-white/10 px-4 text-white outline-none placeholder:text-slate-400"
                  placeholder="Enter a scientific question"
                />
                <button type="button" onClick={() => { setWorkflowStarted(true); setRunHistory((prev) => [{ question, agent: selectedAgent.name, time: new Date().toLocaleString() }, ...prev].slice(0, 6)); }} className="rounded-2xl bg-gradient-to-r from-cyan-300 to-emerald-300 px-5 py-3 font-semibold text-slate-950">
                  Run workflow
                </button>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <motion.button type="button" onClick={() => { setWorkflowStarted(true); setRunHistory((prev) => [{ question, agent: selectedAgent.name, time: new Date().toLocaleString() }, ...prev].slice(0, 6)); }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="rounded-2xl bg-gradient-to-r from-cyan-300 to-emerald-300 px-5 py-3 font-semibold text-slate-950 shadow-xl shadow-cyan-950/30">
                {workflowStarted ? "Workflow running" : "Launch demo workflow"}
              </motion.button>
              <motion.button type="button" onClick={exportReport} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="rounded-2xl border border-white/15 bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/15">
                <span className="inline-flex items-center gap-2"><Download className="h-4 w-4" /> Export research report</span>
              </motion.button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, delay: 0.1 }}>
            <AnimatedMolecule />
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

        {workflowStarted && (
          <section className="mt-10 rounded-3xl border border-emerald-300/20 bg-emerald-300/10 p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-emerald-200">Workflow active</p>
                <h3 className="mt-1 text-2xl font-bold text-white">{pipeline[workflowStep].step}</h3>
                <p className="mt-2 text-slate-300">{pipeline[workflowStep].text}</p>
              </div>
              <CheckCircle2 className="h-9 w-9 text-emerald-300" />
            </div>
            <div className="mt-5 h-3 rounded-full bg-slate-800">
              <motion.div className="h-3 rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300" animate={{ width: `${((workflowStep + 1) / pipeline.length) * 100}%` }} />
            </div>
            <p className="mt-4 text-sm text-slate-300">{simulatedAnswer.summary}</p>
          </section>
        )}

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
                    <motion.div key={item} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
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
                  <motion.div key={p.step} whileHover={{ y: -5 }} className={`rounded-2xl border p-4 ${workflowStarted && i === workflowStep ? "border-emerald-300/50 bg-emerald-300/10" : "border-white/10 bg-white/[0.04]"}`}>
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
          <div className="mb-6">
            <p className="text-sm text-cyan-200">Advanced platform modules</p>
            <h3 className="text-3xl font-black text-white">Everything needed for agentic science</h3>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {advancedModules.map((module, i) => (
              <ModuleCard key={module.title} module={module} index={i} onOpen={setActiveModule} />
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
            <div className="mt-6 h-80 min-h-[20rem] min-w-0">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={reasoningData}>
                  <PolarGrid stroke="rgba(255,255,255,0.15)" />
                  <PolarAngleAxis dataKey="name" tick={{ fill: "#cbd5e1", fontSize: 12 }} />
                  <Radar name="aAidea" dataKey="aAidea" stroke="#67e8f9" fill="#67e8f9" fillOpacity={0.22} />
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
                <p className="text-sm text-cyan-200">Drug repurposing simulator</p>
                <h3 className="mt-1 text-2xl font-bold text-white">Candidate priority table</h3>
              </div>
              <Pill className="h-8 w-8 text-cyan-300" />
            </div>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead className="text-slate-400">
                  <tr>
                    <th className="p-3">Compound strategy</th>
                    <th className="p-3">Target</th>
                    <th className="p-3">Context</th>
                    <th className="p-3">Evidence</th>
                    <th className="p-3">Safety</th>
                    <th className="p-3">Priority</th>
                  </tr>
                </thead>
                <tbody>
                  {repurposingCandidates.map((c) => (
                    <tr key={c.compound} className="border-t border-white/10">
                      <td className="p-3 text-white">{c.compound}</td>
                      <td className="p-3 text-cyan-200">{c.target}</td>
                      <td className="p-3 text-slate-300">{c.context}</td>
                      <td className="p-3">{c.evidence}</td>
                      <td className="p-3">{c.safety}</td>
                      <td className="p-3 text-emerald-300">{c.priority}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-cyan-200">Hypothesis tournament</p>
                <h3 className="mt-1 text-2xl font-bold text-white">Ranked competing ideas</h3>
              </div>
              <GitCompare className="h-8 w-8 text-cyan-300" />
            </div>
            <div className="mt-6 space-y-4">
              {hypotheses.map((h) => (
                <div key={h.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <h4 className="font-semibold text-white">{h.title}</h4>
                  <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-slate-300">
                    <span>Novelty {h.novelty}</span>
                    <span>Plausibility {h.plausibility}</span>
                    <span>Testability {h.testability}</span>
                    <span>Risk {h.risk}</span>
                  </div>
                </div>
              ))}
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
              <Dna className="h-8 w-8 text-cyan-300" />
            </div>
            <div className="mt-6 h-80 min-h-[20rem] min-w-0">
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
              <BarChart3 className="h-8 w-8 text-cyan-300" />
            </div>
            <div className="mt-6 h-72 min-h-[18rem] min-w-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={readinessData} dataKey="value" nameKey="name" innerRadius={58} outerRadius={96} paddingAngle={4}>
                    {readinessData.map((entry, index) => (
                      <Cell key={entry.name} fill={["#67e8f9", "#34d399", "#c084fc", "#fb7185", "#fbbf24"][index]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ background: "#020617", border: "1px solid rgba(255,255,255,0.12)", color: "white" }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-cyan-200">Editable project portfolio</p>
                <h3 className="mt-1 text-2xl font-bold text-white">Candidate scientific programmes</h3>
              </div>
              <FileText className="h-8 w-8 text-cyan-300" />
            </div>
            <div className="mt-6 space-y-4">
              {projects.map((project) => (
                <ProjectRow key={`${project.disease}-${project.candidate}`} project={project} />
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <p className="text-sm text-cyan-200">Add project</p>
            <h3 className="mt-1 text-2xl font-bold text-white">Create a new programme</h3>
            <div className="mt-5 space-y-3">
              <input value={newProject.disease} onChange={(e) => setNewProject({ ...newProject, disease: e.target.value })} placeholder="Disease" className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none" />
              <input value={newProject.target} onChange={(e) => setNewProject({ ...newProject, target: e.target.value })} placeholder="Target logic" className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none" />
              <input value={newProject.candidate} onChange={(e) => setNewProject({ ...newProject, candidate: e.target.value })} placeholder="Candidate strategy" className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none" />
              <input type="number" value={newProject.confidence} onChange={(e) => setNewProject({ ...newProject, confidence: e.target.value })} placeholder="Confidence" className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none" />
              <button type="button" onClick={addProject} className="w-full rounded-2xl bg-gradient-to-r from-cyan-300 to-emerald-300 px-5 py-3 font-semibold text-slate-950">
                <span className="inline-flex items-center gap-2"><Plus className="h-4 w-4" /> Add project</span>
              </button>
            </div>
          </div>
        </section>

        <AdvancedVisuals />

        
        <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-cyan-200">Clickable knowledge graph</p>
                <h3 className="mt-1 text-2xl font-bold text-white">Explore reasoning nodes</h3>
              </div>
              <Network className="h-8 w-8 text-cyan-300" />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
              {graphNodes.map((node) => (
                <button
                  key={node.label}
                  type="button"
                  onClick={() => setActiveGraphNode(node)}
                  className={`rounded-2xl border p-4 text-left transition hover:-translate-y-1 ${
                    activeGraphNode.label === node.label
                      ? "border-emerald-300/60 bg-emerald-300/10"
                      : "border-white/10 bg-white/[0.04]"
                  }`}
                >
                  <p className="font-semibold text-white">{node.label}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-400">{node.detail}</p>
                </button>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4">
              <p className="text-sm text-cyan-200">Selected node</p>
              <h4 className="mt-1 text-xl font-bold text-white">{activeGraphNode.label}</h4>
              <p className="mt-2 text-sm leading-6 text-slate-300">{activeGraphNode.detail}</p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-cyan-200">Evidence cards</p>
                <h3 className="mt-1 text-2xl font-bold text-white">Source-aware reasoning summary</h3>
              </div>
              <BookOpen className="h-8 w-8 text-cyan-300" />
            </div>

            <div className="mt-6 space-y-3">
              {evidenceCards.map((card) => (
                <div key={card.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="font-semibold text-white">{card.title}</h4>
                    <span className="rounded-full bg-emerald-300/10 px-3 py-1 text-xs text-emerald-300">{card.strength}</span>
                  </div>
                  <p className="mt-1 text-xs text-cyan-200">{card.source}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{card.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <p className="text-sm text-cyan-200">Agent run history</p>
            <h3 className="mt-1 text-2xl font-bold text-white">Recent workflow runs</h3>
            <div className="mt-6 space-y-3">
              {runHistory.length === 0 ? (
                <p className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-400">
                  No run yet. Click Run workflow to record an agentic run.
                </p>
              ) : (
                runHistory.map((run, index) => (
                  <div key={`${run.time}-${index}`} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="font-semibold text-white">{run.agent}</p>
                    <p className="mt-1 text-sm text-slate-300">{run.question}</p>
                    <p className="mt-2 text-xs text-cyan-200">{run.time}</p>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-300/10 via-slate-900/80 to-emerald-300/10 p-6">
            <p className="text-sm text-cyan-200">Export centre</p>
            <h3 className="mt-1 text-2xl font-bold text-white">Download or copy decision outputs</h3>
            <p className="mt-3 leading-7 text-slate-300">
              Export the agentic science memo as Markdown, download a machine-readable JSON report, or copy the current report to clipboard for email, GitHub, or manuscript notes.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button type="button" onClick={exportReport} className="rounded-2xl bg-gradient-to-r from-cyan-300 to-emerald-300 px-5 py-3 font-semibold text-slate-950">
                Download Markdown
              </button>
              <button type="button" onClick={exportJson} className="rounded-2xl border border-white/15 bg-white/10 px-5 py-3 font-semibold text-white hover:bg-white/15">
                Download JSON
              </button>
              <button type="button" onClick={copyReport} className="rounded-2xl border border-white/15 bg-white/10 px-5 py-3 font-semibold text-white hover:bg-white/15">
                {copied ? "Copied" : "Copy report"}
              </button>
              <a href="https://a-aidea.com" target="_blank" rel="noreferrer" className="rounded-2xl border border-cyan-300/30 bg-cyan-300/10 px-5 py-3 font-semibold text-cyan-100 hover:bg-cyan-300/20">
                aAidea website
              </a>
            </div>
          </div>
        </section>


        <AideaLinksSection />

        <section className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-300/10 via-slate-900/80 to-violet-400/10 p-6">
          <p className="text-sm text-cyan-200">Report composer</p>
          <h3 className="mt-2 text-3xl font-black text-white">Generate a scientist-readable decision memo</h3>
          <p className="mt-4 leading-7 text-slate-300">{simulatedAnswer.recommendation}</p>
          <p className="mt-3 leading-7 text-slate-300">{simulatedAnswer.nextExperiment}</p>
          <button type="button" onClick={exportReport} className="mt-6 rounded-2xl bg-gradient-to-r from-cyan-300 to-emerald-300 px-5 py-3 font-semibold text-slate-950">
            Export full markdown report
          </button>
        </section>
      </main>

      <AnimatePresence>
        {activeModule && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveModule(null)}>
            <motion.div initial={{ opacity: 0, scale: 0.94, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.94, y: 20 }} onClick={(e) => e.stopPropagation()} className="max-w-2xl rounded-3xl border border-white/10 bg-slate-900 p-6 shadow-2xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-cyan-200">Activated module</p>
                  <h3 className="mt-1 text-2xl font-bold text-white">{activeModule.title}</h3>
                </div>
                <button type="button" onClick={() => setActiveModule(null)} className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <p className="mt-4 leading-7 text-slate-300">{activeModule.description}</p>
              <div className="mt-5 grid gap-3 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs text-slate-400">Readiness</p>
                  <p className="mt-1 text-2xl font-bold text-emerald-300">{activeModule.score}%</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs text-slate-400">Output</p>
                  <p className="mt-1 text-sm font-semibold text-white">Decision-ready memo</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs text-slate-400">Review</p>
                  <p className="mt-1 text-sm font-semibold text-white">Human approval required</p>
                </div>
              </div>
              <div className="mt-5 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4">
                <p className="text-sm leading-6 text-cyan-100">{activeModule.output}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <button type="button" onClick={exportReport} className="rounded-2xl bg-gradient-to-r from-cyan-300 to-emerald-300 px-5 py-3 font-semibold text-slate-950">Export memo</button>
                <button type="button" onClick={() => setActiveModule(null)} className="rounded-2xl border border-white/15 bg-white/10 px-5 py-3 font-semibold text-white hover:bg-white/15">Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
