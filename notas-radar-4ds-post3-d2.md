# NOTAS RADAR — POST 3 SERIE OS 4Ds DA IA · D2 DESCRIPTION (deep-dive)

> STATUS: CONCLUIDO
> Data publicacao alvo: Sex 16/05/2026 10h00 BRT
> Pasta destino: posts/2026-05-16_description-d2/
> Tipo: post deep-dive — segundo pos-ancora
> Conexao narrativa: amarra no Post 2 D1 (Qua 14/05) e Post 1 ancora (Seg 12/05)
> Calibragem de viralizacao v1 aplicada (aprovada 13/05/2026)
> Pesquisa concluida: 13/05/2026 — Radar agent

---

## RESUMO EXECUTIVO (1 paragrafo)

O Post 2 ensinou a DELEGAR (decidir quem faz o que). O Post 3 desce no D2: depois que voce decidiu pra que serve a IA, voce ainda precisa SABER FALAR com ela. E aqui que a PME brasileira tropeca em silencio. Pesquisa Stack Overflow 2025 com 49.000+ desenvolvedores mostra que 66% travam em outputs "perto do que queriam mas nao foram" e 45% dizem que debugar codigo de IA leva mais tempo do que escrever do zero (Stack Overflow Developer Survey, 2025). Rev 2025 mostra que 34% dos usuarios apontam "formular o pedido de um jeito que a IA entenda" como a maior barreira (Rev Industry Report, 2025). MIT Sloan validou em 2024 que o resultado da IA generativa depende tanto do prompt quanto do modelo (MIT Sloan, 2024). Anthropic AI Fluency divide D2 em 3 sub-componentes: Product (o QUE voce quer), Process (COMO a IA deve chegar la) e Performance (em QUE TOM). Aterramento PME via inimigo recomendado ETERNO PILOTANTE: 18 meses de teste, zero descricao decente, conclusao falsa "IA nao serve pra mim". Pronto pra Estrategia.

---

## 1. EXTRACAO DOS MATERIAIS ANTHROPIC (D2 + glossario + 6 tecnicas)

### A. Definicao oficial — D2 Description (Anthropic AI Fluency 2025)

> **Description** is the ability to communicate with AI in ways that create a productive collaborative environment. Clear communication with AI systems up front saves time and leads to better results.
> Fonte: 1.5_Description_Summary.pdf — Anthropic, Dakan e Feller, 2025, CC BY-NC-SA 4.0

3 sub-componentes (definicao + exemplo do material original + aterramento PME):

| Sub-D2 | Definicao oficial Anthropic | Exemplo original do PDF | Aterramento PME brasileira |
|--------|----------------------------|-------------------------|----------------------------|
| **Product Description** | Defining what you want in terms of outputs, format, audience, and style. ("the QUE") | "Hey! Guess what I'm thinking?" → "Sigh." (cena ilustrativa do PDF: pedido vago vira frustracao) | "Refaca esse email" sem dizer pra QUEM (cliente novo? cobranca?), em que FORMATO (texto curto? estrutura tema-corpo-CTA?), em que TOM (institucional? amigavel?) — gera generico, descartado |
| **Process Description** | Defining how the AI approaches your request, such as providing step by step instructions for the AI to follow. ("o COMO") | "The first thing we need to do..." | "Analise o relatorio de vendas" sem dizer os passos (cruzar com mes anterior? destacar tres maiores quedas? sugerir hipotese?) — IA chuta caminho, conclusao rasa |
| **Performance Description** | Defining the AI system's behavior during your collaboration, such as whether it should be concise or detailed, challenging or supportive. ("o QUE TOM") | "Act as a Socratic tutor" | "Quero opiniao" sem dizer "me desafie, nao concorde" ou "explica devagar como se eu fosse novo no tema" — vira aprovacao automatica, sem valor |

### B. Glossario relevante (AI_Fluency_vocabulary_cheat_sheet.pdf — Anthropic 2025)

Termos da cheat sheet que ancoram o D2 e podem entrar no post:

