package com.teamk.swiths_api.user.service;

import com.teamk.swiths_api.user.controller.dto.CreateTimetable;
import com.teamk.swiths_api.user.repository.TimetableRepository;
import com.teamk.swiths_api.user.repository.UserRepository;
import com.teamk.swiths_api.user.repository.entity.TimetableEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TimetableServiceImpl implements TimetableService{
    private UserRepository userRepository;
    private TimetableRepository timetableRepository;

    public TimetableServiceImpl(UserRepository userRepository, TimetableRepository timetableRepository){
        this.timetableRepository = timetableRepository;
        this.userRepository = userRepository;
    }
    @Override
    public TimetableEntity getTimetableById() {
        return null;
    }

    @Override
    public TimetableEntity createTimetable(CreateTimetable.CreateTimetableRequest CreateTimetableRequest) {
        //TODO add existByid
        return null;
    }
}
