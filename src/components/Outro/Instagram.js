import React from 'react'
import InstagramEmbed from 'react-instagram-embed';

const Instagram = () => {
    return ( 
        
            
                <div className="col-12 col-lg-9 mt-4">
                <InstagramEmbed url='https://www.instagram.com/p/B2rmhzihaua/'
        maxWidth={600}
        hideCaption={true}
        containerTagName='div'
        injectScript
        protocol=''
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
        />



                </div>
           
        
     );
}
 
export default Instagram;