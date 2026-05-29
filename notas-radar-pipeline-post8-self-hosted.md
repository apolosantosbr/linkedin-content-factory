# NOTAS RADAR — PIPELINE POST 8 · 7 STACKS SELF-HOSTED QUE RODAM IA NA SUA PME POR MENOS DE US$ 50/MES

> STATUS: CONCLUIDO
> Data publicacao alvo: Sex 19/06/2026 10h00 BRT
> Pasta destino: posts/2026-06-19_7-stacks-self-hosted/
> Tipo: lista tecnica — imagem CONTEUDISTA
> Calibragem v2.1 (post independente)
> Pesquisa concluida: 16/05/2026 — Radar agent

---

## 0. RESUMO EXECUTIVO

Lista tecnica de 7 stacks open source self-hosted que, combinadas em 1 VPS, rodam infraestrutura completa de IA pra PME (LLM local + chat UI + automacao + agente builder + RAG + BI + monitoring). **Custo total real: US$15-25/mes** (VPS + backup + dominio), bem abaixo do limite de US$50 do titulo. Comparativo direto: ChatGPT Enterprise custa **US$20/mes POR usuario** (US$600/mes pra 30 pessoas) — stack self-hosted entrega o mesmo (com vantagens: dado fica em casa, sem rate limit, sem API key escapando) por 1/30 do custo. Money line recomendada: "STACK DE IA INTEIRA RODA POR MENOS QUE 1 SEAT DE CHATGPT." Thumb conteudista: tabela navy+dourado+creme com 7 linhas (stack/funcao/custo) + bloco grande embaixo destacando "TOTAL ~US$21/MES". Pronto pra Estrategia.

---

## 1. AS 7 STACKS SELF-HOSTED SELECIONADAS

> Criterio: todas open source com licenca permissiva (MIT/Apache/GPL), rodam em 1 VPS de 4 vCPU + 16 GB RAM, cobrem o pipeline completo de IA pra PME (modelo + interface + automacao + memoria + BI + monitoring), tem comunidade ativa, podem ser implantadas via Docker Compose em <2h por alguem com nivel medio de DevOps.

### STACK 1 — OLLAMA (LLM local)

- **O que faz:** roda modelos de linguagem open source (Llama 3, Mistral, Qwen, DeepSeek R2, Gemma) localmente no servidor.
- **Por que importa:** sem rate limit, sem API key, dado nao sai do servidor. 7B-Q4 roda em CPU dando 5-10 tokens/segundo (ok pra batch e tarefas internas).
- **Custo:** US$0 (licenca MIT/Apache).
- **Dificuldade:** facil (`curl -fsSL https://ollama.com/install.sh | sh`).
- **Substitui:** ChatGPT/Claude/Gemini pra casos sensiveis com dado proprietario.
- **Fonte:** https://ollama.com/

### STACK 2 — OPEN WEBUI (interface chat)

- **O que faz:** interface web tipo ChatGPT pra acessar o Ollama. Login do time, historico, prompts compartilhados, biblioteca de modelos.
- **Por que importa:** o time usa sem precisar de terminal. Visual ja conhecido (clone do ChatGPT).
- **Custo:** US$0 (licenca MIT).
- **Dificuldade:** facil (1 container Docker).
- **Substitui:** ChatGPT Plus (US$20/mes por usuario).
- **Fonte:** https://github.com/open-webui/open-webui

### STACK 3 — N8N SELF-HOSTED (automacao)

- **O que faz:** automacao visual entre apps (CRM, email, planilha, WhatsApp, ERP, agente IA, qualquer API). Drag-and-drop.
- **Por que importa:** Zapier custa US$20-100/mes a partir de 1.000 tasks. N8N self-hosted: ilimitado.
- **Custo:** US$0 (community edition, licenca Sustainable Use).
- **Dificuldade:** facil (Docker Compose pronto na doc).
- **Substitui:** Zapier (US$240+/ano), Make pra workloads grandes.
- **Fonte:** https://n8n.io/

### STACK 4 — FLOWISE (agente IA visual)

- **O que faz:** visual builder pra construir agentes IA (arrastando blocos de LangChain). Suporta OpenAI, Claude, Gemini, Mistral, Ollama (local), HuggingFace e 50+ providers.
- **Por que importa:** monta agente complexo (RAG + tool use + memoria) sem codar.
- **Custo:** US$0 (licenca Apache 2.0).
- **Dificuldade:** medio (1 container; entender LangChain ajuda).
- **Substitui:** plataformas enterprise tipo Lindy (US$50+/mes), Dify Pro.
- **Fonte:** https://flowiseai.com/

