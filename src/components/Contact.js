import React, { Component } from 'react';
import { Modal} from 'react-bootstrap';

export default class ModalExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      addModalshow: false
    }
  }

//   openModalHandler = () => {
//     this.setState({
//         isShowing: true
//     });
// }

// closeModalHandler = () => {
//     this.setState({
//         isShowing: false
//     });
// }

  // let addModalClose =() => this.setState({addModalshow:false});

//   <li className="nav-item">
//   <a className="nav-link contactForm" href="#Contact" onClick={()=> this.setState({addModalshow: true})}><AiOutlineMail size={50} /></a>
//       <Contact show={this.state.addModalshow} onHide ={addModalClose}/>
// </li>
  render() {
    return (
      <Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <p>Contact Me</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" aria-describedby="emailHelp" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" rows="5"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </Modal.Body>
      </Modal>

    );
  }
  onNameChange(event) {
    this.setState({ name: event.target.value })
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value })
  }

  handleSubmit(event) {

  }
}