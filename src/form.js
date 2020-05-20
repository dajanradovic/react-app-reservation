import React, {Component} from 'react';
import Animate from 'animate.css-react'
import 'animate.css/animate.css'
import { connect} from 'react-redux';
import {getAllReservations} from './actions/fetchReservations';





class Form extends React.Component {
      constructor(props){
          super(props);
          this.state = {
          showListOfDates:false,
          change:false,
          universalPrice:'',
          totalPrice:'',
          reservationType:'',
          apartment:'',
          showError: false,
          apartmentError:false,
          reservationTypeError:false,
          priceError:false,
          indexes:{


          }
          

      }
    }

    componentDidMount(){
      const M = window.M;
      document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems, {});
      });

    }


      handleFormInput = (e) => {
       
               this.setState({
                   name : e.target.value
                   
               },this.props.metoda(this.state.name) );
               

      }

      

      showListOfDatesOnClick = () =>{


                                    
                                 
                                      this.setState((prevState) =>{

                                        return {

                                          showListOfDates: !prevState.showListOfDates
                                        }
                                      })


                                    }

                                  
                                  
      
      calculateTotalPrice = (e) => {
        
      let price= e.currentTarget.value;
      let name = e.target.id;
        
        this.setState((prevState) =>{

          return {

            indexes: {...prevState.indexes, [name] : price}
            
          }
        })

      }

      handleUniversalPrice = (e) => {

        let uniPrice = e.currentTarget.value * this.props.numberOfNights;

            this.setState({
                  totalPrice : uniPrice

            })
      }

      confirmIndividualPrices = (e) =>{

        let collect = document.querySelectorAll('.listItem');
        console.log(collect);
        let collectAmount=0;
        collect.forEach(item =>{

          console.log(item.text);
            if (item.value ==''){

            this.setState({
              showError : true

        })
      }

      else{
          
        collectAmount=parseInt(collectAmount) + parseInt(item.value);
        this.setState({
          showError : false,
          totalPrice: collectAmount

    })

      }

        })

       
        


        
      }

      pickReservationType = (e) =>{

        this.setState({

          reservationType: e.target.value
        })
      }

      pickApartment = (e) =>{

        this.setState({

          apartment: e.target.value
        })
      }

      openModal =() =>{

          this.props.openModal();

      }
      
      storeReservation = ()=>{

       this.setState({

        priceError: false,
        apartmentError: false,
        reservationTypeError:false
       })
        


        fetch('https://laravel-react-api.xyz/api/reservations??token=' + this.props.token, {
          method: 'POST', 
        
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            
                "startDate": this.props.startDate1,
                "endDate" : this.props.endDate1,
                "price": this.state.totalPrice,
                "numberOfNights": this.props.numberOfNights,
                "apartment": this.state.apartment,
                "reservationType":this.state.reservationType


          }),
        })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.errors);
          if (data.errors !=undefined){

            if(data.errors.price){
              
              this.setState({

                priceError: true
              })
              
            }
            if(data.errors.apartment){
              
              this.setState({

                apartmentError: true
              })
              
            }

            if(data.errors.reservationType){
              
              this.setState({

                reservationTypeError: true
              })
              
            }

          

          
          }

          else{
            this.props.reservationAddedSlack();
            setTimeout(()=>{
              console.log('omda');
                this.props.reservationAddedSlackReset();
  
            }, 4000)

            this.props.getAllReservations(this.props.token);


          }
         
        })
        .catch((error) => {
          console.error('Error:', error);
        });

      }
      

  render(){

    let dates= this.props.inbeetween.map((item, index) =>{
      return <li key={index} className="collection-item" style={{backgroundColor: "#b2dfdb"}}> {item.toDateString()} <p>Price for this night: <input class="priceInput right-align listItem" style={{width:"70px", marginLeft:"10px" }} id={item.toDateString()} onBlur={this.calculateTotalPrice}  type="number"  /></p></li>
    });
   
    return (
  <div >

               
        <div className="surrounding lime accent-1">
                <h6>Arrival date:</h6>
                  <p style={{backgroundColor: "black", color:"white"}}>{this.props.startDate1}</p>

                <h6>Leave date</h6>
                <p style={{backgroundColor: "black", color:"white"}}>{this.props.endDate1}</p>
        </div>
         <div className="surrounding"  style={{marginTop:"10px"}}>
                    <select  value={this.state.reservationType} onChange={this.pickReservationType} className="icons" id="ze">
                    <option value='' >Choose reservation type</option>
                    <option value="Private guest"  className="left">Private guest</option>
                    <option value="Booking.com"  className="left">Booking.com</option>
                    <option value="Airbnb.com"  className="left">Airbnb.com</option>
                  </select>
                  {this.state.reservationTypeError && <p className="red-text">You need to fill this field </p>}
          </div>
          <div className="surrounding" >
                  <select value={this.state.apartment} style={{display:"inline-block", width:"90%"}} onChange={this.pickApartment} defaultValue="daj"className="icons" id="ze">
                    <option>Choose your apartment</option>
                    {this.props.facilities.map((item, index)=>{
      
      return <option  value={item} className="left">{item}</option> 
    })}
                  </select><i title="add another facility" className="material-icons" style={{display:"inline-block", width:"10%", verticalAlign:"middle", paddingLeft:"10px", color:"green", fontDecoration:"bold", cursor:"pointer"}} onClick={this.openModal}>add</i>
                  {this.state.apartmentError && <p className="red-text">You need to fill this field </p>}

     </div>

       <div className="surrounding lime accent-1" style={{marginTop:"10px"}}>
                <p >Total nigths: {this.props.numberOfNights}</p>
                <span>Price (equal for all nights): <input className="priceInput" style={{width:"70px", marginLeft:"10px"}}  type="number" onChange={this.handleUniversalPrice}  /></span>
                {this.state.priceError && <p className="red-text">You need to fill this field </p>}

                <a style={{display:"block", width:"200px"}} className="waves-effect waves-light btn-small" onClick={this.showListOfDatesOnClick}>Set individual prices for each night</a>
                
                      {this.state.showListOfDates &&
                             <Animate
                                 animate={true}
                                // animateChangeIf={this.state.change}     
                                 appear="slideInDown"
                                 //change="fadeOutUp"
                                 durationApper={800}
                                
                                
                                
                                 >
                                             
                                            
                                      <ul className="collection" id="listaMeduDatuma">
                                        {dates}
                                        
                                        <button class="red lighten-2 btn-small" onClick={this.confirmIndividualPrices}>Confirm individual prices</button>

                                       </ul>
                  
                                     

                                              </Animate>
                                                          }
               
              

                        
                        <h6>Total price: <span>{this.state.totalPrice}</span></h6>
                        </div>
                        <button onClick={this.storeReservation} className="btn waves-effect waves-light" style={{marginTop:"10px"}}  name="action">Confirm reservation<i className="small material-icons" id="submitArrow">send</i>
                      </button>
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
      facilities: state.facilities,
      token: localStorage.getItem('token'),


    
  }
}

const mapDispatchToProps = (dispatch) =>{

  return{
        reservationAddedSlack: () =>{dispatch({type: 'RESERVATION_ADDED_SLACK'})},
        reservationAddedSlackReset: () =>{dispatch({type: 'RESERVATION_ADDED_SLACK_RESET'})},
        openModal:()=>{dispatch({type: 'OPEN_MODAL'})},
        getAllReservations: (token) =>{dispatch(getAllReservations(token))}

  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Form);
