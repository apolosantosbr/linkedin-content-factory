# THUMBNAIL AI PROMPT — POST 3 D2 DESCRIPTION

> **STATUS:** APROVADO 14/05/2026 · v2 · pronto pra Apolo gerar imagem
> **Conceito:** SCREENSHOT VAZADO (conceito 1 de 3 da rotacao anti-padrao)
> **NOTA v2:** esta versao SUBSTITUI integralmente o conceito anterior (diptico editorial papel-vs-terminal), REJEITADO pelo Apolo em 14/05 por ser "design editorial seguro demais, cara de peca de IA, muito padrao". O novo conceito busca estetica nativa de plataforma, imperfeicao proposital e cara de conteudo vazado — nao peca de design.
> **Politica vigente (REGRA 11):** Thumbnail terminal entrega apenas este prompt.md. Apolo cola em Ideogram/DALL-E/Midjourney pra gerar a imagem. Sem HTML, sem PNG local.

---

## DIMENSAO ALVO
- **1080 x 1350 pixels** (4:5 portrait, padrao LinkedIn feed)
- Aspect ratio: `--ar 4:5` (Midjourney) / `1080x1350` em Ideogram/ChatGPT/Gemini / `--size 1024x1280` aproximado em DALL-E (reescalar sem distorcer)

---

## A IDEIA EM UMA FRASE

Um print de celular cru de uma conversa com IA que deu errado. Parece bastidor vazado, captura mandada no WhatsApp, screenshot recortado as pressas. O que para o scroll e justamente NAO parecer marketing. A cena conta a historia do post: briefing ruim grifado a marca-texto, resposta generica da IA, anotacao de fracasso por cima, e a money line rabiscada embaixo como remate cru.

---

## TEXTOS EXATOS QUE PRECISAM APARECER NA IMAGEM (literal, com acentos PT-BR)

1. **Mensagem do usuario (bolha enviada, briefing ruim) — GRIFADA a marca-texto amarelo:**
   `melhora esse email`
2. **Resposta da IA (bolha recebida, output generico):**
   `Prezado cliente, gostaríamos de oferecer nossas soluções inovadoras...`
3. **Anotacao de fracasso (escrita a mao por cima do print, vermelha, torta):**
   `descartado em 2 semanas`  — e/ou um emoji `😐` rabiscado ao lado
4. **Remate inferior (faixa de anotacao crua sobreposta, NAO footer formal):**
   `A IA NÃO LÊ MENTE. ELA OBEDECE BRIEFING RUIM.`
   (variacao curta alternativa, se a frase longa nao couber legivel: `o briefing era o bug`)
5. **Assinatura nativa discreta (canto, estilo legenda de print, NAO footer corporativo):**
   `D2 · série 4Ds · @apolo`

> **Atencao critica de acentuacao (regra dura da serie):** `NÃO` (til no A), `LÊ` (circunflexo no E), `gostaríamos` (agudo no I), `soluções` (cedilha + til), `inovadoras`, `descartado`, `semanas`, `série` devem aparecer com diacriticos VISIVEIS. Vale tanto pra money line em caixa alta quanto pro texto das bolhas e anotacoes. Se a ferramenta omitir qualquer acento, REGENERAR ou trocar de ferramenta. Sem excecao.

---

## PROMPT PRINCIPAL (cinematografico — versao mestre, ingles tecnico)

