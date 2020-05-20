import React, {Component} from 'react';
import { Redirect } from "react-router-dom";
import axios from 'axios';
import { connect} from 'react-redux';






class Welcome extends React.Component {
     
    constructor(props){
          super(props);
          this.state = {
              login:false,
              register:false,
              password:'',
              email:'',
              errorMessageContent:'',
              errorMessage:false,
              redirect:false,
              loading:false,

              
          

      }
    

    }  


    submitLogin=(e)=>{
        this.setState({


          loading: true
        })
      e.preventDefault();
      axios.post('http://104.248.90.148:8080/api/login', {
          password: this.state.password,
          email:this.state.email
        })
        .then(response => {
          console.log(response.data);
          localStorage.setItem("token", response.data.token);
          
         
       




          
        }).then(response=>{

          this.setState({
            loading:false,
            redirect:true
           })
        })
        
        .catch(error => {
      
                this.setState({
                  loading:false,
                  errorMessage:true,
                  errorMessageContent:error.response.data.message
                })
                          

         
        });

       
        

}

    handleFormOnChange= (e) =>{


      if(e.target.name == 'password'){

            this.setState({

          password:e.target.value
      })
  }

       if(e.target.name == 'email'){

              this.setState({

                email:e.target.value
      })
  }
      
  
  }

  openRegisterComponent = () =>{

    this.props.history.push('/register');

  }

    openLoginDiv =() =>{

     
        document.getElementById("mySidenav").style.height = "250px";
        document.getElementById("darken").style.backgroundColor = "rgba(0,0,0,0.4)";
     
    }

    closeLoginDiv =() =>{

     
      document.getElementById("mySidenav").style.height ="0px";
      document.getElementById("darken").style.backgroundColor = "";
   
  }

  render(){
    if (this.state.redirect == true) {
      return <Redirect to='/dashboard' />
    }

    if (this.state.register == true) {
      return <Redirect to='/register' />
    }

    return(

      <div  style={{overflowY:"hidden"}}>
      <div id="pictureDiv">
        <div id="darken">
          </div>
     


      </div>

      <div id="welcomeText">
       Welcome,
        please register or login to start managing your reservations
      </div>
      <div className="button-group">
      <a onClick={this.openLoginDiv} className="waves-effect waves-light btn-large buttons lime accent-2">Log-in</a>
      <a className="waves-effect waves-light btn-large buttons" onClick={this.openRegisterComponent}>Register</a>

      </div>
      <div id="mySidenav">
      <a  className="closebtn" onClick={this.closeLoginDiv}>&times;</a>
      <div className="row">
                <div className="col s12">
                  <h6 style={{marginTop:"30px"}}>Enter your login data</h6>
                  </div>
                  </div>
           
                <div className="row">
                <div className="col s8">
                <form >
                     
                          <div className="input-field col s12" style={{marginLeft:"10px"}}>
                          <i className="material-icons prefix">email</i>

                            <input style={{color:"white"}}id="email" name="email" type="email" value={this.state.email} onChange={this.handleFormOnChange} className="validate" />
                           <label className="loginLabel" htmlFor="email">Email</label>
                          

                       

                    
                     </div>

                   
                         <div className="input-field col s12" style={{marginLeft:"10px"}}>
                         <i className="material-icons prefix">lock</i>
                         <input style={{color:"white"}} id="password" name="password" type="password" value={this.state.password} onChange={this.handleFormOnChange} className="validate" />
                          <label className="loginLabel"htmlFor="password">Password</label>
                          {this.state.errorMessage &&  <span id="loginErrorText" style={{color:"red"}}>{this.state.errorMessageContent}</span>}
                  
                        

                     </div>

                     </form>
                     </div>
                     <div className="col s4" style={{marginBottom:"20px"}}>
                           <button id="loginDivbutton" onClick={this.submitLogin} style={{width:"70%", height:"50px", marginTop:"95px", marginLeft:"30px"}}className="waves-effect waves-light btn">Log in</button>
                          {this.state.loading ? <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div> : ''}

                            </div>
                          
                  </div>
                  
                  
        
      </div>
      
      

    </div>
        

   
    )
  
  
}
}

const mapDispatchToProps = (dispatch) =>{

  return{
        addToken: (value) =>{dispatch({type: 'ADD_TOKEN', token:value})},
      

  }
}



export default connect(null, mapDispatchToProps)(Welcome);
