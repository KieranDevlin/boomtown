const styles = theme => ({
  root: {
    paddingTop: 120,
    paddingLeft: 'auto',
    background: theme.palette.secondary.main,
    minHeight: '100vh'
  },
  profileMain: {
    height: 300,
    padding: 50,
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  user: {
    display: 'flex',
    alignItems: 'center'
  },
  customGravatar: {
    borderRadius: 50,
    marginRight: 20
  },
  sharedItems: {
    padding: '40px 0'
  },
  profileNumbers: {
    fontWeight: 'bold'
  }
});

export default styles;
