# THUMBNAIL AI PROMPT — PIPELINE POST 5 · 3 PERGUNTAS QUE SEPARAM QUEM OPERA IA DE QUEM SÓ ASSINOU

> **STATUS:** APROVADO 16/05/2026 · pronto pra Apolo gerar imagem
> **Conceito:** IMAGEM DE ATENCAO — CARTAZ TIPOGRAFICO PURO com as 3 perguntas como hero visual + money line embaixo
> **NOTA DE CONCEITO:** quinta thumb do pipeline pos-serie 4Ds. Estado da rotacao: P1 conteudista cards, P2 atencao foto cozinha, P3 conteudista tabela, P4 atencao foto industrial, P5 (este) **PRIMEIRA atencao TIPOGRAFICA PURA do pipeline** (sem foto). Em vez de foto + texto sobreposto, as 3 perguntas viram heroi visual — leitor le SEM PRECISAR ABRIR O POST. Paleta navy + dourado + creme da identidade do pipeline, agora aplicada a um cartaz tipografico provocativo. A money line embaixo (`ASSINAR NÃO É OPERAR.` com `OPERAR` em dourado) fecha com soco. REGRA DURA v2.1: post INDEPENDENTE, footer LIMPO sem tag de serie.
> **Politica vigente (REGRA 11):** Thumbnail terminal entrega apenas este prompt.md. Apolo gera a imagem externamente. Sem HTML, sem PNG local.

---

## DIMENSAO ALVO
- **1080 x 1350 pixels** (4:5 portrait, padrao LinkedIn feed)
- Aspect ratio: `--ar 4:5` (Midjourney) / `1080x1350` em Ideogram/ChatGPT/Gemini / `--size 1024x1280` aproximado em DALL-E (reescalar sem distorcer)

---

## A IDEIA EM UMA FRASE

Um manifesto editorial em fundo navy profundo: header pequeno dourado, 3 perguntas gigantes em serif heavy creme (cada uma com numeral dourado e uma sublinha em italica delicada que nomeia o eixo), separadas por hairlines douradas, e embaixo a money line com `OPERAR` em dourado como veredicto. Sem foto, sem ilustracao, sem decoracao — pura tipografia editorial estilo manifesto de revista seria. Quem para no feed le as 3 perguntas em 5 segundos e ja sabe se opera ou se so assinou.

---

## TEXTOS EXATOS QUE PRECISAM APARECER NA IMAGEM (literal, com acentos PT-BR)

### Header (topo, dourado, condensed caps)
`3 PERGUNTAS QUE SEPARAM`

### 3 perguntas (centro, empilhadas verticalmente, cada uma com numero + texto + sublinha)
1. `1` (dourado gigante) + `RODOU OU SÓ TESTOU?` (creme serif heavy) + sublinha italica `uso real` (cinza-creme)
2. `2` (dourado gigante) + `REDESENHOU OU EMPILHOU?` (creme serif heavy) + sublinha italica `fluxo` (cinza-creme)
3. `3` (dourado gigante) + `MOVEU A DRE OU SÓ O BOLETO?` (creme serif heavy) + sublinha italica `outcome` (cinza-creme)

### Money line (centro inferior, sobre hairline maior dourada)
`ASSINAR NÃO É OPERAR.`
> Com a palavra `OPERAR` em dourado matte (palavra-martelo, mesma fonte mesmo tamanho, cor de destaque)

### Footer (banda inferior, LIMPO)
`APOLO SANTOS`

> **Atencao critica de acentuacao (regra dura da serie — 4 diacriticos):**
> - `SÓ` — agudo no O (aparece DUAS VEZES: pergunta 1 "RODOU OU SÓ TESTOU?" e pergunta 3 "MOVEU A DRE OU SÓ O BOLETO?")
> - `NÃO` — til no A (money line)
> - `É` — agudo no E (money line)
> Demais palavras sem acento — manter sem acento. As sublinhas em minusculo italica (uso real / fluxo / outcome) tambem sem acento.
> Se a ferramenta omitir QUALQUER um dos diacriticos (SÓ pergunta 1, SÓ pergunta 3, NÃO, É), REGENERAR ou trocar de ferramenta. Sem excecao.

---

## PROMPT PRINCIPAL (cinematografico — versao mestre, ingles tecnico)

