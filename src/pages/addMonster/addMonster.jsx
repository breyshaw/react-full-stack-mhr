// components have to have state
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// Upper camel case on these function
//Defining the functions before using them in the main return statement
const AddMonster = () => {
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
      // call will go here to submit to API
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
      <form>
          <h1>AddMonster</h1>
      </form>
    );
}