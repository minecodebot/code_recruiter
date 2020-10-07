import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  max-height: calc(100vh - 120px);
`

export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  > div {
    margin: 10px;
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1 0 47%; /* explanation below */
  }
`
