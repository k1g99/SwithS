package com.teamk.swiths_api.user.service;

import com.teamk.swiths_api.user.controller.dto.CreateTimetable.CreateTimetableRequest;
import com.teamk.swiths_api.user.repository.TimetableRepository;
import com.teamk.swiths_api.user.repository.UserRepository;
import com.teamk.swiths_api.user.repository.entity.Day;
import com.teamk.swiths_api.user.repository.entity.TimetableEntity;
import com.teamk.swiths_api.user.repository.entity.UserEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TimetableServiceImpl implements TimetableService {
    private UserRepository userRepository;
    private TimetableRepository timetableRepository;

    @Autowired
    public TimetableServiceImpl(UserRepository userRepository, TimetableRepository timetableRepository) {
        this.timetableRepository = timetableRepository;
        this.userRepository = userRepository;
    }

    @Override
    public List<TimetableEntity> getTimetableByUser(UserEntity user) {
        if (!timetableRepository.existsByUser(user)) {
            throw new RuntimeException("저장되어 있는 시간표가 없습니다.");
        }

        return timetableRepository.findByUser(user);
    }

    @Override
    public TimetableEntity createTimetable(CreateTimetableRequest createTimetableRequest) {
        UserEntity userEntity = userRepository.getById(createTimetableRequest.getUser());
        if (userEntity == null) {
            throw new RuntimeException("존재하지 않는 유저 입니다.");
        }
        TimetableEntity timetableEntity = TimetableEntity.builder()
                .user(userEntity)
                .day(Day.valueOf(createTimetableRequest.getDay()))
                .endTime(createTimetableRequest.getEndTime())
                .startTime(createTimetableRequest.getStartTime())
                .title(createTimetableRequest.getTitle())
                .build();
        timetableRepository.save(timetableEntity);
        return timetableEntity;
    }
}
