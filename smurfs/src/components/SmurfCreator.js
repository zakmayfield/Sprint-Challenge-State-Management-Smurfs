import React from 'react';
import { Formik, Form, Field } from "formik";
import axios from 'axios';
import * as Yup from 'yup'

const SmurfCreator = () => {

  const userSchema = Yup.object().shape({
    name: Yup.string().required(),
    age: Yup.number().required(),
    height: Yup.string().required()
  })

  return (
    <div>
      <h3>Create your very own Smurf below</h3>
      <Formik
        initialValues={{
          name: '',
          age: '',
          height: '',
        }}
        onSubmit={(values, tools) => {
          tools.resetForm();
          axios.post('http://localhost:3333/smurfs', values)
            .then(res => {
              console.log(res)
            })
            .catch(err => {
              console.log(err)
            })
        }}
        validationSchema={userSchema}
        render={props => {
          return (
            <Form className="smurfForm">
              <label>
                Smurfs Name: 
                <Field
                  type="text"
                  name="name"
                  placeholder="Rocky"
                />
              </label>
              {props.errors.name && props.touched.name ? (
                  <span>{props.errors.name}</span>
                ) : (
                  ""
                )}

              <label>
                Smurfs Age: 
                <Field
                  type="text"
                  name="age"
                  placeholder="136"
                />
              </label>
              {props.errors.age && props.touched.age ? (
                  <span>{props.errors.age}</span>
                ) : (
                  ""
                )}

              <label>
                Smurfs Height: 
                <Field
                  type="text"
                  name="height"
                  placeholder="5cm"
                />
              </label>
              {props.errors.age && props.touched.age ? (
                  <span>{props.errors.age}</span>
                ) : (
                  ""
                )}

              <input type="submit" />
            </Form>
          )
        }}
      />
    </div>
  )
}

export default SmurfCreator