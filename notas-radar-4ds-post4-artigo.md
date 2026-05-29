# NOTAS RADAR — POST 4 SERIE OS 4Ds DA IA · ARTIGO "OS 3 MODOS DA IA"

> STATUS: CONCLUIDO
> Data publicacao alvo: Seg 19/05/2026 10h00 BRT
> Pasta destino: posts/2026-05-19_artigo-3-modos-ia/
> Tipo: ARTIGO LinkedIn (formato newsletter, mais longo que os posts deep-dive)
> Funcao na serie: PONTE entre a primeira metade (D1 Delegation + D2 Description) e a segunda (D3 Discernment + D4 Diligence)
> Calibragem de viralizacao v1 aplicada (aprovada 13/05/2026)
> Pesquisa concluida: 14/05/2026 — Radar agent

---

## RESUMO EXECUTIVO (1 paragrafo)

Posts 1 a 3 ensinaram a DECIDIR (D1) e a FALAR (D2). O artigo do dia 19 responde a pergunta seguinte: depois que voce delega bem e descreve bem, EM QUAL MODO voce vai operar? Anthropic AI Fluency define 3: Automation (IA executa tarefa definida), Augmentation (humano e IA pensam juntos) e Agency (IA opera com autonomia dentro de limites). O erro que o mercado comete e tratar isso como uma escada de niveis, onde Agency seria o "avancado". Nao e escada, e tres ferramentas pra tres situacoes. Os dados de 2025-2026 sao duros: Gartner projeta 40%+ dos projetos de IA agentica cancelados ate 2027 (Gartner, 2025), a S&P Global mostra que 42% das empresas abandonaram a maioria das iniciativas de IA em 2024, contra 17% no ano anterior (S&P Global, 2025), e apenas 1 em cada 5 empresas tem governanca madura pra agentes autonomos (estudos enterprise 2026). O inimigo do artigo e o CONSULTOR DE LIVRO TRADUZIDO, que vende "agentes autonomos" como resposta universal sem nunca ter agendado um cron job. Pronto pra Estrategia.

---

## 1. EXTRACAO ANTHROPIC — OS 3 MODOS DE INTERACAO HUMANO-IA

### Fonte primaria

> "Three Modes of AI interaction:
> - **Automation:** AI executes specific tasks based on human instructions
> - **Augmentation:** Humans and AI collaborate as thinking partners
> - **Agency:** Humans configure AI to independently perform future tasks on their behalf"
> Fonte: 1.2_AI_Fluency_Summary_One-Pager.pdf — Anthropic, Dakan e Feller, 2025, CC BY-NC-SA 4.0

Definicao expandida da cheat sheet (AI_Fluency_vocabulary_cheat_sheet.pdf):

| Modo | Definicao oficial Anthropic | Quem decide o que |
|------|----------------------------|-------------------|
| **Automation** | When AI performs specific tasks based on specific human instructions. The human defines what needs to be done, and the AI executes it. | Humano define TUDO. IA so executa. |
| **Augmentation** | When humans and AI collaborate as thinking partners to complete tasks together. Involves iterative back-and-forth where both contribute to the outcome. | Humano e IA decidem JUNTOS, ida e volta. |
| **Agency** | When humans configure AI to work independently on their behalf, including interacting with other humans or AI. The human establishes the AI's knowledge and behavior patterns rather than specifying exact actions. | Humano configura o COMPORTAMENTO. IA decide as ACOES dentro daquilo. |

### Os 3 modos com exemplo, criterio de escolha e aterramento PME

| Modo | Exemplo pratico | Criterio: quando usar | Aterramento PME brasileira | Onde falha |
|------|-----------------|----------------------|----------------------------|------------|
| **AUTOMATION** | "Classifique esses 200 emails entre pedido, reclamacao e duvida" — tarefa fechada, regra clara, output previsivel | Quando a tarefa tem regra clara e baixa ambiguidade. O erro custa pouco ou e facil de pegar. | Distribuidora classifica notas fiscais por tipo. Varejo organiza fotos de produto por categoria. Tarefa repetida, criterio fixo. | Quando a tarefa tem excecao demais. Vira o problema do RPA: 40% cai pro humano (visto no Post 2). |
| **AUGMENTATION** | "Vamos pensar juntos no posicionamento da campanha. Eu trago o briefing, voce questiona, eu refino" — pensamento em parceria | Quando a tarefa exige julgamento, contexto, criatividade. O humano precisa continuar dono da decisao. | CEO usa IA pra estressar uma decisao de preco. Marketing usa IA como sparring de copy. A IA nao decide, ajuda a pensar. | Quando a empresa trata como Automation: joga o problema e aceita a primeira resposta. Vira workslop. |
| **AGENCY** | "Toda segunda, puxe os dados de venda, monte o resumo no padrao X, e mande pro time. Se algo fugir de Y, me avise" — IA opera sozinha dentro de limites | Quando a tarefa e repetida, os limites sao claros, e existe supervisao e ponto de parada definido. | Servico configura um agente pra preparar o fechamento mensal. Operacao configura agente de triagem que escala pro humano nos casos fora do padrao. | Quando faltam limites e supervisao. E o cenario dos 40% de projetos agenticos cancelados (Gartner, 2025). |

