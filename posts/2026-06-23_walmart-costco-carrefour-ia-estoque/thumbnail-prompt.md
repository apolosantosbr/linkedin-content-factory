# THUMBNAIL AI PROMPT — PIPELINE POST 9 · WALMART, COSTCO, CARREFOUR — IA EM ESTOQUE

> **STATUS:** APROVADO 16/05/2026 · pronto pra Apolo gerar imagem
> **Conceito:** IMAGEM DE ATENCAO — foto editorial real de prateleira de supermercado ou centro de distribuicao (sem rosto humano) + 3 nomes em tipografia pura dourada no topo + money line sobreposta com `DESPERTADOR` em dourado palavra-martelo
> **NOTA DE CONCEITO:** nona thumb do pipeline pos-serie 4Ds (ULTIMO post do pipeline, mas SEM fecho explicito — comeca do zero como qualquer outro). Quinta IMAGEM DE ATENCAO (P2 foto cozinha, P4 foto industrial, P5 cartaz tipografico, P6 cena engenheiro, P9 este = foto editorial varejo). Reaplica o padrao P4 (foto editorial + 3 nomes em tipografia pura + money line com palavra-martelo dourada), mas com universo distinto: VAREJO em vez de INDUSTRIA pesada. **CRITICO:** ZERO logos reais Walmart/Costco/Carrefour — apenas tipografia dos nomes setada pelo designer. REGRA DURA v2.1: post INDEPENDENTE, footer LIMPO sem tag de serie nem fecho de pipeline.
> **Politica vigente (REGRA 11):** Thumbnail terminal entrega apenas este prompt.md. Apolo gera a imagem externamente. Sem HTML, sem PNG local.

---

## DIMENSAO ALVO
- **1080 x 1350 pixels** (4:5 portrait, padrao LinkedIn feed)
- Aspect ratio: `--ar 4:5` (Midjourney) / `1080x1350` em Ideogram/ChatGPT/Gemini / `--size 1024x1280` aproximado em DALL-E (reescalar sem distorcer)

---

## A IDEIA EM UMA FRASE

Uma foto editorial real de corredor de supermercado ou centro de distribuicao — prateleira organizada com produto a vista (caixas, embalagens, hortifruti sutil), luz natural quente, fotojornalismo dessaturado, SEM rosto humano. Banda superior dourada com `WALMART · COSTCO · CARREFOUR` em tipografia pura (zero logos). Centro inferior sobre dark scrim: money line em 2 linhas com `ESTOQUE PARADO É CAPITAL DORMINDO. / IA É O DESPERTADOR.` — `DESPERTADOR` explodindo em dourado ~40% maior como palavra-martelo. Quem para no feed reconhece o universo varejo, le os 3 nomes na faixa dourada e ja sabe que o post entrega 3 playbooks de IA em estoque.

---

## TEXTOS EXATOS QUE PRECISAM APARECER NA IMAGEM (literal, com acentos PT-BR)

### Faixa superior — header dos 3 nomes (sobre dark scrim, dourado)
`WALMART  ·  COSTCO  ·  CARREFOUR`

### Centro inferior — money line empilhada em 2 linhas (sobre dark scrim)
- **Linha 1 (creme):** `ESTOQUE PARADO É CAPITAL DORMINDO.`
- **Linha 2 (creme com `DESPERTADOR` em dourado ~30-40% MAIOR — palavra-martelo):** `IA É O DESPERTADOR.`

### Faixa inferior — footer (LIMPO, INDEPENDENTE)
`APOLO SANTOS  ·  IA EM ESTOQUE`

> **Atencao critica de acentuacao (regra dura da serie — 2 diacriticos):**
> - `É` linha 1 — agudo no E (em "ESTOQUE PARADO É CAPITAL DORMINDO.")
> - `É` linha 2 — agudo no E (em "IA É O DESPERTADOR.") — segunda ocorrencia
> Demais palavras sem acento — WALMART, COSTCO, CARREFOUR, ESTOQUE, PARADO, CAPITAL, DORMINDO, IA, O, DESPERTADOR, APOLO, SANTOS, EM, CC, BY, NC, SA — manter sem acento.
> Se a ferramenta omitir QUALQUER um dos 2 diacriticos (É linha 1, É linha 2), REGENERAR ou trocar de ferramenta. Sem excecao.

