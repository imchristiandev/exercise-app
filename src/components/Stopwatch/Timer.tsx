// @ts-nocheck
export const Timer = ({ time, trainingSeconds, restingSeconds, isTraining, trainingDuration, restingDuration }:any) => {

    const percentage = isTraining ? (100 / trainingDuration)*trainingSeconds : (100 / restingDuration)*restingSeconds

    const hours = Math.floor(time / 360000).toString().padStart(2, "0");
    const minutes = Math.floor((time % 360000) / 6000).toString().padStart(2, "0");
    const seconds = Math.floor((time % 6000) / 100).toString().padStart(2, "0");
    return (
        <section className="timer">
            <div class="pie" style={{"--p": `${percentage}`,"--b":"5px","--c":"purple"}}>
                <p className="timer__clock">
                    <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span> <span></span>
                </p>
            </div>
            
        </section>
    )
}