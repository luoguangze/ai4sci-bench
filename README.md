# AI4Sci Bench

Three scientific task examples, with one task per tier. Each card contains its references, inputs, task description, and verification criteria.

**Page:** https://luoguangze.github.io/ai4sci-bench/

| Tier | Task | Domain |
| --- | --- | --- |
| 1 — Simulated systems with known answers | [constitutive-protocol-information](https://luoguangze.github.io/ai4sci-bench/#constitutive) | Chemistry and materials: rheology |
| 2 — Expert analysis of real data | [optical-mapping-activation-maps](https://luoguangze.github.io/ai4sci-bench/#optical-mapping) | Clinical and health sciences: cardiac electrophysiology |
| 3 — Open-ended research | [strain-resolved-assembly](https://luoguangze.github.io/ai4sci-bench/#strain-assembly) | Life sciences: metagenomics |

## Development

Static HTML, CSS, and JavaScript with no build step or external dependencies. Serve locally with `python3 -m http.server 8000` and open `http://localhost:8000`.

Tier tabs support keyboard navigation (Left/Right, Home/End), browser history, and direct task links. Original task fragments and full task-name fragments both work. With JavaScript disabled, all three cards remain readable; printing includes all three.

GitHub Pages deploys from the root of `main`.
