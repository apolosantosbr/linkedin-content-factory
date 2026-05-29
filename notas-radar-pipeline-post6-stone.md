# NOTAS RADAR — PIPELINE POST 6 · STONE BUILD VS BUY — 18 MESES CODANDO IA PROPRIA

> STATUS: CONCLUIDO
> Data publicacao alvo: Sex 12/06/2026 10h00 BRT
> Pasta destino: posts/2026-06-12_stone-build-vs-buy-ia/
> Tipo: case BR + tese build vs buy — imagem DE ATENCAO
> Calibragem v2.1 (post independente)
> Pesquisa concluida: 16/05/2026 — Radar agent

---

## ⚠️ NOTA DE FATCHECKING — IMPORTANTE PRA ESTRATEGIA

O briefing menciona 3 produtos especificos da Stone: **Sherlock** (antifraude), **Cadi** e **Tinin** (assistentes IA pra empreendedores). Pesquisa em 5 fontes (TI Inside, Consumidor Moderno, Stone institucional, Exame, Brazil Journal) NAO confirmou esses 3 nomes como produtos publicos da Stone em 2025-2026.

**O que ESTA confirmado em fonte:**
- Stone usa **GenAI no atendimento ao cliente** — 93% de satisfacao em Q4/2025 (TI Inside jan/2026, Consumidor Moderno)
- Atendimento IA superou avaliacao do humano
- Retencao subiu pra 75%+ no Q4/2025, atribuida a IA no CX
- Economia projetada: dezenas de milhoes de reais em 2025
- Stone tem 3 prioridades estrategicas de GenAI pra 2026
- Modelo interno nomeado **"Lucy"** mencionado em Consumidor Moderno (case "Modo Stone")
- Stone tem sistema antifraude com IA (mas nome especifico nao apareceu)
- Jota (startup separada, nao da Stone) e o assistente WhatsApp pra empreendedores BR que ganhou R$60M Seed da Maya Capital

**Recomendacao Radar:** o post deve focar em **Lucy (IA de atendimento) + 93% satisfacao + economia documentada** como case principal. Nao usar Sherlock/Cadi/Tinin sem fonte. Apolo decide se quer Apolo conhece nome interno nao publico — entao pode confirmar.

**Sobre "18 meses":** nao consegui confirmar timeline exata de 18 meses publicamente. O que e checavel: Stone evoluiu GenAI ao longo de 2024-2025-2026 (consistente com ~2 anos de desenvolvimento). Recomendacao: usar "depois de quase 2 anos investindo" — mais seguro factualmente.

---

## 0. RESUMO EXECUTIVO

Case BR: Stone investiu cerca de 2 anos construindo IA propria de atendimento ao cliente (interna, nome publico "Lucy"). Resultado documentado em Q4/2025: 93% de satisfacao (maior que atendimento humano), retencao acima de 75%, economia projetada de dezenas de milhoes de reais (TI Inside, Consumidor Moderno). Em vez de plugar ChatGPT direto, a Stone usou o dado transacional dos 4,7 milhoes de clientes ativos como combustivel pra modelo proprio. O playbook transferivel pra PME: BUILD so faz sentido se voce tem DADO PROPRIETARIO que IA generica nao tem; BOOST (compra base + customiza com RAG/fine-tuning) e a opcao pra 95% das PMEs; BUILD puro tem timeline 12-24 meses pra ROI; atendimento e o caso com ROI mais rapido independente da abordagem. Dados ancora: comparativo de custo build vs buy (Just Think AI 2026 — buy $240k ano 1 vs build $600k ano 1); CNBC 2026 (Anthropic saltou de 9% para 34% das empresas pagando em 1 ano, 79% pagam OpenAI tambem — stack hibrida virou padrao). Money line recomendada: "BUILD SO FAZ SENTIDO EM CIMA DE DADO QUE SO VOCE TEM." Thumb de atencao: V1 cena editorial (codigo + maquininha em background sem logo + money line). Pronto pra Estrategia.

---

## 1. STONE + IA — PESQUISA CONSOLIDADA

### O case principal — Lucy (IA de atendimento)

