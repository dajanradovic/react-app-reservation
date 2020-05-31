
import React, {Component} from 'react';
import { connect} from 'react-redux';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DatePicker from  "react-datepicker";
import Animate from 'animate.css-react'
import 'animate.css/animate.css'
import "react-datepicker/dist/react-datepicker.css";
import Form from "./form.js";
import Slack from "./slack.js";
import AddFacilityModal from "./AddFacilityModal.js"
import { findRenderedComponentWithType } from 'react-dom/test-utils';
import M from 'materialize-css/dist/js/materialize.min.js';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import ReservationTable from './reservationTable';
import {getAllReservations} from './actions/fetchReservations';







class App extends React.Component {
  constructor(){
    super();
   this.state={
  
    showForm: false
   
     
    }

}

componentWillUnmount(){

  localStorage.removeItem("token");
}


componentDidMount(){
  console.log('u comoponentdidmount sam');
  M.AutoInit();
  this.props.getAllReservations(this.props.token);


  axios.get('https://laravel-react-api.xyz/api/getUser?token=' + this.props.token)
              .then(response => {
                console.log(response.data);
                this.props.setUserData(response.data);

                     

                
              })
              
              .catch(error => {
                  console.log(error);
               
              });

     


}



onChange = (value) => {

  
       
        console.log(value);
        var Difference_In_Time = value[1].getTime() - value[0].getTime();
        var numberOfNights = Math.round(Difference_In_Time / (1000 * 3600 * 24))-1;
       
        let nula = value[0].toDateString();
        let dva = value[1].toDateString();
       
      let inBetweenDates=  Array(Math.floor((value[1] - value[0]) / 86400000)).fill().map((_, idx) => (new Date(value[0].getTime() + idx * 86400000)))


  
  this.props.setReservationDates(nula, dva, numberOfNights, inBetweenDates);
     
  this.setState({

          //startDate: nula,
         // endDate:  dva,
          showForm: true

  })


 
}

logOut = () =>{

  axios.get('https://laravel-react-api.xyz/api/logout?token=' + this.props.token)
              .then(response => {
               
                this.props.history.push('/');

                this.props.eraseAllData();
             

                     

                
              })
              
              .catch(error => {
                  console.log(error);
               
              });




}



  render(){
    if(localStorage.getItem('token')==null) 
    {return <Redirect to="/register"></Redirect>}

    return (
    <div>

     
    <div className="teal lighten-2">
    <div id="headerDiv" className="row yellow darken-1">
      <div  className="col s12">
        <div className="flex-container">
        <h5 id="userName">Hi,  {this.props.userDetails.name}</h5><div id="crtaa"></div><h6 id="logOut" onClick={this.logOut} title="log out" style={{cursor:"pointer"}}className="valign-wrapper" ><i  className="small material-icons" style={{paddingLeft: "10px"}}>exit_to_app</i></h6>
        </div>
        <h1 id="reservationsHeaderTitle">Arrange your reservations</h1>
      </div>
      
   
    </div>
    </div>
   
    


    <div className="row">
          <div className="col s12">
                <ul className="collapsible  yellow darken-1">
                       <li>
                          <div className="collapsible-header"><i className="material-icons">add</i>Add new reservation</div>
                               
                               <div className="collapsible-body">
                                     <div className="row">
                                          <div className="col s8 tabletClass" style={{textAlign: "center"}}>
          
                                                  <Calendar  className="customCalendar" onChange={this.onChange}
                      
                                                     selectRange={true}></Calendar>
                                                     <span id="belowCalendarLabel"style={{fontSize: "12px"}}>* select start and end reservatin date to select a range</span>
                                          </div>
                                          
                                          <div className="col m4 s12 forma" style={{width: "400px", borderLeft:"1px solid black"}}>


                                        
                                         {this.state.showForm &&
                                           <Animate
                                           animation={true}
                                         
                                          appear="slideInRight"
                                          durationApper={700}
                                             
                                             >
                                            <Form inbeetween={this.props.betweenDates} numberOfNights={this.props.nights} animateClass={this.state.showForm} startDate1={this.props.startDate} endDate1={this.props.endDate}></Form> 
                                          
                                          
                                              </Animate>
                                            }
                                          
                                          {this.props.showSlack && <Slack > </Slack>}

                                    </div>
                                                   
                                                   
                                         
                                              
                                               

                                                             

       
                                             </div>
        
                                      
                                </div>
                        </li>
                   </ul>


                   <ul className="collapsible  yellow darken-1">
                       <li>
                          <div className="collapsible-header"><i className="material-icons">add</i>View reservation list</div>
                               
                               <div className="collapsible-body" id="collapsibleTable" >
                                 {this.props.reservationsList==''? (<p>no reservations</p>):
                                 (
                              <ReservationTable />
                              )
                                 }
                                </div>
                          </li>
                    </ul>

              
             </div>
          
         </div>

  
  
     
    {this.props.openModal &&
        <AddFacilityModal></AddFacilityModal>}
    </div>
    
  );

}
}


const mapStateToProps = (state) =>{

          return{
              startDate: state.startDate,
              endDate: state.endDate,
              nights: state.nights,
              betweenDates: state.inBetweenDates,
              showSlack: state.showSlack,
              openModal: state.openModal,
              token: localStorage.getItem('token'),
              userDetails:state.userData,
              reservationsList: state.reservations


            
          }
}

const mapDispatchToProps = (dispatch) =>{

          return{
                setReservationDates: (arrival, leave, numberOfNights, inBetweenDates) =>{dispatch({type: 'SET_RESERVATION_DATES', arrivalDate: arrival, leaveDate: leave, nights: numberOfNights, betweenDates: inBetweenDates})},
                setUserData: (values) =>{dispatch({type: 'SET_USER_DATA', data:values})},
                getAllReservations: (token) =>{dispatch(getAllReservations(token))},
                eraseAllData: () =>{dispatch({type: 'RESET_DATA'})},


          }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);