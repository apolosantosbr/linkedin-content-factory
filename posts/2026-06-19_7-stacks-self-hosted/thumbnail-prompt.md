# THUMBNAIL AI PROMPT — PIPELINE POST 8 · 7 STACKS SELF HOSTED PRA IA NA SUA PME

> **STATUS:** APROVADO 16/05/2026 · pronto pra Apolo gerar imagem
> **Conceito:** CONTEUDISTA TABELA 7 STACKS + BLOCO GRANDE DE CUSTO TOTAL invertido em dourado
> **NOTA DE CONCEITO:** oitava thumb do pipeline pos-serie 4Ds. Quarta CONTEUDISTA (P1 cards, P3 tabela, P7 fluxograma, P8 este = TABELA + BLOCO CUSTO TOTAL invertido). A tabela entrega os 7 nomes com pills "FREE" verde-musgo em cada linha; o bloco grande embaixo (fundo dourado invertido, texto grafite) crava o `~US$21/MÊS` como punchline visual saveavel. Quem para no feed le os 7 nomes, ve 7 pills verdes em sequencia, e cai no bloco dourado de custo total — vira screenshot pra mostrar pro CFO. **REGRA DURA HIFEN ZERO:** "SELF HOSTED" sem hifen em TODO lugar (header, subheader, linhas da tabela, footer). REGRA v2.1: post INDEPENDENTE.
> **Politica vigente (REGRA 11):** Thumbnail terminal entrega apenas este prompt.md. Apolo gera a imagem externamente. Sem HTML, sem PNG local.

---

## DIMENSAO ALVO
- **1080 x 1350 pixels** (4:5 portrait, padrao LinkedIn feed)
- Aspect ratio: `--ar 4:5` (Midjourney) / `1080x1350` em Ideogram/ChatGPT/Gemini / `--size 1024x1280` aproximado em DALL-E (reescalar sem distorcer)

---

## A IDEIA EM UMA FRASE

Tabela executiva de 7 stacks open source com pills verde-musgo "FREE" em cada linha empilhada sobre navy, e embaixo um bloco grande dourado invertido que crava `CUSTO TOTAL ~US$21/MÊS` em letras gigantes grafite. Punchline visual: 7 ferramentas free + 1 servidor barato = stack de IA completa por menos que 1 seat de ChatGPT Enterprise. Save-friendly maximo — vira screenshot pra reuniao de orcamento de TI.

---

## TEXTOS EXATOS QUE PRECISAM APARECER NA IMAGEM (literal, com acentos PT-BR e SEM HIFEN)

### Faixa superior — header + subheader
**Header (creme, condensed sans caps peso 900) — SEM HIFEN:**
`7 STACKS SELF HOSTED`

**Subheader (dourado matte, peso medio):**
`PRA IA NA SUA PME`

### Tabela central — 7 linhas, cada uma com 4 colunas

| # | Software | Categoria | Pill |
|---|----------|-----------|------|
| 1 | `Ollama` | `LLM local` | `FREE` |
| 2 | `Open WebUI` | `Interface chat` | `FREE` |
| 3 | `n8n self hosted` | `Automação` | `FREE` |
| 4 | `Flowise` | `Agente IA visual` | `FREE` |
| 5 | `Postgres + pgvector` | `Banco + RAG` | `FREE` |
| 6 | `Metabase` | `BI self hosted` | `FREE` |
| 7 | `Uptime Kuma` | `Monitoring` | `FREE` |

### Bloco grande embaixo — CUSTO TOTAL destacado (fundo dourado invertido)

**Texto principal centralizado:**
`CUSTO TOTAL`

**Numero gigante centralizado abaixo:**
`~US$21/MÊS`

**Sublinha pequena centralizada:**
`VPS 4 vCPU + 16 GB  ·  backup  ·  domínio`

### Faixa inferior — footer (LIMPO)
`APOLO SANTOS`

> **REGRA DURA HIFEN ZERO (critica neste post):**
> - Header: `SELF HOSTED` SEM hifen
> - Linha 3: `n8n self hosted` SEM hifen
> - Linha 6: `BI self hosted` SEM hifen
> - NUNCA renderizar como `SELF-HOSTED` ou `self-hosted` — se aparecer hifen, REGENERAR
>
> **Atencao critica de acentuacao PT-BR (regra dura — 3 diacriticos):**
> - `MÊS` — circunflexo no E (bloco CUSTO TOTAL ~US$21/MÊS) — caps, regra dura
> - `Automação` — til no A (categoria linha 3) — lowercase
> - `domínio` — agudo no I (sublinha do bloco custo) — lowercase
> Demais palavras sem acento — manter sem acento.
> Se a ferramenta omitir QUALQUER um, REGENERAR ou trocar de ferramenta. Sem excecao.

