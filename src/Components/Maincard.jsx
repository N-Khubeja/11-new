import conor from '../images/conor.jpg'
import alex from '../images/alex.jpg'
import charles from '../images/charles.jpg'
import CardList from './CardList'

const members = [{name:'CHARLES OLIVEIRA', username:"DO BRONX",image:charles},{name:'CONOR MCGREGOR', username:"THE NOTORIOUS",image:conor}
  ,{name:'ALEX PEREIRA', username:"POATAN",image:alex}]

const Maincard = () => {

  const saymyname = (name) => {
    alert(name)
  }

    return(
        <div className='main'>

          {members.map((el) => (
            <CardList name={el.name} username={el.username}  img={el.image} action={saymyname} />
          ))}



      </div>


    )


}

export default Maincard