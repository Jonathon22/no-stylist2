import PropTypes from 'prop-types';

const outfitShape = PropTypes.shape({
  userid: PropTypes.string.isRequired,
  fbKey: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  imageUrl2: PropTypes.string.isRequired,
  imageUrl3: PropTypes.string.isRequired,
  imageUrl4: PropTypes.string.isRequired,
});

export default outfitShape;
