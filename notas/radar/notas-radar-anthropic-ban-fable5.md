# DOSSIÊ DE PAUTA — BANIMENTO FABLE 5 / MYTHOS 5 (ANTHROPIC × GOVERNO EUA)
**Terminal: RADAR · Content Factory v3 · gerado 15/06/2026**
**Status da história: VOLÁTIL (negociação ativa em Washington) — revalidar antes de publicar**

> Tarefa aprovada pelo Apolo. Seeds confirmadas por ele (web, 15/06) + expansão e verificação adversarial por 5 pesquisadores em paralelo (fatos/timeline, status de hoje, ângulo Brasil, vozes/reações, refutação cética). Cada fato abaixo marca seu nível de confiança.

---

## ⚠️ CORREÇÃO DE DATA (importante pra não errar no post)
A sexta-feira foi **12/06/2026**, não 13/06. (01/06/2026 = segunda → 12/06 = sexta, 13/06 = sábado.)
- A diretiva chegou **sexta 12/06, 17h21 ET** (fonte primária: declaração oficial da Anthropic, "today at 5:21pm ET").
- Parte da imprensa (Al Jazeera, CNN, Fortune) arquivou matérias como **13/06** (data de publicação / fuso GMT — 17h21 ET = 21h21 GMT, ainda dia 12).
- **No post:** o mais seguro é "numa sexta-feira à noite" (verdade inquestionável) ou citar **12/06**. Evitar cravar "13/06" como dia da diretiva.

---

## 1. FATOS CONFIRMADOS (≥2 fontes cada, salvo onde sinalizado)

### ✅ O lançamento (09/06/2026)
- Em **09/06/2026** a Anthropic lançou **Claude Fable 5** — a versão pública e "guardrailada" da classe Mythos. **Mythos 5** = o modelo subjacente, mais destravado (tier de cibersegurança, quase sem restrição). Os dois compartilham o mesmo sistema base; o Fable bloqueia pedidos de alto risco (cyber/bio/químico) e cai pro Opus 4.8 nesses casos.
- Specs confirmadas: **adaptive thinking sempre ligado** (único modo de raciocínio), **1M tokens de contexto** (padrão), **até 128K tokens de saída**.
- Fontes: InfoQ (15/06, confirma os 3 specs juntos) · TechCrunch (09/06, "Fable 5 is a version of Mythos the public can access today") · Anthropic newsroom (post de lançamento 09/06) · EnterpriseDNA, The Hacker News (corroboração).
- **Confiança: ALTA.** (Os 3 specs juntos só aparecem explícitos na InfoQ, mas 1M/128K são corroborados em vários.)

### ✅ A diretiva (sexta 12/06, 17h21 ET)
- O **Departamento de Comércio dos EUA** (BIS; carta assinada pelo secretário **Howard Lutnick** a Dario Amodei) emitiu **diretiva de controle de exportação** suspendendo todo acesso a **Fable 5 e Mythos 5** por **qualquer estrangeiro** ("foreign national"), dentro ou fora dos EUA, **incluindo funcionários estrangeiros da própria Anthropic**.
- Como a Anthropic não consegue filtrar nacionalidade em tempo real, **desligou os dois modelos pra TODO MUNDO** ("disable Fable 5 and Mythos 5 for all our customers"). Recebeu ~90 min de aviso.
- Fontes: Anthropic newsroom (anthropic.com/news/fable-mythos-access, primária) · Al Jazeera (13/06) · Fortune (13/06) · CNN Business (13/06) · Bloomberg · NBC/CNBC (atribuem a carta a Lutnick).
- **Confiança: ALTA.** Ressalva: a frase "incluindo funcionários estrangeiros" é **paráfrase da própria Anthropic**, não o texto literal da diretiva (que não foi publicado na íntegra; reflete o conceito de "deemed export"). "Comércio/Lutnick" é atribuição da imprensa, não está na declaração da Anthropic ("o governo dos EUA, citando autoridades de segurança nacional").

### ✅ O que ficou no ar
- **Opus 4.8 e todos os modelos menores (Sonnet, Haiku, gerações anteriores) seguem normais.** Só a classe 5 (Fable 5 / Mythos 5) foi suspensa.
- Fontes: Anthropic ("access to all other Anthropic models will not be affected") · Fortune · CNN.
- **Confiança: ALTA.** (Outlier: Al Jazeera num momento sugeriu Fable seguir no ar "domesticamente" com capacidades desligadas — provavelmente descrevendo o guardrail normal ou um cenário de restauração parcial. A versão dominante e com fonte primária é **desligamento global total dos dois**.)

