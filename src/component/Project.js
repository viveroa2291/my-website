import React from 'react'
import './CSS/Project.css';
function Project() {
    return (
        <div  className="project-body">
           <h1 className='project-header'>Here are some of my personal projects</h1>
           <div className='project-div'>
                <span className='project-span'>
                    <a className='project-h2' href='https://viveroa2291.github.io/Tic-Tac-Toe/'>Tic Tac Toe</a>
                    <hr className='project-hr'/>
                    <iframe title='tic tac toe game' className='projects' src="https://viveroa2291.github.io/Tic-Tac-Toe/"/>
                    <p>Languages Used:</p>
                    <hr/>
                    <img className="tech-stack" src='https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white' alt='HTML Icon'/>
                    <img className="tech-stack" src='https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white' alt='CSS Icon'/>                    
                    <img className="tech-stack" src='https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' alt='Javascript Icon'/>
                    <br/>
                    <img className="tech-stack" src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git-Icon"/>
                </span>
                <span className='project-span'>
                    <a className='project-h2' href='https://viveroa2291.github.io/Cancun/'>Cancun Mexican Grill</a>
                    <hr className='project-hr'/>
                    <iframe title='Cancun Mexican Grill Restaraunt' className='projects' src="https://viveroa2291.github.io/Cancun/"/>
                    <p>Languages Used:</p>
                    <hr/>
                    <img className="tech-stack" src='https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white' alt='HTML Icon'/>
                    <img className="tech-stack" src='https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white' alt='CSS Icon'/>                    
                    <img className="tech-stack" src='https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' alt='Javascript Icon'/>
                    <br/>
                    <img className="tech-stack" src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git-Icon"/>
                </span>
                <span className='project-span'>
                    <a className='project-h2' href='https://viveroa2291.github.io/Developer-Site/'>Developer Site</a>
                    <hr className='project-hr'/>
                    <iframe title='My Developer Website' className='projects' src="https://viveroa2291.github.io/Developer-Site/"/>
                    <p>Languages Used:</p>
                    <hr/>
                    <img className="tech-stack" src='https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white' alt='HTML Icon'/>
                    <img className="tech-stack" src='https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white' alt='CSS Icon'/>                    
                    <img className="tech-stack" src='https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' alt='Javascript Icon'/>
                    <br/>
                    <img className="tech-stack" src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git-Icon"/>
                </span>
           </div>
        </div>
    )
}
export default Project;