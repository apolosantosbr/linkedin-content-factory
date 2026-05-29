# ESTRATEGIA — POST TESE · ITAU IARA — IA DEIXOU DE SER PROJETO E VIROU INFRAESTRUTURA

> STATUS: PRONTO PRA DISPARAR Post + Thumb em paralelo
> Tipo: TESE / analise (NAO case narrativo) — Itau e a PROVA, nao o protagonista — IMAGEM DE ATENCAO
> Data publicacao: TERCA 26/05/2026, ~9h BRT (horario a confirmar com Apolo)
> Pasta: posts/2026-05-26_itau-iara/
> Entregavel do Post: post.md (corpo em code block — politica de 14/05)
> Tamanho-alvo: 1.800-2.200 chars (calibragem v2.1)
> **REGRA DURA V2.1: POST INDEPENDENTE.** Zero callback a serie 4Ds. Sem #Os4Ds. Sem D1/D2/D3/D4.
> **VARIACAO DE FORMATO (instrucao Apolo):** o Verdi de hoje foi CASE NARRATIVO. Este e TESE. Abre com a tese, usa o Itau como prova, fecha em 3 licoes. NAO copiar a estrutura do Verdi.
> **FORMULA VIRAL mantida:** empresa nomeada + movimento de IA especifico + playbook transferivel + tom analitico (NAO PR) + numeros com fonte.

---

## 0. VERIFICACAO DE DADOS (reconfirmada na fonte em 25/05/2026)

Fiz WebFetch nas 3 fontes do Radar. Resultado e 3 alertas que MUDAM o enquadramento:

| Dado | Status | Fonte confirmada |
|------|--------|------------------|
| Iara = "a camada responsavel por orquestrar o uso de IA" centralizando modelos, bases de conhecimento, memoria persistente e governanca | **CONFIRMADO (2 fontes)** | TI Inside 13/05/2026 + Brasil247 20/05/2026 |
| +88% no volume de iniciativas de IA generativa em uso | **CONFIRMADO** | TI Inside 13/05/2026 ("ampliado em 88% o volume de iniciativas de IA generativa em uso nos primeiros tres meses de 2026") |
| -44% no custo unitario de processamento | **CONFIRMADO** | TI Inside 13/05/2026 ("queda de 44% no custo unitario de processamento") |
| ~60-70% das cargas ja operam em cloud | **CONFIRMADO** | TI Inside 13/05/2026 |
| Anunciado no Meet Itau Tech 05/05/2026, detalhado 13/05/2026 | **CONFIRMADO** | TI Inside + Brasil247 |
| Agentes de IA na engenharia de software + consultoria financeira autonoma | **CONFIRMADO (qualitativo, sem numero)** | TI Inside 13/05/2026 |
| Itau usa o agente de codigo "Devin" | **NAO VERIFICADO** — ver Alerta 3 | itforum (HTTP 403, nao abriu) |

**ALERTA 1 — o 44% NAO e resultado da IA nem recente.** A queda de 44% e no custo UNITARIO de processamento medida de **1T2018 a 1T2026 (8 anos)**, puxada pela **ida pra nuvem** (o proprio titulo da TI Inside amarra "com avanco da nuvem"). O hook do Radar ("parou de usar IA e passou a rodar em cima dela. Custo caiu 44%") insinua causalidade IA->44% que a fonte NAO sustenta. **Decisao:** o hook usa o 88% (numero recente e especifico de IA). O 44% entra no corpo enquadrado corretamente: queda de custo unitario ao longo de 8 anos, puxada pela nuvem. NUNCA afirmar que "a IA derrubou o custo 44%".

**ALERTA 2 — o 88% e ano contra ano, NAO "num trimestre".** E o volume de iniciativas de IA generativa em uso nos primeiros 3 meses de 2026 comparado ao mesmo periodo de 2025. **Decisao:** escrever "subiu 88% em um ano" ou "no primeiro trimestre de 2026 contra o ano anterior". NUNCA "cresceu 88% em um trimestre" (sugeriria 88% em 3 meses, falso).

