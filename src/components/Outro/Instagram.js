import React from 'react'
import InstagramEmbed from 'react-instagram-embed';

const Instagram = () => {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-9">
                <InstagramEmbed url='https://www.instagram.com/moellerup/?utm_source=ig_embed'
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
            </div>
        </div>
     );
}
 
export default Instagram;