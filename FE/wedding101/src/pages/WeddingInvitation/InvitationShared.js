import "./InvitationShared.css";

import InvitationForm from "../../components/WeddingInvitation/InvitationForm";
import { useState, useEffect } from "react";
import axios from "axios";

// API 통신부
const request = axios.create({
  baseURL: "http://i8a101.p.ssafy.io:8085",
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
    templateHeader: "초대합니다",
    templateFooter: "감사합니다",
    templateEtc: "돈많이주세요",
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
    <div className="invitationForm">
      <InvitationForm
        weddingInfoData={weddingInfoData}
        invitationData={invitationData}
      />
    </div>
  );
};

export default InvitationShared;
