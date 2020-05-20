import React, {Component} from 'react';
import { connect} from 'react-redux';
import axios from 'axios';
import {getAllReservations} from './actions/fetchReservations';





class ReservationTable extends React.Component {
     
    constructor(props){
          super(props);
          this.state = {
                
          

      }
    

    }  

    componentDidMount(){

      console.log('will mount');
     this.props.getAllReservations(this.props.token);
        
      }

    deleteReservation = (id)=>{
      axios.delete('http://104.248.90.148:8080/api/reservations/'+id+'?token=' +this.props.token)
        .then(response => {
        
          this.props.getAllReservations(this.props.token);
      
      })
      
      .catch(error => {
    
           console.log(error.response.data.message);
         
      });


    }


    deleteAllReservations = () =>{

      axios.post('http://104.248.90.148:8080/api/reservations/deleteAll?token=' +this.props.token)
      .then(response => {
      
        this.props.getAllReservations(this.props.token);
    
    })
    
    .catch(error => {
  
         console.log(error.response.data.message);
       
    });


  }


    
  render(){
    
       const reservations= this.props.reservationsList.map(a =>{
              return a.map((item, index) =>{

               return      <tr key={index} >
                           <td>{index +1}</td>

                          <td>{item.startDate}</td>
                          <td>{item.endDate}</td>
                          <td>{item.apartment}</td>
                          <td>{item.reservationType}</td>
                          <td>{item.numberOfNights}</td>
                          <td>{item.price}</td>
                          <td>{item.created_at}<i style={{cursor:"pointer"}} title="delete" onClick={ () => this.deleteReservation(item.id)} id="garbageIcon" className="material-icons right">delete</i></td>
                          </tr>
               })
                  

               
          


           })
          
         
     
  


    

    return(

      
      <div className="clearfix">
        
       
       
        <table đclassName="tabel-responsive">
        <thead>
          <tr>
               <th>#</th>
              <th>Arrival</th>
              <th>Departure</th>
              <th>Apartment</th>
              <th>Source</th>
              <th>Number of nights</th>
              <th>Price</th>
              <th>Date added</th>




          </tr>
        </thead>

        <tbody>

          {reservations}
          
        </tbody>
      </table>
      <a id="deleteAllButton" onClick={this.deleteAllReservations} className="red accent-4 btn-small right">Delete all reservations</a>
        


      </div>
      
    )
  
  
}
}

const mapStateToProps = (state) =>{

    return{
       
        token: localStorage.getItem('token'),
        reservationsList: state.reservations
        

      
    }
}

const mapDispatchToProps = (dispatch) =>{

  return{
        getAllReservations: (token) =>{dispatch(getAllReservations(token))},
        

  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ReservationTable);;
