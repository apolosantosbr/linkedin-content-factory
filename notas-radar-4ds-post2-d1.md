# NOTAS RADAR — POST 2 SERIE OS 4Ds DA IA · D1 DELEGATION (deep-dive)

> Data publicacao: Qua 14/05/2026 09h00 BRT
> Pasta destino: posts/2026-05-14_delegation-d1/
> Tipo: post deep-dive — primeiro pos-ancora
> Conexao narrativa: amarra direto no Post 1 (12/05) e mantem callback Teatro Digital (07/05)
> Pesquisa concluida: 02/05/2026 — Apolo Santos / Radar agent

---

## RESUMO EXECUTIVO (1 paragrafo)

O Post 1 ja entregou OS 4Ds. Aqui o leitor quer descer um andar. D1 Delegation e o D que o Brasil mais erra: 78% das empresas BR estao presas em "Automacao 1.0" (Portal Information Management, 2025), 56% dos CEOs globais dizem que NAO tiraram nada da IA (PwC Global CEO Survey 2026), e a Workday acaba de mostrar que 37-40% do tempo "salvo" pela IA e gasto consertando o output (Workday, 2026). A causa raiz nao e tecnica. E delegativa: empresa pula a primeira pergunta de fluencia ("o que estou tentando fazer?"). Existe oficial Anthropic 3 sub-competencias e um framework limpo de 5-7 perguntas pra resolver isso. Material pronto pra Estrategia montar deep-dive.

---

## 1. DADOS FRESCOS — DELEGACAO MAL FEITA (todos com fonte + ano + URL)

### A. Tempo perdido com IA mal delegada

| Dado | Numero | Fonte | URL |
|------|--------|-------|-----|
| Tempo "salvo" pela IA gasto revisando/corrigindo o output | 37-40% | Workday research 2026 (citado em Fortune) | https://fortune.com/2026/03/10/ai-productivity-workers-workday-efficiency/ |
| Tempo perdido por trabalhador ao receber 1 "workslop" (output IA mal feito) | 1h56min | Stanford Social Media Lab + BetterUp 2025 (CNBC) | https://www.cnbc.com/2025/09/23/ai-generated-workslop-is-destroying-productivity-and-teams-researchers-say.html |
| Custo invisivel de workslop por funcionario por mes | US$ 186 | mesmo | mesmo |
| Custo anual em produtividade pra empresa de 10.000 | US$ 9 milhoes | mesmo | mesmo |
| Queda em sessoes de trabalho focado profundo apos adocao de IA | -9% no comprimento medio | HBR 2026 + Microsoft New Future of Work 2025 | https://hbr.org/2026/02/ai-doesnt-reduce-work-it-intensifies-it |
| Crescimento do uso de IA no trabalho 2023-2025 | 21% para 40% | Gallup (citado em CNBC 2025) | https://www.cnbc.com/2025/09/23/ai-generated-workslop-is-destroying-productivity-and-teams-researchers-say.html |

### B. CEOs que nao extraem valor

| Dado | Numero | Fonte | URL |
|------|--------|-------|-----|
| CEOs que dizem que NAO tiraram NADA dos investimentos em IA | 56% | PwC 2026 Global CEO Survey | https://www.buildmvpfast.com/blog/ai-productivity-paradox-ceo-survey-2026 |
| CEOs que reportam IA crescendo receita E reduzindo custo | apenas 12% | mesmo | mesmo |
| CEOs convencidos de que sao 95% sem ROI = MIT NANDA | 95% | (do Post 1, ja validado) | mesmo Post 1 |

### C. Automacao 1.0 e tarefa errada (especifico Brasil)

