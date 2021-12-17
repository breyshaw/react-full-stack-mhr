// components have to have state
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


// Upper camel case on these function
//Defining the functions before using them in the main return statement
const AddMonster = (props) => {
  // Bringing in the hook so it can be used
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    image_url: '',
    monsterType: '',
    topWeakness: '',
  })
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      props.handleCreateMonster(formData)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }
  //This is essentially a shortcut
  const { name, image_url, monsterType, topWeakness } = formData
  //Check's the validity of the form, specifically if all values have been entered
  const isFormInvalid = () => {
    return !(name && image_url && topWeakness)
  }

  return (
    <form
      autocomplete="off"
      //Calling the function from above
      onSubmit={handleSubmit}
    >
      <p>Name:</p>
      <input
        type="text"
        value={name}
        name="name"
        onChange={handleChange}
      />
      <p>Image URL:</p>
      <input
        type="text"
        value={image_url}
        name="image_url"
        onChange={handleChange}
      />
      <p>Monster Type:</p>
      <input
        type="text"
        value={monsterType}
        name="monsterType"
        onChange={handleChange}
      />
      <p>Top Weakness:</p>
      <input
        type="text"
        value={topWeakness}
        name="topWeakness"
        onChange={handleChange}
      />
      <br />
      <br />
      <button disabled={isFormInvalid()} >Add Monster</button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
    </form>
  );
}

export default AddMonster