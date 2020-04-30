import React, {Component} from 'react';
import { connect} from 'react-redux';




class AddFacilityModal extends React.Component {
     
    constructor(props){
          super(props);
       
            this.state={

              newFacilityName:''
            }
         
          

      }

  closeModal = () =>{

    this.props.closeModal();
  }

  handleNewFacilityName = (e) =>{
this.setState({

  newFacilityName: e.target.value
});

 
}    

dispatchNewFacilityName = ()=>{
  this.props.addNewFacilityToList(this.state.newFacilityName);

  this.props.closeModal();

}

    
  render(){

    return(

      <div id="myModal1" className="modal1">


<div className="modal-content1">
<div className="modal-header1">
    <span className="close1" onClick={this.closeModal}>&times;</span>
    <h5>Please add a new facility, room, apartment name</h5>
  </div>
  <div className="modal-body1">
    
    <input onChange={this.handleNewFacilityName} style={{display:"inline-block", width:"85%"}} type="text" name="newFacility" autoFocus />  <button onClick={this.dispatchNewFacilityName} style={{display:"inline-block", marginLeft:"10px"}} className="btn-small waves-effect waves-light"  name="action">Add<i className="small material-icons" id="submitArrow">send</i></button>
  </div>
  
</div>
   

</div>

    )
  
  
}
}

const mapDispatchToProps = (dispatch) =>{

  return{
        
        closeModal :()=>{dispatch({type: 'CLOSE_MODAL'})},
        addNewFacilityToList:(facility)=>{dispatch({type: 'ADD_NEW_FACILITY_TO_LIST', newFacilityName : facility })}

  }
}



export default connect(null,mapDispatchToProps)(AddFacilityModal);
