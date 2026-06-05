# CARROSSEL — Estado da IA na PME BR (ITEM 4)

> **Slot:** QUA 10/06 · 10h30 · Formato #9 Data-story (carrossel salvável)
> **Pilar:** 5 · Curadoria/Educação · **Inimigo:** Pilotante · **Gatilho:** save + dwell
> **Tipo (carta):** Lista curada / Data-story · 7 slides · 1080x1350
> **Fontes:** Sebrae (44% usam IA, 41% chatbot no WhatsApp) + Nautis (só 9% mediram ROI). **Enquadrar como PESQUISA, dados autorreportados.** NÃO tratar como fato duro.

---

## ROTEIRO SLIDE A SLIDE

### SLIDE 1 — CAPA (hook + número-âncora)
- **Badge:** ESTADO DA IA · PME BR
- **Número gigante:** 9%
- **Hook (123 chars):** "44% das PMEs brasileiras já usam IA. Mas só 9% medem se ela dá retorno. O abismo não é tecnologia, é MEDIÇÃO."
- **Assinatura:** Apolo Santos · "Arraste para o lado →"

### SLIDE 2 — CONTEXTO
- A IA já entrou na PME brasileira. Adoção parou de ser o problema.
- Duas pesquisas recentes (Sebrae e Nautis) mostram onde está o verdadeiro gargalo.
- **Teaser rodapé:** "Os números, um a um →"

### SLIDE 3 — DADO 1 (adoção)
- **Número:** 44%
- 44% das PMEs brasileiras já usam IA de alguma forma (pesquisa Sebrae).
- Adoção deixou de ser barreira. A IA já está dentro de quase metade dos pequenos negócios.
- **Teaser:** "E no canal do cliente? →"

### SLIDE 4 — DADO 2 (canal)
- **Número:** 41%
- 41% já têm chatbot no WhatsApp (pesquisa Sebrae).
- O canal que o cliente já usa pra comprar JÁ está automatizado. Pelo menos no papel.
- **Teaser:** "Agora o número que assusta →"

### SLIDE 5 — DADO 3 (a falha)
- **Número:** 9%
- MAS só 9% mediram o ROI dessa IA (pesquisa Nautis).
- 91% LIGARAM e não sabem se funciona. Ligar virou fácil. Saber o resultado, não.
- **Teaser:** "O que separa os 9% dos 91% →"

### SLIDE 6 — INSIGHT / CLÍMAX
- **Número:** →
- **Card:** Ligar IA virou commodity. Quem MEDE vira a minoria com vantagem. Defina UMA métrica de sucesso e o baseline ANTES de ligar qualquer agente.
- *(ressalva: pesquisas com dados autorreportados, Sebrae/Nautis)*

