import { SKILLS } from "../../consts/consts"
import Bar from "../Bar/Bar"
import Resposive from './../../assets/responsive-svgrepo-com.svg'
import Intuitive from './../../assets/idea-light-bulb-svgrepo-com.svg'
import { useState, useEffect, useRef } from "react"

const Skills = () => {

    const [isVisible, setIsVisible] = useState(false)
    const projectsRef = useRef(null)

    const checkVisibility = () => {
        const rect = projectsRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight && rect.bottom >= 0) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    };

    useEffect(() => {

        window.addEventListener("scroll", checkVisibility)
        window.addEventListener("resize", checkVisibility)

        checkVisibility()

        return () => {
            window.removeEventListener("scroll", checkVisibility)
            window.removeEventListener("resize", checkVisibility)
        }
    }, [])


    return (

        <div id="skills" ref={projectsRef} className={`transition-opacity duration-1000 ease-in-out my-40 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-center mb-20 text-3xl">Skills</h1>
            <div className="flex">
                <div className="w-2/6 ml-20 mt-20 flex flex-col">
                    <div className="flex justify-content items-center">
                        <div className="hexagon w-4/12">
                            <img className="ml-7 mt-2 w-3/6 invert brigthtness-0" src={Resposive} alt="Responsive" />
                        </div>
                        <div className="w-8/12">
                            <h2 className="text-gray-400 font-bold text-2xl">Responsive</h2>
                            <p>My layouts will work on any device, big or small.</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-content">
                        <div className="hexagon w-4/12">
                            <img className="ml-7 mt-2 w-3/6 invert brigthtness-0" src={Intuitive} alt="Intuitive" />
                        </div>
                        <div className="w-8/12">
                            <h2 className="text-gray-400 font-bold text-2xl">Intuitive</h2>
                            <p>Strong preference for easy to use, intuitive UX/UI.</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-content">
                        <div className="hexagon w-4/12">
                            <img className="ml-7 mt-2 w-3/6 invert brigthtness-0" src={Resposive} alt="Responsive" />
                        </div>
                        <div className="w-8/12">
                            <h2 className="text-gray-400 font-bold text-2xl">Responsive</h2>
                            <p>My layouts will work on any device, big or small.</p>
                        </div>
                    </div>
                </div>
                <div className="w-4/6 flex flex-col items-center">
                    {
                        SKILLS.map(elm => {
                            return (
                                <Bar name={elm.name} level={elm.level} />
                            )
                        })
                    }
                </div>
            </div>
        </div >
    )

}

export default Skills