**ALERTA 3 — Devin nao verificado.** O link itforum retornou HTTP 403 (nao consegui ler). As 2 fontes que abriram NAO citam "Devin". **Decisao:** o corpo NAO nomeia Devin. Usa o fato confirmado e generico: "agentes de IA ja entram no fluxo de engenharia de software do banco" (TI Inside). O nome Devin pode ser adicionado pelo Apolo SE ele conferir o artigo do itforum antes. Sinalizado no checklist.

**Nota de enquadramento (tese, nao case):** o Itau e PROVA da tese "IA virou infraestrutura". O heroi conceitual e a IDEIA (camada vs feature), nao o banco. Isso reforca o tom analitico e protege contra soar PR do Itau.

---

## 1. HOOK FINAL (texto pronto, Transformation Story + numero, ~127 chars)

> O maior banco do país parou de tratar IA como projeto e passou a rodar em cima dela. O uso de IA generativa subiu 88% em um ano.

**Justificativa:**
1. **Hook de TESE, nao de case** — abre com a transformacao conceitual (de projeto pra infraestrutura). Variacao deliberada vs o Verdi (que abriu nomeando o personagem).
2. **Curiosidade pelo nome** — "o maior banco do pais" segura o nome 1 linha; Itau e revelado no Bloco 2 (precisao factual garantida cedo, sem perder o gancho).
3. **Numero recente e defensavel** — 88% (1T2026 vs ano anterior). NAO usa o 44%, que tem ressalva factual (ver Alerta 1).
4. **Transformation Story** — "parou de X e passou a Y" e a propria espinha da tese.
5. **127/140 chars** — mobile cutoff respeitado.

---

## 2. ESTRUTURA EDITORIAL COMPLETA (10 blocos — texto-base, ~2.000 chars total)

### Bloco 1 — Hook Tese / Transformation Story (~127 chars)
```
O maior banco do país parou de tratar IA como projeto e passou a rodar em cima dela. O uso de IA generativa subiu 88% em um ano.
```

### Bloco 2 — Revela Itau + Iara, fixa a tese (~140 chars)
```
O banco é o Itaú. E a virada não foi lançar mais um produto com IA. Foi construir a Iara, o lugar por onde todo o uso de IA do banco passa.
```

### Bloco 3 — O que e a Iara (a prova da tese) (~255 chars)
```
A Iara não é um chatbot nem um app. É a CAMADA que orquestra modelos, bases de conhecimento, memória e regras num só lugar (TI Inside, 2026). Saiu do modo projeto aqui, piloto ali. Virou infraestrutura: tudo passa pelo mesmo trilho, sob a mesma governança.
```

### Bloco 4 — Os numeros (~285 chars)
```
Os números que o Itaú apresentou: o uso de IA generativa subiu 88% no primeiro trimestre de 2026 contra o ano anterior, e o custo unitário de processamento caiu 44% de 2018 pra cá, puxado pela ida pra nuvem (TI Inside, 2026). Agentes de IA já entram no fluxo de engenharia de software do banco.
```

### Bloco 5 — As 3 licoes transferiveis (~555 chars)
```
3 lições que dá pra tirar e usar em qualquer operação:

1. Trate IA como camada de operação, não como iniciativa de inovação solta. O ganho não vem do piloto bonito. Vem de virar parte de como a empresa roda todo dia.

2. Centralize em UM LUGAR SÓ: modelos, dados e regras juntos, no lugar de dez ferramentas avulsas que ninguém controla. Dez assinaturas soltas não viram infraestrutura.

3. Governança vem ANTES da escala, não depois. Quem espalha IA primeiro e organiza depois passa o resto do tempo limpando o que vazou.
```

### Bloco 6 — Reflexao / aterramento PME (~185 chars)
```
Você não precisa de uma Iara pra começar. Precisa parar de comprar IA por impulso, ferramenta a ferramenta, e decidir qual é a sua camada: onde os dados, as regras e os modelos vão morar.
```

### Bloco 7 — MONEY LINE isolada (paragrafo proprio, ~47 chars)
```
IA DEIXOU DE SER PROJETO. VIROU INFRAESTRUTURA.
```

### Bloco 8 — CTA principal bilateral (~148 chars)
```
Na sua empresa, IA é uma camada de operação ou ainda é um monte de ferramenta solta? Comenta o que você já centralizou e o que ainda está espalhado.
```