### O ponto-chave do artigo (insight de leitura do Radar)

O material Anthropic NAO apresenta os 3 modos como uma escada de maturidade. Apresenta como 3 ferramentas. O mercado distorce: vende Agency como "o nivel avancado", Automation como "basico". Errado. **A fluencia esta em escolher o modo certo pra cada tarefa, nao em subir de nivel.** Esse e o angulo central do artigo e o que diferencia o Apolo do hype.

### Conexao com a serie (do One-Pager Anthropic)

O One-Pager confirma: os 4Ds e os 3 modos sao o MESMO framework. Os 4Ds sao as competencias (como agir bem). Os 3 modos sao as configuracoes de trabalho (como humano e IA se dividem). O artigo amarra: D1 decide SE e O QUE delegar, D2 descreve BEM, e os 3 modos definem o FORMATO da colaboracao. D3 e D4 vem depois pra avaliar e responder.

---

## 2. DADOS NOVOS — MODOS DE OPERACAO IA (3 dados solidos + 1 bonus)

Todos com fonte + ano + contexto. Dados dos Posts 1-3 (MIT NANDA 95%, McKinsey 6%, Sebrae 44%, Workday 37%, PwC 56%, Stack Overflow 66%, Rev 3x alucinacao, MIT Sloan) seguem como pano de fundo — NAO repetir como hook.

### DADO 1 — Gartner: 40%+ dos projetos de IA agentica cancelados ate 2027

> Mais de 40% dos projetos de IA agentica serao cancelados ate o fim de 2027, segundo pesquisa com mais de 3.400 organizacoes que ja investem na tecnologia. Motivos: custo crescente, valor pouco claro, controles de risco fracos.

- Fonte: Gartner, 2025 (citado em Search Engine Land e FP&A Trends)
- URL: https://searchengineland.com/gartner-40-of-agentic-ai-projects-will-fail-making-humans-indispensable-474695
- Por que importa pro artigo: e o dado-ancora do modo AGENCY. O mercado vende Agency como destino. Gartner diz que 40% nao chega la. O artigo usa pra mostrar que Agency sem limites e sem supervisao e o modo que mais quebra.
- Como usar: ancora do hook OU fechamento da secao Agency. "O modo que o consultor mais vende e o que mais empresa cancela."

### DADO 2 — S&P Global: 42% das empresas abandonaram a maioria das iniciativas de IA em 2024

> 42% das empresas abandonaram a maioria das suas iniciativas de IA em 2024, contra apenas 17% no ano anterior. Um salto de 2,5x em um ano.

- Fonte: S&P Global, 2025 (citado em Trullion e Squirro)
- URL: https://trullion.com/blog/why-over-40-of-agentic-ai-projects-will-fail/
- Por que importa pro artigo: prova que o problema nao e adotar IA, e adotar no modo errado. A taxa de abandono explodiu porque empresa pulou Automation/Augmentation e foi direto pro hype.
- Como usar: contraste com o entusiasmo. "Nao falta vontade. Falta escolher o modo."

### DADO 3 — Governanca: apenas 1 em 5 empresas tem modelo maduro pra agentes autonomos

> Apenas 1 em cada 5 empresas tem um modelo de governanca maduro para agentes de IA autonomos. Ou seja, 80% das que estao implementando agentes fazem isso sem a infraestrutura pra gerencia-los com seguranca em escala.

- Fonte: pesquisas enterprise 2026 (compiladas em OneReach.ai e Azumo)
- URL: https://onereach.ai/blog/agentic-ai-adoption-rates-roi-market-trends/
- Por que importa pro artigo: o modo Agency exige limites e supervisao. 80% das empresas pula isso. Conecta direto com o tease pra D4 Diligence (Post 6).
- Como usar: na secao Agency, como o "preco de entrada" que ninguem paga. Ponte pro D4.

### DADO BONUS (opcional — escolha do Post/Estrategia)

