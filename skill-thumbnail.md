# SKILL: LINKEDIN THUMBNAIL & IMAGEM — Manual de Treinamento

> **Missao:** Criar thumbnails e imagens de posts com VARIEDADE VISUAL — nunca o mesmo estilo repetido.
> **Output:** HTML pronto para conversao em PNG, com estilo rotativo entre 10+ templates.

---

## CONTEXTO OBRIGATORIO

Antes de criar qualquer visual, leia `brand-voice.md` para posicionamento e estilo.

---

## REGRA DE OURO — VARIEDADE VISUAL

**NUNCA use o mesmo template duas vezes seguidas.** Se o ultimo post usou Template 3 (Numero Hero), o proximo DEVE ser outro.

O feed do usuario precisa variar para:
- Quebrar o padrao e parar o scroll
- Evitar fadiga visual
- Demonstrar maturidade visual (nao parecer automatizado)

**A identidade da marca vem das CORES e do TOM, nao de um layout fixo.**

---

## 1. DIMENSOES POR TIPO

| Tipo | Dimensao (px) | Proporcao | Quando Usar |
|------|--------------|-----------|-------------|
| **Imagem de Post (padrao)** | 1080 x 1350 | 4:5 | Posts — ocupa mais espaco mobile |
| **Thumbnail de Artigo** | 1200 x 627 | 1.91:1 | Artigos e newsletters |
| **Imagem Quadrada** | 1080 x 1080 | 1:1 | Posts alternativos |
| **Banner de Perfil** | 1584 x 396 | 4:1 | Background do perfil |

---

## 2. PALETA DE CORES (BRAND)

```css
--bg-dark: #0A0A0A;
--bg-card: #1A1A2E;
--accent-primary: #00D4FF;   /* azul neon */
--accent-secondary: #7C3AED; /* roxo */
--accent-tertiary: #F5F5F5;  /* branco off */
--accent-warning: #F59E0B;   /* amarelo destaque */
--accent-success: #10B981;   /* verde */
--accent-danger: #EF4444;    /* vermelho */
--text-primary: #FFFFFF;
--text-secondary: #A0AEC0;
--text-muted: #6B7280;
```

Use paletas diferentes em templates diferentes para maximizar variedade.

---

## 3. BIBLIOTECA DE 10 TEMPLATES

### TEMPLATE 1 — NUMERO HERO (o "-43%")
Grande numero dominante, minimalista.
- **Usar quando:** Dado chocante e a mensagem central
- **Limite:** Nao usar 2x seguidas
- **Exemplo:** -43%, +502K, 92%

### TEMPLATE 2 — FOTO DE BANCO + OVERLAY
Foto de stock (Unsplash) com overlay escuro e texto sobreposto.
- **Usar quando:** Tema tem contexto visual forte (pessoas, lugares, tecnologia)
- **Fonte:** `https://source.unsplash.com/1080x1350/?[keyword]`
- **Exemplo de keywords:** ai, office, startup, coding, meeting, laptop

### TEMPLATE 3 — SPLIT SCREEN
Tela dividida ao meio — foto/visual em um lado, texto no outro.
- **Usar quando:** Comparacoes, antes/depois, dois conceitos
- **Direcao:** Pode ser vertical (top/bottom) ou horizontal (left/right)

### TEMPLATE 4 — TIPOGRAFICO PURO
Apenas tipografia gigante, sem elementos visuais. Impacto pelo texto.
- **Usar quando:** Frase provocativa forte. Ex: "Vibe coding morreu."
- **Fonte:** 120-200px, font-weight 900

### TEMPLATE 5 — CITACAO / QUOTE
Estilo magazine cover com citacao grande em aspas.
- **Usar quando:** Opiniao forte, pensamento, frase marcante
- **Elemento:** Aspas gigantes decorativas como background

### TEMPLATE 6 — MESH GRADIENT
Background com gradient mesh moderno (multiplas cores blur).
- **Usar quando:** Tema futurista, inovacao, design, IA
- **Tecnica:** Multiplos radial-gradients sobrepostos