### SLIDE 7 — CTA (save + pergunta)
- **Resumo:** Adotar IA não é mais o diferencial. MEDIR é.
- **CTA:** Salva isso antes de ligar a tua próxima IA.
- **Pergunta:** Você mede o ROI da sua IA hoje? Sim ou não, comenta.
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
  .slide-cover .bignum { font-size: 240px; font-weight: 900; line-height: 1; background: linear-gradient(135deg, #00D4FF, #7C3AED); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 24px; }
  .slide-cover h1 { font-size: 48px; font-weight: 800; line-height: 1.15; margin-bottom: 20px; }
  .slide-cover h1 .hl { background: linear-gradient(135deg, #00D4FF, #7C3AED); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
  .slide-cover .author { font-size: 22px; color: #00D4FF; letter-spacing: 2px; text-transform: uppercase; margin-top: 40px; }
  .slide-cover .swipe { position: absolute; bottom: 60px; right: 60px; font-size: 20px; color: #A0AEC0; }
  .slide-content .number { font-size: 150px; font-weight: 900; background: linear-gradient(135deg, #00D4FF, #7C3AED); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 8px; line-height: 1; }
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
  <div class="badge">Estado da IA · PME BR</div>
  <div class="bignum">9%</div>
  <h1>44% das PMEs já usam IA.<br><span class="hl">Só 9% medem se dá retorno.</span></h1>
  <p style="font-size:28px;color:#A0AEC0;">O abismo da PME BR não é tecnologia. É MEDIÇÃO.</p>
  <p class="author">Apolo Santos</p>
  <p class="swipe">Arraste para o lado →</p>
</div>

<!-- SLIDE 2 — CONTEXTO -->
<div class="slide slide-content">
  <div class="number">00</div>
  <h2>A IA já entrou na PME brasileira</h2>
  <p>Adoção parou de ser o problema. Quase metade dos pequenos negócios já usa IA.</p>
  <p>Duas pesquisas recentes (Sebrae e Nautis) mostram onde está o verdadeiro gargalo.</p>
  <p class="teaser">Os números, um a um →</p>
</div>

<!-- SLIDE 3 — DADO 1 -->
<div class="slide slide-content">
  <div class="number">44%</div>
  <h2>já usam IA de alguma forma</h2>
  <p>44% das PMEs brasileiras já adotaram IA no negócio (pesquisa Sebrae).</p>
  <p>Adoção deixou de ser barreira. A tecnologia já está DENTRO da operação.</p>
  <p class="source">Fonte: pesquisa Sebrae</p>
  <p class="teaser">E no canal do cliente? →</p>
</div>

<!-- SLIDE 4 — DADO 2 -->
<div class="slide slide-content">
  <div class="number">41%</div>
  <h2>já têm chatbot no WhatsApp</h2>
  <p>41% das PMEs já automatizaram o atendimento no WhatsApp (pesquisa Sebrae).</p>
  <p>O canal que o cliente usa pra comprar JÁ está automatizado. Pelo menos no papel.</p>
  <p class="source">Fonte: pesquisa Sebrae</p>
  <p class="teaser">Agora o número que assusta →</p>
</div>

<!-- SLIDE 5 — DADO 3 -->
<div class="slide slide-content">
  <div class="number">9%</div>
  <h2>mediram se a IA dá retorno</h2>
  <p>Só 9% mediram o ROI da própria IA (pesquisa Nautis).</p>
  <p>91% LIGARAM e não sabem se funciona. Ligar virou fácil. Saber o resultado, não.</p>
  <p class="source">Fonte: pesquisa Nautis (dados autorreportados)</p>
  <p class="teaser">O que separa os 9% dos 91% →</p>
</div>

<!-- SLIDE 6 — INSIGHT -->
<div class="slide slide-content">
  <div class="number">→</div>
  <h2>Ligar IA virou commodity</h2>
  <div class="card">
    <p>Quem MEDE vira a minoria com vantagem. Defina UMA métrica de sucesso e o baseline ANTES de ligar qualquer agente.</p>
  </div>
  <p class="source" style="margin-top:24px;">Base: pesquisas Sebrae e Nautis (autorreportadas)</p>
</div>

<!-- SLIDE 7 — CTA -->
<div class="slide slide-cta">
  <h2>Adotar IA não é mais o diferencial.<br>MEDIR é.</h2>
  <p class="cta-text">Salva isso antes de ligar a tua próxima IA.</p>
  <div class="follow">Você mede o ROI da sua IA hoje? Comenta.</div>
  <p class="handle">@apolosantos</p>
</div>

</body>
</html>
```

---

## CHECKLIST PRÉ-PUBLICAÇÃO
- [x] Exatamente 7 slides · 1080x1350
- [x] Slide 1 com hook ≤140 chars + número-âncora (9%)
- [x] 1 ideia por slide
- [x] Teaser no rodapé dos slides 1 a 5
- [x] Slide 7 = CTA save + pergunta
- [x] Fontes citadas em todo slide com dado (Sebrae / Nautis)
- [x] Enquadrado como PESQUISA / dados autorreportados (não fato duro)
- [x] SEM hífen/travessão · CAPS em ênfases (MEDIÇÃO, LIGARAM, MEDE, MEDIR)
- [x] @apolosantos na capa e no CTA