---

## PROMPT PRINCIPAL (cinematografico — versao mestre, ingles tecnico)

```
A clean, sophisticated editorial tech stack reference table, vertical 4:5 portrait composition, exact dimensions 1080x1350 pixels. The aesthetic is "executive infrastructure briefing" or "engineering reference manual" — like a comparison table from a Monocle technology guide, a Stripe documentation reference, or an IBM Plex docs page. Smart, sober, tabular with a big punchline cost block at the bottom. Save-friendly. NOT a meme, NOT a marketing infographic, NOT a SaaS comparison ad, NOT a hacker tutorial graphic.

OVERALL CANVAS — deep navy hex #1A2A3F as the dominant background color (matching the pipeline identity established in P1, P3, P5, P7), the color of an executive briefing document. The composition is divided into a header band at the top, a stack of seven flat horizontal rows in the center (the table body), a LARGE BOLD COST TOTAL BLOCK below the table with INVERTED color hierarchy (gold background, graphite text — pulls attention), and a discreet thin footer at the bottom.

TOP HEADER BAND (~120 pixels tall) — sits directly on the navy background, no separator. Two stacked lines, both centered:
Line 1 (HEADER) — in warm cream hex #F4EFE5, heavy condensed sans-serif all-caps (Bebas Neue, Anton, or Druk Wide Bold), letter-spacing 0.05em, font size approximately 56 pixels, reading exactly: "7 STACKS SELF HOSTED". CRITICAL: "SELF HOSTED" is two separate words with NO HYPHEN between them. The word "SELF" and "HOSTED" are typographically separate, NO connecting dash or hyphen — render as two distinct words with a single space.
Line 2 (SUBHEADER) — immediately below the header with roughly 16 pixels of vertical spacing, in matte mustard gold hex #C9A14A, condensed sans-serif medium-bold all-caps, letter-spacing 0.18em, font size approximately 24 pixels, reading exactly: "PRA IA NA SUA PME".

CENTRAL TABLE BODY — SEVEN STACKED ROWS — seven equal horizontal rows floating on the navy background, stacked vertically with thin matte mustard gold hex #C9A14A hairlines (1 pixel stroke, 70 percent opacity) between rows. Each row is a flat warm cream hex #F4EFE5 rectangle, roughly 1000 pixels wide (with ~40 pixels of navy padding on each side) and roughly 70 pixels tall.

Each row contains, from left to right, FOUR COLUMNS:

(a) NUMERAL COLUMN (~10% of row width): a giant numeral in matte mustard gold hex #C9A14A, condensed sans Black or serif Black at heavy weight, font size approximately 42 pixels, perfectly vertically centered, left-aligned with ~16 pixels of inner padding. Numerals 1 through 7.

(b) SOFTWARE NAME COLUMN (~42% of row width): the software name in deep graphite hex #1A1F2C, sans condensed Bold (Inter Bold or Söhne Bold), letter-spacing 0.02em, font size approximately 24 pixels, vertically centered, left-aligned. Mixed case to preserve brand capitalization (Ollama, Open WebUI, n8n, Flowise, Postgres, Metabase, Uptime Kuma).

(c) CATEGORY COLUMN (~30% of row width): the category label in deep graphite hex #1A1F2C at medium weight, sans condensed Regular, font size approximately 20 pixels, vertically centered, left-aligned. Mixed case in Portuguese (LLM local, Interface chat, Automação, Agente IA visual, Banco + RAG, BI self hosted, Monitoring).

(d) PILL COLUMN (~18% of row width): a small filled rectangular pill (with slightly rounded corners, roughly 6 pixels radius) containing the label "FREE" in condensed sans all-caps at medium weight, font size approximately 14 pixels, letter-spacing 0.15em. The pill background is deep moss green hex #5A6B3B with cream hex #F4EFE5 text. Vertically centered, right-aligned within the row with ~16 pixels of inner padding.

The seven rows read exactly with brand capitalization preserved and "self hosted" WITHOUT HYPHEN on rows 3 and 6:
Row 1 — "1" — "Ollama" — "LLM local" — FREE pill (green moss)
Row 2 — "2" — "Open WebUI" — "Interface chat" — FREE pill (green moss)
Row 3 — "3" — "n8n self hosted" — "Automação" — FREE pill (green moss)
Row 4 — "4" — "Flowise" — "Agente IA visual" — FREE pill (green moss)
Row 5 — "5" — "Postgres + pgvector" — "Banco + RAG" — FREE pill (green moss)
Row 6 — "6" — "Metabase" — "BI self hosted" — FREE pill (green moss)
Row 7 — "7" — "Uptime Kuma" — "Monitoring" — FREE pill (green moss)

CRITICAL: in row 3 ("n8n self hosted") and row 6 ("BI self hosted"), the words "self" and "hosted" are separated by a single space — NO HYPHEN. Render as "self hosted" not "self-hosted".

The acute on "Automação" (row 3 category) must show the tilde clearly.

COST TOTAL BLOCK (below the 7 rows, ~150 pixels tall) — a large flat rectangular block spanning roughly 1000 pixels wide (matching the table rows) with INVERTED color hierarchy from the rest of the canvas: the block background is matte mustard gold hex #C9A14A (this pulls maximum attention), and all text on it is in deep graphite hex #1A1F2C. The block has subtle soft shadow underneath, suggesting it sits prominently above the navy background.

Inside the cost total block, three stacked centered text lines:
Line 1: "CUSTO TOTAL" — in deep graphite hex #1A1F2C, condensed sans-serif all-caps heavy weight (Bebas Neue, Anton, Druk), letter-spacing 0.15em, font size approximately 24 pixels.
Line 2: "~US$21/MÊS" — in deep graphite hex #1A1F2C, serif Black or condensed sans Black at HEAVY WEIGHT (Playfair Display Black or similar), font size approximately 80 pixels — this is the visual hero of the entire image. The circumflex on MÊS must be clearly rendered even in all-caps.
Line 3: "VPS 4 vCPU + 16 GB  ·  backup  ·  domínio" — in deep graphite hex #1A1F2C at 70% opacity (slightly muted), sans condensed Medium, font size approximately 16 pixels, letter-spacing 0.08em, with bullet separators. The acute on "domínio" must be visible (lowercase).

BOTTOM FOOTER BAND (~50px at very bottom) — a slim thin strip sitting directly on the navy background. Centered text in condensed sans-serif all-caps, letter-spacing 0.2em, in warm cream hex #F4EFE5 with a single bullet separator in matte mustard gold hex #C9A14A, font size approximately 14 pixels, reading exactly: "APOLO SANTOS". Small and unobtrusive. NO series tag, NO post number — independent post.

MOOD — focused, curatorial, technically credible, executively saveable. The viewer scrolls past, sees 7 FREE pills in green descending in column, eyes drop to the gold-inverted cost block crowning the bottom with ~US$21/MÊS gigante, and freezes. Screenshot reaction guaranteed. The gold-inverted block at the bottom is the "punchline shot" — it carries all the visual weight that justifies the save. Nothing decorative — every element earns its space.

COLOR PALETTE STRICTLY LIMITED to exactly six colors:
- #1A2A3F deep navy (main background)
- #F4EFE5 warm cream (table rows, header, footer text)
- #C9A14A matte mustard gold (numerals, subheader, hairlines between rows, footer bullet, COST TOTAL BLOCK background)
- #1A1F2C deep graphite (software name and category text on rows, all text inside the gold cost block)
- #5A6B3B deep moss green (FREE pill background)
- #A8B2C1 muted cool cream-grey (subline text inside the cost block at 70% opacity — actually rendered as graphite at lower opacity for the same effect, so this 6th color is optional)

No other colors permitted. No gradients on text. No drop shadows beyond very subtle row and cost block lift. No bevels. No 3D. No neon. No rainbow. Flat clean color fields, razor-sharp typography.

STYLE REFERENCES — Monocle technology comparison guides, Stripe documentation pricing tables, IBM Plex documentation reference pages, Linear.app feature pricing pages, FT Weekend tech tables, Information is Beautiful clean-data restraint, Pentagram editorial infographic discipline.

--ar 4:5 --v 6
```

