# SKILL: CARROSSEL — Manual de Treinamento

> **Missao:** Criar carrosseis com 7 slides em HTML (1080x1350), otimizados para engajamento maximo.
> **Plataforma padrao:** LinkedIn. **Modo alternativo:** Instagram (ativado por solicitacao explicita).
> **Output:** Arquivo HTML com 7 slides prontos para screenshot/conversao em PDF (LinkedIn) ou PNG individual (Instagram).

---

## MODO DE PLATAFORMA

**LinkedIn (padrao):** Ativo por default. Siga todas as regras deste manual sem ajustes.

**Instagram (opt-in):** Ativado apenas quando o usuario pedir explicitamente ("carrossel pro Instagram", "--platform instagram", "versao IG", etc). Aplique os overrides descritos na **SECAO 10 — MODO INSTAGRAM** ao final deste manual.

Nunca gere carrossel Instagram sem pedido explicito. Quando em duvida, pergunte.

---

## CONTEXTO OBRIGATORIO

Antes de criar qualquer carrossel, leia `brand-voice.md` para tom, estilo e regras visuais.

---

## 1. POR QUE CARROSSEL E O FORMATO CAMPEAO

- **6.6-7.0% de engagement rate** — o maior de todos os formatos no LinkedIn
- **+14% YoY** — crescendo ano a ano
- **7 slides** e o numero ideal (18% melhor que qualquer outro tamanho)
- **Formato 1080x1350** (vertical) ocupa mais espaco no mobile
- Carrosseis com **texto > imagens** (storytelling vence)
- Primeiro slide com design **bold e cores contrastantes** gera 2.8x mais cliques

---

## 2. ANATOMIA DO CARROSSEL PERFEITO

```
SLIDE 1 — CAPA (O Hook Visual)
├── Titulo provocativo/curioso (max 8 palavras)
├── Subtitulo de 1 linha (contexto)
├── Design bold, cores contrastantes
├── Nome "Apolo Santos" visivel
└── "Arraste para o lado -->"

SLIDE 2 — CONTEXTO
├── Introduz o problema ou tema
├── Por que isso importa
└── Cria tensao para continuar

SLIDE 3-5 — CONTEUDO CORE
├── 1 ideia por slide (NUNCA mais)
├── Titulo do ponto em bold
├── Explicacao em 2-3 linhas
├── Icone ou elemento visual de suporte
└── Teaser para o proximo slide no rodape

SLIDE 6 — CLIMAX / INSIGHT PRINCIPAL
├── O grande aprendizado ou insight
├── A tese central do carrossel
└── Momento "aha!" do leitor

SLIDE 7 — CTA
├── Resumo em 1 frase
├── CTA claro (seguir, salvar, comentar)
├── @apolosantos (perfil)
└── Design marcante de fechamento
```

---

## 3. TIPOS DE CARROSSEL

### Framework / Passo a Passo (Pilar 1 e 3)
```
Slide 1: "Como usar IA para [resultado] em [tempo]"
Slide 2: O problema que a maioria enfrenta
Slide 3: Passo 1 — [acao]
Slide 4: Passo 2 — [acao]
Slide 5: Passo 3 — [acao]
Slide 6: O resultado final + dados
Slide 7: CTA — "Salva pra consultar depois"
```

### Lista Curada (Pilar 5)
```
Slide 1: "7 ferramentas de IA que todo founder precisa"
Slide 2: Ferramenta 1 — O que faz + por que usar
Slide 3: Ferramenta 2
Slide 4: Ferramenta 3
Slide 5: Ferramenta 4-5 (agrupadas)
Slide 6: Ferramenta 6-7 (agrupadas)
Slide 7: CTA — "Qual voce ja usa? Comenta"
```

### Mito vs. Realidade (Pilar 2)
```
Slide 1: "5 mentiras que te contam sobre IA"
Slide 2: Mito 1 → Realidade
Slide 3: Mito 2 → Realidade
Slide 4: Mito 3 → Realidade
Slide 5: Mito 4 → Realidade
Slide 6: Mito 5 → Realidade + insight
Slide 7: CTA — "Concorda ou discorda?"
```

### Antes/Depois (Pilar 4)
```
Slide 1: "Como [tema] mudou meu [resultado]"
Slide 2: ANTES — como era (com dor)
Slide 3: O momento de virada
Slide 4: DEPOIS — como e agora (com resultado)
Slide 5: O que aprendi
Slide 6: O que voce pode aplicar hoje
Slide 7: CTA — "Ja passou por transformacao parecida?"
```

---

## 4. DESIGN SPECS

### Dimensoes
- **Tamanho:** 1080 x 1350 px (vertical, 4:5)
- **Safe zone:** 60px de margem em todos os lados
- **Fonte titulo:** 48-64px bold
- **Fonte corpo:** 28-36px regular
- **Fonte rodape:** 20-24px

