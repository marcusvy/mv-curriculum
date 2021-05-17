export interface TechSkill {
  nome: string;
  nivel: number;
}

export interface TechCategory {
  nome: string;
  skills: TechSkill[];
}

export const TechSkills: TechCategory[] = [
  {
    nome: 'Linguagem de Programação',
    skills: [
      { nome: 'Ruby', nivel: 3 },
      { nome: 'Java', nivel: 3 },
      { nome: 'Python 3', nivel: 4 },
      { nome: 'PHP 8', nivel: 5 },
      { nome: 'HTML', nivel: 5 },
      { nome: 'CSS 3', nivel: 5 },
      { nome: 'Go', nivel: 2 },
      { nome: 'R', nivel: 3 },
      { nome: 'SQL', nivel: 4 },
    ],
  },
  {
    nome: 'Tecnologias',
    skills: [
      { nome: 'Angular 12', nivel: 5 },
      { nome: 'Symfony 5.2', nivel: 5 },
      { nome: 'Rails', nivel: 4 },
      { nome: 'Doctrine 2', nivel: 5 },
      { nome: 'Node 14', nivel: 5 },
      { nome: 'Typescript 4', nivel: 4 },
      { nome: 'Vuejs 3', nivel: 3 },
      { nome: 'React', nivel: 3 },
    ],
  },
  {
    nome: 'Gerenciamento de produto',
    skills: [
      { nome: 'Metodologia SCRUM', nivel: 5 },
      { nome: 'Metodologia Agile', nivel: 4 },
      { nome: 'Product roadmaps', nivel: 3 },
      { nome: 'UX Design', nivel: 5 },
      { nome: 'Programação', nivel: 4 },
      { nome: 'QA Testing', nivel: 3 },
    ],
  },
  {
    nome: 'Design',
    skills: [
      { nome: 'Adobe Creative Apps', nivel: 4 },
      { nome: 'Mídia interativa', nivel: 4 },
      { nome: 'Wireframing', nivel: 5 },
      { nome: 'UX research', nivel: 5 },
      { nome: 'Prototipagem', nivel: 5 },
      { nome: 'Design Responsivo', nivel: 4 },
      { nome: 'Edição de Imagem', nivel: 3 },
    ],
  },
  {
    nome: 'Marketing',
    skills: [
      { nome: 'Search Engine Optimization (SEO)', nivel: 4 },
      {
        nome: 'Plataformas de Redes Sociais (Twitter, Facebook, Instagram)',
        nivel: 4,
      },
      { nome: 'Software automação em marketing', nivel: 4 },
      { nome: 'Content Management Systems (CMS)', nivel: 5 },
      { nome: 'Copywriting', nivel: 2 },
      { nome: 'Criação de conteúdo', nivel: 3 },
      { nome: 'Google Analytics', nivel: 4 },
      { nome: 'Ferramentas de análise em Marketing', nivel: 5 },
    ],
  },
];
