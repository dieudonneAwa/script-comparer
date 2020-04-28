import React from 'react'
import { Form } from './Styles';

const SubmissionForm = () => {
  return (
    <Form>
      <div className="form-group">
        <label htmlFor="name">Student 1</label>
        <input type="text" name="name" id="name" placeholder="Name" />
      </div>
      <div className="form-group">
        <label htmlFor="file">Updload file</label>
        <input type="file" id="file" name="file" />
      </div>
      <div className="form-group">
        <label htmlFor="name">Student 2</label>
        <input type="text" name="name" id="name" placeholder="Name" />
      </div>
      <div className="form-group">
        <label htmlFor="file">Updload file</label>
        <input type="file" id="file" name="file" />
      </div>
      <button className="submit-btn">Compare</button>
    </Form>
  );
}

export default SubmissionForm
