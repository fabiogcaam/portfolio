import perfil from "./../../assets/perfil.jpg"
import Background from "./../../assets/intersecting-waves-scattered.svg"

const About = () => {

    return (
        <div className='bg-no-repeat h-screen bg-cover bg-center' style={{ backgroundImage: `url(${Background})` }} >
            <div id="about" className='flex mx-48 pt-40 space-x-24 justify-center'>
                <div className="mt-12 w-4/6">
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-900 via-green-700 to-green-400 bg-clip-text text-transparent">Hi, I'm Fabio García Caamaño</h1>
                    <h3 className="text-xl font-medium my-3">I'm a FullStack Developer</h3>
                    <p>
                        Passionate about web development focusing mostly on FrontEnd, specializing in <strong className="bg-gradient-to-r from-blue-900 to-green-700 bg-clip-text text-transparent">React</strong> and <strong className="bg-gradient-to-r from-blue-900 to-green-700 bg-clip-text text-transparent">JS.</strong>
                    </p>
                    <p>
                        I'm eager to improve my practices as a developer and in solving problems, which thanks to my desire to learn new things and my adaptability allow me to do it in a creative and personalized way.
                    </p>
                </div>
                <div className="w-2/6">
                    <img className="h-80 w-80 rounded-full object-cover" src={perfil} alt="" />
                </div>
            </div>
        </div >
    )

}

export default About