package com.ssafy.wedding101.model.service;

import com.ssafy.wedding101.model.dto.InfoDto;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.Optional;

@Service
public interface InfoService {
    Optional<InfoDto> getInfo(Long infoSeq);
    Optional<InfoDto> getInfoByUserSeq(Long userSeq);

    void writeInfo(InfoDto infoDto);

    void removeInfo(InfoDto infoDto);

    void modifyInfo(InfoDto infoDto);

}
