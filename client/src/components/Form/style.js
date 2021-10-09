import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    r: {
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
        },
    },
    fileInput: {
        margin: '10px ',
    },
    paper: {
        padding: theme.spacing(6)
    },

    clear: {
        backgroundColor: '#679B9B',
    },
    f: {
        justifyContent: 'center',
        flexWrap: 'wrap',
        display: 'flex',
    },

}));