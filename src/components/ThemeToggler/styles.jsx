import styled from "styled-components";

export const Toggler = styled.div`
    .label {
        width: 50px;
        height: 26px;
        background: #111;
        display: flex;
        border-radius: 50px;
        align-items: center;
        justify-content: space-between;
        padding: 5px;
        position: relative;
        cursor: pointer;
    }

    #checkbox {
        opacity: 0;
        position: absolute;
    }

    
    .icon-moon {
        color: #f1c40f;
    }

    .icon-sun  {
        color: #f39c12;
    }
    
    .ball {
        width: 22px;
        height: 22px;
        background: #fff;
        position: absolute;
        top: 2px;
        left: 2px;
        border-radius: 50%;
        transition: transform 200ms linear;
    }

    #checkbox:checked + .label .ball {
        transform: translateX(24px);
    }

`