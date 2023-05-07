import styled from "styled-components";
import { Keyframe } from "./Keyframe";

export const Container = styled.div`
display: flex;
align-items: center;
justify-content:center;
margin-bottom: 60px;
`

export const Dot = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 20px;
  border: 10px solid #00838f;
  border-top: 10px solid #356859;
  border-radius: 50%;
  animation: ${Keyframe} 1.5s linear infinite;
`;


 