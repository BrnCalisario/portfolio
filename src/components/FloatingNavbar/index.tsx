import { useEffect, useState } from 'react'
import styled from "styled-components"
import "./style.scss"

interface FloatingNavProps {
    visible?: any,
}

const FloatingNav = styled("div") <FloatingNavProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;  
    border: 1px solid var(--red);
    border-left: 0;
    border-right: 0;
    opacity: ${(props: FloatingNavProps) => (props.visible ? '1' : '0')};
    transition: opacity 0.3s ease-in-out;
`

function FloatingNavbar() {

    const [isVisible, setVisible] = useState<boolean>(false);

    useEffect(() => {

        setVisible(window.scrollY > 600)

        const handleScroll = () => {
            const scrollTop = window.scrollY

            let condition = scrollTop > 600

            setVisible(condition);
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    }, [])


    return (
        <FloatingNav visible={isVisible ? +true : +false}>
            <div className='floating-nav'>
                <h3>Home</h3>
                <h3>Sobre mim</h3>
                <h3>Projetos</h3>
                <h3>Contato</h3>
            </div>
        </FloatingNav>
    )
}

export default FloatingNavbar