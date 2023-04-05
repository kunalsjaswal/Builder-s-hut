import styled from "styled-components";

export const AuraContainer = styled.div`
  section {
    position: absolute;
    width: 60%;
    height: 70%;
    margin-top: -4%;
    margin-left: 20%;

    img.common {
      position: absolute;
      width: 150px;
      height: 150px;
      transition: 0.5ms;
      border: 1px solid black;
    }

    .top-left {
      left: 20%;
      animation: top-chakara-anim 5s ease-in-out 0s infinite;
    }
    .top-right {
      right: 20%;
      animation: top-chakara-anim 5s ease-in-out 0s infinite;
    }
    @keyframes top-chakara-anim {
      0% {
        margin-top: 0%;
      }
      50% {
        margin-top: 2%;
      }
      100% {
        margin-top: 0%;
      }
    }
    .bottom-left {
      margin-top: 20%;
      left: 10%;
      animation: bottom-chakara-anim 5s ease-in-out 0s infinite;
    }
    .bottom-right {
      margin-top: 20%;
      right: 10%;
      animation: bottom-chakara-anim 5s ease-in-out 0s infinite;
    }
    @keyframes bottom-chakara-anim {
      0% {
        margin-top: 20%;
      }
      50% {
        margin-top: 22%;
      }
      100% {
        margin-top: 20%;
      }
    }
    .top-left:hover{
      width: 180px;
      height: 180px;
    }
  }
  

  

  .yoga-man {
    position: absolute;
    width: 40%;
    margin-left: 32%;
    margin-top: -2%;
    animation: yoga-anim 5s ease-in-out 0s infinite;
    filter: drop-shadow(0px 0px 5px #ffffff70);
  }
  @keyframes yoga-anim {
    0% {
      margin-top: -2%;
    }
    50% {
      margin-top: -1%;
    }
    100% {
      margin-top: -2%;
    }
  }

  @media (max-width: 1280px) {
    .yoga-man {
      width: 50%;
      margin-left: 27%;
    }
  }

  @media (max-width: 820px) {
    .yoga-man {
      width: 90%;
      margin-left: 6%;
      margin-top: 20%;
    }
    @keyframes yoga-anim {
      0% {
        margin-top: 20%;
      }
      50% {
        margin-top: 23%;
      }
      100% {
        margin-top: 20%;
      }
    }
  }

  @media (max-width: 520px) {
    .yoga-man {
      width: 98%;
      margin-left: 2%;
      margin-top: 20%;
    }
    @keyframes yoga-anim {
      0% {
        margin-top: 20%;
      }
      50% {
        margin-top: 23%;
      }
      100% {
        margin-top: 20%;
      }
    }
  }
`;
