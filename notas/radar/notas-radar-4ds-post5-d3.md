# NOTAS RADAR — POST 5 SERIE OS 4Ds DA IA · D3 DISCERNMENT (deep-dive)

> STATUS: CONCLUIDO
> Data publicacao alvo: Qua 21/05/2026 09h00 BRT (confirmado — mesma janela do Post 2 D1, coerente)
> Pasta destino: posts/2026-05-21_discernment-d3/
> Tipo: post deep-dive — terceiro da serie
> Funcao na serie: terceiro D, abre a segunda metade (avaliar o que a IA entregou)
> Calibragem de viralizacao v1 aplicada (aprovada 13/05/2026)
> Entregavel do Post agora e post.md com corpo em code block (politica de 14/05) — ver secao 13
> Pesquisa concluida: 14/05/2026 — Radar agent

---

## RESUMO EXECUTIVO (1 paragrafo)

Os Posts 1 a 4 ensinaram a decidir (D1), descrever (D2) e escolher o modo de operacao (artigo dos 3 modos). O Post 5 desce no D3: depois que a IA entregou, voce SABE AVALIAR o que veio? A pesquisa de 2026 mostra que a maioria nao avalia. O Resume Now AI Oversight Gap Report (abril 2026) mostra que 1 em cada 3 trabalhadores raramente ou so as vezes revisa o output da IA antes de usar, e 18% confiam no que veio sem mexer. A Connext Global (janeiro 2026) mostra que so 17% acham que IA no trabalho e confiavel sem supervisao humana. E o Founder Reports (abril 2026) mostra que 45% ja tiveram que refazer trabalho de colega que confiou demais na IA. O ponto cego e que erro de IA nao chega feio: chega bem escrito, fluente, confiante. Anthropic AI Fluency divide D3 em 3 sub-componentes: Product Discernment (o resultado esta certo?), Process Discernment (como ela chegou la?) e Performance Discernment (o jeito dela funciona pra voce?). Inimigo recomendado: O CARIMBADOR (novo) — quem aprova output de IA porque "ta bem escrito", confunde fluencia com correcao. Pronto pra Estrategia.

---

## 1. EXTRACAO ANTHROPIC — D3 DISCERNMENT (3 sub-componentes)

### Definicao oficial

> "Discernment is the ability to thoughtfully and critically evaluate what AI produces, how it produces it, and how it behaves. Discernment works hand-in-hand with Description in a continuous feedback loop."
> Fonte: 1.6_Discernment_Summary_16x9.pdf — Anthropic, Dakan e Feller, 2025, CC BY-NC-SA 4.0

**Insight de leitura do Radar:** o material diz explicitamente que Discernment trabalha em LOOP CONTINUO com Description (D2). Ou seja: voce descreve, a IA entrega, voce avalia, voce re-descreve. D3 nao e uma etapa final, e a outra metade do D2. Esse e um gancho narrativo forte pro post — callback direto pro Post 3.

### Os 3 sub-componentes (definicao + exemplo + aterramento PME)

| Sub-D3 | Definicao oficial Anthropic | O que a pessoa pergunta | Aterramento PME brasileira | Falha tipica |
|--------|----------------------------|-------------------------|----------------------------|--------------|
| **Product Discernment** | Evaluating the quality of what AI produces (accuracy, appropriateness, coherence, relevance). | "O resultado em si esta certo, coerente, adequado e relevante?" | A IA escreveu a proposta comercial. O numero do desconto bate? O nome do cliente esta certo? A oferta existe mesmo? | Aceitar porque "ficou bem escrito". Confundir fluencia com correcao. |
| **Process Discernment** | Evaluating how the AI arrived at its output, looking for logical errors, lapses in attention, or inappropriate reasoning steps. | "COMO ela chegou nesse resultado? O raciocinio fecha? A fonte existe?" | A IA disse que "o setor cresceu 23%". De onde veio esse numero? Ela inventou? Cruzou o que com o que? | Nao olhar o caminho. Aceitar a conclusao sem checar o raciocinio. E onde mora a alucinacao. |
| **Performance Discernment** | Evaluating how the AI behaves during your interaction, considering whether its communication style is effective for your needs. | "O JEITO dela funciona pra mim? O tom serve? Ela esta me desafiando ou so concordando?" | A IA virou puxa-saco: concorda com tudo, nao questiona, valida ideia ruim. O estilo dela esta te servindo ou te embalando? | Nao perceber que a IA so esta concordando. Estilo agradavel mascarando falta de valor. |

