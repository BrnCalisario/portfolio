import { PropsWithChildren } from "react"
import "./index.scss"




function RedSpan(props: PropsWithChildren) {
    return (
        <span className="text-red">
            {props.children}
        </span>
    )
}

function About() {
    return (
        <div id="about">
            <div className="texts">
                <div className="about-title">
                    <h2>SOBRE <span className="text-red">MIM</span></h2>
                </div>
                <div className="about-content">
                    <br></br>
                    <h4>Olá, me chamo <RedSpan>Bruno</RedSpan></h4>
                    <p>
                        Atuo como desenvolvedor de sistemas a 2 anos, atualmente estudo sobre
                        desenvolvimento <RedSpan>backend</RedSpan> focando em tecnologias
                        como C#, Docker, PostgreSQL.
                    </p>
                </div>
            </div>
            <div className="photo">
                <img src="https://placehold.co/400x400" />
            </div>
        </div>
    )
}

export default About