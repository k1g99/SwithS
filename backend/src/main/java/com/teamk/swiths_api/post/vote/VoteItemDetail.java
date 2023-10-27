package com.teamk.swiths_api.post.vote;

import com.teamk.swiths_api.user.User;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

public class VoteItemDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "vote_item_id", nullable = false)
    private Vote voteItem;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
}