### Conexao com o glossario (AI_Fluency_vocabulary_cheat_sheet.pdf)

- **Hallucination**: "A type of error when AI confidently states something that sounds plausible, but is actually incorrect." — esta e a definicao-chave do post. O erro da IA e CONFIANTE e PLAUSIVEL. Por isso passa sem Discernment.
- **Bias**: padroes sistematicos no output que favorecem ou desfavorecem grupos — entra em Product Discernment.
- **Knowledge cutoff date**: a IA nao sabe o que aconteceu depois do treino — entra em Process Discernment (a fonte pode estar desatualizada).
- **Chain-of-thought prompting**: pedir o raciocinio passo a passo — e a ferramenta que ALIMENTA o Process Discernment. Pra avaliar o caminho, voce precisa ver o caminho.

---

## 2. DADOS NOVOS — AVALIACAO E VERIFICACAO DE OUTPUT IA (3 dados solidos)

Todos com fonte + ano + contexto. Dados dos Posts 1-4 (MIT 95%, McKinsey 6%, Sebrae 44%, Workday 37%, Rev 3x alucinacao, Stack Overflow 66%, MIT Sloan, Gartner 40%, S&P 42%) seguem como pano de fundo — NAO repetir como hook.

### DADO 1 — Resume Now AI Oversight Gap Report: 1 em 3 trabalhadores raramente revisa o output da IA

> Mais de 1 em cada 3 trabalhadores (35%) diz que raramente ou so ocasionalmente revisa o output gerado por IA antes de usar. Alem disso, 18% dizem que normalmente confiam no output da IA do jeito que veio.

- Fonte: Resume Now, AI Oversight Gap Report, abril 2026 (mais de 1.000 adultos empregados nos EUA)
- URL: https://www.cpapracticeadvisor.com/2026/04/08/ai-slop-survey-a-third-of-workers-rarely-check-ai-output-before-using-it/181191/
- Por que importa pro D3: e o dado-ancora. A falha de Discernment nao e teorica, e estatistica. 1 em 3 simplesmente nao avalia.
- Como usar: hook ou abertura. "1 em cada 3 pessoas nao revisa o que a IA entregou antes de usar (Resume Now, 2026). Nao porque sao preguicosas. Porque o erro da IA nao chega feio."

### DADO 2 — Connext Global: so 17% acham IA confiavel sem supervisao humana

> Apenas 17% dos adultos que usam IA no trabalho dizem que a IA pode rodar sozinha com supervisao humana minima. 70% dizem que a confiabilidade vem de IA mais revisao leve (35%) ou IA com supervisao humana dedicada (35%).

- Fonte: Connext Global, AI Oversight Survey, janeiro 2026
- URL: https://www.businesswire.com/news/home/20260218894481/en/Only-17-Say-Workplace-AI-Is-Reliable-Without-Human-Oversight-New-Connext-Global-Survey-Finds
- Por que importa pro D3: prova que as pessoas SABEM que precisa avaliar (so 17% confia cego) mas o Dado 1 mostra que na pratica nao avaliam. O gap entre o que se sabe e o que se faz e o tema do post.
- Como usar: contraste com o Dado 1. "Todo mundo concorda que precisa revisar. Quase ninguem revisa. Esse e o D3."

### DADO 3 — Founder Reports: 45% ja refizeram trabalho de colega que confiou demais na IA

> 45% dos trabalhadores ja tiveram que consertar ou refazer o trabalho de um colega porque ele confiou demais na IA. (89% ja usaram IA no trabalho, 38% usam diariamente.)

- Fonte: Founder Reports, AI in the Workplace Survey, abril 2026
- URL: https://founderreports.com/ai-in-the-workplace-statistics/
- Por que importa pro D3: o custo da falta de Discernment nao fica com quem errou. Vira retrabalho do time inteiro. Numero perfeito pra CEO PME visualizar.
- Como usar: na parte do custo. "A conta da falta de Discernment nao para em quem colou o output. 45% ja refizeram o trabalho de um colega que confiou demais na IA (Founder Reports, 2026)."

### DADO BONUS (opcional — Estrategia decide)

