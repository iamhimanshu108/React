import Icon from "../Icon/Icon";
import './Card.css';

function Card({gameEnd, palyer, onPlay, index}) {
    let icon = <Icon />
    if (palyer == "X") {
        icon = <Icon name="cross" />

    }else if (palyer == "O") {
        icon = <Icon name="circle" />
    }
    return(
        <div className="card" onClick={() => !gameEnd && palyer=="" && onPlay(index)}>
            {icon}
        </div>

    )
}

export default Card;