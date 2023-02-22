# Starter Block | Plugin

The goal of this plugin is to start a block with the typical minimum requirements of a block-based plugin.

While a block-based plugin can technically be reduced much more, this is a more practical set of minimum requirements for a block-based plugin. This plugin can also be modified to include several blocks, but it starts with a single block within the src folder. 

## Requirements

This plugin requires at least the following:

-   [WordPress](https://wordpress.org/) 6.1.0
-   [PHP](https://php.net/) 8.0.0

## Parts of a block

There are four main parts of a block-based plugin.

-   First is the register_block_type function, which tells WordPress where the block.json file is.
-   Next, the block.json file tells WordPress where the block index.js file is. The block.json file also tells WordPress the name of the block, the category the block is within, the version of the block, and much more vital information.
-   Continued, the index.js file is the jsx that builds the blocks. This consists primarily of the edit and save functions, but includes all the necessary files, components, and much more that make up the block.
-   Finally, the package.json file is what utilizes WordPress's scripts to convert the index.js file into the javascript that runs the actual block within WordPress. The most important dependency within this file is wp-scripts and the build command.

## Notes

-   After wp-scripts build has been run, you will notice a new build folder. This folder is what contains the actual block files that WordPress will be looking for. So if there is a need to enqueue or refer to any files, this is the file to be referred towards as some installations will remove the src folder from the production environment.
-   This plugin includes a single instance of a block within the src folder, but multiple subfolders can be added within the src folder to include multiple blocks. If multiple blocks are included, be sure to move the block.json file into each block folder and update the register_block_type function to point to each block folder. Everything else should run the same.
-   This is only scratching the surface of a block. A block-based plugin could also include custom components, have each block include custom javascript files, dynamic blocks with php can be built, the save function can be null, and so much more.

## Changelog

### 1.0.0

Initial commit
