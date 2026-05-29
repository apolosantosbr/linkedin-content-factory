# THUMBNAIL AI PROMPT — PIPELINE POST 3 · 10 FERRAMENTAS DE IA PRA PME TRADICIONAL EM 2026

> **STATUS:** APROVADO 16/05/2026 · pronto pra Apolo gerar imagem
> **Conceito:** CONTEUDISTA TABELA 10 LINHAS — segunda thumb conteudista do pipeline pos-serie (variacao da identidade navy iniciada no P1)
> **NOTA DE CONCEITO:** terceira thumb do pipeline. P1 (5 prompts) usou CONTEUDISTA com 5 cards numerados. P2 (iFood Cris) usou IMAGEM DE ATENCAO. P3 (este) usa CONTEUDISTA novamente, MAS com formato distinto: TABELA TABULAR de 10 linhas com 4 colunas (numero / nome / preco / pill de prioridade colorida). A pill colorida e o ponto visual saveavel — verde-musgo pra ESSENCIAL, dourado pra COMPLEMENTAR, cinza pra NICHO. Quem screenshot leva nao so a lista mas a CURADORIA por prioridade. Footer carrega numero-ancora adicional ("stack mínima US$69/mês") como segundo gancho de save. REGRA DURA v2.1: post INDEPENDENTE, footer LIMPO.
> **Politica vigente (REGRA 11):** Thumbnail terminal entrega apenas este prompt.md. Apolo gera a imagem externamente. Sem HTML, sem PNG local.

---

## DIMENSAO ALVO
- **1080 x 1350 pixels** (4:5 portrait, padrao LinkedIn feed)
- Aspect ratio: `--ar 4:5` (Midjourney) / `1080x1350` em Ideogram/ChatGPT/Gemini / `--size 1024x1280` aproximado em DALL-E (reescalar sem distorcer)

---

## A IDEIA EM UMA FRASE

Uma referencia executiva tabular — header em creme, 10 linhas em creme com numero gigante dourado, nome da ferramenta em grafite, preco em cinza, e uma pill colorida na direita marcando ESSENCIAL/COMPLEMENTAR/NICHO. Tudo flutuando sobre fundo navy de manual executivo. Footer com numero-ancora ("stack minima US$69/mês"). Sem figura humana, sem logo de ferramenta, sem render 3D. Quem da screenshot leva a curadoria.

---

## TEXTOS EXATOS QUE PRECISAM APARECER NA IMAGEM (literal, com acentos PT-BR)

### Faixa superior — header + subheader
**Header (creme, condensed sans caps peso 900):**
`10 FERRAMENTAS DE IA PRA PME EM 2026`

**Subheader (dourado, peso medio, com bullets dourados):**
`preço  ·  quando usar  ·  prioridade`

### Tabela central — 10 linhas, cada linha com numero · nome · preco · pill

| # | Nome | Preço | Pill |
|---|------|-------|------|
| 1 | Claude Pro / ChatGPT Plus | US$20 | ESSENCIAL |
| 2 | Perplexity Pro | US$20 | ESSENCIAL |
| 3 | Notion AI | US$10 | COMPLEMENTAR |
| 4 | Granola / Otter | US$0–14 | ESSENCIAL |
| 5 | Make / n8n | US$9–29 | COMPLEMENTAR |
| 6 | Canva Pro com IA | US$15 | ESSENCIAL |
| 7 | Ideogram | US$0–16 | NICHO |
| 8 | ElevenLabs | US$5 | NICHO |
| 9 | HeyGen | US$24 | NICHO |
| 10 | Reclaim.ai | US$8 | COMPLEMENTAR |

### Faixa inferior — footer (curto, INDEPENDENTE, com numero-ancora)
`APOLO SANTOS  ·  stack mínima US$69/mês`

