import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';

export const AddComment=()=>{
    return(
        <Popup trigger={<button> Trigger</button>} position="right center">
        <div>Popup content here !!</div>
      </Popup>

    )
}