import React from 'react';

const About = () => {
  console.log("About")
  return (
    <div className="container flex flex-row flex-wrap justify-around mw9 content-center center ph4-ns" >
      <div className="box ba bg-black-20 tc w-100 w-100-l br4 pa4 ma2">
        <h3 className="mt0" >About</h3>
        <p className="fw4 tl">
          To see an example from what to select and what the capsule wardrobe can look like, click <a href="https://lzduque.github.io/personal-stylist/#/eyJzZWFzb24iOiJTcHJpbmdTdW1tZXIiLCJzdHlsZSI6IkNhc3VhbCIsIm51bWJlck9mT3V0Zml0cyI6IkZyb20xODF0bzE5MCIsImNvbG9ycyI6eyJtYWlucyI6WyJOYXZ5IiwiTGlnaHRCbHVlIiwiV2hpdGUiXSwibmV1dHJhbHMiOlsiT2ZmV2hpdGUiLCJDYW1lbCJdLCJhY2NlbnRzIjpbIkxpZ2h0WWVsbG93IiwiTGlnaHRHcmVlbiIsIkxpZ2h0UGluayJdfSwicHJlZmVyZW5jZXMiOlsiU2tpcnRzIiwiRHJlc3NlcyIsIlBhbnRzIiwiU2hvcnRzUGFudHMiXX0=">here!</a>
        </p>
        <p className="fw5 tl">
          How it works:
        </p>
        <p className="fw4 tl ">
          A capsule wardrobe is “a mini wardrobe made up of really versatile pieces that you totally love to wear.” Each season, you clear your closet except for a set number of pieces to be in your capsule wardrobe. Your capsule collection is made up of a combination of items you already own and love to wear, as well as new, quality items that you can shop for once a season.
        </p>
      </div>
    </div>
  )
}
export default About;