### Bloco 9 — CTA save secundario (~77 chars)
```
Salva esse post pra rever antes de assinar a próxima ferramenta de IA avulsa.
```

### Bloco 10 — Hashtags 3 PascalCase (~44 chars)
```
#InteligenciaArtificial #CaseBR #PMEoperando
```

**TOTAL ESTIMADO:** ~2.000 chars com quebras. Dentro do alvo (1.800-2.200). NAO comprimir abaixo de 1.800.

---

## 3. MAPA DE CAPS LOCK (3 momentos + money line isolada)

| # | Termo | Bloco | Funcao |
|---|-------|-------|--------|
| 1 | **CAMADA** | Bloco 3 | Cristaliza a tese — Iara e a CAMADA (echo da definicao oficial) |
| 2 | **UM LUGAR SÓ** | Bloco 5 Licao 2 | Emphasiza a centralizacao vs ferramentas avulsas |
| 3 | **ANTES** | Bloco 5 Licao 3 | Emphasiza a ordem contraintuitiva — governanca ANTES, nao depois |

**Money line** (Bloco 7) tem caps intrinsecas (IA DEIXOU DE SER PROJETO / VIROU INFRAESTRUTURA) — paragrafo isolado proprio, NAO soma no mapa. Total efetivo: 3 momentos + money line. Dentro de 3-5.

**Atencao Post:** NAO capitalizar "Itau", "Iara", "OpenAI" como sistema — sao nomes proprios. Acentos em caps: SÓ (agudo) em "UM LUGAR SÓ". Caps SO nos 3 termos acima + money line.

---

## 4. MONEY LINE CONFIRMADA + POSICIONAMENTO

### Money line PROPER (isolada, Bloco 7)
> IA DEIXOU DE SER PROJETO. VIROU INFRAESTRUTURA.

- 7 palavras. Caps integrais. Sem hifen, sem aspas, sem fonte dentro. Sem acentos a conferir (nenhuma das palavras leva acento).
- Posicao: paragrafo ISOLADO, linha em branco antes e depois, logo apos a reflexao (Bloco 6) e antes do CTA (Bloco 8).
- Funcao: e a propria tese em 7 palavras. Negacao + reframe (mesmo padrao que funcionou no iFood e no Verdi).
- Vai sobreposta na thumb com "INFRAESTRUTURA" como palavra-martelo dourada sobre a metafora de camadas.

**Sem frase de apoio adicional.** Money line solo ganha mais destaque.

---

## 5. CTA CONFIRMADO — PERGUNTA SUBSTANTIVA BILATERAL + SAVE SECUNDARIO

**Calibragem v2.1 plena:** SALVA preferido. MARCA e MANDA PROIBIDOS. CTA save secundario OBRIGATORIO.

CTA principal (Bloco 8):
```
Na sua empresa, IA é uma camada de operação ou ainda é um monte de ferramenta solta? Comenta o que você já centralizou e o que ainda está espalhado.
```

CTA save secundario (Bloco 9):
```
Salva esse post pra rever antes de assinar a próxima ferramenta de IA avulsa.
```

- **Pergunta bilateral** (o que ja centralizou + o que ainda esta espalhado). Forca comentario com 2 itens, naturalmente 15+ palavras (peso maximo do algoritmo).
- **NAO e engagement bait** — pede diagnostico concreto da propria operacao, NAO tag.
- **CTA save secundario explicito** — caso de uso concreto ("antes de assinar a proxima ferramenta de IA avulsa") que bate na dor do CEO PME (decisao de compra impulsiva de ferramentas).
- **NAO usa MARCA nem MANDA.**

---

## 6. THUMBNAIL — IMAGEM DE ATENCAO (metafora de CAMADAS / infraestrutura + money line)

**Conceito V1 (recomendado):** METAFORA DE INFRAESTRUTURA EM CAMADAS — um corte/secao mostrando estratos empilhados (como fundacao de um predio ou camadas geologicas), com a CAMADA DE BASE destacada como a fundacao sobre a qual tudo se apoia. Money line sobreposta. Paleta sobria navy/creme/dourado. Argumenta visualmente a tese: IA como o chao, nao como enfeite no topo.