```
A serious, sophisticated editorial typographic manifesto poster, vertical 4:5 portrait composition, exact dimensions 1080x1350 pixels. The aesthetic is "executive briefing manifesto" or "magazine opener spread" — like a feature article opener from Monocle, The Economist 1843, FT Weekend Magazine, MIT Sloan Management Review, or a Pentagram editorial poster. Smart, sober, provocative, save-friendly. NOT a meme, NOT a marketing graphic, NOT a quote card, NOT an Instagram inspirational post, NOT a designed template.

OVERALL CANVAS — deep navy hex #1A2A3F as the dominant background color (matching the pipeline identity established in P1 and P3), the color of an executive notebook or a leather-bound manifesto. The composition is divided into a small header at the top, three large stacked questions in the center (the hero), a money line right below them, and a discreet thin footer at the bottom.

TOP HEADER (~80px area at the top) — sits directly on the navy background, no separator. A single line centered horizontally, in matte mustard gold hex #C9A14A, condensed sans-serif all-caps (Bebas Neue, Anton, or Druk Wide Bold), letter-spacing generous at 0.18em, font size approximately 32 pixels, reading exactly: "3 PERGUNTAS QUE SEPARAM". Below it, a short matte mustard gold horizontal hairline 200 pixels wide centered, 1.5 pixel stroke.

CENTRAL HERO — THREE STACKED QUESTIONS — the dominant visual element of the canvas. Three questions stacked vertically, each occupying roughly 280 pixels of vertical height, separated by thin matte mustard gold hex #C9A14A hairlines (1 pixel stroke at 60 percent opacity) running full width with ~80 pixels of inner padding from canvas edges.

Each question is structured in three elements, laid out as follows:
- LEFT: a GIANT NUMERAL (1, 2, or 3) in matte mustard gold hex #C9A14A, serif Black at heavy weight (Playfair Display Black, Tiempos Headline Black, or Domaine Display Black) at font size approximately 130 pixels, vertically centered within the question block, taking ~15 percent of width on the left.
- CENTER: the QUESTION TEXT in warm cream hex #F4EFE5, serif heavy at peso 900 (Playfair Display Black, Tiempos Headline Black, or Domaine Display Black) at font size approximately 44 pixels, vertically centered, tight optical leading (line-height around 1.05), letter-spacing slightly negative, broken across one or two lines as needed to fit width.
- BELOW the question text: a SMALL ITALIC SUBLINE in muted cool grey hex #A8B2C1 (cream-grey), serif italic peso 400 at font size approximately 22 pixels, letter-spacing 0.05em, lowercase, positioned roughly 14 pixels below the question text, aligned with the start of the question text.

The three questions read exactly with full Brazilian Portuguese accents preserved:
QUESTION 1:
- Numeral: "1"
- Text: "RODOU OU SÓ TESTOU?" — acute accent on SÓ clearly visible in caps
- Subline: "uso real"

QUESTION 2:
- Numeral: "2"
- Text: "REDESENHOU OU EMPILHOU?" — no diacritics needed
- Subline: "fluxo"

QUESTION 3:
- Numeral: "3"
- Text: "MOVEU A DRE OU SÓ O BOLETO?" — acute accent on SÓ clearly visible in caps
- Subline: "outcome"

Between question 1 and question 2: thin mustard gold hairline divider.
Between question 2 and question 3: thin mustard gold hairline divider.

BELOW THE THREE QUESTIONS — a slightly thicker mustard gold horizontal hairline divider (1.5 pixel stroke, full width with the same 80 pixel padding) signaling the transition from the questions to the verdict.

MONEY LINE (below the divider, centered horizontally) — a single line in warm cream hex #F4EFE5 with one word highlighted in matte mustard gold, condensed sans-serif all-caps heavy weight (Bebas Neue, Anton, or Druk Wide Bold), letter-spacing 0.04em, font size approximately 50 pixels. The line reads exactly: "ASSINAR NÃO É OPERAR." with the word "OPERAR" rendered in matte mustard gold hex #C9A14A (same font, same weight, same size — only the color differs). The tilde on NÃO and the acute accent on É must be clearly rendered even in caps. The period at the end is in cream.

BOTTOM FOOTER (~50px at very bottom) — a slim thin strip sitting directly on the navy background. Reads exactly in condensed sans-serif all-caps, letter-spacing 0.2em, in warm cream hex #F4EFE5 with a single bullet separator in matte mustard gold hex #C9A14A, font size approximately 14 pixels: "APOLO SANTOS". Small and unobtrusive. NO series tag, NO post number — independent post.

MOOD — serious, didactic, manifesto-confident. The viewer scrolls past, freezes because the three questions land as a self-assessment they cannot avoid. The numerals in gold create vertical rhythm. The italic sublines (uso real / fluxo / outcome) feel like editorial annotations from a magazine editor — quiet markers that label each axis without shouting. The whole image carries the weight of "este e o teste, faca em 60 segundos" — a real tool, not a quote card.

COLOR PALETTE STRICTLY LIMITED to exactly four colors and no others:
- #1A2A3F deep navy (main background)
- #F4EFE5 warm cream (question texts, money line body, footer text)
- #C9A14A matte mustard gold (header, giant numerals, hairlines, hammer word OPERAR, footer bullet)
- #A8B2C1 muted cool cream-grey (italic sublines uso real / fluxo / outcome)

No other colors permitted. No gradients on text. No drop shadows. No bevels. No 3D. No neon. No rainbow. Flat clean color fields, razor-sharp editorial typography.

STYLE REFERENCES — Monocle magazine article openers, FT Weekend Magazine feature spreads, The Economist 1843 essay openers, MIT Sloan Management Review article hero pages, Pentagram editorial posters by Paula Scher, Penguin Modern Classics didactic restraint, Werkplaats Typografie experimental editorial layouts, Massimo Vignelli grid-based magazine design.

--ar 4:5 --v 6
```

