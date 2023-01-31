package com.ssafy.wedding101.model.service.impl;

import com.ssafy.wedding101.model.dto.UserDto;
import com.ssafy.wedding101.model.entity.User;
import com.ssafy.wedding101.model.repository.UserRepository;
import com.ssafy.wedding101.model.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public Optional<UserDto> getUser(Long userSeq) {
        return Optional.ofNullable(toDto(userRepository.findById(userSeq).orElseThrow()));
    }

    @Override
    public Optional<UserDto> getUser(String userId) {
        return Optional.ofNullable(toDto(userRepository.findByUserId(userId).orElseThrow()));
    }

    @Override
    public List<UserDto> getAllUser() {
        return userRepository.findAll().stream().map(this::toDto).collect(Collectors.toList());
    }

    @Override
    public void writeUser(UserDto userDto) {
        userRepository.save(toEntity(userDto));
    }

    @Override
    public void removeUser(UserDto userDto) {
        User user = userRepository.findById(userDto.getUserSeq()).orElseThrow();
        user.updateIsValid();
//        userRepository.save(usear);
    }

    @Override
    public boolean checkNicknameDuplicate(String userNickname) {
        return userRepository.existsByUserNickname(userNickname);
    }

    @Override
    public boolean checkIdDuplicate(String userId) {
        return userRepository.existsByUserId(userId);
    }

    @Override
    public boolean checkEmailDuplicate(String userEmail) {
        return userRepository.existsByUserEmail(userEmail);
    }

    @Override
    public void modifyUser(UserDto userDto) {
        User user = userRepository.findById(userDto.getUserSeq()).orElseThrow();
        System.out.println(userDto.toString());
        user.updateUser(userDto.getUserId(),
                userDto.getUserPassword(),
                userDto.getUserName(),
                userDto.getUserNickname(),
                userDto.getUserEmail());
//        userRepository.save(user);
    }
}