### TEMPLATE 7 — GRID / PATTERN
Background com pattern geometrico (dots, grid, linhas).
- **Usar quando:** Tema tecnico, sistemas, estrutura, frameworks
- **Tecnica:** CSS background-image com grid

### TEMPLATE 8 — DUOTONE
Foto de banco tratada com duotone (2 cores sobrepostas).
- **Usar quando:** Quer visual editorial, sofisticado
- **Tecnica:** filter: grayscale() + mix-blend-mode + overlay colorido

### TEMPLATE 9 — GLITCH / NEON
Efeito glitch/cyberpunk, neons, texto com glow.
- **Usar quando:** Tema polemico, tech, disrupcao
- **Tecnica:** text-shadow multiplo, offsets coloridos

### TEMPLATE 10 — MAGAZINE COVER
Estilo capa de revista — multiplas camadas de informacao hierarquicas.
- **Usar quando:** Posts densos, artigos, lista
- **Elementos:** Headline + sub + numeracao + badge + elemento grafico

---

## 4. USO DE FOTOS DE BANCO DE IMAGENS

### Fonte principal: Unsplash Source API (gratis, sem auth)

```html
<!-- Imagem aleatoria com keyword -->
<img src="https://source.unsplash.com/1080x1350/?artificial-intelligence" />

<!-- Keywords recomendados por tema: -->
<!-- IA: ai, robot, brain, technology, futuristic -->
<!-- Trabalho: office, laptop, meeting, coworking, desk -->
<!-- Tech: code, coding, developer, computer, screen -->
<!-- Dados: chart, analytics, data, graph, dashboard -->
<!-- Lideranca: ceo, team, leadership, handshake, suit -->
<!-- Abstrato: abstract, geometric, minimal, gradient -->
```

### Como aplicar overlay
```css
.photo-bg {
  background-image:
    linear-gradient(rgba(10,10,10,0.7), rgba(10,10,10,0.9)),
    url('https://source.unsplash.com/1080x1350/?[keyword]');
  background-size: cover;
  background-position: center;
}
```

### Tratamento Duotone
```css
.duotone {
  position: relative;
  background-image: url('https://source.unsplash.com/1080x1350/?ai');
  background-size: cover;
  filter: grayscale(100%) contrast(1.2);
}
.duotone::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0,212,255,0.6), rgba(124,58,237,0.6));
  mix-blend-mode: multiply;
}
```

---

## 5. CODIGO DOS TEMPLATES

### TEMPLATE 2 — Foto + Overlay (1080x1350)
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800;900&display=swap');
* { margin:0; padding:0; box-sizing:border-box; }
.image {
  width: 1080px;
  height: 1350px;
  position: relative;
  background-image:
    linear-gradient(180deg, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.95) 100%),
    url('https://source.unsplash.com/1080x1350/?artificial-intelligence,futuristic');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 80px;
  font-family: 'Inter', sans-serif;
  color: white;
}
.badge {
  display: inline-block;
  padding: 10px 24px;
  background: rgba(0, 212, 255, 0.15);
  border: 1px solid #00D4FF;
  border-radius: 50px;
  font-size: 18px;
  color: #00D4FF;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 32px;
  align-self: flex-start;
}
h1 {
  font-size: 80px;
  font-weight: 900;
  line-height: 1;
  margin-bottom: 24px;
  max-width: 900px;
}
.subtitle {
  font-size: 28px;
  color: #A0AEC0;
  max-width: 800px;
  margin-bottom: 48px;
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  color: #00D4FF;
  letter-spacing: 2px;
}
.source {
  color: #6B7280;
  font-style: italic;
  font-size: 14px;
}
</style>
</head>
<body>
<div class="image">
  <div class="badge">[CATEGORIA]</div>
  <h1>[TITULO IMPACTANTE]</h1>
  <p class="subtitle">[Subtitulo descritivo]</p>
  <div class="footer">
    <span>APOLO SANTOS</span>
    <span class="source">Fonte: [Nome], [Ano]</span>
  </div>