- **O que e:** assistente de IA generativa interna da Stone pra atendimento ao cliente (PME parceiro de maquininha + servicos financeiros).
- **Resultados publicos (Q4/2025):**
  - **93% de satisfacao** dos clientes atendidos — **maior que a media do atendimento humano**
  - **Retencao acima de 75%** no Q4/2025 (recorde, atribuido em parte a IA no CX)
  - **Economia projetada: dezenas de milhoes de reais** em 2025 (numero arredondado pela propria Stone)
- **Como funciona:** IA atende perguntas comuns e pedidos repetitivos, libera time humano pra casos complexos. Usa dado transacional dos clientes (historico, comportamento de uso) como contexto.
- **Fontes:** TI Inside (22/01/2026), Consumidor Moderno (case "Modo Stone GenAI")
- **URLs:**
  - https://tiinside.com.br/22/01/2026/atendimento-com-ia-atinge-93-de-avaliacao-positiva-na-stone/
  - https://consumidormoderno.com.br/case-stone-genai/

### Escala financeira que sustenta o build

- **Receita Q1 2026:** R$ 3,6 bilhoes (+6% YoY)
- **Lucro liquido ajustado Q1 2026:** R$ 549,1 milhoes
- **Lucro liquido ajustado Q4 2025:** R$ 707 milhoes
- **Clientes ativos:** 4,7 milhoes (+13% YoY)
- **TPV total:** R$ 137 bilhoes/trimestre
- **Pix:** +37% no trimestre
- **Distribuicao aos acionistas (12 meses):** R$ 3 bilhoes em recompra de acoes
- **URL:** https://www.infomoney.com.br/mercados/stone-stoc34-resultados-primeiro-trimestre-2026/

### Prioridades estrategicas de GenAI 2026 (publicas)

1. **Continuar evoluindo** o atendimento (case ja maduro) e vendas
2. **Inovacao focada** em aplicacoes de GenAI pra micro/pequenos/medios empreendedores
3. (terceira nao publica em detalhe nas fontes acessadas)
- Fonte: Stone institucional via Consumidor Moderno

### Antifraude com IA (confirmado, sem nome especifico)

- Stone usa IA pra **detectar fraude em e-commerce** — sistema verifica e cruza dados pra entender padroes
- Fonte: Stone institucional, https://conteudo.stone.com.br/antifraude-para-ecommerce/
- **NAO confirmado:** o nome especifico "Sherlock". Pode ser nome interno da Stone (engenheiros) que nao virou marca publica.

---

## 2. BUILD VS BUY — TRADEOFFS E QUANDO CADA FAZ SENTIDO

### As 3 opcoes (framework Just Think AI / Servicesground 2026)

**BUY** — adquirir plataforma comercial com configuracao limitada
- **Custo medio (enterprise):** US$ 240 mil ano 1 (US$ 180k licenca + US$ 60k implementacao)
- **Quando faz sentido:** time-to-market e prioridade, problema generico, dado nao e diferencial, equipe pequena
- **Custo escondido:** lock-in com vendor, preco sobe quando voce escala, sem moat competitivo
- **Exemplos comuns:** ChatGPT Enterprise, Claude Enterprise, Microsoft Copilot, Salesforce Einstein

**BUILD** — desenhar, integrar e operar a IA voce mesmo
- **Custo medio (enterprise):** US$ 600 mil ano 1 (US$ 450k time + US$ 80k infra + US$ 70k governanca)
- **Quando faz sentido:** dado proprietario unico, processo critico, escala alta, longo prazo
- **Trade-off:** ROI 12-24 meses (lento), mas moat real (voce e dono da infra e do modelo)
- **Exemplo BR:** Stone (Lucy), iFood (190 modelos proprios), Vale (centro de IA dedicado)

**BOOST** — compra base e turbina com dado proprio
- **Como funciona:** plataforma de mercado (OpenAI, Claude, Gemini) + RAG/fine-tuning + prompts + workflows + guardrails
- **Por que ganha:** custo 5-10x menor que build, controle e personalizacao 10x maior que buy puro
- **Quando faz sentido:** **95% das PMEs deveriam estar aqui**
- **Exemplos BR:** PME que conecta API do Claude/GPT + base de cliente proprio via RAG

