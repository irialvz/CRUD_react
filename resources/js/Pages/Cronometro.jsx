import {useEffect, useState} from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";

export default function Cronometro() {
    const [num,setNum] = useState(0);
    const [minutos,setMinutos] = useState(0);
    const [segundos,setSegundos] = useState(0);
    const [milisegundos,setMilisegundos] = useState(0);
    const [LabelStartStop,setLabelStartStop] = useState("Start");
    const [running,setRunning] = useState(false);
    const format = (num) => {
        num.toString().padStart(2,"0");

    }
    useEffect(() => {
        let interval;
        if(running){
            interval = setInterval(()=> {
                setMilisegundos((prev)=> {
                    if (prev == 99){
                        setSegundos((s)=>s+1);
                        return 0;
                    }else {
                        return prev + 1
                    }
                })
            },10)
        } return () => clearInterval(interval);
    }, [running]);
    const startStop = () => {
        setRunning(!running)
        setLabelStartStop(() => {
            return LabelStartStop === "Start"?"Stop":"Start";
        })

    }

    const reset = () => {
        setMilisegundos(0);
        setMinutos(0);
        setSegundos(0);
        setRunning(false);
    }


    return (
        <>
            <AuthenticatedLayout>
            <div className="bg-base-200 flex min-h-screen items-center justify-center">
                <div className="card bg-base-100 w-96 p-8 shadow-xl">
                    {/* Display */}
                    <div className="mb-6 flex items-end justify-center gap-4">
                        <div className="bg-base-200 rounded-lg px-4 py-3 text-center">
                            <div className="font-mono text-4xl">
                                {minutos}
                            </div>
                            <div className="text-xs opacity-60">MIN</div>
                        </div>

                        <div className="pb-4 font-mono text-3xl">:</div>

                        <div className="bg-base-200 rounded-lg px-4 py-3 text-center">
                            <div className="font-mono text-4xl">
                                {format(segundos)}
                            </div>
                            <div className="text-xs opacity-60">SEG</div>
                        </div>

                        <div className="pb-4 font-mono text-3xl">:</div>

                        <div className="bg-base-200 rounded-lg px-4 py-3 text-center">
                            <div className="font-mono text-2xl">
                                {format(milisegundos)}
                            </div>
                            <div className="text-xs opacity-60">MS</div>
                        </div>
                    </div>

                    {/* Botones */}
                    <div className="flex justify-center gap-4">
                        <button onClick={startStop} className="btn btn-primary">
                            {LabelStartStop}

                        </button>
                        <button onClick={reset} className="btn btn-outline">
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>

        </>
    );


}