- **Prompt**: input dado a IA, incluindo instrucoes e documentos compartilhados.
- **Prompt engineering**: pratica de desenhar prompts efetivos pra produzir o output desejado.
- **Hallucination**: erro em que a IA afirma com confianca algo que parece plausivel mas e incorreto. (relevante: muita alucinacao vem de briefing ruim, nao de modelo ruim — ver dado Stanford/Rev abaixo)
- **Context window**: quantidade de informacao que a IA processa por vez. (D2 inclui saber quanto contexto dar)
- **Role or persona definition**: especificar carater, nivel de expertise ou estilo de comunicacao. (= Performance Description)
- **Output constraints**: especificar formato, comprimento, estrutura. (= Product Description)
- **Chain-of-thought prompting**: pedir pra IA pensar passo a passo. (= Process Description)
- **Few-shot learning**: dar exemplos do que e "bom". (suporta Product Description com exemplo concreto)

### C. Conexoes com as 6 tecnicas de prompt (DD2_Handout — Anthropic 2025)

As 6 tecnicas casam diretamente com os 3 sub-componentes do D2. Isso e GANCHO pro Post 7 da serie (Seg 26/05, fecho).

| Tecnica Anthropic | Sub-D2 que ela aterra | Exemplo do PDF |
|-------------------|----------------------|----------------|
| 1. Provide context | Product | "Tell me about climate change" → "Explain three major impacts of climate change on agriculture in tropical regions, with examples from the past decade" |
| 2. Show examples of good (few-shot) | Product | 2 exemplos de conversao tecnico → simples antes do pedido |
| 3. Specify output constraints | Product | "Design me a portfolio" → "Single-page com Hero, About Me, Skills, Portfolio, Experience, Contact. Sticky nav. Hamburger no mobile. Sunset palette. Dark/light toggle" |
| 4. Break complex tasks into steps | Process | "Analyze quarterly sales" → 4 passos numerados |
| 5. Ask it to think first | Process | "Antes de responder, pense passo a passo nos fatores envolvidos..." |
| 6. Define the AI's role | Performance | "Explain rainbows from the perspective of an experienced science teacher to a bright 10-year-old" |
| Secret weapon: ask AI to help write the prompt | Meta | "Estou tentando fazer X. Como deveria pedir pra voce me ajudar melhor?" |

**Tease forte pra Post 7:** No post 3 (este D2), ancorar o conceito. No post 7 (26/05), entregar as 6 tecnicas como caixa de ferramentas pratica do D2 + D3. Coesao narrativa garantida.

---

## 2. DADOS NOVOS — QUALIDADE DE PROMPT VS QUALIDADE DE OUTPUT (3 dados solidos)

Todos com fonte + ano + contexto. Os dados do Post 1 (95% MIT, 6% McKinsey, 44% Sebrae) e Post 2 (37% Workday, 56% PwC, 78% Automacao 1.0) seguem disponiveis como pano de fundo — NAO repetir como hook neste post.

### DADO 1 — Stack Overflow Developer Survey 2025 (49.000+ devs, autoridade tecnica reconhecida)

> 66% dos desenvolvedores travam em outputs de IA que "ficam perto mas nao acertam o pedido". 45% afirmam que debugar codigo gerado por IA leva mais tempo do que escrever do zero.

- Fonte: Stack Overflow 2025 Developer Survey
- URL: https://survey.stackoverflow.co/2025/ai/
- Por que importa pro D2: o gargalo nao e a IA gerar codigo errado — e a IA gerar codigo plausivel que NAO E O QUE A PESSOA QUERIA. Sintoma classico de Product Description falha. O mesmo padrao se repete em PME nao tecnica: "ficou parecido mas nao serve".
- Como usar no post: "Os desenvolvedores ja descobriram. 66% travam em outputs que ficam PERTO mas nao acertam. O CEO de PME esta passando pelo mesmo gargalo sem o vocabulario pra nomear: e o D2 Description."

### DADO 2 — Rev Industry Report 2025 (usuarios pesados de IA)

> 34% dos usuarios apontam "formular o pedido de um jeito que a IA entenda" como a MAIOR barreira ao uso de IA — acima de "saber o nivel certo de detalhe" (32%) e "ajustar instrucoes pra obter o output especifico" (26%). Estudo complementa: usuarios pesados de IA enfrentam ate 3x mais alucinacoes.

