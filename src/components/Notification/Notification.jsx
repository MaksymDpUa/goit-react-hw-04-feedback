import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
    return <p>{message}</p>
}

Notification.propTypes = {
    good: PropTypes.string,
}