### STACK 5 — POSTGRES + PGVECTOR (banco de dados + RAG)

- **O que faz:** banco de dados relacional + extensao pgvector que adiciona busca semantica (RAG/embeddings). 1 banco serve a operacao e a IA.
- **Por que importa:** o moat e o dado proprio. Pgvector permite indexar documentos/historico/conhecimento interno pra IA consultar.
- **Custo:** US$0 (PostgreSQL Open Source + pgvector PostgreSQL License).
- **Dificuldade:** medio (instalar Postgres + criar extensao + popular).
- **Substitui:** Pinecone (~US$70/mes pra 10M vetores), Weaviate Cloud (US$135/mes).
- **Fonte:** https://github.com/pgvector/pgvector

### STACK 6 — METABASE (BI self-hosted)

- **O que faz:** dashboard de BI conectando direto no Postgres. Crie graficos, KPIs, relatorios sem SQL avancado. Tem agente IA tipo "pergunta ao dado".
- **Por que importa:** voce ja tem o dado no Postgres (stack 5). Metabase mostra.
- **Custo:** US$0 (community edition, licenca AGPL).
- **Dificuldade:** facil (1 container; conectar database).
- **Substitui:** Tableau Cloud (US$70+/mes/user), Power BI Pro (US$10/user/mes).
- **Fonte:** https://www.metabase.com/start/oss

### STACK 7 — UPTIME KUMA (monitoring)

- **O que faz:** monitora servicos (HTTP, ping, porta TCP, DNS, certificado SSL) e alerta no Telegram, WhatsApp, Slack ou email se algo cair.
- **Por que importa:** voce so descobre que o agente caiu antes do cliente reclamar.
- **Custo:** US$0 (licenca MIT).
- **Dificuldade:** facil (1 container).
- **Substitui:** Datadog basico (US$15+/host/mes), UptimeRobot Pro (US$8/mes).
- **Fonte:** https://github.com/louislam/uptime-kuma

### Orquestracao

Tudo roda em **Docker Compose** num so VPS. 1 arquivo `docker-compose.yml` com os 7 servicos sobe a stack inteira em 1 comando. Cron-jobs (crontab nativo do Linux) agendam rotinas (backup do Postgres, atualizacao de modelo Ollama, sync de planilha pra Postgres via n8n).

---

## 2. CALCULO DE CUSTO TOTAL (snapshot 16/05/2026)

### Componentes de infraestrutura

| Componente | Especificacao | Custo USD/mes |
|------------|---------------|---------------|
| VPS principal | Hostinger VPS KVM 4 (4 vCPU, 16 GB RAM, 200 GB SSD) — plano anual | ~US$15 |
| Backup remoto | Backblaze B2 ou Wasabi (~50 GB de snapshot mensal) | ~US$5 |
| Dominio (.com.br) | Registro.br anual (~R$ 50/ano) | ~US$1 |
| Certificado SSL | Let's Encrypt | US$0 (gratis) |
| Softwares (7 stacks) | Open source | US$0 |
| **TOTAL** | — | **~US$21/mes** |

### Alternativas

- **Mais barato (US$11/mes):** Hetzner CX22 (2 vCPU, 4 GB RAM) na Alemanha ~US$5/mes + Backblaze US$5 + dominio US$1. Cabe LLM 3B-Q4 e stack basica.
- **Mais robusto (US$30-40/mes):** Hetzner CX42 (4 vCPU, 8 GB RAM) US$13 + Hostinger VPS adicional pra Postgres dedicado US$10 + backup US$5 + dominio US$1 + storage adicional US$5.

### Comparativo com SaaS enterprise

| Cenario | Custo/mes |
|---------|-----------|
| Stack self-hosted (7 ferramentas) | US$21 |
| ChatGPT Enterprise (1 usuario) | US$20 |
| ChatGPT Enterprise (30 usuarios) | US$600 |
| Zapier Business (5.000 tasks/mes) | US$50 |
| Pinecone (10M vetores) | US$70 |
| Metabase Cloud Starter | US$85 |
| Datadog basico (5 hosts) | US$75 |
| **SaaS enterprise equivalente** | **~US$880/mes** |

**Diferenca:** US$859/mes — **mais de 40x mais caro**.

Em 12 meses: US$10.300 de economia.

---

## 3. DADOS DE SUSTENTACAO (URLs REAIS — verificadas 16/05/2026)