---

## VARIANTE A — tabela 7 stacks + bloco custo total invertido em dourado (recomendada)

```
Editorial tech stack reference, vertical 4:5 portrait 1080x1350 pixels, deep navy background hex #1A2A3F.

TOP (120px): centered "7 STACKS SELF HOSTED" in warm cream #F4EFE5 condensed caps Bebas Neue 900 size 56px — "SELF HOSTED" as TWO SEPARATE WORDS with NO HYPHEN between them. Below: "PRA IA NA SUA PME" in matte mustard gold #C9A14A medium-bold size 24px, letter-spacing 0.18em.

CENTER: 7 stacked flat cream #F4EFE5 rows, each 1000px wide × 70px tall, thin mustard gold hairlines between rows. Each row has 4 columns:
- Giant numeral 1-7 in matte mustard gold #C9A14A condensed Black 42px (~10% width, vertically centered, left-aligned)
- Software name in deep graphite #1A1F2C sans condensed Bold 24px (~42% width, vertically centered, left-aligned)
- Category in deep graphite #1A1F2C sans condensed Regular 20px (~30% width)
- FREE pill on right: rounded 6px corners, deep moss green #5A6B3B background, cream #F4EFE5 text, condensed caps 14px letter-spacing 0.15em (~18% width, right-aligned)

Rows exactly (CRITICAL: "self hosted" without hyphen):
1 / Ollama / LLM local / FREE (green)
2 / Open WebUI / Interface chat / FREE (green)
3 / n8n self hosted / Automação / FREE (green) — tilde on Automação visible
4 / Flowise / Agente IA visual / FREE (green)
5 / Postgres + pgvector / Banco + RAG / FREE (green)
6 / Metabase / BI self hosted / FREE (green) — "self hosted" two words no hyphen
7 / Uptime Kuma / Monitoring / FREE (green)

BELOW the 7 rows: large COST TOTAL BLOCK (~150px tall), 1000px wide, INVERTED COLORS — background matte mustard gold #C9A14A, all text deep graphite #1A1F2C, subtle shadow underneath. Three stacked centered lines:
- "CUSTO TOTAL" in graphite condensed caps Bebas Neue 900 size 24px letter-spacing 0.15em
- "~US$21/MÊS" in graphite serif Black Playfair 80px (visual hero) — circumflex on MÊS clearly visible in caps
- "VPS 4 vCPU + 16 GB · backup · domínio" in graphite at 70% opacity, sans condensed Medium 16px with mustard gold bullets — acute on domínio visible

BOTTOM (50px): centered "APOLO SANTOS" cream condensed caps with mustard gold bullet. NO series tag.

Strict 5-6 color palette: #1A2A3F navy, #F4EFE5 cream, #C9A14A gold, #1A1F2C graphite, #5A6B3B moss green pill. No human figures, no robots, no mascots, no 3D, no real tool logos (Ollama, n8n, Flowise, Postgres, Metabase, Uptime Kuma, Hostinger, Hetzner, Docker), no server icons cliche, no Matrix code, no decoration. Pure editorial table + cost punchline. --ar 4:5 --v 6
```

