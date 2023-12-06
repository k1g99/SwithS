package com.teamk.swiths_api.major.repository.dto;

import com.teamk.swiths_api.major.repository.MajorEntity;
import com.teamk.swiths_api.major.repository.MajorMapping;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class FindAllMajorResponse {
    private int statusCode;
    private boolean isSuccess;
    private String message;
    private List<MajorMapping> majors;
}
