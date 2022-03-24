import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  container: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(12, 0, 10)
  },
  button: {
    marginTop: theme.spacing(3)
  },
  cardMedia: {
    paddingTop: '56.25%' //16:9
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardContent: {
    flexGrow: '1'
  },
  footer: {
      backgroundColor: '#ebebeb',
      padding: '30px 0',
      marginTop: theme.spacing(8)
  },
  header: {
    backgroundColor: '#ebebeb',
  }
}));

export default useStyles;