---

## VARIANTE A — cartaz tipografico com 3 perguntas como hero (cena principal, recomendada)

```
Editorial typographic manifesto poster, vertical 4:5 portrait 1080x1350 pixels, deep navy background hex #1A2A3F.

TOP (~80px): centered "3 PERGUNTAS QUE SEPARAM" in matte mustard gold #C9A14A condensed caps Bebas Neue 900 ~32px, letter-spacing 0.18em. Short mustard gold horizontal hairline 200px wide centered below.

CENTRAL HERO: three stacked questions, each ~280px tall, separated by thin mustard gold hairlines at 60% opacity.

Each question structure:
- Giant numeral on left in mustard gold #C9A14A, serif Black Playfair Display 130px, vertically centered (~15% width)
- Question text in cream #F4EFE5, serif heavy Playfair Display Black 44px, vertically centered, tight leading
- Italic subline below in cool cream-grey #A8B2C1, serif italic Playfair Display Italic 22px, lowercase, positioned ~14px below question text

Questions exactly:
Q1: "1" / "RODOU OU SÓ TESTOU?" (acute on SÓ visible) / "uso real"
Q2: "2" / "REDESENHOU OU EMPILHOU?" / "fluxo"
Q3: "3" / "MOVEU A DRE OU SÓ O BOLETO?" (acute on SÓ visible) / "outcome"

Below Q3: slightly thicker mustard gold hairline divider, 1.5px, full width with 80px padding.

MONEY LINE (centered below divider): "ASSINAR NÃO É OPERAR." in cream #F4EFE5 condensed sans caps Bebas Neue 900 ~50px, with the word "OPERAR" rendered in matte mustard gold #C9A14A (same font/weight/size, color only differs). Tilde on NÃO and acute on É clearly visible.

BOTTOM (~50px): centered "APOLO SANTOS" cream condensed caps with mustard gold bullet. NO series tag.

Strict 4-color palette: #1A2A3F navy, #F4EFE5 cream, #C9A14A gold, #A8B2C1 cool cream-grey. No photos, no figures, no robots, no mascots, no 3D, no logos, no decoration. Pure editorial typography manifesto. --ar 4:5 --v 6
```

---

## VARIANTE B — foto de mao segurando boleto/fatura + money line sobreposta (mais visceral)