```
A raw, authentic-looking smartphone screenshot of a real conversation with an AI chat assistant, vertical 4:5 portrait, exact dimensions 1080x1350 pixels. This must look like a genuine leaked screenshot — the kind of screen capture someone forwards on WhatsApp — NOT a designed graphic, NOT a marketing asset, NOT an editorial poster. The whole point is that it does NOT look like marketing.

THE DEVICE FRAME — the image shows a mobile phone screen captured as a screenshot. At the very top, a realistic mobile status bar: a time like "9:41" or "14:23" on the left, and small carrier, wifi and battery icons on the right, in a thin neutral system font. Below the status bar, a simple chat app header bar: a small generic AI assistant name like "Assistente IA" or "Chat" with a tiny circular avatar placeholder and a back chevron — plain, unbranded, no real company logo. The interface is a clean light-mode messaging UI, the familiar visual language of ChatGPT mobile or Claude mobile or a generic WhatsApp-style chat, with rounded message bubbles.

THE CONVERSATION (the story of the post) —
First, a USER message bubble, aligned to the right side of the screen, in a soft bubble (light grey or pale blue, system-default looking), containing the short lowercase text exactly: "melhora esse email". This user message is HIGHLIGHTED with a digital marker-pen highlight stroke — a translucent yellow highlighter swipe drawn ON TOP of the bubble by hand, slightly crooked, slightly overshooting the edges of the text, imperfect, as if someone grabbed a highlight tool and dragged it sloppily across the screen. The highlight is the visual anchor.

Below it, an AI RESPONSE bubble, aligned to the left side of the screen, in a white or very light bubble, containing the generic corporate text exactly with full Brazilian Portuguese accents: "Prezado cliente, gostaríamos de oferecer nossas soluções inovadoras...". The diacritics on gostaríamos and soluções must be clearly rendered. This text looks bland, generic, forgettable — the visual embodiment of a useless output.

OVER the AI response, scrawled by hand in messy red ink as if someone marked up the screenshot afterward: the annotation "descartado em 2 semanas", handwritten, crooked, casual, with a rough hand-drawn circle or arrow pointing at the generic AI response. Optionally a small flat neutral-face emoji "😐" scribbled beside it. This handwritten layer must look like a real person annotated a real screenshot — uneven pressure, not a font, not clean.

THE BOTTOM REMATE — across the lower portion of the screenshot, a crude overlaid annotation strip (NOT a formal footer, NOT a designed banner) — looks like text slapped on top of the screenshot in a bold heavy condensed sans-serif, slightly tilted, maybe on a rough torn-tape or marker-block background: the money line in all-caps with full accents preserved: "A IA NÃO LÊ MENTE. ELA OBEDECE BRIEFING RUIM." The diacritics on NÃO (tilde on A) and LÊ (circumflex on E) must be clearly visible even in all-caps. This strip feels like a meme caption or a hand-slapped overlay, raw and punchy, NOT polished.

THE NATIVE SIGNATURE — in a bottom corner, tiny and discreet, looking like a casual screenshot caption or watermark someone added, the small text: "D2 · série 4Ds · @apolo". This must feel native and offhand, like an Instagram-story caption or a personal watermark — NOT a corporate footer, no logo, no brand bar.

IMPERFECTION IS MANDATORY — slight screenshot compression artifacts, the faint asymmetry of a real phone capture, maybe a soft thumb or fingertip partially visible at the edge of the screen as if mid-scroll, slightly uneven cropping. The realism is the hook. It should feel captured, not composed.

MOOD — candid, raw, leaked, behind-the-scenes. The viewer stops scrolling because it looks like a real screenshot of someone's AI failure, not an ad. Authentic over polished, every time.

LIGHTING AND RENDER — flat even mobile-screen lighting, realistic UI rendering, the look of an actual phone screenshot, not a 3D render, not an illustration.

--ar 4:5 --style raw --v 6
```

---

## VARIANTE A — interface tipo ChatGPT/Claude mobile (limpa, light mode)

```
Authentic-looking smartphone screenshot, vertical 4:5 portrait, 1080x1350 pixels, of a generic AI chat assistant app in light mode — the clean minimalist visual language of ChatGPT mobile or Claude mobile, white background, simple unbranded header reading "Assistente IA". Looks like a real leaked screen capture, not a designed graphic.

Mobile status bar at top (time, wifi, battery). User message bubble on the right, light grey, lowercase text exactly: "melhora esse email" — covered by a crooked translucent yellow highlighter-pen swipe drawn by hand, overshooting the bubble edges. AI response bubble on the left, white, text exactly with accents: "Prezado cliente, gostaríamos de oferecer nossas soluções inovadoras...". Handwritten messy red annotation scrawled over the response: "descartado em 2 semanas" with a rough hand-drawn arrow. Lower portion: a crude tilted overlay strip, heavy condensed all-caps with accents: "A IA NÃO LÊ MENTE. ELA OBEDECE BRIEFING RUIM." — NÃO and LÊ with visible diacritics. Tiny discreet corner caption: "D2 · série 4Ds · @apolo".

Imperfect crop, screenshot compression feel, authentic capture aesthetic. No corner brackets, no formal footer, no editorial typography, no design-system polish. --ar 4:5 --style raw --v 6
```