> Apenas 29% das organizacoes veem ROI significativo de IA generativa, e so 23% veem ROI de agentes de IA. Mas, entre as que introduziram IA agentica COM estrutura, 74% dos executivos relatam retorno ja no primeiro ano (pesquisas enterprise 2026).
- Fonte: pesquisas enterprise 2026 (Azumo, OneReach.ai)
- URL: https://azumo.com/artificial-intelligence/ai-insights/ai-agent-statistics
- Uso possivel: prova que Agency FUNCIONA quando feita certo (74% no primeiro ano), mas a media trava (23%). A diferenca e fluencia. Bom pra fechar o artigo no tom "nao e contra Agency, e contra Agency mal feita".

**Recomendacao Radar:** usar DADO 1 (Gartner 40%) + DADO 2 (S&P 42%) como espinha dorsal. DADO 3 (governanca) entra na secao Agency. DADO BONUS so se o artigo precisar de um respiro otimista no fim (artigo longo aguenta os 4).

---

## 3. RECOMENDACAO DE INIMIGO — CONSULTOR DE LIVRO TRADUZIDO (justificativa)

**Inimigo recomendado: CONSULTOR DE LIVRO TRADUZIDO.**

### Por que ele e o inimigo certo pra ESTE artigo

| Criterio | Consultor de Livro Traduzido | Auditor de IA |
|----------|------------------------------|---------------|
| Casa com o tema "3 modos"? | **SIM, perfeito** — ele vende "agentes autonomos" (Agency) como resposta universal porque Agency e o que soa avancado e cobra caro. Nunca rodou em producao, nao sabe quando Automation ou Augmentation resolve melhor. E a personificacao do erro central do artigo. | Fraco aqui — Auditor trava IA por governanca. Governanca casa com D4 Diligence (Post 6, 23/05). |
| Ja foi usado na serie? | NAO — estreia limpa. (Post 3 usou Eterno Pilotante) | NAO, mas reservado pra Post 6 D4 |
| Sustenta com dado? | **SIM** — Gartner 40% cancelados, S&P 42% abandono. O consultor vende o modo que mais quebra. | Sim, mas o ataque dele rende mais no post de Diligence |
| Gera reconhecimento polarizado? | **ALTO** — todo CEO PME ja recebeu a proposta de R$ 30k de "implementacao de agentes". Quem contratou comenta defensivo, quem desconfiou comenta cumplice. | Medio |
| Coerencia de rotacao | Estreia o segundo inimigo da serie, mantem rotacao saudavel (P3 Eterno Pilotante, P4 Consultor, P6 Auditor reservado) | Quebraria a reserva pro D4 |

**Conclusao do Radar:** CONSULTOR DE LIVRO TRADUZIDO no Post 4. AUDITOR DE IA segue reservado pro Post 6 D4 Diligence (23/05). Isso fecha a rotacao dos 3 inimigos na serie sem repetir nenhum.

### Gancho narrativo do Consultor aplicado aos 3 modos

> "Tem uma especie de consultor circulando em PME brasileira agora. Vende 'agentes autonomos' por R$ 30 mil. Fala em Agency como se fosse o unico modo que importa. Nunca agendou um cron job na vida. O que ele nao te conta: 40% dos projetos de IA agentica vao ser cancelados ate 2027 (Gartner, 2025). Ele vende o modo que mais quebra, porque e o que soa mais caro."

### Variacao mais cirurgica (Estrategia decide)

> "O consultor te vendeu Agency. Sua operacao precisava de Augmentation. E a diferenca entre os dois e a conta que voce vai pagar em 2027."

---

## 4. TRES CANDIDATAS DE MONEY LINE (formato screenshot-ready)

Todas dentro da regra dura: 6-12 palavras, 2+ palavras CAPS LOCK, sem hifen, sem aspas, sem fonte dentro, paragrafo isolado. Aprovadas nos 4 testes (screenshot, incomodo, sabor de operador, pernada).

### CANDIDATA 1 (recomendada — tese central do artigo)

> AGENCY NAO E NIVEL AVANCADO. E O MODO ERRADO PRA MAIORIA.

- 11 palavras. CAPS em AGENCY, NIVEL AVANCADO, MODO ERRADO.
- Screenshot: PASSA — resume o artigo inteiro numa frase.
- Incomodo: ALTO — cutuca quem comprou o hype de "agentes autonomos".
- Sabor de operador: PASSA — soa como veredicto de quem ja viu Agency quebrar.
- Pernada: PASSA — invertida ("Agency e nivel avancado, e o modo certo pra maioria") vira justamente a mentira que o artigo desmonta.

