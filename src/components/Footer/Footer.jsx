import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { SiGmail } from "react-icons/si"

const Footer = () => {

    return (
        <div className="bg-blue-900 h-48 flex justify-center items-center space-x-16">
            <a href="https://www.linkedin.com/in/fabiogarc/">
                <FaLinkedin className="h-8 w-8 text-white" />
            </a>
            <a href="https://github.com/fabiogcaam">
                <FaGithub className="h-8 w-8 text-white" />
            </a>
            <a href="">
                <SiGmail className="h-8 w-8 text-white" />
            </a>
        </div>
    )

}

export default Footer