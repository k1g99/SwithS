package com.teamk.swiths_api.user.service;

import com.teamk.swiths_api.club.repository.ClubEntity;
import com.teamk.swiths_api.club.repository.ClubRepository;
import com.teamk.swiths_api.user.controller.dto.CreateUserClub.*;
import com.teamk.swiths_api.user.repository.TimetableRepository;
import com.teamk.swiths_api.user.repository.UserClubRepository;
import com.teamk.swiths_api.user.repository.UserRepository;
import com.teamk.swiths_api.user.repository.entity.TimetableEntity;
import com.teamk.swiths_api.user.repository.entity.UserClubEntity;
import com.teamk.swiths_api.user.repository.entity.UserEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
@Service
@RequiredArgsConstructor
public class UserClubServiceImpl implements UserClubService{
    UserClubRepository userClubRepository;
    UserRepository userRepository;
    ClubRepository clubRepository;
    TimetableRepository timetableRepository;
    private static final int TIME_INTERVAL_MINUTES = 15;
    private static final LocalTime START_TIME = LocalTime.of(9, 0);
    private static int calculateBitPosition(LocalTime time) {
        int minutesSinceStart = (int) START_TIME.until(time, java.time.temporal.ChronoUnit.MINUTES);
        return minutesSinceStart / TIME_INTERVAL_MINUTES;
    }

    @Autowired
    public UserClubServiceImpl(UserRepository userRepository, TimetableRepository timetableRepository, UserClubRepository userClubRepository, ClubRepository clubRepository) {
        this.timetableRepository = timetableRepository;
        this.userRepository = userRepository;
        this.clubRepository = clubRepository;
        this.userClubRepository = userClubRepository;
    }
    @Override
    public List<Long> CompareClubTimetableBetweenUser(CreateUserClubRequest createUserClubRequest) {
        ClubEntity clubEntity = clubRepository.getById(createUserClubRequest.getClub());
        if(clubEntity == null){
            throw new RuntimeException("존재하지 않는 스터디입니다.");
        }
        UserEntity userEntity = userRepository.getById(createUserClubRequest.getUser());
        if(userEntity == null){
            throw new RuntimeException("존재하지 않는 스터디입니다.");
        }
        List<TimetableEntity> TimetableList = timetableRepository.findByUser(userEntity);
        List<Long> ClubTimetable = new ArrayList<>(List.of(
            clubEntity.getTimetableMon(),
            clubEntity.getTimetableTue(),
            clubEntity.getTimetableWed(),
            clubEntity.getTimetableThu(),
            clubEntity.getTimetableFri(),
            clubEntity.getTimetableSat(),
            clubEntity.getTimetableSun()
        ));

        for(TimetableEntity timetable : TimetableList){
            int dayIndex = timetable.getDay().ordinal();
            int startBit = calculateBitPosition(timetable.getStartTime());
            int endBit = calculateBitPosition(timetable.getEndTime());

            for (int i = startBit; i < endBit; i++) {
                ClubTimetable.set(dayIndex, ClubTimetable.get(dayIndex) | (1L << i));
            }
        }
        for(Long timetable : ClubTimetable){
            System.out.println(Long.toBinaryString(timetable));
        }

        return ClubTimetable;
    }
    @Override
    public UserClubEntity createUserClub(CreateUserClubRequest createUserClubRequest) {
        ClubEntity clubEntity = clubRepository.getById(createUserClubRequest.getClub());
        if(clubEntity == null){
            throw new RuntimeException("존재하지 않는 스터디입니다.");
        }
        UserEntity userEntity = userRepository.getById(createUserClubRequest.getUser());
        if(userEntity == null){
            throw new RuntimeException("존재하지 않는 스터디입니다.");
        }
        List<Long> ClubTimetable = CompareClubTimetableBetweenUser(createUserClubRequest);
        clubEntity.setTimetableMon(ClubTimetable.get(0));
        clubEntity.setTimetableTue(ClubTimetable.get(1));
        clubEntity.setTimetableWed(ClubTimetable.get(2));
        clubEntity.setTimetableThu(ClubTimetable.get(3));
        clubEntity.setTimetableFri(ClubTimetable.get(4));
        clubEntity.setTimetableSat(ClubTimetable.get(5));
        clubEntity.setTimetableSun(ClubTimetable.get(6));
        clubRepository.save(clubEntity);

        UserClubEntity userClubEntity = UserClubEntity.builder()
            .user(userEntity)
            .club(clubEntity)
            .build();
        userClubRepository.save(userClubEntity);

        return userClubEntity;
    }

    @Override
    public List<UserClubEntity> findByClub(Long club) {
        ClubEntity clubEntity = clubRepository.getById(club);
        if(clubEntity == null){
            throw new RuntimeException("존재하지 않는 스터디입니다.");
        }
        return userClubRepository.findByClub(clubEntity);
    }

    @Override
    public List<UserClubEntity> findByUser(Long user) {
        UserEntity userEntity = userRepository.getById(user);
        if(userEntity == null){
            throw new RuntimeException("존재하지 않는 스터디입니다.");
        }

        return userClubRepository.findByUser(userEntity);
    }


}
