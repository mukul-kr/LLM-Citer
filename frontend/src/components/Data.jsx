import * as React from 'react';
import { useState, useEffect } from 'react';
import { Grid, TextField } from '@mui/material';

import { useParams } from 'react-router-dom';

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

export const Data = () => {
  const params = useParams();
  const { text } = params;

  const [llm_model, setLlmModel] = useState('');
  const [date, setDate] = useState('');
  const [exact_content, setExactContent] = useState('');
  const [reference_conversation, setReferenceConversation] = useState('');

  useEffect(() => {
    fetch(`https://llm-cite.onrender.com/read?id=${text}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status == 200) {
          const {
            llm_model_name,
            date,
            exact_content,
            reference_converstaion,
          } = result.data;
          setDate(date);
          setLlmModel(llm_model_name);
          setExactContent(exact_content);
          setReferenceConversation(reference_converstaion);
        } else {
          alert('No such cite found');
          // window.location.href = "http://localhost:5174/";
        }
      })
      .catch((error) => console.log('error', error));
  }, [text]);

  return (
    <React.Fragment>
      <Grid container align="center" spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField
            align="center"
            required
            InputProps={{
              readOnly: true,
            }}
            value={llm_model}
            label="LLM Model"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            align="center"
            required
            type="date"
            value={date}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="outlined-multiline-static"
            multiline
            required
            minRows={5}
            value={exact_content}
            maxRows={10}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
            style={{ width: '100%' }}
            label="Exact Content"
            placeholder="Exact Content"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="outlined-multiline-static"
            multiline
            required
            minRows={10}
            value={reference_conversation}
            maxRows={10}
            InputProps={{
              readOnly: true,
            }}
            label="Reference Conversation"
            placeholder="Reference Conversation"
            style={{ width: '100%' }}
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