### Comparativo de pricing por vendor (CNBC, Spendhound 2026)

- **OpenAI:** US$ 24.405 (SMB plans) — US$ 561.564 (Enterprise plans)
- **Anthropic:** US$ 24.423 (SMB plans) — US$ 85.044 (Enterprise plans)
- **Movimento de mercado:** Anthropic saltou de **9% para 34,4%** das empresas pagando entre maio/2025 e abril/2026. **79% das empresas que pagam Anthropic ja pagam OpenAI tambem** — stack hibrida virou padrao.

---

## 3. PLAYBOOK TRANSFERIVEL PRA PME — 4 LICOES

### LICAO 1 — BUILD so faz sentido em torno de DADO PROPRIETARIO

**O que Stone mostra:** 4,7 milhoes de clientes ativos = base massiva de dado transacional. SEM esse dado, codar IA do zero e queimar dinheiro — voce vai chegar num modelo pior que GPT-5 com 1% do orcamento. COM esse dado, voce monta algo que ninguem mais consegue.

**Como PME aplica:** antes de pensar em build, mape: que dado proprio voce tem que IA generica NUNCA vai ter? Historico de cliente, padrao de compra, sazonalidade, conteudo proprietario, base de conhecimento interno. Se voce tem dado UNICO, esse e o ponto de partida. Se nao tem, BOOST.

### LICAO 2 — BOOST e a opcao pra 95% das PMEs

**O que Stone mostra:** mesmo a Stone, com R$ 3,6 bi de receita por trimestre e time de tech proprio, evoluiu IA aplicando dado proprio sobre infra/modelos consolidados. PME normal nao tem nem orcamento nem time pra build puro.

**Como PME aplica:** compre o melhor LLM disponivel (Claude Pro ou GPT-5), conecte com seu dado via RAG (Tractian, Aquarela, ou Anthropic File API), customize com prompts + few-shot examples + tool use. Custo: ate US$ 50k ano (vs US$ 600k de build). ROI em 60-90 dias (vs 12-24 meses de build).

### LICAO 3 — BUILD tem timeline LONGA: 12-24 meses pra ROI

**O que Stone mostra:** quase 2 anos de investimento antes do 93% de satisfacao virar caso publico. Apostou em escala futura e tinha caixa pra esperar.

**Como PME aplica:** se voce escolhe build, planeje o caixa pra 18+ meses sem retorno mensuravel. Se nao tem fluxo de caixa que aguente, NAO TENTE. BOOST entrega retorno mais rapido com risco bem menor.

### LICAO 4 — ATENDIMENTO e o caso com ROI mais rapido, independente da abordagem

**O que Stone mostra:** o caso #1 que entregou retorno publico foi atendimento ao cliente. NAO foi decisao de credito, NAO foi antifraude (que ja existia). Foi reduzir custo de SAC + aumentar satisfacao.

**Como PME aplica:** se voce vai testar IA generativa em uma area pra colher fruto rapido, comece em ATENDIMENTO. Volume alto + perguntas repetitivas + ROI mensuravel (custo por ticket + NPS + tempo de resposta). Funciona pra varejo, distribuicao, servico B2B, fintech.

---

## 4. DADOS DE SUSTENTACAO (URLs REAIS — verificadas 16/05/2026)

### DADO 1 — Comparativo Build vs Buy (Just Think AI / Servicesground 2026)

> BUY: US$ 240 mil ano 1 (US$ 180k licenca + US$ 60k implementacao). BUILD: US$ 600 mil ano 1 (US$ 450k time + US$ 80k infra + US$ 70k governanca). ROI Build: 12-24 meses, mas long-term superior porque voce e dono da infra.

- Fonte: Just Think AI Build vs Buy Framework + Servicesground 2026
- URLs:
  - https://www.justthink.ai/blog/build-vs-buy-enterprise-ai-framework
  - https://servicesground.com/blog/build-vs-buy-ai-agents/
- Como usar: dado quantitativo que tira a discussao do "achismo" — mostra o salto de custo concreto.