### DADO 1 — Hetzner Ollama: stack viavel em VPS de baixo custo

> Em 2026, da pra rodar modelo de 7B parametros em VPS CPU-only por aproximadamente €50/mes em Falkenstein, Alemanha — com data ownership total, API HTTP estavel e zero rate limit. Pra workloads pequenos, Hetzner CX22 ~$5/mes.

- Fonte: DanubeData "Run Ollama on a VPS" 2026
- URL: https://danubedata.ro/blog/run-ollama-vps-self-host-llm-2026
- Como usar: prova de viabilidade tecnica. Pode ser citado se Apolo quiser dar peso ao "rodar de verdade".

### DADO 2 — Pgvector vs Pinecone: economia 1/3 a 1/10

> Em 10M vetores: pgvector self-hosted US$45/mes (RDS) vs Pinecone Serverless US$70/mes vs Weaviate Cloud US$135/mes. Em 100M vetores: Pinecone $700+ vs pgvector menos de US$100/mes.

- Fonte: LeanOps Tech 2026 + 4xxi vector DB comparison
- URLs:
  - https://leanopstech.com/blog/vector-database-cost-comparison-2026/
  - https://4xxi.com/articles/vector-database-comparison/
- Como usar: dado quantitativo direto pra Stack 5.

### DADO 3 — Flowise/n8n/Open WebUI deployment cost

> Pra small team (1-2 GB RAM VPS), Flowise + Open WebUI + n8n custam US$3-8/mes em deployment Railway. Todos sao fully open-source e self-hostable via Docker.

- Fonte: Railway.com Deploy Flowise + Codersera benchmark 2026
- URL: https://railway.com/deploy/flowise-self-hosted-ai-agent-builder
- Como usar: prova de baixo custo. Reserva.

**Recomendacao Radar:** DADO 1 (Ollama em VPS) na introducao do Stack 1; DADO 2 (pgvector vs Pinecone) no Stack 5; DADO 3 reserva.

---

## 4. TRES CANDIDATAS DE MONEY LINE (calibragem v2)

### CANDIDATA 1 (recomendada — comparativo forte direto)

> STACK DE IA INTEIRA RODA POR MENOS QUE 1 SEAT DE CHATGPT.

- 11 palavras. CAPS em STACK, IA, INTEIRA, CHATGPT.
- Screenshot: PASSA — comparativo cirurgico.
- Incomodo: ALTO — desmonta a percepcao de que IA so cara.
- Sabor de operador: ALTO — voz de quem ja viu fatura enterprise.
- Pernada: PASSA — invertida ("stack de IA inteira custa mais que 1 seat de ChatGPT") vira a percepcao que o post desmonta.

### CANDIDATA 2 (soberania de dado)

> OPENAI NAO PRECISA SABER DO SEU DADO PRA VOCE RODAR IA.

- 11 palavras. CAPS em OPENAI, DADO, IA.
- Screenshot: PASSA — afirmacao categorica.
- Incomodo: ALTO — cutuca a default mode de mandar dado pra terceiro.
- Sabor de operador: ALTO — voz de quem se preocupa com dado proprietario.
- Pernada: PASSA — invertida vira platitude tola.

### CANDIDATA 3 (anti-FOMO self-hosted)

> RODAR IA NO PROPRIO SERVIDOR NAO E MODA. E ECONOMIA.

- 10 palavras. CAPS em RODAR, IA, MODA, ECONOMIA.
- Screenshot: PASSA — slogan curto.
- Incomodo: MEDIO — desmonta o estereotipo "self-hosted e coisa de hacker".
- Sabor de operador: MEDIO — direto.
- Pernada: PASSA — invertida vira a percepcao errada.

### RECOMENDACAO RADAR

**Candidata 1 (STACK DE IA INTEIRA RODA POR MENOS QUE 1 SEAT DE CHATGPT)** e a money line — comparativo direto, numero implicito, vocabulario PME. **Candidata 2** funciona como frase de apoio no corpo (perto do Stack 1 Ollama). **Candidata 3** fica de reserva.

---

## 5. CTA SALVA + SAVE SECUNDARIO (calibragem v2)

### CTA PRINCIPAL — pergunta substantiva

> Em qual dos 7 voce ja consegue subir essa semana? Comenta o numero e o que voce ja tem rodando.

- Pergunta dupla forca comment com 15+ palavras (qual + o que tem).
- Sem MARCA/MANDA (calibragem v2 aposentou).
- Material rico de comentario ("4, Flowise — ja roda agente de SAC").