> Estudo de 2025 sobre avaliacao humana de sugestoes de IA: participantes ceticos em relacao a IA detectaram erros de forma mais confiavel e tiveram mais acerto, enquanto os favoraveis a automacao exibiram excesso de confianca perigoso no algoritmo (automation bias).
- Fonte: estudo "Bias in the Loop", arXiv 2025
- URL: https://arxiv.org/html/2509.08514v1
- Uso possivel: prova que o ceticismo treina o olho. Discernment e habilidade, nao desconfianca generica. Bom pra fechar o post no tom "nao e ser do contra, e saber olhar".
- Contraponto positivo (se precisar de respiro): pesquisa Microsoft mostra que 86% ja tratam output de IA como ponto de partida, nao resposta final — ou seja, da pra treinar o reflexo.

**Recomendacao Radar:** DADO 1 (Resume Now 35%) como hook + DADO 3 (Founder 45% retrabalho) no custo + DADO 2 (Connext 17%) como contraste do gap. DADO BONUS so se o post tiver folego.

---

## 3. RECOMENDACAO DE INIMIGO — O CARIMBADOR (novo inimigo, justificativa)

**Inimigo recomendado: O CARIMBADOR — novo inimigo, proposto pra esta pauta.**

### Por que NENHUM dos 3 inimigos existentes serve pra D3

| Inimigo | Por que NAO casa com Discernment |
|---------|----------------------------------|
| Eterno Pilotante | Problema dele e PARALISIA (testa, nao decide). D3 e sobre quem age RAPIDO DEMAIS e aceita sem avaliar. E o oposto. Reusar aqui confundiria a mensagem. |
| Consultor de Livro Traduzido | Usado no Post 4 — nao pode repetir consecutivo (regra dura da calibragem). |
| Auditor de IA | Reservado pro Post 6 D4 Diligence. E, ironicamente, o Auditor avalia DEMAIS (12 reunioes) — tambem nao e o perfil de quem falha em Discernment. |

### O novo inimigo: O CARIMBADOR

- **Comportamento:** recebe o output da IA, bate o olho, acha que "ta bem escrito", carimba e manda. Confunde texto fluente com texto correto. Confunde IA confiante com IA certa. Nunca pergunta "de onde veio esse numero?". E o gestor que aprova o relatorio sem ler ate o fim porque "a IA ja fez".
- **Por que casa perfeitamente com D3:** o Carimbador e a personificacao exata da falha de Discernment. Ele nao faz Product Discernment (nao checa se o resultado esta certo), nem Process Discernment (nao olha o caminho), nem Performance Discernment (nao percebe que a IA so esta concordando com ele).
- **Por que casa com o publico:** o Carimbador e um perfil de AUTORIDADE — diretor, CEO, socio. Gente que assina embaixo. Exatamente o publico do Apolo. O reconhecimento e desconfortavel e por isso gera comentario e share.
- **Gancho narrativo:** "Tem um gestor que confunde 'aprovar' com 'ler'. A IA entrega, ele bate o olho, acha bonito, carimba. Funciona ate o dia em que o numero que a IA inventou chega no cliente."
- **Variacao cirurgica:** "O Carimbador nao revisa a IA. Ele homologa o erro dela com a propria assinatura."

### Decisao pra Estrategia

O Carimbador pode ser (a) um QUARTO inimigo permanente da rotacao, ou (b) um inimigo pontual so pra este post. Recomendacao Radar: **canonizar como 4o inimigo** — ele e tao reconhecivel quanto os 3 originais e cobre uma falha que os outros nao cobrem (excesso de confianca no output). Mas a decisao final e da Estrategia/Apolo. Se a serie quiser manter so 3, usar como pontual.

---

## 4. TRES CANDIDATAS DE MONEY LINE (formato screenshot-ready)

Todas dentro da regra dura: 6-12 palavras, 2+ palavras CAPS LOCK, sem hifen, sem aspas, sem fonte dentro, paragrafo isolado. Aprovadas nos 4 testes (screenshot, incomodo, sabor de operador, pernada).

### CANDIDATA 1 (recomendada — captura o insight central do D3)

> A IA NAO ERRA FEIO. ELA ERRA BONITO.

