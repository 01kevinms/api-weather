import styled from "styled-components";

export const Above = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
height: 100vh;

`

export const Container = styled.div`
flex-direction: column;
display: flex;
align-items: center;
justify-content: center;
border: 2px solid;
border-radius: 20px;
width: 500px;
height: 200px;

background: rgba(6, 17, 54, 0.5);
input{
    border-radius: 8px;
    position: relative;
    margin: 7px;
    height: 30px;
    width: 70%;
    &:hover{
        border: 2px rgba(0, 0, 0, 1);
    }
}
button{
    width: 50px;
    background: #44c5e6ff;
    border-radius: 7px;
    height: 30px;
    width: 50px;
&:hover{
    transform: scale(1.08);
}
cursor: pointer;
}
h1{
    top: -15%;
    margin-bottom: 15px;
}

`
export const Digit=styled.div`
position: relative;
left: -135px;
top: -17px;
`
export const Characters = styled.div`
gap: 50px;
display: flex;
justify-content: center;
align-items: center;
`
export const Pi = styled.p`
position: relative;
bottom: -25px;

`
export const Wind = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`
export const Imag = styled.img`
position: absolute;
z-index: -12;
filter: blur(4px);
transform: scale(1.2);
width: 100%;
height: 100%;
`
