# NOTAS POST 3 D2 DESCRIPTION

STATUS: CONCLUIDO
Inicio: 2026-05-13 (sessao retomada)
Fim: 2026-05-13 (mesma sessao)
Terminal: /linkedin-post
Entregavel: /Users/apolosantos/Desktop/LinkedIn/posts/2026-05-16_description-d2/post.txt

## Brief recebido
- Pasta: posts/2026-05-16_description-d2/
- Publicacao: Sex 16/05/2026 10h00 BRT
- Dimensao thumb: 1080x1350 (4:5)
- Apenas 2 blocos no post.txt agora (AGENDAR + LinkedIn). Bloco 3 PROMPT THUMB integrado depois pelo Orquestrador.
- Alvo char count: 1.250 a 1.400 do corpo (zero-click + expandido).

## Inputs fixos (nao alterar)
- Hook Bloco 1: "Na quarta destrinchei o D1: decidir quem faz o que. Hoje desco no D2. Quem usa mais IA alucina TRES VEZES mais (Rev, 2025)."
- Money line Bloco 7: "A IA NAO LE MENTE. ELA OBEDECE BRIEFING RUIM." (isolada)
- CTA Bloco 8 Variacao 4 REPASSA: "Repassa pra equipe que ainda escreve 'melhore esse texto' como prompt. Qual dos três você nunca explicitou..."
- Hashtags: #InteligenciaArtificial #Anthropic #PME #Os4Ds #PMEoperando

## Decisoes editoriais
- **Caps lock map (4 momentos + money line):**
  1. D2 (Bloco 1 e 2 reaparece, conta como branding repetido)
  2. DESCRIPTION (Bloco 3)
  3. QUE / COMO / TOM coordenado (Bloco 3, 1 momento)
  4. TESTANDO SEU BRIEFING (Bloco 4 fim)
  Money line tem NAO LE MENTE + BRIEFING RUIM (intrinsecas, paragrafo isolado).
- **Estrategia sugeriu FALAR em caps no Bloco 2** — NAO aplico. Brief do usuario fechou em max 4 + money line. FALAR fica lowercase.
- **Estrategia sugeriu QUEM em caps no Bloco 5** — NAO aplico. Mesma razao. Fica lowercase.
- **Hifen-zero estrito:**
  - "sub-componentes" → "pilares" (mantem sentido, evita hifen)
  - "GPT-5 pra Claude 4" → "GPT pra Claude" (remove versao, evita hifen, mesmo sentido)
- **Excecao confirmada:** "CC BY-NC-SA 4.0" mantido (codigo de licenca, precedente Post 2 aprovado 5.0/5).
- **Acentos PT-BR:** preservar TRÊS VEZES no hook (estrategia escreveu sem acento, mas regra duro inclui all-caps em posts — corrigido).

## Estrutura final (10 blocos)
1. Hook + dado Rev
2. Callback Post 2 D1
3. Definicao D2 + 3 pilares (Product/Process/Performance)
4. Eterno Pilotante (inimigo) + setup money line
5. Caso PME distribuidora foodservice + 3 pilares aterrados
6. Tese final + MIT Sloan
7. MONEY LINE isolada
8. CTA Repassa + pergunta tripla
9. Tease Post 4 (artigo 3 modos) + Post 7 (6 tecnicas)
10. Hashtags

## Char count
Final do corpo (zero-click + expandido, com quebras de linha): **1.397 chars**
Range alvo: 1.250 a 1.400. DENTRO DO LIMITE.

Iteracoes de poda:
- v1: 1.664 chars (acima do teto)
- v2: 1.518 chars (ainda acima)
- v3 (final): 1.397 chars

Cortes aplicados pra fechar em 1.397:
- Bloco 2: compressado pra "Ligar o motor não é dirigir. O D2 é saber falar com a IA."
- Bloco 3: drop gloss "Comunicar com IA pra colaboração produtiva" (license disclosure mantido)
- Bloco 4: "Conheço um gestor 'testando IA' há 18 meses" enxuto
- Bloco 5: "pede pra IA 'melhorar os emails'" + drop "em 2 semanas" + bullets em 1 linha cada
- Bloco 9: drop "que aterram tudo"

## Validacoes automatizadas (python regex)
- Hifens no corpo (excl CC BY-NC-SA): 0
- Em-dash/En-dash: 0
- Hook fixo: OK
- Money line isolada (linha em branco antes/depois): OK
- CTA Repassa: OK
- Hashtags fechamento (#PMEoperando ultima, #Os4Ds penultima): OK
- 3 fontes inline (Rev/Anthropic/MIT Sloan): OK
- Callback Post 2 D1: OK
- Caps lock map fechado em 4 momentos + money line intrinseca:
  - TRÊS VEZES (Bloco 1)
  - DESCRIPTION (Bloco 3)
  - QUE / COMO / TOM (Bloco 3 coordenado)
  - TESTANDO SEU BRIEFING (Bloco 4)
  - Money line: NÃO LÊ MENTE / ELA OBEDECE BRIEFING RUIM (paragrafo isolado)
- Acentos PT-BR: você, três, está, há, não, é, são, lá, histórico, audiência — TODOS conferidos
- Tease Post 4 (artigo 3 modos) + Post 7 (6 tecnicas): OK

## Checklist Revisar (rubrica calibragem v1)
- [x] Money line isolada paragrafo proprio (linha em branco antes/depois)
- [x] CTA share trigger nomeado (Variacao 4 Repassa)
- [x] #PMEoperando ultima hashtag
- [x] #Os4Ds penultima hashtag
- [x] Callback Post 2 explicito ("Na quarta destrinchei o D1")
- [x] Eterno Pilotante presente Bloco 4 (sem nome de pessoa real)
- [x] 3 fontes inline: Rev 2025, Anthropic CC BY-NC-SA 4.0, MIT Sloan 2024
- [x] Hifen e em-dash ZERO no corpo (excecao license code CC BY-NC-SA)
- [x] Acentos PT-BR conferidos palavra por palavra
- [x] Caps lock 4 momentos + money line intrinseca (dentro de 3-5)
- [x] Char count 1.397 (range 1.250-1.400)
- [x] Tease Post 4 + Post 7 presentes
- [x] Hashtag #PMEoperando como assinatura fixa

## Proximos passos
1. Escrever post.txt
2. Rodar wc -m no corpo (zero-click + corpo expandido)
3. Atualizar char count nesta nota
4. Mudar STATUS pra CONCLUIDO
5. Aguardar Thumb terminar pra Orquestrador integrar Bloco 3
6. Despachar Revisar