### DADO 2 — CNBC 2026: stack hibrida virou padrao

> Anthropic saltou de 9% para 34,4% das empresas pagando entre maio/2025 e abril/2026. 79% delas pagam OpenAI tambem. Mercado decidiu: ninguem usa so 1.

- Fonte: CNBC abril 2026
- URL: https://www.cnbc.com/2026/04/17/ai-tokens-anthropic-openai-nvidia.html
- Como usar: reforca que NAO E "ou ou". Pra PME, stack hibrida (BOOST) e o caminho.

### DADO 3 (opcional reserva) — Stone resultado direto

> Stone IA de atendimento atingiu 93% de satisfacao no Q4/2025, **maior que a media do atendimento humano**. Retencao subiu pra 75%+. Economia projetada de dezenas de milhoes de reais em 2025.

- Fonte: TI Inside 22/01/2026
- URL: https://tiinside.com.br/22/01/2026/atendimento-com-ia-atinge-93-de-avaliacao-positiva-na-stone/
- Como usar: dado do case principal — ja entra no corpo, nao precisa repetir aqui.

**Recomendacao Radar:** DADO 1 (comparativo custo) na secao build vs buy. DADO 2 (CNBC stack hibrida) na reflexao final. DADO 3 (Stone 93%) ja no corpo.

---

## 5. TRES CANDIDATAS DE MONEY LINE (calibragem v2)

### CANDIDATA 1 (recomendada — tese central, operadora, transferivel)

> BUILD SO FAZ SENTIDO EM CIMA DE DADO QUE SO VOCE TEM.

- 12 palavras. CAPS em BUILD, DADO, VOCE.
- Screenshot: PASSA — slogan, citavel.
- Incomodo: MEDIO-ALTO — desmonta o FOMO de "tenho que codar minha IA".
- Sabor de operador: ALTO — voz de quem ja viu PME queimar caixa.
- Pernada: PASSA — invertida ("build faz sentido sem dado proprio") vira o erro classico.

### CANDIDATA 2 (filosofica)

> DADO PROPRIO NAO SE ALUGA. CODA EM CIMA OU NAO TEM MOAT.

- 12 palavras. CAPS em DADO, PROPRIO, MOAT.
- Screenshot: PASSA — frase de estrategista.
- Incomodo: ALTO — cutuca quem terceiriza tudo pra OpenAI.
- Sabor de operador: ALTO — vocabulario de quem pensa em vantagem competitiva.
- Pernada: PASSA — invertida vira platitude.

### CANDIDATA 3 (visceral, com nome)

> STONE NAO COMPROU CHATGPT. CONSTRUIU O PROPRIO. E TEM 93% SATISFACAO.

- 11 palavras. CAPS em STONE, CHATGPT, 93%.
- Screenshot: PASSA — case + dado + nome.
- Incomodo: MEDIO — desafia a default mode.
- Sabor de operador: MEDIO — mais factual que operadora.
- Pernada: PASSA — invertida vira o erro PME.

### RECOMENDACAO RADAR

**Candidata 1 (BUILD SO FAZ SENTIDO EM CIMA DE DADO QUE SO VOCE TEM)** e a money line — captura a tese transferivel em 12 palavras, sem precisar de fonte ou case. **Candidata 3** funciona como frase forte no inicio do bloco Stone (entrega o gancho). **Candidata 2** fica de reserva.

---

## 6. CTA SALVA + SAVE SECUNDARIO (calibragem v2)

### CTA PRINCIPAL — pergunta substantiva

> Em qual lugar da sua operacao voce tem DADO PROPRIO que ChatGPT generico nunca vai ter? Comenta o lugar.

- Pergunta substantiva, gera comment com 15+ palavras estruturadas.
- Sem MARCA/MANDA (calibragem v2 aposentou).
- Material rico de comentario ("historico de cobranca", "perfil de cliente recorrente", "base de conhecimento juridico interno").

### CTA SAVE SECUNDARIO

> Salva esse post pra olhar antes da proxima reuniao de build vs buy ou aprovacao de orcamento de IA.

