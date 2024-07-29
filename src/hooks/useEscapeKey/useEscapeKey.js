import React from 'react';

function useEscapeKey(callback) {
	React.useEffect(() => {
		function removeToasts(e) {
			if (e.code === 'Escape') {
				callback(e)
			}
		}

		window.addEventListener('keydown', (event) => removeToasts(event))

		return () => {
			window.removeEventListener('keydown', (event) => removeToasts(event))
		}
	}, [callback])
}

export default useEscapeKey;
