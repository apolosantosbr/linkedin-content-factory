# THUMBNAIL AI PROMPT — POST 4 SERIE 4Ds · ARTIGO "OS 3 MODOS DA IA"

> **STATUS:** APROVADO 14/05/2026 · pronto pra Apolo gerar imagem
> **Conceito:** FOTO REAL + SOCO (conceito 2 de 3 da rotacao anti-padrao, aprovada 14/05)
> **NOTA DE CONCEITO:** o Radar propos uma barra/espectro horizontal dos 3 modos — REJEITADO por ser infografico com cara de peca de IA. Este e o conceito 2 da rotacao anti-padrao: Post 3 usou Screenshot Vazado, Post 4 usa Foto Real + Soco — foto editorial humana e real + uma frase brutal sobreposta. Emocao, nao renderizacao.
> **Politica vigente (REGRA 11):** Thumbnail terminal entrega apenas este prompt.md. Apolo gera a imagem externamente. Sem HTML, sem PNG local.

---

## DIMENSAO ALVO
- **1200 x 627 pixels** (WIDE 1.91:1 — capa nativa de artigo LinkedIn, formato que o feed renderiza quando o artigo e compartilhado)
- Aspect ratio: `--ar 1.91:1` (Midjourney) / `1200x627` em Ideogram/ChatGPT/Gemini / `--size 1792x1024` aproximado em DALL-E (reescalar pra 1200x627 sem distorcer)

---

## A IDEIA EM UMA FRASE

Uma foto editorial real de uma reuniao tensa: um consultor vendendo uma proposta pra um dono de PME visivelmente cetico. Por cima, uma legenda-soco brutal. Parece foto de reportagem com caption, NAO peca de marketing. O ceticismo no rosto do dono de PME e o gancho — o leitor se reconhece naquela mesa.

---

## TEXTOS EXATOS QUE PRECISAM APARECER NA IMAGEM (literal, com acentos PT-BR)

1. **Soco / money line empilhada (sobreposta a foto, tipografia condensada pesada):**
   - Linha 1: `AGENCY NÃO É NÍVEL AVANÇADO.`
   - Linha 2: `É O MODO ERRADO PRA MAIORIA.`
   - `MODO ERRADO` = palavras-martelo: maior peso visual, em dourado fosco `#C9A14A`. O resto do texto em creme `#F4EFE5` ou branco stark.
2. **Footer (banda inferior discreta):**
   `APOLO SANTOS · OS 4Ds DA IA · ARTIGO · POST 4 DE 7`

> **Atencao critica de acentuacao (regra dura da serie):** `NÃO` (til no A), `É` (agudo no E, o verbo — aparece DUAS vezes, conferir as duas), `NÍVEL` (agudo no I), `AVANÇADO` (cedilha no C) devem aparecer com diacriticos VISIVEIS mesmo em caixa alta. `AGENCY`, `MODO`, `ERRADO`, `PRA`, `MAIORIA` sao palavras sem acento — `AGENCY` e ingles, manter sem acento. Se a ferramenta omitir qualquer diacritico em NÃO/É/NÍVEL/AVANÇADO, REGENERAR ou trocar de ferramenta. Sem excecao.

---

## PROMPT PRINCIPAL (cinematografico — versao mestre, ingles tecnico)