</div>
</body>
</html>
```

### TEMPLATE 3 — Split Screen (1080x1350)
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800;900&display=swap');
* { margin:0; padding:0; box-sizing:border-box; }
.image {
  width: 1080px;
  height: 1350px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  font-family: 'Inter', sans-serif;
}
.top {
  background-image:
    linear-gradient(135deg, rgba(0,212,255,0.7), rgba(124,58,237,0.7)),
    url('https://source.unsplash.com/1080x675/?office,team');
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px 80px;
  color: white;
}
.top .label {
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 2px;
  opacity: 0.8;
  margin-bottom: 16px;
}
.top h2 {
  font-size: 64px;
  font-weight: 900;
  line-height: 1;
}
.bottom {
  background: #0A0A0A;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px 80px;
  color: white;
  position: relative;
}
.bottom .label {
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #00D4FF;
  margin-bottom: 16px;
}
.bottom h2 {
  font-size: 64px;
  font-weight: 900;
  line-height: 1;
  background: linear-gradient(135deg, #00D4FF, #7C3AED);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.author {
  position: absolute;
  bottom: 30px;
  left: 80px;
  font-size: 16px;
  color: #6B7280;
  letter-spacing: 2px;
}
</style>
</head>
<body>
<div class="image">
  <div class="top">
    <div class="label">ANTES</div>
    <h2>[Estado inicial / problema]</h2>
  </div>
  <div class="bottom">
    <div class="label">DEPOIS</div>
    <h2>[Estado final / solucao]</h2>
    <div class="author">APOLO SANTOS</div>
  </div>
</div>
</body>
</html>
```

