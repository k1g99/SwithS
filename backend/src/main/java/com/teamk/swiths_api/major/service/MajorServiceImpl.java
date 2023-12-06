package com.teamk.swiths_api.major.service;

import com.teamk.swiths_api.major.repository.MajorMapping;
import com.teamk.swiths_api.major.repository.MajorRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MajorServiceImpl implements MajorService {

    MajorRepository majorRepository;

    @Autowired
    public MajorServiceImpl(MajorRepository majorRepository) {
        this.majorRepository = majorRepository;
    }

    @Override
    public List<MajorMapping> findAllMajor() {
        return majorRepository.findAllBy();
    }
}
