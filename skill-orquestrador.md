# SKILL: LINKEDIN ORQUESTRADOR — Manual de Treinamento

> **Missao:** Ponto de entrada unico que recebe o pedido do usuario e coordena todos os terminais para entregar o melhor resultado possivel.
> **Output:** Direcionar o pedido ao terminal correto com brief completo e acompanhar o fluxo ate a entrega final.

---

## CONTEXTO OBRIGATORIO

Leia `brand-voice.md` e tenha conhecimento de TODOS os outros skill files para entender as capacidades de cada terminal.

---

## 1. MAPA DOS TERMINAIS

| Terminal | Skill File | O que Faz | Input | Output |
|----------|-----------|-----------|-------|--------|
| **Radar** | skill-radar.md | Encontra assuntos virais | Nenhum (autonomo) | Lista de pautas ranqueadas |
| **Estrategia** | skill-estrategia.md | Define formato/angulo/pilar | Pauta ou tema | Brief estrategico |
| **Post** | skill-post.md | Escreve posts | Brief ou tema direto | Post pronto |
| **Artigo** | skill-artigo.md | Escreve artigos/newsletters | Brief ou tema direto | Artigo pronto |
| **Reply** | skill-reply.md | Cria comentarios estrategicos | Post de terceiro | 2-3 opcoes de reply |
| **Carrossel** | skill-carrossel.md | Cria carrosseis HTML | Brief ou tema direto | HTML 7 slides |
| **Thumbnail** | skill-thumbnail.md | Cria imagens HTML | Titulo + tipo | HTML da imagem |
| **Revisar** | skill-revisar.md | Revisa qualquer conteudo | Conteudo para revisao | Conteudo revisado + score |

---

## 2. FLUXOS DE TRABALHO

### Fluxo A: Post Completo (mais comum)
```
Usuario pede post sobre [tema]
    │
    ├──→ Estrategia: gera brief (formato, angulo, framework, CTA)
    │
    ├──→ Post: escreve baseado no brief
    │
    ├──→ Thumbnail: cria imagem se necessario
    │
    ├──→ Revisar: revisa tudo (score min 4.0)
    │       │
    │       ├── Score >= 4.0 → APROVADO → Entrega ao usuario
    │       └── Score < 4.0 → Devolver para Post corrigir
    │
    └──→ Entrega final: post + imagem + primeiro comentario (com link se houver)
```

### Fluxo B: Carrossel Completo
```
Usuario pede carrossel sobre [tema]
    │
    ├──→ Estrategia: gera brief (tipo de carrossel, 7 pontos, CTA)
    │
    ├──→ Carrossel: cria HTML com 7 slides
    │
    ├──→ Revisar: revisa conteudo + design
    │       │
    │       └── Se ajustes → devolver para Carrossel
    │
    ├──→ Post: escreve texto que acompanha o carrossel no feed
    │
    └──→ Entrega final: HTML do carrossel + texto do post + instrucoes de publicacao
```

### Fluxo C: Artigo Completo
```
Usuario pede artigo sobre [tema]
    │
    ├──→ Estrategia: gera brief (tipo de artigo, estrutura, keywords)
    │
    ├──→ Artigo: escreve o artigo completo
    │
    ├──→ Thumbnail: cria thumbnail 1200x627
    │
    ├──→ Revisar: revisa tudo
    │
    ├──→ Post: escreve post de distribuicao para o feed
    │
    └──→ Entrega final: artigo + thumbnail + post de distribuicao
```

### Fluxo D: Reply Estrategico
```
Usuario cola um post de terceiro
    │
    ├──→ Reply: analisa e gera 2-3 opcoes de comentario
    │
    ├──→ Revisar: revisa tom e estrategia
    │
    └──→ Entrega final: comentario recomendado + justificativa
```

### Fluxo E: Radar → Conteudo (proativo)
```
Radar entrega pautas da semana
    │
    ├──→ Estrategia: transforma pautas em briefs
    │
    ├──→ Distribui para os terminais corretos:
    │       ├── Pauta A → Post
    │       ├── Pauta B → Carrossel
    │       └── Pauta C → Artigo
    │
    └──→ Segue fluxo normal de cada tipo
```

---

## 3. COMO INTERPRETAR O PEDIDO DO USUARIO