```
A real, candid editorial photograph, wide horizontal format, exact dimensions 1200x627 pixels, 1.91:1 aspect ratio. This must look like an authentic photojournalistic image — the kind of photo that runs with a magazine feature article — NOT a stock photo, NOT a rendered illustration, NOT a marketing graphic, NOT a designed poster. Authentic human emotion over polish, every time.

THE SCENE — a tense business meeting in a modest small-company meeting room. On one side, a consultant or salesperson in mid-pitch, leaning slightly forward, gesturing at a laptop or a printed proposal, mouth open mid-sentence, the body language of someone selling hard. On the other side of the table, a small-business owner who is visibly SKEPTICAL: arms crossed, one eyebrow slightly raised, head tilted, looking at the consultant sideways with guarded distrust — not angry, just deeply unconvinced. The skepticism on the owner's face is the emotional anchor of the whole image. Ordinary office: slightly cluttered table, a coffee cup, a window with flat daylight, nothing glossy or aspirational.

PHOTOGRAPHIC TREATMENT — shot like editorial photojournalism: natural available light, candid framing as if the photographer caught a real moment, shallow but not artificial depth of field, slight grain. The color is DESATURATED with editorial contrast — muted, slightly cool, NOT a vivid saturated stock-photo look, NOT an AI-glossy render. It should feel captured, not staged. Slight imperfection is mandatory: a real room, real fluorescent-ish or window light, faces that look like actual people, not models.

THE DARK SCRIM — over roughly the left 55 percent of the image, or wherever the text sits, a translucent dark gradient scrim (black fading from roughly 75 percent opacity down to transparent) so the overlaid text reads cleanly against the photo. The scrim is functional, invisible as a "design element" — it just darkens the photo behind the words.

THE SOCO (overlaid money line) — stacked across the scrimmed area in a heavy condensed sans-serif typeface (Anton, Bebas Neue at weight 900, or Druk Wide Bold), tightly set, two lines:
Line 1: "AGENCY NÃO É NÍVEL AVANÇADO."
Line 2: "É O MODO ERRADO PRA MAIORIA."
The words "MODO ERRADO" are the hammer words — rendered larger and heavier than the surrounding text, in matte mustard gold hex #C9A14A. All other words in the money line are in warm cream hex #F4EFE5 (or stark white). Full Brazilian Portuguese diacritics must be preserved and clearly visible even in all-caps: the tilde on NÃO, the acute accent on É (both occurrences), the acute on NÍVEL, the cedilla on AVANÇADO. AGENCY is English, no accent. The text is punchy, brutal, editorial — like a hard pull-quote slapped over a news photo, NOT a delicate designed layout.

THE FOOTER — a discreet thin band along the very bottom edge, small condensed sans-serif all-caps in light grey, with bullet separators in matte mustard gold hex #C9A14A, reading exactly: "APOLO SANTOS  ·  OS 4Ds DA IA  ·  ARTIGO  ·  POST 4 DE 7". Small and unobtrusive, like a photo credit line, NOT a corporate footer bar.

MOOD — sober, real, slightly uncomfortable. The viewer stops scrolling because they recognize that meeting, they have sat at that table. The gold accent on MODO ERRADO is the only "brand" touch and it stays subtle. The photo dominates; the type punches; nothing looks like a template.

COLOR DIRECTION — the photograph desaturated with editorial contrast, cream and white type, a single matte mustard gold hex #C9A14A accent. Do NOT use a navy palette, do NOT use an olive-earth palette, do NOT use a sepia-terminal palette — the photo itself is the color story, the gold is just the connecting thread of the series.

--ar 1.91:1 --style raw --v 6
```

---

## VARIANTE A — consultor pitchando pra PME cetica em sala de reuniao (cena principal)

```
Candid editorial photograph, wide 1200x627 pixels 1.91:1. A tense meeting-room scene: a consultant mid-pitch leaning over a laptop and a printed proposal, gesturing, selling hard; across the table a small-business owner with arms crossed, eyebrow raised, looking sideways with open skepticism. Modest cluttered office, flat window daylight. Photojournalistic, desaturated, editorial contrast, real grain, captured-not-staged. NOT stock-photo, NOT rendered, NOT glossy.

Translucent dark scrim over the text area. Overlaid stacked money line in heavy condensed sans (Anton / Bebas Neue 900 / Druk): "AGENCY NÃO É NÍVEL AVANÇADO." / "É O MODO ERRADO PRA MAIORIA." — "MODO ERRADO" larger and heavier in matte mustard gold #C9A14A, rest in cream #F4EFE5. Full PT-BR diacritics visible: NÃO (tilde), É (acute, both times), NÍVEL (acute), AVANÇADO (cedilla). Discreet bottom credit line in light grey with mustard gold bullets: "APOLO SANTOS · OS 4Ds DA IA · ARTIGO · POST 4 DE 7". No infographic, no diagram, no corner brackets, no design-system layout. --ar 1.91:1 --style raw --v 6
```

---

## VARIANTE B — pessoa sozinha encarando laptop com duvida