> **Atencao critica de acentuacao (regra dura da serie):**
> - `preço` — cedilha no C (subheader, minusculo OK)
> - `mínima` — agudo no I (footer)
> - `mês` — circunflexo no E (footer)
> - Pills `ESSENCIAL`, `COMPLEMENTAR`, `NICHO` — TODOS sem acento (nicho minusculo nao leva agudo, mantem all-caps sem acento)
> - Demais palavras do header sem acento: 10, FERRAMENTAS, DE, IA, PRA, PME, EM, 2026
> - Nomes das ferramentas seguem capitalizacao de marca propria (Claude Pro, ChatGPT Plus, Perplexity Pro, Notion AI, Granola, Otter, Make, n8n, Canva Pro com IA, Ideogram, ElevenLabs, HeyGen, Reclaim.ai)
> Se a ferramenta omitir `preço`, `mínima` ou `mês`, REGENERAR ou trocar de ferramenta. Sem excecao.

---

## PROMPT PRINCIPAL (cinematografico — versao mestre, ingles tecnico)

```
A clean, sophisticated editorial reference table, vertical 4:5 portrait composition, exact dimensions 1080x1350 pixels. The aesthetic is "executive briefing document" or "professional curation reference" — like a comparison table from a Monocle business guide, an MIT Sloan executive briefing, or an IBM Plex documentation page. Smart, sober, tabular, save-friendly. NOT a meme, NOT a marketing graphic, NOT a SaaS comparison ad, NOT a stock infographic.

OVERALL CANVAS — deep navy hex #1A2A3F as the dominant background color, the color of an executive notebook or a leather-bound manual. The composition is divided into a header band at the top, a stack of ten flat horizontal rows in the center (the table body), and a discreet thin footer band at the bottom.

TOP HEADER BAND (~130 pixels tall) — sits directly on the navy background, no separator. Two stacked lines, both centered or left-aligned within roughly 60 pixels of inner padding:
Line 1 (HEADER): in warm cream hex #F4EFE5, heavy condensed sans-serif all-caps (Bebas Neue, Anton, or Druk Wide Bold), letter-spacing 0.05em, font size approximately 50 pixels, reading exactly: "10 FERRAMENTAS DE IA PRA PME EM 2026".
Line 2 (SUBHEADER): immediately below the header with roughly 16 pixels of vertical spacing, in matte mustard gold hex #C9A14A, condensed sans-serif lowercase or mixed case at medium-bold weight, letter-spacing wider at 0.15em, font size approximately 22 pixels, reading exactly: "preço  ·  quando usar  ·  prioridade". The cedilla on "preço" must be clearly visible. The bullets are bullet separators in matte mustard gold.

CENTRAL TABLE BODY — TEN STACKED ROWS — ten equal horizontal rows floating on the navy background, stacked vertically with a thin matte mustard gold hex #C9A14A hairline (1 pixel stroke, ~70 percent opacity) between each row as a divider. Each row is a flat warm cream hex #F4EFE5 rectangle, roughly 1000 pixels wide (with ~40 pixels of navy padding on each side) and roughly 80 pixels tall.

Each row contains, from left to right, FOUR COLUMNS:

(a) NUMERAL COLUMN (~12% of row width): a giant numeral in matte mustard gold hex #C9A14A, heavy serif Black or condensed sans Black, font size approximately 50 pixels, perfectly vertically centered, left-aligned with roughly 20 pixels of inner padding. Numerals 1 through 10 in order down the stack.

(b) NAME COLUMN (~50% of row width): the tool name in deep graphite hex #1A1F2C, condensed sans-serif heavy weight (Inter Black, Söhne Breit Bold, or similar), letter-spacing 0.02em, font size approximately 24 pixels, vertically centered, left-aligned. Mixed case to preserve brand capitalization.

(c) PRICE COLUMN (~18% of row width): the price label in muted medium grey hex #6B7280, condensed sans medium weight (Inter Medium or similar), font size approximately 22 pixels, vertically centered, left-aligned. Format "US$XX" or "US$X–Y".

(d) PILL COLUMN (~20% of row width): a small filled rectangular pill (with slightly rounded corners, roughly 8 pixels radius), containing a single-word priority label in condensed sans all-caps medium weight, font size approximately 16 pixels, letter-spacing 0.15em, vertically centered, right-aligned within the row with roughly 20 pixels of inner padding. The pill color varies by category:
- ESSENCIAL: pill background in deep moss green hex #5A6B3B, label text in warm cream hex #F4EFE5
- COMPLEMENTAR: pill background in matte mustard gold hex #C9A14A, label text in deep graphite hex #1A1F2C
- NICHO: pill background in muted medium grey hex #6B7280, label text in warm cream hex #F4EFE5

The ten rows read exactly with brand capitalization preserved and pill assignments:
Row 1 — "1" — "Claude Pro / ChatGPT Plus" — "US$20" — ESSENCIAL (green pill)
Row 2 — "2" — "Perplexity Pro" — "US$20" — ESSENCIAL (green pill)
Row 3 — "3" — "Notion AI" — "US$10" — COMPLEMENTAR (gold pill)
Row 4 — "4" — "Granola / Otter" — "US$0–14" — ESSENCIAL (green pill)
Row 5 — "5" — "Make / n8n" — "US$9–29" — COMPLEMENTAR (gold pill)
Row 6 — "6" — "Canva Pro com IA" — "US$15" — ESSENCIAL (green pill)
Row 7 — "7" — "Ideogram" — "US$0–16" — NICHO (grey pill)
Row 8 — "8" — "ElevenLabs" — "US$5" — NICHO (grey pill)
Row 9 — "9" — "HeyGen" — "US$24" — NICHO (grey pill)
Row 10 — "10" — "Reclaim.ai" — "US$8" — COMPLEMENTAR (gold pill)

The price ranges use an en-dash (–) as separator (NOT a hyphen, NOT an em-dash). The slash separator in "Claude Pro / ChatGPT Plus" and "Granola / Otter" and "Make / n8n" is a forward slash with spaces.

BOTTOM FOOTER BAND — a slim thin strip at the very bottom, roughly 50 pixels tall, sitting directly on the navy background. Reads exactly in condensed sans-serif all-caps for "APOLO SANTOS" and "" but lowercase-mixed for "stack mínima US$69/mês", letter-spacing 0.15em for the caps portions, font size approximately 14-16 pixels, in warm cream hex #F4EFE5 with bullet separators in matte mustard gold hex #C9A14A. The full text reads: "APOLO SANTOS  ·  stack mínima US$69/mês". The acute accent on "mínima" and circumflex on "mês" must be clearly visible. This footer is INTENTIONALLY SHORT — no series tag, no post number. Independent post.

MOOD — quiet, curatorial, didactic, save-friendly. Reads as a serious tool curation reference that a CEO would screenshot and keep on their phone for the next SaaS decision. The pills add a quick visual hierarchy (essencial vs nicho) that does the curation work for the reader at a glance. Nothing decorative — every column earns its space.

COLOR PALETTE STRICTLY LIMITED to exactly six colors and no others:
- #1A2A3F deep navy (main background)
- #F4EFE5 warm cream (rows, header, footer text)
- #C9A14A matte mustard gold (numerals, subheader, hairlines between rows, footer bullets, COMPLEMENTAR pill background)
- #1A1F2C deep graphite (tool name text on rows, label on COMPLEMENTAR pill)
- #5A6B3B deep moss green (ESSENCIAL pill background)
- #6B7280 muted medium grey (price text, NICHO pill background)

No other colors permitted. No gradients on text. No drop shadows beyond very subtle row lift. No bevels. No 3D. No neon. No rainbow. Flat clean color fields, razor-sharp typography.

STYLE REFERENCES — Monocle business guide comparison tables, MIT Sloan Management Review tool curation spreads, IBM Plex documentation tables, Stripe documentation comparison charts, FT Weekend editorial breakdowns, Linear.app feature comparison pages, Penguin Modern Classics didactic restraint.

--ar 4:5 --v 6
```

