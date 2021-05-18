import React, {createContext, useEffect, useState} from 'react';
import { mergeDeepLeft } from 'ramda';
const defaultTheme = {
    palette: {
      primary: { main: '#2196f3', contrastText: '#fff' },
      secondary: { main: '#ff9100', contrastText: '#fff' },
      divider: '#cacaca',
      background: {
        paper: '#fff',
      }
    },
    typography: {
      button: {
        fontSize: 18
      },
      body1: {
        fontSize: 15,
      },
      h1: {
        fontSize: 54,
      },
      h2: {
        fontSize: 40,
      },
      h3: {
        fontSize: 30,
      },
      h4: {
        fontSize: 25,
      },
      h5: {
        fontSize: 22
      },
      caption: {
        fontSize: 14,
        color: 'rgba(0,0,0,.54)',
      }
    },
    shape: {
      borderRadius: 4,
    },
    spacing: v=>v*4,
    shadows: [
      {
        shadowColor: "#cacaca",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
      },
      {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
      },
      {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
      },
      {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
        elevation: 21,
      },
      {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
      }
    ],
    transitions: {
      duration: {
        enter: 225,
        leave: 195,
        short: 250,
        shorter: 200,
        shortest: 150,
        standard: 300,
        complex: 375
      }
    },
    zIndex: {
      textField: 900,
      badge: 1000,
      // backdrop: 1500
    }
}
const makeStyles = theme => {
    const bg = {};
    const colors = {};
    const borders = {};
    Object.keys(theme.palette).forEach(key=>{
        if(!theme.palette[key].main) return;
        bg[`bg_${key}`] = { backgroundColor: theme.palette[key].main };
        colors[`color_${key}`] = { color: theme.palette[key].main };
        colors[`color_${key}Contrast`] = { color: theme.palette[key].contrastText|| '#ffffff' }
        borders[`border_${key}`] = { borderColor: theme.palette[key].main, borderWidth: 1 };
    })
    return {
        paper: {
            backgroundColor: theme.palette.background.paper,
            borderRadius: theme.shape.borderRadius,
            ...theme.shadows[1]
        },
        appBar: {
            width: '100%',
        },
        color_primaryContrast: {
            color: theme.palette.primary.contrastText
        },
        color_secondaryContrast: {
            color: theme.palette.secondary.contrastText
        },
        color_divider: {
            color: theme.palette.divider,
        },
        color_default: {
            color: 'rgba(0,0,0,.81)',
        },
        color_defaultContrast: {
            color: 'rgba(255,255,255,.81)',
        },
        border_divider: {
          borderColor: theme.palette.divider,
          borderWidth: 1,
        },
        border_default: {
            borderColor: 'rgba(0,0,0,.81)',
            borderWidth: 1,
        },
        bg_default: {
            backgroundColor: theme.palette.divider,
        },
        btnFullWidth: {
            alignSelf: 'stretch',
        },
        btnRoot: {
            justifyContent: "center",
            alignItems: 'center',
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
            alignSelf: 'flex-start',
        },
        btnTypography: {
            ...theme.typography.button
        },
        borderRadius: {
            borderRadius: theme.shape.borderRadius,
        },
        borderRadiusCircle: {
          borderRadius: '50%',
        },
        iconButtonRoot: {
          justifyContent: 'center',
          alignItems: 'center'
        },
        iconButton_small: {
          width: 36,
          height: 36,
        },
        iconButton_medium: {
          width: 48,
          height: 48,
        },
        iconButton_large: {
          width: 96,
          height: 96
        },
        container: {
            // alignItems: 'flex-start',
            // justifyContent: 'flex-start',
            // width: '96%',
          width: '100%',
          paddingLeft: theme.spacing(4),
          paddingRight: theme.spacing(4),
            // alignSelf: 'center',
        },
        inputUnderlinedRoot: {
          overflow: 'hidden',
        },
        divider: {
          position: 'absolute',
          bottom: 0,
          backgroundColor: '#888',
          height: 1,
          width: '100%',
          alignItems: 'center',
          zIndex: theme.zIndex.textField
        },
        spacer: {
          paddingTop: 14,
          opacity: 0,
        },
        input: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 16,
        },
        typography: {
          fontSize: 16,
          color: '#888',
        },
        label: {
          position: 'absolute',
          bottom: 0,
          left: 0,
        },
        w100: {
          width: '100%',
        },
        backdropRoot: {
          backgroundColor: 'rgba(0,0,0,.75)', 
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        },
        badgeRoot: {
          alignSelf: 'flex-start',
          position: 'relative',
        },
        badgeContent: {
          paddingLeft: theme.spacing(1.5),
          paddingRight: theme.spacing(1.5),
          paddingTop: theme.spacing(0.5),
          paddingBottom: theme.spacing(0.5),
          borderRadius: '50%',
          position: 'absolute',
          zIndex: theme.zIndex.badge,
        },
        drawer: {
          width: '100%',
        },
        drawerBackdrop: {
          justifyContent: 'flex-end' 
        },
        drawerPaper: {

        },
        buttonGroup: {
          root: {
            flexDirection: 'row',
          },
          button: {
            flex: 1,
          }
        },
        radioGroup: {
          root: {},
          rootVertical: {},
          rootHorizontal: { flexDirection: 'row' },
          buttonRoot: { flexDirection: 'row', alignItems: 'center' },
          buttonDotRoot: { position: 'absolute', left: 0, },
          typography: { paddingLeft: theme.spacing(1), paddingRight: theme.spacing(4) }
        },
        checkbox: {
          root: { flexDirection: 'row', alignItems: 'center' },
          touchable: {},
          checked: {},
          unchecked: {}
        },
        avatar: {
          root: {
            width: 48,
            height: 48,
            borderRadius: 999,
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            alignSelf: 'flex-start',
          },
          root_small: {
            width: 32,
            height: 32
          },
          root_large: {
            width: 96,
            height: 96
          },
          image_small: {
            width: 36,
          },
          image_medium: {
              width: 60,
          },
          image_large: {
            width: 116
          },
          text_small: {
            fontSize: 14

          },
          text_medium: {
            fontSize: 20
          },
          text_large: {
            fontSize: 48
          }
        },  
        list: {
          root: {
            width: '100%',
          },
          item: {
            padding: theme.spacing(4),
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexDirection: 'row',
          },
          icon: {
            paddingRight: theme.spacing(2),
          },
          secondaryAction: {
            
          },
          textRoot: {
            flex: 1,
          },
          primaryText: theme.typography.h5,
          secondaryText: theme.typography.caption
        },
        typography: {
          align_center: { textAlign: 'center' },
          align_left: { textAlign: 'left' },
          align_right: { textAlign: 'right' },
          align_justify: { textAlign: 'justify' },


        },
        table: {
          root: {
            width: '100%',
          },
          paper: {

          },
          row: {
            flexDirection: 'row',
            minHeight: 48,
            borderStyle: 'solid',
            borderColor: 'rgba(0,0,0,.22)',
            borderBottomWidth: 1,
            alignItems: 'center',
            // backgroundColor: 'red',
            // flex: 1,
          },
          cell: {
            // flex: 1,
            // flex: 1,
            // flexDirection: 'row',
            alignItems: 'flex-start',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),

          },
          link: {
            // textDecorationColor: '#000',
            textDecorationLine: 'underline'
          },

        },
        ...bg,
        ...colors,
        ...borders

    }
}
const defaultStyles = makeStyles(defaultTheme);

const ThemeContext = createContext(defaultTheme);
const StylesContext = createContext(defaultStyles);

function ThemeProvider(props){
    const [state, setState] = useState({theme: defaultTheme, styles: defaultStyles });
    useEffect(()=>{
        const theme = mergeDeepLeft(props.theme, defaultTheme);
        setState({ theme, styles: makeStyles(theme) });
    }, [props.theme])
    return (
        <ThemeContext.Provider value={state.theme}>
            <StylesContext.Provider value={state.styles}>
                {props.children}
            </StylesContext.Provider>
        </ThemeContext.Provider>
    )
}
ThemeProvider.ThemeContext = ThemeContext;
ThemeProvider.StylesContext = StylesContext;
export default ThemeProvider;