- Fonte: Rev Industry Report 2025 (citado em Rev Blog 2025)
- URL: https://www.rev.com/blog/ai-results
- Por que importa pro D2: contraintuitivo. Quem usa MAIS IA alucina MAIS. Por que? Porque pede coisa mais ambiciosa sem subir o nivel da descricao. Briefing rude escala alucinacao. E exatamente o gargalo do D2.
- Como usar no post: "Quem usa mais IA enfrenta TRES VEZES mais alucinacao. Nao porque a IA piorou. Porque o pedido ficou mais ambicioso sem virar mais claro."

### DADO 3 — MIT Sloan (estudo MIT Sloan Management Review, 2024, citado como autoridade academica)

> O resultado da IA generativa depende tanto do prompt do usuario quanto do modelo subjacente.

- Fonte: MIT Sloan Management Review, 2024
- URL: https://mitsloan.mit.edu/ideas-made-to-matter/study-generative-ai-results-depend-user-prompts-much-models
- Por que importa pro D2: MIT da legitimidade academica pra tese central do post. "Trocar de GPT-5 pra Claude 4 nao resolve. Descrever melhor, sim."
- Como usar no post: como ancora de autoridade no hook, dado que MIT ja virou marca de Apolo (citado no Post 1 ancora pra MIT NANDA 95%).

### DADO BONUS (opcional, escolha do Post)

> Em estudo medico 2025, prompts com mitigacao explicita caíram alucinacao de 64,1% pra 43,1% em casos longos (reducao de 33%).
- Fonte: revista medica revisada por pares (citada em getmaxim.ai/articles 2025)
- URL: https://www.getmaxim.ai/articles/ai-hallucinations-in-2025-causes-impact-and-solutions-for-trustworthy-ai/
- Uso possivel: prova quantitativa de que melhorar a Description corta alucinacao em 1/3. Mas escopo medico — usar so se Estrategia quiser exemplificar.

---

## 3. RECOMENDACAO DE INIMIGO — ETERNO PILOTANTE (justificativa)

**Inimigo recomendado: ETERNO PILOTANTE.**

### Por que ele e MAIS forte que AUDITOR DE IA pra ESTE post

| Criterio | Eterno Pilotante | Auditor de IA |
|----------|------------------|---------------|
| Casa direto com D2 Description? | **SIM** — ele testa, testa, testa, e cada teste falha porque ele NUNCA descreve direito o que quer. O proprio Description e a causa da falha em loop. | Parcial — Auditor trava IA por excesso de governanca. Governanca casa mais com D4 Diligence (post 23/05), nao com D2. |
| Tem dado pra sustentar? | **SIM** — 66% travam em "perto mas nao foi" (SO 2025), 34% apontam "formular pedido" como barreira #1 (Rev 2025), 18 meses de POC sem decisao e padrao confirmado da serie | Sim, mas o ataque dele ja foi parcialmente feito implicitamente em outros posts |
| Gera reconhecimento polarizado? | **ALTO** — todo CEO PME conhece um Eterno Pilotante. Provavelmente E um. Comenta defensivo ou cumplice. | Medio — Auditor e perfil de gestor de risco, menos comum em PME pequena |
| Casa com Post 1 e 2 narrativamente? | **SIM** — Post 2 atacou "delegar mal". Post 3 ataca "descrever mal". Eterno Pilotante e a juncao das duas dores: testou, nao descreveu, nao decidiu. Sequencia limpa. | Quebra a sequencia — Auditor mora em outro estagio do problema |
| Risco de queimar pra serie? | Baixo — ele e perfil natural pra reaparecer no Post 5 D3 Discernment e no Post 6 D4 Diligence | Auditor seria melhor pra D4 Diligence (23/05) — guardar pra la |

**Conclusao do Radar:** ETERNO PILOTANTE neste Post 3. AUDITOR DE IA fica reservado pro Post 6 D4 Diligence (23/05), que e onde governanca pega mais fundo.

### Gancho narrativo do Eterno Pilotante aplicado ao D2

> "Conheco esse gestor. Esta testando IA desde janeiro de 2024. 18 meses. Cinco ferramentas diferentes. Mesmo veredicto a cada teste: 'nao serve'. So que ele nunca consertou o que estava errado. Nao era o modelo. Era o pedido."