---

## VARIANTE B — tabela mais compacta + bloco custo ainda maior (numeros gigantes dominantes)

```
Editorial tech stack reference, vertical 4:5 portrait 1080x1350 pixels, deep navy background hex #1A2A3F.

TOP (110px): same header "7 STACKS SELF HOSTED" cream condensed caps Bebas Neue 900 size 52px (SELF HOSTED no hyphen) + subheader "PRA IA NA SUA PME" mustard gold size 22px tracked 0.18em.

CENTER: 7 compact rows (~60px tall, ~12px gap), same 4-column structure as Variant A but slightly tighter. Numerals slightly smaller (38px), names 22px, category 18px, FREE pill 13px. Same exact text content.

BELOW: ENLARGED COST TOTAL BLOCK (~200px tall, slightly more dominant than Variant A) — same inverted gold #C9A14A background + graphite #1A1F2C text. CUSTO TOTAL label 28px, ~US$21/MÊS at MASSIVE 100px (true visual hero), subline 18px. The block now occupies more vertical real estate, making the cost punchline the dominant visual moment of the canvas.

BOTTOM (50px): footer same as Variant A.

Same 5-6 color palette. Same accent rules (MÊS circumflex caps, Automação tilde, domínio acute). Same "self hosted" no hyphen rule. No logos, no figures, no decoration. --ar 4:5 --v 6
```

---

## VARIANTE C — tabela mais editorial (sem cards de fundo, mais magazine spread)

```
Editorial tech stack reference, vertical 4:5 portrait 1080x1350 pixels, deep navy background hex #1A2A3F.

TOP (130px): "7 STACKS SELF HOSTED" cream condensed caps 60px (SELF HOSTED no hyphen) + "PRA IA NA SUA PME" mustard gold 26px tracked 0.18em. Short mustard gold horizontal hairline 200px wide centered below.

CENTER: 7 entries flush, NO cream row backgrounds (text sits directly on navy), separated by thin mustard gold hairlines at 50% opacity between rows. More magazine-spread feel.

Each entry, left to right:
- Numeral 1-7 in matte mustard gold #C9A14A serif Black 48px (~10% width)
- Software name in warm cream #F4EFE5 sans condensed Bold Inter Black 24px (~42% width)
- Category in cool cream-grey #A8B2C1 sans condensed Regular 20px (~30% width)
- FREE pill on right: moss green #5A6B3B with cream text, same spec

Same 7 entries in same order with "self hosted" no hyphen.

BELOW: COST TOTAL BLOCK (~160px), inverted gold background #C9A14A + graphite #1A1F2C text. Same three lines.

BOTTOM (50px): "APOLO SANTOS".

Reads like an FT Weekend editorial table opener. Strict 6-color palette. No card backgrounds on rows, no decoration, no figures, no real logos. --ar 4:5 --v 6
```