### ⚠️ Os motivos (mais delicados — ler com cuidado)
- **(a) Jailbreak (SÓLIDO, mas a origem foi distorcida na seed):** quem achou o jailbreak foi a **Amazon** (pesquisadores de segurança; CEO Andy Jassy alertou o governo) — usaram prompts pra fazer o modelo classe-Mythos cuspir info restrita de ataque cibernético. O governo pediu pra Amodei corrigir ou retirar o modelo; segundo **David Sacks** (conselheiro de IA da Casa Branca / co-chair do PCAST), Amodei **se recusou**. **Sacks NÃO descobriu o jailbreak** — ele defendeu publicamente a diretiva no X depois que ela saiu. Fontes: Fortune (14/06) · Semafor · Tom's Hardware · Axios.
- **(b) Acesso chinês (FRACO — alegação, fonte única, contestada):** a suspeita de que "um grupo ligado à China teria acessado" o Mythos vem de **fonte única e anônima** (Semafor, 13/06). A própria Semafor diz não saber qual organização, como acessou, nem como a Casa Branca soube. **A Anthropic contesta**: disse à Semafor que a Casa Branca "não mencionou acesso chinês" nas conversas, e que bloqueia acesso de dentro da China. NÃO está em nenhuma justificativa oficial no papel.
- ⚠️ **Risco de conflação:** existe um caso REAL e separado de nov/2025 (grupo estatal chinês "GTG-1002" abusando do Claude Code) — **outro modelo, outro evento, 7 meses antes.** Não misturar.
- **Confiança: jailbreak = ALTA (origem Amazon); recusa de Amodei = enquadramento do Sacks, contestado; acesso chinês = BAIXA/contestado.**

### ✅ A réplica da Anthropic
- Chamou de **"jailbreak potencial estreito"** ("narrow potential jailbreak" — "essencialmente pedir ao modelo pra ler um codebase e corrigir falhas"); disse ser **"mal-entendido"** e que **trabalha pra restaurar acesso**.
- Objetou recolher "um modelo comercial usado por **centenas de milhões de pessoas**".
- Apontou que a capacidade "está amplamente disponível em outros modelos (incluindo o **GPT-5.5 da OpenAI**)" — **e SEM precisar de jailbreak**. (Atenção: a Anthropic NÃO disse "o GPT-5.5 tem a mesma vulnerabilidade/jailbreak"; disse que a capacidade é acessível normalmente em outros modelos. O "mesma vulnerabilidade" é paráfrase frouxa da imprensa.)
- Argumentou que, aplicado à indústria, o critério "barraria o lançamento de qualquer novo modelo de fronteira".
- Fontes: Anthropic newsroom (primária) · Fortune · Al Jazeera · CNN · TechCrunch.
- **Confiança: ALTA.**

---

## 2. STATUS ATUAL (compilado 15/06; dado mais fresco ~15/06 tarde)

**NÃO foi restaurado.** Em 15/06, Fable 5 e Mythos 5 seguem **offline no mundo todo**. Diretiva ainda em vigor, sem carve-out, sem ação judicial.
- Checker ao vivo isfable5back.com (15/06, 17h14): "No. Claude Fable 5 não está disponível. Offline desde 12/06."
- Negociação ativa: a Anthropic mandou engenheiros/executivos sênior a Washington. Sáb 14/06 houve conversa com o secretário **Lutnick** e o diretor de cyber **Sean Cairncross**. Ambos os lados dizem querer restaurar — **sem prazo**. (TechTimes 15/06, BusinessToday 15/06, BeInCrypto.)
- Página oficial da Anthropic NÃO foi atualizada além de 12/06.
- Mercados de previsão (Octagon, 14/06): ~79-80% de chance de NÃO restaurar antes de 20/06–01/07. (Sinal de sentimento, não fato.)

🔴 **VOLATILIDADE ALTA.** Com executivos já na mesa, um acordo/restauração pode sair a qualquer hora. **OBRIGATÓRIO rechecar isfable5back.com + newsroom da Anthropic minutos antes de publicar.** Se o acesso voltar, o gancho "cortado do Brasil" no presente cai por terra e o post precisa virar retrospectiva.

---

## 3. ÂNGULO BRASIL

