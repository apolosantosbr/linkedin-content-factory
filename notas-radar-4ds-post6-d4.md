# NOTAS RADAR — POST 6 SERIE OS 4Ds DA IA · D4 DILIGENCE (deep-dive, fecho dos 4Ds)

> STATUS: CONCLUIDO
> Data publicacao alvo: Sex 23/05/2026 — horario a CONFIRMAR (briefing pede 09h; janela do Post 3 D2 foi 10h numa sexta tambem — Radar recomenda 10h por coesao com o Post 3, mas Apolo decide. Ver secao 11)
> Pasta destino: posts/2026-05-23_diligence-d4/
> Tipo: post deep-dive — quarto e ULTIMO D da serie
> Funcao na serie: fecha o framework AI Fluency. Abre caminho pro Post 7 fecho (6 tecnicas de prompt, Seg 26/05)
> Calibragem v1 aplicada · Inimigo AUDITOR DE IA confirmado · CTA SALVA confirmado
> Entregavel do Post agora e post.md com corpo em code block (politica de 14/05)
> Pesquisa concluida: 15/05/2026 — Radar agent

---

## RESUMO EXECUTIVO (1 paragrafo)

Posts 1 a 5 ensinaram a DECIDIR, FALAR, ESCOLHER O MODO e AVALIAR. O Post 6 fecha o ciclo: depois que a IA entregou e voce avaliou, QUEM ASSINA EMBAIXO? Quem responde quando o cliente pergunta de onde veio aquele numero? Anthropic AI Fluency divide D4 em 3 sub-componentes: Creation Diligence (escolher com cuidado QUAL IA usar e COMO), Transparency Diligence (declarar o papel da IA pra quem precisa saber), Deployment Diligence (validar e RESPONDER pelo output que voce manda pra frente). Os dados de 2026 sao duros: Grant Thornton mostra que 78% dos executivos NAO confiam que passariam em uma auditoria independente de governanca de IA em 90 dias, embora 83% usem IA e so 25% tenham framework forte (Grant Thornton, 2026). McKinsey mostra que organizacoes com OWNERSHIP CLARO de IA responsavel tem maturidade 2,6 contra media 2,3 (McKinsey, 2026). E o EU AI Act entra em vigencia plena em 2 de agosto de 2026 com multas de ate 35 milhoes de euros ou 7% do faturamento global (artigo 99 do EU AI Act). Inimigo confirmado: AUDITOR DE IA — mas com angulo invertido: o problema dele nao e governanca, e GOVERNANCA DESPROPORCIONAL. 12 reunioes sao paralisia, zero reuniao e abandono. D4 e o caminho do meio. Pronto pra Estrategia.

---

## 1. EXTRACAO ANTHROPIC — D4 DILIGENCE (3 sub-componentes)

### Definicao oficial

> "Diligence is taking responsibility for what we do with AI and how we do it. Different contexts (personal, academic, professional) may have different expectations for disclosure and verification."
> Fonte: 1.8_Diligence_Summary.pdf — Anthropic, Dakan e Feller, 2025, CC BY-NC-SA 4.0

**Insight de leitura do Radar:** o material Anthropic explicitamente diz que CONTEXTO MUDA EXPECTATIVA. Diligence pessoal e diferente de academica, que e diferente de profissional. Pra CEO PME, o contexto e profissional/comercial — onde divulgacao e verificacao sao mais exigentes que em contexto pessoal. Gancho narrativo: "o que voce poderia fazer no seu chat pessoal nao serve quando o nome da sua empresa vai junto".

### Os 3 sub-componentes (definicao + exemplo + aterramento PME)

| Sub-D4 | Definicao oficial Anthropic | Cena do PDF | A pergunta que ele responde | Aterramento PME brasileira | Falha tipica |
|--------|----------------------------|-------------|----------------------------|----------------------------|--------------|
| **Creation Diligence** | Being thoughtful about which AI systems you use and how you interact with them. | Icone de envelope (escolha de qual sistema usar) | "Esta IA e a certa pra esta tarefa, e como eu interajo com ela protege o que precisa ser protegido?" | Escolher entre ChatGPT generico, Claude, Copilot enterprise, ou ferramenta especialista — considerando vazamento de dado, treinamento sobre prompt, contexto da operacao. | Usar ChatGPT consumer com dado de cliente. Subir planilha sensivel em ferramenta que treina sobre o input. |
| **Transparency Diligence** | Being honest about AI's role in your work with everyone who needs to know. | Citacao "In this document, Claude 3.7..." | "As pessoas certas sabem que tinha IA aqui dentro? O time, o cliente, o parceiro, o conselho?" | Declarar uso de IA quando manda parecer/relatorio/proposta. Avisar o cliente quando o atendimento foi IA. Marcar internamente o que e IA-assistido. | Mandar entregavel feito com IA como se fosse 100% humano. Cliente descobre depois, perde confianca. |
| **Deployment Diligence** | Taking responsibility for verifying and vouching for the outputs you use or share. | "We did good." (assumindo o output como seu) | "Eu validei isso antes de assinar embaixo? Estou pronto pra defender no telefone com o cliente?" | O contador que assina o parecer. O CEO que cita o numero na reuniao. O gestor que manda a proposta. Ninguem pode dizer "a culpa e da IA" depois. | Carimbar sem ler (callback ao Post 5 e ao inimigo Carimbador). Mandar e depois apontar pra IA quando da problema. |

