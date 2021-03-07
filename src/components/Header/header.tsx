import React from "react"
import clsx from 'clsx';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import { NavLink } from "react-router-dom"


type PropsType = {
  activateSidebar: (flag: boolean)=>void,
  isActive: boolean,
  isAuth: boolean,
  email: string | null
}

const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root:{
      padding: theme.spacing(0, 1),
    },
    title: {
      flexGrow: 1,
    },
    headerBar: {
      minHeight: 30,
      background: "#0D0D0D",
    },
    email:{
        color: '#fff',
        marginRight: 20
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      hide: {
        display: 'none',
      },
    menuButton: {
        marginRight: 36,
      },
  })
)

const Header: React.FC<PropsType> = (props) => {
  const classes = useStyles()
  const handleClickIcon = () => {
    props.activateSidebar(true)
  }
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={clsx(classes.appBar, {
          [classes.appBarShift]: props.isActive,
        })}>
        <Toolbar className={classes.headerBar}>
          <IconButton
            edge="start"
            className={clsx(classes.menuButton, {
                [classes.hide]: props.isActive,
              })}
            color="inherit"
            aria-label="menu"
            onClick={handleClickIcon}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <NavLink to="/users">Социальная сеть</NavLink>
          </Typography>
          {props.isAuth && <span className={classes.email}>{props.email}</span>}
          {props.isAuth ? (
            <Button color="inherit">Выйти</Button>
          ) : (
            <Button color="inherit"><NavLink to="/login">Войти</NavLink></Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}
export default Header
