<?php
/**
 * Plugin Name: Starter Block | Plugin
 * Plugin URI: https://https://github.com/zwika/starter-block-plugin/
 * Description: Getting started with a block plugin.
 * Version: 1.0.0
 * Requires at least: 6.1
 * Requires PHP: 8.0
 * Text Domain: starter-block-plugin
 *
 * @package Starter_Block_Plugin
 */

namespace Starter_Block_Plugin;

if ( ! function_exists( __NAMESPACE__ . '\\register_block' ) ) {
	/**
	 * Register the block from the root block.json file.
	 *
	 * @since 1.0.0
	 */
    function register_block() {
        register_block_type( __DIR__ );
    }
    add_action( 'init', __NAMESPACE__ . '\\register_block' );
}
