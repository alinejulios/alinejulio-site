export interface PalestraItem {
  id: string;
  titulo: string;
  eventoOuInstituicao: string;
  tipo: 'Palestra' | 'Aula' | 'Mentoria' | 'Workshop';
  tema: string;
  data: string;
  local: string;
  descricao: string;
  linkOficial?: string;
  materialPdf?: string;
  destaque?: boolean;
}

export const palestras: PalestraItem[] = [
  {
    id: 'seocamp-da-metrica-a-hipotese',
    titulo: 'Da Métrica à Hipótese: Transformando um Dado de Analytics em Teste A/B',
    eventoOuInstituicao: 'SEOCamp — 4ª Edição',
    tipo: 'Workshop',
    tema: 'CRO & Testes A/B',
    data: 'Setembro de 2026',
    local: 'Online (remoto)',
    descricao: 'Oficina prática sobre como transformar dados brutos de Analytics em hipóteses testáveis, cobrindo fontes de dados, a jornada do dado ao insight e planejamento de KPIs primários e secundários.',
    materialPdf: '/materiais/seocamp-da-metrica-a-hipotese.pdf',
    destaque: true,
  },
  {
    id: 'do-clique-ao-relacionamento',
    titulo: 'Do Clique ao Relacionamento: Repensando o Sucesso em CRO',
    eventoOuInstituicao: 'SEOCamp — 3ª Edição',
    tipo: 'Palestra',
    tema: 'CRO & Experiência do Usuário',
    data: 'Março de 2026',
    local: 'Presencial',
    descricao: 'Palestra sobre os limites do CRO orientado apenas a cliques: dark patterns, o conceito H2H (Human to Human) de Philip Kotler e o framework R.E.A.L. para priorizar relacionamento e Lifetime Value sobre conversão imediata.',
    materialPdf: '/materiais/seocamp-do-clique-ao-relacionamento.pdf',
    destaque: true,
  },
  {
    id: 'card-sorting-estrutura-sites',
    titulo: 'Card Sorting para Otimizar a Estrutura de Sites',
    eventoOuInstituicao: 'EducaSEO',
    tipo: 'Aula',
    tema: 'Arquitetura da Informação',
    data: 'Janeiro de 2026',
    local: 'Online (aula gravada)',
    descricao: 'Card Sorting na prática para entender o modelo mental do usuário na organização de conteúdo, com estudo de caso de reestruturação de taxonomia de blog.',
    destaque: false,
  },
  {
    id: 'psicologia-da-conversao',
    titulo: 'Psicologia da Conversão: Gatilhos Mentais e Vieses Cognitivos',
    eventoOuInstituicao: 'EducaSEO',
    tipo: 'Aula',
    tema: 'CRO & Psicologia do Consumo',
    data: 'Dezembro de 2025',
    local: 'Online (aula ao vivo)',
    descricao: 'Aula ao vivo sobre o Triângulo da Conversão (SEO, UX e CRO) e vieses cognitivos aplicados à conversão — efeito halo, viés de confirmação, prova social e ancoragem.',
    destaque: true,
  },
  {
    id: 'fundamentos-ux-writing-aula-1',
    titulo: 'Fundamentos de UX Writing e Arquitetura da Informação — Aula 1: Princípios de UX Writing',
    eventoOuInstituicao: 'Mentoria Particular',
    tipo: 'Mentoria',
    tema: 'UX Writing',
    data: 'Outubro de 2025',
    local: 'Online',
    descricao: 'Capacitação prática em redação para interfaces: microcopy, clareza, testes de usabilidade de copy e consistência de voz da marca.',
    destaque: false,
  },
  {
    id: 'fundamentos-arquitetura-informacao-aula-2',
    titulo: 'Fundamentos de UX Writing e Arquitetura da Informação — Aula 2: Princípios de Arquitetura da Informação e SEO Semântico',
    eventoOuInstituicao: 'Mentoria Particular',
    tipo: 'Mentoria',
    tema: 'SEO Semântico & Arquitetura da Informação',
    data: 'Outubro de 2025',
    local: 'Online',
    descricao: 'Hierarquia vs. taxonomia, URLs semânticas e breadcrumbs, e a evolução do SEO de palavras-chave exatas para entidades, relacionamentos e intenção de busca.',
    destaque: false,
  },
  {
    id: 'cta-copy-botoes',
    titulo: 'Call to Action: Copy de Botões que Convertem',
    eventoOuInstituicao: 'EducaSEO',
    tipo: 'Aula',
    tema: 'UX Writing & CRO',
    data: 'Outubro de 2025',
    local: 'Online (aula gravada)',
    descricao: 'Como escrever CTAs que convertem: verbos de ação diretos, contexto de funil, frameworks de copywriting (FAB, PAS, BAB, AIDA, 4Us) e uso ético de gatilhos mentais.',
    destaque: false,
  }
];
