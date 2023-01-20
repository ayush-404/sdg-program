const Home = () => {
  
  return <>
    <figure>
      <img style={{ margin:20, marginBottom: 0, padding: 20, paddingBottom: 0, width:1000, height: 600}} src="https://journals.plos.org/plosone/article/figure/image?size=large&id=10.1371/journal.pone.0264249.g003" alt='Graphic about ways of promoting safe syring use'/>
      <figcaption style={{color: 'black', border: '4px solid red'}}>Citation: Stangl AL, Pliakas T, Izazola-Licea JA, Ayala G, Beattie TS, Ferguson L, et al. (2022) Removing the societal and legal impediments to the HIV response: An evidence-based framework for 2025 and beyond. PLoS ONE 17(2): e0264249. https://doi.org/10.1371/journal.pone.0264249</figcaption>
    </figure>
    <iframe style={{padding:20, margin:20}} width="800" height="600" src="https://www.youtube.com/embed/3QmvhlG5oIw" title="WHO: Making injections safe, we all have a part to play" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
  </>
}

export default Home