- 8 palavras. CAPS em IA, ERRA, ERRA (anafora).
- Screenshot: PASSA — aforismo redondo, funciona solto.
- Incomodo: ALTO — desmonta a desculpa do Carimbador ("mas tava bem escrito").
- Sabor de operador: PASSA — soa como veredicto de quem ja foi pego por um erro fluente.
- Pernada: PASSA — invertida ("a IA erra feio, nao erra bonito") vira justamente a ilusao que o post combate.

### CANDIDATA 2 (a tese dita plana)

> OUTPUT BEM ESCRITO NAO E OUTPUT CERTO.

- 7 palavras. CAPS em OUTPUT, OUTPUT.
- Screenshot: PASSA — frase de manual, citavel.
- Incomodo: PASSA — cutuca quem aprova pela aparencia.
- Sabor de operador: PASSA — direto, sem floreio.
- Pernada: PASSA — invertida vira a confusao que o Carimbador faz.

### CANDIDATA 3 (amarra o inimigo)

> VOCE NAO REVISOU A IA. VOCE SO CARIMBOU.

- 8 palavras. CAPS em VOCE, REVISOU, CARIMBOU.
- Screenshot: PASSA — bofetada curta.
- Incomodo: ALTO — nomeia o comportamento do leitor-Carimbador.
- Sabor de operador: PASSA — afirmacao seca.
- Pernada: PASSA — invertida vira elogio nonsense.

### RECOMENDACAO RADAR ENTRE AS 3

**Candidata 1 (A IA NAO ERRA FEIO. ELA ERRA BONITO)** e a mais forte — ela explica POR QUE o Discernment e dificil em 8 palavras. Candidata 3 e otima se Estrategia quiser amarrar money line ao inimigo Carimbador. Candidata 2 funciona melhor como frase de apoio no corpo.

**Combinacao otima:** Candidata 1 como money line isolada antes do CTA. Candidata 3 pode aparecer no paragrafo do inimigo. Candidata 2 de reserva.

---

## 5. CTA SHARE TRIGGER — VARIACAO RECOMENDADA

### Estado da rotacao

- Post 3 D2 — REPASSA (Variacao 4)
- Post 4 Artigo — MOSTRA (Variacao 5)
- Post 6 D4 — SALVA (Variacao 2) reservada
- **Post 5 D3 — disponiveis: MARCA (Variacao 1) ou MANDA (Variacao 3)**

### Recomendacao Radar: Variacao 1 (MARCA alguem)

A calibragem diz que Variacao 1 e "mais ofensiva, cutuca o sentido de erro do parceiro — usar em posts de critica aberta". O Post 5 e exatamente isso: critica aberta ao Carimbador. Encaixe perfeito.

> Marca aqui o gestor que aprova relatorio de IA sem ler ate o fim. Qual dos tres voce nunca checa: o resultado, o caminho que a IA usou, ou o jeito que ela fala com voce?

- Share trigger: MARCA (Variacao 1).
- Pergunta aberta com escolha tripla (Product / Process / Performance Discernment) — gera comentarios estruturados, mantem o padrao dos posts da serie.
- Tom: ofensivo na medida, casa com post de critica.

### Alternativa: Variacao 3 (MANDA pra alguem especifico)

> Manda esse post pro socio que confia no numero da IA sem perguntar de onde ele veio. Voces estao revisando a IA ou estao homologando o erro dela?

Variacao 3 tambem e ofensiva, mas MARCA gera mais acao publica no LinkedIn (marcar aparece no feed do marcado). Radar recomenda MARCA.

### NAO usar

- MOSTRA (Variacao 5) — usada no Post 4, consecutiva.
- SALVA (Variacao 2) — reservada pro Post 6 D4.
- REPASSA (Variacao 4) — usada no Post 3.

---

## 6. CASOS PME OBSERVAVEIS (sem nome de empresa)

Dois cenarios. Estrategia escolhe UM (recomendacao: Caso 1 — o numero inventado e o mais visceral pra CEO).

### CASO 1 — Escritorio de servicos manda relatorio com numero que a IA inventou (Process Discernment falhou)

**O que aconteceu:** Escritorio de servicos profissionais (consultoria ou contabilidade, ~60 pessoas) usa IA pra montar o relatorio mensal de um cliente. A IA escreve um paragrafo solido afirmando que "o segmento do cliente cresceu 23% no trimestre". Numero plausivel, frase bem construida. Ninguem perguntou de onde veio. Relatorio carimbado, enviado ao cliente.

