package com.ssafy.wedding101.model.service.impl;

import com.ssafy.wedding101.model.dto.InvitationDto;
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

    @Override
    public Optional<InvitationDto> getInvitation(Long invitationSeq) {
        return Optional.empty();
    }

    @Override
    public void writeInvitation(InvitationDto invitationDto) {

    }

    @Override
    public void deleteInvitation(Long invitationSeq) {

    }

    @Override
    public void modifyInvitation(Long invitationSeq) {

    }
}