---

## PROMPT PRINCIPAL (cinematografico — versao mestre, ingles tecnico)

```
A real, candid editorial photograph of an organized supermarket aisle or distribution center, vertical 4:5 portrait composition, exact dimensions 1080x1350 pixels. This must look like an authentic photojournalistic image — the kind of photo that runs accompanying a feature article in a serious retail business magazine like Bloomberg Businessweek, The Grocer, or Exame Varejo — NOT a stock photo, NOT a 3D render, NOT a slick advertising shot, NOT a "smiling manager pointing at shelf" cliche.

THE SUBJECT — an organized supermarket aisle OR a tidy distribution center shelving unit, with product clearly visible: cardboard boxes neatly stacked, branded packaging (no real brand visible — see negative prompt), maybe a subtle hint of fresh produce (apples, lettuce, oranges) on lower shelves, metallic shelving structure, clean floor. The composition communicates ORGANIZATION, ABUNDANCE, OPERATIONAL ORDER — the visual opposite of "estoque parado". The aisle or shelving unit recedes into the frame at a slight lateral angle to give depth, NOT shot dead-on.

NO HUMAN FACES, NO PEOPLE, NO HEAD, NO SHOULDERS, NO IDENTIFIABLE PERSON — no shopper pushing cart, no manager pointing at shelf, no worker stocking. The shelves and product ARE the subjects. Anonymity by absence — the post is about the inventory operation, not about people.

NO RECOGNIZABLE BRAND PACKAGING visible on the shelves: no Coca-Cola, no Nestlé, no Procter & Gamble, no real product label readable. The packaging must be GENERIC: plain cardboard boxes, neutral white or kraft-colored boxes, abstract simplified packaging without readable wordmarks or logos. If produce is visible, it is plain (apples are apples, no Dole stickers).

PHOTOGRAPHIC TREATMENT — shot like editorial documentary photography: warm natural overhead light (suggesting supermarket ceiling lighting or window light into a distribution warehouse), slightly DESATURATED with editorial contrast — muted earthy browns of cardboard, soft greens or reds of produce as faint accents, metallic greys of the shelving. NOT vivid HDR, NOT over-saturated Instagram-look, NOT glossy advertising lighting. Real grain, real depth of field, captured-not-staged feel. The image should feel SHOT INSIDE a real retail or distribution space at a real working moment.

DARK SCRIMS — two translucent dark gradient scrims (matte black hex #0E0E10 fading from roughly 70 percent opacity to transparent) sit over the upper ~120 pixels (for the 3-names header) and over the lower ~600 pixels (for the money line and footer). The scrims are functional, NOT decorative — just darkening the photograph behind the typography for clean readability.

TOP HEADER (over upper dark scrim) — a slim band approximately 80 pixels tall in the upper third. Three brand names centered in a single horizontal line, in matte mustard gold hex #C9A14A, heavy condensed sans-serif all-caps (Bebas Neue, Anton, or Druk Wide Bold), letter-spacing generous at 0.18em, font size approximately 42 pixels. Reads exactly: "WALMART  ·  COSTCO  ·  CARREFOUR" with bullet separators in the same matte mustard gold, slightly smaller. This is TIPOGRAFIA PURA — NO real Walmart logo, NO real Costco logo, NO real Carrefour logo, NO brand wordmarks, NO retail icons. The three names are typeset by the designer, NOT brand marks.

THE SOCO (overlaid money line, over lower dark scrim) — stacked across the lower-center portion of the canvas in heavy condensed sans-serif typeface (Anton, Bebas Neue at weight 900, Druk Wide Bold, or Inter Black caps), tightly set, two lines:

Line 1: "ESTOQUE PARADO É CAPITAL DORMINDO." — in warm cream hex #F4EFE5, font size approximately 50 pixels, letter-spacing tight. The acute accent on É must be clearly rendered even in caps.

Line 2: "IA É O DESPERTADOR." — in warm cream hex #F4EFE5 at the same base size for "IA É O" and ".", EXCEPT the single word "DESPERTADOR" rendered approximately 30-40 percent LARGER and visually heavier than the surrounding words (font size around 70 pixels for DESPERTADOR, ~50 pixels for surrounding words), in matte mustard gold hex #C9A14A. DESPERTADOR is the hammer word — the entire image leads to it. The acute on É must be clearly rendered.

No quotation marks around any line. The stacked block centered horizontally in the lower-center area, with the second line bottom-aligned roughly 130 pixels above the footer band.

BOTTOM FOOTER BAND — a slim thin strip at the very bottom, roughly 50 pixels tall, sitting on top of the lower scrim (the scrim continues underneath). Centered text in condensed sans-serif all-caps, letter-spacing 0.2em, in warm cream hex #F4EFE5 with bullet separators in matte mustard gold hex #C9A14A, font size approximately 14 pixels, reading exactly: "APOLO SANTOS  ·  IA EM ESTOQUE". Small and unobtrusive, like a photo credit line. NO series tag "OS 4Ds DA IA", NO post number "POST X DE Y", NO pipeline closing tag — independent post.

MOOD — sober, real, operational, slightly aspirational without being aspirational stock. The viewer scrolls past, freezes because the aisle/CD looks like every store or warehouse they have walked through, reads the three names in gold and lands on DESPERTADOR. The whole image carries the weight of "isso e como IA funciona na operacao real de estoque em escala global e BR" — captured, not rendered.

COLOR DIRECTION — desaturated retail tones in the photograph (cardboard brown, neutral packaging, soft produce greens/reds as faint accents, metallic shelf grey), warm cream for the money line body text, a single matte mustard gold hex #C9A14A accent that connects the header three-names, the DESPERTADOR hammer word, and the bullets in the header and footer. The photograph IS the color story; the gold is the connecting thread of the Apolo brand.

--ar 4:5 --style raw --v 6
```

