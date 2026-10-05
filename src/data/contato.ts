// Destinos de contato centralizados. Cada intenção tem um rótulo e um destino;
// trocar por um formulário no futuro é mudar só este arquivo.
import { LINKS } from './site';

export interface Acao {
  label: string;
  href: string;
  external: boolean;
}

export const CTA: Record<'consultoria' | 'palestra' | 'linkedin', Acao> = {
  consultoria: { label: 'Falar sobre consultoria', href: LINKS.linkedin, external: true },
  palestra: { label: 'Convidar para palestra', href: LINKS.linkedin, external: true },
  linkedin: { label: 'Acompanhar no LinkedIn', href: LINKS.linkedin, external: true },
};
