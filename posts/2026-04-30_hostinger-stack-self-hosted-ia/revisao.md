# Revisao Editorial — Stack self-hosted de IA

**Data da revisao:** 22/04/2026
**Revisor:** Claude (auditor LinkedIn Content Factory)
**Score:** 4.0 / 5
**Aprovacao final:** NAO (reabrir) — post esta excelente, mas thumbnail reprovou por multiplos acentos faltando

---

## CHECK LIST DETALHADO

| Item | Status | Observacao |
|---|---|---|
| Hook forte nos primeiros 210 chars | OK | "Eu estava torrando US$ 500 por mes em OpenAI mais Zapier. Troquei por uma stack self hosted de US$ 20 que processa 200 mil workflows por mes (Apify, 2026)." |
| Dado com fonte entre parenteses | OK | (Apify, 2026) |
| SEM hifen/travessao | OK | Nenhum — ou - travessao no corpo |
| 3 a 5 CAPS LOCK | OK | 5 blocos: US$ 500 POR MES JOGADOS FORA / US$ 20 POR MES RODANDO TUDO / 200 MIL WORKFLOWS POR MES / SEUS DADOS NA SUA VPS / ISSO NAO E ECONOMIA, E SOBERANIA |
| 1300 a 1900 chars no corpo | OK | ~1679 chars (dentro da faixa) |
| Zero links no corpo | OK | Apenas no 1o comentario |
| CTA com link https://www.hostinger.com/automatik | OK | Presente |
| CTA menciona 60% OFF | OK | "60% OFF no plano anual" |
| Tom de parceiro oficial natural | OK | Confissao pessoal + experiencia real, parceria aparece no CTA |
| Acentos portugues corretos no texto | OK | Texto 100% acentuado |
| Acentos portugues corretos no HTML da thumb | FALHA | Multiplas ocorrencias faltando (detalhes abaixo) |
| Thumb usa logo Hostinger | OK | Hostinger_Horizontal_Purple.png no footer |
| Template distinto dos outros | OK | Editorial/Newspaper "SIMPLIFICA." — diferente de T1 e T3 |
| Slop (15 palavras proibidas) | OK | Zero ocorrencias |
| Horario de postagem definido | OK | Qui 30/04/2026, 10h BRT |

---

## PONTOS FORTES

1. **Hook que quebra padrao de LinkedIn-tudo-certo.** Confissao "eu estava torrando US$ 500" e ouro — humaniza o autor e desarma ceticismo antes do dado.
2. **Delta financeiro brutal:** 500 -> 20 em duas linhas. Isso e memoravel e compartilhavel.
3. **Virada de angulo emocional e sofisticada.** Comeca em economia (racional) e migra pra soberania de dados (valor). "ISSO NAO E ECONOMIA, E SOBERANIA" reframe a decisao e eleva o post de dica tecnica pra tese.
4. **Lista da stack e limpa e tatil.** "VPS + Ollama + n8n" com uma linha por componente funciona melhor que descricao generica.
5. **Fechamento "diferenca entre operar IA e ser operado por ela" e citavel.** Publico salva frase, engaja.
6. **Template editorial/newspaper no thumbnail diferencia visualmente a sequencia dos 3 posts Hostinger.** T1 (numero) + T3 (split) + editorial (price card) cumpre a regra de variedade visual.

---

## PROBLEMAS ENCONTRADOS

### 1. Multiplos acentos faltando no thumbnail (BLOQUEADOR)

Arquivo `thumbnail.html` — correcoes necessarias:

| Linha | Atual | Correto |
|---|---|---|
| 301 | `Os dados do cliente nao saem da minha infra.` | `Os dados do cliente nao saem da minha infra.` -> trocar `nao` por `nao` com til: **nao -> nao** (manter, ja esta sem acento na feedback rule? Checar) |
| 313 | `Orquestracao` | `Orquestracao` -> **Orquestracao** precisa virar `Orquestracao` (faltam c-cedilha e a-til) |
| 328 | `US$ 500<small>/mes</small>` | `/mes` -> `/mes` (falta e-circunflexo em `mes`) |
| 333 | `US$ 20<small>/mes</small>` | Mesma correcao |
| 336 | `Processa 200 mil workflows/mes` | Mesma correcao em `/mes` |
| 339 | `comparado a stack cloud equivalente` | `a` -> `a` com crase (`a`) |

Lista definitiva dos tokens a ajustar no HTML:
- `nao` -> `nao` (nao) na linha 301 -> deve ser `nao` com til: **nao** vira **nao** (mantido sem til aqui ja e um problema)

Para evitar confusao de encoding nesta revisao, listo os termos-alvo pelo nome:

- **linha 301:** trocar "nao" por "nao" acentuado (o advérbio de negacao em portugues correto)
- **linha 313:** trocar "Orquestracao" por "Orquestracao" com c-cedilha e a-til ao final
- **linhas 328, 333, 336:** trocar `/mes` por `/mes` com e-circunflexo
- **linha 339:** trocar "comparado a stack" por "comparado a stack" com crase (a-acento-grave)

### 2. Observacao menor no post

Hook: "uma stack self hosted de US$ 20". Tecnicamente "self-hosted" leva hifen em ingles. Como a regra do projeto e SEM hifen, a forma atual ("self hosted" separado) e a escolha correta. OK.

---

## SUGESTAO DE CORRECAO PONTUAL

Editar `thumbnail.html` fazendo os 4 grupos de substituicao acima, depois regerar `thumbnail.png` via render (playwright screenshot 1200x630).

Checklist final do HTML pos-edicao:
- [ ] "Os dados do cliente **nao** saem da minha infra" (com til em nao)
- [ ] Feature 02 label = "**Orquestracao**" (com c-cedilha + a-til ao final)
- [ ] `pc-old` small = "**/mes**" (com e-circunflexo)
- [ ] `pc-new` small = "**/mes**" (com e-circunflexo)
- [ ] `pc-unit` = "Processa 200 mil workflows/**mes**" (com e-circunflexo)
- [ ] `pc-note` = "comparado **a** stack cloud equivalente" (com crase)

Post texto em si esta 100% acentuado e publicavel.

---

## APROVACAO FINAL

**NAO — reabrir para ajuste do thumbnail.**

Apos correcao dos acentos + regeracao do PNG, publicar em Qui 30/04/2026 as 10h00 BRT.
O corpo do post, estrategia, CTA, horario e template estao aprovados. So o thumbnail precisa passar.
