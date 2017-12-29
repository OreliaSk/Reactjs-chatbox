import React from 'react';
import imgNotFound from '../images/loupe.svg';

const NotFound = () =>  {
	return(
		<div>
			<img src={imgNotFound} alt="img-page-not-found"/>
			<h2>Page non trouvé</h2>
			<div>Icons made by 
				<a href="https://www.flaticon.com/authors/vectors-market" title="Vectors Market">Vectors Market</a> 
				from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> 
				is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
			</div>
		</div>
	)
}

export default NotFound 