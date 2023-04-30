import * as React from 'react';
import { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const CiteForm = () => {
  const navigate = useNavigate();
  const [llm_model, setLlmModel] = useState('');
  const [date, setDate] = useState('');
  const [exact_content, setExactContent] = useState('');
  const [reference_conversation, setReferenceConversation] = useState('');

  //   function handleSubmit() {
  //     var myHeaders = new Headers();
  //     myHeaders.append('Content-Type', 'application/json');

      // var raw = JSON.stringify({
      //   llm_model_name: llm_model,
      //   date: date,
      //   exact_content: exact_content,
      //   reference_converstaion: reference_conversation,
      // });

  //     var requestOptions = {
  //       method: 'POST',
  //       headers: myHeaders,
  //       body: raw,
  //       redirect: 'follow',
  //     };

  //     fetch('http://localhost:3000/insert', requestOptions)
  //       .then((response) => response.json())
  //       .then((result) => {
  //         alert('https://llm-citer.vercel.app/cites/' + result.id);
  //       })
  //       .catch((error) => console.log('error', error));
  //   }

  // We are disecting the req. here in two parts one will fetch the req. and other will handle the response and resirect our page to the FormData.jsx component at '/cites/:id'
  async function insertData(data) {
    // const response = await fetch('http://localhost:3000/insert', {
    const response = await fetch('https://llm-citer.onrender.com/insert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  }

  function handleSubmit() {
    const data = {
      llm_model_name: llm_model,
      date: date,
      exact_content: exact_content,
      reference_converstaion: reference_conversation,
    };

    insertData(data)
      .then((result) => {
        alert('https://llm-citer.vercel.app/cites/' + result.id);
        // When user clicks ok on alert he will be redirected to formData page  with id intact on the page
        // navigate(`/cites/${result.id}`);
        window.location.href = `/cites/${result.id}`;
      })
      .catch((error) => console.log('error', error));
  }

  return (
    <React.Fragment>
      <Grid container align="center" spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField
            align="center"
            required
            id="llm_model"
            name="llm_model"
            label="LLM Model"
            onChange={(e) => setLlmModel(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            align="center"
            required
            id="date"
            name="date"
            type="date"
            fullWidth
            onChange={(e) => setDate(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="outlined-multiline-static"
            multiline
            required
            minRows={5}
            maxRows={10}
            name="exact_content"
            fullWidth
            style={{ width: '100%' }}
            label="Exact Content"
            placeholder="Exact Content"
            onChange={(e) => setExactContent(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="outlined-multiline-static"
            multiline
            required
            minRows={10}
            maxRows={10}
            name="reference_conversation"
            label="Reference Conversation"
            placeholder="Reference Conversation"
            style={{ width: '100%' }}
            fullWidth
            onChange={(e) => setReferenceConversation(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