**Onde o D3 quebrou:**
- **Process Discernment:** ninguem checou COMO a IA chegou nos 23%. Ela nao cruzou fonte nenhuma — alucinou um numero que soava certo. O knowledge cutoff dela nem alcancava o trimestre.
- **Product Discernment:** o output estava coerente e bem escrito, entao pareceu correto. Fluencia mascarou a invencao.

**Resultado:** o cliente, que conhecia o proprio setor, viu o numero errado na primeira pagina. Credibilidade do escritorio arranhada num relatorio inteiro que estava, no resto, correto.
**O que faltou:** uma pergunta. "De onde veio esse numero?"

### CASO 2 — Varejo publica campanha com afirmacao factual errada sobre o proprio produto (Product Discernment falhou)

**O que aconteceu:** Varejo regional pede pra IA escrever a campanha de uma promocao. A IA entrega um texto envolvente que afirma um beneficio do produto que nao e verdade (ou troca a data da promo, ou o valor do desconto). O time leu, achou "muito bem escrito", aprovou, publicou.

**Onde o D3 quebrou:**
- **Product Discernment:** ninguem avaliou a PRECISAO da afirmacao, so a qualidade da escrita. O texto estava bom. O fato estava errado.
- **Performance Discernment:** a IA soou tao confiante que ninguem desconfiou.

**Resultado:** cliente cobrou o beneficio prometido que nao existia. Reclamacao publica, time apagando incendio, promo suspensa.
**O que faltou:** separar "esta bem escrito" de "esta correto".

### Recomendacao Radar

**Usar Caso 1 como principal** (numero inventado no relatorio). Mais visceral pro publico C-level, ilustra Process Discernment que e o sub-componente menos intuitivo, e o "de onde veio esse numero?" vira frase memoravel. **Caso 2 pode entrar como contraponto curto** de 2 linhas pra cobrir Product Discernment, se o post tiver espaco.

---

## 7. CONEXAO NARRATIVA — CHECKLIST DE COESAO

| Item | Como fazer |
|------|-----------|
| Callback Post 4 Artigo 3 modos (Seg 19/05) | "Segunda mapeei os 3 modos de operar com IA. Mas escolher o modo nao basta. Voce precisa saber AVALIAR o que ela entregou." |
| Callback Post 3 D2 Description (Sex 16/05) | FORTE — o material Anthropic diz que Discernment trabalha em loop com Description. "O D2 foi sobre descrever bem. O D3 e a outra metade do loop: avaliar o que voltou e re-descrever." |
| Callback Posts 1 e 2 | Breve. "OS 4Ds: delegar (D1), descrever (D2), avaliar (D3)..." |
| Disclosure Anthropic + CC BY-NC-SA 4.0 | OBRIGATORIO. Padrao da serie. |
| Tease Post 6 D4 Diligence (Sex 23/05) | "Sexta fecho o ultimo D: depois de avaliar, quem ASSINA embaixo? Quem responde pelo output? Esse e o D4 Diligence." |
| Tease Post 7 fecho (Seg 26/05) | "E dia 26 fecho a serie com as 6 tecnicas praticas de prompt que aterram tudo isso." |
| Hashtag-assinatura | #InteligenciaArtificial #Anthropic #PME #Os4Ds #PMEoperando |
| Money line isolada | Recomendada: Candidata 1 (A IA NAO ERRA FEIO. ELA ERRA BONITO.) |
| CTA share trigger | MARCA alguem (Variacao 1) |

---

## 8. SUGESTAO DE THUMBNAIL (conceito MEME COM CLASSE — politica prompt-only)

### Estado da rotacao de conceitos anti-padrao

- Post 3 D2 — Screenshot Vazado
- Post 4 Artigo — Foto Real + Soco
- **Post 5 D3 — Meme com Classe (3o conceito da rotacao)**

### Avaliacao: o conceito MEME COM CLASSE CASA com D3? SIM.

D3 e sobre niveis de profundidade na avaliacao do output — do "nem leu" ate "avaliou ate o estilo da IA". Isso mapeia DIRETO no formato de meme **EXPANDING BRAIN** (cerebro expandindo), que e justamente sobre niveis crescentes de iluminacao. O meme ensina o framework E viraliza. Casa perfeito.

