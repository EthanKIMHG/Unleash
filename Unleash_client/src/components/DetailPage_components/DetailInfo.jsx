import React, {useState, useEffect} from "react";
import { romaDummy, newYorkDummy, sydneyDummy, osakaDummy, parisDummy } from "../MarketPlace_components/MarketplaceDummy";

const DetailInfo = (props) => {
  //Ethers 이용해 TX 보내기.
  const {nft} = props;
  console.log(nft)
  const handleButtonClick = () => {

  }
  const [destination, setDestination] = useState({});

  useEffect(() => {
    if (nft[0].to === "ITM") return setDestination(osakaDummy); // 뒷정리함수.
    if (nft[0].to === "JFK") return setDestination(newYorkDummy);
    if (nft[0].to === "CDG") return setDestination(parisDummy);
    if (nft[0].to === "SYD") return setDestination(sydneyDummy);
    if (nft[0].to === "FCO") return setDestination(romaDummy);
  }, [])
    
  

  return (
    <>
      <div className="detailpage_container_info">
        <div className="detailpage_personal_info">
          <span>{destination.city} TokenID: {nft[0].token_id}</span>
          <span>owned by airlines</span>
          <button type="button" onClick={handleButtonClick} >Buy</button>
        </div>
        <div className="detailpage_price">
          <div className="detail_top" >
            <span>Price</span>
          </div>
          <div className="detailpage_price_eth">
            <span>{nft[0].nftvoucher.price} ETH</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailInfo;