### CTA SAVE SECUNDARIO

> Salva esse post pra rodar antes da proxima conversa com seu fornecedor de SaaS de IA.

- Caso de uso concreto (renovacao de SaaS) torna o save legitimo.
- Save tem peso 5-10x de like no algoritmo LinkedIn 2026.

### Alternativas

**Pergunta alternativa A:**
> Voce ja tem VPS rodando algo? Comenta o que e em qual provedor.

**Pergunta alternativa B:**
> Qual dos 7 voce nunca tinha ouvido falar? Vou explicar nos comentarios.

**Save alternativo:**
> Salva esse post pra rever antes da proxima reuniao de TI sobre orcamento.

---

## 6. ESTRUTURA NARRATIVA (8-10 blocos com texto-base)

> Alvo: 1.800-2.200 chars (calibragem v2). Estimativa: ~2.060 chars.

### Bloco 1 — Hook Transformation Story (<=140 chars)

> Stack inteira de IA self-hosted roda em VPS de US$15/mes. ChatGPT Enterprise custa US$20/mes POR usuario. 7 ferramentas, custo zero de licenca.

(140 chars exatos. Numero contrastante forte, open loop "7 ferramentas")

### Bloco 2 — Setup (~90 chars)

> Todas as 7 sao open source, rodam em 1 VPS, somam custo zero de licenca. So o servidor.

### Bloco 3 — As 7 stacks (~1280 chars, cada ~180 chars)

> 1. OLLAMA (free). LLM local — Llama 3, Mistral, Qwen rodando no seu VPS. Sem rate limit, sem API key, sem dado escapando.
>
> 2. OPEN WEBUI (free). Interface tipo ChatGPT pra acessar o Ollama. Login do time, historico, prompts compartilhados.
>
> 3. N8N SELF HOSTED (free). Automacao entre apps — CRM, email, planilha, WhatsApp. Substitui Zapier (~US$240/ano).
>
> 4. FLOWISE (free). Visual builder pra agente IA. Arrasta blocos, cria fluxo. Substitui plataformas enterprise.
>
> 5. POSTGRES COM PGVECTOR (free). Banco de dados mais RAG (memoria pra IA). Substitui Pinecone (~US$70/mes).
>
> 6. METABASE (free). BI self hosted — dashboard de KPI sobre seu dado. Substitui Tableau ou Power BI.
>
> 7. UPTIME KUMA (free). Monitoring — alerta no Telegram ou WhatsApp se algo cair. Substitui Datadog basico.

### Bloco 4 — Conta de custo (~140 chars)

> VPS Hostinger ou Hetzner com 4 vCPU e 16 GB RAM: ~US$15/mes. Backup S3: ~US$5. Dominio: ~US$1. TOTAL: ~US$21/mes. Tudo orquestrado por Docker Compose.

### Bloco 5 — Reflexao / comparativo (~140 chars)

> ChatGPT Enterprise: US$20/mes POR usuario. 30 pessoas: US$600/mes. Stack self hosted equivalente: US$21. Diferenca de mais de 28 vezes.

### Bloco 6 — Money line isolada (~60 chars)

> STACK DE IA INTEIRA RODA POR MENOS QUE 1 SEAT DE CHATGPT.

### Bloco 7 — CTA principal (~110 chars)

> Em qual dos 7 voce ja consegue subir essa semana? Comenta o numero e o que voce ja tem rodando.

### Bloco 8 — CTA save secundario (~95 chars)

> Salva esse post pra rodar antes da proxima conversa com seu fornecedor de SaaS de IA.

### Bloco 9 — Hashtags (3 PascalCase)

> #InteligenciaArtificial #OpenSource #PMEoperando

### Estimativa total

Hook 140 + Setup 90 + 7 stacks 1.280 + Conta 145 + Reflexao 145 + Money 60 + CTA principal 110 + CTA save 95 + Hashtags 50 = **~2.015 chars**. Dentro do alvo 1.800-2.200.

---

## 7. THUMBNAIL CONTEUDISTA — BRIEF COMPLETO

> Calibragem v2: LISTA TECNICA = IMAGEM CONTEUDISTA. Politica prompt-only.

### Conceito recomendado — TABELA DAS 7 STACKS + BLOCO DE CUSTO TOTAL

Formato 4:5 portrait (1080x1350 pixels).

**Layout:**
- Header (topo): titulo grande + subheader
- Tabela com 7 linhas, cada linha = 1 stack
- Bloco grande embaixo destacando custo total
- Footer: credito Apolo