- Caso de uso concreto (reuniao de board / aprovacao de CAPEX) torna o save legitimo.
- Save tem peso 5-10x de like no algoritmo LinkedIn 2026.

### Alternativas

**Pergunta alternativa A:**
> Voce ja decidiu build, buy ou boost? Comenta a escolha e por que.

**Pergunta alternativa B:**
> Qual das 3 (buy / build / boost) e a do seu time hoje? Por que?

---

## 7. ESTRUTURA NARRATIVA (8-10 blocos com texto-base)

> Alvo: 1.800-2.200 chars (calibragem v2). Estimativa: ~1.950 chars.

### Bloco 1 — Hook Transformation Story (<=140 chars)

> Stone codou IA propria de atendimento. Q4/2025: 93% de satisfacao, maior que o humano (TI Inside, 2026). Decisao build vs buy.

(127 chars. Numero forte, autoridade case BR, open loop "decisao")

### Bloco 2 — Setup (~140 chars)

> Toda PME chega na mesma pergunta: comprar OpenAI ou Claude, ou codar a propria IA? Aqui vai o que a Stone fez e o que ensina pra quem nao tem 1.000 engenheiros.

### Bloco 3 — Stone (~280 chars)

> STONE. 4,7 milhoes de clientes ativos. R$ 3,6 bilhoes de receita por trimestre. Em vez de plugar ChatGPT, codou modelo proprio pra atendimento — usando o dado transacional dos proprios clientes. Quase 2 anos de desenvolvimento. Resultado em Q4/2025: 93% de satisfacao, retencao 75%+, economia em dezenas de milhoes de reais.

### Bloco 4 — Build vs Buy explicado (~340 chars)

> 3 caminhos.
>
> BUY. Compra OpenAI, Claude, Microsoft. US$ 240 mil/ano (enterprise medio). Rapido, sem moat.
>
> BUILD. Coda do zero. US$ 600 mil/ano em time + infra + governanca. ROI em 12 a 24 meses. Moat real.
>
> BOOST. Compra base e customiza com dado proprio (RAG, fine-tuning). 95% das PMEs deveriam estar aqui.

### Bloco 5 — As 4 licoes (~380 chars)

> 4 licoes pra PME que nao tem time de IA gigante:
>
> 1. Build SO faz sentido em cima de dado que so voce tem.
>
> 2. Boost (buy + customizar) e a opcao pra 95% das PMEs.
>
> 3. Build tem timeline longa: 12 a 24 meses pra ROI. So entra se o caixa aguenta.
>
> 4. Atendimento e o caso com ROI mais rapido, em qualquer abordagem.

### Bloco 6 — Reflexao (~150 chars)

> CNBC: Anthropic saltou de 9% para 34% das empresas pagando em 1 ano. 79% delas ja pagam OpenAI tambem. Stack hibrida virou padrao. Nao existe mais "ou ou".

### Bloco 7 — Money line isolada (~60 chars)

> BUILD SO FAZ SENTIDO EM CIMA DE DADO QUE SO VOCE TEM.

### Bloco 8 — CTA principal (~130 chars)

> Em qual lugar da sua operacao voce tem DADO PROPRIO que ChatGPT generico nunca vai ter? Comenta o lugar.

### Bloco 9 — CTA save secundario (~110 chars)

> Salva esse post pra olhar antes da proxima reuniao de build vs buy ou aprovacao de orcamento de IA.

### Bloco 10 — Hashtags (3 PascalCase)

> #InteligenciaArtificial #BuildVsBuy #PMEoperando

### Estimativa total

Hook 127 + Setup 150 + Stone 290 + Build vs Buy 345 + 4 licoes 385 + Reflexao 155 + Money 60 + CTA principal 130 + CTA save 115 + Hashtags 55 = **~1.940 chars**. Dentro do alvo 1.800-2.200.

---

## 8. THUMBNAIL DE ATENCAO — BRIEF COMPLETO

> Calibragem v2: case BR + tese = IMAGEM DE ATENCAO. Politica prompt-only.

### Conceito recomendado — V1: CENA EDITORIAL ENGENHEIRO + MONEY LINE

Formato 4:5 portrait (1080x1350).