### CANDIDATA 2 (ataque direto ao Consultor — coesao com inimigo)

> O CONSULTOR VENDE AGENTE. SUA OPERACAO PRECISA DE PARCEIRO.

- 9 palavras. CAPS em CONSULTOR, AGENTE, PARCEIRO.
- Screenshot: PASSA — funciona solta, contrasta Agency (agente) com Augmentation (parceiro).
- Incomodo: ALTO — atinge consultor e quem contratou.
- Sabor de operador: PASSA — afirmacao seca de quem distingue os dois.
- Pernada: PASSA — invertida vira nonsense.

### CANDIDATA 3 (ancora pra Automation mal feita — sabor maximo de operador)

> AUTOMACAO ERRADA NAO ECONOMIZA. SO ERRA MAIS RAPIDO.

- 8 palavras. CAPS em AUTOMACAO, ERRADA.
- Screenshot: PASSA — aforismo redondo.
- Incomodo: PASSA — cutuca quem automatizou a tarefa errada (callback do Post 2).
- Sabor de operador: PASSA — frase de quem ja viu RPA quebrar.
- Pernada: PASSA — invertida vira "automacao errada economiza", absurdo.

### RECOMENDACAO RADAR ENTRE AS 3

**Candidata 1 (AGENCY NAO E NIVEL AVANCADO. E O MODO ERRADO PRA MAIORIA)** e a money line do artigo — ela E a tese. Candidata 2 e otima se Estrategia quiser amarrar money line com o inimigo. Candidata 3 funciona melhor como frase de apoio dentro da secao Automation, nao como money line final.

**Combinacao otima:** Candidata 1 como money line isolada antes do CTA. Candidata 3 como frase forte dentro do corpo (secao Automation). Candidata 2 fica de reserva.

---

## 5. CTA SHARE TRIGGER — VARIACAO RECOMENDADA

### ATENCAO — conflito de rotacao a resolver com Estrategia

A calibragem v1 designa a **Variacao 4 (REPASSA)** como a indicada pra "posts de inflexao (artigo 3 modos, post fecho)". MAS o Radar do Post 3 recomendou Variacao 4 REPASSA pro Post 3. A regra dura diz "nunca repetir a mesma variacao em posts consecutivos". **Estrategia precisa confirmar qual variacao o Post 3 efetivamente publicou.** Se o Post 3 saiu com REPASSA, o Post 4 NAO pode usar REPASSA.

### Recomendacao Radar: Variacao 5 (MOSTRA na reuniao)

Encaixa melhor que REPASSA pra um artigo longo de board, e resolve o conflito de rotacao.

> Mostra esse artigo na proxima reuniao onde alguem disser "vamos colocar um agente de IA pra isso". Sua empresa precisa de Automation, Augmentation ou Agency nessa tarefa, e voce ja sabe a diferenca?

- Share trigger: MOSTRA (Variacao 5).
- Pergunta aberta com escolha tripla (Automation/Augmentation/Agency) — gera comentarios estruturados.
- Tom consultivo, casa com formato artigo + leitura de board.

### Alternativa (se Estrategia confirmar que Post 3 NAO usou REPASSA)

**Variacao 4 (REPASSA pra equipe)** — designada pela calibragem pra este tipo de post:
> Repassa pra equipe que vai sentar na proxima reuniao de transformacao digital. Voces estao escolhendo ferramenta ou estao escolhendo modo de operacao?

### NAO usar

- Variacao 1 MARCA e Variacao 3 MANDA — sao ofensivas demais pra um artigo (formato pede tom mais consultivo).
- Variacao 2 SALVA — reservar pro Post 6 D4 Diligence.

---

## 6. CASOS PME OBSERVAVEIS (sem nome de empresa)

Dois cenarios reais e plausiveis. Estrategia escolhe UM (recomendacao: Caso 1 — erro de pular pra Agency e o mais reconhecivel e o mais ligado ao inimigo).

### CASO 1 — E-commerce regional pula pra Agency total no atendimento (escolheu Agency onde precisava de Augmentation)

**O que aconteceu:** E-commerce medio (catalogo de 4.000 SKUs, 2 centros de distribuicao) contrata "implementacao de agentes autonomos" com consultor. Configuram um agente pra responder TODOS os tickets de atendimento e AUTORIZAR reembolsos sozinho, sem humano no circuito.

