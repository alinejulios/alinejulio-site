// Histórico de palestras, aulas e mentorias, do mais recente para o mais antigo.
// A mesma lista alimenta a página /palestras/, os cards da home e o ItemList
// de eventos em JSON-LD (só os itens com publico: true).

export interface Pessoa {
  nome: string;
  linkedin: string;
}

export interface LinkExterno {
  href: string;
  rotulo: string;
}

export interface PalestraItem {
  /** Âncora em /palestras/#<id> e sufixo do @id no JSON-LD */
  id: string;
  titulo: string;
  tipo: 'Palestra' | 'Aula' | 'Mentoria' | 'Workshop';
  tema: string;
  /** ISO 8601; só ano e mês quando o dia não é conhecido */
  dataISO: string;
  /** Data por extenso exibida na página */
  dataTexto: string;
  formato: 'online' | 'presencial';
  /** Local por extenso exibido ao lado da data */
  localTexto: string;
  /** Lugar físico (só presencial), usado no Place do JSON-LD */
  lugar?: { nome: string; cidade?: string; uf?: string };
  /** Evento ou instituição exibidos no card */
  eventoTexto: string;
  /** Organizador sem a edição */
  organizador: { nome: string; url?: string };
  /** Edição ou série do evento */
  superEvento?: { nome: string; url?: string };
  descricao?: string;
  /** Itens de lista (usado na mentoria que agrupa as 2 aulas) */
  topicos?: string[];
  coautoras?: Pessoa[];
  /** Publicação sobre o evento (subjectOf no JSON-LD) */
  publicacao?: LinkExterno;
  linkComplementar?: LinkExterno;
  slides?: { href: string; tamanho: string };
  /** Eventos públicos entram no ItemList; mentorias particulares não */
  publico: boolean;
}

const SEOCAMP = { nome: 'SEOcamp', url: 'https://seocamp.com.br/' };
const EDUCASEO = { nome: 'EducaSEO', url: 'https://educaseo.com.br/' };

