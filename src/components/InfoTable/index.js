import React from 'react';
import styled from 'styled-components';

const TableWrapper = styled.div`
  table {
    width: 100%;
    height: 100%;
    overflow: auto;
    overflow-x: hidden;

    thead {
      tr {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: 5px;
        padding: 10px 20px 0;

        th {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          flex: 1 1 0%;
          overflow: hidden;
            
          &:first-child {
            align-items: flex-start;
            justify-content: flex-start;
            max-width: 200px;
          }

          .header-column {
            font-weight: 400;
            position: relative;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            text-align: center;
          }
        }
      }
    }

    tbody {
      tr {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 2px;
        transition: all 0.2s ease 0s;
        border-bottom: 1px solid rgb(241, 241, 243);
        background: ${props => props.theme.color.bgWhite};
        color: ${props => props.theme.color.textPrimary};

        td {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          flex: 1 1 0%;
          overflow: hidden;
          font-size: 14px;
          padding: 10px 20px;

          &:first-child {
            align-items: flex-start;
            justify-content: flex-start;
            max-width: 200px;

            img {
              margin-right: 10px;
            }
          }

          .value-col-section {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .value-section {
            font-size: 14px;
            display: flex;
          }

          .value {
            font-size: 14px;
            font-weight: 600;

            &.yellow {
              color: ${props => props.theme.color.yellow}
            }

            &.blue {
              color: ${props => props.theme.color.blue}
            }

            &.pink {
              color: ${props => props.theme.color.pink}
            }
          }
        }
      }

      a:hover {
        text-decoration: none;
      }
    }
  }
`;
 
function BasicTable({children}) {
  return (
    <TableWrapper>
      {children}
    </TableWrapper>
  )
}

export default BasicTable;