**Onde errou o modo:**
- O atendimento tem regra clara em 60% dos casos (status de pedido, rastreamento) — esses cabiam **Automation**.
- Os outros 40% (reclamacao com contexto, pedido de excecao, cliente irritado) exigiam julgamento — cabiam **Augmentation** (IA rascunha, humano aprova).
- A empresa configurou **Agency total** nos 100%. Em 3 semanas: reembolsos autorizados errado, cliente de alto valor tratado por regra generica, marca arranhada em review publico.

**O modo certo era:** Automation pros 60% faceis + Augmentation pros 40% sensiveis. Agency so depois, em tarefa bem delimitada, com supervisao.
**Custo do erro:** o que devia economizar virou prejuizo de reputacao.

### CASO 2 — Escritorio de servicos preso em Automation (ficou em Automation onde Augmentation/Agency destravava valor)

**O que aconteceu:** Escritorio de servicos profissionais (contabil ou advocacia, 50 a 80 pessoas) usa IA so como "autocompletar chique": cada pessoa pede um texto, uma revisao, uma traducao, tarefa isolada. Nunca configurou um fluxo.

**Onde errou o modo:**
- Trata IA so como **Automation** de microtarefa. Acha que "ja usa IA".
- Nunca testou **Augmentation** (usar IA como sparring na analise de um caso complexo) nem **Agency** (configurar um agente pra preparar o fechamento mensal recorrente dentro de limites).
- O concorrente configurou um agente delimitado pro fechamento e ganhou 2 dias por mes por equipe.

**O modo certo era:** subir parte das tarefas pra Augmentation e Agency, mantendo Automation onde ja funciona.
**Custo do erro:** nao e prejuizo visivel, e custo de oportunidade. Acha que esta na corrida e esta extraindo 10% do potencial.

### Recomendacao Radar

**Usar Caso 1 como principal** (pula pra Agency). Mais visceral, mais visual, conecta direto com o inimigo Consultor de Livro Traduzido. **Caso 2 pode entrar como contraponto curto** no artigo (artigo aguenta os dois): "tem o erro de correr demais e o erro de nao sair do lugar". Isso reforca a tese de que nao e escada, e escolha.

---

## 7. CONEXAO NARRATIVA — CHECKLIST DE COESAO

| Item | Como fazer |
|------|-----------|
| Callback Post 3 D2 Description (Sex 16/05) | "Sexta fechei o D2: como descrever bem o que voce quer. Hoje, a pergunta seguinte." |
| Callback Post 2 D1 Delegation (Qua 14/05) | "Na quarta foi o D1: decidir o que delegar." |
| Callback Post 1 ancora (Seg 12/05) | "Tudo comecou na segunda passada com OS 4Ds." |
| Posicionamento do artigo na serie | Explicitar que e a PONTE: "Ate aqui, voce aprendeu a decidir (D1) e a falar (D2). Agora, o formato da colaboracao. Depois dele, vem avaliar (D3) e responder (D4)." |
| Disclosure Anthropic + CC BY-NC-SA 4.0 | OBRIGATORIO. Padrao da serie. |
| Tease Post 5 D3 Discernment (Qua 21/05) | "Quarta: escolher o modo nao basta. Voce precisa saber AVALIAR o que a IA entregou. Esse e o D3." |
| Tease Post 6 D4 Diligence (Sex 23/05) | "E sexta: quem responde quando o agente erra? O D4." |
| Tease Post 7 fecho (Seg 26/05) | "Dia 26 fecho a serie com as 6 tecnicas praticas de prompt." |
| Hashtag-assinatura | #InteligenciaArtificial #Anthropic #PME #Os4Ds #PMEoperando |
| Money line isolada | Recomendada: Candidata 1 (AGENCY NAO E NIVEL AVANCADO. E O MODO ERRADO PRA MAIORIA.) |
| CTA share trigger | MOSTRA na reuniao (Variacao 5) — ou REPASSA se Estrategia confirmar que P3 nao usou |

---

## 8. SUGESTAO DE ESTRUTURA DO ARTIGO (formato newsletter)

Artigo LinkedIn aguenta 800 a 1.500 palavras. NAO e o post de 1.300 chars zero-click. Tem titulo, subtitulo e secoes com subcabecalhos.

### Titulo (3 opcoes — Estrategia escolhe)

1. **OS 3 MODOS DA IA: por que sua empresa provavelmente esta operando no errado** (direto, com atrito)
2. **Automation, Augmentation, Agency: o mapa que falta antes de escalar IA** (didatico, organizado)
3. **O consultor te vendeu Agency. Sua operacao talvez precisasse de Augmentation.** (ataque ao inimigo no titulo)

Recomendacao Radar: titulo 1 (atrito + clareza). Titulo 3 e tentador mas queima o inimigo cedo demais.

### Subtitulo / dek