### Mecanismo (CONFIRMADO — brasileiro É "foreign national")
- Sob o EAR (15 CFR 772.1), "foreign person" = quem não é cidadão dos EUA, residente permanente (green card) ou indivíduo protegido (asilo/refúgio). "'Foreign person' é sinônimo de 'foreign national'." **Brasileiro não se encaixa em nenhuma exceção → é estrangeiro pra regra.**
- Regra de **"deemed export"** (EAR 734.13/734.15): liberar tech controlada a estrangeiro nos EUA conta como exportação pro país dele. Brasileiros FORA dos EUA caem na proibição direta de exportação.
- Brasil está no **Country Group B** do BIS — NÃO nos subgrupos privilegiados (A:5/A:6) que dão alívio a aliados próximos. **Sem carve-out pro Brasil.**
- **Confiança: ALTA** no mecanismo. O único passo inferido (forte) é que nenhum acordo secreto isentou o Brasil — sustentado pela linguagem "qualquer estrangeiro" e pelo desligamento global de fato.
- **Tradução pro post:** o modelo nº1 do mundo (lançado dia 09) foi **cortado do Brasil em ~3 dias**, de um dia pro outro, sem o Brasil ter feito nada — por ser "estrangeiro" numa regra dos EUA.

### Repercussão BR (ampla, porém RASA)
- Cobriram: CNN Brasil (13/06), Tecnoblog, Canaltech (15/06), Times Brasil/CNBC (notícia + coluna crítica de Allan Ravagnani: "vexame sem precedentes... 96 horas"), TecMundo, MacMagazine, Hardware.com.br, iMasters, CyberSec Brazil.
- ⚠️ **Quase tudo é explicador traduzido.** NÃO achei: declaração de autoridade brasileira, empresa BR nomeada que perdeu acesso, nem thread relevante de comunidade (r/brdev, X/LinkedIn PT). 
- Único enquadramento "brasileiro cortado" em 1ª pessoa: blog Brasil Acadêmico ("um desenvolvedor brasileiro é, pra regra, um estrangeiro, e fica cortado do Fable 5 e do Mythos 5" — caiu pro Opus 4.8). Fonte pequena, serve de anedota.
- **Leitura honesta:** impacto local é REAL e airtight no mecanismo, mas a **reação** local ainda não se mobilizou de forma citável. O ângulo "comoção brasileira" é mais inferência que fato hoje. **Há espaço pra ser uma das primeiras vozes BR a dar a leitura de negócio (não só traduzir a notícia).**

---

## 4. VOZES / REAÇÕES

