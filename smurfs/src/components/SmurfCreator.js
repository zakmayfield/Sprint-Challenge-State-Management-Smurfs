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
          height: ''
        }}
        onSubmit={(values, tools) => {
          tools.resetForm();
          //values is collecting the data that the user inputs and then within the axios.post request we are passing our data to the endpoint given, along with the values of the inputs the user created
          axios.post('http://localhost:3333/smurfs', values)
            .then(res => {
              console.log('response from post: ', res)
              console.log('values: ', values)
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
                  <span className="red">{props.errors.name}</span>
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
                  <span className="red">{props.errors.age}</span>
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
              {props.errors.height && props.touched.height ? (
                  <span className="red">{props.errors.height}</span>
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