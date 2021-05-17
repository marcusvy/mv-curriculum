import {
  faGithub,
  faGitlab,
  faLeanpub,
  faLinkedin,
  faWhatsapp,
  faYoutube,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';

export interface SocialLink {
  label: string;
  url: string;
  icon: IconDefinition;
}

export const SocialLinkList: SocialLink[] = [
  {
    label: 'WhatsApp',
    url: 'https://api.whatsapp.com/send?phone=5569993055231&text=Ol%C3%A1%2C%20Marcus%20Vin%C3%ADcius!',
    icon: faWhatsapp,
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/marcusviniciuscardoso',
    icon: faLinkedin,
  },
  {
    label: 'Youtube',
    url: 'https://www.youtube.com/channel/UCIChFyxqTarHkzGi-Hzomzg',
    icon: faYoutube,
  },
  {
    label: 'Lattes',
    url: 'http://lattes.cnpq.br/9373549714133056',
    icon: faLeanpub,
  },
  {
    label: 'Github',
    url: 'https://github.com/marcusvy',
    icon: faGithub,
  },
  {
    label: 'Gitlab',
    url: 'https://gitlab.com/marcusvy',
    icon: faGitlab,
  },
];
