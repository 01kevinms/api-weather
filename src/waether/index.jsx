import { useState } from "react"
import { Above, Characters, Container, Digit, Imag, Pi, Wind } from "./styles"
import Logo from '../assets/temperatura.png'

export function Tempo() {
  const [but, setbut] = useState('')
  const [inputcity, setinputcity] = useState('')
  const [users, setcitys] = useState([])

  let key = 'a5a15f6b0c95c166492395a9e89a71d1'

  function screen(dados) {
      
      setcitys([{nome:'Tempo em: '+ dados.name, id: dados.id, cs: dados.main.temp + '°C', weather: dados.weather[0].description, humi:'Umidade de: '+ dados.main.humidity+'%'}])
      setbut(dados.weather[0].icon)
    
  }

  async function search(city) {

  
  let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`)
  .then(res => res.json())
if (dados.cod === 200) {
  screen(dados)
} else {
    setcitys([]); // limpa resultados
    console.error("Cidade não encontrada:", dados.message);

  }
}
  function inpt(e) {
    const city = e.target.value;
    setinputcity(city)
  }
  function call() {
    if (inputcity.trim()) {
      search(inputcity)
    }
  }
  return (
    <Above>
      <Imag src={Logo} alt="" />
      <Container>
        <Digit>
          <input onChange={inpt} placeholder="city" />
          <button onClick={call}>search</button>
        </Digit>
        {users.length > 0 ? (
          users.map((i) => (
            <div key={i.id}>
            <h1>{i.nome}</h1>
        <Characters >
          <Pi>{i.cs}</Pi>
          <Wind>
            <img src={`https://openweathermap.org/img/wn/${but}.png`} alt="" />
          <p>{i.weather}</p>
          </Wind>
          <Pi>{i.humi}</Pi>
        </Characters>
            </div>
          ))
         ):(<h3>Procure Por Uma Cidade</h3>)
         } 
      </Container>
    </Above>
  )
}

export default Tempo