```
Candid editorial photograph, wide 1200x627 pixels 1.91:1. A small-business owner alone at a desk at the end of the day, staring at a laptop screen showing a proposal or a slide, face caught in a moment of doubt and hesitation — brow furrowed, hand near the chin, not convinced. Modest office, low warm side light, slightly messy desk. Photojournalistic, desaturated, editorial contrast, real grain, an honest unposed moment. NOT stock-photo, NOT rendered.

Translucent dark scrim over the text zone. Overlaid stacked money line in heavy condensed sans: "AGENCY NÃO É NÍVEL AVANÇADO." / "É O MODO ERRADO PRA MAIORIA." — "MODO ERRADO" larger, heavier, matte mustard gold #C9A14A; rest cream #F4EFE5. Full PT-BR diacritics visible on NÃO, É (both), NÍVEL, AVANÇADO. Discreet bottom credit line, light grey, mustard gold bullets: "APOLO SANTOS · OS 4Ds DA IA · ARTIGO · POST 4 DE 7". No infographic, no charts, no brackets, no template look. --ar 1.91:1 --style raw --v 6
```

---

## VARIANTE C — aperto de mao de negocio frio / hesitante

```
Candid editorial photograph, wide 1200x627 pixels 1.91:1. A close framing of a business handshake that reads as COLD and hesitant — two hands meeting over a table, but the body language is guarded: one person committed, the other holding back, maybe a sliver of a skeptical face visible in soft focus behind. A signed-looking proposal or laptop on the table. Modest office, flat daylight. Photojournalistic, desaturated, editorial contrast, real grain. The discomfort of a deal nobody is sure about. NOT stock-photo smiling, NOT posed, NOT rendered.

Translucent dark scrim over the text area. Overlaid stacked money line in heavy condensed sans: "AGENCY NÃO É NÍVEL AVANÇADO." / "É O MODO ERRADO PRA MAIORIA." — "MODO ERRADO" larger and heavier in matte mustard gold #C9A14A, rest in cream #F4EFE5. Full PT-BR diacritics visible: NÃO, É (both occurrences), NÍVEL, AVANÇADO. Discreet bottom credit line in light grey with mustard gold bullets: "APOLO SANTOS · OS 4Ds DA IA · ARTIGO · POST 4 DE 7". No infographic, no diagram, no corner brackets, no design polish. --ar 1.91:1 --style raw --v 6
```

---

## NEGATIVE PROMPT (anti-slop + anti-cara-de-design — colar separadamente ou apos prompt)

```
no infographic, no bar chart, no horizontal spectrum, no gradient bar, no diagram, no 3 zones layout, no three-segment graphic, no flowchart, no chart, no graph, no data visualization, no icon set, no symmetrical design-system layout, no museum-grade editorial typography, no Pentagram poster style, no corner brackets, no L-shaped registration marks, no formal footer band with bullets as a design element, no template look, no marketing graphic feel, no slick advertisement aesthetic,

no stock-photo smiling, no posed perfection, no corporate handshake cliche with everyone happy, no glossy aspirational office, no models, no overlit studio look, no vivid oversaturated color, no HDR, no 3D render, no CGI, no illustration, no cartoon, no isometric, no vector art, no AI-glossy skin, no plastic faces, no uncanny faces, no extra fingers, no malformed hands,

no robot, no humanoid robot, no AI mascot, no brain, no light bulb, no gear icon, no circuit board background, no neon, no glow, no cyberpunk, no glitch, no holographic UI floating in the air,

no real company logos, no ChatGPT logo, no OpenAI logo, no Anthropic logo, no Claude logo, no Microsoft logo, no Google logo, no LinkedIn logo, no QR code, no barcode, no brand watermark other than the explicit footer credit line,

no navy blue palette, no olive-green earth palette, no sepia-terminal palette,

no missing diacritics on NÃO É NÍVEL AVANÇADO, no accent on AGENCY (it is English), no English typos in Portuguese text, no Latin lorem ipsum, no placeholder text, no extra invented text beyond what is specified, no garbled letterforms,

not too clean, not too polished, not a poster, not a designed template, not an advertisement
```

---

## PARAMETROS POR FERRAMENTA (decisao explicita)

