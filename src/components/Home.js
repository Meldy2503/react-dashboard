import React from 'react'

function Home() {
    return (
        <>
            <h1 className='title'>Welcome to Ja'posh Fashion World</h1>
            
            <div className='img-container'>
            <div className='images'>
            <img src="https://images.unsplash.com/photo-1567755997194-f92b5dc9106f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="img1" className="bg-image"/> 
            </div>
        
            <div className='images'>
            <img src="https://images.pexels.com/photos/3158128/pexels-photo-3158128.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img2" className="bg-image"/> 
            </div> 
        
            <div className='images'>
            <img src="https://images.pexels.com/photos/4914807/pexels-photo-4914807.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img3" className="bg-image"/> 
            </div>

            <div className='images'>
            <img src="https://images.pexels.com/photos/9595073/pexels-photo-9595073.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img4" className="bg-image"/> 
            </div>
            
            <div className='images'>
            <img src="https://images.pexels.com/photos/3782789/pexels-photo-3782789.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img5" className="bg-image"/> 
            </div>
             
             </div>
        </>
    );
}

export default Home;