> Anthropic define 3 modos de trabalhar com IA. O mercado vende como escada de niveis. Nao e escada. E a diferenca entre 40% de projetos cancelados e ROI no primeiro ano.

### Secoes sugeridas (9 blocos)

1. **Abertura com o inimigo** — cena do Consultor de Livro Traduzido vendendo "agentes autonomos". 1 a 2 paragrafos. Sem dado ainda, so a cena.
2. **O erro de fundo** — empresa escolhe a FERRAMENTA antes de escolher o MODO. Aqui entra o dado S&P 42% de abandono.
3. **Recap rapido da serie** — D1 (decidir) + D2 (descrever) em 3 linhas. Posiciona o artigo como ponte. Nao repetir conteudo, so amarrar.
4. **Modo 1 — AUTOMATION** — definicao Anthropic + exemplo PME + quando usar + quando falha. Aqui cabe a Candidata 3 como frase forte.
5. **Modo 2 — AUGMENTATION** — definicao + exemplo + por que e o modo mais subestimado pela PME.
6. **Modo 3 — AGENCY** — definicao + exemplo + o dado Gartner 40% + o dado de governanca (1 em 5). O modo mais vendido e o que mais quebra.
7. **Como escolher o modo** — a regra pratica: regra clara e erro barato = Automation. Exige julgamento = Augmentation. Tarefa repetida com limites e supervisao = Agency. Pode ser um mini-quadro ou 3 perguntas.
8. **Caso PME** — Caso 1 (e-commerce que pulou pra Agency). Opcionalmente o contraponto do Caso 2 em 2 linhas.
9. **Fecho** — money line isolada (Candidata 1) + ponte pra D3/D4 + CTA share trigger + hashtags.

### Caps lock no artigo (3 a 5 pontos)

Recomendados: AUTOMATION, AUGMENTATION, AGENCY (os 3 nomes, branding obrigatorio), MODO (o conceito central), e a money line ja traz CAPS embutido. Total dentro da regra.

---

## 9. SUGESTAO DE THUMBNAIL / CAPA DE ARTIGO

### Avaliacao da rotacao (resposta ao briefing)

Post 4 NAO entra na rotacao de thumbnail de feed (screenshot/foto/meme). E ARTIGO — pede **capa editorial** (formato wide, proporcao de capa de newsletter LinkedIn, ~1280x720 ou 1200x627). Tratamento proprio, mais "capa de revista" que "thumb de post".

### Templates ja queimados na serie (NAO repetir)

- T6 (4 quadrantes navy/dourado/creme) — Post 1
- T11 (pergunta gigante tipografica terra/oliva) — Post 2
- Diptico papel vs terminal — Post 3
- T5 split, T8 bar chart — serie Tradicional+IA

### Conceito recomendado — "O ESPECTRO DOS 3 MODOS" (barra horizontal / mesa de som)

Uma barra horizontal dividida em 3 zonas, da esquerda pra direita, mostrando o deslize de controle humano para autonomia da IA:

- **Zona 1 — AUTOMATION:** icone de humano grande, icone de IA pequeno. Legenda "humano define, IA executa".
- **Zona 2 — AUGMENTATION:** humano e IA do mesmo tamanho, setas de ida e volta entre eles. Legenda "pensam juntos".
- **Zona 3 — AGENCY:** icone de IA grande, humano pequeno em posicao de supervisao (olho / checkpoint). Legenda "IA opera, humano supervisiona".

Titulo do artigo sobreposto no topo. Footer com credito.

**Por que esse conceito ganha:**
1. Diferencia 100% de Post 1, 2 e 3 — nenhum usou barra/espectro horizontal.
2. Comunica a TESE do artigo so na imagem: nao e escada, e espectro de controle.
3. Funciona como capa editorial wide (a barra horizontal preenche o formato landscape naturalmente).
4. Otimo pra screenshot e reuso — vira diagrama de referencia.

### Paleta sugerida (NAO repetir navy do P1, terra-oliva do P2, sepia-terminal do P3)

**OPCAO A (recomendada — gradiente de controle):**
- Fundo creme `#F4EFE5` (coesao com a serie)
- Zona Automation: azul calmo `#3E5C76` (humano no controle = estavel)
- Zona Augmentation: dourado `#C9A14A` (o fio dourado da serie, no centro = colaboracao)
- Zona Agency: verde-musgo `#5A6B3B` (homenagem ao verde Anthropic, IA autonoma)
- Tipografia: grafite `#1A1F2C`
- A barra inteira como um gradiente suave entre as 3 zonas

