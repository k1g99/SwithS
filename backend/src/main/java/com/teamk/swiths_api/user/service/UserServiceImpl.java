package com.teamk.swiths_api.user.service;

import com.teamk.swiths_api.global.MajorEntity;
import com.teamk.swiths_api.global.MajorRepository;
import com.teamk.swiths_api.user.controller.dto.CreateUser.CreateUserRequest;
import com.teamk.swiths_api.user.repository.UserRepository;
import com.teamk.swiths_api.user.repository.entity.Statement;
import com.teamk.swiths_api.user.repository.entity.UserEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;
    private MajorRepository majorRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, MajorRepository majorRepository) {
        this.userRepository = userRepository;
        this.majorRepository = majorRepository;
    }
//    @Override
//    public UserEntity getUserById() {
//        return null;
//    }

    @Override
    public UserEntity createUser(CreateUserRequest createUserRequest) {
        createUserRequest.setAdmin(false); // 새로 생성되는 user는 항상 admin이 아님

        // 이메일 중복 확인
        if (userRepository.existsByEmail(createUserRequest.getEmail())) {
            throw new RuntimeException("이미 가입된 이메일입니다.");
        }

        // 도메인 확인
        // TODO: 골뱅이 뒤에 SKKU 확인하는 것 -> 현재는 DB에 안들어가게만 처리해놓음


        // 학번 중복 확인
        if (userRepository.existsByStudentId(createUserRequest.getStudentId())) {
            throw new RuntimeException("이미 존재하는 학번입니다.");
        }

        // Major DB 에서 FK값으로 가져오기
        MajorEntity majorEntity = majorRepository.findByName(createUserRequest.getMajor());
        if (majorEntity == null) {
            throw new RuntimeException("존재하지 않는 전공입니다.");
        }

        // db에 저장
        UserEntity userEntity = UserEntity.builder()
            .email(createUserRequest.getEmail())
            .name(createUserRequest.getName())
            .admin(createUserRequest.getAdmin())
            .password(createUserRequest.getPassword())
            .studentId(createUserRequest.getStudentId())
            .major(majorEntity)
            .department(createUserRequest.getDepartment())
            .statement(Statement.valueOf(createUserRequest.getStatement()))
            .build();
        userRepository.save(userEntity);
        return userEntity;
    }

    @Override
    public UserEntity getUserById() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getUserById'");
    }
}