### TEMPLATE 4 — Tipografico Puro (1080x1350)
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
* { margin:0; padding:0; box-sizing:border-box; }
.image {
  width: 1080px;
  height: 1350px;
  background: #0A0A0A;
  display: flex;
  align-items: center;
  padding: 80px;
  font-family: 'Inter', sans-serif;
  position: relative;
}
h1 {
  font-size: 180px;
  font-weight: 900;
  line-height: 0.9;
  letter-spacing: -6px;
  color: white;
}
h1 .line-2 {
  display: block;
  background: linear-gradient(135deg, #00D4FF, #7C3AED);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
h1 .line-3 {
  display: block;
  color: #6B7280;
}
.author {
  position: absolute;
  bottom: 60px;
  left: 80px;
  font-size: 18px;
  color: #00D4FF;
  letter-spacing: 2px;
  font-weight: 700;
}
</style>
</head>
<body>
<div class="image">
  <h1>
    [Palavra 1]<br>
    <span class="line-2">[Palavra 2]</span><br>
    <span class="line-3">[Palavra 3]</span>
  </h1>
  <div class="author">APOLO SANTOS</div>
</div>
</body>
</html>
```

### TEMPLATE 5 — Citacao (1080x1350)
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&display=swap');
* { margin:0; padding:0; box-sizing:border-box; }
.image {
  width: 1080px;
  height: 1350px;
  background: linear-gradient(135deg, #1A1A2E, #0A0A0A);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px;
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow: hidden;
}
.big-quote {
  position: absolute;
  top: 20px;
  left: 40px;
  font-family: 'Playfair Display', serif;
  font-size: 500px;
  line-height: 0.7;
  color: rgba(0, 212, 255, 0.08);
  font-weight: 900;
}
.quote {
  font-size: 64px;
  font-weight: 900;
  color: white;
  line-height: 1.1;
  z-index: 1;
  max-width: 850px;
}
.quote .highlight {
  background: linear-gradient(135deg, #00D4FF, #7C3AED);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.attribution {
  margin-top: 48px;
  font-size: 22px;
  color: #00D4FF;
  letter-spacing: 2px;
  z-index: 1;
}
.attribution::before {
  content: '— ';
}
</style>
</head>
<body>
<div class="image">
  <div class="big-quote">"</div>
  <div class="quote">[Citacao impactante com <span class="highlight">destaque</span>]</div>
  <div class="attribution">APOLO SANTOS</div>
</div>
</body>
</html>
```

### TEMPLATE 6 — Mesh Gradient (1080x1350)
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;800;900&display=swap');
* { margin:0; padding:0; box-sizing:border-box; }
.image {
  width: 1080px;
  height: 1350px;
  background: #0A0A0A;
  background-image:
    radial-gradient(at 20% 30%, rgba(0,212,255,0.4) 0%, transparent 50%),
    radial-gradient(at 80% 20%, rgba(124,58,237,0.4) 0%, transparent 50%),
    radial-gradient(at 50% 80%, rgba(245,158,11,0.3) 0%, transparent 50%),
    radial-gradient(at 90% 90%, rgba(16,185,129,0.3) 0%, transparent 50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px;
  font-family: 'Inter', sans-serif;
  color: white;
  position: relative;
}
.image::before {
  content: '';
  position: absolute;
  inset: 0;
  backdrop-filter: blur(80px);
  background: rgba(10,10,10,0.3);
}
.content {
  position: relative;
  z-index: 1;
}
.badge {
  display: inline-block;
  padding: 12px 28px;
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 50px;
  font-size: 18px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 40px;
}
h1 {
  font-size: 96px;
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: -3px;
  margin-bottom: 32px;
}
.subtitle {
  font-size: 28px;
  opacity: 0.8;
  max-width: 800px;
}
.author {
  position: absolute;
  bottom: 60px;
  left: 100px;
  font-size: 18px;
  letter-spacing: 2px;
  font-weight: 700;
  z-index: 1;
}
</style>
</head>
<body>
<div class="image">
  <div class="content">
    <div class="badge">[CATEGORIA]</div>
    <h1>[TITULO IMPACTANTE]</h1>
    <p class="subtitle">[Subtitulo]</p>
  </div>
  <div class="author">APOLO SANTOS</div>
</div>
</body>
</html>
```

### TEMPLATE 7 — Grid Pattern (1080x1350)
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap');
* { margin:0; padding:0; box-sizing:border-box; }
.image {
  width: 1080px;
  height: 1350px;
  background: #0A0A0A;
  background-image:
    linear-gradient(rgba(0,212,255,0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,212,255,0.08) 1px, transparent 1px);
  background-size: 50px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px;
  font-family: 'Inter', sans-serif;
  color: white;
  position: relative;
}
.corner {
  position: absolute;
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  color: rgba(0, 212, 255, 0.4);
}
.corner.tl { top: 40px; left: 40px; }
.corner.tr { top: 40px; right: 40px; }
.corner.bl { bottom: 40px; left: 40px; }
.corner.br { bottom: 40px; right: 40px; }
.tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 16px;
  color: #00D4FF;
  margin-bottom: 24px;
}
h1 {
  font-size: 84px;
  font-weight: 900;
  line-height: 1;
  max-width: 850px;
  margin-bottom: 32px;
}
h1 .accent {
  color: #00D4FF;
}
.subtitle {
  font-size: 26px;
  color: #A0AEC0;
  max-width: 800px;
  font-family: 'JetBrains Mono', monospace;
}
.author {
  position: absolute;
  bottom: 80px;
  left: 100px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 16px;
  color: #00D4FF;
}
</style>
</head>
<body>
<div class="image">
  <div class="corner tl">[01]</div>
  <div class="corner tr">1080x1350</div>
  <div class="corner bl">SYSTEM</div>
  <div class="corner br">v2026</div>
  <div class="tag">// [categoria]</div>
  <h1>[Titulo com <span class="accent">destaque</span>]</h1>
  <p class="subtitle">> [Subtitulo em mono]</p>
  <div class="author">$ apolo.santos</div>
</div>
</body>
</html>
```

### TEMPLATE 8 — Duotone Photo (1080x1350)
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;900&display=swap');
* { margin:0; padding:0; box-sizing:border-box; }
.image {
  width: 1080px;
  height: 1350px;
  position: relative;
  font-family: 'Inter', sans-serif;
  overflow: hidden;
}
.photo {
  position: absolute;
  inset: 0;
  background-image: url('https://source.unsplash.com/1080x1350/?[KEYWORD]');
  background-size: cover;
  background-position: center;
  filter: grayscale(100%) contrast(1.3) brightness(0.5);
}
.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0,212,255,0.55), rgba(124,58,237,0.65));
  mix-blend-mode: color;
}
.dark-fade {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 40%, rgba(10,10,10,0.9) 100%);
}
.content {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 80px;
  color: white;
}
.badge {
  display: inline-block;
  padding: 10px 24px;
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 50px;
  font-size: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 24px;
  align-self: flex-start;
}
h1 {
  font-size: 76px;
  font-weight: 900;
  line-height: 0.95;
  max-width: 900px;
  margin-bottom: 48px;
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  letter-spacing: 2px;
  padding-top: 24px;
  border-top: 1px solid rgba(255,255,255,0.2);
}
.source {
  font-style: italic;
  opacity: 0.7;
  font-size: 12px;
}
</style>
</head>
<body>
<div class="image">
  <div class="photo"></div>
  <div class="overlay"></div>
  <div class="dark-fade"></div>
  <div class="content">
    <div class="badge">[CATEGORIA]</div>
    <h1>[TITULO]</h1>
    <div class="footer">
      <span>APOLO SANTOS</span>
      <span class="source">Fonte: [Nome], [Ano]</span>
    </div>
  </div>
