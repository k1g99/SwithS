package com.teamk.swiths_api.post.repository;

import com.teamk.swiths_api.post.vote.VoteEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VoteRepository extends JpaRepository<VoteEntity, Long> {
    boolean existsById(Long id);
    VoteEntity getById(Long id);
}
