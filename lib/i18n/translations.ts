export type Locale = 'pt' | 'en'

export const translations = {
  pt: {
    // Navegação
    nav: {
      features: 'Funcionalidades',
      pricing: 'Preços',
      about: 'Sobre',
      login: 'Entrar',
      signup: 'Criar Conta',
    },
    // Hero Section
    hero: {
      title: 'Organize os Momentos que Importam',
      subtitle: 'καιρός',
      description:
        'Organize os seus eventos e ideias num único lugar. O Kairos ajuda-o a capturar e gerir os momentos importantes da sua vida.',
      cta: 'Começar Gratuitamente',
      secondaryCta: 'Ver Demonstração',
    },
    // Features Section
    features: {
      title: 'Funcionalidades',
      subtitle: 'Tudo o que precisa para organizar a sua vida',
      calendar: {
        title: 'Calendário Visual',
        description:
          'Visualize todos os seus eventos e notas numa interface de calendário intuitiva e bonita.',
      },
      events: {
        title: 'Gestão de Eventos',
        description:
          'Crie, edite e organize eventos com prioridades, estados e lembretes personalizados.',
      },
      notes: {
        title: 'Notas Inteligentes',
        description:
          'Adicione notas a qualquer dia ou mantenha-as flutuantes. Organize com tags e cores.',
      },
      dragdrop: {
        title: 'Arrasta e Solta',
        description:
          'Interface intuitiva que permite mover eventos e notas facilmente entre datas.',
      },
      themes: {
        title: 'Temas Personalizados',
        description:
          'Escolha entre modo claro e escuro, e personalize cores para eventos e notas.',
      },
      sync: {
        title: 'Sincronização',
        description:
          'Os seus dados sincronizam automaticamente em todos os dispositivos.',
      },
    },
    // CTA Section
    cta: {
      title: 'Pronto para organizar a sua vida?',
      description:
        'Junte-se a milhares de utilizadores que já estão a capturar os seus momentos importantes com o Kairos.',
      button: 'Criar Conta Grátis',
    },
    // Footer
    footer: {
      product: 'Produto',
      features: 'Funcionalidades',
      pricing: 'Preços',
      changelog: 'Novidades',
      company: 'Empresa',
      about: 'Sobre',
      blog: 'Blog',
      careers: 'Carreiras',
      legal: 'Legal',
      privacy: 'Privacidade',
      terms: 'Termos',
      copyright: '© 2026 Kairos. Todos os direitos reservados.',
    },
    // 404 Page
    notFound: {
      title: 'Momento Perdido',
      code: '404',
      subtitle: 'Este momento não existe no tempo',
      description:
        'Parece que tentou aceder a um momento que não foi capturado. A página que procura não existe ou foi movida para outro espaço-tempo.',
      homeButton: 'Voltar ao Presente',
      contactButton: 'Reportar Problema',
      suggestions: 'Talvez esteja à procura de:',
    },
  },
  en: {
    // Navigation
    nav: {
      features: 'Features',
      pricing: 'Pricing',
      about: 'About',
      login: 'Login',
      signup: 'Sign Up',
    },
    // Hero Section
    hero: {
      title: 'Organize the Moments that Matter',
      subtitle: 'καιρός',
      description:
        'Organize your events and ideas in one place. Kairos helps you capture and manage the important moments of your life.',
      cta: 'Get Started Free',
      secondaryCta: 'Watch Demo',
    },
    // Features Section
    features: {
      title: 'Features',
      subtitle: 'Everything you need to organize your life',
      calendar: {
        title: 'Visual Calendar',
        description:
          'View all your events and notes in an intuitive and beautiful calendar interface.',
      },
      events: {
        title: 'Event Management',
        description:
          'Create, edit and organize events with custom priorities, statuses and reminders.',
      },
      notes: {
        title: 'Smart Notes',
        description:
          'Add notes to any day or keep them floating. Organize with tags and colors.',
      },
      dragdrop: {
        title: 'Drag and Drop',
        description:
          'Intuitive interface that lets you easily move events and notes between dates.',
      },
      themes: {
        title: 'Custom Themes',
        description:
          'Choose between light and dark mode, and customize colors for events and notes.',
      },
      sync: {
        title: 'Sync',
        description: 'Your data syncs automatically across all your devices.',
      },
    },
    // CTA Section
    cta: {
      title: 'Ready to organize your life?',
      description:
        'Join thousands of users already capturing their important moments with Kairos.',
      button: 'Create Free Account',
    },
    // Footer
    footer: {
      product: 'Product',
      features: 'Features',
      pricing: 'Pricing',
      changelog: 'Changelog',
      company: 'Company',
      about: 'About',
      blog: 'Blog',
      careers: 'Careers',
      legal: 'Legal',
      privacy: 'Privacy',
      terms: 'Terms',
      copyright: '© 2026 Kairos. All rights reserved.',
    },
    // 404 Page
    notFound: {
      title: 'Lost Moment',
      code: '404',
      subtitle: 'This moment doesn\'t exist in time',
      description:
        'It seems you tried to access a moment that wasn\'t captured. The page you\'re looking for doesn\'t exist or was moved to another space-time.',
      homeButton: 'Back to Present',
      contactButton: 'Report Issue',
      suggestions: 'Maybe you\'re looking for:',
    },
  },
} as const