**OPCAO B (mais sobria — monocromatica com 1 acento):**
- Fundo grafite `#1A1F2C`, tipografia creme `#F4EFE5`, barra em tons de cinza com a zona central (Augmentation) em dourado `#C9A14A` pra marcar que e o modo mais subestimado
- Risco: menos didatica que a Opcao A

### Variantes possiveis

- V1 (recomendada): barra/espectro horizontal dos 3 modos
- V2: 3 cartoes lado a lado (estilo os PDFs Anthropic) — risco: parecido demais com o material original e com T6
- V3: titulo tipografico puro + a money line — risco: ja foi a linha do Post 2

---

## 10. RISCOS, CONTRAS E O QUE NAO INCLUIR

### Riscos da pauta

1. **Sobreposicao com D1 Delegation (Post 2).** D1 decide SE e O QUE delegar. Os 3 modos definem o FORMATO da colaboracao depois que ja decidiu delegar. Sao niveis diferentes. Se o artigo confundir, parece que esta repetindo o Post 2. Antidoto: a secao 3 (recap) deve deixar explicito "D1 = decidir; modos = formato".
2. **Tema "agentes de IA" esta no pico do hype no LinkedIn.** Risco de soar como mais um post de agente. Diferencial Apolo: o artigo e CONTRA o hype de Agency, nao a favor. O atrito do inimigo Consultor protege esse posicionamento.
3. **Artigo longo tem risco de cair o engajamento vs post curto.** Antidoto: abrir com a cena do inimigo (nao com definicao), e usar os subcabecalhos pra dar escaneabilidade. Money line e CTA no fim seguram quem chegou la.
4. **Dados de IA agentica sao majoritariamente enterprise/EUA.** Cuidado ao aterrar pra PME brasileira: usar o numero como tendencia ("ate quem tem time e orcamento erra o modo"), nao como dado direto de PME BR.
5. **Conflito de rotacao do CTA (ver secao 5).** Estrategia precisa confirmar o que o Post 3 publicou antes de fechar o CTA do Post 4.

### O que NAO falar

- Cliches banidos: revolucao, game-changer, disruptivo, transformador, futuro do trabalho.
- NAO repetir hooks dos Posts 1-3 (MIT 95%, McKinsey 6%, Workday 37%, Stack Overflow 66%). Podem aparecer de passagem no corpo.
- NAO citar concorrentes pelo nome (RDD, Cavallini, Microsoft, Mastertech, Fundacao Bradesco).
- NAO mencionar marcas saturadas: Hostinger, Magalu, Klarna, Snap, Nvidia (cooldown).
- NAO vender Agency como vilao absoluto — o artigo e contra Agency MAL ESCOLHIDA, nao contra Agency. O DADO BONUS (74% de ROI no primeiro ano quando bem feita) existe pra equilibrar.
- NAO antecipar D3 (avaliar output) nem D4 (responsabilidade) alem do tease. Foco nos 3 modos.
- NAO tratar os 3 modos como escada de maturidade — esse e exatamente o erro que o artigo combate.
- Hifen e travessao = zero no corpo final.

### Tradeoff narrativo

O artigo e a PONTE da serie. Se ficar fraco, a serie perde momentum no meio. Se ficar forte demais e auto-suficiente, o leitor pode achar que ja entendeu tudo e pular D3/D4. **Calibre:** o artigo deve ENTREGAR os 3 modos completos mas deixar claro que escolher o modo e so metade — falta avaliar (D3) e responder (D4). O tease do fim nao e opcional, e estrutural.

---

## 11. FONTES PRIORITARIAS PARA CITAR (top 3 — Post escolhe)

Ordem de impacto narrativo:

1. **Gartner 2025** — "40%+ dos projetos de IA agentica cancelados ate 2027" (autoridade maxima, dado-ancora do modo Agency)
2. **S&P Global 2025** — "42% das empresas abandonaram a maioria das iniciativas de IA em 2024, contra 17% no ano anterior" (mostra a aceleracao do problema)
3. **Pesquisas enterprise 2026** — "1 em 5 empresas tem governanca madura pra agentes" (ponte pro D4 Diligence)

Anthropic AI Fluency (Dakan/Feller, 2025, CC BY-NC-SA 4.0) — citacao obrigatoria de framework (disclosure D4), nao "dado de pesquisa".

---

## 12. HORARIO SUGERIDO

**Confirmado: Seg 19/05/2026 10h00 BRT.**

