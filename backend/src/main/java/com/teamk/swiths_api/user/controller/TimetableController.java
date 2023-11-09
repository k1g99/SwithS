package com.teamk.swiths_api.user.controller;

import com.teamk.swiths_api.user.controller.dto.CreateTimetable.CreateTimetableResponse;
import com.teamk.swiths_api.user.controller.dto.CreateTimetable.CreateTimetableRequest;
import com.teamk.swiths_api.user.controller.dto.FindTimetable.FindTimetableResponse;
import com.teamk.swiths_api.user.repository.entity.TimetableEntity;
import com.teamk.swiths_api.user.service.TimetableService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/timetable")
public class TimetableController {
    private final TimetableService timetableService;

    @GetMapping("/{user}")
    public FindTimetableResponse getTimetableByUser(@PathVariable Long user){
        List<TimetableEntity> timetableLists = timetableService.getTimetableByUser(user);

        FindTimetableResponse result = new FindTimetableResponse(200, true, "시간표 조회에 성공하였습니다.", timetableLists);

        return result;
    }

    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public CreateTimetableResponse createTimetable(@RequestBody CreateTimetableRequest createTimetableRequest){
        timetableService.createTimetable(createTimetableRequest);

        CreateTimetableResponse result = new CreateTimetableResponse(200, true, "타임테이블 생성에 성공하셨습니다.");

        return result;
    }

}
