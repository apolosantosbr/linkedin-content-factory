# NOTAS POST — PRODUÇÃO FEED SEMANA 08-14/06/2026 (terminal /linkedin-post)

> Origem: grade ESTRATÉGIA `notas/estrategia/notas-estrategia-semana-08jun.md` + banco RADAR `notas/radar/notas-radar-semana-09jun.md`.
> Sistema Content Factory v3, Arquétipo B. Calibragem v2 aplicada.
> Meus itens (Carrossel 1 e 4 = terminal Carrossel; Raio-X 8 = terminal Artigo): 2, 3, 5, 6, 7, 9, 10.

## STATUS — TODOS REDIGIDOS ✅

| # | Data | Pasta | Formato | Inimigo | Status |
|---|---|---|---|---|---|
| 2 | 09/06 09h00 | 2026-06-09_teatro-do-layoff | Bomba | Consultor-de-livro | ✅ pronto |
| 3 | 09/06 14h30 | 2026-06-09_escale-700-postos-ia | Case/motor | Carimbador | ✅ pronto (capricho analista) |
| 5 | 10/06 15h30 | 2026-06-10_meta-cobranca-whatsapp | Previsão datada | Auditor | ✅ pronto |
| 6 | 11/06 10h30 | 2026-06-11_trade-republic-bot-vs-humano | Mito vs Verdade | Consultor-de-livro | ✅ pronto (URL a confirmar) |
| 7 | 11/06 15h30 | 2026-06-11_poll-bot-vs-humano-venda | Poll | — | ✅ pronto |
| 9 | 12/06 16h00 | 2026-06-12_confissao-piloto-travado | Confissão | Auditor | ✅ pronto (relato a confirmar) |
| 10 | 13/06 11h00 | 2026-06-13_build-in-public-whatsapp-7-dias | Build in public | — | ✅ pronto (campos a preencher) |

## REGRAS APLICADAS (calibragem v2)
- Hook ≤140 chars com número (parti dos hooks da grade, refinei).
- Faixas: case 1.800-2.200 · bomba 300-450 · poll 400-700 · confissão 900-1.400.
- SEM hífen/travessão · CAPS em 3-5 ênfases · money line isolada 6-12 palavras (2+ CAPS).
- CTA SAVE secundário + pergunta de engajamento em todos · 3 hashtags PascalCase com #PMEoperando fixa.
- Link e fonte no 1º COMENTÁRIO; atribuição curta entre parênteses no corpo. Cada post standalone.
- Anti-slop vetado: navegar/robusto/ecossistema/alavancar/potencializar (+ slop da brand-voice).

## AJUSTES DO REVISAR INCORPORADOS
- Sebrae/Nautis NÃO entrou nos meus itens (são dos carrosséis 1/4) — sem risco de tratar pesquisa como fato duro aqui.
- Tudo de Meta usa o verbatim corrigido: "em minutos", "1 milhão e mais ... 24h", "desde fev/2026" (citado quando cabe), "+10% nos negócios".
- Escale "+40% conversão" = "segundo a Escale" (claim não auditado); "aisa" roda sobre GPT/Claude, não é modelo próprio.
- Case Escale com capricho extra: tom de analista, reconhece as 700 vagas sem maquiar, desmonta o hype do "modelo mágico".

## PENDÊNCIAS PRO APOLO (antes de publicar)
1. **Item 6 (Trade Republic):** colar a URL da matéria no 1º comentário. O Radar trouxe o fato como lente, sem link fechado.
2. **Item 9 (confissão):** confirmar se o relato (3 meses de trava, bug bobo) bate com a história real e ajustar o detalhe.
3. **Item 10 (build in public):** rodar o teste 06-12/06 e preencher os campos [X][Y][Z][A][B] com o número CRU. Sem isso, não publicar. É o slot-válvula (1º a cortar pelo freio LEADING).

## VERIFICAÇÃO — RESULTADO
**Determinística (Python/grep):** todos os corpos dentro da faixa (bomba 430, case 1.909, poll 623, confissão 1.187). ZERO hífen/travessão nos 7 corpos. Hooks ≤140. Hashtags dentro do bloco. Anti-slop: LIMPO (nenhum termo vetado).

**Adversarial (7 revisores céticos, 1 por post — workflow):** TODOS pass, zero violação bloqueante.
| # | Post | Score |
|---|---|---|
| 2 | teatro-do-layoff | 4.8 |
| 3 | escale-700-postos-ia | 4.9 |
| 5 | meta-cobranca-whatsapp | 4.8 |
| 6 | trade-republic | 4.8 |
| 7 | poll-bot-vs-humano | 4.8 |
| 9 | confissao-piloto-travado | 4.9 |
| 10 | build-in-public-whatsapp | 4.9 |

Todos ≥4.5 → auto-passam (Apolo só precisa olhar os pontos pendentes abaixo, não a qualidade).
Único refino aplicado pós-review: nota no 1º comentário do item 3 sobre o slug "125 mi" da URL vs R$ 130 mi vigente (evita confusão de quem clica).
