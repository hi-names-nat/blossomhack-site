import SponsorPageNavbar from './SponsorPageNavbar';
import { Image } from "semantic-ui-react";
export default function SponsorPage() {
  
  
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  
  const images = importAll(
    require.context("../../images/sponsors", false, /\.(png|jpe?g|svg)$/)
  );
  
  return (
    <div id="sponsor-page">
      <SponsorPageNavbar/>
      {/* <img src="https://placekitten.com/g/200/200"/> */}
      {/* <img src = {require('../../images/sponsors/ai_futures.png')}/> */}
      <Image src={images["ai_futures.png"]}/>
        <p>
          This is a test
          </p>
      </div>
    
  );
  
}
