import {useEffect, useContext} from 'react'
import axios from 'axios'
import AuthContext from '../store/authContext'

const Home = () => {
  const {state} = useContext(AuthContext)

  const getProducts = () => {
    console.log(state)
    axios.get('/api/products', {
      headers: {
        Authorization: state.token
      }
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }


  useEffect(() => {
    if(state.token){
      getProducts()
    }
  }, [state.token])

  return (
    <div>Home</div>
  )
}

export default Home