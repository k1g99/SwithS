package com.teamk.swiths_api.user.service;

import com.teamk.swiths_api.user.controller.dto.CreateTimetable.CreateTimetableRequest;
import com.teamk.swiths_api.user.repository.entity.TimetableEntity;

import java.util.List;

public interface TimetableService {
    List<TimetableEntity> getTimetableByUser(Long user);
    TimetableEntity createTimetable(CreateTimetableRequest CreateTimetableRequest);
}
