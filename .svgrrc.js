module.exports = {
	icon: true,
	indexTemplate: require('./svgr-index-template'),
	typescript: true,
	titleProp: true,
	memo: true,
	template: require('./svgr-component-template'),
	svgProps: {
		height: '{size}',
		style: '{mergedStyle}',
		width: '{size}'
	}
}