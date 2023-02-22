import { registerBlockType } from '@wordpress/blocks';

import edit from './edit';
import save from './save';

registerBlockType('starter-block-plugin/hello-world', {
    edit,
    save,
});