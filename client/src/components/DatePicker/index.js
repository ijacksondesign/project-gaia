// import React, { Component } from 'react';
// import DatePicker from 'react-datepicker';
// import { Button } from 'react-bootstrap';

// import "react-datepicker/dist/react-datepicker.css";

// class Date extends Component {

//   constructor (props) {
//     super(props)
//     this.state = {
//       startDate: new Date()
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.onFormSubmit = this.onFormSubmit.bind(this);
//   }

//   handleChange(date) {
//     this.setState({
//       startDate: date
//     })
//   }

//   onFormSubmit(e) {
//     e.preventDefault();
//     console.log(this.state.startDate)
//   }
 
//   render() {
//     return (
//       <form onSubmit={ this.onFormSubmit }>
//         <div className="form-group">
//           <DatePicker
//               selected={ this.state.startDate }
//               onChange={ this.handleChange }
//               name="startDate"
//               dateFormat="MM/dd/yyyy"
//           />
//           <Button>Show Date</Button>
//         </div>
//       </form>
//     );
//   }
  
// }

// export default Date;