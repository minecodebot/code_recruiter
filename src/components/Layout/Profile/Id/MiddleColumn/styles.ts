import styled from 'styled-components'

export const Container = styled.div`
  @media (min-width: 1180px) {
    width: calc(100vh - 300px);
  }

  height: 100vh;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  max-height: calc(100vh - 120px);
`

export const Row = styled.div`
  &.actions {
    justify-content: space-between;

    @media (min-width: 1180px) {
      justify-content: flex-start;
    }

    button {
      background: none;
      border: none;
      outline: none;
      // color: var(--color-gray);
      font-size: 14px;
      font-weight: 600;

      display: flex;
      align-items: center;
      padding: 14px 8px;

      cursor: pointer;
      &:hover,
      &:focus {
        background: rgba(0, 0, 0, 0.05);
      }

      span {
        display: none;

        @media (min-width: 1180px) {
          display: unset;
        }
      }
    }
  }
`