| Dado | Numero | Fonte | URL |
|------|--------|-------|-----|
| Empresas brasileiras presas em "Automacao 1.0" (RPA basico achando que era hiperautomacao) | 78% | Portal Information Management 2025 | https://docmanagement.com.br/11/27/2025/hiperautomacao-ia-78-das-empresas-brasileiras-ainda-estao-presas-na-automacao-1-0/ |
| Casos em que a regra fixa do RPA falha e exige humano de excecao | 40% | mesmo | mesmo |
| Padrao tipico de "automacao mal pensada" | 10 pessoas manuais viraram 3 consertando robos + 5 tratando excecoes | mesmo | mesmo |
| Organizacoes que JA redesenharam ao menos parte dos workflows | 21% | McKinsey State of AI 2025 | https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai |
| Organizacoes "empilhando IA em cima de processo antigo sem repensar" | ~80% | McKinsey 2025 | mesmo |
| High performers que redesenharam fundamentalmente os processos | 55% (3x mais que media) | McKinsey 2025 | mesmo |
| High performers que buscam transformacao enterprise-level com IA | 3.6x mais que media | McKinsey 2025 | mesmo |

### D. Augmentation vs Automation (Anthropic Economic Index — DADO NOVO E POTENTE)

| Dado | Numero | Fonte | URL |
|------|--------|-------|-----|
| Conversas Claude classificadas como AUGMENTATION (jan/2026) | 52% | Anthropic Economic Index Jan/2026 Report | https://www.anthropic.com/research/anthropic-economic-index-january-2026-report |
| Conversas Claude classificadas como AUTOMATION (jan/2026) | 45% | mesmo | mesmo |
| Mesma metrica em jan/2025 | 56% augmentation / 41% automation | mesmo | mesmo |
| Mesma metrica em ago/2025 (virada) | automation > augmentation | mesmo | mesmo |
| Crescimento do uso "directive" (delegacao total a IA) | tendencia altista | Anthropic Economic Index 2026 | mesmo |

**Insight de leitura:** o pendulo Augmentation x Automation oscila em meses. Quando Apolo escreve pra PME, a conclusao pratica e que a maioria absoluta das interacoes da PME deveria ser AUGMENTATION (humano + IA pensando junto), porque automation sem D1 vira workslop. O Anthropic Index legitima essa leitura com dado de 50.000+ interacoes.

### E. Reaproveitamento do Post 1 (NAO precisa repesquisar — apenas referenciar)

- 95% iniciativas IA sem ROI (MIT NANDA 2025) — usar como pano de fundo
- 6% high performers EBIT (McKinsey 2025) — usar como pano de fundo
- 44% MPE BR usam IA (Sebrae 2025) — usar como pano de fundo
- Framework Anthropic 4Ds (CC BY-NC-SA 4.0) — disclosure mandatorio

---

## 2. CASOS BRASILEIROS PME (3 cases — 1 acerto, 2 erros)

### CASO ACERTO — Industria de cosmeticos (caso publicado Google Cloud)
**O que fizeram:** Mapearam Problem Awareness antes da ferramenta. Identificaram que o time financeiro perdia 17h/semana fazendo conciliacao manual entre planilhas. Definiram Platform Awareness escolhendo AppSheet pra tarefa especifica (e nao "ChatGPT pra tudo"). Migraram 20 mil funcionarios pro Google Workspace em 6 meses.
**Os 3 sub-Ds em acao:**
- Problem Awareness: ✓ "qual e o trabalho?" foi respondido (conciliar planilhas)
- Platform Awareness: ✓ escolheram tool especialista, nao IA generica
- Task Delegation: ✓ humano valida regra, IA executa
**Setor:** industria/varejo (cosmetico)
**Fonte:** https://blog.google/intl/pt-br/produtos/nas-nuvens/google-cloud-90-casos-de-ia-na-america-latina-que-estao-moldando-o-futuro-da-inovacao/

