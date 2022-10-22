import React, { useState, useEffect } from 'react';
import supabase from "../config/supabase";
import SmoothieCard from "../components/smoothie-card";

function SmoothieHouse () {
    const [smoothies, setSmoothies] = useState(null)
    const [fetchError, setFetchError] = useState(null)

    useEffect(() => {
            const fetchSmoothies = async () => {
                const {data, error} = await supabase
                    .from('smoothies')
                    .select()

                if (error) {
                    setFetchError('Could not fetch the smoothies')
                    console.log(error)
                    setSmoothies(null)
                }
                if (data) {
                    setSmoothies(data)
                    setFetchError(null)
                }
            }
            fetchSmoothies()
        },
        []);


    return (
        <div className="bg-gray-100 h-full min-h-screen p-5">
            {fetchError && (<p>{fetchError}</p>)}
            {smoothies && (
                <div>
                    <div className="grid md:grid-cols-4 grid-cols-1 gap-3 items-center">
                        {smoothies.map((sm) =>  (
                            <SmoothieCard key={sm.id} title={sm.title} method={sm.method} rating={sm.rating}/>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default SmoothieHouse;