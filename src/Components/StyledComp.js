import styled from "styled-components";

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.color};
    animation: ${props => props.theme.keyFrame} 2s forwards;
  `;

export const CategoryBtn = styled.button`
    border-bottom: 3px solid ${props => props.theme.color.currentColor};
    animation: ${props => props.theme.borderKeyFrame} 2s forwards;
  `;

export const SocialBtn = styled.a`
    color: ${props => props.theme.color};
    animation: ${props => props.theme.keyFrame} 2s forwards;
  `;

export const NewQuoteBtn = styled.button`
    background-color: ${props => props.theme.color};
    animation: ${props => props.theme.keyFrame} 2s forwards;
  `;

export const Quote = styled.h1`
    color: ${props => props.theme.color};
    animation: ${props => props.theme.keyFrame} 2s forwards;
  `;

export const Author = styled.p`
    color: ${props => props.theme.color};
    animation: ${props => props.theme.keyFrame} 2s forwards;
  `;