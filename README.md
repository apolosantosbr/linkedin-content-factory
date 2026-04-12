# LinkedIn Content Factory

**Um time de 9 agentes de IA que trabalham juntos para criar conteudo viral no LinkedIn.**

Pense assim: voce tem uma mini agencia de marketing dentro do seu terminal. Cada agente e um "funcionario" especializado. Um pesquisa o que esta bombando na internet, outro escreve o post, outro faz a imagem, outro revisa tudo. No final, voce recebe o conteudo pronto para publicar.

---

## O que e isso?

E um sistema que usa o [Claude Code](https://claude.ai/claude-code) + [Maestri](https://maestri.dev) para criar conteudo de LinkedIn com qualidade profissional.

**Em vez de voce fazer tudo sozinho:**
- Pesquisar o que esta em alta
- Decidir o formato do post
- Escrever o texto
- Criar a imagem
- Revisar tudo

**O sistema faz isso por voce, com 9 agentes trabalhando em conjunto.**

---

## Como funciona? (explicacao simples)

Imagine uma fabrica com 9 estacoes. Cada estacao faz uma coisa:

```
Voce pede: "Quero um post sobre IA"

    1. RADAR pesquisa o que esta viral agora
    2. ESTRATEGIA decide o melhor formato e angulo
    3. POST escreve o texto
    4. THUMBNAIL cria a imagem
    5. REVISAR confere se esta tudo perfeito
    6. Voce recebe tudo pronto para publicar
```

---

## Os 9 Agentes

| Agente | O que faz | Quando usar |
|--------|-----------|-------------|
| **Radar** | Pesquisa o que esta bombando na internet (YouTube, LinkedIn, X) | "O que esta viral essa semana?" |
| **Estrategia** | Decide o melhor formato (post, carrossel, artigo) e o angulo | Automatico — sempre roda antes de criar |
| **Post** | Escreve posts de texto para o LinkedIn | "Faz um post sobre vibe coding" |
| **Artigo** | Escreve artigos longos e newsletters | "Escreve um artigo sobre IA no marketing" |
| **Reply** | Cria comentarios estrategicos para postar em posts de outras pessoas | "Quero comentar nesse post: [link]" |
| **Carrossel** | Cria carrosseis visuais com 7 slides | "Faz um carrossel sobre ferramentas de IA" |
| **Thumbnail** | Cria imagens para posts e artigos | "Cria a imagem desse post" |
| **Revisar** | Revisa qualquer conteudo e da uma nota de 0 a 5 | Automatico — tudo passa por ele |
| **Orquestrador** | Coordena todos os outros agentes | E o terminal principal (voce fala com ele) |

---

## O que voce precisa instalar

### 1. Claude Code (obrigatorio)

Claude Code e a ferramenta de IA da Anthropic que roda no terminal.

```bash
# Instalar Claude Code
npm install -g @anthropic-ai/claude-code
```

> Precisa de uma conta na [Anthropic](https://console.anthropic.com/) com creditos de API.
> Documentacao: https://docs.anthropic.com/en/docs/claude-code

### 2. Maestri (obrigatorio)

Maestri e o app que permite ter varios terminais de Claude Code conversando entre si.

**Baixe em:** https://maestri.dev

> Maestri e um app de desktop. Voce abre ele, cria os terminais e conecta as notas.

### 3. Playwright (opcional — para gerar imagens automaticamente)

Se voce quiser que o sistema converta as imagens HTML em PNG sozinho:

```bash
# Instalar Playwright
npm install -g playwright
npx playwright install chromium
```

Se nao instalar, voce pode converter manualmente pelo Chrome (instrucoes abaixo).

---

## Como instalar passo a passo

### Passo 1: Baixe este repositorio

```bash
git clone https://github.com/SEU-USUARIO/linkedin-content-factory.git
cd linkedin-content-factory
```

### Passo 2: Personalize o brand-voice.md

Abra o arquivo `brand-voice.md` e mude para o SEU perfil:

- Seu nome
- Sua localizacao
- Seu posicionamento (o que voce faz)
- Sua headline do LinkedIn
- Seu publico-alvo (para quem voce escreve)
- Seu tom de voz (como voce fala)
- Seus pilares de conteudo (sobre o que voce posta)

> Esse arquivo e a "personalidade" de todo o sistema. Todos os agentes leem ele antes de fazer qualquer coisa.

### Passo 3: Abra o Maestri e crie 9 terminais

1. Abra o app Maestri
2. Crie 9 terminais com estes nomes:
   - `Radar`
   - `Estrategia`
   - `Post`
   - `Artigo`
   - `Reply`
   - `Carrossel`
   - `Thumbnail`
   - `Revisar`
   - `Orquestrador` (este e o principal — voce fala com ele)
3. Crie uma nota e conecte ao Orquestrador (para acompanhar o pipeline)

### Passo 4: Treine cada terminal

Em cada terminal, rode o Claude Code apontando para este diretorio:

```bash
claude
```

Depois, envie esta mensagem para cada terminal:

```
Leia os arquivos brand-voice.md e skill-[NOME].md neste diretorio
e siga as instrucoes como seu manual de operacao.
```

Substitua `[NOME]` pelo nome do terminal:
- Terminal "Radar" → `skill-radar.md`
- Terminal "Post" → `skill-post.md`
- E assim por diante...

**Ou, se voce estiver no Orquestrador, pode treinar todos de uma vez usando Maestri:**

```
maestri ask "Radar" "Leia brand-voice.md e skill-radar.md e siga como manual."
maestri ask "Post" "Leia brand-voice.md e skill-post.md e siga como manual."
(repetir para cada terminal)
```

### Passo 5: Comece a criar!

No terminal Orquestrador, diga:

```
"Quero um post sobre [seu tema]"
```

O sistema cuida do resto.

---

## Estrutura de pastas

```
linkedin-content-factory/
│
├── README.md                ← voce esta aqui
├── brand-voice.md           ← sua personalidade e tom de voz
│
├── skill-radar.md           ← manual do agente Radar
├── skill-estrategia.md      ← manual do agente Estrategia
├── skill-post.md            ← manual do agente Post
├── skill-artigo.md          ← manual do agente Artigo
├── skill-reply.md           ← manual do agente Reply
├── skill-carrossel.md       ← manual do agente Carrossel
├── skill-thumbnail.md       ← manual do agente Thumbnail
├── skill-revisar.md         ← manual do agente Revisar
├── skill-orquestrador.md    ← manual do agente Orquestrador
│
└── posts/                   ← seus posts ficam aqui
    └── 2026-04-14_vibe-coding-morreu/   ← exemplo de post
        ├── post.txt         ← texto pronto para publicar
        ├── imagem.png       ← imagem do post (1080x1350)
        ├── imagem.html      ← codigo fonte da imagem (editavel)
        └── revisao.md       ← nota do revisor + changelog
```

**Cada post fica na sua propria pasta**, com a data no nome para ficar em ordem.

Padrao: `AAAA-MM-DD_titulo-curto/`

---

## Como converter imagem HTML para PNG

O sistema gera imagens como arquivo HTML (para serem facilmente editaveis). Para transformar em PNG:

### Metodo 1: Automatico (com Playwright)

```bash
npx playwright screenshot --viewport-size=1080,1350 imagem.html imagem.png
```

### Metodo 2: Manual (pelo Chrome)

1. Abra o arquivo `.html` no Google Chrome
2. Aperte `F12` (ou `Cmd+Option+I` no Mac) para abrir DevTools
3. Clique no icone de celular/tablet no topo do DevTools
4. No campo de tamanho, digite: `1080` x `1350`
5. Aperte `Cmd+Shift+P` e digite: `Capture full size screenshot`
6. O PNG sera salvo na pasta Downloads

---

## Fluxo de trabalho visual

```
┌─────────┐     ┌─────────────┐     ┌──────────┐
│  RADAR  │────→│ ESTRATEGIA  │────→│   POST   │
│ pesquisa│     │ decide formato    │ escreve  │
└─────────┘     └─────────────┘     └────┬─────┘
                                         │
                                    ┌────▼─────┐
                                    │THUMBNAIL │
                                    │cria imagem│
                                    └────┬─────┘
                                         │
                                    ┌────▼─────┐
                                    │ REVISAR  │
                                    │nota 0-5  │
                                    └────┬─────┘
                                         │
                                    ┌────▼─────┐
                                    │ ENTREGA  │
                                    │post pronto│
                                    └──────────┘
```

Para **carrosseis**, o fluxo e o mesmo, trocando POST por CARROSSEL.
Para **artigos**, troca por ARTIGO (e adiciona post de distribuicao).
Para **replies**, vai direto: voce → REPLY → REVISAR → comentario pronto.

---

## Personalizacao

### Quero mudar as cores das imagens

Edite a secao de paleta de cores em `skill-carrossel.md` e `skill-thumbnail.md`:

```css
--bg-dark: #0A0A0A;        /* fundo */
--accent-primary: #00D4FF;  /* cor de destaque 1 */
--accent-secondary: #7C3AED; /* cor de destaque 2 */
```

### Quero mudar o tom de voz

Edite `brand-voice.md` na secao "Tom de Voz". A formula padrao e:
- 70% educativo/pratico
- 20% provocacao inteligente
- 10% bastidores pessoais

Ajuste os percentuais para o seu estilo.

### Quero mudar os pilares de conteudo

Edite `brand-voice.md` na secao "Pilares de Conteudo". O sistema funciona melhor com 4-5 pilares. Menos e pouco variado, mais e disperso demais.

### Quero mudar o formato de hashtags

Edite `skill-post.md` na secao "Hashtags". Mude as hashtags recomendadas por pilar.

---

## Duvidas frequentes

### Preciso saber programar?
Nao. Voce so precisa instalar o Claude Code e o Maestri (seguindo as instrucoes acima) e conversar com o sistema em linguagem natural.

### Quanto custa?
- **Claude Code:** usa creditos de API da Anthropic (pago por uso)
- **Maestri:** verifique o site para planos atuais
- **Playwright:** gratis e open-source

### Funciona para qualquer nicho?
Sim. O sistema foi desenhado para ser replicavel. Basta personalizar o `brand-voice.md` com seu nicho, publico e tom de voz.

### Posso usar sem o Maestri?
Sim, mas perde a coordenacao entre terminais. Voce pode usar cada skill-*.md individualmente — basta abrir o Claude Code e dizer "leia skill-post.md e escreva um post sobre X".

### Posso adicionar mais agentes?
Sim. Crie um novo `skill-[nome].md` seguindo o padrao dos existentes e adicione um terminal no Maestri.

---

## Dados que fundamentam o sistema

Tudo foi construido com base em dados reais de benchmarking:

- **Carrosseis** com 7 slides geram 6.6-7.0% de engagement (maior de todos os formatos)
- **Posts** de 1.300-1.900 caracteres geram 47% mais engajamento
- **Hook** nos primeiros 210 caracteres decide 60-70% das leituras
- **Links no corpo** do post reduzem alcance em 60%
- **Responder comentarios** em 15 minutos dispara boost algoritmico
- **2-5 posts/semana** e o sweet spot de frequencia

Fontes: LinkedIn Algorithm 2026, Hootsuite, Social Insider, Buffer, Justin Welsh.

---

## Creditos

Criado por **Apolo Santos** usando Claude Code (Anthropic) + Maestri.

Sistema de 9 agentes de IA para producao de conteudo LinkedIn com posicionamento de autoridade.

---

## Licenca

MIT — use, modifique e distribua livremente.
