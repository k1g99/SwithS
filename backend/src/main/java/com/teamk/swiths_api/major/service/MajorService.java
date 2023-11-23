package com.teamk.swiths_api.major.service;

import com.teamk.swiths_api.major.repository.MajorMapping;
import java.util.List;

public interface MajorService {
    List<MajorMapping> findAllMajor();

}
