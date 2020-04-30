
const initState={

    startDate:'',      
     endDate:'',
     reservationAdded: false,
     showSlack:false,
     openModal:false,
     token:'',
     facilities: ["Studio", "Apartment 4+0"] 

}


const rootReducer = (state = initState, action) =>{
    console.log(action);

            if (action.type === 'SET_RESERVATION_DATES'){

               return{
                    ...state,
                    startDate: action.arrivalDate,
                    endDate: action.leaveDate,
                    nights: action.nights,
                    inBetweenDates: action.betweenDates
                    

               } 
            }

            if (action.type === 'RESERVATION_ADDED_SLACK'){

                return{
                     ...state,
                     showSlack: true,
                     
 
                } 
             }

             if (action.type === 'RESERVATION_ADDED_SLACK_RESET'){

                return{
                     ...state,
                     showSlack : false
 
                } 
             }

             if (action.type === 'OPEN_MODAL'){

               return{
                    ...state,
                    openModal : true

               } 
            }


            if (action.type === 'CLOSE_MODAL'){

               return{
                    ...state,
                    openModal : false

               } 
            }

            if (action.type === 'ADD_NEW_FACILITY_TO_LIST'){
                   
               return{
                    ...state,
                    facilities : [...state.facilities,  action.newFacilityName]

               } 
            }

            if (action.type === 'ADD_TOKEN'){
              
          return{
               ...state,
               token:action.token

          } 
       }


    return state;
} 

export default rootReducer;