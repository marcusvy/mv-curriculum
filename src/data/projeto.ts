export interface Projeto {
  nome: string;
  descricao: string;
  categorias: string[];
  ano: number;
  link?: string | undefined;
  tecnologias?: string[];
}

export const ProjetoCategorias: string[] = [];
export const ProjetoCollection: Projeto[] = [
  {
    nome: 'Portal Drone Amazônia',
    descricao:
      'Maior portal de aeronaves remotamente pilotáveis da região Norte do Brasil',
    categorias: [],
    ano: 2020,
    link: 'https://droneamazonia.com.br',
  },
  {
    nome: 'Plataforma Geração Emprego de Rondônia',
    descricao: 'Plataforma de emprego online do Governo do Estado de Rondônia',
    categorias: [],
    ano: 2020,
    link: 'https://geracaoemprego.ro.gov.br/',
    tecnologias: ['PHP', 'Symfony', 'Angular Framework'],
  },
  {
    nome: 'Plataforma de Denuncia do Procon Rondônia',
    descricao:
      'Aplicação de denúncia e reclamação do Procon do Estado de Rondônia',
    categorias: [],
    ano: 2020,
    link: 'https://procon.ro.gov.br/',
    tecnologias: ['PHP', 'Symfony', 'Angular Framework'],
  },
  {
    nome: 'Plataforma Digital Pra Cima Rondônia',
    descricao:
      'Plataforma Digital de Vídeos em inclusão digital do Estado de Rondônia',
    categorias: [],
    ano: 2020,
    link: 'https://pracima.ro.gov.br/',
    tecnologias: ['PHP', 'Symfony', 'Angular Framework'],
  },
  {
    nome: 'Pagamento Portal Amazônia Empregos',
    descricao: 'Implementações de pagamento online (Bradesco, Banco do Brasil)',
    categorias: [],
    ano: 2018,
    tecnologias: ['PHP', 'Java', 'Pyhton'],
  },
  {
    nome: 'Website MVinicius Consultoria',
    descricao: 'Website de consultoria',
    categorias: [],
    ano: 2018,
    tecnologias: ['PHP', 'Symfony', 'Angular Framework'],
  },
  {
    nome: 'Website Associação de Docentes da Universidade Federal de Rondônia',
    descricao: 'Aplicação Web para cadastro de professores',
    categorias: [],
    ano: 2017,
    tecnologias: ['PHP', 'Wordpress', 'Angular Framework'],
  },
  {
    nome: 'Website Carteira Estudantil DCE UNIR',
    descricao: 'Aplicação web para geração de carteiras estudantis',
    categorias: [],
    ano: 2017,
    tecnologias: ['PHP', 'Zend Framework'],
  },
  {
    nome: 'Social Midia Programa Diálogos',
    descricao:
      'Projeto de marketing para o Programa Diálogos da Rádio Caiari (Rondônia)',
    categorias: [],
    ano: 2017,
  },
  {
    nome: 'Website XI Congresso Brasileiro de Educação Física',
    descricao:
      'Aplicação web de evento com geração e controle de certificados digitais',
    categorias: [],
    ano: 2017,
    tecnologias: ['PHP', 'Wordpress', 'Zend Framework', 'Angular Framework'],
  },
  {
    nome: 'Website II Congresso Métodos Fronteiriços',
    descricao:
      'Aplicação web de evento com geração e controle de certificados digitais ',
    categorias: [],
    ano: 2017,
    tecnologias: ['PHP', 'Wordpress', 'Zend Framework'],
  },
  {
    nome: 'Social Mídia, Branding Laboratório de Modelagem de Dados Ambientais UNIR',
    descricao:
      'Projeto de marketing do Laboratório de Modelagem de Dados Ambientais da Universidade Federal de Rondônia',
    categorias: [],
    ano: 2016,
  },
  {
    nome: 'Social Midia Núcleo de Ciências Exatas e da Terra da UNIR',
    descricao:
      'Projeto de Marketing do Núcleo de Ciências Exatas e da Terra da UNIR',
    categorias: [],
    ano: 2016,
  },
  {
    nome: 'Marketing Sapatilhas Flor de LizBella',
    descricao: 'Projeto de Marketing e automação de rede social',
    categorias: [],
    ano: 2014,
    tecnologias: ['Python', 'PHP'],
  },
  {
    nome: 'Social Midia Associação Comercial e Industrial de Jaci Paraná',
    descricao:
      'Projeto de Marketing para Associação Comercial e Industrial de Jaci Paraná',
    categorias: [],
    ano: 2014,
  },
  {
    nome: 'Website Vida Promotora Soluções Financeiras',
    descricao: 'Aplicação Web de gerenciamento de clientes',
    categorias: [],
    ano: 2014,
  },
];