**Por que muda de estilo (regra de variedade visual):** iFood = foto editorial de cozinha (quente). Verdi = mockup de chat dark UI + verde. Itau = GRAFICO EDITORIAL DE CAMADAS, paleta navy/creme/dourado sobria, conceitual. Tres conceitos, tres paletas, zero repeticao.

**Formato:** 1080x1350 (4:5 portrait).

### Cena (grafico editorial conceitual, NAO foto, NAO chat)
- Corte vertical mostrando 4 a 5 camadas horizontais empilhadas (estratos / fundacao arquitetonica / pavimentos).
- A camada de BASE (a mais larga, embaixo) e a fundacao, sutilmente iluminada em dourado — e a "camada de IA" sobre a qual as outras se apoiam. As camadas de cima (produtos, atendimento, operacao) repousam sobre ela.
- Estetica: editorial / arquitetonica / diagrama premium. Linhas limpas, sobrio, institucional. NAO infografico poluido, NAO render 3D cartoon, NAO neon.
- Opcional discreto: micro-rotulos sobrios nas camadas de cima (ex "produtos", "operação", "atendimento") e na base ("IA"). Sem exagero.

### Soco sobreposto — money line em 2 linhas (terco inferior, sobre faixa escura)
- Linha 1: `IA DEIXOU DE SER PROJETO.` em creme `#F4EFE5`, condensed sans caps peso 900
- Linha 2: `VIROU INFRAESTRUTURA.` com "INFRAESTRUTURA" em dourado `#C9A14A` (palavra-martelo, ~25% maior)

### Header (canto superior, discreto)
> `TESE · ITAÚ · PLATAFORMA IARA`
Condensed sans caps, dourado `#C9A14A`, pequeno. Acento: ITAÚ (Ú).

### Footer
> `APOLO SANTOS · CC BY-NC-SA 4.0`
**SEM "OS 4Ds DA IA"**, **SEM "POST X DE Y"**.

### Paleta
| Cor | Hex | Uso |
|-----|-----|-----|
| Navy profundo | `#0F1B2D` | Fundo / camadas superiores |
| Navy medio | `#1C3350` | Camadas intermediarias / contraste |
| Dourado matte | `#C9A14A` | Camada de base (IA), palavra-martelo INFRAESTRUTURA, header |
| Creme | `#F4EFE5` | Money line linha 1, rotulos, footer |
| Aco/azul claro | `#5B7290` | Linhas de divisao das camadas, rotulos secundarios |

### Regra dura de acentos PT-BR em all-caps
- Header: ITAÚ (Ú agudo). Conferir.
- Money line: nenhuma palavra leva acento. Conferir mesmo assim.

