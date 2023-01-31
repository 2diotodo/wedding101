package com.ssafy.wedding101.model.service.impl;

import com.ssafy.wedding101.model.dto.InfoDto;
import com.ssafy.wedding101.model.repository.InfoRepository;
import com.ssafy.wedding101.model.service.InfoService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class InfoServiceImpl implements InfoService {
    private final InfoRepository infoRepository;

    @Override
    public Optional<InfoDto> getInfo(Long infoSeq) {
        return Optional.ofNullable(toDto(infoRepository.findById(infoSeq).orElseThrow()));
    }

    @Override
    public Optional<InfoDto> getInfoByUserSeq(Long userSeq) {
        return Optional.empty();
    }

    @Override
    public void writeInfo(InfoDto infoDto) {

    }

    @Override
    public void removeInfo(InfoDto infoDto) {

    }

    @Override
    public void modifyInfo(InfoDto infoDto) {

    }
}
