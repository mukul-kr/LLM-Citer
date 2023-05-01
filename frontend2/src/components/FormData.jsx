import mongoose from 'mongoose';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import RenderedForm from './RenderedForm';

const AICiteFormSchema = mongoose.Schema({
  llm_model_name: String,
  date: String,
  exact_content: String,
  reference_converstaion: String,
});
const AICiteSchema = mongoose.model('AICiteSchema', AICiteFormSchema);

function FormData() {
  const { id } = useParams();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    fetch(`https://llm-citer-backend.onrender.com/cites/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const { llm_model_name, date, exact_content, reference_converstaion } =
          data;
        console.log(data);
        const formData = new AICiteSchema({
          llm_model_name,
          date,
          exact_content,
          reference_converstaion,
        });
        setFormData(formData);
      })
      .catch((error) => console.log('error', error));
  }, [id]);

  if (!formData) {
    return (
      <div>
        <h1>ID: {id}</h1>
        Loading...
      </div>
    );
  }

  return (
    <>
      <h1>ID: {id}</h1>
      {/* <Link to={`/`}>LLM Citer</Link> */}
      {formData ? (
        <>
          <RenderedForm id={id} formData={formData} />
        </>
      ) : (
        <>{'something went wrong'}</>
      )}
    </>
  );
}

export default FormData;