---

## VARIANTE A — tabela 10 linhas com pills coloridas (cena principal, recomendada)

```
Editorial reference table, vertical 4:5 portrait 1080x1350 pixels, deep navy background hex #1A2A3F.

TOP (130px): centered "10 FERRAMENTAS DE IA PRA PME EM 2026" in warm cream #F4EFE5 condensed caps Bebas Neue 900 size 50px, with "preço · quando usar · prioridade" directly below in matte mustard gold #C9A14A medium-bold size 22px, letter-spacing 0.15em, mustard gold bullets. The cedilla on "preço" visible.

CENTER: 10 stacked flat cream #F4EFE5 rows, each 1000px wide × ~80px tall, thin mustard gold hairlines between rows. Each row has 4 columns:
- Giant numeral 1-10 in matte mustard gold #C9A14A, serif Black or condensed sans Black 50px, vertically centered, left-aligned (~12% width)
- Tool name in deep graphite #1A1F2C, condensed sans Inter Black 24px, vertically centered, left-aligned (~50% width)
- Price in muted grey #6B7280, condensed sans medium 22px, left-aligned (~18% width)
- Filled pill on right (rounded 8px corners, condensed caps 16px label, letter-spacing 0.15em, ~20% width) — colors per category:
  - ESSENCIAL: deep moss green #5A6B3B background, cream label
  - COMPLEMENTAR: matte mustard gold #C9A14A background, graphite label
  - NICHO: muted grey #6B7280 background, cream label

Rows exactly:
1 / Claude Pro / ChatGPT Plus / US$20 / ESSENCIAL (green)
2 / Perplexity Pro / US$20 / ESSENCIAL (green)
3 / Notion AI / US$10 / COMPLEMENTAR (gold)
4 / Granola / Otter / US$0–14 / ESSENCIAL (green)
5 / Make / n8n / US$9–29 / COMPLEMENTAR (gold)
6 / Canva Pro com IA / US$15 / ESSENCIAL (green)
7 / Ideogram / US$0–16 / NICHO (grey)
8 / ElevenLabs / US$5 / NICHO (grey)
9 / HeyGen / US$24 / NICHO (grey)
10 / Reclaim.ai / US$8 / COMPLEMENTAR (gold)

Price ranges use en-dash, slashes have spaces.

BOTTOM (~50px): centered "APOLO SANTOS · stack mínima US$69/mês" cream condensed with mustard gold bullets. Acute on "mínima" and circumflex on "mês" visible. No series tag.

Strict 6-color palette: #1A2A3F navy, #F4EFE5 cream, #C9A14A gold, #1A1F2C graphite, #5A6B3B moss green, #6B7280 grey. No human figures, no robots, no mascots, no 3D, no real tool logos, no decoration, no design polish, no neon. Pure editorial typographic table. --ar 4:5 --v 6
```

