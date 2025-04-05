import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Player = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="player">
        <div className="back">
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>
      </div>
    </Container>
  );
};

export default Player;

const Container = styled.div`
  .player {
    width: 100vw;
    height: 100vh;

    .back {
      position: absolute;
      padding: 2rem;
      z-index: 1;

      svg {
        font-size: 3rem;
        cursor: pointer;
      }
    }
  }
`;
