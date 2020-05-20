import React, {Component} from 'react';
import axios from 'axios';
import { connect} from 'react-redux';
import { Redirect } from "react-router-dom";







class RegisterPage extends React.Component {
     
    constructor(props){
          super(props);
          this.state = {
                name:'',
                email:'',
                password:'',
                passwordError:false,
                emailError:false,
                nameError:false,
                passwordErrorContent:'',
                nameErrorContent:'',
                emailErrorContant:'',
                redirect:false,
                emailError:false,
                passwordError:false

          

      }
    
    }  

    handleFormOnChange= (e) =>{


        if(e.target.name == 'name'){

            this.setState({

            name:e.target.value
        })
    }

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


    submitRegistration=(e)=>{
        
            e.preventDefault();
            axios.post('https://laravel-react-api.xyz/api/register', {
                name: this.state.name,
                password: this.state.password,
                email:this.state.email
              })
              .then(response => {
                console.log(response.data);
                this.props.addToken(response.data.token);
               
               this.setState({

                redirect:true
               })




                
              })
              
              .catch(error => {
                    
                        
                  /* let  errorContentPassword= error.response.data.errors.password[0] !='' ? error.response.data.errors.password[0] : '';
                   let  errorContentName= error.response.data.errors.name[0] !='' ? error.response.data.errors.name[0] : '';
                   let  errorContentEmail= error.response.data.errors.email[0] !='' ? error.response.data.errors.email[0] : '';*/
                     for ( var item in error.response.data.errors) {
                                console.log(item);
                                if (item=='password'){
                                    this.setState({
                                        passwordError: true,
                                        passwordErrorContent: error.response.data.errors.password[0]

                                            })
                                        }
                                        if (item == 'name'){
                                            this.setState({
                                                nameError: true,
                                                nameErrorContent: error.response.data.errors.name[0]
        
                                                    })
                                                }

                                         if (item=='email'){
                                                    this.setState({
                                                        emailError: true,
                                                        emailErrorContent: error.response.data.errors.email[0]
                
                                                            })
                                                        }

                                    }

               
              });

              

    }

  render(){
    if (this.state.redirect == true) {
        return <Redirect to='/dashboard' />
      }

    return(
        <div id="background">
            <div className="row">
              
                <form id="formDesign" className="col m4 offset-m4  col s10 offset-s1 lime accent-2">
                <div className="row">
                <div className="col s12">
                    <h4 style={{textAlign: "center"}}>Register your profile</h4>
                </div>
                </div>
                         <div className="row">

                         <div className="input-field col s12">
                         <i className="material-icons prefix">account_circle</i>
                         <input  id="first_name" name="name" value={this.state.name} type="text" onChange={this.handleFormOnChange} className="validate" />
                         <label htmlFor="first_name">First Name</label>
                         {this.state.nameError &&  <span style={{color:"red"}}>{this.state.nameErrorContent}</span>}

                     </div>
                     </div>

                    <div className="row">
                         <div className="input-field col s12">
                         <i className="material-icons prefix">lock</i>
                         <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleFormOnChange} className="validate" />
                          <label htmlFor="password">Password</label>
                        {this.state.passwordError &&  <span style={{color:"red"}}>{this.state.passwordErrorContent}</span>}
                     </div>
                     </div>

                     <div className="row">
                          <div className="input-field col s12">
                          <i className="material-icons prefix">email</i>

                            <input id="email" name="email" type="email" value={this.state.email} onChange={this.handleFormOnChange} class="validate" />
                           <label htmlFor="email">Email</label>
                           {this.state.emailError &&  <span style={{color:"red"}}>{this.state.emailErrorContent}</span>}

                     </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                        <button className="btn waves-effect waves-light" id="registerButton" onClick={this.submitRegistration} type="submit">Submit
                         <i className="material-icons right">send</i>
                        </button>

                        </div>


                    </div>
               

                    </form>
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
  
  
  
  export default connect(null, mapDispatchToProps)(RegisterPage);
  