package com.ssafy.wedding101.model.service.impl;

import com.ssafy.wedding101.model.dto.InvitationDto;
import com.ssafy.wedding101.model.entity.Info;
import com.ssafy.wedding101.model.entity.Invitation;
import com.ssafy.wedding101.model.repository.InfoRepository;
import com.ssafy.wedding101.model.repository.InvitationRepository;
import com.ssafy.wedding101.model.service.InvitationService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class InvitationServiceImpl implements InvitationService {
    private final InvitationRepository invitationRepository;
    private final InfoRepository infoRepository;

    @Override
    public Optional<InvitationDto> getInvitation(Long invitationSeq) {
        return Optional.ofNullable(toDto(invitationRepository.findById(invitationSeq).orElseThrow()));
    }

    @Override
    public void writeInvitation(InvitationDto invitationDto) {
        Invitation invitation = toEntity(invitationDto);
        Info info = infoRepository.findByUserSeq(invitationDto.getUserSeq()).orElseThrow();
        invitation.setInfo(info);
        invitationRepository.save(invitation);
    }

    @Override
    public void deleteInvitation(Long invitationSeq) {
        Invitation invitation = invitationRepository.findById(invitationSeq).orElseThrow();
        invitation.updateIsValid();
    }

    @Override
    public void modifyInvitation(InvitationDto invitationDto) {
        Invitation invitation = invitationRepository.findById(invitationDto.getInvitationSeq()).orElseThrow();
        invitation.update(invitationDto.getTempateSeq(), invitationDto.getPhotoUrl1(), invitationDto.getPhotoUrl2(),
                invitationDto.getTemplateHeader(), invitationDto.getTemplateFooter(), invitationDto.getTemplateEtc());
    }
}
