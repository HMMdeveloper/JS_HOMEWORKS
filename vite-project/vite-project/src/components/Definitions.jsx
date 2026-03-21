import React from 'react';

function DefinitionsList({ data }) {

    console.log(data);

    return (
        <dl>
            {data.map(definitions => (
                <React.Fragment key={definitions.id}>
                    <dt>{definitions.dt}</dt>
                    <dd>{definitions.dd}</dd>
                </React.Fragment>
            ))}
        </dl>
    )
}

export default DefinitionsList;