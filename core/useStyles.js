import useTheme from './useTheme';
export default function useStyles(callback){
    const theme = useTheme();
    return callback(theme);
}