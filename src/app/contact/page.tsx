'use client';
import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await res.json();
      setResponseMessage(data.message);
    } catch (error) {
      console.error(error);
      setResponseMessage('Произошла ошибка при отправке формы.');
    }
  };

  if (responseMessage) {
    return (
      <div>
        <h2>Контактная форма</h2>
        <p>{responseMessage}</p>
        <Button
          variant="contained"
          onClick={() => {
            setResponseMessage(null);
            setName('');
            setEmail('');
            setMessage('');
          }}
        >
          Отправить ещё одно сообщение
        </Button>
      </div>
    );
  }

  return (
    <div>
      <h2>Свяжитесь с нами</h2>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem', maxWidth: '400px' }}>
        <TextField
          required
          label="Ваше имя"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          required
          type="email"
          label="Ваш email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          required
          label="Ваше сообщение"
          variant="outlined"
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button variant="contained" color="primary" type="submit">
          Отправить
        </Button>
      </form>
    </div>
  );
}
