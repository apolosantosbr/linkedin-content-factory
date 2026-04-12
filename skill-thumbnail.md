# SKILL: LINKEDIN THUMBNAIL & IMAGEM — Manual de Treinamento

> **Missao:** Criar thumbnails de artigos e imagens de posts em HTML, prontas para conversao em PNG.
> **Output:** Arquivo HTML com a imagem pronta em dimensao exata para cada uso.

---

## CONTEXTO OBRIGATORIO

Antes de criar qualquer visual, leia `brand-voice.md` para posicionamento e estilo.

---

## 1. DIMENSOES POR TIPO

| Tipo | Dimensao (px) | Proporcao | Quando Usar |
|------|--------------|-----------|-------------|
| **Thumbnail de Artigo** | 1200 x 627 | 1.91:1 | Artigos e newsletters |
| **Imagem de Post** | 1200 x 627 | 1.91:1 | Posts com imagem unica |
| **Imagem Quadrada** | 1080 x 1080 | 1:1 | Posts alternativos |
| **Imagem Vertical** | 1080 x 1350 | 4:5 | Posts para max espaco mobile |
| **Banner de Perfil** | 1584 x 396 | 4:1 | Background do perfil |

**Recomendacao padrao:** 1080 x 1350 (vertical) para posts — ocupa mais espaco no feed mobile.

---

## 2. PRINCIPIOS DE DESIGN

### Hierarquia Visual
```
1. TITULO (elemento dominante — 40-60% do espaco)
2. Subtitulo ou contexto (15-20%)
3. Elemento visual de suporte (icone, forma, numero)
4. Branding (nome, @handle — discreto mas presente)
```

### Regras de Ouro
1. **3 segundos** — se a mensagem nao e compreendida em 3s, o design falhou
2. **1 mensagem** — uma imagem = uma ideia. Nunca 2.
3. **Contraste extremo** — fundo escuro + texto claro (ou vice-versa). Sem meio-termo.
4. **Texto grande** — sera visto no celular. Min 48px para titulo.
5. **Sem stock photos** — formas, gradients, icones > fotos genericas
6. **Branding sutil** — nome e handle presentes mas nao dominantes

---

## 3. PALETA DE CORES (BRAND)

```css
/* Identica ao skill-carrossel.md para consistencia */
--bg-dark: #0A0A0A;
--bg-card: #1A1A2E;
--accent-primary: #00D4FF;
--accent-secondary: #7C3AED;
--accent-gradient: linear-gradient(135deg, #00D4FF, #7C3AED);
--text-primary: #FFFFFF;
--text-secondary: #A0AEC0;
--success: #10B981;
--warning: #F59E0B;
--error: #EF4444;
```

### Combinacoes de Alto Impacto
| Fundo | Texto | Accent | Sensacao |
|-------|-------|--------|----------|
| #0A0A0A | #FFFFFF | #00D4FF | Tech, moderno, premium |
| #1A1A2E | #FFFFFF | #7C3AED | Sofisticado, autoridade |
| #0A0A0A | #00D4FF | #7C3AED | Neon, impactante |
| #FFFFFF | #0A0A0A | #00D4FF | Limpo, acessivel (usar ocasionalmente) |

---

## 4. TIPOS DE THUMBNAIL/IMAGEM

### Tipo 1: Titulo Bold (mais usado)
- Titulo grande centralizado
- Subtitulo menor abaixo
- Elemento geometrico decorativo
- **Melhor para:** Artigos, posts educativos

### Tipo 2: Dado/Numero em Destaque
- Numero gigante (120px+) como elemento central
- Contexto abaixo do numero
- **Melhor para:** Posts com estatisticas, insights de dados

### Tipo 3: Antes/Depois ou Versus
- Tela dividida ao meio (vertical ou horizontal)
- Lado esquerdo = antes/problema, lado direito = depois/solucao
- **Melhor para:** Comparacoes, transformacoes, mitos vs. realidade

### Tipo 4: Lista/Icones
- 3-5 itens com icones alinhados
- Titulo no topo
- **Melhor para:** Posts de curadoria, ferramentas, dicas

### Tipo 5: Citacao/Quote
- Frase impactante em tipografia grande
- Aspas estilizadas como elemento decorativo
- Nome e handle no rodape
- **Melhor para:** Posts de opiniao, provocacoes

---

## 5. TEMPLATES HTML