```
Candid editorial photograph, vertical 4:5 portrait 1080x1350 pixels. Close-up of a real human hand (no face, no body — only hand and partial forearm) holding a printed paper invoice or receipt over a wooden desk. The invoice has illegible generic text (no readable company name, no real brand logo, no real OpenAI / Microsoft / Anthropic invoice). The paper is slightly creased, real receipt texture, sitting on a working desk with maybe a coffee cup and a notebook out of focus in background. Natural side window light, slightly desaturated editorial contrast, faint film grain, photojournalistic, captured-not-staged. NOT stock smiling, NOT 3D, NOT corporate glamour.

Translucent dark scrim #0E0E10 at 70% opacity over the lower half. Overlaid centered money line in condensed sans caps heavy (Anton / Bebas Neue 900 / Druk):
"ASSINAR NÃO É OPERAR." in cream #F4EFE5 ~52px, with the word "OPERAR" in matte mustard gold #C9A14A (same size/weight, color only differs). Tilde on NÃO and acute on É visible.

Above the money line, smaller, in cream condensed caps tracked 0.18em ~22px: "3 PERGUNTAS QUE SEPARAM QUEM OPERA IA". This anchors the post topic.

BOTTOM (~50px): "APOLO SANTOS" cream condensed caps with mustard gold bullet. NO series tag.

No face, no real brand on the invoice, no logo, no 3D, no AI-hand cliche, no robot. The unbranded invoice + working hand sells "you pay for it but does it move the needle?" --ar 4:5 --style raw --v 6
```

---

## VARIANTE C — print mockup de Adoption Dashboard (mais provocativo, mais especifico)

```
Editorial mockup of a clean SaaS Adoption Dashboard interface, vertical 4:5 portrait 1080x1350 pixels, deep navy background hex #1A2A3F. The mockup looks like a real internal analytics dashboard — but generic, no real brand logo (no Microsoft, no Salesforce, no any real SaaS).

A central card on cream #F4EFE5 background occupies the middle of the canvas. The card shows a stark statistic in large editorial type:
- Top label in muted grey #6B7280 condensed caps: "ADOPTION SNAPSHOT · 60 DAYS"
- Below: massive split fraction in deep graphite #1A1F2C, serif Black Playfair 120px: "3 / 30"
- Subline in graphite condensed medium: "active users / paid seats"
- Below: smaller stat in mustard gold #C9A14A condensed bold: "cost per active user: 10x sticker price"

TOP (~70px): centered "3 PERGUNTAS QUE SEPARAM QUEM OPERA IA" in mustard gold #C9A14A condensed caps Bebas Neue 900 ~26px tracked 0.18em.

BOTTOM (~110px): centered money line in cream #F4EFE5 condensed caps Bebas Neue 900 ~46px: "ASSINAR NÃO É OPERAR." with "OPERAR" in mustard gold. Tilde on NÃO and acute on É visible.

Below money line in cream condensed caps ~14px tracked 0.2em with mustard gold bullet: "APOLO SANTOS". NO series tag.

Mockup feels real, generic, sober — like an editor's screenshot of a real internal dashboard. No real brand logos. No 3D, no decoration, no figures. --ar 4:5 --v 6
```

---

## NEGATIVE PROMPT (anti-slop + anti-cara-de-design — colar separadamente ou apos prompt)

```
no human figures, no human silhouettes, no human bodies, no faces, no portraits, no hand close-ups (unless explicitly Variant B), no professional headshots, no businessman stock pose, no AI-generated faces, no plastic skin, no uncanny eyes,

no robot, no humanoid robot, no android, no cyborg, no AI mascot, no chatbot avatar, no brain illustration, no light bulb as decoration, no gear icon as overlay, no circuit board background, no holographic UI floating in the air, no neural network as decoration, no AI hand cliche, no glowing finger touching anything,

no real photo background (except Variant B which uses a real photo), no stock photography, no 3D render, no CGI, no glossy 3D, no plastic render, no isometric illustration, no cartoon, no clip art, no anime, no vector mascot, no emoji,

no real brand logos, no OpenAI logo, no ChatGPT logo, no Anthropic logo, no Claude logo, no Microsoft logo, no Copilot logo, no Google logo, no Salesforce logo, no MIT logo, no McKinsey logo, no Harvard Business Review logo, no Fortune magazine logo, no QR code, no barcode, no watermark other than the explicit footer credit line,

no decorative flourishes, no quotation marks as background art, no arrows between questions, no question mark icons, no checkmarks, no X marks, no rating stars, no thumbs up/down icons,

no corner brackets, no L-shaped registration marks, no museum-grade art-print typographic poster styled to look like fine art, no template aesthetic, no Instagram quote card aesthetic,

no neon, no glow rims, no halo behind type, no rainbow, no bright primary colors, no saturated cyan magenta yellow, no garish palette, no meme-bright colors, no Y2K aesthetic, no cyberpunk, no glitch, no scanlines,

no Impact font, no Impact typeface with black outline, no white text with thick black stroke, no crude meme typography, no comic sans, no shitpost aesthetic, no motivational quote post aesthetic,

no series tag "OS 4Ds DA IA" in footer, no "POST X DE 7" in footer, no series number, no continuity reference labels, no extra English buzzwords like "Disruption", "Revolution", "Future of Work",

no missing diacritic on SÓ (must show acute on O — appears twice in question 1 and question 3, both must show), no missing diacritic on NÃO (must show tilde on A in money line), no missing diacritic on É (must show acute on E in money line), no English typos in Portuguese text, no Latin lorem ipsum, no placeholder text in brackets, no extra invented text beyond what is specified, no garbled letterforms, no nonsense Portuguese,

no accusatory tone visualization, no judgment iconography, no X over things, no failed checkmarks, no "WRONG" or "FAIL" stamps, no shame imagery,

not too clean as in over-designed marketing graphic, not a quote card, not an Instagram quote post, not a poster, not a designed template, not an advertisement, not a self-help motivational graphic
```

