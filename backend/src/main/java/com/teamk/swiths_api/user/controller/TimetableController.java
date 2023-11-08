package com.teamk.swiths_api.user.controller;

import com.teamk.swiths_api.user.controller.dto.CreateTimetable.CreateTimetableResponse;
import com.teamk.swiths_api.user.controller.dto.CreateTimetable.CreateTimetableRequest;
import com.teamk.swiths_api.user.repository.entity.TimetableEntity;
import com.teamk.swiths_api.user.service.TimetableService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/timetable")
public class TimetableController {
    private final TimetableService timetableService;

    @GetMapping()
    public TimetableEntity getTimetableById(){return timetableService.getTimetableById();}

    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public CreateTimetableResponse createTimetable(@RequestBody CreateTimetableRequest createTimetableRequest){
        timetableService.createTimetable(createTimetableRequest);

        CreateTimetableResponse result = new CreateTimetableResponse(200, true, "타임테이블 생성에 성공하셨습니다.");

        return result;
    }

}