### Conceito recomendado — EXPANDING BRAIN dos 4 niveis de Discernment

Formato de meme reconhecivel (4 paineis verticais, cerebro crescendo), executado com a identidade visual da serie (NAO o meme cru de internet — versao "com classe"):

- **Painel 1 (cerebro pequeno):** "copiar e colar o que a IA respondeu"
- **Painel 2 (cerebro normal):** "ler o resultado antes de usar" — *Product Discernment*
- **Painel 3 (cerebro brilhando):** "checar COMO a IA chegou la" — *Process Discernment*
- **Painel 4 (cerebro galaxia):** "avaliar ate o jeito que a IA fala com voce" — *Performance Discernment*

Header pequeno no topo: "D3 DISCERNMENT". Footer: credito Apolo + serie + post 5 de 7 + CC BY-NC-SA 4.0.

**Por que ganha:**
1. Usa o 3o conceito da rotacao (Meme com Classe) sem repetir P3 nem P4.
2. O meme ENSINA os 3 sub-componentes do D3 — conteudo e formato no mesmo lugar.
3. Expanding brain e altissimo compartilhamento (formato nativo de internet).
4. Executado com a paleta e tipografia da serie, perde a cara de meme tosco e ganha a cara de "infografico que e meme" — resolve o risco C-level.

### Gestao do risco C-level (anotado na memoria de conceitos)

A memoria alerta: "meme pode ser informal demais pra parte do publico C-level". Mitigacao:
- Usar a paleta sobria da serie (creme + dourado + verde-musgo Anthropic), NAO cores berrantes de meme.
- Tipografia da serie, nao Impact branca com contorno preto.
- Os textos dos paineis sao conteudo real do framework, nao piada — o humor esta na ESTRUTURA reconhecivel, nao no texto.
- Resultado: o C-level le como "infografico esperto", o publico mais novo le como "meme". Ganha os dois.

### Paleta sugerida (NAO repetir navy do P1, terra-oliva do P2, e respeitar que P3/P4 ja usaram suas paletas)

- Fundo creme `#F4EFE5` (coesao da serie)
- Paineis: degrade sutil de cinza-claro (painel 1) ate verde-musgo `#5A6B3B` (painel 4) — o "verde Anthropic" como destino iluminado
- Cerebro e tipografia: grafite `#1A1F2C`
- Header "D3 DISCERNMENT" e detalhes: dourado `#C9A14A` (o fio dourado da serie)

### Fallback (se Estrategia achar o meme arriscado demais)

Se o Meme com Classe for vetado, reabrir pra: versao do **Screenshot Vazado** mas mostrando um output de IA com um erro plausivel grifado em marca-texto e a legenda "voce teria pego?". Mantem o conceito anti-padrao, ja foi usado no P3 mas com angulo diferente. Radar recomenda tentar o meme primeiro — e o conceito da vez na rotacao e casa bem.

### Observacao de entrega

Politica prompt-only vigente: terminal Thumbnail entrega apenas o thumbnail-prompt.md (prompt cinematografico self-contained). Acentos PT-BR corretos no header e textos all-caps (DISCERNMENT, e qualquer palavra acentuada). Dimensao: thumb de feed (quadrada ou 1200x1500 vertical, conforme padrao da serie).

---

## 9. RISCOS, CONTRAS E O QUE NAO INCLUIR

### Riscos da pauta

1. **Sobreposicao com D2 Description (Post 3).** O proprio material Anthropic diz que D3 e D2 trabalham em loop. Risco de o post parecer "parte 2 do D2". Antidoto: deixar explicito que D2 e a IDA (descrever o pedido) e D3 e a VOLTA (avaliar o que veio). Usar o loop como ponte, nao como confusao.
2. **Sobreposicao com D4 Diligence (Post 6).** D3 = avaliar o output. D4 = responder por ele, assinar embaixo. Linha tenue. Antidoto: D3 e sobre OLHAR criticamente, D4 e sobre ASSUMIR a responsabilidade. O tease pro Post 6 deve marcar essa fronteira, nao borrar.
3. **Tom pode soar anti-IA / alarmista.** O post fala de erro, alucinacao, retrabalho. Risco de virar "cuidado com a IA, ela erra". Antidoto: o angulo nao e "a IA e perigosa", e "voce precisa de uma habilidade — Discernment — que se treina". O DADO BONUS (ceticos acertam mais) e o contraponto Microsoft (86% ja tratam como ponto de partida) equilibram.
4. **Dados sao majoritariamente de trabalhadores EUA.** Aterrar como tendencia comportamental ("o reflexo de carimbar e humano, nao e so gringo"), nao como dado direto de PME BR.
5. **Inimigo novo (O Carimbador) ainda nao foi validado pelo Apolo.** Estrategia precisa aprovar antes do Post escrever. Se vetado, plano B e usar Eterno Pilotante com angulo forcado (fraco) ou rodar o post sem inimigo nomeado (perde atrito).

