import React, { useState } from "react";
import Button from '../../../common/Button/Button';
import CustomModal from "../../../common/Modal";

const DownloadBrochure = ()=>{
  const [isShowModal, setIsShowModal] = useState(false)

  const isHideModal = () => {
    setIsShowModal(false);
  };

  const handleOpenBrochureModal = () => {
    setIsShowModal(true)
  };

  return(
    <section className="download_brochure_section">
      <Button className="btn btn_style4" onClick={handleOpenBrochureModal}>Download MVN ID Brochure</Button>


      <CustomModal hide={isHideModal} show={isShowModal} type="enquire" projectName="MVN Aeroone"  />
    </section>
  )
}

export default DownloadBrochure;