# LACUNA — Zoud GameLab 2026

**LACUNA** is a browser-playable mystery adventure where memories are pledged as loan collateral — and every memory is simultaneously a gameplay capability.

## The premise

In a district where forty-one streets have already been erased from memory, the Bell Tower can ring them back — but the Lender holds its seal. You arrive with three memories:

| Memory | Collateral value | Gameplay capability | If you pledge it |
|---|---|---|---|
| Mother's Voice | ₡300 | Hear echoes and hidden instructions | Echoes fall silent; voice-based clues vanish |
| Childhood Home | ₡200 | Recognise erased routes and hidden ways | Passages you knew become walls |
| Face of Love | ₡400 | Be recognised and trusted by NPCs | People who knew you look straight through you |

Borrowing against a memory gives you immediate credit, but sacrifices the capability that memory provides — sometimes weakening your ability to earn and repay. That is the financial conflict at the heart of LACUNA.

## How to play

Open `index.html` in any browser. No build step, no server required.

- **Move:** WASD / arrow keys, or click the ground.
- **Interact:** Press `E` near anything that glows.
- **Loan:** Speak to the Lender in the Memory Market. Inspect the terms (principal ₡400, 10% interest per cycle, 4-cycle deadline, max two memories pledged) before signing.
- **Win:** Reach the Bell Tower, settle your debt, pay the ₡300 seal fee, bring at least 2 pieces of evidence, and ring the bell.

## Submission contents

| File | Purpose |
|---|---|
| `index.html` | The complete, self-contained playable game (engine, data, rendering, UI, self-tests) |
| `GDD.md` | Concept / game design document |
| `BUDGET.md` | Game budget for development funding consideration |
| `VIDEO_SCRIPT.md` | 2-minute gameplay video script matched to actual mechanics |

## Verification

The engine is deterministic (no RNG) and self-testing. Open the game and click **Tests** in the HUD, or open the browser console and run `window.LACUNA.tests()` — 18/18 pass, covering:

- Cannot pledge all three memories (`maxPledged = 2`)
- Collateral must reach ₡500 minimum
- Pledged memory capability is unavailable
- Interest compounds exactly once per cycle
- Repayment restores memories and clears the balance
- Default repossesses the highest-value collateral permanently
- A player can still reach a valid ending after losing any one memory
- Seal fee is required and charged exactly once

## Judge's path (best ending)

1. Forgotten Square: collect the inscription, fountain coin, coat-stall coin, and the seller's confession (keep Face of Love so you're recognised).
2. Memory Market: borrow ₡400 against Mother's Voice + Childhood Home (keep Face of Love).
3. Read the Original Contract in the back room (Face of Love grants trust).
4. Repay the loan — both memories return.
5. Sunken Archive: copy the Ledger of Erasures (+₡250) and the Torn Testimony.
6. Bell Tower: pay the ₡300 seal fee, ring the bell → **The New Ledger** ending.

## Competition details

- **Event:** Zoud GameLab 2026
- **Deadline:** Nov 15, 2026, 23:59 AoE
- **Repository:** https://github.com/HillaryIkhais/lacuna
- **Browser-playable:** Yes (single HTML file)
- **Multiplayer:** No
- **Generative AI:** No dependency
