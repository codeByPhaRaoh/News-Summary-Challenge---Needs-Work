import React from 'react';

const ArList = (props) => {
    const arList = props.data && props.data.length > 0 && props.data.map((article) => (
        <li key={article.id}>
            <img src={article.fields.thumbnail} alt='thumbnail' />
            <p>{article.fields.headline}</p>
            <p>{article.fields.byline}</p>
        </li>
    ));

    return (
        <div>
            <p>{props.headingText}</p>
            <ul title="articles">
                {props.data && props.data.length === 0 && (
                    <li>
                        Loading Your News Articles...
                    </li>
                )}
                {arList}
            </ul>
        </div>
    );
};


export default ArList;