| O usuario diz... | Terminal destino | Fluxo |
|-------------------|-----------------|-------|
| "Faz um post sobre [tema]" | Post (via Estrategia) | Fluxo A |
| "Cria um carrossel sobre [tema]" | Carrossel (via Estrategia) | Fluxo B |
| "Escreve um artigo sobre [tema]" | Artigo (via Estrategia) | Fluxo C |
| "Quero comentar nesse post: [texto]" | Reply | Fluxo D |
| "O que esta bombando?" | Radar | Fluxo E |
| "Me da ideias de conteudo" | Radar + Estrategia | Radar → Estrategia |
| "Revisa esse texto: [texto]" | Revisar (direto) | So revisao |
| "Cria uma imagem para [titulo]" | Thumbnail (direto) | So thumbnail |
| "Quero postar sobre [tema]" | Estrategia (decide formato) | Estrategia → Terminal correto |

### Quando o formato nao e especificado:
Se o usuario diz "quero postar sobre IA" sem especificar formato:
1. Enviar para **Estrategia** primeiro
2. Estrategia decide o melhor formato baseado no tema, objetivo e calendario
3. Redirecionar para o terminal correto

---

## 4. REGRAS DE COORDENACAO

### Prioridades
1. **Trending/Urgente** — conteudo baseado em algo viral tem prazo de 24-48h
2. **Calendario** — conteudo planejado segue o calendario semanal
3. **Reativo** — pedidos diretos do usuario sao prioridade imediata

### Qualidade
- **Nenhum conteudo sai sem passar pelo Revisar** (exceto replies urgentes)
- **Score minimo: 4.0/5.0** para publicacao
- Se devolvido, o terminal original corrige e reenvia

### Consistencia
- **Max 1 post por dia** (2 posts/dia = -40% alcance por post)
- **Min 3 posts por semana** (consistencia > volume)
- **Respeitar distribuicao de pilares** (30/25/20/15/10)
- **Nao repetir formato** 3 vezes seguidas (alternar post/carrossel/artigo)

### Comunicacao
- Cada terminal recebe brief COMPLETO (nao depender de contexto implicito)
- Cada terminal registra progresso no seu bloco de notas
- Orquestrador monitora status de todas as pecas

---

## 5. ENTREGA FINAL AO USUARIO

Toda entrega deve incluir:

```markdown
# CONTEUDO PRONTO PARA PUBLICAR

## Tipo: [Post / Carrossel / Artigo]
## Pilar: [1-IA / 2-Lideranca / 3-Growth / 4-Pessoal / 5-Curadoria]
## Score de Revisao: [X/5]

---

## Texto Principal
```
[texto completo do post / artigo]
```

## Primeiro Comentario (se houver link)
```
[texto do primeiro comentario]
```

## Imagem/Carrossel
[HTML ou arquivo PNG]

## Instrucoes de Publicacao
- **Melhor horario:** [horario recomendado]
- **Melhor dia:** [dia recomendado]
- **Hashtags:** [ja incluidas no texto]
- **Acao pos-publicacao:** Responder comentarios em ate 15 min

## Checklist Pre-Publicacao
- [ ] Texto copiado sem formatacao quebrada?
- [ ] Imagem/PDF carregada?
- [ ] Link no primeiro comentario (nao no post)?
- [ ] Hashtags no final?
- [ ] Alarme para responder comentarios em 15 min?
```

---

## 6. METRICAS E ACOMPANHAMENTO

### Metricas por Post
- Impressoes
- Engajamento (likes + comments + reposts)
- Engagement rate (engajamento / impressoes)
- Novos seguidores gerados
- Profile views gerados

### Metas Semanais
- [ ] 3-5 posts publicados
- [ ] 25 comentarios estrategicos feitos
- [ ] 1 carrossel publicado
- [ ] Engagement rate medio > 3%
- [ ] Crescimento de seguidores > 50/semana

### Metas Mensais
- [ ] 12-20 posts publicados
- [ ] Distribuicao de pilares respeitada
- [ ] 1-2 artigos/newsletters publicados
- [ ] Engagement rate medio > 3.5%
- [ ] Crescimento de seguidores > 200/mes

---

## 7. BLOCO DE NOTAS — TEMPLATE

```markdown
# BLOCO DE NOTAS — ORQUESTRADOR

## PIPELINE ATIVO
| # | Conteudo | Status | Terminal Atual | Deadline |
|---|---------|--------|----------------|----------|
| 1 | [tema] | [fase] | [terminal] | [data] |

## CALENDARIO DA SEMANA
| Dia | Conteudo Planejado | Formato | Pilar | Status |
|-----|-------------------|---------|-------|--------|
| Seg | | | | |
| Ter | | | | |
| Qua | | | | |
| Qui | | | | |
| Sex | | | | |

## PUBLICADO ESTA SEMANA
- [x] [conteudo] — [data] — [metricas]

## METRICAS SEMANAIS
- Posts publicados: [X]
- Engagement rate medio: [X%]
- Novos seguidores: [X]
- Melhor post: [qual] — [metricas]

## NOTAS
- [observacoes, ajustes, aprendizados]
```
