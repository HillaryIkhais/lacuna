# LACUNA — 2-Minute Gameplay Video Script

**Zoud GameLab 2026 • Funding Track**

**Total runtime:** ~2:00  
**Footage:** Real gameplay from `index.html` (browser, single-take recording, no cuts preferred).  
**Audio:** No voiceover required; on-screen text and UI carry the story. If voiceover is added, keep it under 60 seconds total.

---

## Structure

| Segment | Time | Content |
|---|---|---|
| Opening hook | 0:00–0:15 | Title, premise, three memories shown in ledger |
| The financial decision | 0:15–0:45 | Walk to Lender, inspect loan terms, pledge Voice + Home, keep Love |
| Capability lost | 0:45–1:00 | Show pledged memories locked; attempt a gated interaction that now fails |
| Investigation | 1:00–1:25 | Collect evidence using remaining capability (Love/trust → contract) |
| Repayment | 1:25–1:40 | Repay loan; memories return; capabilities restored |
| Resolution | 1:40–2:00 | Pay seal fee, ring bell, best ending (The New Ledger) |

---

## Beat-by-beat script

### 0:00–0:05 — Title
**Visual:** `index.html` intro screen. "LACUNA — Zoud GameLab 2026."  
**Text on screen:** "Memories are collateral. Memories are capabilities."  
**Action:** Click "Enter the District."

### 0:05–0:15 — The setup
**Visual:** Forgotten Square. Player walks to the worn statue and presses E.  
**Narration/text:** "Forty-one streets are erased from memory. You carry three. Each is worth coin — and each is the only way you can do something."  
**Action:** HUD shows three memories held: Voice (listen), Home (recall), Love (trust).

### 0:15–0:30 — The loan offer
**Visual:** Walk to Memory Market. Approach the Lender, press E. Modal opens with five terms.  
**On screen (readable):** Principal ₡400 · Interest 10%/cycle · Collateral ₡500 min · Deadline cycle 4 · Max two pledged.  
**Action:** Select Voice + Home (keep Love). Click "Sign for 400 coin." HUD debt becomes 400; ledger shows Voice and Home "Pledged," Love "Held."

### 0:30–0:45 — The cost of borrowing
**Visual:** Attempt to use the cellar stair to the Archive.  
**Text:** "Childhood Home is pledged — the passage is a wall now."  
**Action:** Show the locked interaction message. The player cannot enter the archive without Home. This is the capability loss, not a stat change.

### 0:45–1:00 — Investigation with what remains
**Visual:** Back in the square, speak to the Tired Seller. Love is held, so the seller trusts the player.  
**Text:** "Face of Love is held. The seller recognises you and hands over the confession — +200 coin, evidence."  
**Action:** Evidence counter goes 0 → 1. Then walk to market back room (Love grants trust), read Original Contract. Evidence → 2.

### 1:00–1:15 — Repayment
**Visual:** Return to Lender. HUD shows money 500, debt 400. Click "Repay 400 coin."  
**Text:** "Paid in full. Memories return."  
**Action:** Ledger shows all three memories "Held" again. Capabilities restored: listen, recall, trust.

### 1:15–1:30 — Complete the investigation
**Visual:** Now enter the Sunken Archive (Home restored). Copy Ledger of Erasures (+250 coin, evidence), read Torn Testimony on shelves. Evidence → 4.

### 1:30–1:45 — The seal fee
**Visual:** Walk to Bell Tower. Approach the seal.  
**Text:** "Release of seal: 300 coin."  
**Action:** Click "Pay the seal fee (300 coin)." HUD seal flips to "Paid."

### 1:45–2:00 — Resolution
**Visual:** Ring the bell.  
**Text:** "The New Ledger — you kept every memory, settled the account, and brought the deed to the bell."  
**Ending screen:** stats (coin 450, evidence 5/5, cycle 0, memories 3/3). Fade to LACUNA title and repo URL.

---

## Production notes

- Record at 1080p, 30fps, browser full-window.
- Use `window.LACUNA.advance(ms)` if frame timing is inconsistent during recording; do not speed up gameplay artificially.
- All numbers on screen must match the actual engine: principal 400, rate 10%, seal 300, evidence 5 max, endings as implemented.
- Do not add Arabic localization text — localization was deliberately deprioritized in favor of accessibility.
