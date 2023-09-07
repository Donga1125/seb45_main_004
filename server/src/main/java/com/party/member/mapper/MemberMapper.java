package com.party.member.mapper;

import com.party.board.mapper.ApplicantMapper;
import com.party.member.dto.MemberPatchDto;
import com.party.member.dto.MemberPostDto;
import com.party.member.dto.MemberResponseDto;
import com.party.member.entity.Member;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = ApplicantMapper.class)
public interface MemberMapper {
    Member memberPostDtoToMember(MemberPostDto memberPostDto);

    @Mapping(source = "applicants", target = "applicants")
    MemberResponseDto memberToMemberResponseDto(Member member);

    Member memberPatchDtoToMember(MemberPatchDto memberPatchDto);
}
