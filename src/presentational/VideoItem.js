import {useState} from 'react';
import Dropdown from '../container/Dropdown';
import axios from 'axios';

const VideoItem = ({videoElement, onVideoSelect, videoTitle}) => {
  const langOptions = [
    {
      label: "Urdu", 
      value: "ur"
    },

    {
      label: "Japanese",
      value: "ja"
    },

    {
      label: "Spanish",
      value: "es"
    }
  ]
  //STATE INSTANTIATION
  const [selectedLang, setSelectedLang] = useState(langOptions[0].value);
  const [translatedTitle, setTranslatedTitle] = useState(videoElement.snippet.title);
  
  const onLanguageSelect = async (languageValue) => {
    const response = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
      params: {
        q: videoTitle,
        target: languageValue,
        key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
      }
    })
    setTranslatedTitle(response.data.data.translations[0].translatedText)
  }

  return (
    <div id="row" className="w-48">
      <ul className=" m-8 divide-y divide-gray-200">
        <li onClick={() => onVideoSelect(videoElement)} className="py-6 cursor-pointer">
            <img src={videoElement.snippet.thumbnails.default.url} alt={videoElement.snippet.title}></img>
              <div className="ml-3">
                <p className=" w-48 text-sm font-medium text-gray-900">{translatedTitle}</p>
            </div>

            <Dropdown
              className="justify-right"
              selectedLang={selectedLang}
              setSelectedLang={setSelectedLang}
              langOptions={langOptions}
              dropdownLabel="Translate Title:"
              onLanguageSelect={onLanguageSelect}
            />
          </li>
      </ul>
    </div>
  )
}
export default VideoItem;