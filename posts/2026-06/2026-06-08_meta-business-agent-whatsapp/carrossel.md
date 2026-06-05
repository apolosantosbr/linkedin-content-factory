# CARROSSEL — Meta Business Agent no WhatsApp (ITEM 1)

> **Slot:** SEG 08/06 · 10h30 · Formato #3 Deep-dive explicador (carrossel salvável)
> **Pilar:** 1 · IA Aplicada · **Inimigo:** Pilotante · **Gatilho:** save + dwell
> **Tipo (carta):** Framework / Passo a Passo · 7 slides · 1080x1350
> **Fontes:** Exame / TechCrunch. Verbatim corrigido (RADAR): "em minutos", "1M+ empresas 24/7", piloto "desde fev/2026", cobrança PME "meados de junho/2026" (1ª desde 2018).

---

## ROTEIRO SLIDE A SLIDE

### SLIDE 1 — CAPA (hook + número-âncora)
- **Badge:** IA & WHATSAPP
- **Número gigante:** 1M+
- **Hook (118 chars):** "A Meta pôs um vendedor de IA no WhatsApp de 1 MILHÃO de empresas. Veja como LIGAR o seu antes do concorrente."
- **Assinatura:** Apolo Santos · "Arraste para o lado →"
- *Design: número 1M+ como elemento visual dominante, gradiente accent.*

### SLIDE 2 — CONTEXTO (o que aconteceu)
- Em 03/06, no evento Conversations (Londres), a Meta liberou o Business Agent GLOBALMENTE.
- É um agente de IA que ATENDE, recomenda do catálogo, agenda e fecha venda dentro do WhatsApp. Sem dev, ativável em minutos (Exame/TechCrunch).
- **Teaser rodapé:** "Como ligar o seu, em 3 passos →"

### SLIDE 3 — PASSO 1: ATIVE
- **Número:** 01
- Ative o Business Agent no PRÓPRIO número comercial. Sem TI, sem SaaS externo, em minutos.
- É o canal que sua PME já usa pra vender, agora com um vendedor nativo 24/7 (Exame/TechCrunch).
- **Teaser:** "Passo 2: o que ninguém faz antes →"

### SLIDE 4 — PASSO 2: ALIMENTE ANTES DE LIGAR
- **Número:** 02
- O bot só é tão bom quanto a INFO que você dá. Estruture catálogo, FAQ, preços e horários ANTES de ligar.
- Nos pilotos do México, empresas relataram +10% nos negócios depois de alimentar bem o catálogo (Exame). Foi o catálogo, não a mágica.
- **Teaser:** "Passo 3: onde o humano entra →"

### SLIDE 5 — PASSO 3: DEFINA O HANDOFF
- **Número:** 03
- O bot QUALIFICA e recomenda. O humano fecha o complexo e o que envolve dinheiro grande.
- Decida a regra de passagem ANTES de ligar. Bot no simples, gente no que importa.
- **Teaser:** "Tem um relógio correndo →"

### SLIDE 6 — INSIGHT / CLÍMAX (a janela)
- **Número:** →
- **Card:** A janela GRÁTIS está fechando. A cobrança pra PME começa a ser testada em meados de junho/2026. É a 1ª vez que a Meta cobra pelo WhatsApp Business desde 2018 (Exame/TechCrunch).
- Quem ativar e MEDIR a conversão agora testa de graça antes do preço chegar.

### SLIDE 7 — CTA (save + pergunta)
- **Resumo:** Ative. Alimente. Meça. Antes da cobrança e antes do vizinho.
- **CTA:** Salva pra ligar o teu WhatsApp esta semana.
- **Pergunta:** Você confiaria uma venda a uma IA no seu WhatsApp? Comenta o porquê.
- **Handle:** @apolosantos

---

