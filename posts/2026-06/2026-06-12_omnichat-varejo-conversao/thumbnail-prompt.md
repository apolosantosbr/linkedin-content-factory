# THUMBNAIL-PROMPT — OMNICHAT (12/06/2026)

> **Arquétipo:** #4 NÚMERO-ÂNCORA ISOLADO · família SIMPLES/CURIOSIDADE (Gabarito 3).
> **Entregável:** PROMPT-ONLY. Apolo gera no Ideogram (typography mode, magic prompt OFF).
> **Número-âncora (herói único):** `¼` — um QUARTO do custo, pela MESMA conversão do humano (money line: "Mesma conversão. Um QUARTO do CUSTO").
> **Verbo-de-curiosidade:** CHOCAR-COM-DADO ("como esse número é possível?").
> **Decisão de spec:** o #4 exige UM herói (proibido 2º número no canvas). O brief trazia "9% + 1/4"; escolhi `¼` como herói (mais anômalo: mesma entrega por uma fração do preço) e deixei o `9%` para o corpo do post. A caption dá só o ANCORO ("mesma conversão que o humano"), retém o "do custo" — é o contexto que o post entrega.
> **MODO:** (a) número creme `#F4EFE5` sobre fundo escuro `#0A0A0A` — quieto/editorial, distinto do poster verde (Escale) e do UI mock (Trade Republic).

---

## PROMPT PRINCIPAL (colar no Ideogram)

```
A bold, flat, social-native DATA poster, vertical 4:5 portrait, exact 1080x1350 pixels. MODE: cream number over a flat solid DARK background #0A0A0A. No gradient, no photo, no 3D, no chart, no graph.

ONE giant NUMBER dominates the canvas — the fraction glyph "¼" — at least 45% of the canvas height, perfectly centered, in a heavy tabular display face (Druk Wide / Helvetica Now Display Black / Inter 900), in cream #F4EFE5. Lots of empty air around it (margins 140px).

Exactly THREE elements, nothing else: the giant "¼", one small caption line, the footer.

Caption (small, JetBrains Mono or Inter Medium, in muted cream/grey — gives ONE concrete anchor, NOT the explanation, keep Portuguese accents): "do custo — a MESMA conversão do atendente humano · estudo OmniChat".

FOOTER — slim line bottom center, small condensed caps, letter-spacing 0.2em, cream: "APOLO SANTOS".

MOOD — the fraction feels strange / counter-intuitive: same result for a quarter of the price, demanding the context the caption withholds. Flat, no glow, no generic AI look.
```

## NEGATIVE PROMPT

```
no 3D, no 3D render, no CGI, no glow, no neon glow, no generic AI-art look, no AI mascot, no robot, no brain illustration, no light bulb, no gear, no circuit board, no neural network decoration, no holographic UI, no desaturated palette, no muted colors, no glitch, no rainbow, no Impact font, no comic sans, no crude meme typography, no thick black text outline, no lorem ipsum, no placeholder text in brackets, no deformed letters, no garbled text, no extra invented text, no series tag in the footer, no post number, no license code, no unaccented Portuguese, no Latin text missing diacritics, no chart, no graph, no axis, no second number, no percentage sign, no full sentence explanation, no number spelled out in words (digits/symbols only)
```

---

## PÓS-GERAÇÃO (obrigatório)
- **GLIFO `¼`:** se o gerador deformar a fração, montar "¼" no editor (ou compor "1/4" tabular pesado). É o herói — tem de sair limpo e nítido.
- **SEM 2º número:** garantir que NENHUM "9%" ou outro algarismo apareça no canvas (negative reforça). O 9% vive no post.
- **ACENTOS:** conferir `MESMA` (sem acento), e a cedilha de "conversão"/"atendente" no caption.
- **FONTE citada:** "estudo OmniChat" no caption (vendor, autorreportado — consistente com o enquadramento do post).

## GATE (§3.3)
- [x] Gera "peraí, como?" — ¼ do custo pela mesma conversão.
- [x] Número em símbolo (`¼`), nunca por extenso.
- [x] Caption dá UM ancoro concreto + fonte, sem nomear empresa-cliente e sem a explicação.
- [x] 3 elementos só (número + caption + footer). Footer LIMPO = só APOLO SANTOS.
- [x] Variedade: fundo escuro minimalista — distinto do poster verde e do UI mock.
