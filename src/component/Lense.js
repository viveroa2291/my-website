import React, {useState} from 'react';
import badger from '../snapchat-lenses/badger.svg';
import hoosier from '../snapchat-lenses/hoosier.svg';
import prospect from '../snapchat-lenses/prospect.svg';
import sami from '../snapchat-lenses/sami.svg';
import uwec from '../snapchat-lenses/uwec.svg';
import mizzou from '../snapchat-lenses/mizzou.svg';
import northwestern from '../snapchat-lenses/northwestern.svg';
import niu from '../snapchat-lenses/niu.svg';
import isu from '../snapchat-lenses/isu.svg';
import npu from '../snapchat-lenses/npu.svg';
import edinburgh from '../snapchat-lenses/edinburgh.svg';
import illinois from '../snapchat-lenses/illinois.svg';
import dayton from '../snapchat-lenses/dayton.svg';
import hersey from '../snapchat-lenses/hersey.svg';
import whitewater from '../snapchat-lenses/whitewater.svg';
import xavier from '../snapchat-lenses/xavier.svg';
import uic from '../snapchat-lenses/uic.svg';
import ohio from '../snapchat-lenses/ohio.svg';
import minnesota from '../snapchat-lenses/minnesota.svg';
import bear from '../snapchat-lenses/bear.svg';
import lop from '../snapchat-lenses/lifeofpablo.svg';
import yeezus from '../snapchat-lenses/yeezus.svg';
import collegedropout from '../snapchat-lenses/college-dropout.svg';
import mbdtf from '../snapchat-lenses/mbdtf.svg';
import late from '../snapchat-lenses/late-registration.svg';
import ksg from '../snapchat-lenses/ksg.svg';
import ye from '../snapchat-lenses/ye.svg';
import fullsend from '../snapchat-lenses/full-send.svg';
import happydad from "../snapchat-lenses/happy-dad.svg";
import wwe from '../snapchat-lenses/wwe.svg';
import arizona from '../snapchat-lenses/arizona.svg';
import usa from '../snapchat-lenses/usa.svg';
import germany from '../snapchat-lenses/germany.svg';
import mexico from '../snapchat-lenses/mexico.svg';
import india from '../snapchat-lenses/india.svg';
import poland from '../snapchat-lenses/poland.svg';
import ukraine from '../snapchat-lenses/ukraine.svg';
import greece from '../snapchat-lenses/greece.svg';
import ireland from '../snapchat-lenses/ireland.svg';
import saudi from '../snapchat-lenses/saudi.svg';
import russia from '../snapchat-lenses/russia.svg';
import './CSS/Snapchat-Embedding.css';
// import {Collapse} from 'react-bootstrap';
import Badgers from './SnapchatEmbeds/badgers';
import Sami from './SnapchatEmbeds/sami';
import Indiana from './SnapchatEmbeds/indiana';
import Prospect from './SnapchatEmbeds/prospect';
import UWEC from './SnapchatEmbeds/uwec';
import Mizzou from './SnapchatEmbeds/mizzou';
import Chiefs from '../snapchat-lenses/chiefs.svg';
import CSS from '../snapchat-lenses/css.svg';
import Java from '../snapchat-lenses/java.svg';
import Niners from '../snapchat-lenses/niners.svg';
import Puppy from '../snapchat-lenses/puppy.svg';
import Sahyc from '../snapchat-lenses/sahyc.svg';
import ufc from '../snapchat-lenses/ufc.svg';
import pepe from '../snapchat-lenses/pepe.svg';
import './CSS/Snapchat.css';
function Lense (){
const[selectedOption, setSelectedOption] = useState('all');
const [previewLense, setPreviewLense] = useState(false);

    const togglePreview = () => {
      setPreviewLense(!previewLense);
    };
    const handleSelectLense = (event) => {
      setSelectedOption(event.target.value);
    };
    return(
        <div className='lense-div'>
            <h2 className='lense-header'>Snapchat Lenses</h2>
            <hr className='snapchat-hr'/>
            <p className='lense-header'>Here are my Snapchat lenses</p>
          <select onChange={handleSelectLense} className='options'>
            <option value="all">All</option>
            <option value="college">College</option>
            <option value="high-school">High School</option>
            <option value="kanye">Kanye</option>
            <option value="brand">Brands</option>
            <option value="country">Countries</option>
            <option value="nfl">NFL</option>
            <option value="programming">Programming Languages</option>
            <option value="other">Other</option>
          </select>
           <div className='snapchat-lenses'>

              <span  className={`snap-code ${selectedOption === 'all' || selectedOption === 'college'?'visible':'hidden'}`}>
                <img className='lenses' src={badger} alt="Badger" title='Badger Hat Lense. (Click me)' onClick={togglePreview}/>
                <a className='lense-link' href='https://www.snapchat.com/lens/25765196f6f7451284c212f8267d4a16?type=SNAPCODE&metadata=01'>Wisconsin Badgers Hat</a> 
                {previewLense && <Badgers/>}
              </span>
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'other'?'visible':'hidden'}`}>
                <img className='lenses' src={sami} alt='Sami' title='Samis Birthday Crown Lense' onClick={togglePreview}/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=3f3b83e64d7a4b1e9b06e9c2e27b4ecc&metadata=01'>Sami's Birthday Crown</a>    
                {previewLense && <Sami/>}
              </span>
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'college'?'visible':'hidden'}`}>
                <img className='lenses' src={hoosier} alt='Hoosier' title='Hoosier Hat Lense' onClick={togglePreview}/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=c87bbf617ea84322abe17eaf7d96be3a&metadata=01'>Indiana Hoosier Hat</a>  
                {previewLense && <Indiana/>}
              </span>
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'high-school'?'visible':'hidden'}`}>
                <img className='lenses' src={prospect} alt="Prospect" title='Prospect High School Hat Lense' onClick={togglePreview}/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=a43f71255a884f9198adc6f2a66dfdb7&metadata=01'>Prospect Knights Hat</a>  
                {previewLense && <Prospect/>}
              </span>
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'college'?'visible':'hidden'}`}>
                <img className='lenses' src={uwec} alt='UWEC' title='University of Wisconsin - Eau Claire Hat Lense' onClick={togglePreview}/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=9e3e2ca11741485cb6d4edc502f24a03&metadata=01'>UWEC Hat</a>
                {previewLense && <UWEC/>}
              </span>
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'college'?'visible':'hidden'}`}>
                <img className='lenses' src={mizzou} alt='Mizzou' title='University of Missouri Hat Lense' onClick={togglePreview}/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=7e58cc67ada749fe8000fb3c3c5a9b30&metadata=01'>Mizzou Hat</a>
                {previewLense && <Mizzou/>}
              </span>
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'college'?'visible':'hidden'}`}>
                <img className='lenses' src={northwestern} alt='Northwestern' title='Northwestern University Hat Lense'/>
                <a className='lense-link' href="https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=dc42b76120a4462b86f1118f4ccb44f1&metadata=01">Northwestern Hat</a>
              </span>
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'college'?'visible':'hidden'}`}>
                <img className='lenses' src={niu} alt="Northern Illinois University" title='Northern Illinois University Hat Lense'/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=f069714dfe4d4c0097712310413165f8&metadata=01'>Northern Illinois University Hat</a>
              </span>
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'college'?'visible':'hidden'}`}>
                <img className='lenses' src={isu} alt="Illinois State University" title='Illinois State University Hat Lense'/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=0d1c9a88891f4c318f19b6cb4516e228&metadata=01'>Illinois State University Hat</a>
              </span>
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'college'?'visible':'hidden'}`}>
                <img className='lenses' src={npu} alt="North Park University" title='North Park University Hat Lense'/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=16559c3fbdab4b3ca76cf1654b13c69f&metadata=01'>North Park University Hat</a>
              </span>
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'college'?'visible':'hidden'}`}>
                <img className='lenses' src={edinburgh} alt="University of Edinburgh" title='University of Edinburgh Hat Lense'/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=44c16227e1a04971a4e60395414abb91&metadata=01'>University of Edinburgh Hat</a>
              </span>
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'college'?'visible':'hidden'}`}>
                <img className='lenses' src={illinois} alt="University of Illinois" title='University of Illinois Hat Lense'/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=0c62205101ab454ea1db6d2406f65ba0&metadata=01'>University of Illinois Hat</a>
              </span>
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'college'?'visible':'hidden'}`}> 
                <img className='lenses' src={dayton} alt='University of Dayton' title='University of Dayton Hat Lense'/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=6840c3926e71493fa632e2babe497cfa&metadata=01'>University of Dayton Hat</a>
              </span>
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'high-school'?'visible':'hidden'}`}> 
                <img className='lenses' src={hersey} alt='John Hersey High School' title='John Hersey High School Hat Lense'/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=983f25767aed43f19a12ad3869a5ebfe&metadata=01'>John Hersey Hat</a>
              </span>
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'college'?'visible':'hidden'}`}> 
                <img className='lenses' src={whitewater} alt="Whitewater" title='University of Wisconsin - Whitewater Hat Lense'/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=de64fae7aec44b9b81eb6ef063315b17&metadata=01'>University of Wisconsin - Whitewater Hat</a>
              </span>
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'college'?'visible':'hidden'}`}> 
                <img className='lenses' src={xavier} alt='Xavier' title='Xavier University Hat Lense'/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=243f0f514974486bb427326395c13a36&metadata=01'>Xavier University Hat</a>
              </span>
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'college'?'visible':'hidden'}`}> 
                <img className='lenses' src={uic} alt='UIC' title='University of Illinois at Chicago Hat Lense'/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=6411b577d78e4e84a081061952fd8e9a&metadata=01'>UIC Hat</a>
              </span>
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'college'?'visible':'hidden'}`}> 
                <img className='lenses' src={ohio} alt='Ohio State' title='Ohio State University Hat Lense'/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=782e604579df46e5bcb90806c2cf2ead&metadata=01'>Ohio State University Hat</a>
              </span>
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'college'?'visible':'hidden'}`}> 
                <img className='lenses' src={minnesota} alt='University of Minnesota' title='University of Minnesota Hat Lense'/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=c3672ee982a54ec9ac86404ec6e71787&metadata=01'>University of Minnesota Hat</a>
              </span>
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'kanye'?'visible':'hidden'}`}>
                <img className='lenses' src={bear} alt='Graduation bear' title='Graduation Bear Hat Lense'/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=0ca61f5d5f454bd6872575d1e25abe5a&metadata=01'>Kanye West Graduation Hat</a>
              </span>
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'kanye'?'visible':'hidden'}`}>
                <img className='lenses' src={lop} alt='Life of Pablo' title='The Life of Pablo album Hat Lense'/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=ca1135ae6c46485b9e5ebb7188042cba&metadata=01'>Life of Pablo Hat</a>
              </span>
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'kanye'?'visible':'hidden'}`}>
                <img className='lenses' src={yeezus} alt='Yeezus' title='Yeezus Hat Lense'/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=3aaff9ce79a14c29a66430fd02b4f259&metadata=01'>Yeezus Hat</a>
              </span>
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'kanye'?'visible':'hidden'}`}>
                <img className='lenses' src={collegedropout} alt='College Dropout' title='College Dropout Hat Lense'/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=9bb0b40ee55f4e0cb4bf4825772b105b&metadata=01'>College Dropout Hat</a>
              </span>
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'kanye'?'visible':'hidden'}`}>
                <img className='lenses' src={mbdtf} alt='My Beautiful Dark Twisted Fantasy' title='My Beautiful Dark Twisted Fantasy Hat Lense'/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=b1ae5c22fb884083a6a050368775116d&metadata=01'>MBDTF Hat</a>
              </span>
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'kanye'?'visible':'hidden'}`}>
                <img className='lenses' src={late} alt='Late Registration' title='Late Registration Hat Lense'/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=a824af2bd6f94c98a5e6f8d2758afbb7&metadata=01'>Late Registration Hat</a>
              </span>
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'kanye'?'visible':'hidden'}`}>
                <img className='lenses' src={ksg} alt='Kids See Ghosts' title='Kids See Ghosts Hat Lense'/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=7538d27556d6415a9ce94d9a0ece5849&metadata=01'>Kids See Ghosts Hat</a>
              </span>
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'kanye'?'visible':'hidden'}`}>
                <img className='lenses' src={ye} alt='Ye' title='Ye Album Cover Hat Lense'/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=f9fe340378c04c91862de6b5ca58e991&metadata=01'>Ye Hat</a>
              </span>
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'brand'?'visible':'hidden'}`}>
                <img className='lenses' src={fullsend} alt='Full Send' title='Nelk Full Send Hat Lense'/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=0ade7c50fbf14bbf894080cb3612d3ae&metadata=01'>Full Send Hat</a>
              </span>
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'brand'?'visible':'hidden'}`}>
                <img className='lenses' src={happydad} alt="Happy Dad" title='Happy Dad Hat Lense'/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=aa3f4287eae14aad9511f6b79881effa&metadata=01'>Happy Dad Hat</a>  
              </span>
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'brand'?'visible':'hidden'}`}>
                <img className='lenses' src={wwe} alt='WWE' title='WWE Hat Lense'/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=1e4ab74821a64c09a5b65182f760a888&metadata=01'>WWE Hat</a>
              </span>
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'college'?'visible':'hidden'}`}> 
                <img className='lenses' src={arizona} alt='Arizona State University' title='Arizona State University Hat Lense'/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=3e0e562cb2fb415f8fb82918a74f20a4&metadata=01'>Arizona State University Hat</a>
              </span>
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'country'?'visible':'hidden'}`}> 
                <img className='lenses' src={usa} alt="USA" title='USA Hat Lense'/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=c962e90c97584247b15a6b29e80ce749&metadata=01'>USA Hat</a>
              </span>
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'country'?'visible':'hidden'}`}> 
                <img className='lenses' src={germany} alt="Germany" title='Germany Hat Lense'/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=e739f64edff54f66aa9f5b0ac81bf519&metadata=01'>Germany Hat</a>
              </span>
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'country'?'visible':'hidden'}`}> 
                <img className='lenses' src={mexico} alt="Mexico" title='Mexico Hat Lense'/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=3a58a485c5de490695fdce117e6714fc&metadata=01'>Mexico Hat</a>
              </span>
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'country'?'visible':'hidden'}`}> 
                <img className='lenses' src={india} alt="India" title='India Hat Lense'/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=d39557a7f27c4544bfbc2d634e0fde96&metadata=01'>India Hat</a> 
              </span>
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'country'?'visible':'hidden'}`}> 
                <img className='lenses' src={poland} alt="Poland" title='Poland Hat Lense'/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=979e12b627d04d6da168e3bd46deda03&metadata=01'>Poland Hat</a>
              </span>
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'country'?'visible':'hidden'}`}> 
                <img className='lenses' src={ukraine} alt='Ukraine' title='Ukraine Hat Lense'/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=c1a080be5ccf44b4878b36aad6f2b1fd&metadata=01'>Ukraine Hat</a>
              </span>
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'country'?'visible':'hidden'}`}> 
                <img className='lenses' src={greece} alt='Greece' title='Greece Hat Lense'/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=81e811492567442d84c9aac582e8053c&metadata=01'>Greece Hat</a>
              </span>
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'country'?'visible':'hidden'}`}> 
                <img className='lenses' src={ireland} alt='Ireland' title='Ireland Hat Lense'/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=1aa896d81d5f4f27b894d62b657e6c35&metadata=01'>Ireland Hat</a>
              </span>
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'country'?'visible':'hidden'}`}> 
                <img className='lenses' src={saudi} alt='Saudi Arabia' title='Saudi Arabia Hat Lense'/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=7e9317a193da46a0a5bdb3337d1879f5&metadata=01'>Saudi Arabia Hat</a>
              </span>
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'country'?'visible':'hidden'}`}> 
                <img className='lenses' src={russia} alt='Russia' title='Russia Hat Lense'/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=89ed228af2984555b8bad80b1f7a6185&metadata=01'>Russia Hat</a>
              </span>
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'nfl'?'visible':'hidden'}`}> 
                <img className='lenses' src={Chiefs} alt='Chiefs' title='Kansas City Chiefs Hat Lense'/>
                <a className='lense-link' href='https://www.snapchat.com/lens/6661e11a84c74e32a11eb693640d9710?type=SNAPCODE&metadata=01'>Kansas City Chiefs Hat</a>
              </span>  
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'programming'?'visible':'hidden'}`}> 
                <img className='lenses' src={CSS} alt='CSS' title='Cascade Styling Sheets Hat Lense'/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=e6c7a2ad882148f39558237c76d1fa27&metadata=01'>Cascade Styling Sheet Hat</a>
              </span>   
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'programming'?'visible':'hidden'}`}> 
                <img className='lenses' src={Java} alt='Java' title='Java Hat Lense'/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=7de0a63072ba4a27a4755cd808a59069&metadata=01'>Java Hat</a>
              </span>  
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'nfl'?'visible':'hidden'}`}> 
                <img className='lenses' src={Niners} alt='San Fransisco 49ers' title='49ers Lense'/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=51776309eb174146a0f1a8c257dd62ca&metadata=01'>San Francisco 49ers Hat</a>
              </span>   
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'other'?'visible':'hidden'}`}> 
                <img className='lenses' src={Puppy} alt='Puppy Eyes' title='Puppy Eyes Lense'/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=42a09f0081e54ff985941c8048362859&metadata=01'>Puppy Eyes</a>
              </span>    
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'other'?'visible':'hidden'}`}> 
                <img className='lenses' src={Sahyc} alt='Sahyc' title='Sahyc Filter Lense'/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=038229e91bb64f82a428d1b09a98b556&metadata=01'>Sahyc Filter Lense</a>
              </span>      
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'brand'?'visible':'hidden'}`}> 
                <img className='lenses' src={ufc} alt='UFC' title='UFC Lense'/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=5fd9deeec8fe4f8eb8d4e15fc59ba974&metadata=01'>UFC Hat</a>
              </span>  
              <span className={`snap-code ${selectedOption === 'all' || selectedOption === 'other'?'visible':'hidden'}`}> 
                <img className='lenses' src={pepe} alt='UFC' title='Pepe Fist Lense'/>
                <a className='lense-link' href='https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=de28144201ba491ab708076790711403&metadata=01'>Pepe's Fist</a>
              </span>    
          </div> 
        </div>
    )
}
export default Lense;