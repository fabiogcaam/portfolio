/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"

const Modal = ({ isVisible, onClose, project }) => {

    const [pic, setPic] = useState(0)

    useEffect(() => {
        console.log("Estamos dentro del modal", project)
    }, [pic])

    if (!isVisible) {
        return null
    }

    function beforePic() {
        if (pic == 0 && project.img) {
            setPic(project.img.length - 1)
        } else {
            setPic(pic - 1)
        }
    }

    function nextPic() {
        if (pic == project.img.length - 1 && project.img) {
            setPic(pic + 1)
        } else {
            setPic(0)
        }
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="h-auto w-4/6 m-auto mt-auto border-2 border-green-400 bg-white">
                <div className="flex justify-end mr-5 mt-5">
                    <button className="text-2xl mr-10 text-blue-900 hover:text-green-400 font-semibold" onClick={onClose}>X</button>
                </div>
                {
                    !project.img ? (
                        <picture className="w-full h-48">
                            <button onClick={beforePic} className="text-white bg-green-400 opacity-50">&lt;</button>
                            <img src={project.img[pic]} alt="" />
                            <button onClick={nextPic} className="text-white bg-green-400 opacity-50">&gt;</button>
                        </picture>
                    ) :
                        null
                }
                <div className="text-center mb-10 mx-5">
                    <h1 className="text-2xl pb-2 text-blue-900 uppercase font-semibold">{project.name}</h1>
                    <h3 className="text-lg pb-2 text-green-500">Stack: {project.technology}</h3>
                    <p>Esta es la descripción {project.description}</p>

                    {
                        project?.url &&
                        <div className="my-5">
                            <a href={project.url} className="bg-green-400 text-white py-2 px-4 rounded">Go to the project</a>
                        </div>
                    }
                    {project?.code && project.code.length == 1 &&
                        <div className="my-5">
                            <a href={project.code[0]} className="bg-blue-900 text-white py-2 px-4 rounded border-4 border-blue-900 hover:border-green-400">Code</a>
                        </div>}
                    {
                        project?.code && project.code.length === 2 &&
                        <div className="my-5">
                            <a href={project.code[0]} className="bg-blue-900 text-white mx-2 py-2 px-4 rounded border-4 border-blue-900 hover:border-green-400">Front-End Code</a>
                            <a href={project.code[1]} className="bg-blue-900 text-white mx-2 py-2 px-4 rounded border-4 border-blue-900 hover:border-green-400">Back-End Code</a>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Modal