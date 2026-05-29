# BLOCO DE NOTAS — THUMBNAIL PIPELINE POST 9 · WALMART/COSTCO/CARREFOUR IA EM ESTOQUE

> STATUS: CONCLUIDO
> Pasta: posts/2026-06-23_walmart-costco-carrefour-ia-estoque/
> Politica vigente: REGRA 11 — apenas thumbnail-prompt.md
> Publicacao: Ter 23/06/2026 09h00 BRT — nona peca (ULTIMO do pipeline pos-serie 4Ds, MAS sem fecho explicito)
> REGRA DURA v2.1: post INDEPENDENTE — footer LIMPO (sem tag de serie, sem fecho de pipeline)

---

## CONCEITO — IMAGEM DE ATENCAO (foto editorial varejo + 3 nomes header + money line DESPERTADOR)

Nona thumb do pipeline. Quinta IMAGEM DE ATENCAO. Reaplica padrao P4 (foto editorial + 3 nomes tipografia pura + money line com palavra-martelo dourada) em universo distinto: VAREJO em vez de INDUSTRIA. Segundo comparativo de 3 cases do pipeline.

**A cena:** corredor de supermercado real OU centro de distribuicao bem organizado — prateleira com caixas de papelao genericas, embalagem neutra, eventual hortifruti sutil, iluminacao quente natural, fotojornalismo dessaturado. SEM PESSOAS, SEM logos reais de marca de produto.

**Layout (3 camadas tipograficas sobre foto):**
- Banda superior (~80px) sobre dark scrim: `WALMART · COSTCO · CARREFOUR` em dourado condensed caps (tipografia pura, ZERO logos)
- Foto varejo dominando o centro
- Centro inferior sobre dark scrim: money line em 2 linhas
- Banda inferior (~50px): footer LIMPO `APOLO SANTOS · IA EM ESTOQUE · CC BY-NC-SA 4.0`

**Money line:**
- Linha 1: `ESTOQUE PARADO É CAPITAL DORMINDO.` (creme)
- Linha 2: `IA É O DESPERTADOR.` (creme com `DESPERTADOR` em dourado ~30-40% MAIOR — palavra-martelo)

**CRITICO:** ZERO logos reais Walmart/Costco/Carrefour, ZERO logos de produto (Coca-Cola/Nestlé/Dole/etc), ZERO pessoas.

---

## FORMATO

1080x1350 (4:5 portrait, padrao LinkedIn feed)

---

## PALETA

| Cor | Hex | Uso |
|-----|-----|-----|
| Tons naturais varejo | foto base | Marrom papelao + neutros + verde/vermelho sutil hortifruti + cinza metalico prateleira |
| Creme | `#F4EFE5` | Linhas da money line + footer + "IA É O" e "." da linha 2 |
| Dourado matte | `#C9A14A` | Header 3 nomes + `DESPERTADOR` palavra-martelo + bullets footer |
| Preto translucido | `#0E0E10` (60-70%) | Dark scrim sobre header e money line |

---

## ACENTOS PT-BR — REGRA DURA (2 diacriticos)

- `É` linha 1 — agudo no E (em "ESTOQUE PARADO É CAPITAL DORMINDO.")
- `É` linha 2 — agudo no E (em "IA É O DESPERTADOR.") — segunda ocorrencia

Demais palavras sem acento. Se omitir qualquer um, regenerar.

---

## VARIANTES ENTREGUES

- **Variante A:** corredor supermercado / prateleira organizada (cena principal, recomendada)
- **Variante B:** interior de centro de distribuicao moderno (alternativa industrial-wholesale)
- **Variante C:** composicao tipografica pura sobre navy com 3 nomes em coluna + numero-chave embaixo de cada (fallback sem foto)

---

## ENTREGUE