### Variacao mais ofensiva (Estrategia decide se cabe)

> "Em 18 meses de piloto, ele nao testou cinco IAs. Testou cinco vezes o mesmo briefing ruim."

---

## 4. TRES CANDIDATAS DE MONEY LINE (formato screenshot-ready)

Todas dentro da regra dura: 6-12 palavras, 2+ palavras CAPS LOCK, sem hifen, sem aspas, sem fonte dentro, paragrafo isolado. Aprovadas nos 4 testes de aceite (screenshot, incomodo, sabor de operador, pernada).

### CANDIDATA 1 (recomendada — ataque conceitual + sabor de operador)

> A IA NAO LE MENTE. ELA OBEDECE BRIEFING RUIM.

- 8 palavras. CAPS em IA, LE MENTE, BRIEFING RUIM (3 ancoras visuais).
- Teste screenshot: PASSA — funciona solta como aforismo.
- Teste incomodo: PASSA — cutuca quem culpa "a IA" e nao olha o proprio pedido.
- Teste sabor de operador: PASSA — soa como veredicto de alguem que ja viu 50 prompts ruins virarem queixa contra o modelo.
- Teste pernada: PASSA — invertida ("A IA LE MENTE. NAO OBEDECE BRIEFING RUIM") vira oposto absurdo.

### CANDIDATA 2 (ataque direto ao Eterno Pilotante — coesao com inimigo)

> VOCE NAO ESTA TESTANDO IA. ESTA TESTANDO SEU BRIEFING.

- 9 palavras. CAPS em VOCE, TESTANDO IA, TESTANDO (anafora).
- Teste screenshot: PASSA — funciona como bofetada solta.
- Teste incomodo: ALTO — Eterno Pilotante se reconhece e ou comenta defensivo ou da share envergonhado.
- Teste sabor de operador: PASSA — afirmacao curta, sem floreio.
- Teste pernada: PASSA — invertida vira platitude vaga.

### CANDIDATA 3 (ancora pra alucinacao — casa com dado Rev 2025)

> ALUCINACAO NAO E BUG DO MODELO. E LACUNA DO SEU PEDIDO.

- 11 palavras. CAPS em ALUCINACAO, BUG, LACUNA.
- Teste screenshot: PASSA — soa como insight tecnico de operador.
- Teste incomodo: PASSA — reverte culpa do desenvolvedor de IA pra usuario, mexe com narrativa popular.
- Teste sabor de operador: PASSA — alguem que ja viu LLM "errar" porque o usuario nao especificou.
- Teste pernada: PASSA — invertida vira "alucinacao e bug do modelo, nao lacuna do pedido", que e justamente a narrativa preguicosa que o post desmonta.

### RECOMENDACAO RADAR ENTRE AS 3

**Candidata 1 (A IA NAO LE MENTE. ELA OBEDECE BRIEFING RUIM)** e a mais redonda — sabor maximo de operador, screenshot perfeito, 8 palavras. Candidata 2 ataca mais forte mas e mais cirurgica (so quem se reconheceu como Pilotante reage). Candidata 3 da escudo tecnico mas e a mais longa.

**Combinacao otima (se Estrategia quiser):** money line principal = Candidata 1, e a Candidata 2 vira a frase IMEDIATAMENTE anterior no paragrafo de leitura (como setup), gerando rajada dupla.

---

## 5. CTA SHARE TRIGGER — VARIACAO RECOMENDADA

**Recomendacao Radar: Variacao 4 (REPASSA pra equipe) — mais ofensiva, casa com inimigo Eterno Pilotante.**

### Versao pronta (Estrategia ajusta)

> Repassa pra equipe que ainda escreve "melhore esse texto" como prompt. Qual dos tres componentes do D2 voce nunca explicitou: o que voce quer, como chegar la, ou em que tom?

