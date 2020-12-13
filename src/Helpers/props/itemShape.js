import PropTypes from 'prop-types';

const itemShape = PropTypes.shape({
  fbKey: PropTypes.string.isRequired,
  userid: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
});

export default itemShape;
