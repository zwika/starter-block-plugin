/**
 * Static frontend.
 */

import { __ } from '@wordpress/i18n';

const Save = function ( props ) {
	const { attributes } = props;
	const { content } = attributes;
	const blockProps = useBlockProps.save();

	return (
		<div { ...blockProps }>
            <p>
                { content ||  __(
                    'Hello world!',
                    'starter-block-plugin'
                ) }
            </p>
		</div>
	);
};

export default Save;