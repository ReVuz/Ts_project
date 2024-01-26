import styled from 'styled-components'

//Header.tsx 
export const NavbarWrapper = styled.div`
    .logo {
        color: #fff;
        font-size: 1.5rem;
        font-weight: 700;
    }
    .navLinks, .loginBtn{
        margin-left: auto;
    }
    margin-bottom: 100px;
`;

//DisplayItems.tsx
export const MovieShowsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    margin-top:5rem;
    padding: 10px;
    box-shadow: 0 5px 5px -5px rgba(0,0,0,0.5);

    .loadingOverlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0,0,0,0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #fff;
        z-index: 100;
        > p {
            font-size: 2rem;
            margin-top: 1rem;
        }
    }

    .movieHeading {
        width: 100%;
        > h1 {
            margin-bottom: 1.5rem;
        }
    }

    .movieCard{
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-wrap: wrap;

        .movie{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            .moivieImage {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                cursor: pointer;
            }
        }
    }
`;