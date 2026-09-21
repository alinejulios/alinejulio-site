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
  destaque?: boolean;
}

export const palestras: PalestraItem[] = [
  {
    id: 'cro-ux-writing-conversao',
    titulo: 'CRO e UX Writing: Como a Clareza Verbal Transforma Métricas de Conversão',
    eventoOuInstituicao: 'Comunidade de Produto & Marketing Digital',
    tipo: 'Palestra',
    tema: 'CRO & UX Writing',
    data: '2026',
    local: 'Online / São Paulo, SP',
    descricao: 'Análise heurística de interfaces e redação orientada a testes A/B: desmistificando o impacto de microcopy e hierarquia na taxa de conversão.',
    linkOficial: 'https://www.linkedin.com/in/alinejulio',
    destaque: true,
  },
  {
    id: 'seo-semantico-arquitetura',
    titulo: 'SEO Semântico e Arquitetura de Informação: De Palavras-Chave a Entidades',
    eventoOuInstituicao: 'Workshop Universitário de Comunicação & Tecnologia',
    tipo: 'Aula',
    tema: 'SEO Semântico & Conteúdo',
    data: '2025',
    local: 'São Paulo, SP',
    descricao: 'Como estruturar conteúdo para a era dos Knowledge Graphs e modelos de linguagem, unindo intenção de busca, taxonomia e autoridade E-E-A-T.',
    linkOficial: 'https://www.linkedin.com/in/alinejulio',
    destaque: true,
  },
  {
    id: 'fundamentos-ux-writing',
    titulo: 'Fundamentos de UX Writing e Arquitetura de Informação para Produtos Digitais',
    eventoOuInstituicao: 'Programa de Mentoria & Capacitação Técnica',
    tipo: 'Mentoria',
    tema: 'UX Writing & Usabilidade',
    data: '2025',
    local: 'Online',
    descricao: 'Capacitação prática em redação para interfaces, testes de usabilidade de copy, mapeamento de jornadas e consistência de voz da marca.',
    linkOficial: 'https://www.linkedin.com/in/alinejulio',
    destaque: true,
  },
  {
    id: 'gestao-conteudo-b2b',
    titulo: 'Gestão Estratégica de Conteúdo B2B: Da Geração de Demanda ao Pipeline de Vendas',
    eventoOuInstituicao: 'Encontro Setorial de Marketing B2B',
    tipo: 'Palestra',
    tema: 'Gestão de Conteúdo',
    data: '2024',
    local: 'São Paulo, SP',
    descricao: 'Planejamento e governança de conteúdo para mercados complexos (finanças, inovação e tecnologia), eliminando fórmulas genéricas em prol de autoridade.',
    linkOficial: 'https://www.linkedin.com/in/alinejulio',
    destaque: false,
  }
];
