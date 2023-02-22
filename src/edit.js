/**
 * Editor screen.
 */

import { __ } from '@wordpress/i18n';
import { PanelBody, TextControl } from '@wordpress/components';
import {
	InspectorControls,
	useBlockProps,
} from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';

const Edit = function ( props ) {
	const { attributes, setAttributes } = props;
	const { content } = attributes;
	const blockProps = useBlockProps();

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					title={ __( 'Options', 'starter-block-plugin' ) }
					initialOpen={ true }
				>
					<div>
						<label>
							{ __(
								'Content',
								'starter-block-plugin'
							) }
						</label>
						<p>
							<small>
								{ __(
									'Add text to the block.',
									'starter-block-plugin'
								) }
							</small>
						</p>
						<TextControl
							value={
								content || __(
                                    'Hello world!',
                                    'starter-block-plugin'
                                )
							}
							onChange={ ( value ) => {
                                setAttributes( { content: value } );
                            } }
						/>
					</div>
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps }>
                <p>
                    { content || __(
                        'Hello world!',
                        'starter-block-plugin'
                    ) }
                </p>
			</div>
		</Fragment>
	);
};

export default Edit;