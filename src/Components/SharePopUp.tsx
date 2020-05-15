import React from "react";

interface IProps {
  setclickOnShare: any
}

const SharePopUp = ({ setclickOnShare }: IProps) => {
  const url = window.location.toString();
  const whatsappUrl = "https://api.whatsapp.com/send?text=" + url;

  return (
    <div className="ba bg-black-10 w-100 mw7-l pa4 br4 tc mt3 ">
      <div className="style mt0 mb3-ns">
        <span className="mt0 f2 pointer:hover" onClick={() => setclickOnShare(false)}>&times;    </span>

        <div>
          <div data-href={url}><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A2000%2F%23%2FeyJzZWFzb24iOiJTcHJpbmdTdW1tZXIiLCJzdHlsZSI6IkNhc3VhbCIsIm51bWJlck9mT3V0Zml0cyI6IkZyb20xODF0bzE5MCIsImNvbG9ycyI6eyJtYWlucyI6WyJOYXZ5IiwiV2hpdGUiLCJMaWdodEJsdWUiXSwibmV1dHJhbHMiOlsiT2ZmV2hpdGUiLCJCZWlnZSJdLCJhY2NlbnRzIjpbIkxpZ2h0R3JlZW4iLCJMaWdodFllbGxvdyIsIkxpZ2h0UGluayIsIlJlZCJdfSwicHJlZmVyZW5jZXMiOlsiU2tpcnRzIiwiRHJlc3NlcyIsIlBhbnRzIiwiTGVnZ2luZ3NQYW50cyJdfQ%3D%3D&amp;src=sdkpreparse">Facebook</a></div>
          <div><a href={whatsappUrl} target="_blank">WhatsApp</a></div>

        </div>

      </div>
    </div>
  );
}

export default SharePopUp;