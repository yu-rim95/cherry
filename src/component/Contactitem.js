import React from 'react'

const Contactitem = ({item}) => {
  return (
    <div style={{color:"#fff",display:"flex"}}>
      <img width={50} src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg' />
     <div>
        <p>{item.name}</p>
        <p>{item.phonNumber}</p>
     </div>
    </div>
  )
}

export default Contactitem
