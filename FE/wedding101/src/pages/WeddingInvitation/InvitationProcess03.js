// 청첩장 프로세스3: 문구 변경
import "./InvitationProcess03.css";

import { useNavigate } from "react-router";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { TextField, Button } from "@mui/material/";
import ProgressBar from "../../components/common/ProgressBar";
import InvitationForm from "../../components/WeddingInvitation/InvitationForm";
import { useState } from "react";
// import UploadText from '../../components/WeddingInvitation/UploadText';

const InvitationProcess03 = () => {
  const [form, setForm] = useState({
    templateHeader: "",
    templateFooter: "",
    templateEtc: "",
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

  const onChange = (e) => {
    const newForm = {
      ...form,
      [e.target.name]: e.target.value,
    };

    setForm(newForm);
    console.log("form", form);
    const newData = {
      ...data,
      invitationData: {
        templateHeader: data.invitationData.templateHeader,
        templateFooter: data.invitationData.templateFooter,
        templateEtc: data.invitationData.templateEtc,
        [e.target.name]: e.target.value,
      },
    };
    setData(newData);
    console.log("data", data);
  };

  const navigate = useNavigate();
  const toProcess04 = () => {
    sessionStorage.setItem("templateHeader", form.templateHeader);
    sessionStorage.setItem("templateFooter", form.templateFooter);
    sessionStorage.setItem("templateEtc", form.templateEtc);

    navigate("/invitation04");
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
              activeStep={2}
            />
            <h2>모바일 청첩장 문구 변경</h2>
            <div className="text-form">
              <div className="invitation-form">
                <InvitationForm data={data} />
              </div>
              <div className="upload-text">
                <div>
                  <TextField
                    id="templateHeader"
                    name="templateHeader"
                    type="text"
                    label="문구를 입력하세요"
                    variant="outlined"
                    value={form.templateHeader}
                    onChange={onChange}
                  />{" "}
                  <br /> <br />
                  <TextField
                    id="templateFooter"
                    name="templateFooter"
                    type="text"
                    label="문구를 입력하세요"
                    variant="outlined"
                    value={form.templateFooter}
                    onChange={onChange}
                  />{" "}
                  <br /> <br />
                  <TextField
                    id="templateEtc"
                    name="templateEtc"
                    type="text"
                    label="문구를 입력하세요"
                    variant="outlined"
                    value={form.templateEtc}
                    onChange={onChange}
                  />{" "}
                  <br /> <br />
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
            <Button variant="contained" onClick={toProcess04}>
              다음
            </Button>
          </div>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default InvitationProcess03;
