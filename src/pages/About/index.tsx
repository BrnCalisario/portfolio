import "./index.scss"


function About() {
    return (
        <div className="about">

            <div className="about-title">
                <h2>SOBRE <span className="text-red">MIM</span></h2>
            </div>
            <div className="about-content">
                <div className="red-square"></div>
                <p>Olá, me chamo <span className="text-red">Bruno</span></p>
                <p>
                    tenho 20 anos e sou um estudante de Desenvolvimento de Sistema na universidade Positivo. Eu atualmente desenvolvo soluções em React utilizando frameworks como NextJS e linguagens como
                    Typescript e Javascript, assim como diversas outras bibliotecas que constam nas minhas skills.
                </p>
            </div>
        </div>
    )
}

export default About