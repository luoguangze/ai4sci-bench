# SciAgent Bench: example tasks

Six tasks from the SciAgent Bench accepted pool (Scale AI x Georgia Tech) that show the three task tiers and the four properties we look for in a task. Task and verifier descriptions only; the task packages, data and sealed answers stay private.

**Page:** https://luoguangze.github.io/sciagent-bench-examples/

| Task | Tier | Domain | Budget per trial | Mean pass@1 (3 agents x 3 trials) | Verifiable as |
|---|---|---|---|---|---|
| optical-mapping-activation-maps | T2 | clinical, health and population (cardiac electrophysiology) | 4 vCPU, 16 GB, 2 h | 0.00 | ground truth: the expert's own maps |
| phosphopeptide-evidence-inference | T3 | life sciences (proteomics) | 8 vCPU, 64 GB, 1 A10G, 8 h | 0.11 | sealed truth panel, frozen comparators, absolute error-rate gate |
| strain-resolved-assembly | T3 | life sciences (metagenomics) | 16 vCPU, 64 GB, 8 h | 0.00 | sealed truth genomes, frozen assemblers, quality gates |
| rare-event-committor-transfer | T1 | mathematics, statistics and scientific ML | 4 vCPU, 8 GB, 2 h | 0.11 | exact generator truth, paired sign test vs. frozen baselines |
| constitutive-protocol-information | T1 | chemistry and materials (rheology) | 4 vCPU, 8 GB, 2 h | 0.22 | exact generator truth, paired sign test vs. frozen baselines |
| transient-isotopomer-experiment-design | T1 | life sciences (metabolic tracing) | 4 vCPU, 8 GB, 2 h | 0.11 | exact generator truth, paired sign test vs. frozen baselines |

What we look for: tasks that are (1) practical and useful for an existing domain, (2) agentic by design, (3) not impossible and not compute-heavy but stumping current models, and (4) verifiable as a ground-truth final answer or as concrete rubrics. Tiers: T1 simulated systems with known answers (~40 %), T2 expert analysis of real data (~40 %), T3 open-ended research problems (~20 %).

Pass rates come from three frontier coding agents (Claude Fable 5.1, GPT-6 Astra, Gemini 3.7 Flash), three trials each, graded by the task's own verifier; provider-side refusals are excluded and reported separately. Descriptions were abbreviated from the maintainers' READMEs on 2026-09-28.
