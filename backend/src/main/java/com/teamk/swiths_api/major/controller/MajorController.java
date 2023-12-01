package com.teamk.swiths_api.major.controller;

import com.teamk.swiths_api.major.repository.MajorMapping;
import com.teamk.swiths_api.major.repository.dto.FindAllMajorResponse;
import com.teamk.swiths_api.major.service.MajorService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/major")
public class MajorController {

    private final MajorService majorService;

    @GetMapping()
    public FindAllMajorResponse findAllMajor() {
        List<MajorMapping> majorLists = majorService.findAllMajor();

        FindAllMajorResponse result = new FindAllMajorResponse(200, true, "모든 전공 조회에 성공하였습니다.", majorLists);
        return result;
    }
}