### Paleta de Cores (Brand)
```css
/* Cores primarias */
--bg-dark: #0A0A0A;        /* fundo escuro principal */
--bg-card: #1A1A2E;        /* fundo de cards */
--accent-primary: #00D4FF;  /* azul neon — destaques */
--accent-secondary: #7C3AED; /* roxo — secundario */
--accent-gradient: linear-gradient(135deg, #00D4FF, #7C3AED);
--text-primary: #FFFFFF;     /* texto principal */
--text-secondary: #A0AEC0;   /* texto secundario */
--text-accent: #00D4FF;      /* texto destaque */

/* Cores de suporte */
--success: #10B981;          /* verde — positivo */
--warning: #F59E0B;          /* amarelo — atencao */
--error: #EF4444;            /* vermelho — negativo */
```

### Tipografia
```css
/* Fontes */
font-family: 'Inter', 'SF Pro Display', -apple-system, sans-serif;

/* Hierarquia */
h1 { font-size: 56px; font-weight: 800; line-height: 1.1; }
h2 { font-size: 40px; font-weight: 700; line-height: 1.2; }
p  { font-size: 32px; font-weight: 400; line-height: 1.4; }
.small { font-size: 24px; }
.label { font-size: 20px; text-transform: uppercase; letter-spacing: 2px; }
```

### Elementos Visuais
- **Bordas arredondadas:** 16px em cards
- **Sombras:** box-shadow sutis com a cor accent
- **Icones:** emojis ou SVG simples (nao usar imagens complexas)
- **Separadores:** linhas com gradient accent
- **Numeracao:** numeros grandes (80px+) com cor accent como elemento visual
- **Badges/Tags:** fundo semi-transparente com borda

---

