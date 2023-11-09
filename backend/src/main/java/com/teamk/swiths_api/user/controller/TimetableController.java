package com.teamk.swiths_api.user.controller;

import com.teamk.swiths_api.crawling.everytime;
import com.teamk.swiths_api.crawling.everytime.everytimeComponent;
import com.teamk.swiths_api.user.controller.dto.CreateTimetable.CreateTimetableResponse;
import com.teamk.swiths_api.user.controller.dto.CreateTimetable.CreateTimetableRequest;
import com.teamk.swiths_api.user.controller.dto.FindTimetable.FindTimetableResponse;
import com.teamk.swiths_api.user.repository.entity.TimetableEntity;
import com.teamk.swiths_api.user.repository.entity.UserEntity;
import com.teamk.swiths_api.user.service.TimetableService;
import com.teamk.swiths_api.user.service.UserService;

import jakarta.websocket.server.PathParam;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/timetable")
public class TimetableController {
    private final TimetableService timetableService;
    private final UserService userService;

    @GetMapping("/{user}")
    public FindTimetableResponse getTimetableByUser(@PathVariable Long user){
        UserEntity userInfo = userService.getUserById(user);

        List<TimetableEntity> timetableLists = timetableService.getTimetableByUser(userInfo);

        FindTimetableResponse result = new FindTimetableResponse(200, true, "시간표 조회에 성공하였습니다.", timetableLists);

        return result;
    }

    @PostMapping("/{user}")
    @ResponseStatus(HttpStatus.CREATED)
    public CreateTimetableResponse createTimetable(@RequestBody CreateTimetableRequest createTimetableRequest, @PathVariable Long user){
        createTimetableRequest.setUser(user);
        timetableService.createTimetable(createTimetableRequest);

        CreateTimetableResponse result = new CreateTimetableResponse(200, true, "타임테이블 생성에 성공하셨습니다.");

        return result;
    }

    @PostMapping("/{user}/everytime")
    @ResponseStatus(HttpStatus.CREATED)
    public CreateTimetableResponse createTimetableByEverytime(@RequestParam String url, @PathVariable Long user){
        everytime ev = new everytime(url);
        List<everytimeComponent> everytimeLists = ev.run();
        for(everytimeComponent everytimeList : everytimeLists){
            CreateTimetableRequest createTimetableRequest = new CreateTimetableRequest();
            createTimetableRequest.setUser(user);
            createTimetableRequest.setDay(everytimeList.getDay());
            createTimetableRequest.setTitle(everytimeList.getName());
            createTimetableRequest.setStartTime(everytimeList.getStartTime());
            createTimetableRequest.setEndTime(everytimeList.getEndTime());
            timetableService.createTimetable(createTimetableRequest);
        }

        CreateTimetableResponse result = new CreateTimetableResponse(200, true, "타임테이블 생성에 성공하셨습니다.");
        return result;
    }

}
