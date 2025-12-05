import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'HOME',
      href: getPermalink('/'),
    },
    {
      text: 'SEDI',
      href: getPermalink('/sedi'),
      links: [
        { text: 'DOVE SIAMO', href: getPermalink('/dove-siamo') },
      ],
    },
    {
      text: 'CHI SIAMO',
      href: getPermalink('/chi-siamo'),
    },
    {
      text: 'SERVIZI',
      href: getPermalink('/servizi'),
      links: [
        { text: 'CONSULENZA LEGALE', href: getPermalink('/servizi/consulenza-legale') },
        {
          text: 'CONTEGGI SPETTANZE DI FINE RAPPORTO E TFR',
          href: getPermalink('/servizi/conteggi-spettanze-di-fine-rapporto-e-tfr'),
        },
        { text: 'CONTROLLO BUSTE PAGA', href: getPermalink('/servizi/controllo-buste-paga') },
        { text: 'CONTROVERSIE DI LAVORO', href: getPermalink('/servizi/controversie-di-lavoro') },
        { text: 'GESTIONI COLF E BADANTI', href: getPermalink('/servizi/gestioni-colf-e-badanti') },
        { text: 'PRATICHE DISCIPLINARI', href: getPermalink('/servizi/pratiche-disciplinari') },
        { text: 'RECUPERI CREDITI DI LAVORO', href: getPermalink('/servizi/recuperi-crediti-di-lavoro') },
        {
          text: 'REDAZIONI DI VERBALI DI CONCILIAZIONE',
          href: getPermalink('/servizi/redazioni-di-verbali-di-conciliazione'),
        },
        {
          text: 'RICOSTRUZIONE CREDITI DI LAVORO A NERO',
          href: getPermalink('/servizi/ricostruzione-crediti-di-lavoro-a-nero'),
        },
        { text: 'UFFICIO VERTENZE', href: getPermalink('/servizi/ufficio-vertenze') },
      ],
    },
    {
      text: 'CENTRO SERVIZI CSU',
      href: getPermalink('/centro-servizi-csu'),
      links: [
        {
          text: 'RICORSI CONTRO AGENZIA ENTRATE RISCONSIONE',
          href: getPermalink('/centro-servizi-csu/ricorsi-agenzia-entrate-riscossione'),
        },
        {
          text: 'INFORTUNISTICA, MALASANITÀ E INCIDENTI STRADALI',
          href: getPermalink('/centro-servizi-csu/infortunistica-malasanita-incidenti-stradali'),
        },
        {
          text: 'APERTURA PARTITE IVA',
          href: getPermalink('/centro-servizi-csu/apertura-partite-iva'),
        },
      ],
    },
    {
      text: 'CAF E PATRONATO',
      href: getPermalink('/caf-patronato'),
      links: [
        {
          text: 'MODELLO 730 – UNICO – IMU – SUCCESSIONI',
          href: getPermalink('/caf-patronato/modello-730-unico-imu-successioni'),
        },
        {
          text: 'INDENNITÀ DI DISOCCUPAZIONE',
          href: getPermalink('/caf-patronato/indennita-di-disoccupazione'),
        },
        {
          text: 'DOMANDE DI PENSIONE',
          href: getPermalink('/caf-patronato/domande-di-pensione'),
        },
        {
          text: 'ASSISTENZA IMMIGRAZIONE',
          href: getPermalink('/caf-patronato/assistenza-immigrazione'),
        },
      ],
    },
    {
      text: 'BLOG',
      href: getPermalink('/blog'),
    },
    {
      text: 'CONTATTI',
      href: getPermalink('/contatti'),
    },
    {
      text: 'ISCRIVITI',
      href: getPermalink('/iscriviti'),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'SINDACATO ASEU',
      links: [
        { text: 'Home', href: getPermalink('/') },
        { text: 'Chi siamo', href: getPermalink('/chi-siamo') },
        { text: 'Servizi', href: getPermalink('/servizi') },
        { text: 'Centro Servizi CSU', href: getPermalink('/centro-servizi-csu') },
        { text: 'CAF e Patronato', href: getPermalink('/caf-patronato') },
        { text: 'Sedi', href: getPermalink('/sedi') },
        { text: 'Blog', href: getPermalink('/blog') },
        { text: 'Contatti', href: getPermalink('/contatti') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
    { text: 'Cookie Policy', href: getPermalink('/cookie') },
  ],
  socialLinks: [],
  footNote: `
    Associazione Sindacale Europea Universale - ASEU, Via Mario Pieri, 2 - 20127 Milano (MI) -  Tel. 02.2592773 – cell.: 349.6250509 – e-mail: info@sindacatoaseu.it
  `,
};