- Share trigger: REPASSA (Variacao 4 da calibragem).
- Pergunta aberta com escolha tripla (Product/Process/Performance) — gera comentarios estruturados ("componente 1, sempre" / "tom, esqueci de pedir") = volume de comentarios alto e dado etnografico pro Apolo.
- Rotacao: Post 2 D1 ainda nao tem CTA da nova calibragem aprovada, mas o post 3 estreia o sistema. Variacao 4 e boa abertura — proxima rotacao (Variacao 5 MOSTRA NA REUNIAO) fica pro Post 5 D3 Discernment.

### Alternativa (Estrategia decide entre 4 e 5)

**Variacao 5 (MOSTRA na reuniao):**
> Mostra esse post na proxima reuniao onde alguem disser "a IA nao entende o que eu quero". Qual dos tres componentes do D2 voce nunca explicitou: o produto, o processo ou o estilo?

Variacao 5 e mais consultiva. Variacao 4 e mais ofensiva. Apolo escolhe o tom — Radar recomenda 4 por coerencia com inimigo Eterno Pilotante.

### NAO usar

- Variacao 1 (MARCA o socio) — ja foi sugerida em outros contextos, vai esgotar cedo.
- Variacao 2 (SALVA pra cobrar) — Post 6 D4 Diligence vai pedir esta.
- Variacao 3 (MANDA pro CFO) — encaixa melhor em post de numero pesado, nao em post conceitual.

---

## 6. CASOS PME OBSERVAVEIS (sem nome de empresa)

Dois cenarios reais e plausiveis pra ilustrar D2 falhando. Estrategia escolhe UM (recomendacao: caso 1 — varejo/distribuicao e o publico mais reconhecivel).

### CASO 1 — Distribuidora regional pede "melhore os emails" (Product Description falha)

**O que aconteceu:** Distribuidora media (300 funcionarios, 5 estados, foodservice) decide modernizar comunicacao. CEO pede pro time de marketing usar Claude pra "melhorar os emails". Em 30 dias, time entrega 47 emails reescritos.

**Onde o D2 quebrou:**
- **Product Description:** pediu "melhore" sem dizer pra QUEM (lead novo? carteira ativa? cobranca de inadimplente?), em que FORMATO (HTML estruturado? texto puro? assunto+CTA?), com que OBJETIVO (taxa de abertura? clique? recompra? agendamento de visita?). IA entregou 47 textos generos.
- **Process Description:** ninguem mandou a IA cruzar com historico de campanhas anteriores nem com persona do cliente.
- **Performance Description:** ninguem disse "tom direto de quem ja conhece o cliente ha 10 anos" — IA defaultou pra institucional asseptico.

**Resultado:** time descartou em 2 semanas, voltou pros templates antigos, conclusao da empresa = "IA nao serve pra venda B2B".
**O que faltou:** descrever os 3 componentes antes de pedir.

### CASO 2 — Industria pede "relatorio executivo" sem definir nada (Process Description falha)

**O que aconteceu:** Industria media (180 funcionarios, R$ 90M faturamento) coloca Claude pra "fazer o relatorio executivo do mes". CFO recebe na sexta as 17h.

**Onde o D2 quebrou:**
- **Product Description:** "executivo" pra ele = 1 pagina com 3 numeros. Pra IA = 8 paginas com analise de mercado.
- **Process Description:** ninguem disse "passo 1: cruzar com o mes anterior. passo 2: destacar as 3 maiores variacoes. passo 3: sugerir hipotese pra cada uma. passo 4: terminar com 1 recomendacao pro CFO". IA chutou a estrutura.
- **Performance Description:** ninguem disse "tom de CFO falando com CFO, sem floreio, sem 'considerando a complexidade do cenario macroeconomico'". IA encheu de adjetivo.

**Resultado:** CFO gastou 4h cortando paragrafos. Veredicto interno: "IA nao serve pra relatorio gerencial".
**O que faltou:** descrever processo + audiencia + tom.

### Recomendacao Radar

**Usar APENAS o Caso 1** (distribuidora/email). Mais reconhecivel pro publico CEO de PME (todo mundo tem operacao de email marketing fraca), mais visual (a pessoa visualiza um inbox), e linguagem mais direta. Caso 2 e cirurgico, mas fica reservado pra um post-vitamina futuro ou pra carrossel companion.

---

## 7. CONEXAO NARRATIVA COM A SERIE — CHECKLIST DE COESAO

