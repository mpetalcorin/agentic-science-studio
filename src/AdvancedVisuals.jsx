import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  Atom,
  Bot,
  Brain,
  CheckCircle2,
  Dna,
  Eye,
  FlaskConical,
  GitBranch,
  Microscope,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  TestTube2,
  Zap,
} from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  AreaChart,
  Area,
  BarChart,
  Bar,
} from "recharts";

const neuralData = [
  { stage: "Question", signal: 22, confidence: 30 },
  { stage: "Evidence", signal: 48, confidence: 52 },
  { stage: "Graph", signal: 66, confidence: 61 },
  { stage: "Hypothesis", signal: 84, confidence: 76 },
  { stage: "Critique", signal: 72, confidence: 82 },
  { stage: "Experiment", signal: 91, confidence: 88 },
  { stage: "Decision", signal: 96, confidence: 93 },
];

const timelineData = [
  { step: "T0", score: 18 },
  { step: "T1", score: 35 },
  { step: "T2", score: 53 },
  { step: "T3", score: 69 },
  { step: "T4", score: 81 },
  { step: "T5", score: 92 },
];

const agentMarketplace = [
  {
    name: "Literature Scout",
    icon: Eye,
    output: "Finds claims, contradictions, missing controls, and source provenance.",
    readiness: 94,
  },
  {
    name: "Mechanism Builder",
    icon: Network,
    output: "Builds disease-target-drug-assay reasoning paths.",
    readiness: 91,
  },
  {
    name: "Experiment Planner",
    icon: TestTube2,
    output: "Creates controls, dose ranges, endpoints, and go/no-go gates.",
    readiness: 88,
  },
  {
    name: "Code Engineer",
    icon: GitBranch,
    output: "Creates benchmark-ready analysis notebooks and reproducibility bundles.",
    readiness: 90,
  },
];

const animatedNodes = [
  { label: "Disease", x: "12%", y: "22%", icon: Microscope },
  { label: "Target", x: "38%", y: "12%", icon: Atom },
  { label: "Drug", x: "72%", y: "24%", icon: FlaskConical },
  { label: "Assay", x: "22%", y: "70%", icon: TestTube2 },
  { label: "Omics", x: "55%", y: "58%", icon: Dna },
  { label: "Decision", x: "82%", y: "72%", icon: ShieldCheck },
];

function FloatingNode({ node, index, active, onClick }) {
  const Icon = node.icon;

  return (
    <motion.button
      type="button"
      onClick={() => onClick(node)}
      className={`absolute rounded-2xl border px-4 py-3 text-left shadow-2xl backdrop-blur ${
        active?.label === node.label
          ? "border-emerald-300/70 bg-emerald-300/20"
          : "border-white/10 bg-slate-950/70"
      }`}
      style={{ left: node.x, top: node.y }}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -8, 0],
      }}
      transition={{
        opacity: { delay: index * 0.08 },
        scale: { delay: index * 0.08 },
        y: { duration: 3 + index * 0.25, repeat: Infinity },
      }}
      whileHover={{ scale: 1.08 }}
    >
      <div className="flex items-center gap-2">
        <Icon className="h-5 w-5 text-cyan-300" />
        <span className="text-sm font-semibold text-white">{node.label}</span>
      </div>
    </motion.button>
  );
}