### Conexao com o glossario (AI_Fluency_vocabulary_cheat_sheet.pdf)

- **Hallucination + Bias**: argumentos para Creation Diligence (escolher ferramenta com salvaguarda) e Deployment Diligence (validar antes de usar).
- **Knowledge cutoff date**: argumento de Deployment Diligence — voce E responsavel por saber que a IA nao sabe do que aconteceu depois do treino.
- **Context window**: argumento de Creation Diligence — escolher uma ferramenta com janela suficiente pro problema.

### Como o D4 amarra os 3 Ds anteriores

D1 decidiu o QUE delegar. D2 descreveu o pedido. D3 avaliou o output. D4 ASSUME tudo isso. Sem D4, os outros 3 viram exercicio academico — alguem ainda tem que assinar embaixo. **Esse e o angulo do post.**

---

## 2. DADOS NOVOS — GOVERNANCA / ACCOUNTABILITY / TRANSPARENCIA (3 ancoras + 1 contextual)

Todos com fonte + ano + URL real. Dados dos Posts 1-5 (MIT NANDA, McKinsey 6%, Sebrae, Workday, Stack Overflow, Gartner 40%, S&P 42%, governanca 1 em 5 do Post 4, Resume Now 35%, Founder 45%, Connext 17% do Post 5) seguem como pano de fundo — NAO repetir como hook.

### DADO 1 — Grant Thornton 2026 AI Impact Survey (autoridade pesada pra C-level)

> 78% dos executivos NAO tem confianca forte de que passariam numa auditoria independente de governanca de IA em 90 dias. 83% das organizacoes usam IA, mas apenas 25% implementaram um framework de governanca forte o suficiente pra geri-la.

- Fonte: Grant Thornton, 2026 AI Impact Survey
- URL: https://www.grantthornton.com/services/advisory-services/artificial-intelligence/2026-ai-impact-survey
- Por que importa pro D4: e o dado-ancora. Mostra o gap GIGANTE entre usar (83%) e governar (25%). E o "auditoria em 90 dias" e a metafora certa pra CEO — todo mundo sabe o que e estar despreparado pra auditoria.
- Como usar: hook ou abertura. "78% dos executivos nao confiam que passariam numa auditoria de governanca de IA em 90 dias (Grant Thornton, 2026). 83% ja usam IA. So 25% tem framework. O gap chama-se D4."

### DADO 2 — EU AI Act entra em vigencia plena em 2 de agosto de 2026 (regulacao + multas)

> O EU AI Act entrou em vigor em 1 de agosto de 2024 e sera plenamente aplicavel a partir de 2 de agosto de 2026. Multas: ate 35 milhoes de euros ou 7% do faturamento global para violacoes de praticas proibidas; ate 15 milhoes ou 3% para violacoes de IA de alto risco; ate 7,5 milhoes ou 1,5% para informacao incorreta ou enganosa as autoridades.

- Fonte: Artigo 99 do EU AI Act
- URL: https://artificialintelligenceact.eu/article/99/
- Por que importa pro D4: regulacao DURA chegando em 2 meses e meio depois do post (15/05 → 02/08). E qualquer PME brasileira que exporta pra Europa, atende cliente europeu, ou licencia software pra cliente europeu, esta na regua. D4 deixa de ser opcional.
- Como usar: argumento de urgencia. "Em 2 de agosto deste ano (proximo mes em relacao ao post), o EU AI Act vira lei plena. Multa de ate 35 milhoes de euros (artigo 99 do EU AI Act). Sua empresa exporta? Atende cliente europeu? D4 acabou de virar exigencia, nao virtude."

### DADO 3 — McKinsey State of AI Trust 2026 (maturidade x ownership)

> A nota media de maturidade em IA Responsavel subiu de 2,0 em 2025 para 2,3 em 2026, mas so um terco das organizacoes reporta nivel 3 ou maior em estrategia e governanca. Organizacoes que atribuem ownership claro pra IA Responsavel (papel especifico de governanca, time de auditoria ou etica) chegam a 2,6 — bem acima da media. Quase 60% citam lacunas de conhecimento e treinamento como a principal barreira.