---

## VARIANTE B — 10 linhas com numeros gigantes dominantes (mais grafico)

```
Editorial reference table, vertical 4:5 portrait 1080x1350 pixels, deep navy background hex #1A2A3F.

TOP (130px): "10 FERRAMENTAS DE IA PRA PME EM 2026" centered in cream #F4EFE5 condensed caps Bebas Neue 900 size 50px, "preço · quando usar · prioridade" below in mustard gold #C9A14A 22px tracked at 0.15em. Cedilla on "preço" visible.

CENTER: same 10 stacked cream rows BUT NUMERALS DOMINATE — each numeral 1-10 takes ~18% of row width, larger font (serif Black 65px), bleeding into visual rhythm. Tool name column compresses to ~45% width with condensed sans 22px. Price column at 18%. Pill at 19%. Rows slightly shorter (~70px tall) to fit 10 within canvas.

Same 10 entries with same pill colors per category (ESSENCIAL green moss, COMPLEMENTAR gold, NICHO grey). Hairlines mustard gold between rows.

BOTTOM (~50px): "APOLO SANTOS · stack mínima US$69/mês" cream with mustard gold bullets. Acute and circumflex visible.

Strict 6-color palette. Numerals dominate as graphic rhythm. No logos of tools, no figures, no 3D, no decoration. Pure typographic table. --ar 4:5 --v 6
```