| Ferramenta | Parametros | Realismo de cena humana | Acentos PT-BR no texto | Recomendacao |
|-----------|------------|--------------------------|------------------------|--------------|
| **ChatGPT image (DALL-E 3)** | colar prompt + "wide 1200x627, photojournalistic, real photo" | **OTIMO** — forte em cena humana realista e emocao facial | BOM | **PREFERIDO pra cena** |
| **Midjourney v6** | `--ar 1.91:1 --style raw --v 6 --s 50` | **OTIMO** — melhor fotorrealismo e grão editorial | RUIM — costuma quebrar NÃO, É, NÍVEL | **Plano B pra foto** (gerar foto, texto a parte) |
| **Ideogram** (typography mode) | ratio 1.91:1, magic prompt OFF | BOM | **OTIMO** — melhor pra preservar diacriticos | **Plano pro TEXTO sobreposto** |
| Gemini Imagen | ratio 1.91:1, prompt completo | BOM | OK | Plano D |
| Leonardo AI | modelo Phoenix, ratio 1.91:1 | BOM | OK | Plano E |
| Grok / xAI image | colar prompt + ratio 1.91:1 | BOM | OK | Plano F |

> **Decisao — fluxo recomendado:**
> 1. **Caminho rapido:** colar o PROMPT PRINCIPAL no **ChatGPT image (DALL-E 3)** — faz a cena humana realista E o texto razoavelmente bem numa so geracao. Validar acentos no checklist.
> 2. **Caminho qualidade maxima (montagem em 2 partes):** gerar a FOTO em **Midjourney v6** (`--style raw`, melhor grão e realismo, sem o texto — remover as linhas de texto do prompt e pedir so a cena) → depois compor o SOCO + footer por cima num editor (Canva, Figma, Photoshop) usando Anton/Bebas Neue/Druk, garantindo os acentos PT-BR e o dourado `#C9A14A` em MODO ERRADO. Esse caminho da o controle tipografico total e elimina o risco de acento omitido.
> 3. **Se quiser tudo em uma geracao com acentos garantidos:** **Ideogram** typography mode — menos cinematografico que MJ, mas confiavel nos diacriticos.
> Regenerar se a foto parecer stock sorridente, renderizada 3D, ou se qualquer acento sair omitido.

---

## CHECKLIST DE VALIDACAO POS-GERACAO (Apolo executa apos receber a imagem)

- [ ] **Dimensao 1200 x 627 pixels** (wide 1.91:1) — se sair em outra proporcao, regenerar ou recortar sem distorcer
- [ ] **PARECE FOTO EDITORIAL REAL, NAO PECA DE DESIGN** (item de aceite central — se parecer infografico, render 3D, stock sorridente ou template, REPROVA e regenera)
- [ ] Cena legivel: da pra entender que e um consultor vendendo pra um dono de PME cetico (ou variante B/C escolhida)
- [ ] **Ceticismo humano visivel** no rosto/postura — braços cruzados, sobrancelha, olhar de lado (a emocao e o gancho)
- [ ] Foto **dessaturada com contraste editorial** — nao colorida demais, nao filtro de IA glossy
- [ ] Scrim escuro presente garantindo legibilidade do texto
- [ ] **Soco completo e legivel:** `AGENCY NÃO É NÍVEL AVANÇADO.` / `É O MODO ERRADO PRA MAIORIA.`
- [ ] **`MODO ERRADO` em destaque** — maior, mais pesado, em dourado `#C9A14A`
- [ ] **Acentos PT-BR conferidos visualmente (regra dura):** `NÃO` (til), `É` (agudo — conferir as DUAS ocorrencias), `NÍVEL` (agudo), `AVANÇADO` (cedilha). `AGENCY` sem acento (ingles)
- [ ] Tipografia do soco e **condensada pesada** (Anton / Bebas Neue 900 / Druk), nao uma serif fina
- [ ] **Footer presente e discreto:** `APOLO SANTOS · OS 4Ds DA IA · ARTIGO · POST 4 DE 7` — como linha de credito, bullets dourados
- [ ] **Sem infografico, sem barra/espectro, sem 3 zonas, sem diagrama, sem robo/cerebro/mascote, sem brackets de canto, sem logos de marca** (se aparecer qualquer um, regenerar)
- [ ] Sem paleta navy / oliva / sepia-terminal — a foto e a cor, o dourado e so o fio
- [ ] Maos e rostos sem deformacao de IA (dedos a mais, faces uncanny) — se houver, regenerar
- [ ] Compreensivel em 3 segundos no scroll — a tensao da cena + o soco devem bater juntos

> Se a imagem falhar em qualquer item OBRIGATORIO (parece design/render, acentos omitidos, elementos proibidos presentes, maos deformadas), regenerar com NEGATIVE PROMPT reforcado, trocar de ferramenta, ou ir pro fluxo de montagem em 2 partes (foto MJ + texto em editor).

