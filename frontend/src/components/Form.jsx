import * as React from 'react';
import { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';



export const CiteForm = () => {

    
    const [llm_model, setLlmModel] = useState('');
    const [date, setDate] = useState('');
    const [exact_content, setExactContent] = useState('');
    const [reference_conversation, setReferenceConversation] = useState('');

    function handleSubmit() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "llm_model_name": llm_model,
            "date": date,
            "exact_content": exact_content,
            "reference_converstaion": reference_conversation
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3000/insert", requestOptions)
            .then(response => response.json())
            .then(result => alert("localhost:5174/cites/" + result.id))
            .catch(error => console.log('error', error));

    }

    return (
        <React.Fragment>

            <Grid container align='center' spacing={3}>
                <Grid item xs={12} sm={12}>

                    <TextField
                        align='center'
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
                        align='center'
                        required
                        id="date"
                        name="date"
                        type='date'
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
                        style={{ width: "100%" }}
                        label="Exact Content"
                        placeholder='Exact Content'
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
                        placeholder='Reference Conversation'
                        style={{ width: "100%" }}
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
}