---

## VARIANTE A — corredor de supermercado / prateleira organizada (cena principal, recomendada)

```
Candid editorial photograph, vertical 4:5 portrait 1080x1350 pixels. An organized supermarket aisle shot from a slight lateral angle, receding into the frame for depth. Metallic shelving with neatly stacked cardboard boxes and generic packaging (no real brand readable — plain kraft and neutral white boxes, abstract simplified packaging). Maybe a hint of fresh produce on lower shelves (plain apples, lettuce — no Dole stickers, no brand labels). Clean floor. Warm overhead supermarket light or natural window light. Slightly desaturated, faint grain, real photo, NOT stock smiling manager, NOT 3D rendered.

NO human faces, NO people visible in the aisle. The shelves and product are the subjects.

Translucent dark scrim #0E0E10 at 70 percent opacity over upper ~120px and lower ~600px.

TOP HEADER (~80px in upper scrim): three names centered in matte mustard gold #C9A14A condensed caps Bebas Neue 900, letter-spacing 0.18em, ~42px: "WALMART · COSTCO · CARREFOUR" with mustard gold bullet separators. PURE TYPOGRAPHY — NO real Walmart logo, NO real Costco logo, NO real Carrefour logo.

MONEY LINE centered in lower scrim, two lines, condensed sans heavy:
Line 1: "ESTOQUE PARADO É CAPITAL DORMINDO." — cream #F4EFE5, ~50px, acute on É visible
Line 2: "IA É O DESPERTADOR." — cream at base ~50px for "IA É O" and ".", EXCEPT "DESPERTADOR" rendered ~30-40% larger (~70px) in matte mustard gold #C9A14A as hammer word, acute on É visible

FOOTER (~50px at bottom): centered cream condensed caps with mustard gold bullets "APOLO SANTOS · IA EM ESTOQUE". NO series tag, NO post number.

Photojournalistic, real shelves, slight grain, captured-not-rendered. No real brand logos on packaging, no real Walmart/Costco/Carrefour brand mark, no AI mascot, no robot, no 3D, no neon, no rainbow, no shopping cart cliche, no giant barcode, no smiling manager. --ar 4:5 --style raw --v 6
```

