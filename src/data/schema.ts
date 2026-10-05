// Dados estruturados (JSON-LD). WebSite, Person e Organization aparecem nas
// 3 páginas com os mesmos @id; cada página acrescenta seus próprios nós.
import { SITE_URL, TITULO_PROFISSIONAL, DESCRICAO_3A_PESSOA, LINKS, RAZAO_SOCIAL, CNPJ } from './site';
import type { PalestraItem } from './palestras';

export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const EMPRESA_ID = `${SITE_URL}/#empresa`;

const ENDERECO = {
  '@type': 'PostalAddress',
  addressLocality: 'São Paulo',
  addressRegion: 'SP',
  addressCountry: 'BR',
};

export const sharedNodes = [
  {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: 'Aline Julio',
    inLanguage: 'pt-BR',
    publisher: { '@id': PERSON_ID },
  },
  {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: 'Aline Julio',
    alternateName: ['Aline Júlio', 'Aline Julio da Silva'],
    url: `${SITE_URL}/`,
    image: `${SITE_URL}/images/aline-headshot.jpg`,
    description: DESCRICAO_3A_PESSOA,
    jobTitle: TITULO_PROFISSIONAL,
    hasOccupation: [
      { '@type': 'Occupation', name: 'CRO Specialist' },
      { '@type': 'Occupation', name: 'Web Analytics' },
      { '@type': 'Occupation', name: 'Content Designer', sameAs: 'https://www.wikidata.org/wiki/Q5165078' },
      { '@type': 'Occupation', name: 'UX Writer' },
      { '@type': 'Occupation', name: 'Digital Marketing Strategist', sameAs: 'https://www.wikidata.org/wiki/Q56279965' },
    ],
    worksFor: [
      { '@type': 'Organization', name: 'Direcional Engenharia' },
      { '@type': 'Organization', name: 'EducaSEO', url: 'https://educaseo.com.br/' },
    ],
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'Universidade Cruzeiro do Sul', sameAs: 'https://www.wikidata.org/wiki/Q10387785' },
      { '@type': 'CollegeOrUniversity', name: 'Universidade Anhembi Morumbi', sameAs: 'https://www.wikidata.org/wiki/Q2043612' },
    ],
    knowsAbout: [
      { '@type': 'Thing', name: 'Otimização da taxa de conversão', sameAs: 'https://www.wikidata.org/wiki/Q52083677' },
      { '@type': 'Thing', name: 'Web analytics', sameAs: 'https://www.wikidata.org/wiki/Q10719477' },
      { '@type': 'Thing', name: 'Otimização para motores de busca', sameAs: 'https://www.wikidata.org/wiki/Q180711' },
      { '@type': 'Thing', name: 'Teste A/B', sameAs: 'https://www.wikidata.org/wiki/Q1810071' },
      { '@type': 'Thing', name: 'Arquitetura de informação', sameAs: 'https://www.wikidata.org/wiki/Q845921' },
      { '@type': 'Thing', name: 'Card sorting', sameAs: 'https://www.wikidata.org/wiki/Q686043' },
      { '@type': 'Thing', name: 'Estratégia de conteúdo', sameAs: 'https://www.wikidata.org/wiki/Q4353935' },
      { '@type': 'Thing', name: 'Microcopy', sameAs: 'https://www.wikidata.org/wiki/Q55655176' },
      { '@type': 'Thing', name: 'Design de experiência do usuário', sameAs: 'https://www.wikidata.org/wiki/Q11248500' },
    ],
    // O item do Wikidata entra aqui depois do deploy.
    sameAs: [LINKS.linkedin, LINKS.educaseo, LINKS.instagram, LINKS.x],
    address: ENDERECO,
  },
  {
    '@type': 'Organization',
    '@id': EMPRESA_ID,
    name: 'Aline Julio',
    legalName: RAZAO_SOCIAL,
    taxID: CNPJ,
    foundingDate: '2026-04-27',
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/images/aline-julio-logo.png`,
    founder: { '@id': PERSON_ID },
    address: ENDERECO,
  },
];

export const profilePageNode = {
  '@type': 'ProfilePage',
  '@id': `${SITE_URL}/sobre/#webpage`,
  url: `${SITE_URL}/sobre/`,
  isPartOf: { '@id': WEBSITE_ID },
  mainEntity: { '@id': PERSON_ID },
};

function eventNode(p: PalestraItem) {
  const url = `${SITE_URL}/palestras/#${p.id}`;
  const online = p.formato === 'online';
  return {
    '@type': 'EducationEvent',
    '@id': url,
    url,
    name: p.titulo,
    ...(p.descricao && { description: p.descricao }),
    startDate: p.dataISO,
    eventAttendanceMode: online
      ? 'https://schema.org/OnlineEventAttendanceMode'
      : 'https://schema.org/OfflineEventAttendanceMode',
    location: online
      ? { '@type': 'VirtualLocation' }
      : {
          '@type': 'Place',
          name: p.lugar?.nome,
          ...(p.lugar?.cidade && {
            address: {
              '@type': 'PostalAddress',
              addressLocality: p.lugar.cidade,
              addressRegion: p.lugar.uf,
              addressCountry: 'BR',
            },
          }),
        },
    performer: [
      { '@id': PERSON_ID },
      ...(p.coautoras ?? []).map((c) => ({ '@type': 'Person', name: c.nome, sameAs: c.linkedin })),
    ],
    organizer: {
      '@type': 'Organization',
      name: p.organizador.nome,
      ...(p.organizador.url && { url: p.organizador.url }),
    },
    ...(p.superEvento && {
      superEvent: {
        '@type': 'Event',
        name: p.superEvento.nome,
        ...(p.superEvento.url && { url: p.superEvento.url }),
      },
    }),
    ...(p.publicacao && {
      subjectOf: { '@type': 'SocialMediaPosting', url: p.publicacao.href },
    }),
    inLanguage: 'pt-BR',
  };
}

export function eventListNode(items: PalestraItem[]) {
  const publicos = items.filter((p) => p.publico);
  return {
    '@type': 'ItemList',
    '@id': `${SITE_URL}/palestras/#lista`,
    name: 'Histórico de palestras e aulas de Aline Julio',
    itemListOrder: 'https://schema.org/ItemListOrderDescending',
    numberOfItems: publicos.length,
    itemListElement: publicos.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: eventNode(p),
    })),
  };
}