---

## NEGATIVE PROMPT (anti-slop + anti-cara-de-design + anti-hifen — colar separadamente ou apos prompt)

```
no hyphen in SELF HOSTED, no "SELF-HOSTED" anywhere, no dash between SELF and HOSTED, no en-dash between SELF and HOSTED, no em-dash between SELF and HOSTED, no hyphen in "self hosted" on rows 3 (n8n self hosted) or 6 (BI self hosted), keep "self" and "hosted" as two separate words with a single space between,

no human figures, no human silhouettes, no faces, no portraits, no businessman stock pose, no AI-generated faces, no developer hacker silhouette, no hooded figure,

no robot, no humanoid robot, no android, no cyborg, no AI mascot, no chatbot avatar, no brain illustration, no light bulb as decoration, no gear icon as overlay, no circuit board background, no holographic UI floating in the air, no neural network as decoration, no AI hand cliche,

no server rack icon, no cloud icon as decoration, no data flow arrows, no terminal window screenshot, no code visible on background, no Matrix green code descending, no command line cursor, no hacker den background, no RGB ambient lighting, no glowing keyboard,

no real photo background, no stock photography, no 3D render, no CGI, no glossy 3D, no plastic render, no isometric illustration, no isometric server room, no cartoon, no clip art, no anime, no vector mascot, no emoji,

no real logos, no Ollama logo, no n8n logo, no Flowise logo, no Postgres elephant logo, no Metabase logo, no Uptime Kuma logo, no Hostinger logo, no Hetzner logo, no Docker whale logo, no Docker Compose logo, no Kubernetes logo, no real Llama logo, no Mistral logo, no Anthropic logo, no Claude logo, no OpenAI logo, no ChatGPT logo, no Microsoft logo, no Google logo, no LinkedIn logo, no QR code, no barcode, no real software brand mark, no real wordmark of any company, no watermark other than the explicit footer credit line,

no decorative flourishes, no quotation marks as background art, no animation suggestion, no progress bar overlay, no loading spinner, no rating stars, no thumbs up icon, no checkmark icon, no x mark icon, no comparison sliders,

no corner brackets, no L-shaped registration marks, no Pentagram poster style centered tagline, no museum-grade art-print typographic poster, no template aesthetic, no Instagram quote card aesthetic,

no neon, no glow rims, no halo behind type, no rainbow, no bright primary colors, no saturated cyan magenta yellow, no garish palette, no meme-bright colors, no Y2K aesthetic, no cyberpunk, no glitch, no scanlines,

no Impact font, no Impact typeface with black outline, no white text with thick black stroke, no crude meme typography, no comic sans, no shitpost aesthetic, no SaaS pricing page polish, no e-commerce comparison aesthetic,

no series tag "OS 4Ds DA IA" in footer, no "POST X DE 7" in footer, no series number, no continuity reference labels, no extra English buzzwords like "Disruption", "Revolution", "Future of DevOps",

no missing diacritic on MÊS (must show circumflex on E in caps inside cost block), no missing diacritic on Automação (must show tilde on A in lowercase row 3 category), no missing diacritic on domínio (must show acute on I in lowercase subline cost block), no English typos in Portuguese text, no Latin lorem ipsum, no placeholder text in brackets, no extra invented text beyond what is specified, no garbled brand names,

no SaaS comparison ad aesthetic, no "Best Stack" badge, no "Editor's Choice" stamp, no rating bars, no consultant deck cliche, no transformation-digital generic graphic look,

not too clean as in over-designed marketing graphic, not a quote card, not an Instagram quote post, not a poster, not a magazine cover, not an advertisement
```

---

## PARAMETROS POR FERRAMENTA (decisao explicita)