- Fonte: McKinsey, State of AI Trust 2026
- URL: https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/tech-forward/state-of-ai-trust-in-2026-shifting-to-the-agentic-era
- Por que importa pro D4: prova que D4 nao e burocracia que atrasa, e diferencial competitivo. Empresa com ownership claro de governanca tem maturidade 13% acima da media. Mata o ataque interno do "isso e perfumaria de compliance".
- Como usar: contraponto ao Auditor de IA. Governanca PROPORCIONAL acelera. Governanca DESPROPORCIONAL (12 reunioes) trava. D4 e o meio do caminho.

### DADO CONTEXTUAL (Brasil — opcional, escolha do Post)

> Brasil tem o PL 2.338/2023 (a "AI Act brasileira"), aprovado pelo Senado em dezembro de 2024, ainda em tramitacao na Camara dos Deputados em 2026. Enquanto isso, a ANPD ja regula decisoes automatizadas via LGPD (transparencia, direitos do titular, accountability).
- Fonte: PL 2.338/2023 + LGPD/ANPD
- URL: https://www.barbieriadvogados.com/brazil-ai-act/
- Uso possivel: aterrar o EU AI Act pra Brasil. "Brasil ainda esta tramitando o PL 2.338. A ANPD ja regula automacao via LGPD. A regulacao chega. A pergunta nao e SE. E quando."

**Recomendacao Radar:** DADO 1 (Grant Thornton 78%) como hook + DADO 2 (EU AI Act multas) como urgencia + DADO 3 (McKinsey ownership 2,6 x 2,3) pra desmontar o ataque "burocracia atrasa". DADO CONTEXTUAL Brasil so se sobrar espaco.

---

## 3. INIMIGO CONFIRMADO — AUDITOR DE IA (gancho narrativo aterrado ao D4)

Inimigo confirmado pelo Apolo desde a calibragem v1: AUDITOR DE IA — "12 reunioes pra autorizar 1 ferramenta, governanca virou desculpa pra nao decidir". Aplicar.

### O angulo correto pra D4 (NAO trair o inimigo)

D4 e SOBRE governanca. O Auditor tambem fala em governanca. Risco: o post acidentalmente DEFENDER o Auditor. Antidoto: o post nao ataca governanca, ataca **governanca desproporcional**. O Auditor faz 12 reunioes pra autorizar 1 ferramenta. O CEO que pula D4 nao faz nenhuma. Os dois erram. **D4 e o meio do caminho — governanca proporcional ao risco.**

### Gancho narrativo aterrado

> "O Auditor de IA pediu 12 reunioes pra autorizar o ChatGPT. No mesmo periodo, o concorrente colocou 3 agentes em producao. Os dois erraram. Um virou refem da propria governanca. O outro nao tem governanca nenhuma. O D4 nao escolhe entre paralisia e abandono. Ensina o meio: voce ESCOLHE a ferramenta com cuidado (Creation), AVISA quem precisa saber (Transparency), e RESPONDE pelo que entrega (Deployment)."

### Variacao cirurgica

> "O Auditor confunde 12 reunioes com governanca. O CEO confunde velocidade com fluencia. Os dois precisam do mesmo D4 — em direcoes opostas."

### Conexao com os 3 outros inimigos (recap implicito da serie)

O Auditor fecha a galeria dos 4 inimigos da serie:
- Eterno Pilotante (testa, nao decide) — falha em D1
- Consultor de Livro Traduzido (vende Agency sem rodar) — falha no artigo dos 3 modos
- O Carimbador (aprova sem ler) — falha em D3
- Auditor de IA (12 reunioes pra autorizar) — falha em D4 por excesso

Pode ser uma virada legal no fim do post: "voce ja conheceu o Pilotante, o Consultor, o Carimbador, e hoje o Auditor. Sao 4 perfis. Os 4 erram na falta de fluencia — ou cedo demais, ou tarde demais."

---

## 4. TRES CANDIDATAS DE MONEY LINE (formato screenshot-ready)

Todas dentro da regra dura: 6-12 palavras, 2+ palavras CAPS LOCK, sem hifen, sem aspas, sem fonte dentro, paragrafo isolado. Aprovadas nos 4 testes (screenshot, incomodo, sabor de operador, pernada).

### CANDIDATA 1 (recomendada — tese central do D4)

> QUEM ASSINA EMBAIXO NAO E A IA. E VOCE.

- 9 palavras. CAPS em QUEM, ASSINA, IA, VOCE.
- Screenshot: PASSA — funciona solta, aforismo limpo.
- Incomodo: ALTO — cutuca o gestor que terceiriza culpa pra IA.
- Sabor de operador: PASSA — soa como veredicto de quem ja viu o cliente cobrar e a IA nao atender o telefone.
- Pernada: PASSA — invertida ("quem assina embaixo e a IA, nao voce") vira o absurdo que o post desmonta.

