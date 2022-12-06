import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../Utilities/Utilities';
import Gymcom from '../Gymcom/Gymcom';
import Details from './details/Details';
import './gym.css'



const Gym = () => {


    const [components , setcomponent] = useState([]);

    const[details , setdetails] = useState([])
   


    useEffect(() => {
        fetch('gymdata.json')
        .then(res => res.json())
        .then(data => setcomponent(data.Gymcom))

    }, []);

    const handleaddclick = (component) =>{
        //console.log(components);
        const newdetails = [...details, component]
        setdetails(newdetails)
    }

    
   

    


    return (
        <div className='gym bg-base-300 px-7'>
            <div>
                {/* here all cards opens */}
                <div className='gri pl-5 pt-5 bg-base-300 justify-items-center px-5 m-3'>
                    {
                        components.map(component => <Gymcom
                        key= {component.id}
                        component = {component}
                        handleaddclick = {handleaddclick}
                        
                        

                        ></Gymcom>)
                    }
                </div>
              

            </div>

{/* right side work starts */}

            <div>
          <Details
          details ={details}
         
          
          ></Details>
            </div>
            {/* it us last div */}






            
          
         

       </div>

    );
};

export default Gym;