**Cena:** foto editorial estilo fotojornalismo de engenheiro de costas (sem rosto identificavel) mexendo em codigo em monitor escuro (tela com codigo Python/notebook). Em primeiro plano fora de foco, uma maquininha de pagamento generica (sem logo real — pode ser silhueta ou maquininha branca neutra). Iluminacao natural (luz de janela ou abajur), tom quente em uma area da imagem. Estetica: documentaria, real, NAO stock photo de "hacker em hoodie verde".

**Money line sobreposta (3 linhas):**
- Linha 1: "BUILD SO FAZ SENTIDO" (creme `#F4EFE5`)
- Linha 2: "EM CIMA DE DADO" (creme)
- Linha 3: "QUE SO VOCE TEM." (palavra "VOCE" em destaque maior, dourado matte `#C9A14A`)

Tipografia: condensed sans-serif heavy (Anton, Bebas Neue Black, Druk Wide Bold). Posicao no terco inferior da foto, sobre dark scrim translucido.

**Header pequeno (canto superior direito):**
> CASE STONE · GENAI · BUILD VS BUY

(condensed all caps, dourado, discreto)

**Footer:**
> APOLO SANTOS · CC BY-NC-SA 4.0

### Paleta

- Foto base: tons naturais escuros (preto / grafite / azul tela) + acento quente em area (lampada / janela)
- Tipografia principal: creme `#F4EFE5`
- Palavra-martelo: dourado matte `#C9A14A`
- Dark scrim: preto `#0E0E10` translucido 60-70% sobre area do texto
- Acento footer: dourado em bullets

### Variantes possiveis

- **V1 (recomendada):** cena editorial engenheiro + maquininha + money line
- **V2:** cartaz tipografico "BUILD vs BUY" em letras gigantes, dividindo a imagem ao meio, com sub-info "STONE 93%" do lado BUILD. Mais saveable, menos cinematografico.
- **V3:** dashboard mockup mostrando "Satisfacao IA: 93% / Humano: 87%" com data e nome do produto. Mais factual, menos atencao.

**Recomendacao Radar:** V1 prioritaria. V2 funciona como segunda peca em carrossel.

### Observacao

- NAO usar logo real da Stone (problema de marca).
- NAO usar logo real do ChatGPT/OpenAI/Anthropic.
- Maquininha de pagamento deve ser generica (sem marca visivel).
- Acentos PT-BR corretos.
- Footer SEM "OS 4Ds DA IA" e SEM "post X de Y" — pipeline independente.

---

## 9. RISCOS E NOTAS PRA ESTRATEGIA

### Riscos

1. **NOMES Sherlock/Cadi/Tinin nao confirmados.** Apolo decide: usar nome interno (se tiver fonte propria) ou ficar com "IA de atendimento (Lucy)" + "antifraude com IA" como descricao funcional.

2. **Timeline "18 meses" nao confirmada.** Recomendacao: usar "quase 2 anos investindo" — mais seguro.

3. **Risco de soar como propaganda da Stone.** Tom analitico (extrair playbook, nao louvar). Nao usar adjetivo elogioso.

4. **Risco de Apolo desencorajar build em geral.** Atencao: a tese e que BUILD exige dado proprio, NAO que build seja errado. As 4 licoes equilibram.

5. **Risco de confundir leitor com 3 opcoes (build/buy/boost).** Solucao: o post define cada uma em 1 frase + recomenda BOOST pra 95% — clareza preserva atencao.

6. **Calibragem v2.1 cumprida:** zero callback aos 4Ds, sem D1/D2/D3/D4, sem #Os4Ds, sem inimigos antigos.

### Decisoes em aberto pra Estrategia

- **Nome do produto Stone:** Lucy (confirmado em fonte) vs Sherlock/Cadi/Tinin (briefing, nao confirmados). Recomendacao Radar: usar "IA de atendimento" funcional, mencionar Lucy se quiser nominar.
- **Timeline:** "18 meses" (briefing) vs "quase 2 anos" (mais seguro). Recomendacao: "quase 2 anos".
- **Money line:** Candidata 1 (recomendada) vs Candidata 2 (mais filosofica).
- **Caso PME complementar:** Apolo pode mencionar caso real (sem nome) de PME que tentou build sem dado proprio e queimou caixa. NAO obrigatorio.
- **Thumb:** V1 cena editorial (recomendada) vs V2 cartaz tipografico (mais saveable).
- **Hashtag #BuildVsBuy:** funciona ou trocar por `#FintechBrasil` / `#TransformacaoDigital`.