---

## VARIANTE B — interior de centro de distribuicao moderno (alternativa industrial)

```
Candid editorial photograph, vertical 4:5 portrait 1080x1350 pixels. The interior of a modern, well-organized distribution center / warehouse: tall metallic racking with neatly arranged generic cardboard boxes and palletized neutral packaging, clean concrete floor, soft warm natural light from skylights or windows. Camera shot from a slight lateral angle giving depth into the receding aisle of racks.

NO human faces, NO workers, NO forklifts with brand markings visible. The shelves and palletized product are the subjects. Generic packaging only — no readable brand wordmarks (no Amazon boxes, no real DHL labels, no real Walmart shipping marks).

Photojournalistic, slightly desaturated, faint grain, captured-not-staged. NOT stock photography, NOT 3D, NOT glossy.

Translucent dark scrim #0E0E10 at 70% opacity over upper ~120px and lower ~600px.

TOP HEADER: same as Variant A — "WALMART · COSTCO · CARREFOUR" in matte mustard gold #C9A14A condensed caps Bebas Neue 900 ~42px, letter-spacing 0.18em, with mustard gold bullets. PURE TYPOGRAPHY — NO real logos.

MONEY LINE: same as Variant A — Line 1 "ESTOQUE PARADO É CAPITAL DORMINDO." cream #F4EFE5 ~50px (acute on É visible) / Line 2 "IA É O DESPERTADOR." cream ~50px with "DESPERTADOR" in matte mustard gold #C9A14A ~70px as hammer word (acute on É visible).

FOOTER: same as Variant A — "APOLO SANTOS · IA EM ESTOQUE" cream condensed caps with mustard gold bullet. NO series tag.

More industrial/wholesale feel than Variant A. No real brand markings, no people, no 3D, no neon. --ar 4:5 --style raw --v 6
```

---

## VARIANTE C — composicao tipografica com 3 nomes gigantes em coluna + numeros (fallback sem foto)

```
Editorial typographic poster, vertical 4:5 portrait 1080x1350 pixels, deep navy background hex #1A2A3F (echoing pipeline identity). NO photograph.

TOP (~80px): small mustard gold #C9A14A condensed caps ~22px tracked 0.18em centered: "3 PLAYBOOKS DE IA EM ESTOQUE".

CENTRAL HERO: three brand names stacked vertically, each with a large numeric stat below it. Each name in matte mustard gold #C9A14A serif Black Playfair Display ~80px, centered horizontally. Below each name, the key stat in cream #F4EFE5 condensed sans Black ~52px:
- "WALMART" / "-15% estoque excedente"
- "COSTCO" / "+11,6% ecommerce Q3/2025"
- "CARREFOUR BRASIL" / "-30% perdas em FLV"

Thin mustard gold horizontal hairlines (60% opacity) separating the three blocks.

BOTTOM area: mustard gold hairline divider, 1.5px, full width. Below: money line centered in cream condensed sans caps Bebas Neue 900 ~46px: "ESTOQUE PARADO É CAPITAL DORMINDO. / IA É O DESPERTADOR." with "DESPERTADOR" in matte mustard gold #C9A14A (same size, color only differs OR slightly larger). Acute on É (2x) visible.

FOOTER (~50px): "APOLO SANTOS · IA EM ESTOQUE" cream condensed caps with mustard gold bullet. NO series tag.

Strict 3-color palette: navy #1A2A3F, cream #F4EFE5, mustard gold #C9A14A. Pure typography — no photos, no figures, no real logos (NO Walmart, NO Costco, NO Carrefour brand mark — only typeset names). No decoration. Fallback option if photo-based variants don't converge cleanly. --ar 4:5 --v 6
```

---

## NEGATIVE PROMPT (anti-slop + anti-cara-de-design — colar separadamente ou apos prompt)

