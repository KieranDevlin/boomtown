const styles = theme => ({
  nav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  navButton: {
    borderRadius: 50
  },
  addIcon: {
    marginRight: 20,
    borderRadius: 50,
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main
  },
  logo: {
    height: 40
  }
});

export default styles;