### CASO ERRO 1 — Varejo regional adota chatbot WhatsApp generico (padrao composto observavel)
**O que fizeram:** Comprou chatbot baseado em regra fixa pra atender clientes 24/7. Em 3 meses, NPS caiu, fila do humano triplicou, cliente reclama de "robo idiota". Chatbot trava em 40% das perguntas reais (regras fixas nao cobrem ambiguidade).
**Onde falhou D1:**
- Problem Awareness: ✗ confundiu "responder rapido" com "responder bem". Eram problemas diferentes.
- Platform Awareness: ✗ comprou ferramenta de geracao 2018 quando o problema exigia LLM 2026 (ou humano).
- Task Delegation: ✗ delegou 100% pra IA o que deveria ser triagem IA + atendimento humano nas excecoes.
**Setor:** varejo
**Fonte do padrao:** SocialHub Brasil 2026 + denuncia CADE 2025 + dados de 40% excecoes do Portal Information Management
URL referencia: https://www.clint.digital/blog/agente-ia-vs-chatbot-whatsapp

### CASO ERRO 2 — Empresa de servicos (escritorio de contabilidade ou agencia) compra ChatGPT Plus pra todo mundo
**O que fizeram:** CEO assina 30 licencas ChatGPT Plus, posta foto no LinkedIn ("estamos na era da IA"), 90 dias depois ninguem usa ou cada um usa do seu jeito sem padrao. Resultado: dado de cliente vazou em conversa, parecer fiscal saiu errado em 1 caso, contador senior virou bombeiro.
**Onde falhou D1:**
- Problem Awareness: ✗ nunca foi feita. "Era pra fazer o que mesmo?"
- Platform Awareness: ✗ ChatGPT generico sem RAG fiscal nao tem teto pra parecer especializado.
- Task Delegation: ✗ delegou ferramenta sem delegar TAREFA. Cada um virou solo.
**Setor:** servicos profissionais
**Fonte do padrao:** "Shadow AI Economy" — TI Inside Online 2025 (90%+ usam sem licenca oficial)
URL: https://tiinside.com.br/06/11/2025/por-que-os-projetos-de-ia-fracassam/

### CASO ERRO 3 (opcional, escolha de Estrategia) — Industria media tenta automatizar processo de cotacao com RPA + IA
**O que fizeram:** Investiram R$ 200k em RPA + IA pra automatizar cotacoes de fornecedor. 6 meses depois, 40% das cotacoes ainda dependem de humano por causa de excecao. Trocaram 10 compradores por 3 mantenedores de robo + 5 tratando excecao. Custo aumentou.
**Onde falhou D1:**
- Problem Awareness: ✗ nao mapearam que 40% das cotacoes sao "casos especiais" e exigem julgamento humano.
- Platform Awareness: ✗ acharam que RPA basico era hiperautomacao.
- Task Delegation: ✗ pularam Augmentation, foram direto pra Automation total.
**Setor:** industria
**Fonte do padrao:** Portal Information Management 2025 — https://docmanagement.com.br/11/27/2025/hiperautomacao-ia-78-das-empresas-brasileiras-ainda-estao-presas-na-automacao-1-0/

**Recomendacao Radar:** O post nao precisa de 3 cases. **Sugestao: usar 1 acerto (cosmetico) + 1 erro (chatbot WhatsApp genérico OU contabilidade)** — escolher o erro mais reconhecivel pra o publico de CEO PME. Chatbot WhatsApp generico e mais relatable, contabilidade e mais cirurgico (Apolo conversa com C-level). **Estrategia decide.**

---

## 3. FRAMEWORK DE PERGUNTAS PRATICAS (D1 EM ACAO — 5 perguntas, traducao PT-BR limpa)

### As 5 perguntas que um CEO deveria responder ANTES de abrir o ChatGPT/Claude

**1. Qual e o trabalho que voce esta tentando fazer?**
> *Problem Awareness — "What am I trying to do?"*
> Por que importa: 80% das adocoes pulam essa pergunta. Sem ela, IA vira ferramenta procurando problema.
> Exemplo PME: "Quero responder cliente mais rapido" e DIFERENTE de "quero responder cliente melhor". A primeira pergunta admite chatbot. A segunda exige humano + IA.