function AnimatedKnowledgeMap() {
  const [activeNode, setActiveNode] = useState(animatedNodes[0]);

  return (
    <div className="relative h-[28rem] overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 p-5">
      <motion.div
        className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-cyan-300 to-emerald-300 p-5 shadow-2xl shadow-cyan-500/20"
        animate={{ scale: [1, 1.12, 1], rotate: [0, 8, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Brain className="h-full w-full text-slate-950" />
      </motion.div>

      {animatedNodes.map((node, index) => (
        <FloatingNode
          key={node.label}
          node={node}
          index={index}
          active={activeNode}
          onClick={setActiveNode}
        />
      ))}

      <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-slate-900/80 p-4 backdrop-blur">
        <p className="text-sm text-cyan-200">Selected node</p>
        <h4 className="mt-1 text-xl font-bold text-white">{activeNode.label}</h4>
        <p className="mt-2 text-sm leading-6 text-slate-300">
          The aAidea reasoning engine links this node to evidence, assumptions,
          experiments, code, audit checks, and decision thresholds.
        </p>
      </div>
    </div>
  );
}

function AgentMarketplaceCard({ agent, index }) {
  const Icon = agent.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-xl shadow-slate-950/20"
    >
      <div className="flex items-start justify-between">
        <div className="rounded-2xl bg-cyan-300/10 p-3">
          <Icon className="h-6 w-6 text-cyan-300" />
        </div>
        <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-200">
          {agent.readiness}% ready
        </span>
      </div>
      <h4 className="mt-4 text-lg font-bold text-white">{agent.name}</h4>
      <p className="mt-3 text-sm leading-6 text-slate-400">{agent.output}</p>
      <div className="mt-4 h-2 rounded-full bg-slate-800">
        <motion.div
          className="h-2 rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300"
          initial={{ width: 0 }}
          whileInView={{ width: `${agent.readiness}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>
    </motion.div>
  );
}

export default function AdvancedVisuals() {
  const [activePanel, setActivePanel] = useState("knowledge");

  return (
    <section className="mt-10 space-y-6">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-300/10 via-slate-900/80 to-violet-400/10 p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">
              <Sparkles className="h-4 w-4" />
              New interactive visual layer
            </p>
            <h3 className="mt-2 text-3xl font-black text-white">
              Animated agentic science cockpit
            </h3>
            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              This layer adds a clickable knowledge map, agent marketplace,
              reasoning telemetry, experimental readiness tracking, and animated
              decision intelligence.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {["knowledge", "telemetry", "agents", "readiness"].map((panel) => (
              <button
                key={panel}
                type="button"
                onClick={() => setActivePanel(panel)}
                className={`rounded-2xl px-4 py-2 text-sm font-semibold capitalize ${
                  activePanel === panel
                    ? "bg-cyan-300 text-slate-950"
                    : "border border-white/10 bg-white/10 text-white"
                }`}
              >
                {panel}
              </button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activePanel === "knowledge" && (
          <motion.div
            key="knowledge"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]"
          >
            <AnimatedKnowledgeMap />

            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-cyan-200">Decision intelligence</p>
                  <h3 className="mt-1 text-2xl font-bold text-white">
                    Evidence-to-action bridge
                  </h3>
                </div>
                <Rocket className="h-8 w-8 text-cyan-300" />
              </div>

              <div className="mt-6 space-y-4">
                {[
                  "Evidence nodes are linked to source quality and contradiction flags.",
                  "Target nodes are ranked by mechanism, tractability, and assay feasibility.",
                  "Drug nodes are prioritised by safety, repurposing logic, and combination potential.",
                  "Decision nodes require human review before biological claims are exported.",
                ].map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ x: 6 }}
                    className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-300" />
                    <p className="text-sm leading-6 text-slate-300">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activePanel === "telemetry" && (
          <motion.div
            key="telemetry"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            className="grid gap-6 lg:grid-cols-2"
          >
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-cyan-200">Reasoning telemetry</p>
                  <h3 className="mt-1 text-2xl font-bold text-white">
                    Signal strength and confidence
                  </h3>
                </div>
                <Activity className="h-8 w-8 text-cyan-300" />
              </div>
              <div className="mt-6 h-80 min-h-[20rem] min-w-0">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={neuralData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="stage" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip
                      contentStyle={{
                        background: "#020617",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "white",
                      }}
                    />
                    <Area type="monotone" dataKey="signal" stroke="#67e8f9" fill="#67e8f9" fillOpacity={0.2} />
                    <Area type="monotone" dataKey="confidence" stroke="#34d399" fill="#34d399" fillOpacity={0.16} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-cyan-200">Decision acceleration</p>
                  <h3 className="mt-1 text-2xl font-bold text-white">
                    Workflow maturity curve
                  </h3>
                </div>
                <Zap className="h-8 w-8 text-cyan-300" />
              </div>
              <div className="mt-6 h-80 min-h-[20rem] min-w-0">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={timelineData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="step" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip
                      contentStyle={{
                        background: "#020617",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "white",
                      }}
                    />
                    <Line type="monotone" dataKey="score" stroke="#c084fc" strokeWidth={4} dot={{ r: 5 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        )}

        {activePanel === "agents" && (
          <motion.div
            key="agents"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"
          >
            {agentMarketplace.map((agent, index) => (
              <AgentMarketplaceCard key={agent.name} agent={agent} index={index} />
            ))}
          </motion.div>
        )}

        {activePanel === "readiness" && (
          <motion.div
            key="readiness"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
          >
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
              <p className="text-sm text-cyan-200">Experimental readiness</p>
              <h3 className="mt-1 text-2xl font-bold text-white">
                Assay activation checklist
              </h3>
              <div className="mt-6 space-y-3">
                {[
                  ["Cell model selected", 92],
                  ["Positive control defined", 88],
                  ["Negative control defined", 86],
                  ["Dose range prepared", 79],
                  ["Endpoint assay selected", 90],
                  ["Statistics plan drafted", 83],
                ].map(([label, score]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-300">{label}</span>
                      <span className="font-semibold text-emerald-300">{score}%</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-slate-800">
                      <motion.div
                        className="h-2 rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300"
                        initial={{ width: 0 }}
                        animate={{ width: `${score}%` }}
                        transition={{ duration: 0.9 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
              <p className="text-sm text-cyan-200">Go/no-go intelligence</p>
              <h3 className="mt-1 text-2xl font-bold text-white">
                Translational decision readiness
              </h3>
              <div className="mt-6 h-80 min-h-[20rem] min-w-0">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={neuralData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="stage" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip
                      contentStyle={{
                        background: "#020617",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "white",
                      }}
                    />
                    <Bar dataKey="confidence" fill="#67e8f9" radius={[12, 12, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