```
no real Walmart logo, no real Walmart wordmark, no blue spark Walmart symbol, no real Costco logo, no real Costco wordmark, no red Costco branding, no real Carrefour logo, no real Carrefour wordmark, no red and blue Carrefour symbol, no real brand marking on any product on the shelves, no Coca-Cola logo, no Pepsi logo, no Nestlé logo, no Procter & Gamble logo, no Unilever logo, no real consumer brand wordmark, no real beer or soda brand visible, no real cereal box brand, no Dole sticker on produce, no Chiquita label, no real produce brand sticker, no Amazon box, no real DHL label, no real shipping wordmark on cardboard, no real software or POS system logo on any visible screen,

no human figures, no human silhouettes, no faces, no portraits, no shopper pushing cart, no manager pointing at shelf, no smiling employee in apron, no warehouse worker in vest, no forklift driver, no stock-photo retail manager pose, no AI-generated faces, no plastic skin, no uncanny figures,

no robot, no humanoid robot, no warehouse robot, no AI mascot, no chatbot avatar, no brain illustration, no light bulb as decoration, no gear icon as overlay, no circuit board background, no holographic UI floating over shelves, no neural network as decoration, no AI hand cliche, no glowing finger touching shelf,

no shopping cart cliche, no giant barcode, no QR code, no UPC code as decoration, no price tag as graphic element, no dollar sign icon, no currency symbol floating, no checkmark icon, no thumbs up, no five star rating,

no 3D render, no CGI, no glossy 3D, no plastic render, no isometric illustration, no isometric warehouse, no isometric store, no cartoon, no clip art, no anime, no vector mascot, no emoji,

no stock photography aesthetic, no Shutterstock retail cliche, no glamour shot of perfect supermarket aisle, no aspirational unicorn-retail look, no overlit advertising lighting, no HDR overcooked, no over-saturated Instagram look,

no Michelin-style food porn polish applied to produce, no jewelry photography lighting on packaging, no over-polished metallic shelves,

no neon, no glow rims, no halo behind type, no rainbow, no bright primary colors, no saturated cyan magenta yellow, no garish palette, no meme-bright colors, no Y2K aesthetic, no cyberpunk, no glitch, no scanlines,

no Impact font, no Impact typeface with black outline, no white text with thick black stroke, no crude meme typography, no comic sans, no shitpost aesthetic,

no infographic, no chart, no bar chart, no flowchart, no diagram with arrows, no funnel, no quadrant grid, no progress bar overlay,

no series tag "OS 4Ds DA IA" in footer, no "POST X DE 7" in footer, no "POST 9 DE 9" in footer, no "ULTIMO POST" tag, no series number, no continuity reference labels, no pipeline-closing tag, no extra English buzzwords like "Disruption", "Revolution", "Retail 4.0", "Future of Retail",

no missing diacritic on É (must show acute on E — appears twice in money line lines 1 and 2, both must show), no English typos in Portuguese text, no Latin lorem ipsum, no placeholder text in brackets, no extra invented text beyond what is specified, no garbled letterforms,

not too clean as in over-designed marketing graphic, not a SaaS comparison ad, not a stock retail photo, not a poster, not a designed template, not an advertisement, not "Retail 4.0" trope cliche imagery
```

---

## PARAMETROS POR FERRAMENTA (decisao explicita)

| Ferramenta | Parametros | Realismo varejo sem logos | Acentos PT-BR no texto | Recomendacao |
|-----------|------------|----------------------------|------------------------|--------------|
| **Midjourney v6** | `--ar 4:5 --style raw --v 6 --s 50` | **OTIMO** — melhor fotorrealismo de prateleira/CD sem inventar logos reais | RUIM — costuma quebrar É | **PREFERIDO pra foto** (gerar foto, montar texto em editor) |
| **ChatGPT image (DALL-E 3)** | colar prompt + "vertical 4:5 1080x1350, photojournalistic supermarket aisle, no brand logos, no people" | **OTIMO** — forte em cena realista e bom em texto sem logo | BOM | **Caminho rapido (uma so geracao)** |
| **Ideogram** (typography mode) | ratio 4:5, magic prompt OFF | OK (pode ficar plastico em cena varejo) | **OTIMO** — melhor pra preservar É (2x) | **Plano pro TEXTO sobreposto** se montar em 2 partes, OU pra Variante C tipografica pura |
| Gemini Imagen | ratio 4:5, prompt completo | BOM | OK | Plano D |
| Leonardo AI | modelo Phoenix, ratio 4:5 | BOM | OK | Plano E |
| **Editor (Figma / Canva / Affinity) — montagem em 2 partes** | partir do template | **OTIMO** — controle tipografico total + DESPERTADOR maior + 3 nomes alinhados | **OTIMO** — garantia 100% dos acentos | **Plano de Ouro pra controle total** |

