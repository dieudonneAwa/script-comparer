import React from 'react'
import styled from 'styled-components';

const Form = styled.form`
  background-color: #fafafa;
  min-height: 220px;
  width: 400px;
  border: 1px solid #ccc;
  margin-top: 50px;
  padding: 20px 20px 30px 20px;
  display: flex;
  flex-flow: column nowrap;

  .form-group {
    width: 100%;
    margin: 10px 0;

    input[type='text'] {
      width: 100%;
      height: 30px;
      border: 1px solid #bfd3f3;
      background-color: #f2f5fd;
      border-radius: 3px;
      outline: none;
      padding: 5px;
      margin: 5px 0;
      font-size: 0.8rem;
    }

    input[type='file'] {
      width: 100%;
      margin-bottom: 30px;
    }
  }
  .submit-btn {
    border: 1px solid #1f2c46;
    background-color: #1f2c46;
    color: #fff;
    width: 100px;
    height: 30px;
    font-size: 0.9rem;
  }
`;

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
