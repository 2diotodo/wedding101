// 청첩장 프로세스4: 모바일 청첩장 생성완료
// 1-3단계에서 sessionStorage에 저장한 photo, text를 전송
import "./InvitationProcess02.css";

import { useState } from "react";
import { useNavigate } from "react-router";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Button } from "@mui/material/";
import InvitationForm from "../../components/WeddingInvitation/InvitationForm";
import ProgressBar from "../../components/common/ProgressBar";
import axios from "axios";

const InvitationProcess04 = () => {
  const [invitationForm, setInvitationForm] = useState({
    invitationSeq: "",
    infoSeq: "",
    userSeq: "",
    templateSeq: "",
    photoUrl01: "",
    photoUrl02: "",
    templateHeader: "",
    templateFooter: "",
    templateEtc: "",
    createdAt: "",
    updatedAt: "",
    isValid: "",
  });

  const [data, setData] = useState({
    weddingInfoData: {
      groomName: "김성환",
      brideName: "권영진",
      weddingDay: "2023-02-17",
      weddingHallName: "아펠가모",
    },
    invitationData: {
      templateHeader: "초대합니다",
      templateFooter: "감사합니다",
      templateEtc: "돈많이주세요",
    },
  });

  const submitHandler = async (e) => {
    // sessionStorage to invitationForm
    alert("제출되었습니다.");
    setInvitationForm.invitationSeq();
    setInvitationForm.templateSeq();
    setInvitationForm.photoUrl01(sessionStorage.getItem("photoUrl01"));
    setInvitationForm.photoUrl02(sessionStorage.getItem("photoUrl02"));
    setInvitationForm.templateHeader(sessionStorage.getItem("textInput01"));
    setInvitationForm.templateFooter(sessionStorage.getItem("textInput02"));
    setInvitationForm.templateEtc(sessionStorage.getItem("textInput03"));
    setInvitationForm.createdAt(new Date());
    setInvitationForm.updatedAt(new Date());
    setInvitationForm.isValid(false);

    // axios 통신
    await axios
      .post("http://localhost:8080/", {
        data: invitationForm,
      })
      .then((res) => {})
      .catch();
  };

  const navigate = useNavigate();
  const toProcess02 = () => {
    navigate("/invitation02");
  };

  return (
    <div className="process04">
      <Grid2 container spacing={3}>
        <Grid2 lg={3} sm={2}>
          <h1>Mobile Invitation</h1>
        </Grid2>
        <Grid2 lg={8} sm={10}>
          <div className="process-main">
            <ProgressBar
              steps={["step1", "step2", "step3", "step4"]}
              activeStep={3}
            />
            <h2>모바일 청첩장이 생성되었습니다.</h2>
            <div>
              <InvitationForm data={data} />
            </div>
            <form onSubmit={submitHandler}>
              <div className="buttons">
                <Button variant="contained" onClick={() => navigate(-1)}>
                  이전
                </Button>
              </div>
              <div className="buttons">
                <Button variant="contained" type="submit">
                  완료
                </Button>
              </div>
            </form>
          </div>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default InvitationProcess04;
