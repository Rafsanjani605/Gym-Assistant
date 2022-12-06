import React from 'react';
import img from './Picture1s.png'
import './details.css'
import { useState } from 'react';

const Details = ({details}) => {
   
    const[breaks, setbreaks] = useState('');
    

    let total = 0;
    for(const component of details){
        total = total + component.time; 
       
    }
   
    const clickbreakTime = (e) =>{


        const newTime = (breaks.concat(e.target.name))
        setbreaks(newTime)

        
         
    }


    
    
    
     
    

    //console.log(details);
    return (
        <div className='details'>
            <div className=' pt-10 md:p-10'>
{/*  */}
              <div className='grid justify-center lg:pt-10'>
              <div className='grid pl-10'>
              <div className='pic-address w-60 pr-10'>

    {/* img */}
<div className="w-10/12 px-1">
<img src= {img} alt="..." className="shadow-lg rounded-full max-w-full h-auto  border-none" />
</div>


    <div>
        
            <h1>Rafsan jani</h1>
            <p>california</p>
  
    </div>
            </div>
              </div>
              </div>

                {/* 2nd part */}
                <div className='grid justify-center'>
                <div className='grid grid-cols-3 gap-4 bg-slate-100 h-20 w-96 justify-center rounded-2xl text-center py-2 '>
                    <div className='decoration-8'>
                        <h1>75kg</h1>
                        <h1>weight</h1>

                
                    </div>
                    <div>
                        <h1>6.5</h1>
                        <h1>height</h1>

                    </div>
                    <div>
                        <h1 >25</h1>
                        <h1>age</h1>


                    </div>
                </div>
                </div>
                
    {/* add a break *******timing */}


                <div>
                    <h1 className='text-center pt-4 text-xl text: primary'>Add a break</h1>
                </div>
                <div className='grid justify-center text-center mt-2 '>
                    <div className='grid grid-cols-5 h-20 w-96 bg-slate-100 items-center rounded-2xl'>
                        
                        <div className='rounded-full  bg-green-400 h-10 w-10 flex items-center justify-center  text-lg text-white font-semibold hover:bg-sky-700'>
                            <button name='1' onClick={clickbreakTime}>1M</button>

                        </div>
                        <div className='rounded-full  bg-green-400 h-10 w-10 flex items-center justify-center  text-lg text-white font-semibold hover:bg-sky-700'>
                            <button name='3' onClick={clickbreakTime}> 3M</button>

                        </div>
                        <div className='rounded-full  bg-green-400 h-10 w-10 flex items-center justify-center  text-lg text-white font-semibold hover:bg-sky-700'>
                            <button name='6' onClick={clickbreakTime}>6M</button>

                        </div>
                        <div className='rounded-full  bg-green-400 h-10 w-10 flex items-center justify-center  text-lg text-white font-semibold hover:bg-sky-700'>
                            <button name='8' onClick={clickbreakTime}>8M</button>

                        </div>
                        <div className='rounded-full  bg-green-400 h-10 w-10 flex items-center justify-center text-lg text-white font-semibold hover:bg-sky-700'>
                            <button name='10' onClick={clickbreakTime}>10M</button>

                        </div>

                    </div>
                    
                </div>  


                          {/* exercise part */}

                
                <div>
                    <h1 className='text-center pt-3'>Exercise Details</h1>
                    <div className='grid justify-center text-center mt-2'>
                        <div className='grid grid-cols-2 h-14 w-96 bg-slate-100 items-center rounded-2xl'>
                            <div>
                                   <h3>exercise time</h3>
                            </div>
                            <div>
                                <p className='text-success'>{total} <span>Minutes</span></p>

                            </div>
                        </div>
                    </div>
                    

                </div>

                {/* break part */}

                <div className='grid justify-center text-center mt-2'>
                        <div className='grid grid-cols-2 h-14 w-96 bg-slate-100 items-center rounded-2xl'>
                            <div>
                                   <h3>break time</h3>
                            </div>
                            <div>
                                <p className='text-success'>{breaks} <span>Minutes</span></p>

                            </div>
                        </div>
                    </div>




                {/* break part end */}

                <div className='grid justify-center pt-3'>

                <div>
                    <button className='btn w-96 md:mt-6'>
                        activity completed
                    </button>
                </div>
                </div>



            </div> 
        </div>
    );
};

export default Details;