### CANDIDATA 2 (amarra o inimigo Auditor)

> GOVERNANCA NAO E PARALISIA. E SABER QUEM ASSINA.

- 8 palavras. CAPS em GOVERNANCA, PARALISIA, ASSINA.
- Screenshot: PASSA — funciona solta como definicao.
- Incomodo: PASSA — desmonta o Auditor sem absolver quem nao tem governanca nenhuma.
- Sabor de operador: PASSA — afirmacao direta.
- Pernada: PASSA — invertida vira justamente a confusao que o Auditor faz.

### CANDIDATA 3 (callback ao D1 Delegation — coesao maxima da serie)

> DELEGAR PRA IA NAO E TERCEIRIZAR A CULPA.

- 8 palavras. CAPS em DELEGAR, IA, CULPA.
- Screenshot: PASSA — frase de manual.
- Incomodo: ALTO — atinge quem usou D1 como escudo.
- Sabor de operador: PASSA — soa como correcao de operador a um discurso preguicoso.
- Pernada: PASSA — invertida vira o erro do leitor.
- BONUS: amarra explicitamente o D1 (Post 2) ao D4 (Post 6) — fecha o arco da serie em uma frase.

### RECOMENDACAO RADAR ENTRE AS 3

**Candidata 1 (QUEM ASSINA EMBAIXO NAO E A IA. E VOCE)** e a money line do post — captura o coracao do D4 em 9 palavras. Candidata 3 (DELEGAR PRA IA NAO E TERCEIRIZAR A CULPA) e fortissima pelo callback explicito ao D1 e pode ser usada no MEIO do post como ponte narrativa. Candidata 2 amarra o Auditor.

**Combinacao otima:**
- Money line isolada antes do CTA = Candidata 1
- Frase forte no corpo (perto do inimigo Auditor) = Candidata 2
- Frase forte no recap da serie (perto do tease pro Post 7) = Candidata 3

---

## 5. CTA CONFIRMADO — SALVA (Variacao 2)

CTA SALVA reservada pra este post pela calibragem v1. Tom consultivo, casa com post de fechamento de D.

### Texto pronto (Estrategia ajusta)

> Salva esse post pra rever antes da proxima entrega feita com IA. Voce ESCOLHEU a ferramenta com cuidado, DECLAROU o uso pra quem precisa saber, e ASSINA pelo resultado? Marca o D em que voce trava.

- Share trigger: SALVA (Variacao 2 — guardar pra cobrar/usar depois).
- A pergunta tripla mapeia direto nos 3 sub-componentes do D4 (Creation / Transparency / Deployment) — gera comentarios estruturados.
- "Marca o D em que voce trava" e versao reduzida pra encurtar — Estrategia pode usar a longa ou cortar.

### Versao alternativa mais curta (se o post ja estiver no limite de 1.300 chars)

> Salva esse post pra rever antes da proxima entrega com IA. Voce escolheu a ferramenta, avisou quem precisa saber, e assina pelo resultado?

### Estado da rotacao (controle)

- Post 3 — REPASSA
- Post 4 — MOSTRA
- Post 5 — MARCA
- **Post 6 — SALVA (este)**
- Post 7 — disponivel: MANDA (unica nao usada)

---

## 6. CASOS PME OBSERVAVEIS (sem nome de empresa)

Dois cenarios. Estrategia escolhe UM (recomendacao: Caso 1 — o parecer fiscal e o mais visceral pra C-level PME e ilustra Deployment Diligence, o sub-componente mais critico).

### CASO 1 — Escritorio contabil entrega parecer fiscal escrito pela IA, contador junior assina sem ler tudo (Deployment Diligence falhou)

**O que aconteceu:** Escritorio contabil medio (40-60 pessoas, carteira de PME e medias empresas) coloca a IA pra rascunhar pareceres fiscais e contratos. Volume sobe, prazo aperta. Contador junior assina o parecer feito com IA sem revisar a fundo. O parecer cita uma instrucao normativa antiga (a IA usou knowledge cutoff anterior a uma mudanca). Cliente segue o parecer, e autuado pela Receita.

**Onde o D4 quebrou:**
- **Deployment Diligence:** o junior assinou sem validar a citacao. A IA citou IN antiga, ele nao conferiu se a IN ainda valia.
- **Transparency Diligence:** o parecer NAO declarava uso de IA. Cliente achou que era 100% humano.
- **Creation Diligence:** o escritorio usou ChatGPT generico sem RAG fiscal atualizado. Ferramenta errada pra a tarefa.

**Resultado:** cliente autuado, advocacia perguntou "quem assinou esse parecer?" — o nome era o do contador junior. A IA nao apareceu na assinatura. O escritorio respondeu por civilmente.
**O que faltou:** os 3 sub-componentes do D4.

