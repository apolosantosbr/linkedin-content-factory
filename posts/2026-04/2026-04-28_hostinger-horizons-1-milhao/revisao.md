# Revisao Editorial — Horizons 1M usuarios

**Data da revisao:** 22/04/2026
**Revisor:** Claude (auditor LinkedIn Content Factory)
**Score:** 4.5 / 5
**Aprovacao final:** SIM, com ajuste pontual obrigatorio no thumbnail

---

## CHECK LIST DETALHADO

| Item | Status | Observacao |
|---|---|---|
| Hook forte nos primeiros 210 chars | OK | "O vibe coding acabou de cruzar a linha que separa hype de realidade. 1 milhao de pessoas ja construiram alguma coisa no Horizons em 12 meses (Hostinger Blog, mar/2026)." |
| Dado com fonte entre parenteses | OK | (Hostinger Blog, mar/2026) |
| SEM hifen/travessao | OK | Nenhum — ou - travessao no corpo |
| 3 a 5 CAPS LOCK | OK | 4 blocos: 1 MILHAO DE USUARIOS EM 12 MESES / NAO E MAIS PROMESSA, E PRODUCAO / 49% ESTAO MONETIZANDO / O GARGALO MUDOU DE LUGAR |
| 1300 a 1900 chars no corpo | OK | ~1593 chars (dentro da faixa) |
| Zero links no corpo | OK | Apenas no 1o comentario |
| CTA com link https://www.hostinger.com/automatik | OK | Presente |
| CTA menciona 60% OFF | OK | "60% OFF no plano anual" |
| Tom de parceiro oficial natural | OK | "Eu acompanho a plataforma por dentro como parceiro oficial" — nao soa press release |
| Acentos portugues corretos no texto | OK | Texto 100% acentuado |
| Acentos portugues corretos no HTML da thumb | FALHA | "de usuarios construiram algo em 12 meses" — falta acento em "usuarios" e "construiram" |
| Thumb usa logo Hostinger | OK | Hostinger_Horizontal_White.png com rotulo "Parceiro Oficial" |
| Template distinto dos outros | OK | T1 NUMERO HERO com mesh gradient roxo |
| Slop (15 palavras proibidas) | OK | Zero ocorrencias |
| Horario de postagem definido | OK | Ter 28/04/2026, 10h BRT |

---

## PONTOS FORTES

1. **Hook de classe A.** Abre com afirmacao forte, entrega o dado bomba na 2a linha com fonte entre parenteses, e ja empilha o CAPS LOCK na linha 3. Quebra scroll no LinkedIn.
2. **Virada de argumento ("o gargalo mudou de lugar") e o melhor do texto.** Monta o raciocinio em 3 blocos curtos antes de entregar a tese. E memoravel.
3. **Exemplos concretos sem virar listinha generica.** "Dono de ecommerce subiu catalogo inteiro num fim de semana", "consultor criando plataforma de assinatura sem contratar dev". Isso humaniza a estatistica.
4. **Parceria aparece natural, nao como ad.** A frase "eu acompanho a plataforma por dentro como parceiro oficial" justifica autoridade e ancora o CTA sem ser invasiva.
5. **Thumbnail T1 Numero Hero entrega o dado em 2 segundos.** 1.000.000 em 180px com gradiente roxo Hostinger e leitura instantanea.

---

## PROBLEMAS ENCONTRADOS

### 1. Acentos faltando no thumbnail (BLOQUEADOR)

No arquivo `thumbnail.html` linha 174:

```html
<div class="subtitle">de usuarios construiram algo em <span class="mute">12 meses</span></div>
```

Deve ser:

```html
<div class="subtitle">de usuarios construiram algo em <span class="mute">12 meses</span></div>
```

Correcao: trocar para `usuarios` -> `usuários` e `construiram` -> `construíram`.

Essa e uma regra explicita no MEMORY.md do projeto (feedback_acentos_portugues.md) e nao pode ser aprovada sem ajuste.

---

## SUGESTAO DE CORRECAO PONTUAL

Editar `thumbnail.html` linha 174 e re-renderizar o PNG.

Trocar:
- `usuarios` -> `usuários`
- `construiram` -> `construíram`

Linha final:
`<div class="subtitle">de usuários construíram algo em <span class="mute">12 meses</span></div>`

Depois disso, rodar novamente o render (playwright screenshot do HTML em 1200x630) para substituir `thumbnail.png`.

Nada mais precisa mudar. O resto esta publicavel como esta.

---

## APROVACAO FINAL

**SIM, condicionada** a correcao dos 2 acentos no thumbnail.html + regerar PNG.

Apos o ajuste, post esta pronto para publicar em Ter 28/04/2026 as 10h00 BRT.
