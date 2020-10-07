import styled from 'styled-components';

export const Container = styled.div`
  height:100vh;
  @media (min-width: 1180px) {
    width: calc(100vh - 300px);
  }
  
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  max-height: calc(100vh - 120px)
`;
