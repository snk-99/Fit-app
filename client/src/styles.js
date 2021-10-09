// import { makeStyles } from "@mui/material";
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolBar: {
        backgroundColor: '#679B9B',
    },

    //CSS Media Queries
    [theme.breakpoints.down('xs')]: {
        maincont: {
            flexDirection: "column-reverse"
        }
    }
}));