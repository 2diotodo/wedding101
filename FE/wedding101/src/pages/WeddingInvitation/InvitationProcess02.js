// 청첩장 프로세스2: 사진 업로드
import "./InvitationProcess02.css";

import { useNavigate } from "react-router";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Button, IconButton } from "@mui/material/";
import UploadIcon from "@mui/icons-material/Upload";
import axios from "axios";
import ProgressBar from "../../components/common/ProgressBar";
import InvitationForm from "../../components/WeddingInvitation/InvitationForm";
import { useState, useEffect } from "react";
import useUploadMedia from "../../modules/useUploadMedia";

// API 통신부
const request = axios.create({
  baseURL: "http://i8a101.p.ssafy.io:8085",
});

const api = {
  wedding101: {
    findWeddingInfo: (userSeq) =>
      request.get("/Info", { params: { userSeq: userSeq } }),
  },
};

const InvitationProcess02 = () => {
  const [weddingInfoData, setWeddingInfoData] = useState({
    infoSeq: 1,
    userSeq: 1,
    weddingDay: 1676193211000,
    weddingHallName: "theariel",
    weddingHallAddress: null,
    weddingHallNumber: null,
    groomName: "lsh",
    brideName: "kwj",
    groomPhoneNumber: "010-0000-0000",
    bridePhoneNumber: "010-1111-1111",
    groomAccountNumber: null,
    groomAccountBank: null,
    groomAccountName: null,
    brideAccountNumber: null,
    brideAccountBank: null,
    brideAccountName: null,
    groomRelation: null,
    brideRelation: null,
    groomFatherName: null,
    groomMotherName: null,
    brideFatherName: null,
    brideMotherName: null,
    groomFatherIsAlive: true,
    groomMotherIsAlive: true,
    brideFatherIsAlive: true,
    brideMotherIsAlive: true,
  });

  useEffect(() => {
    const dataFetch = async () => {
      const res = await api.wedding101.findWeddingInfo(1);

      //   console.log(res.data.data);
      setWeddingInfoData(res.data.data);
    };
    dataFetch();
    console.log(weddingInfoData);
  }, []);

  const [form, setForm] = useState({
    photoUrl01: "",
    photoUrl02: "",
  });

  const [invitationData, setInvitationData] = useState({
    templateHeader: "초대합니다",
    templateFooter: "감사합니다",
    templateEtc: "돈많이주세요",
  });

  const { filePreview, fileImageHandler, deleteFileImage, onFileUpload } =
    useUploadMedia(form.photoUrl01);

  const handleChange = (e) => {
    const newForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(newForm);
    console.log("changed");
  };
  const navigate = useNavigate();
  const toProcess03 = () => {
    sessionStorage.setItem("photoUrl01", form.photoUrl01);
    sessionStorage.setItem("photoUrl02", form.photoUrl02);
    navigate("/invitation03");
  };

  return (
    <div>
      <Grid2 container spacing={3}>
        <Grid2 lg={3} sm={2}>
          <h1>Mobile Invitation</h1>
        </Grid2>
        <Grid2 lg={9} sm={10}>
          <div className="process-main">
            <ProgressBar
              steps={["step1", "step2", "step3", "step4"]}
              activeStep={1}
            />
            <h2>모바일 청첩장 사진 넣기</h2>
            <div className="inner-content">
              <div className="invitation-item">
                <InvitationForm
                  weddingInfoData={weddingInfoData}
                  invitationData={invitationData}
                />
              </div>
              <div className="input-container">
                <div className="upload-input">
                  <div className="upload01">
                    <IconButton aria-label="upload picture" component="label">
                      <input
                        hidden
                        type="file"
                        accept="image/*, video/*"
                        onChange={fileImageHandler}
                      />
                      <UploadIcon fontSize="large" />
                    </IconButton>
                    <Button onClick={deleteFileImage}>삭제</Button>
                  </div>
                  <br />
                  <div className="upload02">
                    <IconButton aria-label="upload picture" component="label">
                      <input
                        hidden
                        type="file"
                        accept="image/*, video/*"
                        onChange={fileImageHandler}
                      />
                      <UploadIcon fontSize="large" />
                    </IconButton>
                    <Button onClick={deleteFileImage}>삭제</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="buttons">
              <Button variant="contained" onClick={() => navigate(-1)}>
                이전
              </Button>
            </div>
            <div className="buttons">
              <Button variant="contained" onClick={toProcess03}>
                다음
              </Button>
            </div>
          </div>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default InvitationProcess02;
