var smartgrid = require('smart-grid');
 
/* It's principal settings in smart grid project */
var settings = {
    outputStyle: 'scss', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: "50px", /* gutter width px || % */
    container: {
        maxWidth: '1140px', /* max-width оn very large screen */
        fields: '50px' /* side fields */
    },
    breakPoints: {
        lg: {
            'width': '1280px', /* -> @media (max-width: 1100px) */
            'fields': '50px' /* side fields */
        },
        md: {
            'width': '960px',
            'fields': '25px'
        },
        sm: {
            'width': '780px',
            'fields': '25px'
        },
        xs: {
            'width': '600px',
            'fields': '25px'
        }
        /* 
        We can create any quantity of break points.
 
        some_name: {
            some_width: 'Npx',
            some_offset: 'N(px|%)'
        }
        */
    }
};

var advanced = {
    properties: [
        "justify-content",
        "align-items",
        "align-content",
        "align-self",
        "order",
        "flex",
        "flex-grow",
        "flex-shrink",
        "flex-basis",
        "flex-direction",
        "flex-wrap",
        "flex-flow",
        "float",
        "width",
        "padding"
    ],
}
 
smartgrid('./blocks/_assets/scss', settings, advanced);