### CASO 2 — Agencia de marketing entrega criativo gerado por IA sem informar o cliente (Transparency Diligence falhou)

**O que aconteceu:** Agencia (20-40 pessoas, carteira de PME) entrega uma campanha visual feita com IA generativa de imagem. Nao avisa o cliente. Tres meses depois, cliente descobre que outra empresa tem campanha quase identica (gerada com prompt parecido pela mesma ferramenta). Cliente questiona originalidade, pede devolucao.

**Onde o D4 quebrou:**
- **Transparency Diligence:** nao informou que o criativo era IA-assistido. Cliente nao teve oportunidade de aprovar a politica.
- **Creation Diligence:** usou ferramenta de imagem com modelo de pre-treinamento amplo, sem garantia de unicidade pro cliente.

**Resultado:** contrato encerrado, dano de reputacao na praca, agencia revisou cliente a cliente politica de IA.
**O que faltou:** combinar com o cliente antes de usar, e escolher ferramenta adequada.

### Recomendacao Radar

**Caso 1 como principal** (parecer fiscal). Cobre os 3 sub-componentes do D4, e o mais visceral pro C-level, e o "quem assinou?" da frase de gancho. **Caso 2 pode entrar como contraponto curto de 2-3 linhas** pra ilustrar Transparency Diligence em outro contexto.

---

## 7. CONEXAO NARRATIVA — CHECKLIST DE COESAO

| Item | Como fazer |
|------|-----------|
| Callback Post 5 D3 Discernment (Qua 21/05) | "Quarta destrinchei o D3: avaliar o que a IA entregou. Hoje fecho o ultimo D: depois de avaliar, voce ASSINA EMBAIXO." |
| Callback Post 4 Artigo 3 modos (Seg 19/05) | Breve. "Os 3 modos escolhem o formato; o D4 escolhe quem responde." |
| Callback Post 3 D2 Description (Sex 16/05) | Opcional. Pode citar passagem rapida no recap. |
| Callback Post 2 D1 Delegation (Qua 14/05) | FORTE — usar a Candidata 3 como frase de ponte: "Delegar pra IA nao e terceirizar a culpa." |
| Callback Post 1 ancora (Seg 12/05) | RECAP da serie inteira (D1+D2+D3+D4 em 1 ou 2 linhas) — este e o post que pode/deve fazer esse fecho |
| Disclosure Anthropic + CC BY-NC-SA 4.0 | OBRIGATORIO. Padrao da serie. E ironicamente o proprio Apolo praticando Transparency Diligence — coerencia narrativa. |
| Tease Post 7 fecho (Seg 26/05) | "Segunda fecho a serie com as 6 tecnicas praticas de prompt que aterram tudo isso. O manual de operacao." |
| Hashtag-assinatura | #InteligenciaArtificial #Anthropic #PME #Os4Ds #PMEoperando |
| Money line isolada | Recomendada: Candidata 1 (QUEM ASSINA EMBAIXO NAO E A IA. E VOCE.) |
| CTA share trigger | SALVA (Variacao 2) — texto na secao 5 |

---

## 8. SUGESTAO DE THUMBNAIL — rotacao reabre

### Estado da rotacao de conceitos anti-padrao

- Post 3 D2 — Screenshot Vazado
- Post 4 Artigo — Foto Real + Soco
- Post 5 D3 — Meme com Classe
- **Post 6 D4 — NAO pode ser Meme com Classe (consecutivo). Reabre entre: Screenshot Vazado OU Foto Real + Soco**

### Recomendacao Radar: FOTO REAL + SOCO

D4 e o D mais "fisico" — fala em assinatura, responsabilidade, gente respondendo no telefone. Pede imagem humana real, nao tela. Foto Real + Soco e o conceito que mais ressoa com o tema. Alem disso:
- P3 foi Screenshot (tela), P4 foi Foto Real + Soco, P5 foi Meme. Repetir Foto Real + Soco em P6 nao quebra rotacao (nao e consecutivo), e fecha a serie com a estetica humana mais forte que vai gravar a money line na cabeca.
- Alternativa: Screenshot Vazado (volta a P3) — funciona mas perde forca visceral. Reservar pra eventual P7 fecho.

### Conceito visual — "ASSINATURA HUMANA"

**Foto de banco:**
- Mao humana segurando caneta sobre documento. Nada de tela, nada de IA visivel.
- Variacao: maos cruzadas sobre uma mesa com pasta de papel, foco em maos+pulso (sem rosto — anonimato proposital, qualquer gestor se identifica).
- Estilo: foto realista, iluminacao natural (luz de janela de escritorio), foco curto. NAO foto de banco generica de "businessman in suit shaking hand".

