# SISTEMA DE THUMBNAILS v2 — Content Factory v3

> **Origem:** operacionalização da Seção 4 do `notas/plano-content-factory-v3.md` (aprovado por Apolo em 05/06/2026), com a exigência da crítica adversarial (furo nº6: "thumb simples vira thumb preguiçosa em 3 semanas") incorporada como spec rígido + gate binário + travas mecânicas.
> **Dono do arquivo:** terminal THUMBNAIL. **Contrato vigente:** `skill-thumbnail.md`.
> **O que este doc resolve:** destrava o gargalo (que é o Apolo, não os 8 terminais — furo nº5). Em vez de criar cada thumb do zero, o Apolo passa a colar **gabaritos pré-aprovados** no Ideogram trocando só o texto.
> **v2.1 (revisão adversarial 05/06):** spec endurecido após review multi-agente — TENSÃO virou lista fechada com reprova mecânica, CONTRASTE virou tabela-par fechada, GATEs ganharam checklist objetiva, #5 ganhou pré-condição factual, gabaritos reconciliados. Numeração de seções contínua.

---

## 0. REGRAS FIXAS GLOBAIS (valem para TODOS os 11 arquétipos)

1. **PROMPT-ONLY.** O terminal THUMBNAIL entrega **apenas o `.md`** (prompt). Apolo gera a imagem externamente (Ideogram preferido, ChatGPT image como atalho, editor Figma/Canva como plano-ouro). **SEM HTML, SEM PNG local.** (Política desde 02/05/2026.)
2. **FOOTER = APENAS `APOLO SANTOS`.** Nunca código de licença (CC BY-NC-SA, Creative Commons, copyright), nunca tag de série ("OS 4Ds DA IA"), nunca número de post ("POST X DE 7"). (Decisão Apolo 29/05/2026.) **Escopo:** a proibição de "tag de série" é do **FOOTER**. O cabeçalho-série do #11 Debrief é exceção declarada (§2).
3. **ACENTOS PT-BR CORRETOS, INCLUSIVE EM ALL-CAPS.** `NÃO`, `VOCÊ`, `É`, `ÚLTIMA`, `FLUÊNCIA`, `ESTÁ`, `SÓ`, `COMEÇO`. Se o gerador comer o acento, **regenerar ou corrigir no editor** antes de entregar. Acento faltando = reprova automática. **O acento é exigido no PROMPT PRINCIPAL — nunca no negative** (ver §6).
4. **NEGATIVE PROMPT SEMPRE.** Todo gabarito carrega, no mínimo: `no 3D, no 3D render, no CGI, no glow, no neon glow, no generic AI-art look`. (Detalhe completo na §6.)
5. **DIMENSÃO PADRÃO:** `1080 x 1350` (4:5 portrait, feed LinkedIn). Artigo/newsletter: `1200 x 627`. Em Midjourney `--ar 4:5`. **Os números do §3 e dos gabaritos valem para 1080×1350; para 1200×627 use os equivalentes proporcionais da tabela em §3.0.**
6. **3 SEGUNDOS / 1 MENSAGEM.** Se a ideia não bate em 3s no scroll mobile, falhou. Uma thumb = uma ideia.
7. **A MARCA VEM DA COR + DO TOM, NÃO DE UM LAYOUT FIXO.** Variedade visual é regra de ouro (§5).

### Paleta brand (referência — `skill-thumbnail.md`)
```css
--bg-dark: #0A0A0A;   --bg-card: #1A1A2E;
--accent-primary: #00D4FF;   /* ciano neon */
--accent-secondary: #7C3AED; /* roxo */
--accent-warning: #F59E0B;   /* amarelo destaque */
--accent-success: #10B981;   /* verde */
--accent-danger:  #EF4444;   /* vermelho */
--cream: #F4EFE5;            /* creme (texto/caixa-martelo) */
--text-primary: #FFFFFF;     --text-secondary: #A0AEC0;
```
> Em **case real**, a cor manda é a **cor da marca citada** (laranja Assai, roxo Vivo, etc.), não a paleta brand. A paleta brand vale para os arquétipos não-case.

---

## 1. AS 6 FAMÍLIAS VISUAIS

| Família | Arquétipos | Função no feed |
|---|---|---|
| **MOTOR** | #1 Brand-poster | Atrai insider / viraliza. EXCLUSIVO de case com empresa nomeada + dado. |
| **SIMPLES / CURIOSIDADE** | #2 Texto-cru · #3 Pergunta-gigante · #4 Número-âncora · #5 Screenshot-vazado | Para o scroll por lacuna. Barato de produzir, MAS exige spec rígido (§3). |
| **CONTEÚDO / SAVE** | #6 Card-conteudista · #7 Antes-e-depois split | Sinaliza "salva isso". Carrossel, lista, framework. |
| **HUMANO** | #8 Foto-real + frase-brutal · #9 Anotação-manuscrita | Quebra a estética de peça. Confissão, bastidor, build-in-public. |
| **CULTURA** | #10 Meme-com-classe | Pertencimento / humor. Tempero, baixa frequência. |
| **RITUAL** | #11 Debrief-da-semana | Template FIXO de sexta. Única exceção à regra "não repetir arquétipo". |

---

## 2. OS 11 ARQUÉTIPOS (ficha completa)

