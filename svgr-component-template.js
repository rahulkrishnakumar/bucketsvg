const propTypesTemplate = (
  { imports, interfaces, componentName, props, jsx, exports },
  { tpl, options },

) => {

  return tpl`${imports}
      ${interfaces}  
    
      interface SVGRProps {
        className?: string;
        color?: string;
        size?: string | number;  
        style?: React.CSSProperties;
      }      
     
      function ${componentName}({color, style, size = 16, title, titleId, ...props}: SVGProps<SVGSVGElement> & SVGRProps) {
        const mergedStyle = { ...style, color };
        return ${jsx};
      }

      ${exports}
`
}

module.exports = propTypesTemplate