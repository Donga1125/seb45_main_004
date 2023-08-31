package com.party.board.dto;

import com.party.board.entity.Board;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class BoardDto {

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Post{

        @NotBlank
        private String title;

        @NotBlank
        private String date;

        @NotBlank
        private String body;

        @NotBlank
        private String category;

        private String latitude;

        private String longitude;

        private String address;

        @NotNull
        private int person;

        private int money;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class ResponsePost extends Post {
        private long boardId;
        private String latitude;
        private String longitude;

        public ResponsePost(Board createdBoard) {
            super();
            this.boardId = createdBoard.getId();
            this.latitude = createdBoard.getLatitude();
            this.longitude = createdBoard.getLongitude();
        }
    }
}