| Item | Como fazer |
|------|-----------|
| Callback Post 2 D1 Delegation (Qua 14/05) | "Na quarta destrinchei o D1: decidir o que voce faz, o que a IA faz, o que fazem juntos. Hoje desco no D2." |
| Callback Post 1 ancora (Seg 12/05) | Opcional. Se citar, usar passagem rapida: "Apresentei OS 4Ds na segunda." |
| Callback Teatro Digital (07/05) | Pode reaparecer no fim: "Sem D2, todo prompt vira teatro digital de inteligencia." (opcional) |
| Disclosure Anthropic + CC BY-NC-SA 4.0 | OBRIGATORIO. Padrao da serie. |
| Tease Post 4 (artigo 3 modos, Seg 19/05) | "Segunda solto o artigo: depois que voce delega bem e descreve bem, em qual dos 3 modos voce vai operar — Automation, Augmentation ou Agency?" |
| Tease Post 7 (6 tecnicas, Seg 26/05) | "No dia 26 fecho com as 6 tecnicas praticas que aterram o D2 e o D3 em prompt real." |
| Hashtag-assinatura | #InteligenciaArtificial #Anthropic #PME #Os4Ds #PMEoperando |
| Money line isolada | Recomendada: Candidata 1 (A IA NAO LE MENTE. ELA OBEDECE BRIEFING RUIM.) |
| CTA share trigger | REPASSA pra equipe (Variacao 4) |

---

## 8. SUGESTAO DE THUMBNAIL (entrega so prompt-md, politica vigente)

### Templates ja queimados (NAO usar)

- Serie 4Ds:
  - T6 (4 quadrantes navy/dourado/creme) — Post 1 ancora 12/05
  - T11 (pergunta gigante tipografica terra/oliva) — Post 2 D1 14/05
- Serie Tradicional+IA: T5 split, T8 bar chart
- Hostinger/Magalu/IBGE: outros (cooldown opcional)

### Conceito visual recomendado — DIPTICO "BRIEFING VAGO vs BRIEFING ESPECIFICO" (template comparativo)

**Lado esquerdo (fundo claro, tipo papel manchado):**
> Header: "ESCREVA UM EMAIL"
> Output abaixo (em fonte mono ou italica): "Prezado cliente, gostaríamos de oferecer nossas soluções inovadoras..."

**Lado direito (fundo escuro, tipo terminal):**
> Header: "ESCREVA UM EMAIL DE RECOMPRA PRA CLIENTE B2B DE FOODSERVICE QUE SUMIU HA 60 DIAS, TOM DIRETO DE QUEM CONHECE, 80 PALAVRAS"
> Output abaixo: "Joao, faz 60 dias que voce nao pediu. Posso reservar o lote da semana?"

**Footer:**
> APOLO SANTOS · D2 DESCRIPTION · serie OS 4Ds DA IA · post 3 de 7

**Por que esse conceito ganha:**
1. Diferencia visualmente de Post 1 (4 quadrantes) e Post 2 (pergunta gigante). Variedade obrigatoria respeitada.
2. Mostra A AULA. Ninguem precisa ler o post pra entender — a thumb ja entrega o insight.
3. Funciona como screenshot independente (LinkedIn permite save de thumb pelo proprio LinkedIn pra repasse no WhatsApp).
4. Provoca clique: o leitor quer ler "o que mais tinha do lado direito".

### Paletas sugeridas (NAO repetir navy do Post 1 nem terra-oliva do Post 2)

**OPCAO A (recomendada — papel vs terminal, contraste vertical):**
- Fundo esquerdo: papel `#EDE6D6` (sepia esmaecido)
- Texto esquerdo: cinza `#6B6155` (legivel mas apagado)
- Fundo direito: grafite `#1A1F2C` (terminal escuro)
- Texto direito: verde menta `#A8E6A1` ou ambar `#E8B339` (tipografia hacker)
- Footer e linha divisoria: dourado `#C9A14A` (mantem coesao dourada com Posts 1 e 2)

**OPCAO B (preto x branco, brutalista):**
- Esquerdo: branco quente `#F4EFE5`, texto cinza
- Direito: preto `#0E0E10`, texto branco quente `#F4EFE5`
- Divisor: vermelho sinal `#D0382C`
- Risco: paleta dura, pode soar agressiva demais pra audiencia C-level conservadora