## HTML (1080x1350 · 7 slides · pronto pra screenshot/PDF)

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  .slide {
    width: 1080px; height: 1350px; padding: 60px;
    background: #0A0A0A; color: #FFFFFF;
    font-family: 'Inter', -apple-system, sans-serif;
    display: flex; flex-direction: column; justify-content: center;
    position: relative; page-break-after: always;
  }
  .slide-cover { background: linear-gradient(135deg, #0A0A0A 0%, #1A1A2E 100%); text-align: center; justify-content: center; align-items: center; }
  .slide-cover .bignum { font-size: 200px; font-weight: 900; line-height: 1; background: linear-gradient(135deg, #00D4FF, #7C3AED); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 24px; }
  .slide-cover h1 { font-size: 50px; font-weight: 800; line-height: 1.15; margin-bottom: 24px; }
  .slide-cover h1 .hl { background: linear-gradient(135deg, #00D4FF, #7C3AED); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
  .slide-cover .author { font-size: 22px; color: #00D4FF; letter-spacing: 2px; text-transform: uppercase; margin-top: 40px; }
  .slide-cover .swipe { position: absolute; bottom: 60px; right: 60px; font-size: 20px; color: #A0AEC0; }
  .slide-content .number { font-size: 120px; font-weight: 900; background: linear-gradient(135deg, #00D4FF, #7C3AED); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 16px; }
  .slide-content h2 { font-size: 42px; font-weight: 700; margin-bottom: 28px; line-height: 1.2; }
  .slide-content p { font-size: 32px; line-height: 1.5; color: #A0AEC0; margin-bottom: 20px; }
  .slide-content .highlight { color: #00D4FF; font-weight: 600; }
  .slide-content .source { font-size: 22px; color: #6B7280; }
  .slide-content .teaser { position: absolute; bottom: 60px; right: 60px; font-size: 22px; color: #7C3AED; }
  .slide-cta { text-align: center; align-items: center; background: linear-gradient(135deg, #1A1A2E 0%, #0A0A0A 100%); }
  .slide-cta h2 { font-size: 46px; font-weight: 700; margin-bottom: 28px; line-height: 1.2; }
  .slide-cta .cta-text { font-size: 30px; color: #A0AEC0; margin-bottom: 40px; }
  .slide-cta .follow { display: inline-block; padding: 20px 48px; background: linear-gradient(135deg, #00D4FF, #7C3AED); border-radius: 50px; font-size: 26px; font-weight: 700; color: white; }
  .slide-cta .handle { margin-top: 32px; font-size: 24px; color: #00D4FF; }
  .badge { display: inline-block; padding: 8px 20px; background: rgba(0,212,255,0.1); border: 1px solid rgba(0,212,255,0.3); border-radius: 50px; font-size: 20px; color: #00D4FF; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 32px; }
  .card { background: #1A1A2E; border-radius: 16px; padding: 36px; margin-top: 16px; border: 1px solid rgba(0,212,255,0.15); }
  .card p { font-size: 34px; line-height: 1.45; color: #FFFFFF; }
</style>
</head>
<body>

<!-- SLIDE 1 — CAPA -->
<div class="slide slide-cover">
  <div class="badge">IA & WHATSAPP</div>
  <div class="bignum">1M+</div>
  <h1>A Meta pôs um <span class="hl">vendedor de IA</span> no WhatsApp de 1 MILHÃO de empresas</h1>
  <p style="font-size:28px;color:#A0AEC0;">Veja como LIGAR o seu antes do concorrente.</p>
  <p class="author">Apolo Santos</p>
  <p class="swipe">Arraste para o lado →</p>
</div>

<!-- SLIDE 2 — CONTEXTO -->
<div class="slide slide-content">
  <div class="number">00</div>
  <h2>O que a Meta acabou de liberar</h2>
  <p>Em 03/06, no evento Conversations, a Meta soltou o <span class="highlight">Business Agent</span> globalmente.</p>
  <p>Um agente de IA que ATENDE, recomenda do catálogo, agenda e fecha venda dentro do WhatsApp. Sem dev, ativável <span class="highlight">em minutos</span>.</p>
  <p class="source">Fonte: Exame / TechCrunch</p>
  <p class="teaser">Como ligar o seu, em 3 passos →</p>
</div>

<!-- SLIDE 3 — PASSO 1 -->
<div class="slide slide-content">
  <div class="number">01</div>
  <h2>ATIVE no próprio número</h2>
  <p>Ligue o Business Agent no seu WhatsApp comercial. Sem TI, sem SaaS externo, <span class="highlight">em minutos</span>.</p>
  <p>O canal que sua PME já usa pra vender, agora com um vendedor nativo, <span class="highlight">1M+ empresas 24/7</span>.</p>
  <p class="source">Fonte: Exame / TechCrunch</p>
  <p class="teaser">Passo 2: o que ninguém faz antes →</p>
</div>

<!-- SLIDE 4 — PASSO 2 -->
<div class="slide slide-content">
  <div class="number">02</div>
  <h2>ALIMENTE antes de ligar</h2>
  <p>O bot só é tão bom quanto a INFO que você dá. Estruture catálogo, FAQ, preços e horários ANTES.</p>
  <p>Nos pilotos do México, empresas relataram +10% nos negócios depois de alimentar bem o catálogo. Foi o catálogo, não a mágica.</p>
  <p class="source">Fonte: Exame (piloto MX, dado da plataforma)</p>
  <p class="teaser">Passo 3: onde o humano entra →</p>
</div>

<!-- SLIDE 5 — PASSO 3 -->
<div class="slide slide-content">
  <div class="number">03</div>
  <h2>DEFINA o handoff pro humano</h2>
  <p>O bot QUALIFICA e recomenda. O humano fecha o complexo e o que envolve dinheiro grande.</p>
  <p>Decida a regra de passagem ANTES de ligar. Bot no simples, gente no que importa.</p>
  <p class="teaser">Tem um relógio correndo →</p>
</div>

<!-- SLIDE 6 — INSIGHT -->
<div class="slide slide-content">
  <div class="number">→</div>
  <h2>A janela GRÁTIS está fechando</h2>
  <div class="card">
    <p>A cobrança pra PME começa a ser testada em <span class="highlight">meados de junho/2026</span>. 1ª vez que a Meta cobra pelo WhatsApp Business desde 2018.</p>
  </div>
  <p style="margin-top:24px;">Quem ativa e MEDE a conversão agora testa de graça antes do preço chegar.</p>
  <p class="source">Fonte: Exame / TechCrunch</p>
</div>

<!-- SLIDE 7 — CTA -->
<div class="slide slide-cta">
  <h2>Ative. Alimente. Meça.<br>Antes da cobrança e do vizinho.</h2>
  <p class="cta-text">Salva pra ligar o teu WhatsApp esta semana.</p>
  <div class="follow">Você confiaria uma venda a uma IA? Comenta.</div>
  <p class="handle">@apolosantos</p>
</div>

</body>
</html>
```

---

## CHECKLIST PRÉ-PUBLICAÇÃO
- [x] Exatamente 7 slides · 1080x1350
- [x] Slide 1 com hook ≤140 chars + número-âncora (1M+)
- [x] 1 ideia por slide
- [x] Teaser no rodapé dos slides 1 a 5 (slide 6 = clímax, 7 = CTA)
- [x] Slide 7 = CTA save + pergunta
- [x] Fontes citadas em todo slide com dado (Exame/TechCrunch)
- [x] Verbatim Meta: "em minutos", "1M+ empresas 24/7", "meados de junho/2026", "desde 2018"
- [x] SEM hífen/travessão · CAPS em ênfases (LIGAR, ATENDE, ATIVE, ALIMENTE, DEFINA, MEDE)
- [x] @apolosantos na capa e no CTA
