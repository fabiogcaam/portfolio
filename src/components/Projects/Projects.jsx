import { PROJECTS } from "../../consts/consts"
import { useState, useEffect, useRef } from "react"
import Modal from "../Modal/Modal"

const Projects = () => {

    const [isModalOpen, setModalOpen] = useState(false)
    const [projectOpen, setProjectOpen] = useState(null)
    const [isVisible, setIsVisible] = useState(false)
    const projectsRef = useRef(null)

    const checkVisibility = () => {
        const rect = projectsRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight || document.documentElement.clientHeight

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

    useEffect(() => {
        openModal(projectOpen)
    }, [isModalOpen, projectOpen])

    function openModal(id) {
        setProjectOpen(id)
        console.log("Estamos viendo el id del proyecto:", projectOpen)
        if (projectOpen) {
            setModalOpen(true)
            console.log("Estoy intentando abrir el modal", isModalOpen, projectOpen)
        }
    }

    function closeModal() {
        setModalOpen(false)
        setProjectOpen(null)
    }

    if (isModalOpen && projectOpen === 0) {
        return null
    }


    return (
        <div id="projects" ref={projectsRef} className={`transition-opacity duration-1000 ease-in-out my-40 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-center text-3xl mb-24">My Projects</h1>
            <div className="grid grid-cols-3 gap-24 mx-24">
                {
                    PROJECTS.map(elm => {
                        return (
                            <div key={elm.id} className="border-2 border-green-400 rounded px-5 flex flex-col items-center">
                                <div className="py-3 flex-row items-center text-center">
                                    <h2 className="py-2 font-semibold">{elm.name}</h2>
                                    <p>{elm.description}</p>
                                </div>
                                <div className="my-3 py-2 bg-blue-900 px-3 rounded-lg hover:border-green-400 border-4 border-blue-900">
                                    <button onClick={() => openModal(elm)} className="text-white">More Info</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            {(projectOpen && isModalOpen) && (
                <Modal
                    isVisible={isModalOpen}
                    onClose={closeModal}
                    project={projectOpen}
                />
            )}
        </div>
    )

}

export default Projects