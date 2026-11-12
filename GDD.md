# LACUNA — Concept / Game Design Document

**Zoud GameLab 2026 • Funding Track • Deadline Nov 15, 2026 23:59 AoE**

---

## 1. Product overview

**LACUNA** is a short, browser-playable mystery adventure. The player explores one interconnected district whose streets are being erased from collective memory. The Bell Tower can restore them, but its seal is held by the Lender — and releasing it costs coin and truth.

The central design principle: **every memory is both collateral and a capability.** The player pledges memories to obtain credit, but loses the ability that memory provides. Borrowing can make the player financially better off while making them less capable of solving the mystery — and repaying less likely.

This is not a debt dashboard pasted onto a fantasy game. The financial system and the mystery are the same system.

---

## 2. Core loop

1. **Explore.** Walk between four connected areas (Forgotten Square, Memory Market, Sunken Archive, Bell Tower). Interact with objects and NPCs.
2. **Discover evidence.** Collect up to five pieces of evidence (inscription, confession, contract, ledger, testimony). Some require a specific memory.
3. **Borrow.** Speak to the Lender. Inspect transparent loan terms before signing: principal, interest rate, deadline, collateral value, repossession terms.
4. **Choose collateral.** Pledge one or two memories (never all three — `maxPledged = 2` guarantees at least one capability remains). Each pledge changes what interactions are available.
5. **Repay or default.** Interest compounds at 10% per cycle. Repay to restore pledged memories. Default triggers repossession of the highest-value pledged memory — permanently.
6. **Resolve.** Reach the Bell Tower, settle the debt, pay the ₡300 seal fee, bring at least 2 evidence, ring the bell. Ending reflects evidence, debt, collateral status, and whether the player ever borrowed.

---

## 3. The three memories (collateral = capability)

| Memory | Value | Capability | Lost when pledged | Gate |
|---|---|---|---|---|
| Mother's Voice | ₡300 | `listen` — hear echoes/hidden instructions | Echoes fall silent | Seller confession (needs voice **or** love) |
| Childhood Home | ₡200 | `recall` — recognise erased routes/hidden ways | Passages become walls | Stair into Sunken Archive |
| Face of Love | ₡400 | `trust` — be recognised by NPCs | NPCs treat you as a stranger | Back room / Original Contract |

**Design rule:** no memory is indispensable. Every memory loss has an alternative route, so the game is always completable. The tower accepts any one held memory, and the Lender refuses to take all three.

---

## 4. Financial system (transparent, deterministic)

| Parameter | Value |
|---|---|
| Principal | ₡400 |
| Interest rate | 10% per cycle, compounded |
| Collateral required | ₡500 minimum memory value |
| Deadline | Cycle 4 (repossession begins cycle 5) |
| Max pledged | 2 memories |
| Seal fee | ₡300 (paid at Bell Tower before winning) |
| Starting coin | ₡100 |

**Money economy (verified playable):** start ₡100 + fountain ₡30 + coat ₡100 + seller ₡200 (voice) / ₡100 (love) + ledger ₡250 (home) + backroom ₡100 (love) = ₡780 maximum free income. Costs: archive toll ₡100 + seal fee ₡500 = ₡600. Winning without borrowing leaves ₡180. Borrowing ₡400 against memories creates liquidity but sacrifices productive income — pledge the wrong memory and you cannot repay the ₡440+ debt. Interest compounds at 10% per cycle; deadline cycle 4, then repossession.

**The collateral trap:** Borrowing is optional, not mandatory. But if you pledge income-generating memories to cover costs, you may lose the ability to earn enough to repay. Default permanently repossesses your highest-value memory.

**No randomness.** No random repayment outcomes. Interest, repayment, repossession, and win conditions are fully deterministic and unit-tested.

---

## 5. Endings

| Ending | Requirements |
|---|---|
| **The New Ledger** | No default, all 3 memories held, ≥4 evidence, includes contract, seal paid |
| **The Remembered City** | No default, ≥3 evidence, seal paid |
| **The Forgotten City** | Default or <3 evidence, but reaches tower |
| **The Account Closes (Broke)** | No memories left to pledge and no way to pay |

Winning requires: debt settled, seal fee paid, ≥2 evidence, at least one memory held. Borrowing is optional.

---

## 6. Areas and interactions

**Forgotten Square (hub)**
- Worn statue → inscription evidence
- Dry fountain → +₡30 coin
- Coat stall → +₡100 coin
- Tired Seller → +₡200 coin (voice) / +₡100 coin (love) + confession evidence
- Exits: market road, cellar stair (needs home for full payout), tower road

**Memory Market**
- The Lender → loan modal (terms, pledge, sign, repay)
- Loan counter → loan terms readout
- Back room → Original Contract evidence + +₡100 advance (needs love)
- Exit: square

**Sunken Archive**
- Entry toll: ₡100 (₡200 if Childhood Home is pledged — you don't recognize the shortcut)
- Ledger of Erasures → ledger evidence + +₡250 (needs home)
- Drowned shelves → Torn Testimony evidence
- Exit: square

**Bell Tower**
- Seal → seal info + seal fee payment (₡500)
- Bell → win check (debt settled, evidence ≥2, seal paid)

---

## 7. Accessibility (pursued; localization deprioritized)

- Keyboard (WASD/arrows/E) and mouse/touch (click-to-walk, click-to-interact) supported.
- High-contrast dark theme with color-coded HUD states (debt red, money green, seal gold).
- Proximity hints appear when near interactable objects.
- Deterministic, testable engine means behavior is predictable — no reflex-dependent challenges.
- No Arabic translation added solely for localization points; effort directed at accessibility instead.

---

## 8. Verification

The engine is exposed as `window.LACUNA` with `engine.*` (loan, accrue, repay, repo, gate, win, ending, interact, held, cap, seal) and `tests()`. 24 self-tests run in-browser via the **Tests** button and cover financial correctness, memory permissions, collateral limits, repossession, seal fee, archive toll, the collateral trap (borrow → lose income → cannot repay), the free path (win without borrowing), win preconditions, and the no-dead-end guarantee (any single memory is sufficient to reach the tower).

---

## 9. What LACUNA is NOT (explicitly avoided)

- Not a dialogue-heavy game with financial terms pasted in.
- Not a debt dashboard that doesn't affect exploration.
- Not memories as collectible cards.
- Not random repayment outcomes.
- Not puzzles that become impossible after one decision.
- Not an empty large map.
- Not generative-AI dependent.
- Not multiplayer.

---

## 10. Delivery package

| Item | File | Format |
|---|---|---|
| Playable game | `index.html` | Single self-contained HTML (browser-playable) |
| Concept / GDD | `GDD.md` | Markdown |
| Game budget | `BUDGET.md` | Markdown |
| Gameplay video script | `VIDEO_SCRIPT.md` | Markdown (2 minutes, real gameplay) |
| Repository | https://github.com/HillaryIkhais/lacuna | Public, branch `main` |
