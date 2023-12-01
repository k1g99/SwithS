package com.teamk.swiths_api.post.repository;

import com.teamk.swiths_api.post.vote.VoteEntity;
import com.teamk.swiths_api.post.vote.VoteItemEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface VoteItemRepository extends JpaRepository<VoteItemEntity, Long> {
    boolean existsByVote (VoteEntity vote);
    List<VoteItemEntity> findByVote (VoteEntity vote);
}