---

## VARIANTE C — versao mais magazine spread (sem cards, linhas direto sobre navy)

```
Editorial reference page, vertical 4:5 portrait 1080x1350 pixels, deep navy background hex #1A2A3F.

TOP (140px): "10 FERRAMENTAS DE IA PRA PME EM 2026" centered in cream #F4EFE5 condensed caps 54px, "preço · quando usar · prioridade" below in mustard gold #C9A14A 24px tracked at 0.15em. Cedilla on "preço" visible. Short mustard gold horizontal hairline 120px wide centered below the subheader.

CENTER: 10 entries flush, NO cream row backgrounds (text sits directly on navy), separated by thin mustard gold hairlines at 50 percent opacity. Generous vertical spacing.

Each entry, left to right:
- Numeral 1-10 in matte mustard gold #C9A14A, serif Black 50px
- Tool name in warm cream #F4EFE5 condensed sans heavy Inter Black 28px, vertically centered, left-aligned after numeral
- Price in muted grey #6B7280 mono medium 22px, mid-position
- Filled pill on far right with category label, same color rules (ESSENCIAL green moss #5A6B3B / COMPLEMENTAR gold #C9A14A / NICHO grey #6B7280), letter-spacing 0.15em

Same 10 entries in same order with same pill assignments.

BOTTOM (~50px): centered "APOLO SANTOS · stack mínima US$69/mês" in cream condensed caps with mustard gold bullets. Acute and circumflex visible.

Reads like an FT Weekend editorial table breakdown. Strict 6-color palette. No cream backgrounds, no card lift, no decoration, no figures, no logos. Pure typography directly on solid navy with pills as the only color blocks. --ar 4:5 --v 6
```

---

## NEGATIVE PROMPT (anti-slop + anti-cara-de-design — colar separadamente ou apos prompt)

```
no human figures, no human silhouettes, no human bodies, no faces, no portraits, no professional headshots, no hand close-ups, no businessman stock pose, no people working at desks, no AI-generated faces, no plastic skin, no uncanny eyes, no extra fingers,

no robot, no humanoid robot, no android, no cyborg, no AI mascot, no chatbot avatar, no brain illustration, no light bulb as decoration, no gear icon, no circuit board background, no holographic UI floating in the air, no neural network as decoration,

no real photo background, no stock photography, no 3D render, no CGI, no glossy 3D, no plastic render, no isometric illustration, no cartoon, no clip art, no anime, no vector mascot, no emoji,

no real tool logos, no Claude logo, no ChatGPT logo, no OpenAI logo, no Anthropic logo, no Perplexity logo, no Notion logo, no Granola logo, no Otter logo, no Make logo, no n8n logo, no Canva logo, no Ideogram logo, no ElevenLabs logo, no HeyGen logo, no Reclaim logo, no Microsoft logo, no Google logo, no Apple logo, no LinkedIn logo, no app icons, no SaaS brand marks, no wordmark of any real company,

no decorative flourishes, no curly brackets as decoration, no quotation marks as background art, no arrows between rows, no transition swoosh, no flowchart arrows, no funnel diagram, no bar chart, no pie chart, no comparison sliders, no rating stars, no thumbs up/down icons,

no corner brackets, no L-shaped registration marks, no Pentagram poster style centered tagline, no museum-grade art-print typographic poster, no template aesthetic,

no neon, no glow rims, no halo behind type, no rainbow, no bright primary colors, no saturated cyan magenta yellow, no garish palette, no meme-bright colors, no Y2K aesthetic, no cyberpunk, no glitch, no scanlines,

no Impact font, no Impact typeface with black outline, no white text with thick black stroke, no crude meme typography, no comic sans, no shitpost aesthetic,

no series tag "OS 4Ds DA IA" in footer, no "POST X DE 7" in footer, no series number, no continuity reference labels, no extra English buzzwords,

no missing diacritic on preço (must show cedilla on C), no missing diacritic on mínima (must show acute on I), no missing diacritic on mês (must show circumflex on E), no accent on ESSENCIAL / COMPLEMENTAR / NICHO (these are without accent), no English typos in Portuguese text, no Latin lorem ipsum, no placeholder text in brackets, no extra invented text beyond what is specified, no garbled letterforms, no nonsense brand names,

no affiliate link aesthetic, no "Best Tool" badge, no "Editor's Choice" stamp, no star ratings, no rating bars, no review-site look, no comparison-shopper UI, no e-commerce table aesthetic, no SaaS pricing page look,

not too clean as in over-designed marketing graphic, not a SaaS comparison ad, not a quote card, not an Instagram quote post, not a poster, not a magazine cover, not an advertisement
```