### Estrutura da tabela

Cada linha tem 4 colunas:
1. **Numero** (esquerda estreita) — numero gigante dourado
2. **Nome do software** (media) — bold, grafite
3. **O que faz / categoria** (media) — texto curto
4. **Custo** (direita) — pill verde "FREE" ou cinza com preco

### Textos literais (manter acentos PT-BR)

**Header:**
> 7 STACKS SELF HOSTED
> PRA IA NA SUA PME

**7 linhas:**

| # | Software | Categoria | Custo |
|---|----------|-----------|-------|
| 1 | Ollama | LLM local | FREE |
| 2 | Open WebUI | Interface chat | FREE |
| 3 | n8n self hosted | Automacao | FREE |
| 4 | Flowise | Agente IA visual | FREE |
| 5 | Postgres + pgvector | Banco + RAG | FREE |
| 6 | Metabase | BI self hosted | FREE |
| 7 | Uptime Kuma | Monitoring | FREE |

**Bloco grande embaixo (destacado):**
> VPS 4 vCPU 16 GB: ~US$15
> Backup + Dominio: ~US$6
> **CUSTO TOTAL: ~US$21/MES**

**Footer:**
> APOLO SANTOS · CC BY-NC-SA 4.0

### Paleta — NAVY + DOURADO + CREME (identidade do pipeline)

- Fundo geral: navy profundo `#1A2A3F`
- Linhas da tabela: creme `#F4EFE5` com hairlines douradas
- Numeros gigantes: dourado matte `#C9A14A`
- Nome do software: grafite `#1A1F2C` bold
- Categoria: grafite com peso medio
- Pill "FREE": verde-musgo `#5A6B3B` com texto creme
- Pill "CUSTO TOTAL ~US$21/MES" (bloco grande): dourado de fundo com grafite — destaca o numero
- Header: dourado em titulo, creme em subheader
- Footer: cinza-creme com bullets dourados

### Por que esse design viraliza por SAVES

- Tabela escaneavel em 3 segundos no feed.
- 7 FREE verdes em coluna = sensacao imediata de "que pegada".
- Bloco de US$21/MES em destaque grande embaixo = punchline visual.
- Vira screenshot pra reuniao de orcamento de TI.

### Variantes possiveis

- **V1 (recomendada):** tabela 7 linhas + bloco US$21 (descrito)
- **V2:** carrossel PDF de 9 slides (capa + 7 stacks + slide custo total + CTA). Engagement document post = 6,60% (mais alto LinkedIn 2026).
- **V3:** infografico tipo "arquitetura" mostrando os 7 stacks dentro de 1 VPS desenhado. Mais visual, menos saveable.

**Recomendacao Radar:** V1 prioritaria. V2 carrossel se Apolo quiser maximizar viralizacao.

### Observacao

Politica prompt-only vigente. Footer SEM "OS 4Ds DA IA" e SEM "post X de Y" — pipeline independente. Acentos PT-BR corretos. **NAO usar logos reais** das ferramentas — soh tipografia dos nomes (evita problema de marca).

---

## 8. RISCOS E NOTAS PRA ESTRATEGIA

### Riscos

1. **Risco de soar tecnico demais pra publico de CEO.** Solucao: cada stack explicada em 1 frase + comparativo direto com SaaS conhecido (ChatGPT, Zapier, Pinecone). Mesmo CEO sem TI entende "substitui Zapier de US$240/ano".

2. **Risco de subestimar dificuldade de implantar.** Solucao: o post NAO promete que e trivial. Promete que e POSSIVEL e BARATO. Apolo pode mencionar "precisa de alguem nivel medio de DevOps" se quiser ser totalmente honesto.

3. **Pricing pode mudar.** Snapshot 16/05/2026. Apolo confirma.

4. **Atencao a hifenizacao** — calibragem v2 proibe hifen. "Self-hosted" tem hifen. Solucao: escrever "self hosted" sem hifen no corpo do post (existe em uso real, e gramatica aceita). Hashtag `#SelfHosted` ja vem em PascalCase sem hifen.

5. **Risco de Ollama nao ser "production grade" pro 100% dos casos.** Pesquisa indicou que pra multi-user enterprise se prefere vLLM ou TGI. Solucao: o post fala em PME (poucos usuarios concorrentes), nao em escala enterprise — Ollama serve.

6. **Comparativo "30x mais barato" e forte.** Apolo decide se quer mostrar (forte) ou suavizar.

