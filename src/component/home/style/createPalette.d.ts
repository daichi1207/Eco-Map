import * as createPalette from '@material-ui/core/styles/createPalette';
declare module '@material-ui/core/styles/createPalette' {
    interface PaletteOptions {
        customColor1?: PaletteColorOptions;
        customColor2?: PaletteColorOptions;
        primaryGradation?: GradationPaletteColorOptions
    }
    interface Palette {
        customColor1: PaletteColor;
        customColor2: PaletteColor;
    }
    interface GradationPaletteColorOptions {
        toRight?: string
        toBottom?: string
        toRightBottom?: string
    }
    interface GradationPaletteColor {
        toRight: string
        toBottom: string
        toRightBottom?: string
    }
}

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        success: {
            main: '#69A06F',
        },
        error: {
            main: red.A400,
        },
        customColor1:{
            main: '#69cc6F',
        },
        customColor2:{
            main: '#356cd6',
        },
        primaryGradation: {
            toRight: 'linear-gradient(90deg, #FF0000, #FFBA00)',
            toBottom: 'linear-gradient(180deg, #FF0000, #FFBA00)',
            toRightBottom: 'linear-gradient(135deg, #FF0000, #FFBA00)',
        },
    },
})

//https://zenn.dev/tttela/articles/c197e2567f31130dd8e1
