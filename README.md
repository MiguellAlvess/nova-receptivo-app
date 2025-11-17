# Nova Receptivo ✈️

Site institucional da **Nova Receptivo**, uma agência especializada em viagens e pacotes turísticos.  
O projeto foi desenvolvido com foco em **experiência do usuário**, **responsividade** e **facilidade de navegação**, destacando os principais serviços, pacotes e canais de contato da empresa.

🔗 **Versão em produção:** https://nova-receptivo-app-nu.vercel.app/

---

## ✨ Funcionalidades

- **Página inicial (Home)**
  - Seção *hero* com imagem de destaque e chamada para ação
  - Destaque dos principais serviços da agência
  - Listagem de pacotes em destaque
  - Formulário rápido para **cotação de passagens aéreas**

- **Página de Pacotes (`/packages`)**
  - Sessão de destaque dos pacotes
  - Pacotes **locais**, **internacionais** e pontos turísticos de **Campina Grande**
  - Layout organizado em seções para facilitar a navegação

- **Página Sobre (`/about`)**
  - Vídeo em destaque apresentando a empresa
  - Texto institucional com a história e diferenciais da Nova Receptivo
  - Cartões com números e indicadores (anos de experiência, clientes, destinos, etc.)

- **Página de Contato (`/contact`)**
  - Formulário de contato para envio de mensagens
  - Estrutura pensada para ser integrada futuramente a APIs ou serviços de e-mail

- **Formulário de Cotação de Voos**
  - Tipos de viagem: ida e volta, só ida, múltiplos trechos
  - Campos de origem, destino, datas e quantidade de passageiros
  - Validações básicas de campos obrigatórios
  - Componente desacoplado para futura integração com backend

---

## 🧱 Stack Tecnológica

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, pasta `src/app`)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Biblioteca UI:** [React 19](https://react.dev/)
- **Estilos:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Componentes UI:** [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Qualidade de código:**
  - ESLint
  - Prettier (com plugin Tailwind)
  - lint-staged + Husky (hooks de commit)
