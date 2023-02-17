import { observer } from "mobx-react"
import { CSSProperties, FormEvent, useContext, useState } from "react"
import { StoreContext } from "../models"

const titleStyle: CSSProperties = {
  fontSize: '28px',
  fontWeight: 'bold',
  marginBottom: '1rem'
}

const labelStyle: CSSProperties = {
  display: 'inline-block',
  width: '100px',
}

const inputStyle: CSSProperties = {
  border: '1px solid #ccc',
}

const buttonStyle: CSSProperties = {
  padding: '8px 16px',
  backgroundColor: '#ccc'
}

export default observer(function Index() {
  const store = useContext(StoreContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('')

  const handleSumit = async (e: FormEvent) => {
    e.preventDefault();
    
    await store.mutateCreate_clients_item({
      data: {
        description,
        name,
      }
    })

    setName('');
    setDescription('');
  }

  return (
    <>
      <h1 style={titleStyle}>Cadastro de clientes</h1>
      <form onSubmit={handleSumit}>
        <p>
          <label style={labelStyle} htmlFor="name">Nome:</label>
          <input
            style={inputStyle} 
            id="name" 
            name="name" 
            value={name} 
            onChange={e => setName(e.target.value)} />
        </p>
        <p>
          <label style={labelStyle} htmlFor="description">Descrição:</label>
          <input
            style={inputStyle} 
            id="description" 
            name="description" 
            value={description} 
            onChange={e => setDescription(e.target.value)} />
        </p>
        <button style={buttonStyle} type="submit">Submit</button>
      </form>
    </>
  )
})