| Ferramenta | Parametros | Acentos PT-BR | Layout tabela + bloco invertido | Recomendacao |
|-----------|------------|---------------|----------------------------------|--------------|
| **Ideogram** (typography mode) | ratio 4:5, magic prompt OFF, quality EXCELLENT | **OTIMO** — melhor pra MÊS, Automação, domínio | **BOM** — pode pixelar pills + bloco custo, manter 7 linhas + bloco grande exige sorte | **PREFERIDO pra single shot** |
| **ChatGPT image (DALL-E 3)** | colar prompt + "vertical 4:5 1080x1350, editorial reference table with inverted cost block at bottom" | BOM | BOM — pode falhar em manter 7 linhas exatas + cost block invertido + pills certas | Plano B |
| Midjourney v6 | `--ar 4:5 --v 6 --s 50` | RUIM — costuma quebrar circumflex/tilde | OK — bonito mas pode quebrar tabular | Plano C — gerar fundo, montar texto em editor |
| Gemini Imagen | ratio 4:5, prompt completo | OK | OK | Plano D |
| Leonardo AI | modelo Phoenix, ratio 4:5 | OK | OK | Plano E |
| **Editor (Figma / Canva / Affinity) — montagem direta** | partir do template | **OTIMO** — controle total + garantia "self hosted" sem hifen + bloco custo invertido perfeito | **OTIMO** — alinhamento exato das 7 linhas + bloco invertido + pills | **Plano de Ouro pra controle total** |

> **Decisao — fluxo recomendado:**
> 1. **Caminho rapido (uma geracao):** colar o PROMPT PRINCIPAL (ou Variante A) no **Ideogram** typography mode. **ATENCAO ESPECIAL:** verificar no resultado se "SELF HOSTED" saiu sem hifen no header e nas linhas 3 e 6 — se sair "SELF-HOSTED", regenerar imediatamente. Validar acentos.
> 2. **Se a tabela sair desalinhada, com numero errado de linhas, ou cost block invertido pixelado:** ir pra **ChatGPT image (DALL-E 3)**.
> 3. **Plano de Ouro — controle total (FORTEMENTE recomendado pra este post):** montar a tabela + bloco custo direto em **Figma / Canva / Affinity Designer**. Razoes especificas deste post:
>    - **Risco HIFEN:** IA imagem-pra-pixel pode inserir hifen automaticamente em "self hosted" por habito de treino. Editor manual elimina 100% do risco.
>    - **Bloco custo invertido:** o bloco grande dourado com texto grafite invertido e o "punchline shot" — capricho de execucao importa, fontes condensed pesadas (Bebas Neue + Playfair Display Black) sao chave.
>    - **Pills FREE alinhadas:** 7 pills moss green em coluna alinhadas verticalmente em editor garantem o efeito "tudo free" que vende a thumb.
> Regenerar (ou refazer em editor) se aparecer hifen em "self hosted", logo real, render 3D, ou se acentos saírem omitidos.

---

## CHECKLIST DE VALIDACAO POS-GERACAO (Apolo executa apos receber a imagem)

- [ ] **Dimensao 1080 x 1350 pixels** (4:5 portrait) — se sair em outra proporcao, regenerar ou recortar sem distorcer
- [ ] **PARECE TABELA DE REFERENCIA EXECUTIVA TECH** estilo Monocle / Stripe docs / IBM Plex docs — NAO meme, NAO tutorial de hacker, NAO SaaS comparison ad, NAO transformacao-digital generico (aceite central — se parecer review site ou consultoria deck cliche, REPROVA)
- [ ] **HIFEN ZERO em "SELF HOSTED"** (regra dura critica deste post):
  - [ ] Header `7 STACKS SELF HOSTED` — duas palavras separadas, NUNCA `SELF-HOSTED`
  - [ ] Linha 3 `n8n self hosted` — sem hifen
  - [ ] Linha 6 `BI self hosted` — sem hifen
- [ ] **Fundo navy `#1A2A3F`** profundo — nao preto, nao azul royal, nao azul vibrante
- [ ] **Header presente:** `7 STACKS SELF HOSTED` em creme condensed caps peso 900 (sem hifen)
- [ ] **Subheader presente:** `PRA IA NA SUA PME` em dourado
- [ ] **Exatamente 7 linhas** empilhadas verticalmente — nem 6, nem 8
- [ ] **Numeros 1-7 em dourado** `#C9A14A` na primeira coluna de cada linha
- [ ] **Nomes das 7 stacks legiveis na ordem correta:**
  - [ ] Linha 1: `Ollama` / `LLM local` / FREE
  - [ ] Linha 2: `Open WebUI` / `Interface chat` / FREE
  - [ ] Linha 3: `n8n self hosted` / `Automação` / FREE (sem hifen na linha)
  - [ ] Linha 4: `Flowise` / `Agente IA visual` / FREE
  - [ ] Linha 5: `Postgres + pgvector` / `Banco + RAG` / FREE
  - [ ] Linha 6: `Metabase` / `BI self hosted` / FREE (sem hifen na linha)
  - [ ] Linha 7: `Uptime Kuma` / `Monitoring` / FREE
