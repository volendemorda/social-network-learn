import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import PostAddIcon from '@material-ui/icons/PostAdd';
import ForumIcon from '@material-ui/icons/Forum';
import PeopleIcon from '@material-ui/icons/People';
import { NavLink } from 'react-router-dom';
import { NullLiteral } from 'typescript';
import { useOnClickOutside } from '../../accecs/hook/useOnClickOutside';

type PropsType = {
  activateSidebar: (flag: boolean)=> void,
  isActive: boolean
}
const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      background: '#202020',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      background: '#202020',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    navlink:{
      a:{
        color:'#333'
      }
    }
  }),
)



 const Sidebar: React.FC<PropsType> = (props) => {
  const ref = React.useRef<HTMLDivElement | null>()
  useOnClickOutside(ref,()=>props.activateSidebar(false))
  const clickHandlerIcon = ()=>{
    props.activateSidebar(false) 
  }
  const classes = useStyles()
  const theme = useTheme()
   return (
    <Drawer 
    ref={ref}
    variant="permanent"
    className={clsx(classes.drawer, {
      [classes.drawerOpen]: props.isActive,
      [classes.drawerClose]: !props.isActive,
    })}
    classes={{
      paper: clsx({
        [classes.drawerOpen]: props.isActive,
        [classes.drawerClose]: !props.isActive,
      }),
    }}
  >
    <div className={classes.toolbar}>
      <IconButton onClick={clickHandlerIcon}>
        {theme.direction === 'rtl' ? <ChevronRightIcon style={{color:'#fff'}}/> : <ChevronLeftIcon style={{color:'#fff'}}/>}
      </IconButton>
    </div>
    <Divider />
    <List>
        <ListItem button>
          <ListItemIcon><PermIdentityIcon style={{color:'#fff'}}/></ListItemIcon>
          <ListItemText><NavLink to="/profile">Профиль</NavLink></ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon><PostAddIcon style={{color:'#fff'}}/></ListItemIcon>
          <ListItemText><NavLink to="/posts">Посты</NavLink></ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon><ForumIcon style={{color:'#fff'}}/></ListItemIcon>
          <ListItemText><NavLink to="/ChatPage">Чат</NavLink></ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon><PeopleIcon style={{color:'#fff'}}/></ListItemIcon>
          <ListItemText><NavLink to="/users">Пользователи</NavLink></ListItemText>
        </ListItem>
    </List>
  </Drawer>
   )
 }
 export default Sidebar 