import styled from 'styled-components';

export default styled.div `
    border: 6px solid #e8e5e5;
    border-radius: 50%;
    border-top: 6px solid #6b6767;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 0.5s linear infinite; /* Safari */
    animation: spin 0.5s linear infinite;

    /* Safari */
    @-webkit-keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
    }
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
`;