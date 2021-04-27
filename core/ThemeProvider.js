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
      backdrop: 1000
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
        avatarRoot: {
            width: 48,
            height: 48,
            borderRadius: 999,
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            alignSelf: 'flex-start',
          },
          avatarText: {
            fontSize: 20
          },
          avatarRootSmall: {
            width: 32,
            height: 32
          },
          avatarTextSmall: {
            fontSize: 14
          },
          avatarRootLarge: {
            width: 96,
            height: 96
          },
          avatarTextLarge: {
            fontSize: 48
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
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            width: '96%',
            alignSelf: 'center',
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