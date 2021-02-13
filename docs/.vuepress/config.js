module.exports = {

  title: 'Goodevil Forensics',
  description: 'Guia de Referências para Perícia Digital',
  base: '/goodevil-forensics/',

  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/nprogress',
  ],

themeConfig: {

   logo: 'forensics.png',
   sidebar: 'auto',
   searchPlaceholder: 'Pesquisar...',
// Configuração do navbar
   nav: [
     { text: 'Home', link: '/' },
     { text: 'Sobre', link: '/sobre/' },
     {
  text: 'Referências',
  ariaLabel: 'Referências',
  items: [
    { text: 'Distros', link: '/distros/' },
    { text: 'Ferramentas', link: '/ferramentas/' },
    { text: 'Certificados', link: '/certificados/' },
    { text: 'Editoras', link: '/editoras/' },
  ]
},
{ text: 'Blog', link: 'https://peritomadruga.github.io/' },
   ],
// Configuração do sidebar separado por grupos de categorias
   sidebar: [
      {
        title: 'Conceitos Básicos',
        children: [ '/basico/' ],
        collapsable: false,
      },
      {
        title: 'Conceitos Técnicos',
        children: [ '/tecnico/' ],
        collapsable: true,
      },
      {
        title: 'Cibercrime',
        children: [ '/cibercrime/' ],
        collapsable: true,
      },
      {
        title: 'Windows',
        children: [ '/windows/' ],
        collapsable: true,
      },
      {
        title: 'Mobile',
        children: [ '/mobile/' ],
        collapsable: true,
      },
      {
        title: 'Browsers',
        children: [ '/browsers/' ],
        collapsable: true,
      },
      {
        title: 'E-mails',
        children: [ '/emails/' ],
        collapsable: true,
      },
      {
        title: 'Antiforense',
        children: [ '/antiforense/' ],
        collapsable: true,
      },
      {
        title: 'OSINT',
        children: [ '/osint/' ],
        collapsable: true,
      },
    ]
 }
}