---

## VARIANTE B — chat tipo WhatsApp Business (mais reconhecivel, verde nativo)

```
Authentic-looking smartphone screenshot, vertical 4:5 portrait, 1080x1350 pixels, of a WhatsApp-style business chat conversation — the instantly recognizable green-header messaging UI, light chat wallpaper, rounded bubbles with little tails, small timestamps and double-check marks under messages. Looks like a real forwarded screenshot, not a designed asset. Generic unbranded contact name at top like "IA · Assistente".

Mobile status bar at top. Outgoing message bubble on the right (the familiar pale green WhatsApp bubble), lowercase text exactly: "melhora esse email" — with a hand-drawn crooked yellow highlighter swipe slapped over it, imperfect, overshooting. Incoming bubble on the left (white), text exactly with accents: "Prezado cliente, gostaríamos de oferecer nossas soluções inovadoras...". Messy handwritten red ink annotation over the incoming bubble: "descartado em 2 semanas" plus a scribbled flat-face emoji "😐". Bottom: a crude overlaid caption strip, heavy condensed all-caps tilted slightly, with accents preserved: "A IA NÃO LÊ MENTE. ELA OBEDECE BRIEFING RUIM." Tiny offhand corner caption: "D2 · série 4Ds · @apolo".

Feels like a WhatsApp forward. Screenshot artifacts, slightly uneven crop. No design polish, no brackets, no formal footer, no editorial layout. --ar 4:5 --style raw --v 6
```

---

## VARIANTE C — print recortado + anotacao a mao agressiva (a mais crua)

```
A heavily annotated, roughly cropped smartphone screenshot, vertical 4:5 portrait, 1080x1350 pixels. This is the rawest version — looks like someone screenshotted a chat, cropped it carelessly, and marked it up aggressively before sending it to a colleague. Generic AI chat app, light mode, partial header visible, even a sliver of another app or notification bar at the very top to sell the "captured in a hurry" feel.

A user message bubble with lowercase text exactly: "melhora esse email", drowned under a thick aggressive yellow highlighter scribble — multiple overlapping marker strokes, very crooked, almost angry. An AI response bubble below with text exactly with accents: "Prezado cliente, gostaríamos de oferecer nossas soluções inovadoras...". Over the whole response, big messy red handwritten marks: a heavy X or a hard scratch-out, the words "descartado em 2 semanas" written large and crooked, an arrow jabbing at the generic text, "😐" scrawled hard. The annotations dominate — chaotic, human, urgent.

Across the bottom third, a crude heavy block-caption slapped on, condensed black all-caps, slightly rotated, on a rough marker-block or torn-tape background, with accents preserved: "A IA NÃO LÊ MENTE. ELA OBEDECE BRIEFING RUIM." (or the short variant "O BRIEFING ERA O BUG" if the long line cannot stay legible). NÃO and LÊ with visible diacritics. Tiny corner scrawl: "D2 · série 4Ds · @apolo".

Maximum imperfection: visible crop edges, compression noise, a thumb at the screen edge. Reads as raw leaked content, never as design. No brackets, no footer, no editorial type, no symmetry, no polish. --ar 4:5 --style raw --v 6
```

---

## NEGATIVE PROMPT (anti-slop + anti-cara-de-design — colar separadamente ou apos prompt)

```
no clean editorial layout, no museum-grade typography, no editorial poster design, no symmetrical composition, no perfectly balanced layout, no corner brackets, no L-shaped registration marks, no formal footer band, no footer with bullet separators, no design-system aesthetic, no brand style guide look, no stock-photo polish, no slick advertising look, no marketing graphic feel, no infographic, no diagram, no flowchart, no chart, no graph, no quadrant grid, no split-screen diptych, no two-panel comparison, no Pentagram poster style, no Vignelli grid, no Penguin Classics cover, no typographic art print,

no robot, no humanoid figure, no AI mascot, no brain, no light bulb, no gear icon, no 3D render, no isometric illustration, no cartoon, no clip art, no vector illustration, no neon, no glow, no cyberpunk, no glitch, no rainbow gradient, no smooth gradient background, no bokeh, no depth of field blur, no chrome, no bevel, no drop shadow on layout elements,

no real company logos, no ChatGPT logo, no OpenAI logo, no Anthropic logo, no Claude logo, no actual WhatsApp wordmark or official logo, no Meta logo, no Apple logo, no Google logo, no LinkedIn logo, no QR code, no barcode, no watermark other than the small native corner caption,

no missing diacritics on NÃO LÊ GOSTARÍAMOS SOLUÇÕES INOVADORAS DESCARTADO SÉRIE, no English typos in Portuguese text, no Latin lorem ipsum, no placeholder text in brackets, no extra invented text beyond what is specified, no garbled UI text, no nonsense characters in the interface,

not too clean, not too polished, not a designed template, not a poster, not an advertisement
```

