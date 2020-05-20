(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),s=a.n(l),o=(a(58),a(3)),i=a(4),c=a(7),m=a(6),d=a(5),p=a(52),u=(a(63),a(23)),h=a.n(u),E=(a(28),a(80),a(17)),v=a(11),g=a(12),f=a.n(g),b=function(e){return function(t){f.a.get("http://127.0.0.1:8000/api/reservations?token="+e).then((function(e){console.log("bla bla"),t({type:"RESERVATION_LIST",reservations:e.data.data})})).catch((function(e){console.log(e)}))}},y=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleFormInput=function(e){n.setState({name:e.target.value},n.props.metoda(n.state.name))},n.showListOfDatesOnClick=function(){n.setState((function(e){return{showListOfDates:!e.showListOfDates}}))},n.calculateTotalPrice=function(e){var t=e.currentTarget.value,a=e.target.id;n.setState((function(e){return{indexes:Object(v.a)({},e.indexes,Object(E.a)({},a,t))}}))},n.handleUniversalPrice=function(e){var t=e.currentTarget.value*n.props.numberOfNights;n.setState({totalPrice:t})},n.confirmIndividualPrices=function(e){var t=document.querySelectorAll(".listItem");console.log(t);var a=0;t.forEach((function(e){console.log(e.text),""==e.value?n.setState({showError:!0}):(a=parseInt(a)+parseInt(e.value),n.setState({showError:!1,totalPrice:a}))}))},n.pickReservationType=function(e){n.setState({reservationType:e.target.value})},n.pickApartment=function(e){n.setState({apartment:e.target.value})},n.openModal=function(){n.props.openModal()},n.storeReservation=function(){n.setState({priceError:!1,apartmentError:!1,reservationTypeError:!1}),fetch("http://127.0.0.1:8000/api/reservations??token="+n.props.token,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({startDate:n.props.startDate1,endDate:n.props.endDate1,price:n.state.totalPrice,numberOfNights:n.props.numberOfNights,apartment:n.state.apartment,reservationType:n.state.reservationType})}).then((function(e){return e.json()})).then((function(e){console.log(e.errors),void 0!=e.errors?(e.errors.price&&n.setState({priceError:!0}),e.errors.apartment&&n.setState({apartmentError:!0}),e.errors.reservationType&&n.setState({reservationTypeError:!0})):(n.props.reservationAddedSlack(),setTimeout((function(){console.log("omda"),n.props.reservationAddedSlackReset()}),4e3),n.props.getAllReservations(n.props.token))})).catch((function(e){console.error("Error:",e)}))},n.state={showListOfDates:!1,change:!1,universalPrice:"",totalPrice:"",reservationType:"",apartment:"",showError:!1,apartmentError:!1,reservationTypeError:!1,priceError:!1,indexes:{}},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=window.M;document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelectorAll("select");e.FormSelect.init(t,{})}))}},{key:"render",value:function(){var e=this,t=this.props.inbeetween.map((function(t,a){return r.a.createElement("li",{key:a,className:"collection-item",style:{backgroundColor:"#b2dfdb"}}," ",t.toDateString()," ",r.a.createElement("p",null,"Price for this night: ",r.a.createElement("input",{class:"priceInput right-align listItem",style:{width:"70px",marginLeft:"10px"},id:t.toDateString(),onBlur:e.calculateTotalPrice,type:"number"})))}));return r.a.createElement("div",null,r.a.createElement("div",{className:"surrounding lime accent-1"},r.a.createElement("h6",null,"Arrival date:"),r.a.createElement("p",{style:{backgroundColor:"black",color:"white"}},this.props.startDate1),r.a.createElement("h6",null,"Leave date"),r.a.createElement("p",{style:{backgroundColor:"black",color:"white"}},this.props.endDate1)),r.a.createElement("div",{className:"surrounding",style:{marginTop:"10px"}},r.a.createElement("select",{value:this.state.reservationType,onChange:this.pickReservationType,className:"icons",id:"ze"},r.a.createElement("option",{value:""},"Choose reservation type"),r.a.createElement("option",{value:"Private guest",className:"left"},"Private guest"),r.a.createElement("option",{value:"Booking.com",className:"left"},"Booking.com"),r.a.createElement("option",{value:"Airbnb.com",className:"left"},"Airbnb.com")),this.state.reservationTypeError&&r.a.createElement("p",{className:"red-text"},"You need to fill this field ")),r.a.createElement("div",{className:"surrounding"},r.a.createElement("select",{value:this.state.apartment,style:{display:"inline-block",width:"90%"},onChange:this.pickApartment,defaultValue:"daj",className:"icons",id:"ze"},r.a.createElement("option",null,"Choose your apartment"),this.props.facilities.map((function(e,t){return r.a.createElement("option",{value:e,className:"left"},e)}))),r.a.createElement("i",{title:"add another facility",className:"material-icons",style:{display:"inline-block",width:"10%",verticalAlign:"middle",paddingLeft:"10px",color:"green",fontDecoration:"bold",cursor:"pointer"},onClick:this.openModal},"add"),this.state.apartmentError&&r.a.createElement("p",{className:"red-text"},"You need to fill this field ")),r.a.createElement("div",{className:"surrounding lime accent-1",style:{marginTop:"10px"}},r.a.createElement("p",null,"Total nigths: ",this.props.numberOfNights),r.a.createElement("span",null,"Price (equal for all nights): ",r.a.createElement("input",{className:"priceInput",style:{width:"70px",marginLeft:"10px"},type:"number",onChange:this.handleUniversalPrice})),this.state.priceError&&r.a.createElement("p",{className:"red-text"},"You need to fill this field "),r.a.createElement("a",{style:{display:"block",width:"200px"},className:"waves-effect waves-light btn-small",onClick:this.showListOfDatesOnClick},"Set individual prices for each night"),this.state.showListOfDates&&r.a.createElement(h.a,{animate:!0,appear:"slideInDown",durationApper:800},r.a.createElement("ul",{className:"collection",id:"listaMeduDatuma"},t,r.a.createElement("button",{class:"red lighten-2 btn-small",onClick:this.confirmIndividualPrices},"Confirm individual prices"))),r.a.createElement("h6",null,"Total price: ",r.a.createElement("span",null,this.state.totalPrice))),r.a.createElement("button",{onClick:this.storeReservation,className:"btn waves-effect waves-light",style:{marginTop:"10px"},name:"action"},"Confirm reservation",r.a.createElement("i",{className:"small material-icons",id:"submitArrow"},"send")))}}]),a}(r.a.Component),w=Object(d.b)((function(e){return{startDate:e.startDate,endDate:e.endDate,nights:e.nights,betweenDates:e.inBetweenDates,facilities:e.facilities,token:localStorage.getItem("token")}}),(function(e){return{reservationAddedSlack:function(){e({type:"RESERVATION_ADDED_SLACK"})},reservationAddedSlackReset:function(){e({type:"RESERVATION_ADDED_SLACK_RESET"})},openModal:function(){e({type:"OPEN_MODAL"})},getAllReservations:function(t){e(b(t))}}}))(y),N=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"slack"},"You reservation has been successfully added!")}}]),a}(r.a.Component),D=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).closeModal=function(){n.props.closeModal()},n.handleNewFacilityName=function(e){n.setState({newFacilityName:e.target.value})},n.dispatchNewFacilityName=function(){n.props.addNewFacilityToList(n.state.newFacilityName),n.props.closeModal()},n.state={newFacilityName:""},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"myModal1",className:"modal1"},r.a.createElement("div",{className:"modal-content1"},r.a.createElement("div",{className:"modal-header1"},r.a.createElement("span",{className:"close1",onClick:this.closeModal},"\xd7"),r.a.createElement("h5",null,"Please add a new facility, room, apartment name")),r.a.createElement("div",{className:"modal-body1"},r.a.createElement("input",{onChange:this.handleNewFacilityName,style:{display:"inline-block",width:"85%"},type:"text",name:"newFacility",autoFocus:!0}),"  ",r.a.createElement("button",{onClick:this.dispatchNewFacilityName,style:{display:"inline-block",marginLeft:"10px"},className:"btn-small waves-effect waves-light",name:"action"},"Add",r.a.createElement("i",{className:"small material-icons",id:"submitArrow"},"send")))))}}]),a}(r.a.Component),k=Object(d.b)(null,(function(e){return{closeModal:function(){e({type:"CLOSE_MODAL"})},addNewFacilityToList:function(t){e({type:"ADD_NEW_FACILITY_TO_LIST",newFacilityName:t})}}}))(D),O=(a(98),a(49)),S=a.n(O),A=a(15),C=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).deleteReservation=function(e){f.a.delete("http://127.0.0.1:8000/api/reservations/"+e+"?token="+n.props.token).then((function(e){n.props.getAllReservations(n.props.token)})).catch((function(e){console.log(e.response.data.message)}))},n.deleteAllReservations=function(){f.a.post("http://127.0.0.1:8000/api/reservations/deleteAll?token="+n.props.token).then((function(e){n.props.getAllReservations(n.props.token)})).catch((function(e){console.log(e.response.data.message)}))},n.state={},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){console.log("will mount"),this.props.getAllReservations(this.props.token)}},{key:"render",value:function(){var e=this,t=this.props.reservationsList.map((function(t){return t.map((function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,a+1),r.a.createElement("td",null,t.startDate),r.a.createElement("td",null,t.endDate),r.a.createElement("td",null,t.apartment),r.a.createElement("td",null,t.reservationType),r.a.createElement("td",null,t.numberOfNights),r.a.createElement("td",null,t.price),r.a.createElement("td",null,t.created_at,r.a.createElement("i",{style:{cursor:"pointer"},title:"delete",onClick:function(){return e.deleteReservation(t.id)},id:"garbageIcon",className:"material-icons right"},"delete")))}))}));return r.a.createElement("div",{className:"clearfix"},r.a.createElement("table",{"\u0111className":"tabel-responsive"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Arrival"),r.a.createElement("th",null,"Departure"),r.a.createElement("th",null,"Apartment"),r.a.createElement("th",null,"Source"),r.a.createElement("th",null,"Number of nights"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Date added"))),r.a.createElement("tbody",null,t)),r.a.createElement("a",{id:"deleteAllButton",onClick:this.deleteAllReservations,className:"red accent-4 btn-small right"},"Delete all reservations"))}}]),a}(r.a.Component),T=Object(d.b)((function(e){return{token:localStorage.getItem("token"),reservationsList:e.reservations}}),(function(e){return{getAllReservations:function(t){e(b(t))}}}))(C),j=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).onChange=function(t){console.log(t);var a=t[1].getTime()-t[0].getTime(),n=Math.round(a/864e5)-1,r=t[0].toDateString(),l=t[1].toDateString(),s=Array(Math.floor((t[1]-t[0])/864e5)).fill().map((function(e,a){return new Date(t[0].getTime()+864e5*a)}));e.props.setReservationDates(r,l,n,s),e.setState({showForm:!0})},e.logOut=function(){f.a.get("http://127.0.0.1:8000/api/logout?token="+e.props.token).then((function(t){console.log(t.data),e.props.eraseAllData(),e.props.history.push("/")})).catch((function(e){console.log(e)}))},e.state={showForm:!1},e}return Object(i.a)(a,[{key:"componentWillUnmount",value:function(){localStorage.removeItem("token")}},{key:"componentDidMount",value:function(){var e=this;console.log("u comoponentdidmount sam"),S.a.AutoInit(),this.props.getAllReservations(this.props.token),f.a.get("http://127.0.0.1:8000/api/getUser?token="+this.props.token).then((function(t){console.log(t.data),e.props.setUserData(t.data)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return 1==this.stlogout?r.a.createElement(A.a,{to:"/"}):""==this.props.token?r.a.createElement(A.a,{to:"/register"}):r.a.createElement("div",null,r.a.createElement("div",{className:"teal lighten-2"},r.a.createElement("div",{id:"headerDiv",className:"row yellow darken-1"},r.a.createElement("div",{className:"col s12"},r.a.createElement("div",{className:"flex-container"},r.a.createElement("h5",null,"Hi,  ",this.props.userDetails.name),r.a.createElement("div",{id:"crtaa"}),r.a.createElement("h6",{id:"logOut",onClick:this.logOut,title:"log out",style:{cursor:"pointer"},className:"valign-wrapper"},"Log-out  ",r.a.createElement("i",{className:"small material-icons",style:{paddingLeft:"10px"}},"exit_to_app"))),r.a.createElement("h1",{id:"reservationsHeaderTitle"},"Arrange your reservations")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12"},r.a.createElement("ul",{className:"collapsible  yellow darken-1"},r.a.createElement("li",null,r.a.createElement("div",{className:"collapsible-header"},r.a.createElement("i",{className:"material-icons"},"add"),"Add new reservation"),r.a.createElement("div",{className:"collapsible-body"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s8 tabletClass",style:{textAlign:"center"}},r.a.createElement(p.a,{className:"customCalendar",onChange:this.onChange,selectRange:!0}),r.a.createElement("span",{id:"belowCalendarLabel",style:{fontSize:"12px"}},"* select start and end reservatin date to select a range")),r.a.createElement("div",{className:"col m4 s12 forma",style:{width:"400px",borderLeft:"1px solid black"}},this.state.showForm&&r.a.createElement(h.a,{animation:!0,appear:"slideInRight",durationApper:700},r.a.createElement(w,{inbeetween:this.props.betweenDates,numberOfNights:this.props.nights,animateClass:this.state.showForm,startDate1:this.props.startDate,endDate1:this.props.endDate}))))))),this.props.showSlack&&r.a.createElement(N,null," "),r.a.createElement("ul",{className:"collapsible  yellow darken-1"},r.a.createElement("li",null,r.a.createElement("div",{className:"collapsible-header"},r.a.createElement("i",{className:"material-icons"},"add"),"View reservation list"),r.a.createElement("div",{className:"collapsible-body",id:"collapsibleTable"},""==this.props.reservationsList?r.a.createElement("p",null,"no reservations"):r.a.createElement(T,null)))))),this.props.openModal&&r.a.createElement(k,null))}}]),a}(r.a.Component),L=Object(d.b)((function(e){return{startDate:e.startDate,endDate:e.endDate,nights:e.nights,betweenDates:e.inBetweenDates,showSlack:e.showSlack,openModal:e.openModal,token:localStorage.getItem("token"),userDetails:e.userData,reservationsList:e.reservations}}),(function(e){return{setReservationDates:function(t,a,n,r){e({type:"SET_RESERVATION_DATES",arrivalDate:t,leaveDate:a,nights:n,betweenDates:r})},setUserData:function(t){e({type:"SET_USER_DATA",data:t})},getAllReservations:function(t){e(b(t))},eraseAllData:function(){e({type:"RESET_DATA"})}}}))(j),R=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).submitLogin=function(e){n.setState({loading:!0}),e.preventDefault(),f.a.post("http://127.0.0.1:8000/api/login",{password:n.state.password,email:n.state.email}).then((function(e){console.log(e.data),localStorage.setItem("token",e.data.token)})).then((function(e){n.setState({loading:!1,redirect:!0})})).catch((function(e){n.setState({loading:!1,errorMessage:!0,errorMessageContent:e.response.data.message})}))},n.handleFormOnChange=function(e){"password"==e.target.name&&n.setState({password:e.target.value}),"email"==e.target.name&&n.setState({email:e.target.value})},n.openRegisterComponent=function(){n.props.history.push("/register")},n.openLoginDiv=function(){document.getElementById("mySidenav").style.height="250px",document.getElementById("darken").style.backgroundColor="rgba(0,0,0,0.4)"},n.closeLoginDiv=function(){document.getElementById("mySidenav").style.height="0px",document.getElementById("darken").style.backgroundColor=""},n.state={login:!1,register:!1,password:"",email:"",errorMessageContent:"",errorMessage:!1,redirect:!1,loading:!1},n}return Object(i.a)(a,[{key:"render",value:function(){return 1==this.state.redirect?r.a.createElement(A.a,{to:"/dashboard"}):1==this.state.register?r.a.createElement(A.a,{to:"/register"}):r.a.createElement("div",{style:{overflowY:"hidden"}},r.a.createElement("div",{id:"pictureDiv"},r.a.createElement("div",{id:"darken"})),r.a.createElement("div",{id:"welcomeText"},"Welcome, please register or login to start managing your reservations"),r.a.createElement("div",{className:"button-group"},r.a.createElement("a",{onClick:this.openLoginDiv,className:"waves-effect waves-light btn-large buttons lime accent-2"},"Log-in"),r.a.createElement("a",{className:"waves-effect waves-light btn-large buttons",onClick:this.openRegisterComponent},"Register")),r.a.createElement("div",{id:"mySidenav"},r.a.createElement("a",{className:"closebtn",onClick:this.closeLoginDiv},"\xd7"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12"},r.a.createElement("h6",{style:{marginTop:"30px"}},"Enter your login data"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s8"},r.a.createElement("form",null,r.a.createElement("div",{className:"input-field col s12",style:{marginLeft:"10px"}},r.a.createElement("i",{className:"material-icons prefix"},"email"),r.a.createElement("input",{style:{color:"white"},id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleFormOnChange,className:"validate"}),r.a.createElement("label",{className:"loginLabel",htmlFor:"email"},"Email")),r.a.createElement("div",{className:"input-field col s12",style:{marginLeft:"10px"}},r.a.createElement("i",{className:"material-icons prefix"},"lock"),r.a.createElement("input",{style:{color:"white"},id:"password",name:"password",type:"password",value:this.state.password,onChange:this.handleFormOnChange,className:"validate"}),r.a.createElement("label",{className:"loginLabel",htmlFor:"password"},"Password"),this.state.errorMessage&&r.a.createElement("span",{id:"loginErrorText",style:{color:"red"}},this.state.errorMessageContent)))),r.a.createElement("div",{className:"col s4",style:{marginBottom:"20px"}},r.a.createElement("button",{id:"loginDivbutton",onClick:this.submitLogin,style:{width:"70%",height:"50px",marginTop:"95px",marginLeft:"30px"},className:"waves-effect waves-light btn"},"Log in"),this.state.loading?r.a.createElement("div",{className:"lds-ellipsis"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)):""))))}}]),a}(r.a.Component),x=Object(d.b)(null,(function(e){return{addToken:function(t){e({type:"ADD_TOKEN",token:t})}}}))(R);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=a(21),I=a(53),F={startDate:"",endDate:"",reservationAdded:!1,showSlack:!1,openModal:!1,token:localStorage.getItem("token"),facilities:["Studio","Apartment 4+0"],userData:{},reservations:[]},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;return console.log(t),"SET_RESERVATION_DATES"===t.type?Object(v.a)({},e,{startDate:t.arrivalDate,endDate:t.leaveDate,nights:t.nights,inBetweenDates:t.betweenDates}):"RESERVATION_ADDED_SLACK"===t.type?Object(v.a)({},e,{showSlack:!0}):"RESERVATION_ADDED_SLACK_RESET"===t.type?Object(v.a)({},e,{showSlack:!1}):"OPEN_MODAL"===t.type?Object(v.a)({},e,{openModal:!0}):"CLOSE_MODAL"===t.type?Object(v.a)({},e,{openModal:!1}):"ADD_NEW_FACILITY_TO_LIST"===t.type?Object(v.a)({},e,{facilities:[].concat(Object(I.a)(e.facilities),[t.newFacilityName])}):"ADD_TOKEN"===t.type?Object(v.a)({},e,{token:t.token}):"SET_USER_DATA"===t.type?(console.log(t),Object(v.a)({},e,{userData:Object(v.a)({},t.data)})):"RESERVATION_LIST"===t.type?Object(v.a)({},e,{reservations:[t.reservations]}):("RESET_DATA"===t.type&&(e=F),e)},P=a(19),B=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n,r;return Object(o.a)(this,a),(r=t.call(this,e)).handleFormOnChange=function(e){"name"==e.target.name&&r.setState({name:e.target.value}),"password"==e.target.name&&r.setState({password:e.target.value}),"email"==e.target.name&&r.setState({email:e.target.value})},r.submitRegistration=function(e){e.preventDefault(),f.a.post("http://127.0.0.1:8000/api/register",{name:r.state.name,password:r.state.password,email:r.state.email}).then((function(e){console.log(e.data),r.props.addToken(e.data.token),r.setState({redirect:!0})})).catch((function(e){for(var t in e.response.data.errors)console.log(t),"password"==t&&r.setState({passwordError:!0,passwordErrorContent:e.response.data.errors.password[0]}),"name"==t&&r.setState({nameError:!0,nameErrorContent:e.response.data.errors.name[0]}),"email"==t&&r.setState({emailError:!0,emailErrorContent:e.response.data.errors.email[0]})}))},r.state=(n={name:"",email:"",password:"",passwordError:!1,emailError:!1,nameError:!1,passwordErrorContent:"",nameErrorContent:"",emailErrorContant:"",redirect:!1},Object(E.a)(n,"emailError",!1),Object(E.a)(n,"passwordError",!1),n),r}return Object(i.a)(a,[{key:"render",value:function(){return 1==this.state.redirect?r.a.createElement(A.a,{to:"/dashboard"}):r.a.createElement("div",{id:"background"},r.a.createElement("div",{className:"row"},r.a.createElement("form",{id:"formDesign",className:"col m4 offset-m4  col s10 offset-s1 lime accent-2"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12"},r.a.createElement("h4",{style:{textAlign:"center"}},"Register your profile"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("i",{className:"material-icons prefix"},"account_circle"),r.a.createElement("input",{id:"first_name",name:"name",value:this.state.name,type:"text",onChange:this.handleFormOnChange,className:"validate"}),r.a.createElement("label",{htmlFor:"first_name"},"First Name"),this.state.nameError&&r.a.createElement("span",{style:{color:"red"}},this.state.nameErrorContent))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("i",{className:"material-icons prefix"},"lock"),r.a.createElement("input",{id:"password",name:"password",type:"password",value:this.state.password,onChange:this.handleFormOnChange,className:"validate"}),r.a.createElement("label",{htmlFor:"password"},"Password"),this.state.passwordError&&r.a.createElement("span",{style:{color:"red"}},this.state.passwordErrorContent))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("i",{className:"material-icons prefix"},"email"),r.a.createElement("input",{id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleFormOnChange,class:"validate"}),r.a.createElement("label",{htmlFor:"email"},"Email"),this.state.emailError&&r.a.createElement("span",{style:{color:"red"}},this.state.emailErrorContent))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12"},r.a.createElement("button",{className:"btn waves-effect waves-light",id:"registerButton",onClick:this.submitRegistration,type:"submit"},"Submit",r.a.createElement("i",{className:"material-icons right"},"send")))))))}}]),a}(r.a.Component),V=Object(d.b)(null,(function(e){return{addToken:function(t){e({type:"ADD_TOKEN",token:t})}}}))(B),U=(a(102),a(51)),K=Object(_.c)(M,Object(_.a)(U.a));s.a.render(r.a.createElement(d.a,{store:K},r.a.createElement(P.a,null,r.a.createElement(A.b,{exact:!0,path:"/",component:x}),r.a.createElement(A.b,{exact:!0,path:"/register",component:V}),r.a.createElement(A.b,{exact:!0,path:"/dashboard",component:L}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},54:function(e,t,a){e.exports=a(103)},58:function(e,t,a){}},[[54,1,2]]]);
//# sourceMappingURL=main.004b25cf.chunk.js.map