> **Decisao — fluxo recomendado:**
> 1. **Caminho rapido (uma geracao):** colar o PROMPT PRINCIPAL no **ChatGPT image (DALL-E 3)** — faz prateleira de supermercado realista sem logo E texto razoavelmente bem. Validar acentos `É` (2x) no checklist.
> 2. **Caminho qualidade maxima (montagem em 2 partes — recomendado pra controle dos 3 nomes alinhados + DESPERTADOR maior em dourado):**
>    - Gerar a FOTO em **Midjourney v6** (`--style raw`, sem texto — remover todas as linhas de texto do prompt e gerar so a cena: prateleira de supermercado OU CD com packaging generico, sem pessoas, sem logos reais).
>    - Compor por cima em editor: dark scrims + header dos 3 nomes em dourado + money line empilhada com `DESPERTADOR` ~30-40% MAIOR em dourado + footer LIMPO. Tipografia Bebas Neue / Anton / Druk.
>    - Esse caminho garante: (a) zero logos Walmart/Costco/Carrefour/Coca-Cola/etc aparecendo; (b) ausencia de pessoa; (c) DESPERTADOR proporcionalmente maior; (d) acentos PT-BR 100% controlados.
> 3. **Se IA imagem-pra-pixel falhar em gerar foto sem logo real ou sem brand markings:** ir pra **Variante C tipografica pura** (fundo navy + texto puro com 3 nomes em coluna + numeros). Funciona como fallback seguro e mantem a identidade do pipeline.
> Regenerar se aparecer logo real (Walmart blue spark, Costco red, Carrefour blue/red), pessoa/rosto, brand de produto (Coca-Cola/Nestlé/Dole/etc), render 3D / CGI, ou se qualquer É sair sem acento.

---

## CHECKLIST DE VALIDACAO POS-GERACAO (Apolo executa apos receber a imagem)

- [ ] **Dimensao 1080 x 1350 pixels** (4:5 portrait) — se sair em outra proporcao, regenerar ou recortar sem distorcer
- [ ] **PARECE FOTO EDITORIAL REAL DE VAREJO** estilo Bloomberg Businessweek / The Grocer / Exame Varejo — NAO stock, NAO 3D, NAO aspiracional Instagram, NAO "Retail 4.0" trope (aceite central — se parecer marketing graphic ou render, REPROVA)
- [ ] **SEM logos reais** das 3 redes — sem Walmart blue spark wordmark, sem Costco red wordmark, sem Carrefour symbol vermelho-azul, sem qualquer brand mark identificavel das redes
- [ ] **SEM logos de produto real** nas prateleiras — sem Coca-Cola, sem Nestlé, sem Pepsi, sem Procter & Gamble, sem qualquer wordmark de marca de consumo identificavel
- [ ] **SEM PESSOAS** — sem rosto, sem cliente empurrando carrinho, sem gerente apontando, sem trabalhador estocando, sem motorista de empilhadeira
- [ ] **SEM mascote/robo/AI-hand cliche/holografico/HUD futurista**
- [ ] Cena varejo parece real: caixas de papelao genericas, embalagem neutra, prateleira metalica, eventual hortifruti simples sem sticker
- [ ] **Iluminacao quente natural** (overhead supermarket light ou janela de CD) — NAO overlit, NAO HDR, NAO glossy
- [ ] **Paleta dessaturada editorial:** marrom papelao, neutros, verde/vermelho sutil de hortifruti, cinza metalico — sem cores vibrantes, sem neon
- [ ] Dark scrim presente sobre area superior (header) e area inferior (money line + footer) garantindo legibilidade
- [ ] **Header dos 3 nomes presente em dourado:** `WALMART · COSTCO · CARREFOUR` em condensed caps Bebas Neue 900, espacamento generoso, bullets dourados
- [ ] **Header e TIPOGRAFIA PURA**, NAO logos das marcas — so texto setado pelo designer
- [ ] **Money line completa e legivel em 2 linhas:**
  - [ ] Linha 1: `ESTOQUE PARADO É CAPITAL DORMINDO.` em creme (com `É` agudo visivel)
  - [ ] Linha 2: `IA É O DESPERTADOR.` em creme com `É` agudo visivel e `DESPERTADOR` em DOURADO `#C9A14A` ~30-40% MAIOR (palavra-martelo)
