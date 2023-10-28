import React from 'react'

function Default({ ex, Filter}) {
    const filtered = ex.filter((ex) => ex.Asignatura === Filter);
    return (
        <div>
            <h1>Default</h1>
            {filtered.map((ex) => (
                <div key={ex.id}>
                    <h2>{ex.Asignatura}</h2>
                    <p>{ex.tema}</p>
                    <h4>{ex.text}</h4>
                </div>
            ))}
        </div>
    )
}

export default Default