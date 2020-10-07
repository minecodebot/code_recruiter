import styled, { css } from 'styled-components'
import { FcOk, FcHighPriority, FcSynchronize } from 'react-icons/fc'

export const Container = styled.div`
  padding-bottom: 12px;

  > div {
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 600;
    padding: 8px 12px 16px;

    .title {
      color: var(--color-light);
      margin-bottom: 10px;
    }
    ul {
      list-style: none;
      margin-top: 8px;

      li {
        display: flex;
        align-items: center;

        .bullet {
          display: inline-flex;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--color-light);
        }
        .news {
          display: flex;
          // flex-direction: column;
          margin-left: 10px;

          .head {
            font-size: 14px;
            font-weight: 600;
            // color: var(--color-black);
          }
          .subtext {
            font-size: 12px;
            // color: var(--color-gray);
          }
        }

        & + li {
          margin-top: 10px;
        }
      }
    }
  }
`

export const Row = styled.div`
  justify-content: space-between !important;
  display: flex !important;
  align-items: center !important;
  width: 100% !important;

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

const iconCSS = css`
  width: 24px;
  height: 24px;
  margin-right: 4px;
`

export const SuccessIcon = styled(FcOk)`
  ${iconCSS}
`

export const FailIcon = styled(FcHighPriority)`
  ${iconCSS}
`

export const EvaluationIcon = styled(FcSynchronize)`
  ${iconCSS}
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  > h3 {
    cursor: pointer;
    color: var(--color-light);
  }
`