---

## PARAMETROS POR FERRAMENTA (decisao explicita)

| Ferramenta | Parametros | Acentos PT-BR | Layout tipografico editorial limpo | Recomendacao |
|-----------|------------|---------------|-------------------------------------|--------------|
| **Ideogram** (typography mode) | ratio 4:5, magic prompt OFF, quality EXCELLENT | **OTIMO** — melhor pra SÓ (2x), NÃO, É | **OTIMO** — forte em manifesto tipografico editorial | **PREFERIDO** |
| **ChatGPT image (DALL-E 3)** | colar prompt + "vertical 4:5 1080x1350, editorial typographic manifesto, serif heavy on navy" | BOM | BOM — pode misturar fontes ou alinhamento | Plano B |
| Midjourney v6 | `--ar 4:5 --v 6 --s 50` | RUIM — costuma quebrar SÓ, NÃO, É | OK — bonito mas pode meme-ificar | Plano C — gerar fundo navy + montar texto em editor |
| Gemini Imagen | ratio 4:5, prompt completo | OK | BOM | Plano D |
| Leonardo AI | modelo Phoenix, ratio 4:5 | OK | OK | Plano E |
| **Editor (Figma / Canva / Affinity) — montagem direta** | partir do template | **OTIMO** — controle tipografico total | **OTIMO** — garantia 100% das hairlines, numerais alinhados, OPERAR colorido certo | **Plano de Ouro pra controle total** |

> **Decisao — fluxo recomendado:**
> 1. **Caminho rapido (uma geracao):** colar o PROMPT PRINCIPAL (ou Variante A) no **Ideogram** typography mode — melhor garantia dos 4 acentos PT-BR num formato com 3 perguntas. Validar no checklist.
> 2. **Se a tipografia sair desalinhada ou mistura fontes serif e sans:** ir pra **Variante A no ChatGPT image (DALL-E 3)**.
> 3. **Plano de Ouro — controle tipografico total (FORTEMENTE recomendado pra este post):** montar o cartaz manifesto direto em **Figma / Canva / Affinity Designer**. A complexidade do layout (3 perguntas × 3 elementos cada — numeral serif Black + texto serif heavy + subline italic — + hairlines + money line com palavra colorida) e o limite onde IAs imagem-pra-pixel costumam falhar. Em editor: navy de fundo + Bebas Neue/Anton/Druk pro header + Playfair Display Black pros numerais e questoes + Playfair Display Italic pras sublines + condensed sans caps pra money line com `OPERAR` colorido em dourado. Esse caminho elimina 100% do risco de fontes erradas OU acentos omitidos OU layout misturado.
> Regenerar (ou refazer em editor) se aparecer figura humana, AI-hand cliche, render 3D, ou se qualquer acento sair omitido, ou se `OPERAR` nao sair em dourado.

---

## CHECKLIST DE VALIDACAO POS-GERACAO (Apolo executa apos receber a imagem)