### Template 1: Titulo Bold (1080x1350 — Vertical Post)
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  .image {
    width: 1080px;
    height: 1350px;
    background: #0A0A0A;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px;
    position: relative;
    overflow: hidden;
  }
  /* Elemento decorativo de fundo */
  .bg-circle {
    position: absolute;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%);
    top: -100px;
    right: -100px;
  }
  .bg-circle-2 {
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%);
    bottom: -50px;
    left: -50px;
  }
  .badge {
    display: inline-block;
    padding: 10px 24px;
    background: rgba(0, 212, 255, 0.1);
    border: 1px solid rgba(0, 212, 255, 0.3);
    border-radius: 50px;
    font-size: 18px;
    color: #00D4FF;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-family: 'Inter', sans-serif;
    margin-bottom: 40px;
    z-index: 1;
  }
  h1 {
    font-family: 'Inter', -apple-system, sans-serif;
    font-size: 64px;
    font-weight: 800;
    color: #FFFFFF;
    text-align: center;
    line-height: 1.1;
    z-index: 1;
    margin-bottom: 24px;
  }
  h1 .gradient {
    background: linear-gradient(135deg, #00D4FF, #7C3AED);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .subtitle {
    font-family: 'Inter', sans-serif;
    font-size: 28px;
    color: #A0AEC0;
    text-align: center;
    line-height: 1.4;
    z-index: 1;
    max-width: 800px;
  }
  .author {
    position: absolute;
    bottom: 60px;
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    color: #00D4FF;
    letter-spacing: 2px;
    z-index: 1;
  }
  .divider {
    width: 120px;
    height: 3px;
    background: linear-gradient(90deg, #00D4FF, #7C3AED);
    margin: 32px 0;
    border-radius: 2px;
    z-index: 1;
  }
</style>
</head>
<body>
<div class="image">
  <div class="bg-circle"></div>
  <div class="bg-circle-2"></div>
  <div class="badge">[CATEGORIA]</div>
  <h1>[PRIMEIRA LINHA]<br><span class="gradient">[SEGUNDA LINHA EM DESTAQUE]</span></h1>
  <div class="divider"></div>
  <p class="subtitle">[Subtitulo com contexto em 1-2 linhas]</p>
  <p class="author">APOLO SANTOS</p>
</div>
</body>
</html>
```

### Template 2: Thumbnail de Artigo (1200x627)
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  .thumbnail {
    width: 1200px;
    height: 627px;
    background: linear-gradient(135deg, #0A0A0A 0%, #1A1A2E 100%);
    display: flex;
    align-items: center;
    padding: 60px 80px;
    position: relative;
    overflow: hidden;
  }
  .content {
    z-index: 1;
    max-width: 70%;
  }
  .badge {
    display: inline-block;
    padding: 8px 20px;
    background: rgba(0, 212, 255, 0.15);
    border: 1px solid rgba(0, 212, 255, 0.3);
    border-radius: 50px;
    font-size: 16px;
    color: #00D4FF;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-family: 'Inter', sans-serif;
    margin-bottom: 24px;
  }
  h1 {
    font-family: 'Inter', -apple-system, sans-serif;
    font-size: 48px;
    font-weight: 800;
    color: #FFFFFF;
    line-height: 1.15;
    margin-bottom: 16px;
  }
  h1 .accent {
    color: #00D4FF;
  }
  .subtitle {
    font-family: 'Inter', sans-serif;
    font-size: 22px;
    color: #A0AEC0;
    line-height: 1.4;
  }
  .author {
    position: absolute;
    bottom: 30px;
    left: 80px;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    color: #00D4FF;
    letter-spacing: 2px;
    z-index: 1;
  }
  /* Decorativo */
  .accent-line {
    position: absolute;
    right: 80px;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 200px;
    background: linear-gradient(180deg, #00D4FF, #7C3AED);
    border-radius: 2px;
  }
  .bg-glow {
    position: absolute;
    right: -200px;
    top: -200px;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%);
  }
</style>
</head>
<body>
<div class="thumbnail">
  <div class="bg-glow"></div>
  <div class="content">
    <div class="badge">[CATEGORIA]</div>
    <h1>[TITULO DO ARTIGO<br><span class="accent">COM DESTAQUE</span>]</h1>
    <p class="subtitle">[Subtitulo descritivo]</p>
  </div>
  <div class="accent-line"></div>
  <p class="author">APOLO SANTOS</p>
</div>
</body>
</html>
```

### Template 3: Numero em Destaque (1080x1350)
```html
<!-- Usar para posts com dados/estatisticas -->
<!-- Estrutura: numero gigante (120px) + contexto + insight -->
<!-- Seguir mesma paleta e tipografia dos templates acima -->
```

---

## 6. VARIACOES DE ESTILO

Para manter o feed visualmente interessante, alternar entre:

| Variacao | Descricao | Frequencia |
|----------|-----------|------------|
| **Dark mode** (padrao) | Fundo #0A0A0A, texto branco | 60% dos posts |
| **Gradient** | Fundo gradient dark | 20% dos posts |
| **Light mode** | Fundo branco, texto escuro | 10% dos posts |
| **Accent bold** | Fundo cor accent solida | 10% dos posts |

Nunca usar a mesma variacao 3 vezes seguidas.

---

## 7. CONVERSAO HTML → PNG

### Metodo recomendado:
```bash
# Usando Playwright (se disponivel)
npx playwright screenshot --viewport-size=1080,1350 arquivo.html output.png

# Ou abrir no Chrome e:
# 1. DevTools (F12)
# 2. Toggle Device Toolbar
# 3. Custom size: 1080x1350
# 4. Ctrl+Shift+P → "Capture full size screenshot"
```

---

## 8. CHECKLIST PRE-ENTREGA

- [ ] Dimensao correta para o tipo (1080x1350, 1200x627, etc)?
- [ ] Mensagem compreensivel em 3 segundos?
- [ ] Apenas 1 mensagem/ideia por imagem?
- [ ] Titulo com min 48px?
- [ ] Contraste alto (fundo vs. texto)?
- [ ] Cores dentro da paleta brand?
- [ ] @apolosantos ou "Apolo Santos" presente?
- [ ] Sem stock photos?
- [ ] Testado em preview mobile (parece bom pequeno)?
- [ ] PNG exportado em alta resolucao?

---

## 9. BLOCO DE NOTAS — TEMPLATE

```markdown
# BLOCO DE NOTAS — THUMBNAILS & IMAGENS

## PENDENTE (solicitacoes recebidas)
- [ ] Thumbnail para artigo "[titulo]" — 1200x627 — [data]
- [ ] Imagem para post "[titulo]" — 1080x1350 — [data]

## EM PROGRESSO
- [ ] [tipo] para "[titulo]" — Design em andamento

## PRONTO (HTML finalizado)
- [ ] [tipo] para "[titulo]" — HTML pronto, aguardando conversao PNG

## ENTREGUE
- [x] [tipo] para "[titulo]" — PNG entregue em [data]
```