export const palestras: PalestraItem[] = [
  {
    id: 'da-metrica-a-hipotese',
    titulo: 'Da Métrica à Hipótese: Transformando um Dado de Analytics em Teste A/B',
    tipo: 'Workshop',
    tema: 'CRO e testes A/B',
    dataISO: '2026-09',
    dataTexto: 'Setembro de 2026',
    formato: 'online',
    localTexto: 'Online',
    eventoTexto: 'SEOcamp, 4ª edição',
    organizador: SEOCAMP,
    superEvento: { nome: 'SEOcamp, 4ª edição' },
    descricao: 'Oficina prática sobre como transformar dados brutos de Analytics em hipóteses testáveis, cobrindo fontes de dados, a jornada do dado ao insight e planejamento de KPIs primários e secundários.',
    slides: { href: '/materiais/seocamp-da-metrica-a-hipotese.pdf', tamanho: '1,6 MB' },
    publico: true,
  },
  {
    id: 'do-clique-ao-relacionamento',
    titulo: 'Do clique ao relacionamento: repensando o sucesso em CRO',
    tipo: 'Palestra',
    tema: 'CRO e experiência do usuário',
    dataISO: '2026-03-27',
    dataTexto: '27 de março de 2026',
    formato: 'presencial',
    localTexto: 'São Paulo (presencial)',
    lugar: { nome: 'SEOcamp São Paulo', cidade: 'São Paulo', uf: 'SP' },
    eventoTexto: 'SEOcamp São Paulo, 3ª edição',
    organizador: SEOCAMP,
    superEvento: {
      nome: 'SEOcamp São Paulo, 3ª edição',
      url: 'https://seocamp.com.br/edicao/sao-paulo-27-marco-2026/',
    },
    descricao: 'Palestra sobre os limites do CRO orientado apenas a cliques: dark patterns, o conceito H2H (Human to Human) de Philip Kotler e o framework R.E.A.L. para priorizar relacionamento e Lifetime Value sobre conversão imediata.',
    linkComplementar: {
      href: 'https://seocamp.com.br/edicao/sao-paulo-27-marco-2026/',
      rotulo: 'Ver no site do SEOcamp',
    },
    slides: { href: '/materiais/seocamp-do-clique-ao-relacionamento.pdf', tamanho: '7,7 MB' },
    publico: true,
  },
  {
    id: 'alem-do-algoritmo',
    titulo: 'Além do Algoritmo: mulheres que transformam o mercado',
    tipo: 'Palestra',
    tema: 'Carreira em SEO e CRO',
    dataISO: '2026-03-06',
    dataTexto: '6 de março de 2026',
    formato: 'presencial',
    localTexto: 'Presencial, sede da EducaSEO',
    lugar: { nome: 'Sede da EducaSEO' },
    eventoTexto: 'Encontro Mulheres do SEO, EducaSEO',
    organizador: EDUCASEO,
    superEvento: { nome: 'Mulheres do SEO' },
    descricao: 'Conversa sobre carreira, desafios e a evolução do mercado de SEO e CRO.',
    coautoras: [
      { nome: 'Ana Paula Ferreira', linkedin: 'https://www.linkedin.com/in/anapaulaferreiradisouza' },
      { nome: 'Rayssa Lira', linkedin: 'https://www.linkedin.com/in/rayssa-lira-33415793' },
    ],
    publicacao: {
      href: 'https://www.linkedin.com/feed/update/urn:li:activity:7436849099129389057/',
      rotulo: 'Ver post da EducaSEO',
    },
    publico: true,
  },
  {
    id: 'card-sorting',
    titulo: 'Card Sorting para Otimizar a Estrutura de Sites',
    tipo: 'Aula',
    tema: 'Arquitetura da informação',
    dataISO: '2026-01',
    dataTexto: 'Janeiro de 2026',
    formato: 'online',
    localTexto: 'Online (aula gravada)',
    eventoTexto: 'EducaSEO',
    organizador: EDUCASEO,
    descricao: 'Card Sorting na prática para entender o modelo mental do usuário na organização de conteúdo, com estudo de caso de reestruturação de taxonomia de blog.',
    publico: true,
  },
  {
    id: 'psicologia-da-conversao',
    titulo: 'Psicologia da Conversão: Gatilhos Mentais e Vieses Cognitivos',
    tipo: 'Aula',
    tema: 'CRO e psicologia do consumo',
    dataISO: '2025-12',
    dataTexto: 'Dezembro de 2025',
    formato: 'online',
    localTexto: 'Online (aula ao vivo)',
    eventoTexto: 'EducaSEO',
    organizador: EDUCASEO,
    descricao: 'Aula ao vivo sobre o Triângulo da Conversão (SEO, UX e CRO) e vieses cognitivos aplicados à conversão: efeito halo, viés de confirmação, prova social e ancoragem.',
    publico: true,
  },
  {
    id: 'mentoria-ux-writing-arquitetura-informacao',
    titulo: 'Mentoria: Fundamentos de UX Writing e Arquitetura da Informação (2 aulas)',
    tipo: 'Mentoria',
    tema: 'UX Writing e SEO Semântico',
    dataISO: '2025-10',
    dataTexto: 'Outubro de 2025',
    formato: 'online',
    localTexto: 'Online',
    eventoTexto: 'Mentoria particular',
    organizador: { nome: 'Aline Julio' },
    topicos: [
      'Aula 1, Princípios de UX Writing: capacitação prática em redação para interfaces, com microcopy, clareza, testes de usabilidade de copy e consistência de voz da marca.',
      'Aula 2, Princípios de Arquitetura da Informação e SEO Semântico: hierarquia e taxonomia, URLs semânticas e breadcrumbs, e a evolução do SEO de palavras-chave exatas para entidades, relacionamentos e intenção de busca.',
    ],
    publico: false,
  },
  {
    id: 'call-to-action',
    titulo: 'Call to Action: Copy de Botões que Convertem',
    tipo: 'Aula',
    tema: 'UX Writing e CRO',
    dataISO: '2025-10',
    dataTexto: 'Outubro de 2025',
    formato: 'online',
    localTexto: 'Online (aula gravada)',
    eventoTexto: 'EducaSEO',
    organizador: EDUCASEO,
    descricao: 'Como escrever CTAs que convertem: verbos de ação diretos, contexto de funil, frameworks de copywriting (FAB, PAS, BAB, AIDA, 4Us) e uso ético de gatilhos mentais.',
    publico: true,
  },
];