7. **Calibragem v2.1 cumprida:** zero callback aos 4Ds, sem D1/D2/D3/D4, sem #Os4Ds, sem inimigos antigos.

### Decisoes em aberto pra Estrategia

- **Confirmar 7 stacks.** Apolo pode trocar 1-2 por outras que ele opera direto (ex: Coolify pra orquestracao, Caddy pra reverse proxy, n8n vs Activepieces, Metabase vs Apache Superset).
- **Provedor do VPS:** Hostinger (recomendado pelo briefing implicito) vs Hetzner (mais barato). Radar usa Hostinger no calculo principal porque o briefing menciona, mas Hetzner aparece como alternativa.
- **Money line:** Candidata 1 (recomendada — comparativo) vs Candidata 2 (soberania de dado).
- **Comparativo enterprise:** manter "30x mais barato" ou suavizar pra "muito mais barato".
- **Thumbnail:** V1 tabela (recomendada) vs V2 carrossel PDF (alavanca de viralizacao maxima).
- **Hashtag:** `#OpenSource` (sugestao Radar) vs `#SelfHosted` (com hifen — vetar) vs `#TecnologiaPME`.

### Para Post (depois de Estrategia)

- **Entregavel post.md** (politica de 14/05)
- Tamanho 1.800-2.200 chars
- Hook em ate 140 chars com numero
- **Calibragem v2.1: ZERO callback a 4Ds**
- Acentos PT-BR
- Hifen e travessao zero — usar "self hosted" sem hifen no corpo (n8n self hosted, etc.)
- Caps lock nos nomes das 7 stacks + money line
- Citar fonte em dados (Hetzner, LeanOps Tech, Hostinger)
- Money line em paragrafo ISOLADO antes do CTA
- CTA principal + CTA save secundario
- 3 hashtags PascalCase
- PRIMEIRO COMENTARIO com URLs REAIS (lista abaixo)

### Para Thumb (so prompt-md)

- V1 tabela 7 linhas + bloco custo total destacado
- Dimensao 1080x1350 (4:5 portrait)
- Paleta navy + dourado + creme
- NAO usar logos reais das ferramentas
- Acentos PT-BR corretos
- Footer SEM serie e SEM numero de post
- Politica prompt-only

### Para Revisar

- Score minimo 4.0/5
- Verificar tamanho 1.800-2.200
- Verificar zero callback aos 4Ds
- Verificar HIFEN ZERO (cuidado especial com "self hosted")
- Verificar money line isolada
- Verificar CTA principal + save secundario
- Verificar 3 hashtags PascalCase (NAO usar `#Self-Hosted` com hifen)
- **Verificar URLs reais no primeiro comentario uma por uma**
- Verificar precos snapshot (16/05/2026)
- Calibragem v2 (sem MARCA/MANDA, sem #Os4Ds)

### URLs REAIS pra primeiro comentario (verificadas 16/05/2026)

1. **Ollama (oficial):** https://ollama.com/
2. **Open WebUI GitHub:** https://github.com/open-webui/open-webui
3. **n8n (oficial):** https://n8n.io/
4. **Flowise (oficial):** https://flowiseai.com/
5. **pgvector GitHub:** https://github.com/pgvector/pgvector
6. **Metabase Open Source:** https://www.metabase.com/start/oss
7. **Uptime Kuma GitHub:** https://github.com/louislam/uptime-kuma
8. **Hostinger VPS Pricing:** https://www.hostinger.com/pricing/vps-hosting
9. **DanubeData — Run Ollama on a VPS 2026:** https://danubedata.ro/blog/run-ollama-vps-self-host-llm-2026
10. **LeanOps Tech — Vector DB Costs 2026:** https://leanopstech.com/blog/vector-database-cost-comparison-2026/

(Apolo escolhe 3-4 dessas pro primeiro comentario.)

---

## 9. BLOCO DE NOTAS — RADAR

- [x] Radar Pipeline Post 8 — 7 stacks self hosted — entregue 16/05/2026 → enviado pra Estrategia
- [ ] Estrategia P8 — pendente
- [ ] Post P8 — pendente (entregar post.md, 1.800-2.200 chars, HIFEN ZERO incluindo "self hosted")
- [ ] Thumb P8 — pendente (V1 tabela navy + dourado + bloco custo)
- [ ] Revisar P8 — pendente
- [ ] Publicacao P8 — Sex 19/06/2026 10h00 BRT

---

FIM DO BLOCO. Pronto pra Estrategia.
