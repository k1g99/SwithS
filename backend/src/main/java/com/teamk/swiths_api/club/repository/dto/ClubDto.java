package com.teamk.swiths_api.club.repository.dto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.List;
@Builder
@Getter
@AllArgsConstructor
public class ClubDto {
    private Long clubId;
    private String clubName;
}
