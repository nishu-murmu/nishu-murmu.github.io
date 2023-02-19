import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"
import { StyleFunctionProps } from "@chakra-ui/react"

const styles = {
    global: (props: StyleFunctionProps) => ({
        body: {
            bg: mode("#4FD1C5", "#1D4044")(props),
            color: mode("black", "white")(props),
        },
    }),
}


const components = {
    Link: {
        baseStyle: (props: StyleFunctionProps) => ({
            color: mode('#3d7aed', '#ff63c3')(props),
            textUnderlineOffset: 3
        })
    }
}

const config = {
    initialColorMode: "dark",
    useSystemColorMode: true,
}

const theme = extendTheme({ config, styles, components })

export default theme
