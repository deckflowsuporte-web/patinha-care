# 🏥 Patinha Care - Clínica Veterinária

Site da clínica veterinária Patinha Care.

## 📁 Estrutura

```
/workspace/project/
├── .config/                  # ⚙️ TUDO AQUI DENTRO
│   ├── src/
│   │   ├── app/             # Páginas
│   │   │   ├── page.tsx     # Home
│   │   │   ├── sobre/       # Sobre
│   │   │   ├── servicos/    # Serviços
│   │   │   ├── agendar/     # Agendamento
│   │   │   └── contato/     # Contato
│   │   └── components/       # Navbar, Footer
│   ├── .agents/             # Skills do agente
│   ├── package.json
│   └── next.config.js
└── AGENTS.md
```

## 🛤️ Rotas

| Rota | Página |
|------|--------|
| `/` | Home - Hero, serviços, depoimentos |
| `/sobre` | Nossa história, equipe, missão |
| `/servicos` | Cards com preços e funcionalidades |
| `/agendar` | Formulário de agendamento |
| `/contato` | Mapa, endereço, formulário |

## 🎨 Design

- **Estética:** Organic Warmth (acolhedora, natural)
- **Cores:** Verde floresta, creme, coral suave
- **Fontes:** Cormorant Garamond (display), Nunito (body)

## 🚀 Comandos

```bash
npm install      # Instalar dependências
npm run dev      # Development (porta 3000)
npm run build    # Build
```

## 🤖 Agente

Verifique skills em: `.agents/skills/SKILLS.md`
