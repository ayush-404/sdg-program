import './InsList.css'

const InsList = () => {
  
  const content = [
    {
      imgSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/51/RTI_International_%28logo%29.svg/330px-RTI_International_%28logo%29.svg.png',
      alt: 'RTI Institution',
      title: 'Research Triangle Institute',
      info: 'RTI is an independent, nonprofit institute that provides research, development and technical services to government and commercial clients worldwide.'
    },
    {
      imgSrc: 'https://canatc.ca/wp-content/uploads/2020/11/logo.png',
      alt: 'Logo for Canadian Addiction Treatment Centres',
      title: 'Canadian Addiction Treatment Centres',
      info: "offer a comprehensive care model designed to meet the broader healthcare needs of \
      our patients from over 70 convenient treatment centres throughout Ontario, New \
      Brunswick, and British Columbia. In addition to providing Methadone and \
      Suboxone® assisted therapy, we offer harm reduction services, basic primary care, \
      Hepatitis C and HIV Treatment, and counseling/case management."
    },
    {
      imgSrc: 'https://loveyourself.ph/wp-content/uploads/2020/10/Logo-LoveYourself.jpg',
      alt: 'Logo for LoveYourself Inc.',
      title: 'LoveYourself Inc.',
      info: 'LoveYourself was founded by Dr. Ronivin Garcia Pagtakhan, an organization that has \
      risen to become one of the leading organizations in HIV awareness, testing, and \
      treatment in the Philippines.'
    },
    {
      imgSrc: ''
    }
  ]

  return <div>
    <h2>Possible organizations that we may partner with</h2>
    <ul style={{listStyle: 'none', display: 'block', paddingRight: '2.5rem'}}>
      {content.map(c => <li className='listItem'>
        <img src={c.imgSrc} alt={c.alt}></img>
        <h3>{c.title}</h3>
        <p>{c.info}</p>
      </li>)}
    </ul>
  </div>
}


export default InsList