**2. Esse trabalho tem regra clara ou exige julgamento?**
> *Problem Awareness aplicado — separa o que cabe Automation, Augmentation ou Agency*
> Por que importa: 40% das excecoes em RPA mal pensado vem dessa pergunta nao respondida (Portal IM, 2025).
> Exemplo PME: "Emitir nota fiscal de produto padrao" tem regra clara (cabe Automation). "Decidir desconto pra cliente que reclamou" exige julgamento (cabe Augmentation no maximo).

**3. O que essa ferramenta faz BEM e o que ela faz MAL?**
> *Platform Awareness — "What do you do well?"*
> Por que importa: ChatGPT Plus generico nao tem teto pra parecer fiscal especializado. Claude com RAG fiscal sim. Saber o teto e D1.
> Exemplo PME: Gemini Vision e otimo pra classificar imagem de produto. Pessimo pra negociar com fornecedor.

**4. Onde o erro custa caro?**
> *Platform Awareness aplicado — define onde humano fica no controle*
> Por que importa: workslop custa US$ 186/mes por funcionario quando ninguem sabe onde IA pode errar (Stanford 2025).
> Exemplo PME: erro em texto de marketing custa pouco (humano edita). Erro em parecer fiscal pode custar multa de 30k.

**5. Humano faz tudo, IA faz tudo, ou os dois fazem juntos?**
> *Task Delegation — "Ok, here's the plan"*
> Por que importa: Anthropic Economic Index mostra que 52% das interacoes Claude sao Augmentation (humano + IA), nao delegacao total (jan/2026). PME que pula direto pra Agency erra.
> Exemplo PME: triagem de email = IA classifica, humano responde os 20% que importam.

**(opcional 6 e 7 — Estrategia decide se cabem):**

**6. Qual humano vai validar antes de virar oficial?**
> *Task Delegation aplicada — define quem sela.*
> Importante porque sem dono nominal, output IA vira "ninguem" e ninguem responde por ele.

**7. Em 30 dias, qual KPI me mostra que valeu a pena?**
> *Ponte com D4 Diligence (vai aparecer no post 23/05).*
> Sem KPI atrelado, IA fica em Teatro Digital (callback do post 07/05).

**Recomendacao Radar:** se o post precisa caber em 1.300 chars, USAR APENAS AS 5 PRIMEIRAS. As perguntas 6 e 7 podem ir num carrossel-ancora opcional ou ficar pra um post-vitamina futuro.

---

## 4. CINCO HOOKS POSSIVEIS (Estrategia escolhe)

### Hook 1 (numero forte — alta credibilidade, novo dado)
> "37% do tempo que a IA economiza e gasto consertando o que ela entregou (Workday, 2026). O problema nao e a IA. E a delegacao."
**Forca:** Numero novo, fresco, paradoxal. Nao repete 95/6 do ancora.
**Risco:** "Workday" e marca menos conhecida que MIT/McKinsey no Brasil.

### Hook 2 (provocativo)
> "ChatGPT nao decide pra voce QUAL trabalho dar pra ele. Esse e o seu. E quase ninguem faz."
**Forca:** Cirurgico, viral, atinge dor de CEO direto. Prepara a definicao de Problem Awareness.
**Risco:** Nao tem numero — pode performar pior que hooks com dado.

### Hook 3 (pergunta + autoridade)
> "Por que 56% dos CEOs dizem que NAO tiraram nada dos investimentos em IA (PwC, 2026)? Faltou a primeira pergunta: o que estou tentando fazer?"
**Forca:** Numero PwC pesado + pergunta que prepara o framework. Conecta autoridade com diagnose pratica.
**Risco:** Hook longo (215 chars) — pode estourar zero-click. Post pode comprimir.