### O que NAO falar

- Cliches banidos: revolucao, game-changer, disruptivo, transformador, futuro do trabalho.
- NAO repetir hooks dos Posts 1-4 (MIT 95%, McKinsey 6%, Workday 37%, Stack Overflow 66%, Gartner 40%, S&P 42%). Podem aparecer de passagem no corpo.
- NAO citar concorrentes pelo nome (RDD, Cavallini, Microsoft como concorrente, Mastertech, Fundacao Bradesco). Microsoft pode ser citada como FONTE de dado, nao como concorrente.
- NAO mencionar marcas saturadas: Hostinger, Magalu, Klarna, Snap, Nvidia (cooldown).
- NAO confundir Discernment com desconfianca cega. Nao e "nao confie na IA". E "saiba avaliar".
- NAO antecipar D4 alem do tease. Foco nos 3 sub-componentes do D3.
- NAO tratar Discernment como etapa final isolada — e loop continuo com Description (fidelidade ao material).
- Hifen e travessao = zero no corpo final.

### Tradeoff narrativo

O Post 5 e o terceiro deep-dive da serie e o segundo seguido com estrutura "definicao + 3 sub-componentes" (igual ao D2). Risco de fadiga de formato. Antidoto: abrir com o inimigo Carimbador em cena (nao com a definicao), liderar com o dado forte (35% nao revisam) e usar a money line "a IA nao erra feio, erra bonito" cedo como fisgada. A estrutura dos 3 sub-componentes entra depois, ja com o leitor fisgado.

---

## 10. FONTES PRIORITARIAS PARA CITAR (top 3 — Post escolhe)

Ordem de impacto narrativo:

1. **Resume Now, AI Oversight Gap Report, 2026** — "1 em 3 trabalhadores raramente revisa o output da IA; 18% confiam do jeito que veio" (dado-ancora, comportamental, fresco)
2. **Founder Reports, AI in the Workplace, 2026** — "45% ja refizeram trabalho de colega que confiou demais na IA" (custo, visualizavel pra CEO)
3. **Connext Global, AI Oversight Survey, 2026** — "so 17% acham IA confiavel sem supervisao humana" (mostra o gap entre saber e fazer)

Anthropic AI Fluency (Dakan/Feller, 2025, CC BY-NC-SA 4.0) — citacao obrigatoria de framework (disclosure D4), nao "dado de pesquisa".

---

## 11. HORARIO SUGERIDO

**Confirmado: Qua 21/05/2026 09h00 BRT.**

Quarta as 9h e a mesma janela que funcionou no Post 2 D1 (deep-dive denso, manha cedo, antes da primeira reuniao). Coerente repetir pra outro deep-dive. Diferente da janela do Post 4 (segunda 10h, artigo). Tempo de margem confortavel entre 14/05 (hoje) e 21/05 pra Estrategia + Post + Thumb + Revisar.

---

## 12. NOTAS PARA OS PROXIMOS TIMES

### Para Estrategia (proxima a entrar)

**Decisoes em aberto:**
- Inimigo: aprovar O CARIMBADOR (novo) e decidir se vira 4o inimigo permanente ou pontual. Radar recomenda canonizar.
- Money line: Candidata 1 (recomendada, captura o insight) vs Candidata 3 (amarra o inimigo) vs Candidata 2 (apoio)
- CTA: MARCA (Variacao 1, recomendada) vs MANDA (Variacao 3)
- Caso PME: Caso 1 sozinho (recomendado) vs Caso 1 + contraponto Caso 2
- Dados: 3 ancoras (Resume Now + Founder + Connext) vs incluir DADO BONUS
- Thumbnail: aprovar Meme com Classe / Expanding Brain ou acionar fallback

