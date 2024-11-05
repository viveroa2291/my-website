import React from 'react'
import './CSS/Project.css';
import mappins from '../images/mappins.jpeg';
function Project() {
    return (
        <div  className="project-body">
           <h1 className='project-header'>Here are some of my personal projects</h1>
           <div className='project-div'>
                <span className='project-span'>
                    <a className='project-h2' href='https://viveroa2291.github.io/Tic-Tac-Toe/' title='My tic tac toe app'>Tic Tac Toe</a>
                    <hr className='project-hr'/>
                    <iframe title='tic tac toe game' className='projects' src="https://viveroa2291.github.io/Tic-Tac-Toe/"/>
                    <p>Technologies Used:</p>
                    <hr/>
                    <img className="tech-stack" src='https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white' alt='HTML Icon'/>
                    <img className="tech-stack" src='https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white' alt='CSS Icon'/>                    
                    <img className="tech-stack" src='https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' alt='Javascript Icon'/>
                    <br/>
                    <img className="tech-stack" src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git-Icon"/>
                </span>
                <span className='project-span'>
                    <a className='project-h2' href='https://viveroa2291.github.io/Cancun/' title='Cancun Mexican Grill website itself.'>Cancun Mexican Grill</a>
                    <hr className='project-hr'/>
                    <iframe title='Cancun Mexican Grill Restaraunt' className='projects' src="https://viveroa2291.github.io/Cancun/"/>
                    <p>Technologies Used:</p>
                    <hr/>
                    <img className="tech-stack" src='https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white' alt='HTML Icon'/>
                    <img className="tech-stack" src='https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white' alt='CSS Icon'/>                    
                    <img className="tech-stack" src='https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' alt='Javascript Icon'/>
                    <br/>
                    <img className="tech-stack" src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git-Icon"/>
                </span>
                <span className='project-span'>
                    <a className='project-h2' href='https://www.youtube.com/watch?v=tDRNQQE5oJo' title='A live demo of the app running.'>Mappins</a>
                    <hr className='project-hr'/>
                    <img className='mappins-image' src={mappins} alt='Mobile Application'/>
                    <p>Technologies Used:</p>
                    <hr/>
                    <img className="tech-stack" src='https://img.shields.io/badge/Kotlin-0095D5?style=for-the-badge&logo=kotlin&logoColor=white' alt='Kotlin Icon'/>
                    <img className="tech-stack" src='https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=fff' alt='Firebase Icon'/>                    
                    <br/>
                    <img className="tech-stack" src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git-Icon"/>
                </span> 
                <span className='project-span'>
                    <a className='project-h2' title='The developer website' href='https://viveroa2291.github.io/Developer-Site/'>Developer Site</a>
                    <hr className='project-hr'/>
                    <iframe title='My Developer Website' className='projects' src="https://viveroa2291.github.io/Developer-Site/"/>
                    <p>Technologies Used:</p>
                    <hr/>
                    <img className="tech-stack" src='https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white' alt='HTML Icon'/>
                    <img className="tech-stack" src='https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white' alt='CSS Icon'/>                    
                    <img className="tech-stack" src='https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' alt='Javascript Icon'/>
                    <br/>
                    <img className="tech-stack" src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git-Icon"/>
                </span>
                <span className='project-span'>
                    <a className='project-h2' title='My Linktree site' href='https://viveroa2291.github.io/adansLinkTree/'>Personalized LinkTree Site</a>
                    <hr className='project-hr'/>
                    <iframe title='My Developer Website' className='projects' src="https://viveroa2291.github.io/adansLinkTree/"/>
                    <p>Technologies Used:</p>
                    <hr/>
                    <img className="tech-stack" src='https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white' alt='HTML Icon'/>
                    <img className="tech-stack" src='https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white' alt='CSS Icon'/>                    
                    <img className="tech-stack" src='https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' alt='Javascript Icon'/>
                    <br/>
                    <img className="tech-stack" src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git-Icon"/>
                    <img className='tech-stack' src='https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white' alt="API Icon"/>
                </span>
           </div>
        </div>
    )
}
export default Project;