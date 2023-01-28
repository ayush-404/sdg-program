import './InsList.css'

var propText = require('./snip.htm');

const Proposal = () => {
  return <div>
    <h1 style={{textAlign: 'center', color: 'black'}}>
      Breifing note
    </h1>
    <ul style={{listStyle: 'none', display: 'block', paddingRight: '2.5rem'}}>
      <li className='listItem'>
      <iframe src={propText} width="100%" height="1750"></iframe>
      </li>
    </ul>
  </div>
}


export default Proposal;