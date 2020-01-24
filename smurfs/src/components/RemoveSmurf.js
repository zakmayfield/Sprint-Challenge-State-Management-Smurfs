
//LEAVING THIS COMMENTED OUT FOR FUTURE USE NOT GOING TO IMPLEMENT IT NOW

// import React from 'react';
// import { Formik, Form, Field } from "formik";
// import axios from 'axios';

// const RemoveSmurf = id => {
  
//   return (
//     <div>
//       <h3>Select a smurf to excommunicate</h3>
//       <Formik
//           initialValues={{
//             name: '',
//           }}
//           onSubmit={(values, tools) => {
//             tools.resetForm();
//             axios.put(`http://localhost:3333/smurfs/${id}`, values)
//               .then(res => {
//                 console.log('response from post: ', res)
//                 console.log('values: ', values)
//               })
//               .catch(err => {
//                 console.log(err)
//               })
//           }}
//           render={props => {
//             return (
//               <Form className="smurfForm">
//                 <label>
//                   Smurfs Name: 
//                   <Field
//                     type="text"
//                     name="name"
//                     placeholder="Rocky"
//                   />
//                 </label>

//                 <input type="submit" />
//               </Form>
//             )
//           }}
//         />
//     </div>
//   )
// }

// export default RemoveSmurf