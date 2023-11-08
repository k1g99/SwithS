package com.teamk.swiths_api.user.service;

import com.teamk.swiths_api.user.controller.dto.CreateTimetable.CreateTimetableRequest;
import com.teamk.swiths_api.user.repository.entity.TimetableEntity;

public interface TimetableService {
    TimetableEntity getTimetableById();

    TimetableEntity createTimetable(CreateTimetableRequest CreateTimetableRequest);
}