- [ ] **7 pills `FREE` em verde-musgo `#5A6B3B`** com texto creme, alinhadas na coluna direita — sequencia visual saveavel
- [ ] **Bloco grande CUSTO TOTAL presente embaixo da tabela:**
  - [ ] Fundo do bloco em DOURADO `#C9A14A` invertido (puxa atencao maxima)
  - [ ] `CUSTO TOTAL` em grafite condensed caps no topo do bloco
  - [ ] `~US$21/MÊS` em grafite GIGANTE (serif Black ~80px) — circunflexo em `MÊS` visivel (regra dura)
  - [ ] Sublinha `VPS 4 vCPU + 16 GB · backup · domínio` em grafite menor — agudo em `domínio` visivel
- [ ] **Acentos PT-BR conferidos visualmente (regra dura — 3 diacriticos):**
  - [ ] `MÊS` — circunflexo no E (caps, bloco custo)
  - [ ] `Automação` — til no A (lowercase, categoria linha 3)
  - [ ] `domínio` — agudo no I (lowercase, sublinha bloco custo)
- [ ] Tipografia condensada pesada e profissional (Bebas Neue, Anton, Druk, Inter Black, Playfair Display Black) — NAO Impact, NAO meme font
- [ ] **Footer presente e LIMPO:** `APOLO SANTOS` com bullet dourado
- [ ] **Footer SEM "OS 4Ds DA IA"** (regra v2.1 — post independente)
- [ ] **Footer SEM "POST X DE 7"** (regra v2.1)
- [ ] **Paleta restrita as 5-6 cores** (`#1A2A3F` navy, `#F4EFE5` creme, `#C9A14A` dourado, `#1A1F2C` grafite, `#5A6B3B` verde-musgo pill, opcional `#A8B2C1` cinza-creme sublinha)
- [ ] **Sem logos reais** (Ollama, n8n, Flowise, Postgres elephant, Metabase, Uptime Kuma, Hostinger, Hetzner, Docker, Llama, Mistral, ChatGPT, etc) — apenas texto
- [ ] **Sem figuras humanas, sem rosto, sem robo, sem mascote, sem hacker hoodie, sem Matrix code, sem server rack icon, sem cloud icon, sem render 3D, sem foto, sem icones cliche**
- [ ] Compreensivel em 5 segundos no scroll mobile — quem da screenshot ja leva: 7 stacks free + custo total ~US$21/mês = decisao de orcamento de TI fechada

> Se a imagem falhar em qualquer item OBRIGATORIO (HIFEN em "self hosted", numero errado de linhas, bloco custo sem fundo dourado invertido, pills com cor errada, logos reais, acentos omitidos, footer com tag de serie), regenerar com NEGATIVE PROMPT reforcado, trocar de ferramenta, ou ir pro Plano de Ouro (montagem em editor). Para um thumb CONTEUDISTA destinado a screenshot+save pra reuniao de orcamento, a precisao do "SELF HOSTED" sem hifen + bloco custo invertido e o que separa "referencia confiavel" de "review-site generico".

---

## NOTA DE COESAO COM O PIPELINE POS-SERIE

**Oitava thumb do pipeline pos-serie 4Ds — quarta CONTEUDISTA, primeira com BLOCO INVERTIDO DE CUSTO.** Estado da rotacao apos o P8:

| # | Data | Tema | Conceito | Variacao |
|---|------|------|----------|----------|
| P1 | 26/05 | 5 prompts pra CEO PME | CONTEUDISTA | cards numerados verticais (navy) |
| P2 | 29/05 | iFood Cris | IMAGEM DE ATENCAO | foto cozinha BR |
| P3 | 02/06 | 10 ferramentas | CONTEUDISTA | tabela tabular com pills coloridas (navy) |
| P4 | 05/06 | Embraer/Vale/WEG | IMAGEM DE ATENCAO | foto industrial + 3 nomes header |
| P5 | 09/06 | 3 perguntas | IMAGEM DE ATENCAO | cartaz tipografico puro (navy) |
| P6 | 12/06 | Stone build vs buy | IMAGEM DE ATENCAO | cena editorial engenharia |
| P7 | 16/06 | IA distribuicao B2B | CONTEUDISTA | fluxograma vertical 6 etapas + hairlines |
| **P8** | **19/06** | **7 stacks self hosted (este)** | **CONTEUDISTA** | **tabela 7 stacks + BLOCO CUSTO INVERTIDO em dourado (NOVO componente)** |
| P9 (previsto) | 23/06 | Walmart/Costco | ATENCAO | comparativo |
| P10 (previsto) | 27/06 | Bonus | a definir | a definir |

