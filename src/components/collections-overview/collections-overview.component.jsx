import React from 'react'
import './collections-overview.styles.scss'
import CollectionPreview from '../collection-preview/collection-preview.component'

import { selectCollectionsForpreview } from '../../redux/shop/shop.selectors'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'

const CollectionsOverview = ({ collections }) => (
    <div className="collections-overview">
        {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForpreview
})

export default connect(mapStateToProps)(CollectionsOverview);