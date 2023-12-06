package com.teamk.swiths_api.post.repository;

import com.teamk.swiths_api.post.vote.VoteEntity;
import com.teamk.swiths_api.post.vote.VoteItemDetailEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
@Repository
public interface VoteItemDetailRepository extends JpaRepository<VoteItemDetailEntity, Long> {
    boolean existsByVote(VoteEntity vote);
    List<VoteItemDetailEntity> findByVote(VoteEntity vote);
}
