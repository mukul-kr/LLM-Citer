// We are using this to disbale the eslint rule for prop-types
/* eslint-disable react/prop-types */
const RenderedForm = ({ id, formData }) => {
  return (
    <div>
      <h2>Form Data: {id}</h2>
      <div>
        <label>LLM Model Name: </label>
        <div>{formData.llm_model_name}</div>
      </div>
      <div>
        <label>Date: </label>
        <div>{formData.date}</div>
      </div>
      <div>
        <label>Exact Content: </label>
        <div>{formData.exact_content}</div>
      </div>
      <div>
        <label>Reference Conversation: </label>
        <div>{formData.reference_converstaion}</div>
      </div>
    </div>
  );
};

export default RenderedForm;
