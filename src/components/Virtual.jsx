import './Virtual.css'
import shade from '../assets/shade.png'
import ReactCompareImage from 'react-compare-image'
import Before from '../assets/before.png'
import After from '../assets/after.png'

const Virtual = () => {
  return (
    <div className='virtual'>
        <div className="left">
<span>Virtual Try-On</span>
<span>Never Buy the Wrong Shade Again</span>
<span>Try Now!</span>
<img src={shade} alt="" />
        </div>
        <div className="right">
            <ReactCompareImage leftImage={Before} rightImage={After} />

        </div>
    </div>
  )
}

export default Virtual