- [x] **thumbnail-prompt.md** criado em `/posts/2026-06-23_walmart-costco-carrefour-ia-estoque/thumbnail-prompt.md`
- [x] Conceito IMAGEM DE ATENCAO foto editorial varejo + 3 nomes header dourado + money line com DESPERTADOR
- [x] Variantes: 3 (A supermercado / B CD / C tipografica fallback)
- [x] Footer LIMPO confirmado (regra v2.1 — sem tag de serie, sem fecho de pipeline, sem POST 9 DE 9)
- [x] 2 acentos PT-BR como regra dura (`É` 2 ocorrencias)
- [x] ZERO logos reais Walmart/Costco/Carrefour — apenas tipografia
- [x] ZERO logos de produto (Coca-Cola, Nestlé, Dole, etc) na foto
- [x] ZERO pessoas/rostos na foto
- [x] Ferramenta recomendada: **ChatGPT image (DALL-E 3)** caminho rapido; **Midjourney v6 sem texto + montagem em editor** pra qualidade maxima de cena varejo sem logos + controle do DESPERTADOR maior em dourado; fallback **Variante C** tipografica pura se IA nao convergir

---

## HISTORICO DE CONCEITOS NO PIPELINE POS-SERIE

| Data | Post | Conceito |
|------|------|----------|
| 26/05 | P1 (5 prompts) | CONTEUDISTA cards numerados navy |
| 29/05 | P2 (iFood Cris) | IMAGEM DE ATENCAO foto cozinha BR |
| 02/06 | P3 (10 ferramentas) | CONTEUDISTA tabela com pills coloridas navy |
| 05/06 | P4 (Embraer/Vale/WEG) | IMAGEM DE ATENCAO foto industrial + 3 nomes header |
| 09/06 | P5 (3 perguntas) | IMAGEM DE ATENCAO cartaz tipografico puro navy |
| 12/06 | P6 (Stone build vs buy) | IMAGEM DE ATENCAO cena editorial engenharia |
| 16/06 | P7 (IA distribuicao B2B) | CONTEUDISTA fluxograma vertical + hairlines navy |
| 19/06 | P8 (7 stacks self hosted) | CONTEUDISTA tabela + bloco custo invertido dourado navy |
| **23/06** | **P9 (Walmart/Costco/Carrefour)** | **IMAGEM DE ATENCAO foto varejo + 3 nomes header + money line DESPERTADOR** |
| previsto 27/06 | P10 (bonus) opcional | a definir |

---

## DISTINCAO P4 vs P9 (mesma estrutura, universos opostos)

| Dimensao | P4 (Embraer/Vale/WEG) | P9 (Walmart/Costco/Carrefour) |
|----------|-----------------------|--------------------------------|
| Universo | Industria pesada (turbina/motor) | Varejo (prateleira/CD) |
| Tipo de foto | Closeup metalico dramatico | Cena de corredor de supermercado |
| Paleta foto | Cinza-grafite + bronze | Marrom papelao + neutros |
| Palavra-martelo | `SENSOR` | `DESPERTADOR` |
| Tag tematica footer | `3 INDÚSTRIAS BR · IA PREDITIVA` | `IA EM ESTOQUE` |

Confirma que o padrao "foto editorial + 3 nomes tipografia pura + money line com palavra-martelo + footer com tag tematica" funciona como TEMPLATE REUTILIZAVEL pra comparativos.

---

## NOTA IMPORTANTE: P9 NAO MARCA FECHO DE PIPELINE

Este e o ULTIMO post do pipeline pos-serie 4Ds (10 temas planejados, P10 bonus opcional), mas a thumb NAO faz fecho explicito. Comeca do zero como qualquer post independente:
- Footer SEM "POST 9 DE 9"
- Footer SEM "ULTIMO POST"
- Footer SEM "ENCERRANDO O PIPELINE"
- Apolo decide pos-publicacao se P10 bonus acontece ou se pipeline pausa.

---

## STATUS FINAL

CONCLUIDO. Pronto pra Revisar. Apolo gera a imagem: caminho rapido no ChatGPT image (DALL-E 3), ou MJ sem texto + montagem em editor pra controle do DESPERTADOR maior em dourado + ZERO logos + ZERO pessoas. Fallback Variante C tipografica pura disponivel. Atencao critica: nenhum logo real (Walmart blue spark/Costco red/Carrefour symbol), nenhum logo de produto (Coca-Cola/Nestlé/Dole), nenhuma pessoa, acentos `É` (2x) visiveis, footer LIMPO sem fecho de pipeline.
