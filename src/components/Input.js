export default function Input(props) {
    return (
        <div className="flex-container input">
            <i className="material-icons">search</i>
            <input {...props} placeholder="Search" />
        </div>
    )
}