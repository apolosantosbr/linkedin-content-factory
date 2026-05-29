# BLOCO DE NOTAS — THUMBNAIL PIPELINE POST 4 · EMBRAER/VALE/WEG IA PREDITIVA

> STATUS: EM PRODUCAO → CONCLUIDO
> Pasta: posts/2026-06-05_embraer-vale-weg-ia-preditiva/
> Politica vigente: REGRA 11 — apenas thumbnail-prompt.md (sem HTML, sem PNG)
> Publicacao: Sex 05/06/2026 10h00 BRT — quarta peca do pipeline pos-serie 4Ds
> REGRA DURA v2.1: post INDEPENDENTE — footer LIMPO (sem "OS 4Ds DA IA", sem "POST X DE 7")

---

## CONCEITO — IMAGEM DE ATENCAO (foto industrial unificada + 3 nomes header + money line)

Quarta thumb do pipeline. Segunda IMAGEM DE ATENCAO (P2 iFood foi a primeira, com cena cozinha). Aqui o universo e INDUSTRIAL — turbina ou motor closeup, paleta dessaturada cinza-grafite/azul-escuro/bronze metalico. Primeira COMPARATIVO de 3 cases do pipeline.

**Layout (3 camadas tipograficas sobre foto):**
- Banda superior (~80px) sobre dark scrim: header `EMBRAER · VALE · WEG` em condensed caps dourado matte `#C9A14A`
- Foto industrial dominando o centro
- Centro inferior sobre dark scrim: money line empilhada em 3 linhas
- Banda inferior (~50px): footer LIMPO `APOLO SANTOS · 3 INDÚSTRIAS BR · IA PREDITIVA · CC BY-NC-SA 4.0`

**Money line:**
- Linha 1: `IA PREDITIVA NÃO É LUXO` (creme)
- Linha 2: `DE GIGANTE.` (creme)
- Linha 3: `É SENSOR EM EQUIPAMENTO CERTO.` (dourado, com `SENSOR` ~40% MAIOR — palavra-martelo)

**CRITICO:** ZERO logos reais Embraer/Vale/WEG/Caterpillar — so tipografia dos nomes setada pelo designer.

---

## FORMATO

1080x1350 (4:5 portrait, padrao LinkedIn feed)

---

## PALETA

| Cor | Hex | Uso |
|-----|-----|-----|
| Tons industriais | foto base | Cinza-grafite #2A2D33, azul-escuro #1A2A3F, bronze-gold metalico, faisca laranja sutil |
| Creme | `#F4EFE5` | Linhas 1-2 da money line + footer |
| Dourado matte | `#C9A14A` | Header 3 nomes + `SENSOR` palavra-martelo + linha 3 da money line + bullets footer |
| Preto translucido | `#0E0E10` (60-70%) | Dark scrim sobre header e money line |

---

## ACENTOS PT-BR — REGRA DURA (4 diacriticos)

Conferir visualmente:
- `NÃO` — til no A (linha 1 da money line)
- `É` linha 1 — agudo no E (em "NÃO É LUXO")
- `É` linha 3 — agudo no E (em "É SENSOR")
- `INDÚSTRIAS` — agudo no U (footer)

Demais palavras sem acento — manter sem acento.

Se a ferramenta omitir qualquer um, regenerar ou trocar.

---

## VARIANTES ENTREGUES

- **Variante A:** foto industrial unificada turbina/motor closeup (cena principal, recomendada)
- **Variante B:** 3 paineis horizontais (1 empresa cada com foto + nome + 1 dado-chave) — mais saveable, menos emocional, pode virar slide 2 de carrossel
- **Variante C:** tipografico puro sem foto (fundo navy + texto puro) — fallback seguro se IA falhar em gerar foto industrial sem logo real

---

## CHECKLIST DE PRODUCAO

- [x] Ler estrategia.md (SECAO 6 thumbnail + SECAO 9 brief executivo 10 specs)
- [x] Ler notas-radar-pipeline-post4-embraer-vale-weg.md (existe — radar)
- [x] Ler feedback_acentos_portugues.md (acentos all-caps)
- [x] Prompt principal cinematografico autocontido (ingles, foto industrial editorial + scrim duplo + 3 nomes header + money line + footer)
- [x] Negative prompt forte: ZERO logos reais (Embraer/Vale/WEG/Caterpillar/qualquer brand mark) + sem figura humana + sem AI-hand cliche + sem 3D + sem Industria 4.0 trope + footer LIMPO + acentos
- [x] 3 variantes (A turbina/motor unificado / B 3 paineis horizontais / C tipografico puro fallback)
- [x] Checklist pos-geracao 19 itens (acentos regra dura 4 diacriticos + sem logos reais + sem figura humana + parece foto industrial editorial real + SENSOR maior + footer LIMPO)
- [x] Tabela 6 ferramentas + fluxo recomendado (ChatGPT image rapido / MJ+editor qualidade maxima / Variante C como fallback se IA falhar com foto industrial sem logo)
- [x] Nota de coesao com pipeline pos-serie (P2 vs P4 distincao foto cozinha vs foto industrial; padrao reutilizavel pra P9)

