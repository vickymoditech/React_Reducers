import React,{Component} from 'react';
import {Modal,OverlayTrigger,Button,Popover,Tooltip} from 'react-bootstrap';

class Detail_List extends Component{

    constructor(props){

        super(props);
        this.state = {showedit:false,showdelete:false};

    }

    showedit(){
        this.setState({showedit:true});
    }

    closeedit(){
        this.setState({showedit:false});
    }

    showdelete(){
        this.setState({showdelete:true});
    }

    closedelete(){
        this.setState({showdelete:false});
    }

    delete_data(id){
        alert(id);
    }

    render(){

        const popover = (
            <Popover id="modal-popover" title="popover">
                very popover. such engagement
            </Popover>
        );
        const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;


        return(
            <div class="container">

            <div>

                <Modal show={this.state.showdelete} onHide={ event => {this.closedelete()}}>
                    <Modal.Header closeButton>
                        <Modal.Title>delete Id 101</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <button type="button" class="btn btn-danger" onClick={event => {this.delete_data(1)}}>Delete</button>
                        &nbsp; <Button onClick={event => {this.closedelete()}}>cancle</Button>


                    </Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>
            </div>

            <div>
                <Modal show={this.state.showedit} onHide={ event => {this.closeedit()}}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Id 101</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                            <div class="row centered-form">
                                <div>
                                    <div class="panel panel-default">
                                        <div class="panel-heading">
                                            <h3 class="panel-title">Update the User<small>It's free!</small></h3>
                                        </div>
                                        <div class="panel-body">
                                            <form role="form">
                                                <div class="row">
                                                    <div class="col-xs-6 col-sm-6 col-md-6">
                                                        <div class="form-group">
                                                            <input type="text" name="first_name" id="first_name" class="form-control input-sm" placeholder="First Name"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-6 col-sm-6 col-md-6">
                                                        <div class="form-group">
                                                            <input type="text" name="last_name" id="last_name" class="form-control input-sm" placeholder="Last Name"/>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <input type="email" name="email" id="email" class="form-control input-sm" placeholder="Email Address"/>
                                                </div>

                                                <div class="row">
                                                    <div class="col-xs-6 col-sm-6 col-md-6">
                                                        <div class="form-group">
                                                            <input type="password" name="password" id="password" class="form-control input-sm" placeholder="Password"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-6 col-sm-6 col-md-6">
                                                        <div class="form-group">
                                                            <input type="password" name="password_confirmation" id="password_confirmation" class="form-control input-sm" placeholder="Confirm Password"/>
                                                        </div>
                                                    </div>
                                                </div>

                                                <input type="submit" value="Register" class="btn btn-info btn-block"/>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                        </div>


                        <p>
                            there is a{' '}
                            <OverlayTrigger overlay={popover}>
                                <a href="#popover">popover</a>
                            </OverlayTrigger>{' '}
                            here
                        </p>

                        <p>
                            there is a{' '}
                            <OverlayTrigger overlay={tooltip}>
                                <a href="#tooltip">tooltip</a>
                            </OverlayTrigger>{' '}
                            here
                        </p>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={event => {this.closeedit()}}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>



            <div>
                    <table class="table">
                        <thead>
                        <tr>
                            <th><center>Firstname</center></th>
                            <th><center>Lastname</center></th>
                            <th><center>Email</center></th>
                            <th><center>Edit</center></th>
                            <th><center>Delete</center></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Default</td>
                            <td>Defaultson</td>
                            <td>def@somemail.com</td>
                            <td><button type="button" class="btn btn-info" onClick={event => {this.showedit()}}>Edit</button></td>
                            <td><button type="button" class="btn btn-danger" onClick={event => {this.showdelete()}}>Delete</button></td>
                        </tr>
                        <tr class="success">
                            <td>Success</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                            <td><button type="button" class="btn btn-info" onClick={event => {this.showedit()}}>Edit</button></td>
                            <td><button type="button" class="btn btn-danger" onClick={event => {this.showdelete()}}>Delete</button></td>
                        </tr>
                        <tr class="danger">
                            <td>Danger</td>
                            <td>Moe</td>
                            <td>mary@example.com</td>
                            <td><button type="button" class="btn btn-info" onClick={event => {this.showedit()}}>Edit</button></td>
                            <td><button type="button" class="btn btn-danger" onClick={event => {this.showdelete()}}>Delete</button></td>
                        </tr>
                        <tr class="info">
                            <td>Info</td>
                            <td>Dooley</td>
                            <td>july@example.com</td>
                            <td><button type="button" class="btn btn-info">Edit</button></td>
                            <td><button type="button" class="btn btn-danger">Delete</button></td>
                        </tr>
                        <tr class="warning">
                            <td>Warning</td>
                            <td>Refs</td>
                            <td>bo@example.com</td>
                            <td><button type="button" class="btn btn-info">Edit</button></td>
                            <td><button type="button" class="btn btn-danger">Delete</button></td>
                        </tr>
                        <tr class="active">
                            <td>Active</td>
                            <td>Activeson</td>
                            <td>act@example.com</td>
                            <td><button type="button" class="btn btn-info">Edit</button></td>
                            <td><button type="button" class="btn btn-danger">Delete</button></td>
                        </tr>
                        </tbody>
                    </table>
            </div>
            </div>
        );

    }

}
export default Detail_List;