---

## REFERENCIAS VISUAIS (mood board — fotojornalismo editorial, NAO design)

1. **Fotos de feature de revista de negocios** (Bloomberg Businessweek, The Economist 1843, Piaui) — cena real com legenda-soco
2. **Fotojornalismo corporativo candido** — reunioes capturadas, nao posadas, luz natural
3. **Capas de longform jornalistico** — foto dominante + pull-quote pesado sobreposto
4. **Documentario de negocios** — frames de entrevista, expressao humana real, dessaturado
5. **Editorial photography de Pari Dukovic / Platon** (retrato franco, contraste, sem glamour stock)
6. **Reportagem sobre PME e pequenos negocios** — escritorios modestos, gente real, sem aspiracional
7. **Posts virais de LinkedIn com foto real + caption brutal** — o formato "foto honesta + frase que doi"
8. **Still de cinema de drama corporativo** (estilo "Margin Call", "The Office" sem tom serio) — tensao de mesa de reuniao
9. **Cartazes de filme com pull-quote pesado** sobre imagem — tipografia condensada slapped sobre foto

> Denominador comum: NENHUMA parece "feita por designer de marketing". Parecem capturadas e legendadas. Esse e o ponto.

---

## NOTA DE COESAO COM A SERIE

**Rotacao anti-padrao — conceito 2 de 3.** Em 14/05/2026 o Apolo aprovou 3 conceitos anti-padrao pra rotacionar entre posts, fugindo do "editorial tipografico sobrio" que tinha cara de peca de IA:

1. **SCREENSHOT VAZADO** ← Post 3 D2 (16/05). Print cru de conversa com IA.
2. **FOTO REAL + SOCO** ← este Post 4 Artigo (19/05). Foto editorial humana + frase brutal sobreposta.
3. **MEME COM CLASSE** ← previsto pro Post 5 D3 ou adiante. Formato de meme reconhecivel com a identidade da serie.

**Regra de rotacao:** nunca o mesmo conceito em posts consecutivos. Post 5 D3 vai de Meme com Classe (ou reabre a rotacao sem repetir Foto Real + Soco).

**O fio de coesao da serie** agora nao vem mais de um sistema visual rigido (navy/oliva/sepia + brackets + footer formal — tudo aposentado). Vem de tres coisas: (1) o **dourado fosco `#C9A14A`** como unico acento de marca, aqui em `MODO ERRADO` e nos bullets do footer; (2) o **footer-credito** com o mesmo esqueleto de texto (`APOLO SANTOS · OS 4Ds DA IA · ... · POST X DE 7`); (3) o **tom** — sobrio, operador, sem cliche, cada thumb entregando a tese do post.

**Por que Foto Real + Soco casa com o Post 4 (Artigo dos 3 Modos):** o artigo abre com o inimigo Consultor de Livro Traduzido vendendo Agency caro pra quem nao precisa. A capa entrega exatamente essa cena — o consultor pitchando, o dono de PME cetico — e o soco crava a tese antes mesmo do clique. Como e a capa de um ARTIGO (formato wide nativo do LinkedIn), a foto ambiental horizontal funciona melhor que qualquer composicao tipografica vertical. Quem ve a capa no feed ja sabe de que lado da mesa o artigo esta.

**Formato:** este e o unico thumbnail WIDE 1200x627 da serie ate aqui — os Posts 1, 2 e 3 sao 1080x1350 (4:5 portrait, post de feed). O Post 4 e artigo, entao usa a capa nativa de artigo. Posts 5, 6 e 7 voltam pro 4:5 portrait.

---

FIM. Apolo: caminho rapido — cole o **PROMPT PRINCIPAL** no **ChatGPT image (DALL-E 3)**. Caminho qualidade maxima — gere a FOTO no **Midjourney v6** (`--style raw`, sem texto) e componha o soco + footer por cima num editor, garantindo acentos e o dourado em MODO ERRADO. Valide com o checklist de 16 itens — atencao dura aos acentos `NÃO`, `É` (duas vezes), `NÍVEL`, `AVANÇADO`. Se a imagem parecer peca de design, render 3D ou stock sorridente, regenerar: a autenticidade fotografica e o hook.
