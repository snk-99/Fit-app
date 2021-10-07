// import { makeStyles } from "@mui/material";
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolBar: {
        backgroundColor: '#98867c',
    },

    //CSS Media Queries
    [theme.breakpoints.down('sm')]: {
        maincont: {
            flexDirection: "column-reverse"
        }
    }
}));