- [ ] **Acentos PT-BR conferidos visualmente (regra dura — 2 diacriticos):**
  - [ ] `É` linha 1 — agudo no E em "ESTOQUE PARADO É CAPITAL DORMINDO"
  - [ ] `É` linha 2 — agudo no E em "IA É O DESPERTADOR"
- [ ] Tipografia do soco e **condensada pesada** (Bebas Neue 900 / Anton / Druk / Inter Black) — NAO Impact, NAO meme font
- [ ] **Footer presente e LIMPO:** `APOLO SANTOS · IA EM ESTOQUE` com bullets dourados
- [ ] **Footer SEM "OS 4Ds DA IA"** (regra v2.1 — post independente)
- [ ] **Footer SEM "POST X DE 7"** ou "POST 9 DE 9" ou qualquer fecho de pipeline (regra v2.1 — sem fecho explicito)
- [ ] **Sem icones cliche de varejo:** sem carrinho de supermercado generico, sem codigo de barras gigante, sem cifrao, sem checkmark
- [ ] Compreensivel em 3 segundos no scroll mobile — foto varejo + 3 nomes + DESPERTADOR dourado batem juntos

> Se a imagem falhar em qualquer item OBRIGATORIO (logo real visivel, brand de produto identificavel, pessoa/rosto, render 3D, AI-hand cliche, acento omitido, footer com tag de serie ou fecho de pipeline), regenerar com NEGATIVE PROMPT reforcado, trocar de ferramenta, ou ir pro fluxo de montagem em 2 partes (foto MJ sem texto + tipografia em editor). Para fallback maximo: usar Variante C tipografica pura sobre navy.

---

## NOTA DE COESAO COM O PIPELINE POS-SERIE

**Nona thumb do pipeline pos-serie 4Ds — quinta IMAGEM DE ATENCAO, segundo COMPARATIVO de 3 cases (P4 foi Embraer/Vale/WEG industria; P9 e Walmart/Costco/Carrefour varejo).** Estado da rotacao apos o P9:

| # | Data | Tema | Conceito | Variacao |
|---|------|------|----------|----------|
| P1 | 26/05 | 5 prompts pra CEO PME | CONTEUDISTA | cards numerados verticais navy |
| P2 | 29/05 | iFood Cris | IMAGEM DE ATENCAO | foto cozinha BR + ENCAIXOU |
| P3 | 02/06 | 10 ferramentas | CONTEUDISTA | tabela tabular com pills navy |
| P4 | 05/06 | Embraer/Vale/WEG | IMAGEM DE ATENCAO | foto industrial + 3 nomes + SENSOR |
| P5 | 09/06 | 3 perguntas | IMAGEM DE ATENCAO | cartaz tipografico puro + OPERAR navy |
| P6 | 12/06 | Stone build vs buy | IMAGEM DE ATENCAO | cena editorial engenharia + VOCÊ |
| P7 | 16/06 | IA distribuicao B2B | CONTEUDISTA | fluxograma vertical + hairlines navy |
| P8 | 19/06 | 7 stacks self hosted | CONTEUDISTA | tabela + bloco custo invertido navy |
| **P9** | **23/06** | **Walmart/Costco/Carrefour (este)** | **IMAGEM DE ATENCAO** | **foto editorial varejo + 3 nomes header + money line DESPERTADOR** |
| P10 (opcional) | 27/06 | Bonus | a definir | a definir |

