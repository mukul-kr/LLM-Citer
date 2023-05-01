/* eslint-disable react/prop-types */

import { Button, Grid, TextField } from '@mui/material';


const RenderedForm = ({ id, formData }) => {
  return (
    // <div>
    //   <h2>Form Data: {id}</h2>
    //   <div>
    //     <label>LLM Model Name: </label>
    //     <div>{formData.llm_model_name}</div>
    //   </div>
    //   <div>
    //     <label>Date: </label>
    //     <div>{formData.date}</div>
    //   </div>
    //   <div>
    //     <label>Exact Content: </label>
    //     <div>{formData.exact_content}</div>
    //   </div>
    //   <div>
    //     <label>Reference Conversation: </label>
    //     <div>{formData.reference_converstaion}</div>
    //   </div>
    // </div>

    <React.Fragment>
      <Grid container align="center" spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField
            align="center"
            value={formData.llm_model_name}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            align="center"
            value={formData.date}
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
            minRows={5}
            maxRows={10}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
            style={{ width: '100%' }}
            value={formData.exact_content}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="outlined-multiline-static"
            multiline
            minRows={10}
            maxRows={10}
            InputProps={{
              readOnly: true,
            }}
            value={formData.reference_conversation}
            style={{ width: '100%' }}
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default RenderedForm;
