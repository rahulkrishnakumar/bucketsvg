module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          // customize default plugin options
          inlineStyles: {
            onlyMatchedOnce: false,
          },

          // or disable plugins
          removeDoctype: false,
          removeTitle: false,
        },
      },
    },
    { name: 'removeDimensions' },
    { name: 'sortAttrs' },
    // {
    //   name: 'removeAttributesToSVGElement',
    //   params: {
    //     attributes: {
    //       fill: 'currentColor',
    //       ariaHidden: true,
    //     },
    //   },
    // },
  ],
};
