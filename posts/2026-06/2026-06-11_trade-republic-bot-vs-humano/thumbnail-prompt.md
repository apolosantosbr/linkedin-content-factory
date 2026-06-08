# THUMBNAIL-PROMPT — TRADE REPUBLIC (11/06/2026)

> **Arquétipo:** #5 SCREENSHOT-VAZADO · família SIMPLES/CURIOSIDADE (Gabarito 4) — silhueta NÃO-tipográfica (cota de variedade da semana).
> **Entregável:** PROMPT-ONLY. Apolo gera no Ideogram e, se preciso, ajusta a tarja/acentos no editor.
> **Ângulo:** o bot que FALHOU no caso que mais dói (conta bloqueada, dinheiro preso) e entrou em loop — a prova de por que a fintech recontratou 1.000+ humanos.
> **Verbo-de-curiosidade:** VAZAR ("eu não deveria estar vendo isso").

## ⚠️ PRÉ-CONDIÇÃO FACTUAL (§3.4) — LEIA
NÃO é print real da Trade Republic e NÃO inventa um diálogo específico cliente×Trade Republic (isso seria fabricar prova social — proibido). É a **origem (c)**: um **padrão GENÉRICO e reproduzível** de falha de bot de atendimento — o loop "não entendi, reformule" diante de um cliente irritado com a conta bloqueada. Qualquer um reproduz esse loop num bot mal apontado. A tarja cobre nome/conta fictícios. Enquadramento = "é assim que um bot quebra no lugar errado", não "vazei a Trade Republic".

---

## PROMPT PRINCIPAL (colar no Ideogram)

```
A realistic flat UI SCREENSHOT mock, vertical 4:5 portrait, exact 1080x1350 pixels. It must look like a REAL leaked screen capture of a customer-support chat — NOT a marketing poster. Use a messaging-app / support-chat interface, light chat background with grey incoming bubbles and one coloured outgoing bubble.

Render it with authentic UI chrome (top status bar with time and battery, a chat header with a generic "Suporte" avatar/initials, message timestamps, a bottom text input field with a send icon) using a system sans (SF Pro / Roboto) for the chrome and MONOSPACE (JetBrains Mono / SF Mono) for the message body.

Real app margins; the chat mock occupies 60–80% of the canvas height; subtle device frame and soft shadow allowed.

Message thread (Portuguese, keep accents exactly — está, AGORA, HUMANO, não):
- Customer bubble (right): "Minha conta está bloqueada e tem dinheiro preso. Preciso resolver AGORA."
- Bot bubble (left): "Desculpe, não entendi sua solicitação. Pode reformular?"
- Customer bubble (right): "QUERO FALAR COM UM HUMANO."
- Bot bubble (left): "Desculpe, não entendi sua solicitação. Pode reformular?"

A HARD-EDGED flat black redaction rectangle (raw censor bar, NOT a designed graphic) covers the customer's name in the chat header AND one full line containing an account number — like a real censored leak. It covers at least one full message line; never half a word.

FOOTER — a slim discreet line at the very bottom center, small caps, letter-spacing 0.2em: "APOLO SANTOS".

MOOD — "I shouldn't be seeing this." Looks captured on a phone, not designed. Flat UI, no 3D, no glow, no AI-art gloss. The repeated robotic reply makes the failure obvious at a glance.
```

## NEGATIVE PROMPT

```
no 3D, no 3D render, no CGI, no glow, no neon glow, no generic AI-art look, no AI mascot, no robot illustration, no brain illustration, no light bulb, no gear, no circuit board, no neural network decoration, no holographic UI, no desaturated palette, no muted colors, no glitch, no rainbow, no Impact font, no comic sans, no crude meme typography, no thick black text outline, no lorem ipsum, no placeholder text in brackets, no deformed letters, no garbled text, no extra invented text, no series tag in the footer, no post number, no license code, no unaccented Portuguese, no Latin text missing diacritics, no poster layout, no big headline typography, no decorative frame, no rounded or decorative redaction bar, no colored or branded censorship overlay, no neatly designed redaction, no fake logos, no Trade Republic logo, no brand watermark besides footer
```

> Obs: o `no photo` da base NÃO se aplica aqui — UI mock é permitido (por isso foi omitido do negative acima).

---

## PÓS-GERAÇÃO (obrigatório)
- **ACENTOS:** conferir `está`, `não`, `AGORA`, `HUMANO`. Corrigir no editor se o monospace comer acento.
- **TARJA:** garantir que a tarja preta de borda dura cobre o DADO (nome no header + linha da conta), não enfeite. Se o gerador suavizar/arredondar, refazer a tarja no editor.
- **SEM logo da Trade Republic** — header genérico "Suporte". O caso é citado só no post, não na thumb.

## GATE (§3.4)
- [x] Pré-condição factual: padrão genérico reproduzível (origem c), sem fabricar diálogo específico do cliente real.
- [x] Tarja cobre o dado sensível (nome + conta), cobre ≥1 linha inteira.
- [x] Chrome de UI real + corpo monospace → parece print, não pôster.
- [x] Footer LIMPO = só APOLO SANTOS.
- [x] Cota NÃO-tipográfica da semana satisfeita por este #5.
