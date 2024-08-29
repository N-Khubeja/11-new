const CardList = ({name,username,img,action}) => {

    return (
        <div className='card'> 
          <h1>{name}</h1>
          <p>{username}</p>
          <img src={img} alt="" />
          <button onClick={() => action(name)}>click</button>
        </div> 

    )

}

export default CardList