---

## PARAMETROS POR FERRAMENTA (decisao explicita)

| Ferramenta | Parametros | Acentos PT-BR | Layout tabela 10 linhas + pills coloridas | Recomendacao |
|-----------|------------|---------------|--------------------------------------------|--------------|
| **Ideogram** (typography mode) | ratio 4:5, magic prompt OFF, quality EXCELLENT | **OTIMO** — melhor pra preço/mínima/mês | **BOM** — pode pixelar pills, manter colunas direitinhas exige sorte | **PREFERIDO pra single shot** |
| **ChatGPT image (DALL-E 3)** | colar prompt + "vertical 4:5 1080x1350, editorial reference table, clean rows with colored pills" | BOM | BOM — pode falhar em manter 10 linhas exatas com pills corretas | Plano B |
| Midjourney v6 | `--ar 4:5 --v 6 --s 50` | RUIM — costuma quebrar cedilha/agudo | OK | Plano C — gerar fundo, montar texto em editor |
| Gemini Imagen | ratio 4:5, prompt completo | OK | OK | Plano D |
| Leonardo AI | modelo Phoenix, ratio 4:5 | OK | OK | Plano E |
| **Editor (Figma / Canva / Affinity) — montagem direta** | partir do template | **OTIMO** — controle tipografico total + alinhamento exato das 10 linhas + pills coloridas perfeitas | **OTIMO** — garantia 100% das pills certas por categoria | **Plano de Ouro pra controle total** |

