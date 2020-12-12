import PropTypes from 'prop-types';

const outfitShape = PropTypes.shape({
  userid: PropTypes.string.isRequired,
  fbKey: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
});

export default outfitShape;