**Money line sobreposta:**
> QUEM ASSINA EMBAIXO NAO E A IA. E VOCE.

Tipografia: serif pesada (mesma da serie) em branco quente sobre area mais escura da foto, ou em grafite sobre area clara. Quebra de linha: "QUEM ASSINA EMBAIXO / NAO E A IA. / E VOCE." (3 linhas, ultima curta como punchline).

**Header pequeno em uma das bordas:** "D4 DILIGENCE"
**Footer:** APOLO SANTOS · serie OS 4Ds DA IA · post 6 de 7 · CC BY-NC-SA 4.0

### Paleta sugerida (NAO repetir as ja usadas)

- Foto base em tons naturais (tons de pele, papel, madeira de mesa) — preserva o look "foto real, nao designed"
- Tipografia em grafite `#1A1F2C` ou creme `#F4EFE5` (depende de onde cai sobre a foto)
- Acento dourado `#C9A14A` em header e linha divisoria (mantem o fio dourado da serie)

### Variantes possiveis (se Estrategia quiser opcoes)

- V1 (recomendada): foto realista de mao com caneta + money line sobreposta
- V2: foto de canto de mesa com documento assinado e cafe ao lado + money line — mais "ambiente de trabalho", menos retratista
- V3: foto de duas maos passando documento (entrega) + money line — narra a transferencia de responsabilidade

### Observacao de entrega

Politica prompt-only vigente: terminal Thumbnail entrega apenas o thumbnail-prompt.md. Acentos PT-BR corretos. Dimensao: thumb de feed (padrao da serie). Prompt cinematografico self-contained pra Ideogram/Midjourney/DALL-E.

---

## 9. RISCOS, CONTRAS E O QUE NAO INCLUIR

### Riscos da pauta

1. **Risco de soar burocratico / "post de compliance".** D4 fala em governanca, accountability, regulacao — sao palavras frias. Antidoto: usar o Caso 1 (parecer fiscal) cedo, levar a money line "QUEM ASSINA EMBAIXO..." pra perto da abertura, e usar o EU AI Act como urgencia, nao como conformidade.
2. **Risco de defender o Auditor por engano.** D4 e governanca; o Auditor exagera em governanca. Se o post nao distinguir bem, o leitor pensa "ah, entao o Auditor estava certo". Antidoto: a Candidata 2 ("Governanca nao e paralisia. E saber quem assina") existe especificamente pra fazer essa distincao.
3. **Risco de ficar EUA-centrico.** EU AI Act, California AB 2013, surveys gringas. Antidoto: aterrar pra Brasil via PL 2.338 e LGPD/ANPD (DADO CONTEXTUAL), e usar Caso 1 (escritorio contabil BR) como cena viva.
4. **Risco de virar manifesto de regulacao.** O Apolo nao e advogado. O post nao pode parecer parecer juridico. Antidoto: a regulacao entra como URGENCIA (vai virar exigencia), nao como manual de conformidade.
5. **Risco de fechar a serie cedo demais.** Este e o ULTIMO D, mas NAO e o ultimo post da serie. Faltam as 6 tecnicas no Post 7 (26/05). O fecho do D4 precisa ABRIR caminho pro Post 7, nao encerrar a serie. Antidoto: tease forte e claro pro Post 7 no penultimo paragrafo.

### O que NAO falar

- Cliches banidos: revolucao, game-changer, disruptivo, transformador, futuro do trabalho.
- NAO repetir hooks dos Posts 1-5 (MIT 95%, McKinsey 6%, Workday 37%, Stack Overflow 66%, Gartner 40%, S&P 42%, Resume Now 35%, Founder 45%, Connext 17%). Podem aparecer de passagem.
- NAO citar concorrentes pelo nome (RDD, Cavallini, Microsoft como concorrente, Mastertech, Fundacao Bradesco). McKinsey, Grant Thornton podem ser citadas como FONTE.
- NAO mencionar marcas saturadas: Hostinger, Magalu, Klarna, Snap, Nvidia (cooldown).
- NAO virar manifesto pro PL 2.338. Mencionar como contexto, nao endossar.
- NAO defender governanca por governanca. D4 e governanca PROPORCIONAL.
- NAO encerrar a serie. Falta o Post 7.
- Hifen e travessao = zero no corpo final.

### Tradeoff narrativo

D4 e o tema mais "frio" dos 4 Ds. Pode performar pior que D1/D2/D3 em engajamento bruto se nao for bem aterrado. Mas tambem e o D mais DEFENSIVEL pelo Apolo (cargo de CEO/CMO ja convive com responsabilidade, governanca, conselho) — voz observador-operador fica mais firme aqui que em qualquer outro post. **Calibre:** atacar o Auditor cedo, levar money line forte pra abertura, e fechar com o tease pro Post 7. Nao alongar o meio.