---

## PARAMETROS POR FERRAMENTA (decisao explicita)

| Ferramenta | Parametros | Acentos PT-BR | Estetica screenshot real | Recomendacao |
|-----------|------------|---------------|--------------------------|--------------|
| **Ideogram** (typography mode) | ratio 4:5, magic prompt OFF, quality EXCELLENT | **OTIMO** — melhor do mercado pra diacriticos | BOM — lida bem com UI realista | **PREFERIDO** |
| ChatGPT image (DALL-E 3) | colar prompt + "realistic phone screenshot, vertical 4:5 1080x1350" | BOM — geralmente preserva | **OTIMO** — excelente em mockup de UI/screenshot realista | **Plano B forte** |
| Midjourney v6 | `--ar 4:5 --style raw --v 6 --s 50` | RUIM — costuma omitir NÃO, LÊ | OTIMO — fotorrealismo de tela | Plano C — gerar 4 variantes, validar acentos manualmente |
| Gemini Imagen | ratio 4:5, prompt completo | OK | BOM | Plano D |
| Leonardo AI | modelo Phoenix, ratio 4:5, prompt magic ON | OK | BOM | Plano E |
| Grok / xAI image | colar prompt + ratio 4:5 | OK | BOM | Plano F |

> **Decisao:** comecar por **Ideogram** (melhor garantia de acentos PT-BR). Se a estetica "screenshot real" sair fraca ou sintetica demais, ir direto pra **ChatGPT image (DALL-E 3)** — DALL-E 3 e particularmente forte em mockup de interface realista. Midjourney v6 e plano C: rende textura de tela linda, mas exige validar cada acento a mao (gerar 4 variantes e selecionar). Regenerar com seed novo se qualquer acento sair omitido.

---

## CHECKLIST DE VALIDACAO POS-GERACAO (Apolo executa apos receber a imagem)

- [ ] **Dimensao 1080 x 1350 pixels** (4:5 portrait) — se sair em outra proporcao, regenerar
- [ ] **PARECE PRINT DE CELULAR REAL, NAO PECA DE DESIGN** (item de aceite central — se parecer poster/anuncio/grafico editorial, REPROVA e regenera)
- [ ] Tem status bar de celular no topo (horario, wifi, bateria) e header de app de chat
- [ ] **Mensagem do usuario `melhora esse email` presente e GRIFADA** com marca-texto amarelo torto, feito a mao por cima
- [ ] **Resposta da IA `Prezado cliente, gostaríamos de oferecer nossas soluções inovadoras...`** legivel, com acentos visiveis em `gostaríamos` e `soluções`
- [ ] **Anotacao de fracasso `descartado em 2 semanas`** escrita a mao, vermelha, torta, por cima do print (e/ou emoji 😐)
- [ ] **Money line no remate inferior:** `A IA NÃO LÊ MENTE. ELA OBEDECE BRIEFING RUIM.` — com `NÃO` (til) e `LÊ` (circunflexo) **visiveis em all-caps** (regra dura)
- [ ] Remate parece anotacao/caption crua slapped on top — NAO footer formal, NAO banda com bullets
- [ ] **Assinatura nativa discreta** `D2 · série 4Ds · @apolo` no canto — discreta, estilo legenda, NAO footer corporativo
- [ ] **Acentos PT-BR conferidos visualmente** em `NÃO`, `LÊ`, `gostaríamos`, `soluções`, `inovadoras`, `descartado`, `semanas`, `série` (regra dura — sem excecao)
- [ ] Imperfeicao presente: crop irregular, artefato de compressao, ou dedo na borda da tela
- [ ] **Sem layout simetrico, sem brackets de canto, sem tipografia editorial museum-grade, sem footer formal** (esses sao do conceito rejeitado — se aparecerem, regenerar)
- [ ] Sem logos de marca real (ChatGPT, WhatsApp, OpenAI, Anthropic, etc) — interface generica
- [ ] Compreensivel em 3 segundos no scroll mobile — a historia (briefing ruim → output generico → fracasso) deve ser obvia

