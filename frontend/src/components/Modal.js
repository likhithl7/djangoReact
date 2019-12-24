 // frontend/src/components/Modal.js

 import React, { Component } from "react";
 import {
   Button,
   Modal,
   ModalHeader,
   ModalBody,
   ModalFooter,
   Form,
   FormGroup,
   Input,
   Label
 } from "reactstrap";
 //var check1,check2;
 export default class CustomModal extends Component {
   constructor(props) {
     super(props);
     this.state = {
       activeItem: this.props.activeItem
     };
   }
   handleChange = e => {
     let { name, value } = e.target;
     //check1 = name;
     //check2 = value;
     const activeItem = { ...this.state.activeItem, [name]: value };
     this.setState({ activeItem });
   };
   render() {
     const { toggle, onSave } = this.props;
     let placeurl = this.state.url;
     let placedes = this.state.description;
     return (
         
       <Modal isOpen={true} toggle={toggle}>
   <ModalHeader toggle={toggle}> Todo Item </ModalHeader>
         <ModalBody>
           <Form>
             <FormGroup>
               <Label for="url">Url</Label>
               <Input
                 type="text"
                 name="url"
                 value={this.state.activeItem.url}
                 onChange={this.handleChange}

                 placeholder={placeurl}
               />
             </FormGroup>
             <FormGroup>
               <Label for="description">Description</Label>
               <Input
                 type="text"
                 name="description"
                 value={this.state.activeItem.description}
                 onChange={this.handleChange}
                 placeholder={placedes}
               />
             </FormGroup>
             
           </Form>
         </ModalBody>
         <ModalFooter>
           <Button color="success" onClick={() => onSave(this.state.activeItem)}>
             Save
           </Button>
         </ModalFooter>
       </Modal>
     );
   }
 }