---

## 10. POSICIONAMENTO DO FECHO DOS 4Ds (sem dar spoiler do Post 7)

Este e o UNICO post que pode/deve fechar o framework. Posts 2, 3, 4, 5 foram aprofundamentos. O Post 6 e o ultimo D — depois dele, falta so o manual pratico (Post 7).

### O que o Post 6 PODE fazer

- Recap rapido dos 4Ds em 1 ou 2 linhas. Exemplo: "Voce ja viu: delegar (D1), descrever (D2), avaliar (D3) e responder (D4). Esses sao OS 4Ds. AI Fluency."
- Fechar o arco do framework conceitual. A frase "isso e AI Fluency" cabe AQUI, nao no Post 7.
- Citar a galeria dos 4 inimigos (Eterno Pilotante, Consultor, Carimbador, Auditor) como sintese — opcional, gera engajamento.

### O que o Post 6 NAO PODE fazer

- NAO entregar as 6 tecnicas. Reservado pro Post 7 (DD2 Handout).
- NAO declarar "fim da serie". A serie tem 7 posts.
- NAO fechar o tom como "encerramento". O tom e "ultimo D — segunda eu solto o manual pratico".

### Frase de transicao sugerida pro Post 7

> "Voce tem agora OS 4Ds: delegar, descrever, avaliar, responder. Falta a caixa de ferramentas que aterra tudo. Segunda solto as 6 TECNICAS DE PROMPT que viram esses 4 Ds em pratica de quem opera."

Tease curto, claro, abre apetite sem dar spoiler.

---

## 11. HORARIO SUGERIDO — A CONFIRMAR COM APOLO

**Briefing pediu: Sex 23/05/2026 09h00 BRT.**

Observacao do Radar: o Post 3 D2 Description (a outra sexta da serie) foi publicado as 10h00 BRT. Sexta 10h vinha sendo o padrao da serie pra deep-dive em sexta (calendario de referencia em _referencias-anthropic-4ds.md tambem aponta 10h pra este post).

**Opcoes:**
- **Opcao A (10h00 BRT — recomendada por coesao):** mantem o padrao "deep-dive de sexta as 10h" estabelecido pelo Post 3.
- **Opcao B (09h00 BRT — segue o briefing):** mais cedo, pega o leitor antes da primeira reuniao. Funcionou pro Post 2 D1 (quarta 09h) e Post 5 D3 (quarta 09h). Para sexta, e mais cedo do que o padrao da serie.

**Recomendacao Radar:** 10h00 BRT (Opcao A) por coesao com o Post 3 e com a referencia da serie. **Apolo decide.**

---

## 12. FONTES PRIORITARIAS PARA CITAR (top 3 — Post escolhe)

Ordem de impacto narrativo:

1. **Grant Thornton, 2026 AI Impact Survey** — "78% dos executivos nao tem confianca forte de que passariam numa auditoria de governanca de IA em 90 dias; 83% usam, so 25% tem framework forte" — URL: https://www.grantthornton.com/services/advisory-services/artificial-intelligence/2026-ai-impact-survey
2. **EU AI Act, artigo 99** — "vigencia plena em 2 de agosto de 2026; multas ate 35 milhoes de euros ou 7% do faturamento global" — URL: https://artificialintelligenceact.eu/article/99/
3. **McKinsey, State of AI Trust 2026** — "organizacoes com ownership claro de IA Responsavel tem maturidade 2,6 contra media 2,3" — URL: https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/tech-forward/state-of-ai-trust-in-2026-shifting-to-the-agentic-era

Anthropic AI Fluency (Dakan/Feller, 2025, CC BY-NC-SA 4.0) — citacao obrigatoria de framework (e ironicamente o proprio Apolo praticando Transparency Diligence), nao "dado de pesquisa".

URL contextual Brasil (PL 2.338): https://www.barbieriadvogados.com/brazil-ai-act/

---

## 13. NOTAS PARA OS PROXIMOS TIMES

### Para Estrategia (proxima a entrar)

**Decisoes em aberto:**
- Horario: 09h (briefing) vs 10h (coesao com P3) — Radar recomenda 10h, Apolo decide
- Money line: Candidata 1 (recomendada, tese central) vs Candidata 2 (amarra Auditor) vs Candidata 3 (callback ao D1 — usar no corpo)
- Caso PME: Caso 1 sozinho (recomendado) vs Caso 1 + contraponto Caso 2
- Dados: 3 ancoras (Grant Thornton + EU AI Act + McKinsey) — DADO CONTEXTUAL Brasil entra se sobrar espaco
- Recap da serie: incluir os 4 inimigos como galeria? (gera engajamento, ocupa espaco — Radar recomenda forte)
- Thumbnail: Foto Real + Soco (recomendada) vs Screenshot Vazado (alternativa)

