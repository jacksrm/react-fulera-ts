import { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import Button from "../components/Button"

import CardList from "../components/CardList"

import AuthContext from "../contexts/auth"

import './Profile.css'

export default function Profile() {
  const { session } = useContext(AuthContext)
  const history = useHistory()

  const [name, setName] = useState('')
  const [id, setId] = useState<number>()

  useEffect(() => {
    if(!session.authenticated) {
      history.push('/login')
    }
  })

  useEffect(() => {
    if(session.authenticated) {
      setName(session.user.name)
      setId(session.user.id)
    }
  }, [session])

  return (
    <div className="Profile">
      <h1>{ name }</h1> 
      <Button></Button>
      <h2>Plylists de { name }</h2>
      <CardList>

      </CardList>
    </div>
  )
}