**Validar:**
- Inimigo O Carimbador encaixa e tem aprovacao? (Radar recomenda forte, mas e inimigo novo — precisa de OK)
- Tom observador-operador, critico sem ser alarmista nem anti-IA
- Calibragem v1 aplicada (inimigo, CTA share trigger, money line isolada, hashtag-assinatura)

### Para Post (depois de Estrategia)

- **Entregavel agora e post.md** (nao .txt) — corpo do LinkedIn em bloco de codigo, sem markdown dentro do corpo, com quebras de linha exatas. Primeiro comentario tambem em code block. (politica de 14/05)
- Limite ~1.300 chars zero-click no corpo
- Acentos PT-BR corretos
- Hifen e travessao zero no corpo
- 3 a 5 caps lock (recomendados: D3, DISCERNMENT, e os 3 sub-componentes — escolher 1 ou 2 pra destacar, nao todos)
- Disclosure Anthropic obrigatorio
- Citar fonte entre parenteses em todo dado (Resume Now 2026, Founder Reports 2026, Connext Global 2026)
- Money line em paragrafo ISOLADO antes do CTA
- Fechar com hashtags incluindo #Os4Ds e #PMEoperando

### Para Thumb (so prompt-md, politica vigente)

- Conceito da rotacao: Meme com Classe (3o conceito) — Expanding Brain dos 4 niveis de Discernment
- Executar com identidade visual da serie pra mitigar risco C-level (ver secao 8)
- Paleta: creme + degrade ate verde-musgo + dourado
- Acentos PT-BR corretos em todo texto all-caps (DISCERNMENT etc.)
- Footer: credito Apolo + serie + post 5 de 7 + CC BY-NC-SA 4.0
- Entrega apenas thumbnail-prompt.md (politica de 02/05)
- Fallback documentado na secao 8 se o meme for vetado

### Para Revisar

- Score minimo 4.0/5
- Verificar que o post distingue D3 de D2 (loop ida/volta) e de D4 (avaliar vs responder)
- Verificar money line isolada (1 paragrafo, 6-12 palavras, 2+ caps, sem hifen, sem aspas)
- Verificar CTA com share trigger nomeado (MARCA ou MANDA) — e que NAO repete MOSTRA (P4) nem REPASSA (P3)
- Verificar fechamento com #Os4Ds + #PMEoperando
- Verificar callbacks (Posts 3 e 4 fortes, 1 e 2 breves) e teases (Posts 6 e 7)
- Verificar fontes inline (Resume Now, Founder Reports, Connext Global)
- Verificar disclosure Anthropic
- Verificar que o tom NAO ficou anti-IA / alarmista
- Verificar formato post.md (corpo em code block, sem markdown vazando)
- Hifen zero
- Calibragem v1 aplicada — reprovar se faltar money line isolada OU CTA share trigger OU #PMEoperando

---

## 13. BLOCO DE NOTAS — RADAR (acompanhamento)

- [x] Radar Post 5 D3 Discernment — entregue 14/05/2026 → enviado pra Estrategia
- [ ] Estrategia Post 5 D3 — pendente
- [ ] Post Post 5 D3 — pendente (entregar post.md)
- [ ] Thumb Post 5 D3 — pendente
- [ ] Revisar Post 5 D3 — pendente
- [ ] Publicacao Post 5 D3 — Qua 21/05/2026 09h00 BRT

### Estado das rotacoes na serie (controle)

**Inimigos:**
- Post 3 D2 — Eterno Pilotante
- Post 4 Artigo — Consultor de Livro Traduzido
- Post 5 D3 — O CARIMBADOR (novo — recomendado aqui, pendente aprovacao)
- Post 6 D4 — Auditor de IA (reservado)
- Post 7 fecho — sem inimigo definido

**CTA share trigger:**
- Post 3 — REPASSA · Post 4 — MOSTRA · Post 5 — MARCA (recomendado) · Post 6 — SALVA (reservado) · Post 7 — MANDA disponivel

**Thumbnail (conceitos anti-padrao):**
- Post 3 — Screenshot Vazado · Post 4 — Foto Real + Soco · Post 5 — Meme com Classe (recomendado) · Posts 6 e 7 — rotacao reabre

---

FIM DO BLOCO. Pronto para entrega a Estrategia D3.
