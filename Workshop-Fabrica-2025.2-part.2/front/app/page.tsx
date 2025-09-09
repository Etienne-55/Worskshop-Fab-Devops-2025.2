'use client'
import React, { useState } from 'react'
import api_conection from './src/api/api'

export default function Home() {
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)

  const handleButtonClick = async () => {
    setLoading(true)
    try {
      const result = await api_conection.post('/button-signal/', {
        message: 'Botão foi pressionado!'
      })
      setResponse(result.data.message)
    } catch (error) {
      setResponse('Erro ao conectar com o backend')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Frontend conectado ao Django</h1>
      <button 
        onClick={handleButtonClick}
        disabled={loading}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: loading ? 'not-allowed' : 'pointer'
        }}
      >
        {loading ? 'Enviando...' : 'Enviar Sinal para Backend'}
      </button>
      {response && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f8f9fa', border: '1px solid #dee2e6', borderRadius: '5px' }}>
          <strong>Resposta do Backend:</strong> {response}
        </div>
      )}
    </div>
  )
}