- [ ] **Dimensao 1080 x 1350 pixels** (4:5 portrait) — se sair em outra proporcao, regenerar ou recortar sem distorcer
- [ ] **PARECE MANIFESTO EDITORIAL TIPOGRAFICO** estilo Monocle / FT Weekend / Pentagram poster — NAO quote card, NAO Instagram inspiracional, NAO marketing graphic, NAO self-help motivational (aceite central — se parecer Instagram quote, REPROVA)
- [ ] **Fundo navy `#1A2A3F`** profundo — nao preto, nao azul royal, nao azul vibrante
- [ ] **Header presente:** `3 PERGUNTAS QUE SEPARAM` em dourado, condensed caps, com hairline dourada curta abaixo
- [ ] **Exatamente 3 perguntas empilhadas verticalmente** — nem 2, nem 4
- [ ] **Numerais gigantes 1, 2, 3 em dourado** `#C9A14A` na esquerda de cada pergunta
- [ ] **As 3 perguntas legiveis na ordem correta:**
  - [ ] Q1: `1` + `RODOU OU SÓ TESTOU?` + sublinha `uso real`
  - [ ] Q2: `2` + `REDESENHOU OU EMPILHOU?` + sublinha `fluxo`
  - [ ] Q3: `3` + `MOVEU A DRE OU SÓ O BOLETO?` + sublinha `outcome`
- [ ] **Textos das perguntas em SERIF HEAVY** (Playfair Display Black, Tiempos Headline Black ou Domaine) — NAO condensed sans, NAO Impact
- [ ] **Sublinhas em italica cinza-creme** (`uso real`, `fluxo`, `outcome`) presentes e legiveis em minusculo
- [ ] **Hairlines douradas separadoras** entre Q1-Q2 e Q2-Q3 visiveis (finas, ~60% opacity)
- [ ] **Hairline maior dourada** separando area das perguntas da money line
- [ ] **Money line presente:** `ASSINAR NÃO É OPERAR.` em creme condensed caps
- [ ] **Palavra `OPERAR` em DOURADO** `#C9A14A` (palavra-martelo) — mesma fonte/tamanho da money line, cor diferente
- [ ] **Acentos PT-BR conferidos visualmente (regra dura — 4 diacriticos):**
  - [ ] `SÓ` Q1 — agudo no O visivel
  - [ ] `SÓ` Q3 — agudo no O visivel
  - [ ] `NÃO` money line — til no A visivel
  - [ ] `É` money line — agudo no E visivel
- [ ] **Footer presente e LIMPO:** `APOLO SANTOS` com bullet dourado
- [ ] **Footer SEM "OS 4Ds DA IA"** (regra v2.1 — post independente)
- [ ] **Footer SEM "POST X DE 7"** (regra v2.1)
- [ ] **Paleta restrita as 4 cores** (`#1A2A3F` navy, `#F4EFE5` creme, `#C9A14A` dourado, `#A8B2C1` cinza-creme)
- [ ] **Sem figura humana, sem rosto, sem robo, sem mascote, sem brain, sem AI-hand cliche, sem render 3D, sem foto, sem logos de marca, sem decoracao**
- [ ] Compreensivel em 5 segundos no scroll mobile — quem ve ja le as 3 perguntas e a money line, ja sabe se opera ou se so assinou

> Se a imagem falhar em qualquer item OBRIGATORIO (acentos omitidos, fontes erradas, OPERAR nao em dourado, figura humana, render 3D, footer com tag de serie), regenerar com NEGATIVE PROMPT reforcado, trocar de ferramenta, ou ir pro Plano de Ouro (montagem em editor). Para um thumb DE ATENCAO tipografico provocativo, a precisao da hierarquia visual (numerais > perguntas > sublinhas > money line) e o que separa "manifesto serio" de "quote card pra Instagram".

---

## NOTA DE COESAO COM O PIPELINE POS-SERIE

**Quinta thumb do pipeline pos-serie 4Ds — terceira IMAGEM DE ATENCAO, primeira TIPOGRAFICA PURA do pipeline.** Estado da rotacao apos o P5:

| # | Data | Tema | Conceito | Variacao |
|---|------|------|----------|----------|
| P1 | 26/05 | 5 prompts pra CEO PME | CONTEUDISTA | cards numerados verticais (navy) |
| P2 | 29/05 | iFood Cris | IMAGEM DE ATENCAO | foto cozinha BR + money line |
| P3 | 02/06 | 10 ferramentas | CONTEUDISTA | tabela tabular com pills coloridas (navy) |
| P4 | 05/06 | Embraer/Vale/WEG | IMAGEM DE ATENCAO | foto industrial + 3 nomes header + SENSOR |
| **P5** | **09/06** | **3 perguntas (este)** | **IMAGEM DE ATENCAO** | **cartaz tipografico puro 3 perguntas + OPERAR (navy)** |
| P6 (previsto) | 13/06 | Stone build vs buy | ATENCAO | case BR |
| P7 (previsto) | 16/06 | B2B distribuicao | CONTEUDISTA | aplicacao |
| P8 (previsto) | 20/06 | 7 stacks self-hosted | CONTEUDISTA | lista |
| P9 (previsto) | 23/06 | Walmart/Costco | ATENCAO | comparativo |
| P10 (previsto) | 27/06 | Bonus | a definir | a definir |

**Identidade visual do pipeline (consolidada no P5):**
- **Navy profundo `#1A2A3F`** como fundo — usado no P1 (cards), P3 (tabela) e P5 (manifesto). Tres aplicacoes consolidam o navy como "fundo de manual do Apolo".
- **Creme `#F4EFE5`** como cor principal de texto — mantida.
- **Dourado matte `#C9A14A`** como acento de marca — mantido.
- **Cinza-creme `#A8B2C1`** — **NOVO no P5** (sublinhas italicas). Pode virar codigo de "anotacao editorial / metadata" pro pipeline.

**Distincao das 3 IMAGENS DE ATENCAO do pipeline:**

| Dimensao | P2 (iFood) | P4 (Embraer/Vale/WEG) | P5 (3 perguntas — este) |
|----------|-----------|----------------------|--------------------------|
| Estetica | Foto cozinha BR humana | Foto industrial unificada | Cartaz tipografico puro (sem foto) |
| Universo | Food service / atendimento | Industria pesada / manutencao | Identidade / autoavaliacao |
| Hero visual | Foto + money line ENCAIXOU | Foto + 3 nomes + money line SENSOR | 3 perguntas serif gigantes + money line OPERAR |
| Saveabilidade | Media | Media-alta | Alta (3 perguntas viram ferramenta) |

P5 inova ao mostrar que IMAGEM DE ATENCAO **nao precisa de foto** — pode ser puramente tipografica se o tema for conceitual/provocativo.

**Por que cartaz tipografico casa com o Post 5 (3 perguntas OPERAR vs ASSINAR):** o post inteiro e uma ferramenta autoavaliativa em 3 perguntas. A thumb que entrega as 3 perguntas LIDAS NO FEED ja faz a venda — leitor que para no feed le, faz o teste mental, e abre o post pra ver a explicacao. Quem da screenshot leva o teste pra usar na proxima reuniao de board. Foto seria distracao — o texto E o conteudo.

**Heranca visual pro pipeline:** este post estreia o **padrao "manifesto editorial tipografico"** — fundo navy + header pequeno dourado + hero serif Black em creme + numerais dourados + hairlines + money line com palavra-martelo. Reutilizavel pra qualquer post futuro do pipeline que seja tese conceitual / provocacao / autoavaliacao (P10 bonus pode aplicar se for tema desse tipo).

---

FIM. Apolo: caminho rapido — cole o **PROMPT PRINCIPAL** (ou Variante A) no **Ideogram** typography mode. Se a tipografia sair desalinhada (fonts misturadas, sublinhas mal posicionadas, ou OPERAR sem dourado), va pro **Plano de Ouro**: montar o manifesto em Figma / Canva / Affinity, controle tipografico total, garantia 100% dos 4 acentos (`SÓ` 2x, `NÃO`, `É`) e da hierarquia visual (numerais > perguntas > sublinhas > money line). Valide com o checklist de 22 itens — atencao dura aos acentos, ao **footer LIMPO** sem tag de serie, e ao **aceite central**: se parecer Instagram quote card ou template de marketing em vez de manifesto editorial serio (estilo Monocle / FT Weekend / Pentagram), regenerar. Para um thumb DE ATENCAO tipografica destinada a provocar autoavaliacao, a sobriedade editorial e o que separa "ferramenta" de "post motivacional".