### Variantes possiveis (se Estrategia quiser opcoes)

- V1 (recomendada): diptico papel vs terminal com 2 prompts contrastantes
- V2: 3 colunas (Product / Process / Performance) com 1 frase exemplo em cada
- V3: cartaz tipografico unico com a money line (caso Estrategia queira reutilizar T11 mas com outro texto — Radar nao recomenda por repeticao recente)

---

## 9. RISCOS, CONTRAS E O QUE NAO INCLUIR

### Riscos da pauta

1. **Sobreposicao com D3 Discernment (Post 5, 21/05).** D2 = formular o pedido ANTES. D3 = avaliar o output DEPOIS. Manter foco em "antes do prompt", deixar "avaliar o output" pra D3. Se misturar, queima a serie.
2. **Tema "prompt engineering" esta saturado no LinkedIn EUA.** Diferencial Apolo: traduzir pra realidade PME brasileira (operador, nao "prompt engineer titulo de cargo"). Nao usar a expressao "prompt engineer" como cargo no post — usar "saber descrever".
3. **Dados Stack Overflow sao de desenvolvedores.** Cuidado ao usar pra publico CEO — adaptar narrativa do tipo "os desenvolvedores ja descobriram. O CEO PME esta passando pelo mesmo gargalo sem o vocabulario pra nomear". Nao tentar disfarcar que e survey tecnico.
4. **Dado "60% disappointed by AI = bad prompts" (SQ Magazine 2026) tem origem industria/blog, nao academica.** Radar NAO recomenda usar como dado duro. Stack Overflow + Rev + MIT Sloan sao as 3 ancoras seguras.

### O que NAO falar (cooldown editorial + regras da serie)

- Cliches banidos: revolucao, game-changer, disruptivo, transformador, futuro do trabalho
- NAO repetir hooks com 95% MIT / 6% McKinsey / 78% Automacao 1.0 (ja explorados em Posts 1 e 2)
- NAO citar concorrentes pelo nome (RDD, Cavallini, Microsoft, Mastertech, Fundacao Bradesco)
- NAO mencionar marcas saturadas: Hostinger, Magalu, Klarna, Snap, Nvidia (cooldown)
- NAO usar "engenharia de prompt" como conceito principal — usar "DESCRIPTION" e "como pedir bem". Engenharia de prompt e a TECNICA, descricao e a COMPETENCIA. Manter alinhado com Anthropic.
- NAO antecipar D3 (avaliar output) nem D4 (responsabilidade). Foco cirurgico no D2.
- NAO listar TODAS as 6 tecnicas. Mencionar de passagem como tease pro Post 7.
- Hifen e travessao = zero. Regra dura.
- Caps lock em 3 a 5 pontos (recomendados: D2, DESCRIPTION, PRODUCT/PROCESS/PERFORMANCE, BRIEFING RUIM, LACUNA DO SEU PEDIDO)

### Tradeoff narrativo

O Post 3 e o segundo deep-dive seguido. Risco da serie ficar "didatica demais" e o leitor desligar antes do Post 5. **Antidoto:** entrar com o inimigo Eterno Pilotante logo e abrir o post com cena, nao com conceito. A money line escolhida (Candidata 1) faz exatamente isso — entrega o veredicto operador antes do framework Anthropic. Estrategia controla a ordem.

---

## 10. FONTES PRIORITARIAS PARA CITAR NO POST (top 3 — Post escolhe)

Ordem de impacto narrativo:

1. **Stack Overflow Developer Survey 2025** — "66% travam em outputs que ficam perto mas nao foram. 45% dizem que debugar IA leva mais tempo que escrever do zero" (autoridade tecnica reconhecida, 49k+ devs, fresco)
2. **Rev Industry Report 2025** — "34% apontam formular pedido como barreira #1. Usuarios pesados de IA tem 3x mais alucinacao" (paradoxo + dado novo do problema)
3. **MIT Sloan 2024** — "Resultado da IA depende tanto do prompt quanto do modelo" (autoridade academica + ancora ja conhecida do Apolo via MIT NANDA do Post 1)