### NAO inserir
- Logo real do Itau, simbolo do Itau, ou o LARANJA do Itau (#EC7000). Usar navy/dourado, NAO a marca laranja do banco.
- Logo OpenAI ou de qualquer fornecedor.
- Rosto, foto de pessoa, predio reconhecivel do Itau.
- Render 3D cartoon, gradiente roxo/azul neon "cara de IA".
- Sticker, emoji, badge de IA generico.
- Infografico poluido com muitos numeros. So a money line manda.

### Variantes documentadas (Apolo decide)
- **V2:** NUMERO-MARTELO editorial — "88%" gigante em dourado sobre navy, com subtitulo "o salto no uso de IA generativa do maior banco do país em um ano" + money line menor. Mais agressivo no scroll. (NAO usar o 44% como numero gigante — tem ressalva factual, ver Alerta 1.)
- **V3:** BLUEPRINT / planta arquitetonica de uma "camada de IA" desenhada em linhas tecnicas creme sobre navy, estilo projeto de engenharia. Conceitual, sobrio.

### Politica vigente
Entrega SOMENTE thumbnail-prompt.md. NAO gerar HTML nem PNG.

---

## 7. CONTRAINDICACOES (regra v2.1 plena)

**NAO fazer (post INDEPENDENTE):**
- ZERO citar a serie 4Ds, "Os 4Ds", D1/D2/D3/D4, Delegation/Description/Discernment/Diligence, AI Fluency Framework.
- ZERO usar #Os4Ds. Apenas `#PMEoperando` como assinatura.
- ZERO verbos de continuidade ("como mostrei", "no post anterior", "voltando", "fechando a serie").
- O post NAO depende de citar iFood/Cris nem Mercado Livre/Verdi. Mantido 100% independente (decisao: nao mencionar nenhum dos dois, pra preservar o foco na tese).
- Footer da thumb LIMPO: "APOLO SANTOS · CC BY-NC-SA 4.0".

**NAO fazer (calibragem v2.1 padrao):**
- Comprimir abaixo de 1.800 chars (esticar, NAO comprimir).
- Mais de 3 hashtags.
- CTA com MARCA ou MANDA (proibidos).
- Hook acima de 140 chars.
- Money line dentro de paragrafo (regra dura — isolada).
- Hifen, travessao, em-dash. ZERO. (Atencao: "pra ca", "todo dia", "ano anterior" — sem hifen. NAO escrever "des-terceirizacao" nem "e-commerce".)
- Fabricar URLs. SOMENTE as 3 URLs reais.
- AI-ese / slop: alavancar, potencializar, ecossistema, navegar, robusto, sinergias, holistico, escalavel (sentido buzz). Apolo le em voz alta.

**NAO fazer (especifico deste post):**
- **Afirmar que "a IA derrubou o custo 44%" ou que o 44% e recente.** ERRADO. O 44% e queda de custo UNITARIO de processamento de 2018 a 2026, puxada pela nuvem. Enquadrar exatamente como no Bloco 4. Reprova por imprecisao.
- **Dizer "88% em um trimestre" ou "88% em 3 meses".** ERRADO. E 1T2026 vs 1T2025 (ano contra ano). Escrever "em um ano" / "no primeiro trimestre de 2026 contra o ano anterior".
- **Nomear "Devin" no corpo.** NAO verificado (itforum deu 403). Usar so o fato generico confirmado ("agentes de IA na engenharia de software"). Apolo pode adicionar Devin SE conferir o itforum antes.
- **Soar promocional do Itau.** Tom e ANALISE de tese. Sem adjetivos elogiosos (incrivel, genial, revolucionario, moderno, lider). O Itau e PROVA, nao protagonista.
- **Capitalizar "Itau", "Iara", "OpenAI" no corpo** (nomes proprios, NAO emphasis).
- **Usar dados do Bradesco como se fossem do Itau** (Brasil247 mistura os dois — ex "des-terceirizacao de 11 mil de TI" e do Bradesco). So usar numeros do Itau.

**Tradeoff narrativo:** e TESE, nao case. Risco e virar abstrato demais. Antidoto: a Iara e a prova concreta (camada real, com numeros) e as 3 licoes aterram em acao PME. Risco oposto: virar PR do Itau. Antidoto: o heroi e a IDEIA (camada vs feature), o banco e exemplo. Voz observador-operador analitica.

---

## 8. BRIEF PRO TERMINAL POST (bloco pronto pra execucao)

**Destinatario:** terminal /linkedin-post

**Entregavel:** `post.md` (politica de 14/05). Estrutura:
- Cabecalho markdown com metadados (titulo, AGENDAR Ter 26/05 ~9h BRT, formato TESE INDEPENDENTE, dimensao imagem 1080x1350, conceito thumb DE ATENCAO metafora de camadas navy/creme/dourado).
- Corpo que vai pro LinkedIn em bloco de codigo (```), texto puro, quebras exatas, SEM markdown dentro do corpo.
- Primeiro comentario tambem em bloco de codigo.

**Instrucao final (calibragem v2.1):**

Redigir o post seguindo a estrutura de 10 blocos aprovada acima. Regras OBRIGATORIAS:

1. **Tamanho-alvo: 1.800-2.200 chars no corpo.** Esqueleto-base ~2.000. NAO comprimir abaixo de 1.800.
2. **Hook fixo (nao alterar):** "O maior banco do país parou de tratar IA como projeto e passou a rodar em cima dela. O uso de IA generativa subiu 88% em um ano." — Tese / Transformation Story, 127/140 chars.
3. **Formato TESE, nao case:** abre com a tese (IA virou infraestrutura), usa o Itau como prova, fecha em 3 licoes. NAO estruturar como narrativa de personagem (isso foi o Verdi).
4. **Money line fixa (nao alterar), em paragrafo ISOLADO (Bloco 7):** "IA DEIXOU DE SER PROJETO. VIROU INFRAESTRUTURA." — linha em branco antes e depois, logo apos a reflexao (Bloco 6), antes do CTA (Bloco 8).
5. **CTA principal + CTA save secundario (Blocos 8-9):**
   - Principal: "Na sua empresa, IA é uma camada de operação ou ainda é um monte de ferramenta solta? Comenta o que você já centralizou e o que ainda está espalhado."
   - Save secundario: "Salva esse post pra rever antes de assinar a próxima ferramenta de IA avulsa."
   - **CTA save secundario OBRIGATORIO.**
6. **REGRA DURA V2.1 — POST INDEPENDENTE:** ZERO 4Ds, D1-D4, Delegation/Description/Discernment/Diligence, AI Fluency Framework, verbos de continuidade. NAO depende de citar iFood/Verdi (mantido fora).
7. **3 licoes na ordem aprovada (Bloco 5):** 1) IA como camada de operacao nao iniciativa solta, 2) centralizar em UM LUGAR SO vs dez ferramentas avulsas, 3) governanca ANTES da escala.
8. **Caps lock map:** 3 momentos (CAMADA no Bloco 3, UM LUGAR SÓ na Licao 2, ANTES na Licao 3) + money line isolada. NAO capitalizar Itau/Iara/OpenAI.
9. **Hifen, travessao, em-dash = ZERO.** "pra ca", "todo dia", "ano anterior" sem hifen.
10. **Acentos PT-BR corretos.** Atencao: país, é, não, só, número, operação, você, está, lições, governança, memória, três, primeiro, anterior.
11. **DADOS — enquadramento obrigatorio (ver Alertas 1 e 2):**
    - 88%: "no primeiro trimestre de 2026 contra o ano anterior" / "em um ano". NUNCA "em um trimestre". Fonte (TI Inside, 2026).
    - 44%: "custo unitario de processamento caiu 44% de 2018 pra ca, puxado pela ida pra nuvem". NUNCA atribuir o 44% a IA nem chamar de recente. Fonte (TI Inside, 2026).
    - Iara: "a camada que orquestra modelos, bases de conhecimento, memoria e regras num so lugar". Fonte (TI Inside, 2026).
    - Agentes: "agentes de IA ja entram no fluxo de engenharia de software". NAO nomear Devin (nao verificado).
12. **NO disclosure Anthropic.**
13. **3 hashtags PascalCase no fim:** `#InteligenciaArtificial #CaseBR #PMEoperando`. NAO usar #Os4Ds. NAO mais de 3.
14. **Tom observador-operador analitico.** O Itau e PROVA da tese, NAO protagonista. SEM adjetivos elogiosos (incrivel, genial, revolucionario, lider, moderno).
15. **Anti-slop check:** Apolo le em voz alta. Vetar AI-ese.

### Primeiro comentario (em code block, pronto)

```
Fontes do post (verificadas em 25/05/2026):

→ TI Inside — Itaú amplia em 88% o uso de IA generativa, reduz custo unitário de processamento em 44% (2018 a 2026) e detalha a plataforma Iara: https://tiinside.com.br/13/05/2026/itau-amplia-em-88-uso-de-ia-generativa-acelera-digitalizacao-e-reduz-custo-de-processamento-em-44-com-avanco-da-nuvem/

→ Brasil 247 — Itaú e Bradesco na corrida pela liderança no uso de IA no mercado financeiro (formalização da plataforma Iara): https://www.brasil247.com/blog/itau-e-bradesco-correm-pela-lideranca-no-uso-de-ia-no-mercado-financeiro-brasileiro

→ IT Forum — Itaú e o uso de agente de IA na engenharia de software: https://itforum.com.br/noticias/itau-agente-ia-devin/

Salva esse post pra rever antes de assinar a próxima ferramenta de IA avulsa.
```

**ATENCAO URLs:** SOMENTE as 3 URLs acima. NAO inventar URL. A do IT Forum nao pode ser confirmada por leitura (deu 403) — entra como referencia do tema de agentes na engenharia, mas o corpo NAO nomeia Devin.

---

## 9. BRIEF PRO TERMINAL THUMBNAIL (bloco pronto pra execucao)

**Destinatario:** terminal /linkedin-thumbnail

**Politica vigente:** entregar SOMENTE thumbnail-prompt.md. NAO gerar HTML nem PNG.

**Conceito V1:** METAFORA DE INFRAESTRUTURA EM CAMADAS + PALETA NAVY/CREME/DOURADO + MONEY LINE SOBREPOSTA. Calibragem v2.1: tese/narrativa = IMAGEM DE ATENCAO. DEVE ser visualmente distinto do iFood (foto cozinha) E do Verdi (chat dark verde).

**Especificacoes obrigatorias:**

1. **Formato:** 1080x1350 (4:5 portrait).
2. **Cena (grafico editorial conceitual, NAO foto, NAO chat):**
   - Corte vertical com 4 a 5 camadas horizontais empilhadas (estratos / fundacao arquitetonica / pavimentos).
   - Camada de BASE (a mais larga, embaixo) destacada em dourado = a "camada de IA" que sustenta as de cima. As superiores (produtos, operacao, atendimento) repousam sobre ela.
   - Estetica editorial / arquitetonica / diagrama premium. Linhas limpas, sobrio, institucional. NAO infografico poluido, NAO render 3D, NAO neon.
   - Opcional: micro-rotulos sobrios ("produtos", "operação", "atendimento" em cima; "IA" na base). Discreto.
3. **Soco sobreposto — money line em 2 linhas (terco inferior, sobre faixa escura):**
   - Linha 1: `IA DEIXOU DE SER PROJETO.` em creme `#F4EFE5`, condensed sans caps peso 900 (Anton, Bebas Neue Black, Druk Wide Bold).
   - Linha 2: `VIROU INFRAESTRUTURA.` com "INFRAESTRUTURA" em dourado `#C9A14A`, ~25% MAIOR (palavra-martelo).
4. **Header (canto superior, discreto):** `TESE · ITAÚ · PLATAFORMA IARA` em condensed sans caps, dourado `#C9A14A`, pequeno. Acento ITAÚ (Ú).
5. **Footer (banda inferior discreta):** `APOLO SANTOS · CC BY-NC-SA 4.0` em condensed sans caps, creme `#F4EFE5`, bullet dourado. SEM "OS 4Ds", SEM "POST X DE Y".
6. **Paleta:**
   - Fundo/camadas superiores: navy profundo `#0F1B2D` e navy medio `#1C3350`.
   - Camada de base (IA), palavra-martelo, header: dourado matte `#C9A14A`.
   - Money line linha 1, rotulos, footer: creme `#F4EFE5`.
   - Linhas de divisao das camadas: aco/azul claro `#5B7290`.
7. **Regra dura de acentos PT-BR em all-caps:** ITAÚ (Ú) no header. Money line sem acentos.
8. **NAO inserir:** logo/simbolo do Itau, LARANJA do Itau (#EC7000), logo OpenAI, rosto/foto de pessoa, predio reconhecivel, render 3D cartoon, gradiente roxo/neon "cara de IA", sticker/emoji, infografico poluido.
9. **Ferramentas recomendadas:**
   - **Ideogram (typography mode)** — melhor pra diagrama limpo + tipografia com acento.
   - **Midjourney v6** `--ar 4:5 --style raw` — bom pra estetica editorial/arquitetonica.
   - Se gerar grafico e texto separados, montar em editor.
10. **Entregavel:** apenas thumbnail-prompt.md autocontido (prompt principal + negative prompt + checklist + recomendacao de ferramenta + variantes).

**Variantes documentadas (Apolo decide):**
- **V2:** NUMERO-MARTELO "88%" gigante em dourado sobre navy + subtitulo + money line menor. (NUNCA usar o 44% como numero gigante — ressalva factual.)
- **V3:** BLUEPRINT / planta arquitetonica de uma "camada de IA" em linhas tecnicas creme sobre navy.

---

## 10. NOTAS PRO REVISAR (criterios duros v2.1)

Score minimo 4.0/5. Reprova automatico se: usar MARCA/MANDA em CTA, post abaixo de 1.300 chars, sem CTA save secundario, sem hook com numero, mais de 3 hashtags, URLs fabricadas, **qualquer callback a serie 4Ds**, **atribuir o 44% a IA / chamar de recente**, **dizer "88% em um trimestre"**, **nomear Devin sem conferir o itforum**.

### Checklist factual
- [ ] **88% enquadrado como ano contra ano** ("primeiro trimestre de 2026 contra o ano anterior" / "em um ano"). NAO "em um trimestre".
- [ ] **44% enquadrado como custo unitario de processamento, 2018 a 2026, puxado pela nuvem.** NAO atribuido a IA. NAO chamado de recente.
- [ ] **Iara descrita como a camada que orquestra modelos, bases de conhecimento, memoria e regras num so lugar** (TI Inside, 2026).
- [ ] **Agentes mencionados de forma generica** (engenharia de software). **Devin NAO nomeado** no corpo.
- [ ] **Nenhum dado do Bradesco atribuido ao Itau.**
- [ ] **Fontes inline:** TI Inside 2026 (88%, 44%, Iara, agentes).

### Checklist v2.1 — INDEPENDENCIA
- [ ] ZERO "4Ds", "Os 4Ds", "D1/D2/D3/D4".
- [ ] ZERO "Delegation/Description/Discernment/Diligence/AI Fluency Framework".
- [ ] ZERO verbos de continuidade.
- [ ] Hashtag #Os4Ds AUSENTE — so `#InteligenciaArtificial #CaseBR #PMEoperando`.
- [ ] Footer da thumb SEM "OS 4Ds DA IA · POST X DE Y".
- [ ] Sem dependencia de callback a iFood/Verdi.

### Checklist v2.1 padrao
- [ ] **Tamanho: 1.800-2.200 chars.** Esqueleto ~2.000. Reprovar se abaixo de 1.300.
- [ ] **Hook ≤140 chars com numero** (88%) + formato Tese/Transformation Story (127 chars).
- [ ] **Money line isolada em paragrafo proprio** ("IA DEIXOU DE SER PROJETO. VIROU INFRAESTRUTURA." — 7 palavras, sem hifen, sem aspas, antes do CTA).
- [ ] **CTA principal pergunta substantiva bilateral** (centralizado + espalhado) + **CTA save secundario obrigatorio.**
- [ ] **3 hashtags PascalCase**, #PMEoperando por ultimo. Reprovar se 4 ou 5.
- [ ] **CTA NAO usa MARCA nem MANDA.**
- [ ] **3 licoes presentes na ordem aprovada.**
- [ ] **Caps lock map: 3 momentos** (CAMADA, UM LUGAR SÓ, ANTES) + money line. NAO capitalizar nomes proprios.
- [ ] **Tom observador-operador analitico** — Itau e PROVA, nao protagonista. SEM adjetivos elogiosos.
- [ ] **Anti-slop:** sem AI-ese (alavancar, potencializar, ecossistema, navegar, robusto, sinergias, holistico). Apolo leu em voz alta.
- [ ] **Hifen, travessao, em-dash = ZERO.**
- [ ] **Acentos PT-BR conferidos palavra a palavra.**
- [ ] **Formato post.md** — corpo em code block, sem markdown vazando, primeiro comentario em code block.

---

## 11. ENCAIXE NA SEMANA (5 posts surfando o viral do iFood)

Semana de 5 posts puxando a esteira do viral iFood/Cris. Sequencia ate aqui:

| Dia | Tema | Formato | Thumb |
|-----|------|---------|-------|
| Seg 25/05 ~13h | Mercado Livre Verdi | CASE narrativo | Mockup de chat dark UI + verde |
| **Ter 26/05 ~9h** | **Itau Iara (este)** | **TESE / analise** | **Camadas navy/creme/dourado** |
| (proximos) | a definir | variar formato | variar paleta |

**Variacao garantida vs os anteriores:**
- Formato: CASE (Verdi) -> TESE (Itau). Estruturas distintas.
- Thumb: chat dark verde (Verdi) -> grafico de camadas navy/dourado (Itau). Conceitos e paletas distintos.
- Angulo: "criaram um colega" (Verdi) -> "IA virou infraestrutura" (Itau). Teses diferentes, sem canibalizar.

---

FIM DO BRIEF. Pronto pra disparar Post + Thumb em paralelo.