**Identidade visual do pipeline (consolidada no P8):**
- **Navy profundo `#1A2A3F`** como fundo — quinta aplicacao (P1, P3, P5, P7, P8). Assinatura consolidada.
- **Creme `#F4EFE5`** mantida.
- **Dourado matte `#C9A14A`** mantido + **NOVO uso como FUNDO** de bloco invertido (CUSTO TOTAL). Reutilizavel pra qualquer post futuro que tenha um numero-hero saveavel.
- **Verde-musgo `#5A6B3B`** mantido (pill ESSENCIAL no P3, agora pill FREE no P8) — codigo de cor verde = positivo/recomendado.
- **Grafite `#1A1F2C`** mantido como texto sobre creme + NOVO uso como texto sobre dourado (bloco invertido).

**Distincao das 4 CONTEUDISTAS do pipeline:**

| Dimensao | P1 (5 prompts) | P3 (10 ferramentas) | P7 (6 lugares) | P8 (7 stacks — este) |
|----------|----------------|---------------------|----------------|----------------------|
| Estrutura | Cards numerados | Tabela com pills | Fluxograma + hairlines | Tabela + bloco invertido custo |
| Numero de itens | 5 | 10 | 6 | 7 |
| Hierarquia visual | Numero + titulo + tempo | Numero + nome + preco + pill | Numero + etapa + processo + economia | Numero + nome + categoria + pill FREE |
| Punchline saveavel | Lista executiva limpa | Curadoria por prioridade | Sequencia operacional | **Bloco grande CUSTO ~US$21/MÊS** |
| Codigo de cor | Mono (so dourado) | Pills por prioridade | Hairlines + verde opcional | Pills FREE verde + bloco dourado invertido |

P8 inova com **bloco invertido de cor como punchline visual** — primeira vez no pipeline. O bloco dourado embaixo (texto grafite) carrega o numero-hero que justifica o save. Pode virar componente reutilizavel pra qualquer post futuro com numero saveavel proeminente (ex: "ROI X%", "CUSTO Y", "ECONOMIA Z").

**Por que tabela + bloco custo invertido casa com o Post 8 (7 stacks self hosted):** o post entrega 7 ferramentas free + 1 conta de custo total que e a tese inteira (~US$21/mês). Uma tabela linear sozinha entregaria a lista — mas perderia o IMPACTO da conta total comparada. O bloco invertido grande embaixo crava o numero-hero como "veredicto financeiro" — leitor screenshot pra mostrar pro CFO ou pro socio. Saveabilidade tripla: lista das 7 stacks + 7 pills FREE em sequencia + bloco custo total dourado.

**Heranca visual pro pipeline:** o **bloco invertido de cor como punchline visual** vira componente reutilizavel — qualquer post futuro com numero-hero saveavel (ROI, custo, ganho, economia) pode aplicar. P10 bonus pode usar se for tema com numero ancora forte.

**Regra HIFEN ZERO ja embutida** — critica neste post porque "self hosted" e tecnicamente conhecido com hifen em ingles. O thumb-prompt explicita 3x que NUNCA pode aparecer hifen.

---

FIM. Apolo: caminho rapido — cole o **PROMPT PRINCIPAL** (ou Variante A) no **Ideogram** typography mode. **VERIFICAR IMEDIATAMENTE** se "SELF HOSTED" saiu sem hifen no header e nas linhas 3 e 6 — se sair "SELF-HOSTED", regenerar. Se a tabela sair desalinhada ou bloco custo invertido falhar, va pro **Plano de Ouro**: montar tabela + bloco custo em Figma / Canva / Affinity, controle tipografico total, garantia 100% das 7 linhas + bloco invertido dourado + 3 acentos PT-BR (`MÊS` caps, `Automação` lowercase, `domínio` lowercase) + **HIFEN ZERO em "self hosted"**. Valide com o checklist de 22 itens — atencao dura ao hifen, numero exato de linhas (7), pills FREE alinhadas, bloco custo invertido grande, e ao **footer LIMPO** sem tag de serie. Para um thumb CONTEUDISTA destinado a screenshot+save pra reuniao de orcamento de TI, a precisao do bloco custo invertido + ausencia de hifen e o que separa "decisao financeira fechada" de "post tecnico generico de feed".
