package com.party.member.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class MemberPostDto {
    @Email
    @NotBlank
    private String memberEmail;

    @NotBlank
    private String memberNickname;

    @NotBlank
    private String memberGender;

    @NotBlank
    private String memberPassword;
}
