package com.ssafy.wedding101.model.service;

import com.ssafy.wedding101.model.dto.InvitationDto;
import com.ssafy.wedding101.model.entity.Invitation;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface InvitationService {
    Optional<InvitationDto> getInvitation(Long invitationSeq);

    void writeInvitation(InvitationDto invitationDto);

    void deleteInvitation(Long invitationSeq);

    void modifyInvitation(InvitationDto invitationDto);

    default Invitation toEntity(InvitationDto invitationDto) {
        return Invitation.builder()
                .invitationSeq(invitationDto.getInvitationSeq())
                .templateSeq(invitationDto.getTempateSeq())
                .photoUrl1(invitationDto.getPhotoUrl1())
                .photoUrl2(invitationDto.getPhotoUrl2())
                .templateHeader(invitationDto.getTemplateHeader())
                .templateFooter(invitationDto.getTemplateFooter())
                .templateEtc(invitationDto.getTemplateEtc())
                .build();
    }

    default InvitationDto toDto(Invitation invitation) {
        return InvitationDto.builder()
                .invitationSeq(invitation.getInvitationSeq())
                .infoSeq(invitation.getInfo().getInfoSeq())
                .userSeq(invitation.getInfo().getUser().getUserSeq())
                .tempateSeq(invitation.getTemplateSeq())
                .photoUrl1(invitation.getPhotoUrl1())
                .photoUrl2(invitation.getPhotoUrl2())
                .templateHeader(invitation.getTemplateHeader())
                .templateFooter(invitation.getTemplateFooter())
                .templateEtc(invitation.getTemplateEtc())
                .build();
    }
}
