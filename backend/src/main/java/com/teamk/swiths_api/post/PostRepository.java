package com.teamk.swiths_api.post;

import com.teamk.swiths_api.club.repository.ClubEntity;
import com.teamk.swiths_api.post.vote.VoteEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<PostEntity, Long> {
    PostEntity getById(Long id);
    boolean existsById(Long id);
    List<PostEntity> findByVoteIsNull();
    List<PostEntity> findByVoteIsNotNull();

}