> Se a imagem falhar em qualquer item OBRIGATORIO (parece design, acentos omitidos, elementos do conceito rejeitado presentes, logos de marca), regenerar com NEGATIVE PROMPT reforcado ou trocar de ferramenta.

---

## REFERENCIAS VISUAIS (mood board — estetica nativa, NAO editorial)

1. **Screenshots reais de ChatGPT/Claude mobile** circulando no X/Twitter e LinkedIn — light mode, bolhas, header simples
2. **Prints de WhatsApp encaminhados** — o visual de "alguem mandou isso no grupo"
3. **Posts virais de "AI fail"** no LinkedIn e Reddit — screenshot cru + anotacao por cima
4. **Cultura de screenshot anotado** — marca-texto digital torto, setas vermelhas a mao, circulos rabiscados (estilo "reaction screenshot")
5. **Memes de caption-strip** — texto pesado condensado slapped no rodape de um print
6. **Stories do Instagram com print + texto por cima** — caption nativa, marcador de dedo, recorte tosco
7. **Threads de "bastidor" de builders no X** — o visual deliberadamente nao-produzido
8. **Capturas de tela em artigos de jornalismo de tech** — o print como evidencia, nao como arte
9. **Markup de screenshot tipo Skitch/anotacao de celular** — vermelho, amador, urgente

> O denominador comum: NENHUMA dessas referencias parece "feita por designer". Parecem capturadas. Esse e o ponto.

---

## NOTA DE COESAO COM A SERIE

**Rotacao anti-padrao — conceito 1 de 3.** Em 14/05/2026 o Apolo rejeitou o caminho "editorial tipografico sobrio" (T6 quadrantes do Post 1, T11 pergunta gigante do Post 2, e o diptico papel-vs-terminal que seria o Post 3) por terem "cara de peca de IA" e nao pararem o scroll. Aprovou 3 conceitos novos pra rotacionar entre posts e testar qual viraliza mais:

1. **SCREENSHOT VAZADO** ← este Post 3 D2. Print cru, estetica nativa de plataforma, conteudo que parece vazado.
2. **FOTO REAL + SOCO** ← previsto pro Post 5 D3. Foto de banco humana e expressiva + uma frase brutal sobreposta.
3. **MEME COM CLASSE** ← previsto pro Post 6 D4 ou Post 7. Formato de meme reconhecivel executado com a identidade da serie.

**Regra de rotacao:** nunca o mesmo conceito em posts consecutivos. O Post 4 (artigo, 19/05) provavelmente nem usa thumb deste tipo (formato artigo). Post 5 vai de foto real + soco.

**O que muda em relacao a serie anterior:** sai a coesao por "dourado mostarda + brackets + footer formal". A coesao da serie agora vem do TOM (sobrio, operador, sem cliche), da MENSAGEM (cada thumb entrega a aula do post) e da assinatura nativa discreta (`D2 · série 4Ds · @apolo`) — nao mais de um sistema visual rigido. A identidade passa a ser editorial-de-conteudo, nao design-de-template.

**Por que screenshot vazado casa com o Post 3 (D2 Description):** o post inteiro e sobre briefing ruim vs briefing bom. Um print real de "melhora esse email" → output generico → "descartado em 2 semanas" ENTREGA a aula sem precisar ler. Quem da screenshot na thumb ja levou o ensino. Save-friendly e share-friendly — o algoritmo 2026 do LinkedIn recompensa exatamente isso.

---

FIM. Apolo: cole o **PROMPT PRINCIPAL** no **Ideogram** (typography mode, ratio 4:5, magic prompt OFF). Se a estetica de screenshot real sair fraca, va pra **ChatGPT image (DALL-E 3)**. Valide com o checklist de 14 itens — atencao dura aos acentos `NÃO`, `LÊ`, `gostaríamos`, `soluções`. Se a imagem parecer "peca de design" em vez de print cru, regenerar: a autenticidade e o hook.
