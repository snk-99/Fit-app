import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    fullHeightCard: {
        height: '100%',
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
    },
    // border: {
    //     border: 'solid',
    // },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        position: 'relative',
    },
    title: {
        padding: '0 16px',
    },
    o: {
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'white',
    },
    o2: {
        position: 'absolute',
        top: '20px',
        right: '20px',

    },
    grid: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
    },
    cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
    },
});