> **Gatilho dos simples (#2-#5) = um VERBO-DE-CURIOSIDADE nomeado** (não o genérico "curiosidade"). Cada verbo dispara um loop diferente que o post fecha de um jeito diferente — ver tabela em §3.0. A rotação §5 proíbe dois posts seguidos no mesmo verbo.

### #1 — BRAND-POSTER FLAT · família MOTOR
- **Descrição visual:** pôster flat social-native na **cor da marca** citada, com **logo oficial** e uma **palavra-martelo** GIGANTE numa caixa-adesivo creme `#F4EFE5` (texto grafite `#1A1A1A` quando o fundo é saturado). Tipografia condensada pesada (Anton/Druk/Compacta). Sem foto, sem 3D, sem headset. Speed-lines creme nos cantos do logo.
- **Quando usar (formato):** **Case de empresa** (motor iFood). EXCLUSIVO disso.
- **Gatilho:** atenção (cor+logo param o scroll de quem é do mercado) + comentário (insider reconhece a empresa).
- **Palavra-martelo (ex.):** `PRIMEIRA` · `SOZINHA` · `−43%` · `VAZOU`.

### #2 — TEXTO-CRU EM FUNDO SÓLIDO · família SIMPLES/CURIOSIDADE
- **Descrição visual:** 1 cor **saturada-clara** chapada (ciano/amarelo/verde — nunca o grafite #0A0A0A, que é assinatura de #3/#4) + uma frase curta (≤6 palavras) em grotesca neutra Black grafite. Zero ornamento. Spec rígido na §3.1.
- **Quando usar (formato):** **Post curto bomba** (300-450) · **Previsão/aposta datada**.
- **Gatilho:** **AFIRMAR** — loop "isso é verdade?? prova" (afirmação categórica/contra o senso comum; o post fecha PROVANDO o claim).
- **Palavra-martelo (ex.):** `Vibe coding morreu.` · `Sua IA te dedura.` · `Seu RAG vaza dado.`

### #3 — PERGUNTA-GIGANTE · família SIMPLES/CURIOSIDADE
- **Descrição visual:** UMA pergunta enche os 2/3 superiores, condensada caixa-alta, alinhada à esquerda; um `?` gigante de acento (≥30% do canvas, bloco de cor sólida) como âncora gráfica; terço inferior é respiro. Spec rígido na §3.2.
- **Quando usar (formato):** **Pergunta/poll** · **Deep-dive explicador** (alt) · **Mito vs Verdade** (alt).
- **Gatilho:** **ACUSAR** — loop "e eu, tô fazendo certo?" (pergunta que expõe a ignorância do próprio leitor; o post fecha ENSINANDO algo que ele sente que deveria saber).
- **Palavra-martelo (ex.):** `SUA IA EXECUTA OU SÓ RESPONDE?` · `VOCÊ PAGA POR UM CHATGPT COM SUA LOGO?`

### #4 — NÚMERO-ÂNCORA ISOLADO · família SIMPLES/CURIOSIDADE
- **Descrição visual:** UM número (sempre algarismo/símbolo) domina ≥45% do canvas, tabular pesado, centralizado; 1 linha de caption mínima; muito ar. Spec rígido na §3.3.
- **Quando usar (formato):** **Data-story (1 número)** · **Framework nomeado** (alt).
- **Gatilho:** **CHOCAR-COM-DADO** — loop "como esse número é possível?" (anomalia quantitativa; dwell + save, o post dá o contexto que a caption negou).
- **Palavra-martelo (ex.):** `R$ 1,2 MI` · `80%` · `4 min` · `0 funcionários`.

### #5 — SCREENSHOT-VAZADO · família SIMPLES/CURIOSIDADE
- **Descrição visual:** mimetiza um print **real** (DM, notificação, terminal, erro de IA) com uma **tarja de redação** cobrindo o dado sensível. Parece bastidor vazado, não peça de marca. **Membro pleno da família simples (não é "tempero")** — é o único simples com silhueta não-tipográfica. Spec rígido na §3.4.
- **Quando usar (formato):** **Build-in-public** (alt) · post curto com "prova" · bastidor de IA.
- **Gatilho:** **VAZAR** — loop "eu não deveria estar vendo isso" (voyeurismo/prova; curiosidade alta).
- **Palavra-martelo (ex.):** a tarja preta `[REDACTED]` sobre o nome do cliente; balão "a IA respondeu isso pro cliente".

### #6 — CARD-CONTEUDISTA · família CONTEÚDO/SAVE
- **Descrição visual:** card editorial limpo, headline + sub + numeração visível (01·02·03) sinalizando lista/passos. Grid sutil de fundo. Sinal "tem conteúdo aqui, salva".
- **Quando usar (formato):** **Deep-dive explicador** · **Lista/comparativo salvável** · **Framework/playbook nomeado**.
- **Gatilho:** save + dwell.
- **Palavra-martelo (ex.):** `7 STACKS QUE RODAM NA SUA MÁQUINA` · `O PLAYBOOK DE 3 PASSOS`.

### #7 — ANTES-E-DEPOIS SPLIT · família CONTEÚDO/SAVE
- **Descrição visual:** canvas dividido (vertical ou horizontal); um lado ANTES/MITO (cinza, apagado), outro DEPOIS/VERDADE (cor de acento, vivo). Contraste de estado.
- **Quando usar (formato):** **Mito vs Verdade** · **Lista/comparativo** (alt) · **Case** (alt, transformação).
- **Gatilho:** save + comment (gera "discordo/concordo").
- **Palavra-martelo (ex.):** `ANTES: 4h → DEPOIS: 4min` · `MITO / VERDADE`.

### #8 — FOTO-REAL + FRASE-BRUTAL · família HUMANO
- **Descrição visual:** foto real (Apolo ou stock humana tratada) com overlay escuro e uma frase brutal/honesta sobreposta. Quebra a estética de peça gerada por IA.
- **Quando usar (formato):** **Confissão de bastidor** · **Case** (alt, rosto humano) · **Build-in-public**.
- **Gatilho:** comment + dwell (vulnerabilidade gera resposta).
- **Palavra-martelo (ex.):** `Eu já fui o Carimbador.` · `Quase quebrei testando isso.`

### #9 — ANOTAÇÃO-MANUSCRITA · família HUMANO
- **Descrição visual:** parece um caderno/post-it/quadro branco com anotação à mão, setas, rabiscos. Estética "rascunho de estratégia", anti-corporativo. **Silhueta não-tipográfica** (satisfaz a cota de variedade da §5 junto com #5).
- **Quando usar (formato):** **Build-in-public** · **Confissão** (alt) · framework em rascunho.
- **Gatilho:** dwell + comment (sensação de bastidor real).
- **Palavra-martelo (ex.):** `meu rascunho de domingo` + diagrama à mão.

### #10 — MEME-COM-CLASSE · família CULTURA
- **Descrição visual:** formato de meme reconhecível, MAS com tipografia limpa e paleta controlada (não Impact, não cara de print de zap). Humor com acabamento.
- **Quando usar (formato):** post curto cultural/humor · **tempero de baixa frequência, nunca como base**.
- **Gatilho:** atenção + comment (pertencimento, "isso sou eu").
- **Palavra-martelo (ex.):** `eu explicando MCP pro meu sócio pela 4ª vez`.

### #11 — DEBRIEF-DA-SEMANA · família RITUAL
- **Descrição visual:** **template FIXO** semanal do Raio-X de sexta. Layout estável (cabeçalho "RAIO-X DA SEMANA DE IA", 3 slots numerados, banda de data). Reconhecível como série — é a ÚNICA thumb que pode repetir o arquétipo toda semana.
- **Exceção declarada:** o **cabeçalho-série** `RAIO-X DA SEMANA DE IA` é PERMITIDO porque é **cabeçalho, não footer**. A proibição de "tag de série" (§0.2) e o `no series tag` da NEGATIVE base valem para o **FOOTER**. O footer do #11 continua sendo APENAS `APOLO SANTOS`.
- **Quando usar (formato):** **Debrief de sexta** (newsletter), fixo.
- **Gatilho:** save + reconhecimento de ritual.
- **Palavra-martelo (ex.):** `RAIO-X DA SEMANA · 3 MOVIMENTOS + 1 HYPE`.

---

## 3. SPEC RÍGIDO DOS 4 SIMPLES (anti "post sem capa")

> **Por que esta seção existe (furo nº6 da crítica):** "texto-cru ≤6 palavras" parece deliberado quando capricha e "post sem capa" quando tem pressa. O que separa os dois é **spec fixo** + **trava mecânica** + **gate**. Nenhum dos 4 simples vai pro ar sem passar pelos 5 parâmetros (fonte, peso, contraste, respiro, tensão), pela **reprova mecânica de TENSÃO** **e** pelo gate.

### 3.0 — REGRAS GLOBAIS DOS SIMPLES (leia antes das fichas)

**EIXO QUE SEPARA OS PARES DE RISCO.** #2/#3 e #3/#4 podem colapsar no feed. O que os separa NÃO é a fonte (some no downscale) — é **composição/densidade + fundo**:
- **#2 Texto-cru:** fundo **saturado-CLARO** (ciano/amarelo/verde), texto grafite, bloco centralizado. Visual = "cartaz brilhante com texto escuro pesado".
- **#3 Pergunta-gigante:** fundo **escuro**, ALTA densidade textual empilhada à ESQUERDA nos 2/3 superiores, `?` gigante. SEM número isolado.
- **#4 Número-âncora:** fundo escuro OU creme, BAIXA densidade, 1 glifo-herói CENTRADO, ZERO frase.
- **#5 Screenshot-vazado:** UI mimetizada (chrome de app, monospace, tarja). Silhueta NÃO-tipográfica.

**TABELA DE VERBOS-DE-CURIOSIDADE** (o motor de cada simples — usada também na rotação §5):

| Arquétipo | VERBO | Loop que dispara | Como o post fecha o loop |
|---|---|---|---|
| #2 Texto-cru | **AFIRMAR** | "isso é verdade?? prova" | provando um claim categórico |
| #3 Pergunta-gigante | **ACUSAR** | "e eu, tô certo?" | ensinando algo que o leitor deveria saber |
| #4 Número-âncora | **CHOCAR-COM-DADO** | "como esse número é possível?" | dando o contexto que a caption negou |
| #5 Screenshot-vazado | **VAZAR** | "eu não deveria ver isso" | revelando a prova/bastidor |

**TABELA-PAR DE CONTRASTE (FECHADA — tira a decisão do terminal e do gerador).** O ratio ≥7:1 deixa de ser número que ninguém calcula e vira lookup binário:

| Fundo | Texto | Ratio | Status |
|---|---|---|---|
| `#0A0A0A` grafite | creme `#F4EFE5` | 17.3:1 | OK |
| `#1A1A2E` card | creme `#F4EFE5` | 14.9:1 | OK |
| `#F59E0B` amarelo | **GRAFITE** `#0A0A0A` | 9.2:1 | OK |
| `#00D4FF` ciano | **GRAFITE** `#0A0A0A` | 11.2:1 | OK |
| `#10B981` verde | **GRAFITE** `#0A0A0A` | 7.8:1 | OK |
| `#7C3AED` roxo | — | máx 5.0:1 | **NÃO usar como fundo de TEXTO** (só acento/`?`) |
| `#EF4444` vermelho | — | máx 5.3:1 | **NÃO usar como fundo de TEXTO** (só acento) |

> Amarelo, ciano e verde são saturados-CLAROS: levam **GRAFITE**, nunca creme. "Creme em saturado" só vale para os saturados-ESCUROS (`#0A0A0A`, `#1A1A2E`). Roxo e vermelho não batem 7:1 com texto nenhum → entram só como cor de ACENTO (ex. o `?` do #3), nunca como fundo de texto.

**NÚMEROS PROPORCIONAIS (1080×1350 vs 1200×627).** Os pixels abaixo valem para 1080×1350. Em 1200×627 (artigo/newsletter), recalcular pelo **menor lado** (627):

| Medida | 1080×1350 (feed) | 1200×627 (artigo) |
|---|---|---|
| Margem mínima | 120px (≈11% do menor lado) | ≈70px (11% de 627) |
| Margem do herói (nº/quote) | 140px (≈13%) | ≈80px |
| Altura do número-herói (#4) | ≥45% da altura | 35–45% da altura |
| Pergunta (#3) | 2/3 superiores | 2/3 superiores (proporcional) |

### 3.1 — TEXTO-CRU (#2)
| Parâmetro | Regra fixa |
|---|---|
| **FONTE** | Grotesca neutra Black: **Inter / Helvetica Now Display / Söhne** (peso Black). **NUNCA condensada** (condensada é assinatura do #1 brand-poster). **Gate de saída:** o gerador costuma ignorar a família — confira a SILHUETA na imagem final, não a string no prompt. #2 (não-condensada) e #3 (condensada) TÊM de ter silhuetas distintas; se saírem iguais, corrija no editor (igual acento/logo). |
| **PESO** | 900 (Black). Sem itálico. Tracking levemente negativo (−1 a −2%). |
| **CONTRASTE** | Fundo **sólido saturado-CLARO** (ciano/amarelo/verde da tabela §3.0) com texto **GRAFITE** `#0A0A0A`. **Proibido** `#0A0A0A` como fundo do texto-cru (fundo escuro é assinatura de #3/#4). Proibido roxo/vermelho como fundo de texto. |
| **RESPIRO** | Margem mínima **120px** (11% do menor lado). Bloco de texto ocupa **35–55% da altura e 50–70% da largura**; fora dessa banda = reprova (mata o "deserto" e o "lotado"). Máx 6 palavras / 2-3 linhas, centralizado verticalmente. |
| **TENSÃO — REPROVA MECÂNICA (pré-gate)** | A quebra de linha isola na última linha ≥1 de: **{negação explícita (NÃO / morreu / ninguém / nunca) · palavra truncada ou reticências · acusação direta ao leitor (te dedura / você faz isso) · contradição factual de senso comum}**. Zero gatilho marcado = reprova ANTES do gate. |
| **CRITÉRIO DA PALAVRA-MARTELO** | A frase contém UM objeto concreto e específico do nicho (IA / PME / RAG / MCP / ferramenta nomeada). Sem objeto = reprova. **BANLIST (slop morto):** "ninguém te contou", "a verdade que X não quer que você saiba", "isso vai mudar tudo", "o segredo de", "você está fazendo errado" genérico. |
| **GATE binário (Revisar)** | *"Tampando o nome Apolo Santos: essa frase me faz PARAR e querer o resto — e é uma AFIRMAÇÃO que quero ver provada (não uma pergunta sobre mim)?"* Legenda bonita → **reprova**. (Backstop subjetivo — a trava real é a reprova mecânica acima.) |

### 3.2 — PERGUNTA-GIGANTE (#3)
| Parâmetro | Regra fixa |
|---|---|
| **FONTE** | Condensada pesada caixa-alta: **Anton / Bebas Neue / Druk Condensed**. **Gate de saída:** confira a silhueta condensada-empilhada na imagem; se saiu igual ao #2, corrija no editor. |
| **PESO** | O mais pesado da família (Anton já é black nativo). |
| **CONTRASTE** | Fundo **escuro** (`#0A0A0A` ou navy `#1A1A2E`), pergunta em creme `#F4EFE5`. O `?` gigante é **OBRIGATÓRIO e DOMINANTE**: bloco de cor sólida de acento (ciano/roxo/amarelo) ocupando **≥30% do canvas** — silhueta, não pontinho. O acento do `?` DEVE ter hue diferente do fundo (sem roxo-sobre-roxo) e ratio ≥4.5:1 contra ele. |
| **RESPIRO** | Pergunta alinhada à **esquerda**, ocupa os **2/3 superiores**. Terço inferior = respiro vazio com só o footer. Margem ≥100px. |
| **TENSÃO — REPROVA MECÂNICA (pré-gate)** | A pergunta tem de (a) ser respondível com **"eu não sei"** — proibido sim/não de resposta óbvia ou retórica — **E** (b) endereçar explicitamente 1 das 3 feridas do operador PME: **ficar pra trás / pagar caro / ser enganado por fornecedor**. Falhou (a) ou (b) = reprova ANTES do gate. |
| **GATE binário (Revisar)** | *"Um dono de PME sente um cutucão (eu deveria saber isso e não sei) — e a pergunta me ACUSA de não saber (não me faz duvidar de um fato externo)?"* Não cutuca → **reprova**. |

### 3.3 — NÚMERO-ÂNCORA (#4)
| Parâmetro | Regra fixa |
|---|---|
| **FONTE** | Número: **Druk Wide / Helvetica Now Display Black / Inter 900** (gigante, tabular). Caption: **JetBrains Mono** ou **Inter Medium**, pequena. |
| **PESO** | Número 900 (Black/Heavy). Caption 400-500. |
| **CONTRASTE** | 3 modos (ver Gabarito 3): (a) número creme/acento sobre fundo escuro `#0A0A0A`; (b) número grafite `#1A1A1A` sobre fundo creme `#F4EFE5`; (c) número de acento sobre fundo escuro. **Uma** cor de acento só. |
| **RESPIRO** | Número é o herói: altura ≥**45%** do canvas (35–45% em 1200×627), centralizado, margem ≥**140px**. Só **3 elementos**: número + 1 linha de caption + footer. Nada mais. |
| **TENSÃO — REPROVA MECÂNICA (pré-gate)** | O número precisa de ≥1 de: **{magnitude chocante (grande/pequena demais) · unidade inesperada · sem unidade auto-explicativa — proibir "80% mais rápido" que já se fecha sozinho; permitir "0 funcionários"}**; a caption dá só o MÍNIMO (1 ponto de apoio concreto, nunca a explicação). **TRAVA:** número SEMPRE em algarismo/símbolo (`80%`, `R$ 1,2 MI`, `4min`, `3x`) — número por extenso ("OITENTA POR CENTO") = reprova. |
| **GATE binário (Revisar)** | *"O número sozinho gera um 'peraí, como?' que só o post responde — ou já tá auto-explicado e não preciso clicar?"* Auto-explica → **reprova**. |

### 3.4 — SCREENSHOT-VAZADO (#5)
| Parâmetro | Regra fixa |
|---|---|
| **ORIGEM (pré-condição factual — roda ANTES de tudo)** | O print só é permitido se reproduz uma interação que **ACONTECEU de verdade**. 3 origens válidas: (a) conversa/erro real, com nome do cliente sob tarja e nenhum dado identificável exposto; (b) print sanitizado com permissão; (c) erro/output de IA genérico que você mesmo consegue reproduzir na ferramenta. **PROIBIDO inventar diálogo cliente-IA só para a thumb** (fabricar prova social fere a autoridade analítica e gera risco reputacional/LGPD). |
| **FONTE** | Corpo em **monospace** (JetBrains Mono / SF Mono / IBM Plex Mono); chrome de UI em sans de sistema (SF Pro / Roboto). |
| **PESO** | Regular/Medium (mimetiza interface real — **não pode parecer pôster**). |
| **CONTRASTE** | Parece print real: fundo de app (branco de chat OU dark de terminal/DM), balão/linha de mensagem, barra de notificação. Uma **tarja de redação preta de borda dura (ou borrão cru)** cobre o dado sensível = o "vazamento". |
| **RESPIRO** | O mock ocupa **60–80% da altura** do canvas; margens laterais ≥8% do menor lado; a tarja cobre **≥1 linha inteira** de mensagem (nunca meia palavra). Sombra/moldura de device sutil opcional. |
| **TENSÃO — REPROVA MECÂNICA (pré-gate)** | A tarja DEVE cobrir o **sujeito/dado da frase** (nome do cliente, número ou resposta da IA). Tarja sobre elemento decorativo (sem cobrir o dado) = print decorativo = reprova. Tem chrome de UI real (status bar, timestamp, avatar) + corpo monospace. |
| **GATE FACTUAL (antes do estético)** | *"Esse diálogo/erro aconteceu de verdade e eu conseguiria mostrar a origem?"* NÃO → reprova; vira #2 Texto-cru ou #6 Card-conteudista. |
| **GATE estético (Revisar)** | *"Parece um vazamento real que eu daria zoom — ou parece marca fingindo ser print? Se cheira a marketing, reprova."* |

---

## 4. TABELA FORMATO-DE-POST → ARQUÉTIPO-DE-THUMB

| Formato de post (menu §2 do plano) | Primário | Alternativo |
|---|---|---|
| 1 · Case de empresa (motor) | **#1 Brand-poster** | #8 Foto-real+frase / #7 Antes-depois |
| 2 · Debrief de sexta (newsletter) | **#11 Debrief-da-semana** (fixo) | — |
| 3 · Deep-dive explicador | **#6 Card-conteudista** | #3 Pergunta-gigante |
| 4 · Post curto bomba | **#2 Texto-cru** | #4 Número-âncora |
| 5 · Confissão de bastidor | **#8 Foto-real+frase-brutal** | #9 Anotação-manuscrita |
| 6 · Lista/comparativo salvável | **#6 Card-conteudista** | #7 Antes-e-depois |
| 7 · Framework/playbook nomeado | **#6 Card-conteudista** | #4 Número-âncora |
| 8 · Mito vs Verdade | **#7 Antes-e-depois split** | #3 Pergunta-gigante |
| 9 · Data-story (1 número) | **#4 Número-âncora** | #5 Screenshot-vazado |
| 10 · Previsão/aposta datada | **#2 Texto-cru** | #4 Número-âncora |
| 11 · Build-in-public | **#9 Anotação-manuscrita** | #5 Screenshot-vazado |
| 12 · Pergunta/poll | **#3 Pergunta-gigante** | #5 Screenshot-vazado |
| (Cultura/humor — quando aplicável) | **#10 Meme-com-classe** | #2 Texto-cru |

> **#2 e #3 NÃO são pareados como primário/alt no mesmo formato** — eles colapsam no feed (§3.0), então a tabela evita empurrá-los pra adjacência. **#10 Meme-com-classe** é o único **tempero de rotação** (nunca como base). **#5 Screenshot-vazado é membro pleno da família simples**, não tempero — é justamente o simples com silhueta distinta, então puxa a heterogeneidade.

---

## 5. REGRA DE ROTAÇÃO DURA

1. **Nunca o mesmo arquétipo em 2 posts seguidos** — exceto **#11 Debrief** (template fixo de sexta).
2. **#1 Brand-poster é EXCLUSIVO de case real** (empresa nomeada + dado com fonte). Nomear empresa é exclusivo do #1 — nunca nas captions dos simples.
3. **A cada 5 posts: pelo menos 3 famílias visuais distintas** (motor / simples / conteúdo / humano / cultura / ritual).
4. **Pelo menos 2 simples/curiosidade por semana** (#2 / #3 / #4 / #5).
5. **THUMB é 1 dos 4 eixos de rotação do Revisar** (formato · inimigo · pilar · thumb). Nenhum post consecutivo compartilha 2+ eixos.
6. **Frescor dentro do arquétipo:** ao reaparecer um simples na semana, trocar a cor de fundo **E** variar um 2º eixo permitido pelo §3 (escala/crop do herói, palavra-martelo no topo vs base). **NÃO mexer no alinhamento** (cravado por arquétipo). Para o **#4 número-âncora**, cujo fundo é escuro OU creme por spec, "trocar a cor de fundo" = **trocar o MODO** (creme-em-preto / grafite-em-creme / acento-em-preto).
7. **TETO POR ARQUÉTIPO:** nenhum simples (#2/#3/#4/#5) aparece mais de **2x em qualquer janela de 7 posts** (vale junto com a regra 1). #11 segue exceção.
8. **DIVERSIDADE DENTRO DOS SIMPLES:** a cada bloco de 5 posts, os simples usados cobrem **≥2 arquétipos distintos**. Proibido fechar o mínimo da regra 4 com o mesmo arquétipo repetido.
9. **PAR COLAPSANTE #2×#3:** texto-cru e pergunta-gigante **nunca em posts consecutivos NEM com o mesmo fundo na mesma semana**.
10. **COTA NÃO-TIPOGRÁFICA:** toda semana, ≥1 das 2 cotas simples deve ser **visualmente não-tipográfica** — **#5 Screenshot-vazado** (ou **#9 Anotação-manuscrita**, se a semana já o usa, satisfaz no lugar). Sem isso, as 2 vagas viram "texto-em-fundo + texto-em-fundo" e o feed monotoniza.
11. **NERVO/VERBO:** dois posts seguidos não podem usar o mesmo verbo-de-curiosidade (AFIRMAR / ACUSAR / CHOCAR-COM-DADO / VAZAR), mesmo com arquétipos diferentes.

---

## 6. SISTEMA DE TEMPLATES REUTILIZÁVEIS — 5 GABARITOS PRONTOS

> **Como usar:** o Apolo abre o Ideogram (typography mode, magic prompt OFF), cola o **PROMPT PRINCIPAL** do gabarito e troca só os campos marcados `«TROCAR: …»`. Cola o **NEGATIVE PROMPT** separadamente. Confere os acentos e o footer. Pronto. **Relaxa a política prompt-only só para estes 5 gabaritos pré-aprovados** (decisão Apolo, furo nº5).
>
> **No negative vai SÓ o que excluir; acento é exigido no PROMPT PRINCIPAL, nunca no negative.**
>
> **NEGATIVE PROMPT BASE (vale para os 5, copiar sempre):**
> ```
> no 3D, no 3D render, no CGI, no glow, no neon glow, no generic AI-art look, no AI mascot, no robot, no brain illustration, no light bulb, no gear, no circuit board, no neural network decoration, no holographic UI, no desaturated palette, no muted colors, no glitch, no rainbow, no Impact font, no comic sans, no crude meme typography, no thick black text outline, no lorem ipsum, no placeholder text in brackets, no deformed letters, no garbled text, no extra invented text, no series tag in the footer, no post number, no license code, no unaccented Portuguese, no Latin text missing diacritics
> ```

---

### GABARITO 1 — TEXTO-CRU (#2) · família SIMPLES/CURIOSIDADE
**Troca só:** a frase (≤6 palavras) e a cor de fundo (rotativa, saturada-clara).

**PROMPT PRINCIPAL:**
```
A bold, flat, social-native statement poster, vertical 4:5 portrait, exact 1080x1350 pixels. Single FLAT solid background color — a SATURATED-LIGHT brand color «TROCAR: cor de fundo, ex. #00D4FF ciano / #F59E0B amarelo / #10B981 verde». No gradient, no texture, no ornament, no illustration.

ONE short line of text, max 6 words, set in a NEUTRAL heavy grotesque (Inter Black / Helvetica Now Display Black / Söhne Kräftig), weight 900, NOT condensed. Text color is GRAPHITE #0A0A0A (dark text on the saturated-light background — contrast ratio 7:1+).

Text block centered vertically, occupying 35–55% of the canvas height and 50–70% of usable width, with generous breathing room above and below (margins 120px). The line breaks so the punchline word lands ALONE on the last line.

Text to set (Portuguese, keep accents exactly): «TROCAR: frase, ex. "Sua IA te DEDURA."»

FOOTER — a slim line at the very bottom center, small condensed caps, letter-spacing 0.2em, in graphite: "APOLO SANTOS".

MOOD — deliberate, confident, editorial. Looks intentional, never empty. Flat design, no 3D, no glow.
```
**NEGATIVE:** base + `no cream/white text on the saturated background (text is graphite), no dark #0A0A0A background, no text on purple or red, no gradient background, no photo`.
**GATE antes de entregar:** §3.1 (gatilho de TENSÃO marcado? objeto concreto? AFIRMA?).

---

### GABARITO 2 — PERGUNTA-GIGANTE (#3) · família SIMPLES/CURIOSIDADE
**Troca só:** a pergunta, a cor de fundo (escura, rotativa) e a cor do `?`.

**PROMPT PRINCIPAL:**
```
A bold, flat, social-native QUESTION poster, vertical 4:5 portrait, exact 1080x1350 pixels. Flat solid DARK background «TROCAR: cor de fundo escura, padrão #0A0A0A grafite; alternar #1A1A2E navy» — dark enough for cream text to read at 7:1. No gradient, no photo, no 3D.

ONE question fills the TOP TWO-THIRDS, LEFT-aligned, set in a heavy CONDENSED all-caps typeface (Anton / Bebas Neue / Druk Condensed), stacked tall and dense, in cream #F4EFE5. A GIANT question mark "?" as the DOMINANT graphic block, a solid shape occupying at least 30% of the canvas, in one accent color «TROCAR: cor do ?, ex. #00D4FF ciano / #7C3AED roxo / #F59E0B amarelo» — the accent MUST be a different hue from the background (no purple-on-purple) and reach ≥4.5:1 against it.

The BOTTOM THIRD is intentional empty breathing room. Question does not touch the edges (margin 100px).

Question to set (Portuguese caps, keep accents — NÃO, VOCÊ, É, SÓ exactly): «TROCAR: pergunta, ex. "SUA IA EXECUTA OU SÓ RESPONDE?"»

FOOTER — slim line bottom-left, small condensed caps, letter-spacing 0.2em, cream: "APOLO SANTOS".

MOOD — confrontational, makes a small-business owner feel "I should know this and I don't." Flat, no glow, no AI-art look.
```
**NEGATIVE:** base + `no small or decorative question mark (the ? is dominant), no photo, no rhetorical-poster cliché, no smiley`.
**GATE antes de entregar:** §3.2 (responde "eu não sei"? endereça 1 das 3 feridas? ACUSA?).

---

### GABARITO 3 — NÚMERO-ÂNCORA (#4) · família SIMPLES/CURIOSIDADE
**Troca só:** o MODO de fundo, o número e a caption.

**PROMPT PRINCIPAL:**
```
A bold, flat, social-native DATA poster, vertical 4:5 portrait, exact 1080x1350 pixels. MODE «TROCAR: (a) número creme/acento sobre fundo escuro #0A0A0A · (b) número grafite #1A1A1A sobre fundo creme #F4EFE5 · (c) número de acento sobre fundo escuro #0A0A0A». Flat solid background per chosen mode. No gradient, no photo, no 3D, no chart.

ONE giant NUMBER dominates the canvas — at least 45% of the height — perfectly centered, in a heavy tabular display face (Druk Wide / Helvetica Now Display Black / Inter 900). Lots of empty air around it (margins 140px).

Exactly THREE elements, nothing else: the number, one small caption line, the footer.

Number to set (digits/symbols only, never spelled out): «TROCAR: número, ex. "R$ 1,2 MI"».
Caption (small, JetBrains Mono or Inter Medium — gives ONE concrete anchor: object/place/source, NOT the explanation): «TROCAR: caption, ex. "escondido numa linha de log" / "e ninguém olhava o boleto"».

FOOTER — slim line bottom center, small condensed caps, letter-spacing 0.2em: "APOLO SANTOS".

MOOD — the number feels strange / counter-intuitive, demanding context the caption withholds. Flat, no glow, no generic AI look.
```
**NEGATIVE:** base + `no chart, no graph, no axis, no second number, no full sentence explanation, no number spelled out in words (digits/symbols only)`.
**GATE antes de entregar:** §3.3 (gera "peraí, como?"? número em algarismo? caption concreta sem nomear empresa?).

---

### GABARITO 4 — SCREENSHOT-VAZADO (#5) · família SIMPLES/CURIOSIDADE
**PRÉ-CONDIÇÃO (§3.4):** o diálogo/erro tem de ter acontecido de verdade — proibido inventar conversa cliente-IA só pra thumb.
**Troca só:** o tipo de UI (chat/DM/terminal/notificação), o texto e o que a tarja cobre.

**PROMPT PRINCIPAL:**
```
A realistic flat UI SCREENSHOT mock, vertical 4:5 portrait, exact 1080x1350 pixels. It must look like a REAL leaked screen capture — NOT a marketing poster. Choose ONE interface: «TROCAR: tipo de UI — messaging app chat bubble / DM inbox / dark terminal / phone notification banner».

Render it with authentic UI chrome (status bar, avatars/initials, timestamps, send field) using a system sans (SF Pro / Roboto) for chrome and MONOSPACE (JetBrains Mono / SF Mono) for message body. Real app margins, mock occupies 60–80% of the canvas height, subtle device frame and soft shadow allowed.

The message content (Portuguese, keep accents): «TROCAR: conteúdo, ex. balão "a IA respondeu ISSO pro cliente:" + linha seguinte».

A HARD-EDGED flat black redaction rectangle (or a raw heavy blur) covers the sensitive bit — like a real censored leak, not a designed graphic. It covers at least one full message line. Place it over: «TROCAR: o que esconder, ex. o nome do cliente / o número / a resposta».

FOOTER — a slim discreet line at the very bottom center, small caps, letter-spacing 0.2em: "APOLO SANTOS".

MOOD — "I shouldn't be seeing this." Looks captured, not designed. Flat UI, no 3D, no glow, no AI-art gloss.
```
**NEGATIVE:** base (mas o `no photo` **NÃO** se aplica — UI mock é permitido) + `no poster layout, no big headline typography, no decorative frame, no rounded or decorative redaction bar, no colored or branded censorship overlay, no neatly designed redaction, no fake logos, no brand watermark besides footer`.
**GATE antes de entregar:** §3.4 (pré-condição factual OK? tarja cobre o dado? parece vazamento real?).

---

### GABARITO 5 — BRAND-POSTER FLAT (#1) · família MOTOR (só case)
**Troca só:** marca, cor da marca, logo, micro-stats, setup e a palavra-martelo. (Estrutura espelha o case Assai×Vivo já validado.)

**PROMPT PRINCIPAL (versão single-brand):**
```
A bold, flat, social-native BRAND poster, vertical 4:5 portrait, exact 1080x1350 pixels. High-contrast graphic poster — NOT a photo, NOT a 3D render, NOT a mockup, no human face, no illustrated headset. A punchy branded card built to stop the scroll.

BACKGROUND — solid «TROCAR: cor da marca, ex. #F47920 laranja Assai», full bleed, completely FLAT. No gradient, no texture, no ornament — one true brand color, NOT an "AI gradient".

TOP — clean reserved space for the official «TROCAR: marca, ex. ASSAI» logo (placed later in editor), flanked by 2-3 short cream #F4EFE5 emphasis dashes. Below it, a small cream condensed-caps micro-stat: «TROCAR: micro-stat, ex. "RESOLVE 80% SOZINHA"».

CENTRAL HAMMER BLOCK — lower-middle. A setup line in cream condensed caps (keep Portuguese accents): «TROCAR: setup, ex. "IA BOA NÃO É A ÚLTIMA LINHA. É A"». Then THE HAMMER: the single word «TROCAR: palavra-martelo, ex. "PRIMEIRA"» set GIANT inside a rounded-corner sticker BOX filled warm cream #F4EFE5, the word in neutral graphite #1A1A1A (reads over any brand color). This box is the focal point — big, confident, centered.

Heavy CONDENSED display typography throughout (Anton / Druk / Compacta / Bebas Black).

FOOTER — slim line at the very bottom center, small condensed all-caps in cream, letter-spacing 0.2em: "APOLO SANTOS". No series tag, no post number.

MOOD — confident, punchy, a clean brand statement. Flat design, social-native.
```
**FALLBACK DO LOGO (obrigatório):** geradores deformam wordmark. Gerar com **espaço reservado** no topo (só speed-lines), depois aplicar o **logo oficial** (PNG/SVG) no editor (Figma/Canva).
**NEGATIVE:** base + `no deformed wordmark, no garbled logo letters, no AI gradient over the brand color, no low-contrast hammer box (must be cream box with graphite text)`.
**GATE antes de entregar:** logo não-deformado? caixa-martelo com contraste? acentos no setup (`NÃO`/`É`/`ÚLTIMA`)? cor da marca chapada (não virou gradiente de IA)? footer limpo?

---

## 7. CHECKLIST PRÉ-ENTREGA (todo arquétipo)

- [ ] **1080 x 1350** (4:5)? Números do §3 recalculados se o canvas for **1200×627**?
- [ ] Arquétipo **diferente do post anterior** (rotação §5)? Brand-poster só se for case?
- [ ] Mensagem compreensível em **3 segundos**? Apenas **1 ideia**?
- [ ] **Par texto/fundo bate a TABELA §3.0** (creme só em escuro; grafite em amarelo/ciano/verde; roxo/vermelho fora de fundo-de-texto)?
- [ ] Se for **simples (#2-#5)**: marcou **≥1 gatilho de TENSÃO** (reprova mecânica) **e** passou no **GATE**?
- [ ] **SILHUETA da fonte** bate com o arquétipo? #2/#4/#5 = NÃO-condensada; #3 = CONDENSADA empilhada. (#2 vs #3 distintos — senão corrige no editor.)
- [ ] Se for **#5**: passou na **PRÉ-CONDIÇÃO FACTUAL** (interação real, dado de cliente protegido) antes do gate estético?
- [ ] Nenhum simples **>2x nos últimos 7 posts** (§5.7)? Bloco de 5 cobre **≥2 simples distintos** (§5.8)? Cota **não-tipográfica** da semana usada (#5 ou #9, §5.10)?
- [ ] **APOLO SANTOS** presente como footer? **Footer LIMPO** — zero licença/CC, zero tag de série, zero número de post?
- [ ] **Acentos PT corretos**, inclusive all-caps (`NÃO`, `VOCÊ`, `É`, `SÓ`, `ÚLTIMA`)? (Acento exigido no prompt principal, nunca no negative.)
- [ ] **Negative prompt** aplicado (no 3D, no glow, no generic AI-art look)?
- [ ] Fonte citada se houver dado (case/número)?
- [ ] Entrega é **só `.md`** (prompt-only)? (Exceção: os 5 gabaritos pré-aprovados.)

---

## 8. BLOCO DE NOTAS — ROTAÇÃO + GATE (manter vivo)

```markdown
## ÚLTIMO ARQUÉTIPO + VERBO USADO
- Post anterior → Arquétipo #__ (família ____) · verbo ____ (se simples)

## CONTAGEM DA SEMANA
- Simples/curiosidade usados: __/2 mínimos
- Famílias distintas nos últimos 5 posts: __/3 mínimos
- Por arquétipo nos últimos 7 posts: #2 __/2 · #3 __/2 · #4 __/2 · #5 __/2  (teto 2)
- Arquétipos simples distintos no bloco de 5: __/2 mínimos
- Cota NÃO-tipográfica usada esta semana (#5 ou #9)? sim/não

## HISTÓRICO (com rastro do gate)
| Data | Post | Arquétipo | Família | Verbo | Gate (passou/reprovou) | Gatilho TENSÃO marcado | Teste-estranho (s/n/—) |
|------|------|-----------|---------|-------|------------------------|------------------------|------------------------|
```

> **TESTE DO ESTRANHO (reforço opcional, não bloqueia o pipeline):** 1 mensagem no WhatsApp pro sócio — "isso te faz parar? sim/não em 3s". Resposta "não" ou não-testável a tempo → vale a checklist de TENSÃO (§3) como veredito final; o gosto do autor NÃO desempata.

---
FIM. 11 arquétipos · 6 famílias · 4 simples com spec rígido (5 parâmetros + reprova mecânica de TENSÃO + tabela-par de contraste + gate) · 5 gabaritos prontos (texto-cru, pergunta-gigante, número-âncora, screenshot-vazado, brand-poster) · prompt-only · footer só APOLO SANTOS · acentos PT em all-caps · negative sempre no 3D/no glow/no generic AI-art. Revisão adversarial 05/06: 21 furos confirmados e fechados.