</div>
</body>
</html>
```

### TEMPLATE 9 — Glitch/Neon (1080x1350)
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
* { margin:0; padding:0; box-sizing:border-box; }
.image {
  width: 1080px;
  height: 1350px;
  background: #0A0A0A;
  background-image:
    linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px);
  background-size: 4px 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px;
  font-family: 'Inter', sans-serif;
  position: relative;
}
.scanline {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(0,212,255,0.03) 50%, transparent 100%);
  background-size: 100% 4px;
  animation: scan 8s linear infinite;
  pointer-events: none;
}
h1 {
  font-size: 140px;
  font-weight: 900;
  color: white;
  line-height: 0.9;
  letter-spacing: -6px;
  text-align: center;
  position: relative;
  text-shadow:
    4px 0 #00D4FF,
    -4px 0 #EF4444,
    0 0 40px rgba(0, 212, 255, 0.5);
}
h1 .strike {
  text-decoration: line-through;
  text-decoration-color: #EF4444;
  text-decoration-thickness: 12px;
  color: #6B7280;
  text-shadow: none;
}
.author {
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
  color: #00D4FF;
  letter-spacing: 4px;
  text-transform: uppercase;
}
</style>
</head>
<body>
<div class="image">
  <div class="scanline"></div>
  <h1>
    <span class="strike">[velho]</span><br>
    [NOVO]
  </h1>
  <div class="author">APOLO SANTOS</div>
</div>
</body>
</html>
```

### TEMPLATE 10 — Magazine Cover (1080x1350)
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800;900&display=swap');
* { margin:0; padding:0; box-sizing:border-box; }
.image {
  width: 1080px;
  height: 1350px;
  background: #F5F5F5;
  padding: 60px;
  font-family: 'Inter', sans-serif;
  position: relative;
  color: #0A0A0A;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 24px;
  border-bottom: 4px solid #0A0A0A;
  margin-bottom: 48px;
}
.masthead {
  font-size: 32px;
  font-weight: 900;
  letter-spacing: -1px;
}
.issue {
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.category {
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #7C3AED;
  font-weight: 700;
  margin-bottom: 16px;
}
h1 {
  font-size: 92px;
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: -3px;
  margin-bottom: 32px;
}
.subtitle {
  font-size: 24px;
  color: #374151;
  line-height: 1.4;
  max-width: 900px;
  margin-bottom: 48px;
  border-left: 4px solid #00D4FF;
  padding-left: 24px;
}
.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 40px;
}
.feature {
  border-top: 2px solid #0A0A0A;
  padding-top: 16px;
}
.feature .num {
  font-size: 48px;
  font-weight: 900;
  line-height: 1;
  color: #0A0A0A;
}
.feature .label {
  font-size: 14px;
  margin-top: 8px;
  color: #6B7280;
}
.footer {
  position: absolute;
  bottom: 60px;
  left: 60px;
  right: 60px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
}
</style>
</head>
<body>
<div class="image">
  <div class="header">
    <div class="masthead">SIMPLIFICA</div>
    <div class="issue">Ed. [N] / [Data]</div>
  </div>
  <div class="category">[CATEGORIA]</div>
  <h1>[TITULO IMPACTANTE]</h1>
  <p class="subtitle">[Subtitulo com contexto e promessa]</p>
  <div class="features">
    <div class="feature">
      <div class="num">[01]</div>
      <div class="label">[conceito]</div>
    </div>
    <div class="feature">
      <div class="num">[02]</div>
      <div class="label">[conceito]</div>
    </div>
    <div class="feature">
      <div class="num">[03]</div>
      <div class="label">[conceito]</div>
    </div>
  </div>
  <div class="footer">
    <span>APOLO SANTOS</span>
    <span>Fonte: [Nome], [Ano]</span>
  </div>
