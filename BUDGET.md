# LACUNA — Game Budget

**Zoud GameLab 2026 • Funding Track**

---

## Budget summary

| Category | Amount (₡ in-game / $USD dev) | Notes |
|---|---|---|
| Game design & direction | — / $0 | Founder time (already sunk) |
| Engine implementation | — / $0 | Single-file deterministic JS engine, built in-house |
| Art / visual design | — / $0 | Procedural canvas rendering, no external assets |
| Audio / sound design | — / $0 | No audio (accessibility-first silent design) |
| Writing / narrative | — / $0 | In-house |
| QA / playtesting | — / $0 | 18 automated self-tests + manual playthroughs |
| Localization | $0 | Deliberately deprioritized; accessibility pursued instead |
| Contingency | $0 | — |
| **Total development budget** | **— / $0** | Zero external cost |

**Total requested for development funding: $0**

LACUNA is implemented as a single self-contained HTML file with no external dependencies, no art pipeline, no audio, and no localization. All development was performed in-house, so the actual cash budget is zero. The budget below itemizes where funding *would* be allocated if the project were expanded beyond this vertical slice, for the purposes of the funding-track consideration.

---

## Itemized development budget (post-jam expansion plan)

| Line item | Qty | Unit cost | Total |
|---|---|---|---|
| Lead designer / director | 2 weeks | $800/wk | $1,600 |
| Engine programmer | 3 weeks | $900/wk | $2,700 |
| Frontend / UI polish | 2 weeks | $700/wk | $1,400 |
| Visual artist (atmospheric district art) | 2 weeks | $850/wk | $1,700 |
| Composer / sound designer | 1 week | $750/wk | $750 |
| Writer / narrative designer | 1 week | $700/wk | $700 |
| QA / accessibility audit | 1 week | $650/wk | $650 |
| Localization (Arabic + 1 other) | — | — | $1,200 |
| **Subtotal** | | | **$10,700** |
| Contingency (15%) | | | $1,605 |
| **Total (expansion)** | | | **$12,305** |

---

## In-game economy (for reference)

| Source / cost | Amount |
|---|---|
| Starting coin | ₡100 |
| Fountain (Forgotten Square) | +₡30 |
| Coat stall (Forgotten Square) | +₡100 |
| Tired Seller (Forgotten Square) | +₡200 (voice) / +₡100 (love) |
| Back room advance (Memory Market) | +₡100 (love) |
| Ledger of Erasures (Sunken Archive) | +₡250 (home) |
| Archive entry toll (Sunken Archive) | ₡100 (₡200 if home pledged) |
| Loan principal (Memory Market) | +₡400 |
| Loan interest | 10% per cycle, compounded |
| Loan deadline | Cycle 4 |
| Seal fee (Bell Tower) | ₡500 |
| Memory collateral values | Voice ₡300 / Home ₡200 / Love ₡400 |

**Verified playable economy:** Maximum free income: ₡100 + ₡30 + ₡100 + ₡200 + ₡250 + ₡100 = ₡780. Costs: archive toll ₡100 + seal fee ₡500 = ₡600. Winning without borrowing leaves ₡180, debt-free. Borrowing ₡400 creates liquidity but sacrifices productive income — pledge voice+home and you lose ₡450 in earning potential, making repayment of ₡440+ impossible. The collateral trap is real: borrow to cover costs, lose the income needed to repay, default and lose memories permanently.

---

## Notes for judges

- No generative AI was used in development.
- No multiplayer components.
- Browser-playable; single HTML file; no build step or server required.
- Budget reflects actual (zero) development cost; expansion figures are illustrative only.