- **Anthropic:** "narrow potential jailbreak"; "centenas de milhões de pessoas"; "mal-entendido... trabalhando pra restaurar"; cita GPT-5.5. (Sem citação pessoal de Amodei verificável NESTE caso.)
- **David Sacks (Casa Branca):** "Dario recusou." / "É difícil entender como podem chamar de não-'sério' um jailbreak que permite operar uma ciberarma." / "A Anthropic priorizou seguir oferecendo o modelo de consumo sobre a segurança." (X, 13/06; via Tribune India, Tom's Hardware, Semafor.)
- **Amazon:** quem flagou o jailbreak (Andy Jassy alertou o governo). "Não é incomum governos pedirem nossa avaliação sobre riscos de segurança." (via Semafor.)
- **Carta aberta freefable.org** (76 signatários: CEOs, CISOs, VCs, pesquisadores de segurança; 15/06): a diretiva "tirou os melhores modelos das mãos dos defensores, criou incerteza de mercado e arriscou a liderança de IA dos EUA sem risco real que justifique." (via Cybersecurity Dive / CyberScoop.)
- **Katie Moussouris** (ex-assessora do Wassenaar): "Não é bypass de guardrail. É a coisa mais valiosa que uma IA faz pra defesa: o loop de achar, corrigir e testar." Chamou de "heavy handed" e "equivocado."
- **Dean Ball** (ex-assessor de IA da Casa Branca): "Não sei se é lawfare contra a Anthropic ou hawkery extremo de segurança. De qualquer jeito, é simplesmente caricato."
- **OpenAI / Google / DeepMind:** SEM reação pública verificada ao caso. (Não atribuir o "fear-based marketing" do Altman — é de abr/2026, outro contexto.)
- Talking point de comunidade (contestado): a regra barraria até cientistas estrangeiros de IA dos próprios EUA — citam Karpathy, mas ele tem green card (EB-1), provavelmente isento; usar só como ilustração, não como fato.

---

## 5. LEITURA DE PAUTA (régua do padrão viral)

**Régua (feedback_padrao_viral_dados_reais):** só **case de marca BR universal** + **comparativo multi-empresa** furam a bolha (~28k). Opinião/tese sem case e nicho B2B travam. **Sujeito decide alcance, não a embalagem.**

**Diagnóstico honesto:** esta pauta é **notícia/tese geopolítica de IA** — NÃO é case de marca BR, NÃO é comparativo multi-empresa. Pela régua pura, é o perfil que historicamente **trava na bolha**. PORÉM, tem 3 amplificadores que o padrão normal não tem:
1. **Calor de notícia altíssimo** (ciclo global, dezenas de veículos tier-1 em 72h) — janela de "primeiro a comentar" com leitura de negócio.
2. **Gancho local concreto e raro:** "o modelo nº1 do mundo foi cortado do Brasil de um dia pro outro" — toca soberania/dependência de IA gringa, dor real de quem constrói em cima dessas ferramentas.
3. **Autoridade do Apolo:** ele constrói com esses modelos (CEO AutomatikLabs, certs Anthropic). Não é palpite de quem leu a notícia — é leitura de quem foi afetado.

**Risco real:** (a) pode soar "notícia que todo mundo já viu" se for só recontar o fato; (b) **volatilidade** — se restaurarem antes do post subir, o gancho no presente morre; (c) tema "gringo/geopolítico" pode não converter em comentário de PME como um case de marca converte.

**SCORE DE PAUTA: 3.8 / 5.** (Acima do corte de 3.5. Não é 4.5+ porque está fora do padrão viral comprovado e é volátil. Vale fazer pelo calor + gancho local + autoridade, com execução enxuta pra não superinvestir num tema instável.)

**FORMATO RECOMENDADO: post-bomba curto (≤900 caracteres) com sting analítico.**
- Por quê bomba curto e não tese longa: o tema é volátil e fora do padrão — investir pouco, surfar rápido, capturar o calor sem escrever um ensaio que pode envelhecer em horas. A tese longa com contraponto seria a 2ª opção SE a história estabilizar (acesso restaurado vira retrospectiva "o que isso ensina sobre depender de IA gringa").
- O sting não é a fofoca EUA×China; é a **lição de negócio**: quem construiu operação em cima de UM modelo estrangeiro descobriu na sexta que o plug pode ser puxado por um governo que não é o seu. Diversificação de fornecedor de IA deixou de ser teoria.
- Manter regras de estilo: sem hífen/travessão, CAPS em 3-5 pontos de ênfase, fonte no 1º comentário, CTA de pergunta (sem "marca/manda").

**TIMING: publicar em até 24-36h (ideal ainda 15/06 à noite ou 16/06 cedo).** Janela curta — o calor decai rápido e a história pode virar.
🔴 **Pré-flight obrigatório:** rechecar isfable5back.com + newsroom Anthropic minutos antes. Se restaurado → trocar tempo verbal pra retrospectiva e ajustar hook. Se escalar (acordo, processo, novo motivo) → incorporar.

---

## 6. HOOKS + MONEY LINE + CONTRAPONTO

**Hooks candidatos (≤210 caracteres):**
1. "Na sexta-feira o melhor modelo de IA do mundo foi cortado do Brasil. Não por preço. Não por bug. Porque você é estrangeiro."
2. "A IA mais poderosa do planeta durou 3 dias no ar. Aí um governo que não é o seu apertou o botão de desligar. E o Brasil ficou de fora junto."
3. "Você não foi banido por nada que fez. Foi banido por onde nasceu. É assim que a IA do mundo funciona em 2026, e ninguém te avisou."

**Money line (isolada no corpo):**
"QUEM APOSTOU TUDO EM UM MODELO ESTRANGEIRO DESCOBRIU NA SEXTA QUE O PLUG NÃO ESTÁ NA SUA MÃO."

**Contraponto honesto (pra não soar panfletário):**
"E antes do pânico: o Opus 4.8 e os outros modelos seguem no ar, o desligamento pode ser temporário e a própria Anthropic chama de mal-entendido. O ponto não é 'fuja da IA gringa'. É parar de depender de UM fornecedor só, seja ele qual for."

---

## 📋 FONTES PRINCIPAIS
- Anthropic (primária): anthropic.com/news/fable-mythos-access · anthropic.com/news/claude-fable-5-mythos-5
- CNN Business (13/06) · Fortune (13 e 14/06, "Amazon warning") · Al Jazeera (13/06) · Time · Bloomberg · Semafor (China, 13/06) · Axios (12/06) · Tom's Hardware (Sacks) · TechCrunch (09/06)
- Status: isfable5back.com · BusinessToday (15/06) · TechTimes (15/06) · Octagon
- Brasil: CNN Brasil · Canaltech (15/06) · Times Brasil/CNBC · Tecnoblog · TecMundo
- Comunidade: freefable.org (carta aberta) · CyberScoop / Cybersecurity Dive (15/06)
- Regra EUA: eCFR 15 CFR 772.1 · BIS deemed exports · BIS Country Groups (Brasil = Group B)
- ❌ NÃO usar: "acesso chinês" como fato (alegação contestada, fonte única) · "jailbreak do Sacks" (origem é Amazon) · conflação com o caso GTG-1002 de nov/2025 · cravar "13/06" como data da diretiva (foi 12/06)

---
*Radar — Content Factory v3 · dossiê 15/06/2026 · revalidar status antes de publicar*
