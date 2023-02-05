package com.ssafy.wedding101.model.service;

import com.ssafy.wedding101.model.dto.InvitationDto;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface InvitationService {
    Optional<InvitationDto> getInvitation(Long invitationSeq);

    void writeInvitation(InvitationDto invitationDto);

    
}
