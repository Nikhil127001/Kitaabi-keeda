import { Link, TextField } from '@mui/material';
import AddressAddButton from './AddressAddButton';
import './ComponentStyles/OffersComponent.css';
const OffersComponent = () => {

  const onPresshandler = () => {
    alert('offers Applied')
  }
  return (
    <div className='OffersOuter'>
      <div id="OffersInner">
        <h5>Offers & Discounts</h5>
        <div style={{
          display: 'flex',
          flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
        }} id='offersInput'>
          <TextField
            autoCapitalize={true}
            label={'Enter Code'}
          />
          <AddressAddButton BtnName={'Apply'} onpress={onPresshandler} styles={{ width: '100px', color: '#621CEA' }} />
        </div>
        <hr />

        <div style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ width: '70%', display: 'flex', flexWrap: 'wrap', marginRight: '10px' }}><li>Flat ₹100 off on orders above ₹999 -</li></div>
          <div style={{ width: '30%' }}><b>LOOSE100</b></div>
        </div>
        <hr />
        <text style={{fontSize: '14px', fontWeight: 500}} >View More Offers{' >'}</text>
      </div>
    </div>
  )
}
export default OffersComponent