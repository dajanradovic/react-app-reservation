
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
import 'materialize-css/dist/css/materialize.min.css';
import loadjs from 'loadjs';



class App extends React.Component {
  constructor(){
    super();
   this.state={
  
    showForm: false
     
    }

}



componentDidMount(){
  
 
      const M = window.M;
    document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems,{});

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



  render(){

    

    return (
    <div>

     
    <div className="container teal lighten-2">
    <div className="row">
      <div className="col s12">
        <h1>Arrange your reservations</h1>
      </div>
   
    </div>
    </div>
   
    

    {this.props.showSlack && <Slack > </Slack>}

    <div className="row">
          <div className="col s12">
                <ul className="collapsible  yellow darken-1">
                       <li>
                          <div className="collapsible-header"><i className="material-icons">add</i>Add new reservation</div>
                               
                               <div className="collapsible-body">
                                     <div className="row">
                                          <div className="col s8" style={{textAlign: "center"}}>
          
                                                  <Calendar  className="customCalendar" onChange={this.onChange}
                      
                                                     selectRange={true}></Calendar>
                                                     <span style={{fontSize: "12px"}}>* select start and end reservatin date to select a range</span>
                                          </div>
                                          
                                          <div className="col s4 forma" style={{width: "400px", borderLeft:"1px solid black"}}>


                                        
                                         {this.state.showForm &&
                                           <Animate
                                           animation={true}
                                         
                                          appear="slideInRight"
                                          durationApper={700}
                                             
                                             >
                                            <Form inbeetween={this.props.betweenDates} numberOfNights={this.props.nights} animateClass={this.state.showForm} startDate1={this.props.startDate} endDate1={this.props.endDate}></Form> 
                                          
                                          
                                              </Animate>
                                            }
                                          
 
                                        
                                    </div>
                                                   
                                                   
                                         
                                              
                                               

                                                             

       
                                             </div>
        
                                      
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
              openModal: state.openModal

            
          }
}

const mapDispatchToProps = (dispatch) =>{

          return{
                setReservationDates: (arrival, leave, numberOfNights, inBetweenDates) =>{dispatch({type: 'SET_RESERVATION_DATES', arrivalDate: arrival, leaveDate: leave, nights: numberOfNights, betweenDates: inBetweenDates})}

          }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);