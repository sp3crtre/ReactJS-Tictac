export default function Square({value, onClickSquare}) {
    return(
        <button 
            onClick={onClickSquare}
            className="bg-blue-700 
                       hover:bg-blue-800 
                       focus:bg-blue-800 
                       w-24 h-24 text-3xl 
                       border-2 border-black"
            > {value}
        </button>
    );
}
