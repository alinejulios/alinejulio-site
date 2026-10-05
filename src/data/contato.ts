// Destinos de contato centralizados. Sem formulário por enquanto: cada intenção
// abre o WhatsApp com uma mensagem pré-preenchida diferente, e o LinkedIn é a
// ação secundária. Trocar por um formulário no futuro é mudar só este arquivo.
import { LINKS } from './site';

export const WHATSAPP_NUMERO = '5511936188888';

export const MENSAGENS = {
  consultoria: 'Olá, Aline! Vim pelo seu site e quero conversar sobre consultoria de CRO.',
  palestra: 'Olá, Aline! Vim pelo seu site e quero convidar você para uma palestra ou aula.',
} as const;

export const whatsappUrl = (mensagem: string) =>
  `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;

export interface Acao {
  label: string;
  href: string;
  external: boolean;
}

export const CTA: Record<'consultoria' | 'palestra' | 'linkedin', Acao> = {
  consultoria: { label: 'Falar sobre consultoria', href: whatsappUrl(MENSAGENS.consultoria), external: true },
  palestra: { label: 'Convidar para palestra', href: whatsappUrl(MENSAGENS.palestra), external: true },
  linkedin: { label: 'Acompanhar no LinkedIn', href: LINKS.linkedin, external: true },
};

/** Botão flutuante: mesma mensagem da consultoria */
export const WHATSAPP_FLUTUANTE = whatsappUrl(MENSAGENS.consultoria);