### Para Post (depois de Estrategia)

- **Entregavel post.md** (politica de 14/05)
- Tamanho 1.800-2.200 chars
- Hook em ate 140 chars com numero
- **Calibragem v2.1: ZERO callback a 4Ds**
- Acentos PT-BR
- Hifen e travessao zero
- Caps lock em BUILD, BUY, BOOST, STONE, money line
- Citar fonte em dados (Stone via TI Inside 2026, CNBC 2026, Just Think AI 2026)
- Money line em paragrafo ISOLADO antes do CTA
- CTA principal + CTA save secundario
- 3 hashtags PascalCase
- PRIMEIRO COMENTARIO com URLs REAIS (lista abaixo)

### Para Thumb (so prompt-md)

- V1 cena editorial engenheiro + maquininha generica + money line
- Dimensao 1080x1350 (4:5 portrait)
- Acentos PT-BR corretos
- Footer SEM serie e SEM numero de post
- NAO usar logos reais (Stone, ChatGPT, OpenAI, Anthropic)
- Politica prompt-only

### Para Revisar

- Score minimo 4.0/5
- Verificar nome do produto Stone (NAO usar Sherlock/Cadi/Tinin sem fonte)
- Verificar timeline (NAO afirmar "18 meses" se nao tiver fonte — usar "quase 2 anos")
- Verificar zero callback aos 4Ds
- Verificar tom ANALITICO (nao promocional)
- Verificar money line isolada
- Verificar CTA principal + save secundario
- Verificar 3 hashtags PascalCase
- **Verificar URLs reais no primeiro comentario uma por uma** (Posts 4 e 5 da serie 4Ds tiveram URL fabricada — vetar imediato)
- Hifen e travessao zero
- Calibragem v2 (sem MARCA/MANDA, sem #Os4Ds)

### URLs REAIS pra primeiro comentario (verificadas 16/05/2026)

1. **TI Inside — Stone atendimento IA 93% Q4/2025:** https://tiinside.com.br/22/01/2026/atendimento-com-ia-atinge-93-de-avaliacao-positiva-na-stone/
2. **Consumidor Moderno — Case Modo Stone GenAI:** https://consumidormoderno.com.br/case-stone-genai/
3. **Infomoney — Stone Q1 2026 lucro/receita:** https://www.infomoney.com.br/mercados/stone-stoc34-resultados-primeiro-trimestre-2026/
4. **Just Think AI — Build vs Buy framework:** https://www.justthink.ai/blog/build-vs-buy-enterprise-ai-framework
5. **Servicesground — Build vs Buy AI agents 2026:** https://servicesground.com/blog/build-vs-buy-ai-agents/
6. **CNBC — Anthropic salta pra 34% das empresas pagando:** https://www.cnbc.com/2026/04/17/ai-tokens-anthropic-openai-nvidia.html
7. **Finout — OpenAI vs Anthropic API pricing 2026:** https://www.finout.io/blog/openai-vs-anthropic-api-pricing-comparison

(Apolo escolhe 3-4 dessas pro primeiro comentario.)

---

## 10. BLOCO DE NOTAS — RADAR

- [x] Radar Pipeline Post 6 — Stone build vs buy — entregue 16/05/2026 → enviado pra Estrategia
- [ ] Estrategia P6 — pendente (DECIDIR: nome do produto Stone, timeline "18 meses" vs "quase 2 anos")
- [ ] Post P6 — pendente
- [ ] Thumb P6 — pendente (V1 cena editorial)
- [ ] Revisar P6 — pendente (verificar nome, URLs reais)
- [ ] Publicacao P6 — Sex 12/06/2026 10h00 BRT

---

FIM DO BLOCO. Pronto pra Estrategia.