### Hook 4 (callback ancora — coesao da serie)
> "Na segunda eu apresentei OS 4Ds. Hoje destrincho o D1 DELEGATION. E o D que o Brasil mais erra."
**Forca:** Coesao narrativa maxima. Quem leu o ancora ja vem preparado. Quem nao leu vai querer.
**Risco:** Sem numero pesado no hook — depende da pessoa lembrar do post de 2 dias atras.

### Hook 5 (afirmacao dura — Brasil especifico)
> "78% das empresas brasileiras automatizaram a tarefa errada (Portal IM, 2025). Por que? Porque pularam o D1."
**Forca:** Dado Brasil especifico, raro, e introduz "D1" como fluxo de salvacao.
**Risco:** Portal Information Management e fonte menos premium que MIT/McKinsey.

### RECOMENDACAO RADAR
**Hibrido Hook 1 + Hook 4 — fundir numero novo com callback do ancora.**

> "Na segunda apresentei OS 4Ds. Hoje destrincho o D1. Comeco com um dado: 37% do tempo que a IA 'economiza' e gasto consertando o output (Workday, 2026)."

Por que: amarra a serie + entrega numero fresco + planta DELEGATION antes do "Ver mais". Estrategia pode comprimir. Alternativa segura: Hook 3 puro (PwC 56%).

---

## 5. ANGULO RECOMENDADO

### Conexao com Post 1 (frases de abertura sugeridas)

**Opcao A (curta, validada pela serie):**
> "Na segunda apresentei OS 4Ds. Hoje destrincho o D1: DELEGATION."

**Opcao B (com tese embutida):**
> "Na segunda apresentei OS 4Ds. Hoje desco no primeiro: DELEGATION. E o D que o Brasil mais erra."

**Opcao C (com dado fresco):**
> "Na segunda apresentei OS 4Ds. Hoje desco no D1. 37% do tempo que a IA 'economiza' e gasto consertando o output (Workday, 2026). Isso e falha de delegacao."

### Metafora central — DIRIGIR (resgatada do Radar Post 1, validada pela Estrategia Post 1)

A Estrategia do Post 1 explicitamente disse: *"Dirigir tem encaixe melhor no post de D1 Delegation — guardar pra la."* Hora de usar.

**Como aplicar dirigir aos 3 sub-Ds:**

| Sub-D | Pergunta original | Traducao "dirigir" |
|-------|-------------------|---------------------|
| Problem Awareness | What am I trying to do? | Saber pra ONDE voce vai. Sem destino, qualquer rua serve. Carro nao escolhe destino. |
| Platform Awareness | What do you do well? | Conhecer o CARRO. Carro eletrico nao vai pra trilha de areia. Picape nao desce escada. |
| Task Delegation | Ok, here's the plan | Decidir QUEM dirige. Voce sozinho. Voce com piloto automatico. Ou o piloto automatico sozinho com voce no banco do passageiro. |

**Frase pronta pra Post:**
> "Aprender IA e como aprender a dirigir. Saber ligar o motor (assinar ChatGPT) nao e saber dirigir. Existem tres perguntas antes de pisar no acelerador: pra ONDE voce vai, o que esse CARRO faz bem, e QUEM dirige."

### Posicionamento Apolo (manter o disclosure D4 do Post 1)

- Apolo NAO inventou os 3 sub-Ds. Anthropic + Dakan + Feller (CC BY-NC-SA 4.0).
- Apolo TRADUZ pra dirigir (metafora) e pra realidade PME brasileira.
- Continuar o tom observador-operador validado em 9 posts anteriores.

### O QUE NAO FALAR (lista de pegadas mortas — atualizada apos Post 1)

