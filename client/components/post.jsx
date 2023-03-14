export default function(props) {

    return (
        <div>
            <span>
                {props.owner}
            </span>
            <span> is going to </span>
            <span>
                {props.placeId}
            </span>
            <span> in </span>
            <span>
                {props.expirationTime}
            </span>
        </div>
    );
}