**Validar:**
- Inimigo Auditor de IA com angulo "governanca proporcional, nao paralisia" — nao defender Auditor por engano
- Tom observador-operador firme, sem virar manifesto de compliance
- Calibragem v1 aplicada (Auditor de IA, SALVA, money line isolada, #Os4Ds + #PMEoperando)

### Para Post (depois de Estrategia)

- **Entregavel e post.md** (politica de 14/05) — corpo do LinkedIn em bloco de codigo, sem markdown dentro, com quebras de linha exatas. Primeiro comentario tambem em code block.
- Limite ~1.300 chars zero-click no corpo
- Acentos PT-BR corretos
- Hifen e travessao zero no corpo
- 3 a 5 caps lock (recomendados: D4, DILIGENCE, e UM dos 3 sub-componentes — escolher 1 ou 2 pra destacar, nao todos. ASSINA EMBAIXO ja vem caps na money line)
- Disclosure Anthropic obrigatorio (e e D4 em pratica — meta-coerencia narrativa)
- Citar fonte entre parenteses em todo dado (Grant Thornton 2026, EU AI Act artigo 99, McKinsey 2026)
- Money line em paragrafo ISOLADO antes do CTA
- Fechar com hashtags incluindo #Os4Ds e #PMEoperando
- ATENCAO: nao encerrar a serie. Tease pro Post 7 (6 tecnicas, Seg 26/05) obrigatorio

### Para Thumb (so prompt-md)

- Conceito da rotacao: Foto Real + Soco — "assinatura humana" (mao com caneta sobre documento)
- Money line sobreposta: QUEM ASSINA EMBAIXO NAO E A IA. E VOCE.
- Paleta: tons naturais da foto + tipografia grafite ou creme + dourado de coesao
- Header "D4 DILIGENCE" + footer com credito + serie + post 6 de 7 + CC BY-NC-SA 4.0
- Acentos PT-BR (DILIGENCE — sem acento; mas o footer tem palavras acentuadas)
- Entrega apenas thumbnail-prompt.md
- Variantes documentadas na secao 8 se a foto principal nao bater

### Para Revisar

- Score minimo 4.0/5
- Verificar que o post distingue D4 (governanca proporcional) do Auditor (governanca paralisante)
- Verificar money line isolada (1 paragrafo, 6-12 palavras, 2+ caps, sem hifen, sem aspas)
- Verificar CTA SALVA correto + pergunta tripla cobrindo Creation/Transparency/Deployment
- Verificar fechamento com #Os4Ds + #PMEoperando
- Verificar callbacks (especialmente D1 via "delegar pra IA nao e terceirizar a culpa" e D3 via "depois de avaliar, voce assina")
- Verificar TEASE pro Post 7 (obrigatorio — serie nao acabou aqui)
- Verificar fontes inline (Grant Thornton, EU AI Act, McKinsey)
- Verificar disclosure Anthropic
- Verificar que NAO encerrou a serie
- Verificar formato post.md (corpo em code block)
- Hifen zero
- Calibragem v1 aplicada — reprovar se faltar money line isolada OU CTA SALVA OU #PMEoperando

---

## 14. BLOCO DE NOTAS — RADAR (acompanhamento)

- [x] Radar Post 6 D4 Diligence — entregue 15/05/2026 → enviado pra Estrategia
- [ ] Estrategia Post 6 D4 — pendente
- [ ] Post Post 6 D4 — pendente (entregar post.md)
- [ ] Thumb Post 6 D4 — pendente
- [ ] Revisar Post 6 D4 — pendente
- [ ] Publicacao Post 6 D4 — Sex 23/05/2026, horario a confirmar (Radar recomenda 10h00 BRT)

### Estado final das rotacoes na serie (pos-Post 6)

**Inimigos (todos os 4 usados):**
- Post 3 D2 — Eterno Pilotante
- Post 4 Artigo — Consultor de Livro Traduzido
- Post 5 D3 — O Carimbador
- Post 6 D4 — Auditor de IA
- Post 7 fecho — sem inimigo definido (rotacao reabre — pode reusar qualquer um sem ser consecutivo)

**CTA share trigger:**
- Post 3 — REPASSA · Post 4 — MOSTRA · Post 5 — MARCA · Post 6 — SALVA · Post 7 — MANDA (unica disponivel)

**Thumbnail (conceitos anti-padrao):**
- Post 3 — Screenshot Vazado · Post 4 — Foto Real + Soco · Post 5 — Meme com Classe · Post 6 — Foto Real + Soco (segunda vez, nao consecutivo) · Post 7 — rotacao livre (recomendacao pessoal: Screenshot Vazado ou Meme com Classe pra fechar)

---

FIM DO BLOCO. Pronto para entrega a Estrategia D4.