</div>
</body>
</html>
```

---

## 6. REGRAS DE DESIGN (VALIDAS PARA TODOS OS TEMPLATES)

1. **3 segundos** — se a mensagem nao e compreendida em 3s, o design falhou
2. **1 mensagem** — uma imagem = uma ideia. Nunca 2
3. **Contraste extremo** — fundo vs. texto sempre com contraste maximo
4. **Texto grande** — sera visto no celular. Min 48px para titulo
5. **Branding presente** — APOLO SANTOS sempre visivel (mas nao dominante)
6. **Fonte citada** — todo dado deve ter fonte visivel (regra obrigatoria)
7. **Acentos corretos** — portugues com acentos (não, é, só, começo)
8. **Variedade** — nunca repetir o mesmo template 2 vezes seguidas
9. **Footer = SO o nome** — o footer/assinatura e APENAS `APOLO SANTOS`. NUNCA adicionar codigo de licenca (CC BY-NC-SA 4.0, Creative Commons, BY-NC, copyright, etc), tag de serie ou numero de post. Decisao do Apolo 29/05/2026.

---

## 7. MATRIZ DE ESCOLHA DE TEMPLATE

| Tipo de Post | Templates Recomendados |
|-------------|----------------------|
| Dado chocante (estatistica) | T1 (Numero), T10 (Magazine), T7 (Grid) |
| Provocacao/opiniao | T4 (Tipografico), T5 (Quote), T9 (Glitch) |
| Contexto emocional/humano | T2 (Foto), T8 (Duotone) |
| Comparacao/antes-depois | T3 (Split), T9 (Glitch) |
| Futurista/IA | T6 (Mesh), T9 (Glitch), T7 (Grid) |
| Tecnico/desenvolvedores | T7 (Grid), T4 (Tipografico) |
| Lideranca/business | T10 (Magazine), T2 (Foto), T8 (Duotone) |
| Curadoria/lista | T10 (Magazine), T7 (Grid) |

**Regra:** verificar o ultimo template usado antes de escolher. Nunca repetir.

---

## 8. CHECKLIST PRE-ENTREGA

- [ ] Template diferente do ultimo post?
- [ ] Dimensao correta (1080x1350 padrao)?
- [ ] Mensagem compreensivel em 3 segundos?
- [ ] Apenas 1 mensagem/ideia?
- [ ] Titulo com min 48px?
- [ ] Contraste alto?
- [ ] Cores dentro da paleta brand (ou variacao justificada)?
- [ ] APOLO SANTOS presente?
- [ ] Footer SEM codigo de licenca (zero CC BY-NC-SA / Creative Commons / copyright)?
- [ ] Fonte citada se houver dado?
- [ ] Acentos corretos (não, é, só, começo)?
- [ ] Se usou foto: tratamento (overlay, duotone) esta forte o suficiente?

---

## 9. BLOCO DE NOTAS — TEMPLATE

```markdown
# BLOCO DE NOTAS — THUMBNAIL

## ULTIMO TEMPLATE USADO
- Post X → Template [1-10]

## PENDENTE
- [ ] [tipo] para "[titulo]" — [data]

## EM PROGRESSO
- [ ] [tipo] para "[titulo]" — Template [N] — justificativa

## ENTREGUE
- [x] [post] — Template [N] — [data]

## HISTORICO DE TEMPLATES USADOS
| Data | Post | Template |
|------|------|----------|
```