Segunda as 10h e a mesma janela do Post 1 ancora — coerente, porque o artigo tem peso de "marco" na serie (e a ponte). Segunda de manha o publico B2B abre a semana planejando, bom momento pra um artigo de decisao estrategica. Tempo de margem confortavel entre 14/05 (hoje) e 19/05 pra Estrategia + Post + Thumb + Revisar.

---

## 13. NOTAS PARA OS PROXIMOS TIMES

### Para Estrategia (proxima a entrar)

**Decisoes em aberto:**
- Titulo do artigo: opcao 1 (atrito) vs 2 (didatico) vs 3 (ataque) — Radar recomenda 1
- Money line: Candidata 1 (recomendada, e a tese) vs 2 (amarra inimigo) vs 3 (apoio na secao Automation)
- CTA: MOSTRA (Variacao 5, recomendada, resolve conflito de rotacao) vs REPASSA (Variacao 4, so se confirmar que P3 nao usou)
- Caso PME: Caso 1 sozinho vs Caso 1 + contraponto Caso 2
- Dados: 3 ancoras (Gartner, S&P, governanca) vs incluir o DADO BONUS pro respiro otimista
- Estrutura: confirmar os 9 blocos da secao 8 ou enxugar

**Validar:**
- Inimigo Consultor de Livro Traduzido encaixa? (Radar recomenda forte)
- Resolver conflito de rotacao do CTA — checar o que o Post 3 publicou
- Tom observador-operador, contra o hype de Agency sem ser anti-Agency
- Calibragem v1 aplicada (inimigo, CTA share trigger, money line isolada, hashtag-assinatura — formato artigo, mas as 5 regras valem)

### Para Post (depois de Estrategia)

- Formato ARTIGO: 800 a 1.500 palavras, com titulo + subtitulo + subcabecalhos. NAO e o post de 1.300 chars.
- Acentos PT-BR corretos
- Hifen e travessao zero no corpo
- 3 a 5 caps lock (mapa secao 8)
- Disclosure Anthropic obrigatorio
- Citar fonte entre parenteses em todo dado (Gartner 2025, S&P Global 2025, pesquisas enterprise 2026)
- Money line em paragrafo ISOLADO antes do CTA
- Fechar com hashtags incluindo #Os4Ds e #PMEoperando

### Para Thumb (so prompt-md, politica vigente)

- E CAPA DE ARTIGO (formato wide ~1200x627), nao thumb de feed
- Conceito recomendado: barra/espectro horizontal dos 3 modos (V1)
- Paleta recomendada: Opcao A (gradiente azul-dourado-musgo sobre creme)
- Diferente de T6, T11 e do diptico do Post 3
- Acentos PT-BR no titulo e footer (regra dura da serie)
- Footer com credito Apolo + serie + numero (4 de 7) + CC BY-NC-SA 4.0
- Entrega apenas thumbnail-prompt.md (politica de 02/05)

### Para Revisar

- Score minimo 4.0/5
- Verificar que o artigo posiciona os 3 modos como ESPECTRO, nao escada de maturidade
- Verificar money line isolada (1 paragrafo, 6-12 palavras, 2+ caps, sem hifen, sem aspas)
- Verificar CTA com share trigger nomeado (MOSTRA ou REPASSA) — e que NAO repete a variacao do Post 3
- Verificar fechamento com #Os4Ds + #PMEoperando
- Verificar callbacks (Posts 1, 2, 3) e teases (Posts 5, 6, 7)
- Verificar fontes inline (Gartner, S&P Global, governanca)
- Verificar disclosure Anthropic
- Hifen zero
- Calibragem v1 aplicada — reprovar se faltar money line isolada OU CTA share trigger OU #PMEoperando

---

## 14. BLOCO DE NOTAS — RADAR (acompanhamento)

- [x] Radar Post 4 Artigo 3 modos — entregue 14/05/2026 → enviado pra Estrategia
- [ ] Estrategia Post 4 Artigo — pendente
- [ ] Post Post 4 Artigo — pendente
- [ ] Thumb Post 4 Artigo — pendente
- [ ] Revisar Post 4 Artigo — pendente
- [ ] Publicacao Post 4 Artigo — Seg 19/05/2026 10h00 BRT

### Estado da rotacao de inimigos na serie (controle)

- Post 3 D2 Description — ETERNO PILOTANTE
- Post 4 Artigo 3 modos — CONSULTOR DE LIVRO TRADUZIDO (recomendado aqui)
- Post 6 D4 Diligence — AUDITOR DE IA (reservado)
- Posts 5 e 7 — sem inimigo definido (rotacao reabre, pode reusar qualquer um sem ser consecutivo)

---

FIM DO BLOCO. Pronto para entrega a Estrategia (Artigo 3 modos).