---

## ENTREGUE

- [x] **thumbnail-prompt.md** criado em `/posts/2026-06-05_embraer-vale-weg-ia-preditiva/thumbnail-prompt.md`
- [x] Conceito: IMAGEM DE ATENCAO foto industrial unificada + 3 nomes header dourado + money line com SENSOR
- [x] Formato 1080x1350 (4:5 portrait)
- [x] Header em tipografia pura (SEM logos reais das 3 empresas — regra critica)
- [x] Money line em 3 linhas com `SENSOR` em dourado ~40% maior (palavra-martelo)
- [x] 4 acentos marcados como regra dura: `NÃO`, `É` (2 ocorrencias), `INDÚSTRIAS`
- [x] Variantes: 3 (A foto unificada / B 3 paineis / C tipografico puro fallback)
- [x] Footer LIMPO confirmado: `APOLO SANTOS · 3 INDÚSTRIAS BR · IA PREDITIVA · CC BY-NC-SA 4.0` (regra v2.1)
- [x] Ferramenta recomendada: **ChatGPT image (DALL-E 3)** caminho rapido; **Midjourney v6 sem texto + montagem em editor** pra qualidade maxima de foto industrial + controle tipografico total dos 3 nomes alinhados e SENSOR maior; **Variante C** como fallback seguro se IA falhar

---

## HISTORICO DE CONCEITOS DE THUMB NO PIPELINE POS-SERIE

| Data | Post | Conceito | Variacao |
|------|------|----------|----------|
| 26/05 | Pipeline P1 (5 prompts) | CONTEUDISTA | cards numerados verticais |
| 29/05 | Pipeline P2 (iFood Cris) | IMAGEM DE ATENCAO | foto cozinha BR + money line ENCAIXOU |
| 02/06 | Pipeline P3 (10 ferramentas) | CONTEUDISTA | tabela tabular com pills coloridas |
| **05/06** | **Pipeline P4 (Embraer/Vale/WEG)** | **IMAGEM DE ATENCAO** | **foto industrial + 3 nomes header + money line SENSOR** |
| previsto 09/06 | Pipeline P5 (3 perguntas) | ATENCAO | dica |
| previsto 13/06 | Pipeline P6 (Stone) | ATENCAO | case BR |
| previsto 16/06 | Pipeline P7 (B2B) | CONTEUDISTA | aplicacao |
| previsto 20/06 | Pipeline P8 (stacks) | CONTEUDISTA | lista |
| previsto 23/06 | Pipeline P9 (Walmart/Costco) | ATENCAO | comparativo |
| previsto 27/06 | Pipeline P10 (bonus) | a definir | a definir |

---

## HERANCA VISUAL DO P4 PRO PIPELINE

Este post estreia o **padrao de IMAGEM DE ATENCAO COMPARATIVA**:
- Foto editorial real (sem logos reais)
- Banda superior com nomes das empresas em tipografia pura dourada (zero logos)
- Money line empilhada com palavra-martelo dourada (SENSOR aqui)
- Footer LIMPO com tag tematica (`3 INDÚSTRIAS BR · IA PREDITIVA`)

Reutilizavel pra P9 (Walmart/Costco/Carrefour) — exatamente a mesma estrutura, paleta varejo + 3 nomes header + nova palavra-martelo.

---

## STATUS FINAL

CONCLUIDO. Pronto pra Revisar. Apolo gera a imagem: caminho rapido no ChatGPT image (DALL-E 3), ou caminho qualidade maxima gerando foto industrial unificada no Midjourney v6 (sem texto, sem logos) e montando 3 nomes header + money line + footer por cima em editor. Regra dura: ZERO logos reais Embraer/Vale/WEG/Caterpillar, sem figura humana, sem AI-hand cliche, acentos `NÃO`/`É` (2x)/`INDÚSTRIAS` visiveis; aceite central — se parecer Industria 4.0 trope cliche ou render 3D em vez de foto industrial editorial real, regenerar. Fallback seguro Variante C (tipografico puro sobre navy) documentado caso nenhuma IA convergir.
