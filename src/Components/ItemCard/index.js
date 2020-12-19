import React, { Component } from 'react';
import { Card, CardImg } from 'reactstrap';
import AppModal from '../AppModal';
import AdditemForm from '../AddItemForm';

class ItemCard extends Component {
  render() {
    const { item, onUpdate } = this.props;
    return (
      <div className='flex-wrap '>
        <Card className='item-card mt-3 col-md-3 mb-3'>
        <CardImg className='item-image' top width="100%" src={item.imageUrl} alt="Card image cap" />
    <div>{item.name}
    </div>
<AppModal buttonLabel={'Edit Item'} btnColor={'secondary'} title={'Edit Item'}>
  <AdditemForm item={item} onUpdate={onUpdate}/>
</AppModal>
        </Card>
      </div>
    );
  }
}

export default ItemCard;