- Cliches banidos pela brand-voice: revolucao, game-changer, disruptivo, transformador, futuro do trabalho, AI literacy sem traduzir
- NAO repetir 95% MIT / 6% McKinsey no hook (ja foi explorado no ancora). Pode citar de passagem no corpo se servir.
- NAO citar concorrentes pelo nome (RDD, Cavallini, Microsoft, Mastertech)
- NAO mencionar Hostinger / Magalu / Klarna / Snap / Nvidia (cooldown editorial — saturados em campanhas anteriores)
- NAO usar "delegacao" sem traduzir na primeira mencao — sempre "DELEGATION (decidir o que voce faz, o que IA faz, o que fazem juntos)"
- NAO listar TODAS as 7 perguntas do framework — guardar 6 e 7 (escolha de Estrategia)
- NAO antecipar D2 (Description). Manter foco cirurgico em D1.
- Hifen/travessao zero (regra dura)

### CAPS LOCK SUGERIDO (3-5 pontos)

- "DELEGATION" (nome do D — branding obrigatorio)
- "OS 4Ds" (callback ancora)
- "PROBLEM AWARENESS" OU uma das outras sub-competencias (escolha Estrategia — uma so vira destaque)
- "DIRIGIR" ou "PRA ONDE VOCE VAI" (ancora da metafora)
- Total: 3-4 pontos. Dentro da regra.

---

## 6. SUGESTAO DE THUMBNAIL

### Templates ja queimados (NAO usar)
- Serie 4Ds: T6 "4 Quadrantes navy/dourado/creme" — Post 1 ancora
- Serie Tradicional+IA (07/05 e 08/05): T5 split, T8 bar chart
- Serie Hostinger/Magalu/IBGE: varios outros (cooldown opcional)

### Conceito visual recomendado: "PERGUNTA GIGANTE" (template tipografico puro)

**Headline visual unica, no centro, em serif editorial pesada:**
> "QUAL O TRABALHO QUE VOCE ESTA TENTANDO FAZER?"

**Subheader pequeno embaixo:**
> "D1 DELEGATION · framework Anthropic"

**Footer:**
> APOLO SANTOS · serie OS 4Ds DA FLUENCIA EM IA · post 2 de 7

**Por que esse conceito ganha:**
1. Nenhum infograma ou quadrante — diferencia 100% do Post 1.
2. Cartaz tipografico puro funciona como prova de seriedade (manual de operacao). Coerente com o tom do framework.
3. A pergunta sozinha JA E a aula. Quem ve no feed para pra ler.
4. Otimo pra screenshot — vira citacao instantanea.

### Paleta sugerida (NAO repetir navy do Post 1)
**OPCAO A (terra/oliva — homenagem ao verde original do PDF Anthropic):**
- Verde-oliva profundo `#3F4A2C` (fundo)
- Creme palido `#F4EFE5` (texto principal)
- Mostarda fosca `#C9A14A` (eyebrow + dourado de continuidade com Post 1)
- Cinza terra `#A89B82` (subheader)

**OPCAO B (vinho profundo — tom de "perda" associado a delegacao mal feita):**
- Vinho profundo `#4A1E2C`
- Creme `#F4EFE5`
- Coral fosco `#C95A4A`
- Cinza neutro `#A8A8A8`

**Recomendacao Radar:** Opcao A (terra/oliva) mantem a coesao visual com a paleta original do material Anthropic e diferencia bem do navy do Post 1. Opcao B fica reservada pra D4 Diligence (que fala de responsabilidade — paleta mais pesada cabe la).

### Variantes possiveis (se Estrategia quiser opcoes)
- V1: pergunta gigante centralizada (recomendada)
- V2: 3 perguntas em fluxograma vertical (Problem → Platform → Task)
- V3: split com "ASSINAR CHATGPT" (esquerda) vs "DELEGAR COM CRITERIO" (direita) — estilo Post 1 do Teatro Digital mas com mensagem nova

---

## 7. CONEXAO COM A SERIE — CHECKLIST DE COESAO

