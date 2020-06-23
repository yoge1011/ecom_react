import React from 'react'

import './collections-overview.styles.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CollectionPreview from '../collection-preview/collection-preview.component'
import { selectCollectionForPreview } from '../../reducer/shop/shop.selector'

const CollectionsOverview= ({collections}) => {
    return (
        <div className="collections-overview">
        {
            collections.map( ({id, ...catCollection}) =>(
                <CollectionPreview key={id} {...catCollection} />
            ))
        }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);