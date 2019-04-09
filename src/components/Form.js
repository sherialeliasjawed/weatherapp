import React from 'react';

const Form = props => {
  return (
    <div className="form-container">
      <form onSubmit={props.handleSubmit}>
        <input type="text" name="city" placeholder="City.." required />
        <input type="text" name="country" placeholder="Country.." required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
