import React from "react";
import { ReactComponent as FacebookIcon } from '../Svg/facebook.svg';
import { ReactComponent as WhatsAppIcon } from '../Svg/whatsapp.svg';
import { ReactComponent as MailIcon } from '../Svg/mail.svg';
import { ReactComponent as CopyIcon } from '../Svg/copy.svg';

interface IProps {
  setclickOnShare: any
}

const SharePopUp = ({ setclickOnShare }: IProps) => {
  const url = window.location.toString();
  const facebook = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url) + "&src=sdkpreparse"
  const whatsappUrl = "https://api.whatsapp.com/send?text=" + encodeURIComponent(url);
  const mailurl = "mailto:?subject=Check%20out%20my%20Personalized%20Capsule%20Wardrobe!&body=Capsule%20Wardrobe:%20" + url;

  return (
    <div className="ba bg-black-10 mw-100-m pa2 br4 tc mt3">
      <div className="p2">
        <div className="mb2 flx content-end" ><span className="mt0 f1 pointer:hover" onClick={() => setclickOnShare(false)}>&times;    </span></div>

        <div className="inline-flex mb2" >
          <div data-href={url}><a target="_blank" href={facebook}><FacebookIcon className="mh2" style={{ height: "50px", width: "50px" }} /></a></div>
          <div><a href={whatsappUrl} target="_blank"><WhatsAppIcon className="mh2" style={{ height: "50px", width: "50px" }} /></a></div>
          <div><a href={mailurl} target="_blank"><MailIcon className="mh2" style={{ height: "50px", width: "50px" }} /></a></div>
          <div><a onClick={() => { navigator.clipboard.writeText(window.location.toString()) }} target="_blank"><CopyIcon className="mh2 pointer:hover" style={{ height: "50px", width: "50px" }} /></a></div>
        </div>

      </div>
    </div>
  );
}

export default SharePopUp;