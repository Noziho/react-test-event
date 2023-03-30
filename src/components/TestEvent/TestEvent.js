
export const TestEvent = () => {

    function handleGlobalEvent() {
        alert('CC')
    }

    return (
        <>
            <div>
                <button onClick={handleGlobalEvent}>Click for alert</button>
            </div>

            <div>
                <button onMouseEnter={handleGlobalEvent}>Mouse enter for alert</button>
            </div>

            <div>
                <button onMouseLeave={handleGlobalEvent}>Mouse leave for alert</button>
            </div>


            <div>
                <input type={"text"} onBlur={handleGlobalEvent} value={"Click and click on the page for alert"}></input>
            </div>

            <div>
                <input type={"text"} onChange={handleGlobalEvent} value={"Edit me for alert !"}></input>
            </div>

            <div>
                <input type={"text"} onCopy={handleGlobalEvent} value={"Copy me for alert !"}></input>
            </div>
        </>
    )
}