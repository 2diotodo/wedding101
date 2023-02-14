import "./InvitationShared.css";

import InvitationForm from "../../components/WeddingInvitation/InvitationForm";
import { useState, useEffect } from "react";
import axios from "axios";

// API 통신부
const request = axios.create({
  baseURL: "http://wedding101.shop/api/",
});

const api = {
  wedding101: {
    findWeddingInfo: (invitationSeq) =>
      request.get(`/invitation/${invitationSeq}`),
  },
};

const InvitationShared = () => {
  const [weddingInfoData, setWeddingInfoData] = useState({
    infoSeq: 1,
    userSeq: 1,
    weddingDay: 1676193211000,
    weddingHallName: "theariel",
    weddingHallAddress: null,
    weddingHallNumber: null,
    groomName: "aaa",
    brideName: "bbb",
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

  const [invitationData, setInvitationData] = useState({
    templateHeader: "두 사람이 하나가 될 인생을 시작합니다.",
    templateFooter: "부디 걸음하시어 축복하여 주시면",
    templateEtc: "더없는 기쁨이 되겠습니다.",
  });

  useEffect(() => {
    const dataFetch = async () => {
      const data = await api.wedding101.findWeddingInfo(1);
      console.log(data.data);
      setWeddingInfoData(data.data.weddingInfoData);
      setInvitationData(data.data.invitationData);
    };
    dataFetch();
  }, []);

  return (
    <div className="invitationShared">
      <InvitationForm
        weddingInfoData={weddingInfoData}
        invitationData={invitationData}
      />
    </div>
  );
};

export default InvitationShared;
