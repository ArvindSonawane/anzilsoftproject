import React, { useState, useEffect } from 'react'

const getLocalItems = () => {
  let list = localStorage.getItem("lists");
  if (list) {
    return JSON.parse(localStorage.getItem('lists'));
  }
  else {
    return [];
  }
}



const Que2= () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [result, setResult] = useState(getLocalItems())

  const handleSubmit = () => {
    setResult([...result, firstName + lastName,])


  }


  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(result));

  }, [result])

const listItem=result.map((result)=><li>{result}</li>)
  return (

    <>
    
      <div>
        <label htmlFor="firstName">First Name:-</label>
        <input

          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          name="firstName"
        />
      </div>
      <br />

      <div>
        <label htmlFor="lastName">LastName:-</label>
        <input type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          name="lastName"
        />
      </div>
      <br />
      <div>
        <button type='submit' onClick={handleSubmit}>Submit</button>


      </div>
      <br />

      <div >The Result is:<ul>{listItem}</ul>
      </div>
    </>
  )
}

export default Que2