> **Decisao — fluxo recomendado:**
> 1. **Caminho rapido (uma geracao):** colar o PROMPT PRINCIPAL (ou Variante A) no **Ideogram** typography mode — melhor garantia dos acentos. Validar no checklist. Atencao: gerar tabela com 10 linhas + 4 colunas exatas + pills coloridas certas e um pedido pesado pra IA — pode precisar de varias geracoes.
> 2. **Se a tabela sair desalinhada, com numero errado de linhas, ou pills com cores trocadas:** ir pra **ChatGPT image (DALL-E 3)** — pode acertar melhor a estrutura tabular.
> 3. **Plano de Ouro — controle total (FORTEMENTE recomendado pra este post):** montar a tabela direto em **Figma / Canva / Affinity Designer**. A complexidade do layout (10 linhas × 4 colunas × pills coloridas por categoria) e o limite onde IAs imagem-pra-pixel costumam falhar. Em editor: navy de fundo + faixas creme com hairlines douradas + tipografia condensada nas tres colunas de texto + pills coloridas com cores exatas (verde-musgo #5A6B3B / dourado #C9A14A / cinza #6B7280). Esse caminho elimina 100% do risco de cor de pill errada OU linha faltando OU acento omitido. Como esta thumb e CONTEUDISTA destinada a screenshot+save, o capricho da execucao importa muito.
> Regenerar (ou refazer em editor) se aparecer figura humana, logo real de ferramenta, render 3D, ou se acentos ou pills saírem errados.

---

## CHECKLIST DE VALIDACAO POS-GERACAO (Apolo executa apos receber a imagem)

- [ ] **Dimensao 1080 x 1350 pixels** (4:5 portrait) — se sair em outra proporcao, regenerar ou recortar sem distorcer
- [ ] **PARECE TABELA DE REFERENCIA EXECUTIVA**, estilo Monocle / MIT Sloan / IBM Plex docs — NAO meme, NAO quote card, NAO comparativo SaaS de review-site, NAO marketing graphic (aceite central — se parecer template Instagram ou afiliado, regenerar)
- [ ] **Fundo navy `#1A2A3F`** profundo — nao preto, nao azul royal, nao azul vibrante
- [ ] **Header presente:** `10 FERRAMENTAS DE IA PRA PME EM 2026` em creme, condensed caps peso 900
- [ ] **Subheader presente:** `preço · quando usar · prioridade` em dourado, com cedilha em `preço` visivel
- [ ] **Exatamente 10 linhas** empilhadas verticalmente — nem 9, nem 11
- [ ] **Numeros 1-10 em dourado** `#C9A14A` na primeira coluna de cada linha
- [ ] **Nomes das 10 ferramentas legiveis na ordem correta:**
  - [ ] Linha 1: `Claude Pro / ChatGPT Plus`
  - [ ] Linha 2: `Perplexity Pro`
  - [ ] Linha 3: `Notion AI`
  - [ ] Linha 4: `Granola / Otter`
  - [ ] Linha 5: `Make / n8n`
  - [ ] Linha 6: `Canva Pro com IA`
  - [ ] Linha 7: `Ideogram`
  - [ ] Linha 8: `ElevenLabs`
  - [ ] Linha 9: `HeyGen`
  - [ ] Linha 10: `Reclaim.ai`
- [ ] **Precos corretos em cinza:** US$20 / US$20 / US$10 / US$0–14 / US$9–29 / US$15 / US$0–16 / US$5 / US$24 / US$8
- [ ] **Pills coloridas corretas por categoria (regra dura):**
  - [ ] Linhas 1, 2, 4, 6: pill `ESSENCIAL` verde-musgo `#5A6B3B` com texto creme
  - [ ] Linhas 3, 5, 10: pill `COMPLEMENTAR` dourado `#C9A14A` com texto grafite
  - [ ] Linhas 7, 8, 9: pill `NICHO` cinza `#6B7280` com texto creme
- [ ] **Acentos PT-BR visiveis:** `preço` cedilha, `mínima` agudo, `mês` circunflexo
- [ ] **Pills sem acento:** ESSENCIAL, COMPLEMENTAR, NICHO — manter sem acento
- [ ] Tipografia condensada pesada e profissional (Bebas Neue, Anton, Druk, Inter Black caps) — NAO Impact, NAO meme font
- [ ] **Footer presente e LIMPO:** `APOLO SANTOS · stack mínima US$69/mês` com bullets dourados
- [ ] **Footer SEM "OS 4Ds DA IA"** (regra v2.1 — post independente)
- [ ] **Footer SEM "POST X DE 7"** (regra v2.1)
- [ ] **Numero-ancora `stack mínima US$69/mês`** presente no footer (gancho saveavel)
- [ ] **Paleta restrita as 6 cores** (`#1A2A3F` navy, `#F4EFE5` creme, `#C9A14A` dourado, `#1A1F2C` grafite, `#5A6B3B` verde-musgo, `#6B7280` cinza)
- [ ] **Sem logos reais das ferramentas** (Claude, ChatGPT, Perplexity, Notion, Canva, Ideogram, etc) — apenas texto
- [ ] **Sem figura humana, sem rosto, sem robo, sem mascote, sem brain, sem light bulb, sem render 3D, sem foto, sem decoracao**
- [ ] Compreensivel em 3 segundos no scroll mobile — quem da screenshot ja levou a curadoria das 10 ferramentas + suas prioridades

> Se a imagem falhar em qualquer item OBRIGATORIO (numero errado de linhas, pills com cor trocada, logos de marca, acentos omitidos, footer com tag de serie), regenerar com NEGATIVE PROMPT reforcado, trocar de ferramenta, ou ir pro Plano de Ouro (montagem em editor). Para um thumb CONTEUDISTA tabular destinado a ser salvo, a precisao das pills coloridas e o que separa "referencia confiavel" de "lista generica".

---

## NOTA DE COESAO COM O PIPELINE POS-SERIE

**Terceira thumb do pipeline pos-serie 4Ds — segunda CONTEUDISTA, primeira em formato tabular.** Estado da rotacao apos o P3:

| # | Data | Tema | Conceito | Variacao |
|---|------|------|----------|----------|
| P1 | 26/05 | 5 prompts pra CEO PME | CONTEUDISTA | cards numerados verticais |
| P2 | 29/05 | iFood Cris | IMAGEM DE ATENCAO | foto cozinha + money line |
| **P3** | **02/06** | **10 ferramentas (este)** | **CONTEUDISTA** | **tabela tabular com pills coloridas** |
| P4 (previsto) | 06/06 | Embraer/Vale/WEG | ATENCAO | comparativo |
| P5 (previsto) | 09/06 | 3 perguntas OPERA/ASSINA | ATENCAO | dica |
| P6 (previsto) | 13/06 | Stone build vs buy | ATENCAO | case BR |
| P7 (previsto) | 16/06 | B2B distribuicao | CONTEUDISTA | aplicacao |
| P8 (previsto) | 20/06 | 7 stacks self-hosted | CONTEUDISTA | lista |
| P9 (previsto) | 23/06 | Walmart/Costco | ATENCAO | comparativo |
| P10 (previsto) | 27/06 | Bonus | a definir | a definir |

**Identidade visual do pipeline (mantida e expandida no P3):**
- **Navy profundo `#1A2A3F`** como fundo — mesma do P1, comeca a virar reconhecivel como "fundo de manual do Apolo"
- **Creme `#F4EFE5`** como cor das linhas/cards — mantida
- **Dourado matte `#C9A14A`** como acento — mantido
- **Grafite `#1A1F2C`** como texto sobre creme — mantido
- **Verde-musgo `#5A6B3B`** como cor de prioridade ESSENCIAL — **NOVO no P3** (vai virar codigo de cor pro pipeline: verde = essencial/recomendado)
- **Cinza `#6B7280`** como cor de prioridade NICHO + preços — **NOVO no P3** (codigo de cor: cinza = secundario/contextual)

**Por que tabela tabular pra este post:** o post entrega 10 ferramentas com curadoria por prioridade. Uma lista linear (igual P1) entregaria os nomes — mas perderia a CURADORIA, que e o real diferencial editorial. A tabela com pills coloridas entrega curadoria E lista no mesmo lugar. Saveabilidade dobrada: o leitor screenshot pra ter a lista E pra saber "quais sao essenciais hoje". Footer com "stack minima US$69/mês" e segundo gancho saveavel — numero ancora pra mostrar em reuniao.

**O que o P3 deixa de heranca pro pipeline:** o sistema de pills coloridas (verde ESSENCIAL / dourado COMPLEMENTAR / cinza NICHO) vira componente reutilizavel. Qualquer post futuro que entregar lista com curadoria pode aplicar o mesmo codigo de cor. O navy + creme + dourado consolida como assinatura visual do "manual executivo do Apolo".

---

FIM. Apolo: caminho rapido — cole o **PROMPT PRINCIPAL** (ou Variante A) no **Ideogram** typography mode. Se a tabela sair com numero errado de linhas, pills com cor trocada, ou acentos omitidos, va pro **Plano de Ouro**: montar a tabela em Figma / Canva / Affinity, controle tipografico total, garantia 100% das pills certas por categoria e dos 3 acentos (`preço`, `mínima`, `mês`). Valide com o checklist de 22 itens — atencao dura ao numero exato de linhas (10), pills coloridas corretas (ESSENCIAL verde / COMPLEMENTAR dourado / NICHO cinza), acentos visiveis, e ao **footer LIMPO** (sem tag de serie, COM numero-ancora `stack mínima US$69/mês`). Para um thumb CONTEUDISTA tabular destinado a screenshot+save, o capricho da execucao e o que separa "referencia salva" de "passou no feed".