**O fio de coesao da marca Apolo** mantido nas 9 thumbs:
1. **Dourado matte `#C9A14A`** como acento de marca — aqui no header dos 3 nomes, na palavra-martelo `DESPERTADOR` e nos bullets do footer
2. **Creme `#F4EFE5`** como cor do texto principal
3. **Footer-credito** com estrutura LIMPA v2.1: `APOLO SANTOS · IA EM ESTOQUE`. SEM tag de serie, SEM fecho de pipeline

**Distincao P4 vs P9 (ambos sao IMAGEM DE ATENCAO + foto + 3 nomes header):**

| Dimensao | P4 (Embraer/Vale/WEG) | P9 (Walmart/Costco/Carrefour — este) |
|----------|-----------------------|---------------------------------------|
| Universo | Industria pesada (turbina/motor) | Varejo (prateleira/CD) |
| Tipo de foto | Component closeup metalico dramatico | Cena de corredor de supermercado / CD aberto |
| Iluminacao | Lateral dramatica com falloff em sombra | Quente natural overhead (luz de loja/janela) |
| Paleta foto | Cinza-grafite + azul-escuro + bronze | Marrom papelao + neutros + acentos suaves |
| Palavra-martelo | `SENSOR` (industria) | `DESPERTADOR` (varejo) |
| Tag tematica footer | `3 INDÚSTRIAS BR · IA PREDITIVA` | `IA EM ESTOQUE` |

Mesma estrutura de template (foto editorial + 3 nomes tipografia pura + money line com palavra-martelo dourada + footer com tag tematica), universos opostos — confirma que o padrao funciona como TEMPLATE REUTILIZAVEL pra comparativos.

**Por que IMAGEM DE ATENCAO casa com o Post 9 (3 cases varejo):** o post entrega 3 playbooks de IA em estoque em escala global (Walmart, Costco) + BR (Carrefour). A capa precisa colocar o leitor no universo (varejo / estoque) E entregar os 3 nomes E cravar a tese transferivel (`DESPERTADOR`). Tipografia pura pros 3 nomes resolve risco legal/visual de logos reais. DESPERTADOR como palavra-martelo dourada faz o gancho saveavel pra gestor de varejo/distribuidora que ja sabe que tem estoque parado.

**Importante:** P9 NAO faz fecho explicito do pipeline. Comeca do zero como qualquer outro post independente. Footer LIMPO sem `POST 9 DE 9`, sem `ULTIMO POST`, sem `ENCERRANDO O PIPELINE`. Decisao Apolo pos-publicacao se P10 bonus acontece ou se pipeline pausa.

---

FIM. Apolo: caminho rapido — cole o **PROMPT PRINCIPAL** no **ChatGPT image (DALL-E 3)**. Caminho qualidade maxima — gere a FOTO de varejo no **Midjourney v6** (`--style raw`, sem texto, so a cena prateleira/CD sem brand markings e sem pessoas) e componha header + soco + footer por cima num editor, garantindo `DESPERTADOR` ~30-40% MAIOR em dourado e os 2 acentos `É` visiveis. Se nenhuma IA convergir em foto sem logo real ou com brand de produto generica, fallback seguro = **Variante C tipografica pura** (fundo navy + 3 nomes em coluna + numeros, mantem identidade do pipeline). Valide com o checklist de 18 itens — atencao dura aos acentos, ao aceite central (foto real, NAO render NAO stock NAO Retail 4.0 trope) e ao **footer LIMPO** sem tag de serie nem fecho de pipeline. **CRITICO:** ZERO logos reais Walmart/Costco/Carrefour, ZERO logos de produto real (Coca-Cola/Nestlé/Dole/etc), ZERO pessoas — so tipografia dos nomes e prateleira generica.
