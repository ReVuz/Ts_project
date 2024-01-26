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
            transition: all 0.4s ease-in-out;

            .movieImage {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                cursor: pointer;

                > img {
                    border-radius: 10px;
                    border-bottom-right-radius: 25px;
                    box-shadow: 1px 1px 10px #000;
                    padding: 5px;
                    height: 200px;
                }

                > span {
                    border:none;
                    height: 35px;
                    width: 35px;
                    border-radius: 360px;
                    background-color: #f76429;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    aligh-self: center;
                    color: #fff;
                    padding: 5px;
                    font-size: 15px;
                    position: relative;
                    bottom: 20px;
                }
            }
            &:hover {
                transform: scale(1.04);
            }
        }
        .movieInfo {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 0;
            position: relative;
            bottom: 10px;

            > h4{
                margin-bottom: 0;
                width: 230px;
                text-align: center;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            > p {
                margin: 8px 0;
                color: gray;
                border-bottom: 1px solid gray;
            }
        }
    }

    .button{
        text-align: center;
        border: none;
    }
`;
