import React from 'react'

function About(){
    return (
        <section className="page-section bg-primary" id="about">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="text-white mt-0">Hi there!</h2>
              <hr className="divider divider-light" />
              <p className="text-white-75 mb-4">
                  Peris is a full stack software developer with 2 years of experience and bachelor of science in computer science from Moi University. 
                  My experience is from working for a software development compnay, building my own software and also freelancing. I like researching,reading novels,watching movies and playing when am not coding.
              </p>
              <a className="btn btn-light btn-xl" href="#skills">See more about my skills </a>
        <!-- Put this code anywhere in the body of your page where you want the badge to show up. -->

<div itemscope itemtype='http://schema.org/Person' class='fiverr-seller-widget' style='display: inline-block;'>
     <a itemprop='url' href=https://www.fiverr.com/perismilgo rel="nofollow" target="_blank" style='display: inline-block;'>
        <div class='fiverr-seller-content' id='fiverr-seller-widget-content-9e063e5c-4a91-4769-8fec-36af6d46ce6f' itemprop='contentURL' style='display: none;'></div>
        <div id='fiverr-widget-seller-data' style='display: none;'>
            <div itemprop='name' >perismilgo</div>
            <div itemscope itemtype='http://schema.org/Organization'><span itemprop='name'>Fiverr</span></div>
            <div itemprop='jobtitle'>Seller</div>
            <div itemprop='description'>My name is Peris Chepkemoi from Kenya. I am a computer science graduate and a well an experienced software developer.
I am highly skilled in HTML,CSS,Bootstrap,JavaScript,jQuery,
React,PHP,MySQL,MongoDB and express.</div>
        </div>
    </a>
</div>

<script id='fiverr-seller-widget-script-9e063e5c-4a91-4769-8fec-36af6d46ce6f' src='https://widgets.fiverr.com/api/v1/seller/perismilgo?widget_id=9e063e5c-4a91-4769-8fec-36af6d46ce6f' data-config='{"category_name":"Programming \u0026 Tech"}' async='true' defer='true'></script>

            </div>
          </div>
        </div>
      </section>
     
    )
}
export default About
