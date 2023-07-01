import React from 'react';

import classes from './SearchResults.module.css'

import SearchResult from '../SearchResult/SearchResult';

function SearchResults({searchResults}) {

    return (
        <div className={classes.component}>
            {
                searchResults.length !== 0 ? 
                <div className={classes.list}>
                    <div className={classes.title}>SEARCH RESULTS</div>
                    <div className={classes.searchResults} > {
                        searchResults.map((searchResult) => {
                            return <SearchResult key={searchResult.id} searchResult={searchResult} />
                        })
                    }
                    </div>
                </div>
                :
                <label className={classes.label}>There are no search results...</label>
            }
           
        </div>
    )
}

export default SearchResults;