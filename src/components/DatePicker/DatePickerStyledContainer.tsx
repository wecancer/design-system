import styled, {css} from 'styled-components'

export default styled.div`
  ${({theme}) => css`
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    border-radius: 1rem;
    background-color: ${theme.colors.inputBg};

    .rdp {
      &.rdp-multiple_months .rdp-caption_start .rdp-caption {
        & > h2 {
          order: 2;
        }

        & > .rdp-nav {
          order: 1;
        }
      }

      .rdp-caption_dropdowns {
        display: flex;
        justify-content: center;
        flex: 1;
      }

      .rdp-months {
        display: flex;

        .rdp-month {
          padding: 18px 24px;
        }

        .rdp-month:nth-child(2) {
          border-left: 1px solid rgba(0, 0, 0, 0.1);
        }
      }

      .rdp-dropdown_month {
        position: relative;

        &::after {
          content: '';
          position: absolute;
          bottom: 6px;
          right: 6px;

          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0 0 0.5rem 0.5rem;
          border-color: transparent transparent ${theme.colors.primary} transparent;
          box-shadow: 0px 1px 1px rgba(0, 14, 51, 0.05);
        }

        .rdp-caption_label {
          display: none;
        }

        .rdp-dropdown {
          font-size: 1.0625rem;
          font-weight: ${theme.font.weights.semiBold};
          border: none;
          appearance: none;
          padding: 0.625rem 0.75rem;
          border-radius: 0.375rem;
          text-align: center;
          background-color: ${theme.colors.offWhite};

          &:not(:last-child) {
            margin-right: 0.25rem;
          }
        }
      }

      .rdp-caption {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;

        .rdp-caption_label {
          font-weight: normal;
          font-size: 1rem;
        }

        .rdp-nav {
          display: flex;
        }

        .rdp-nav_button {
          width: 34px;
          height: 34px;
          appearance: none;
          padding: none;
          border: none;
          cursor: pointer;
          background-color: transparent;
          transition: all ease 250ms;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;

          svg {
            width: 12px;
            height: 12px;
          }

          &:hover {
            background-color: rgba(255, 255, 255, 0.5);
          }
        }
      }

      .rdp-vhidden {
        display: none;
      }

      .rdp-head_cell {
        font-size: 13px;
        text-transform: lowercase;
        color: ${theme.colors.label};
        font-weight: ${theme.font.weights.semiBold};
        padding-bottom: 8px;
      }

      .rdp-row .rdp-cell:not(:first-child) .rdp-day_range_end::before,
      .rdp-row .rdp-cell:not(:first-child) .rdp-day_range_middle::after {
        content: '';
        width: 4px;
        height: 34px;
        position: absolute;
        top: 1px;
        left: -3px;
        background-color: ${theme.colors.bgPrimary};
      }

      .rdp-cell {
        width: 38px;
        height: 34px;
        padding: 1px;
        position: relative;

        button {
          font-weight: ${theme.font.weights.semiBold};
          font-size: 14px;
          width: 100%;
          height: 100%;
          padding: 0;
          border-radius: 0.375rem;
          border: none;
          appearance: none;
          background-color: transparent;
          cursor: pointer;
        }

        .rdp-button.rdp-day:not(.rdp-day_outside):not(.rdp-day_range_middle) {
          background-color: ${theme.colors.offWhite};
          box-shadow: 0px 1px 1px rgba(0, 14, 51, 0.05);
          &.rdp-day_selected {
            background-color: ${theme.colors.primary};
            color: ${theme.colors.offWhite};
          }
        }

        .rdp-day_outside.rdp-day_selected.rdp-day {
          opacity: 0.5;
        }

        .rdp-day_selected.rdp-day.rdp-day_range_middle {
          color: ${theme.colors.primary};
          background-color: ${theme.colors.bgPrimary};
          border-radius: 0;
        }

        .rdp-day_outside {
          color: ${theme.colors.placeholder};
        }
      }
    }
  `}
`