## 5. TEMPLATE HTML BASE

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }

  .slide {
    width: 1080px;
    height: 1350px;
    padding: 60px;
    background: #0A0A0A;
    color: #FFFFFF;
    font-family: 'Inter', -apple-system, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    page-break-after: always;
  }

  /* Slide 1 — Capa */
  .slide-cover {
    background: linear-gradient(135deg, #0A0A0A 0%, #1A1A2E 100%);
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  .slide-cover h1 {
    font-size: 56px;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 24px;
    background: linear-gradient(135deg, #00D4FF, #7C3AED);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .slide-cover .subtitle {
    font-size: 28px;
    color: #A0AEC0;
    margin-bottom: 48px;
  }
  .slide-cover .author {
    font-size: 22px;
    color: #00D4FF;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .slide-cover .swipe {
    position: absolute;
    bottom: 60px;
    right: 60px;
    font-size: 20px;
    color: #A0AEC0;
  }

  /* Slides de conteudo */
  .slide-content .number {
    font-size: 96px;
    font-weight: 900;
    background: linear-gradient(135deg, #00D4FF, #7C3AED);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 16px;
  }
  .slide-content h2 {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 24px;
    line-height: 1.2;
  }
  .slide-content p {
    font-size: 30px;
    line-height: 1.5;
    color: #A0AEC0;
  }
  .slide-content .highlight {
    color: #00D4FF;
    font-weight: 600;
  }
  .slide-content .teaser {
    position: absolute;
    bottom: 60px;
    right: 60px;
    font-size: 20px;
    color: #7C3AED;
  }

  /* Slide CTA */
  .slide-cta {
    text-align: center;
    align-items: center;
    background: linear-gradient(135deg, #1A1A2E 0%, #0A0A0A 100%);
  }
  .slide-cta h2 {
    font-size: 44px;
    font-weight: 700;
    margin-bottom: 32px;
  }
  .slide-cta .cta-text {
    font-size: 28px;
    color: #A0AEC0;
    margin-bottom: 48px;
  }
  .slide-cta .follow {
    display: inline-block;
    padding: 20px 48px;
    background: linear-gradient(135deg, #00D4FF, #7C3AED);
    border-radius: 50px;
    font-size: 24px;
    font-weight: 700;
    color: white;
  }
  .slide-cta .handle {
    margin-top: 32px;
    font-size: 22px;
    color: #00D4FF;
  }

  /* Utilidades */
  .card {
    background: #1A1A2E;
    border-radius: 16px;
    padding: 32px;
    margin: 16px 0;
    border: 1px solid rgba(0, 212, 255, 0.1);
  }
  .divider {
    height: 3px;
    background: linear-gradient(90deg, #00D4FF, #7C3AED);
    margin: 32px 0;
    border-radius: 2px;
  }
  .badge {
    display: inline-block;
    padding: 8px 20px;
    background: rgba(0, 212, 255, 0.1);
    border: 1px solid rgba(0, 212, 255, 0.3);
    border-radius: 50px;
    font-size: 18px;
    color: #00D4FF;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
</style>
</head>
<body>

<!-- SLIDE 1 — CAPA -->
<div class="slide slide-cover">
  <div class="badge">IA & MARKETING</div>
  <h1>[TITULO PROVOCATIVO DO CARROSSEL]</h1>
  <p class="subtitle">[Subtitulo — 1 linha de contexto]</p>
  <p class="author">Apolo Santos</p>
  <p class="swipe">Arraste para o lado →</p>
</div>

<!-- SLIDE 2 — CONTEXTO -->
<div class="slide slide-content">
  <div class="number">00</div>
  <h2>[O problema / contexto]</h2>
  <p>[Explicacao em 2-3 linhas que cria tensao e curiosidade para continuar]</p>
  <p class="teaser">Proximo: a solucao →</p>
</div>

<!-- SLIDES 3-5 — CONTEUDO -->
<div class="slide slide-content">
  <div class="number">01</div>
  <h2>[Ponto 1 — titulo curto]</h2>
  <p>[Explicacao clara e direta em 2-3 linhas. Use <span class="highlight">destaque</span> para palavras-chave.]</p>
  <p class="teaser">Proximo →</p>
</div>

<!-- Repetir para slides 4 e 5 -->

<!-- SLIDE 6 — INSIGHT PRINCIPAL -->
<div class="slide slide-content">
  <div class="number">→</div>
  <h2>[O grande insight / conclusao]</h2>
  <div class="card">
    <p>[A tese central do carrossel resumida de forma impactante]</p>
  </div>
</div>

<!-- SLIDE 7 — CTA -->
<div class="slide slide-cta">
  <h2>[Resumo em 1 frase impactante]</h2>
  <p class="cta-text">[CTA: pergunta ou acao]</p>
  <div class="follow">Seguir para mais →</div>
  <p class="handle">@apolosantos</p>
</div>

</body>
</html>
```

---

## 6. REGRAS DE DESIGN

1. **1 ideia por slide** — se precisa de 2 paragrafos, o slide esta cheio demais
2. **Contraste alto** — fundo escuro + texto claro. Nao usar cinza claro sobre branco
3. **Hierarquia clara** — numero grande → titulo → corpo → teaser
4. **Consistencia** — mesmo estilo em todos os slides. Nao misturar estilos
5. **Slide 1 e tudo** — se o slide 1 nao prende, ninguem ve os outros 6
6. **Teaser no rodape** — cada slide termina com "proximo: [preview]" para manter swipe
7. **Legibilidade mobile** — fonte minima de 28px no corpo
8. **Sem imagens de banco** — use icones, numeros, formas geometricas, gradients

---

## 7. CONVERSAO HTML → PDF/PNG

### Metodo 1: Screenshot (rapido)
```bash
# Abrir o HTML no navegador e screenshot de cada slide
# Resolucao: 1080x1350 por slide
```

### Metodo 2: Puppeteer/Playwright (automatizado)
```javascript
// Capturar cada .slide como PNG separado
// Combinar em PDF para upload no LinkedIn
```

### Metodo 3: Manual
- Abrir HTML no Chrome
- DevTools → Toggle Device → Custom (1080x1350)
- Screenshot de cada slide
- Combinar em PDF

---

## 8. CHECKLIST PRE-PUBLICACAO

- [ ] Exatamente 7 slides?
- [ ] Dimensao 1080x1350 por slide?
- [ ] Slide 1 com titulo provocativo (max 8 palavras)?
- [ ] 1 ideia por slide (sem excecao)?
- [ ] Teaser no rodape de cada slide (exceto slide 7)?
- [ ] Slide 7 com CTA claro?
- [ ] @apolosantos visivel na capa e no CTA?
- [ ] Fonte minima 28px no corpo?
- [ ] Cores dentro da paleta definida?
- [ ] Tom alinhado com brand-voice.md?
- [ ] PDF gerado e testado no LinkedIn preview?

---

## 9. MODO INSTAGRAM (opt-in)

> **Ativacao:** Apenas quando o usuario pedir explicitamente. Caso contrario, ignore esta secao.

O conteudo do artigo e o mesmo. O que muda e o invólucro: copy do CTA, legenda, overlays de UI e regras da plataforma. Formato visual (1080x1350, 4:5) e paleta continuam identicos — simplifica a producao.

### 9.1 Diferencas vs. LinkedIn

| Item | LinkedIn (padrao) | Instagram (opt-in) |
|---|---|---|
| Tamanho | 1080x1350 (4:5) | **1080x1350 (4:5)** — mesmo |
| Max slides | 7 recomendado | 7 ok (ate 10 permitido) |
| Slide 1 — "Arraste para o lado →" | Sim | **Remover** — usuario IG ja sabe deslizar |
| Nome "Apolo Santos" na capa | Sim | **Trocar por @jogodagestao** (IG e handle-first) |
| CTA principal | "Seguir para mais", "Comenta abaixo" | **"Salva pra depois"**, "Compartilha nos stories" |
| Handle no slide 7 | @apolosantos | **@jogodagestao** |
| Safe zone top/bottom | 60px | **120px** (IG sobrepoe UI de like/comment no preview) |
| Hashtags | Nenhuma ou 1-3 | **3-5 estrategicas** — incluir no artigo de legenda, nao no slide |
| Fonte "Apolo Santos" | Visivel | Nao usar — so @apolosantos |
| Dados/fontes | Citar no slide (regra do projeto) | **Citar no slide igual** (regra do projeto mantem) |

### 9.2 Overrides no template HTML

Quando em modo Instagram, aplicar estes ajustes no template base da **SECAO 5**:

```css
/* Aumentar safe zone para evitar overlap com UI do IG */
.slide { padding: 120px 60px; }
```

```html
<!-- SLIDE 1 — CAPA (Instagram) -->
<div class="slide slide-cover">
  <div class="badge">IA & MARKETING</div>
  <h1>[TITULO PROVOCATIVO DO CARROSSEL]</h1>
  <p class="subtitle">[Subtitulo — 1 linha de contexto]</p>
  <p class="author">@apolosantos</p>
  <!-- REMOVER: <p class="swipe">Arraste para o lado →</p> -->
</div>

<!-- SLIDE 7 — CTA (Instagram) -->
<div class="slide slide-cta">
  <h2>[Resumo em 1 frase impactante]</h2>
  <p class="cta-text">Salva pra quando precisar.</p>
  <div class="follow">@apolosantos</div>
</div>
```

### 9.3 CTA por tipo de carrossel (Instagram)

| Tipo | CTA LinkedIn | CTA Instagram |
|---|---|---|
| Framework / Passo a passo | "Segue para mais frameworks" | **"Salva pra consultar depois"** |
| Lista curada | "Qual voce ja usou? Comenta" | **"Marca alguem que precisa ver isso"** |
| Mito vs. Realidade | "Concorda? Comenta" | **"Compartilha nos stories pra educar a galera"** |
| Antes/Depois | "Ja passou por isso?" | **"Salva e tenta aplicar essa semana"** |

### 9.4 Legenda para o post (Instagram)

Quando em modo IG, **tambem entregue a legenda pronta** para colar no Instagram (diferente do LinkedIn onde o artigo inteiro vai no post):

```markdown
[Hook de 1 linha — mesma energia do slide 1]

[2-4 linhas expandindo o tema do carrossel]

[1 pergunta pro comentario]

Salva pra depois. Compartilha com quem precisa ver.

—
#IA #MarketingDigital #Produtividade [+1-2 hashtags do nicho do post]
```

Regras da legenda IG:
- Maximo 5 hashtags (IG 2026 penaliza spam de hashtag)
- Primeira linha e o hook — aparece no feed antes do "... mais"
- Nao repetir o texto do slide 1 exatamente
- CTA de salvar + compartilhar (sinais mais fortes no algoritmo 2026)

### 9.5 Checklist Instagram (adicional ao da Secao 8)

- [ ] Slide 1 SEM "Arraste para o lado →"?
- [ ] Slide 1 com @apolosantos (nao "Apolo Santos")?
- [ ] Safe zone de 120px top/bottom aplicada?
- [ ] CTA do slide 7 adaptado para IG ("Salva", "Compartilha", "Marca")?
- [ ] Legenda pronta entregue junto com os slides?
- [ ] Hashtags (3-5) selecionadas para o nicho do post?
- [ ] Dados/fontes citados igual LinkedIn (regra do projeto)?

### 9.6 Output do modo Instagram

Quando em modo IG, entregar **dois artefatos**:

1. `carrossel-instagram.html` — HTML com os 7 slides ja ajustados
2. `legenda-instagram.md` — Legenda pronta para colar no post

Salvar ambos na pasta do post (`posts/AAAA-MM-DD_titulo/`).

---

## 10. BLOCO DE NOTAS — TEMPLATE

```markdown
# BLOCO DE NOTAS — CARROSSEIS

## PENDENTE
- [ ] [Carrossel sobre X] — Brief recebido em [data]

## EM PROGRESSO
- [ ] [Carrossel sobre Y] — [texto pronto / design em andamento]

## AGUARDANDO REVISAO
- [ ] [Carrossel sobre Z] → Enviado para /linkedin-revisar em [data]

## PRONTO (HTML finalizado)
- [ ] [Carrossel sobre W] — HTML pronto, aguardando conversao PDF

## PUBLICADO
- [x] [Carrossel sobre V] — Publicado em [data] — [metricas]
```
