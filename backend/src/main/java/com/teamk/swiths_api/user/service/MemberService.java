package com.teamk.swiths_api.user.service;

public class MemberService {
    private static final String AUTH_CODE_PREFIX = "AuthCode ";

    private final MemberRepository memberRepository;

    private final MailService mailService;

    private final RedisService redisService;
}