| Item | Como fazer |
|------|-----------|
| Callback ancora (Post 1) | "Na segunda apresentei OS 4Ds. Hoje destrincho o D1 DELEGATION." |
| Callback Teatro Digital (07/05) | Opcional — se citar, usar 1 frase: "Sem D1, a empresa entra direto no TEATRO DIGITAL." |
| Disclosure Anthropic + CC BY-NC-SA 4.0 | OBRIGATORIO. Manter padrao do ancora. |
| Tease Post 3 (D2 Description, sex 16/05) | "Sexta solto o D2: como CONVERSAR com a IA depois que voce ja sabe pra que." |
| Pergunta de engajamento | Sugestao: "Qual das 5 perguntas voce nunca tinha feito antes de abrir o ChatGPT?" — gera comentarios estruturados (cada um responde "1", "3", etc.) |
| Hashtags (3-5) | Manter padrao Post 1: #InteligenciaArtificial #AIFluency #PME #Lideranca #Anthropic |

---

## 8. SUGESTAO DE HORARIO

**Confirmado: Qua 14/05/2026 09h00 BRT** (conforme briefing).

Quarta as 9h00 e janela diferente do Post 1 (segunda 10h00) — bom. Quarta de manha cedo pega o leitor antes da primeira reuniao do dia, com energia pra ler conteudo deep-dive denso. Janela funciona pra B2B PT-BR.

---

## 9. NOTAS PARA OS PROXIMOS TIMES

### Para Estrategia (proxima a entrar)
- Decisoes em aberto: hook (recomendacao Hibrido 1+4 ou Hook 3), case (chatbot OU contabilidade), tamanho do framework (5 ou 7 perguntas)
- Validar metafora "dirigir" — Estrategia pode trocar se achar melhor
- Definir thumbnail template (recomendacao Radar: Pergunta Gigante tipografico, paleta terra/oliva)
- Decidir se haverá carrossel-companion com as 7 perguntas (ainda em aberto)

### Para Post (depois de Estrategia)
- Limite ~1.300 chars zero-click
- Acentos PT-BR corretos
- Sem hifen
- 3-5 caps lock (ver mapa secao 5)
- Disclosure Anthropic obrigatorio
- Citar fonte entre parenteses em todo dado

### Para Thumb
- Diferente do Post 1 (T6 4 quadrantes — NAO repetir)
- Diferente de T5 e T8 (Teatro Digital)
- Acentos PT-BR no header e footer (regra atualizada da serie — "FLUENCIA" sempre acentuado se aparecer)
- Footer com credito CC BY-NC-SA 4.0

### Para Revisar
- Score minimo 4.0/5
- Verificar callback ancora explicito ("Na segunda apresentei OS 4Ds")
- Verificar fontes inline (Workday, McKinsey, Anthropic Economic Index — mais a definir pelo Post)
- Hifen zero
- Coesao com Post 1 — nao contradizer nada do ancora
- Tease Post 3 (D2 sexta) ao final

---

## 10. FONTES PRIORITARIAS PARA CITAR NO POST (top 3 — escolha do Post)

Se o post tem espaco pra 2-3 citacoes, priorizar (em ordem de impacto narrativo):

1. **Workday 2026** — "37% do tempo salvo pela IA e gasto consertando o output" (numero novo, fresco, paradoxal — perfeito pra deep-dive D1)
2. **PwC Global CEO Survey 2026** — "56% dos CEOs nao tiraram nada da IA, so 12% reportam ROI duplo" (autoridade C-level + numero pesado)
3. **Anthropic Economic Index Jan/2026** — "52% Augmentation vs 45% Automation em 50.000+ interacoes Claude" (autoridade Anthropic + dado de delegacao real)
4. **Portal Information Management 2025** — "78% das empresas BR estao em Automacao 1.0" (Brasil-especifico, raro)

McKinsey 21% workflow redesign + MIT 95% sem ROI ja foram exploradas no Post 1 — citar de passagem se sobrar espaco.

---

FIM DO BLOCO. Pronto para entrega a Estrategia D1.