Anthropic AI Fluency (Dakan/Feller, 2025, CC BY-NC-SA 4.0) e citacao obrigatoria de framework (disclosure D4), nao "dado de pesquisa".

---

## 11. HORARIO SUGERIDO

**Confirmado: Sex 16/05/2026 10h00 BRT.**

Sexta as 10h e diferente do Post 1 (segunda 10h) e do Post 2 (quarta 9h). Sexta tem perfil de "leitura mais lenta antes do fim de semana" — bom pra conteudo conceitual de 1.300 chars como o D2. Janela B2B PT-BR continua valida. Tempo de margem pra Estrategia + Post + Revisar entre 13/05 (hoje) e 16/05.

---

## 12. NOTAS PARA OS PROXIMOS TIMES

### Para Estrategia (proxima a entrar)

**Decisoes em aberto:**
- Hook: Stack Overflow (autoridade tecnica) OU Rev (3x alucinacao, paradoxo) OU MIT Sloan (autoridade academica)
- Money line: Candidata 1 (recomendada) vs Candidata 2 (mais cirurgica) vs Candidata 3 (mais tecnica)
- Caso PME: Caso 1 distribuidora (recomendado) vs Caso 2 industria
- CTA: Variacao 4 REPASSA (recomendada) vs Variacao 5 MOSTRA
- Carrossel companion opcional com os 3 sub-componentes (decisao opcional)

**Validar:**
- Inimigo Eterno Pilotante encaixa? (Radar recomenda forte)
- Tom: observador-operador firme, sem suavizar (Apolo aprovou ataque polemico em 13/05)
- Calibragem v1 aplicada nas 5 regras (inimigo, formato consolidado, CTA share trigger, money line isolada, hashtag-assinatura)

### Para Post (depois de Estrategia)

- Limite ~1.300 chars zero-click
- Acentos PT-BR corretos
- Hifen e travessao zero
- 3 a 5 caps lock (mapa secao 9)
- Disclosure Anthropic obrigatorio
- Citar fonte entre parenteses em todo dado (Stack Overflow 2025, Rev 2025, MIT Sloan 2024)
- Money line em paragrafo ISOLADO antes do CTA
- Fechar com hashtags incluindo #Os4Ds e #PMEoperando

### Para Thumb (so prompt-md, politica vigente)

- Diferente do Post 1 (T6 4 quadrantes) e do Post 2 (T11 pergunta gigante)
- Conceito recomendado: diptico papel vs terminal (V1)
- Paleta recomendada: papel sepia + terminal grafite + dourado de coesao
- Acentos PT-BR corretos no header e footer (regra dura da serie)
- Footer com credito Apolo + serie + numero (3 de 7) + CC BY-NC-SA 4.0
- Entrega apenas thumbnail-prompt.md (politica de 02/05)

### Para Revisar

- Score minimo 4.0/5
- Verificar money line isolada (1 paragrafo, 6-12 palavras, 2+ caps, sem hifen, sem aspas)
- Verificar CTA com share trigger nomeado (REPASSA ou MOSTRA)
- Verificar fechamento com #Os4Ds + #PMEoperando
- Verificar callback explicito ao Post 2 D1 ("Na quarta destrinchei o D1...")
- Verificar tease Post 4 (artigo 3 modos, Seg 19/05) e Post 7 (6 tecnicas, Seg 26/05)
- Verificar fontes inline (Stack Overflow, Rev, MIT Sloan)
- Hifen zero
- Calibragem v1 totalmente aplicada — reprovar se faltar money line isolada OU CTA share trigger OU #PMEoperando

---

## 13. BLOCO DE NOTAS — RADAR (acompanhamento)

- [x] Radar Post 3 D2 Description — entregue 13/05/2026 → enviado pra Estrategia
- [ ] Estrategia Post 3 D2 — pendente
- [ ] Post Post 3 D2 — pendente
- [ ] Thumb Post 3 D2 — pendente
- [ ] Revisar Post 3 D2 — pendente
- [ ] Publicacao Post 3 D2 — Sex 16/05/2026 10h00 BRT

---

FIM DO BLOCO. Pronto para entrega a Estrategia D2.
