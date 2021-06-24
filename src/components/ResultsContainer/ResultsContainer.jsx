import React from 'react'

const ResultsContainer = ({ suggestedNames }) => {

    const suggestedNameJsx = suggestedNames.map(suggestedName => {
        return <p>{suggestedName}</p>
    })

    return (
        <div>
            <p>{suggestedNameJsx}</p>

        </div>
    );
};

export default ResultsContainer;