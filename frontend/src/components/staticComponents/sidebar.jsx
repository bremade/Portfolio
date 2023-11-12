import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Hidden from '@mui/material/Hidden';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CreateIcon from '@mui/icons-material/Create';
import PersonIcon from '@mui/icons-material/Person';
import TimelineIcon from '@mui/icons-material/Timeline';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import BarChartIcon from '@mui/icons-material/BarChart';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { makeStyles, useTheme } from '@mui/styles';
import { Grid } from '@mui/material';
import { HashLink as Link } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import Logo from '../../images/logo.svg';

const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('lg')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  appBar: {
    [theme.breakpoints.up('lg')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ListItemLink(props) {
  const { to } = props;

  const DefaultLink = React.forwardRef((linkProps, ref) => (
    <Link smooth to={to} {...linkProps} ref={ref} />
  ));

  if (checkMobile()) {
    const MobileLink = React.forwardRef((linkProps, ref) => (
      <Link
        smooth
        to={to}
        scroll={(el) => scrollWithOffset(el, 65)}
        {...linkProps}
        ref={ref}
      />
    ));
    MobileLink.displayName = 'MobileLink';
    return <ListItem button component={MobileLink} {...props} />;
  }
  DefaultLink.displayName = 'DefaultLink';
  return <ListItem button component={DefaultLink} {...props} />;
}

function ResponsiveDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Hidden lgDown implementation='css'>
        <Link
          id='logo-block'
          smooth
          aria-label='Move to top of the page'
          to='#'
          className='logo logoMdDown'
        >
          <Grid container justifyContent='center' spacing={0}>
            <Grid item xs={12} className='logoHead'>
              Jan Bremauer
            </Grid>
            <Grid item className='logoSub'>
              <img src={Logo} width='22' height='22' alt='Logo' /> Personal
              Homepage
            </Grid>
          </Grid>
        </Link>
        <Divider />
      </Hidden>
      <List>
        <ListItemLink
          button
          className='link'
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
          to='#about'
        >
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary='About' />
        </ListItemLink>
        <ListItemLink
          button
          className='link'
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
          to='#skills'
        >
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary='Skills' />
        </ListItemLink>
        <ListItemLink
          button
          className='link'
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
          to='#experience'
        >
          <ListItemIcon>
            <TimelineIcon />
          </ListItemIcon>
          <ListItemText primary='Experience' />
        </ListItemLink>
        <ListItemLink
          button
          className='link'
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
          to='#projects'
        >
          <ListItemIcon>
            <EmojiObjectsIcon />
          </ListItemIcon>
          <ListItemText primary='Projects' />
        </ListItemLink>
        <ListItemLink
          button
          className='link'
          selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 5)}
          to='#blog'
        >
          <ListItemIcon>
            <CreateIcon />
          </ListItemIcon>
          <ListItemText primary='Blog' />
        </ListItemLink>
        <ListItemLink
          button
          className='link'
          selected={selectedIndex === 6}
          onClick={(event) => handleListItemClick(event, 6)}
          to='#contact'
        >
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary='Contact' />
        </ListItemLink>
        <ListItemLink
          button
          className='link'
          selected={selectedIndex === 7}
          onClick={(event) => handleListItemClick(event, 7)}
          to='/imprint#'
        >
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary='Imprint' />
        </ListItemLink>
      </List>
    </div>
  );

  return (
    <div className='sbRoot'>
      <CssBaseline />
      <Hidden lgUp implementation='css'>
        <AppBar position='fixed' color='inherit' className={classes.appBar}>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              className={classes.menuButton}
              size="large">
              <MenuIcon />
            </IconButton>
            <div
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <Link
                id='logo-block'
                smooth
                aria-label='Move to top of the page'
                to='#'
                className='logo'
              >
                <Grid container justifyContent='center' spacing={0}>
                  <Grid item xs={12} className='logoHead'>
                    Jan Bremauer
                  </Grid>
                  <Grid item className='logoSub'>
                    <img src={Logo} width='22' height='22' alt='Logo' />{' '}
                    Personal Homepage
                  </Grid>
                </Grid>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </Hidden>
      <div className={classes.drawer}>
        <nav aria-label='mailbox folders'>
          <Hidden lgUp implementation='css'>
            <Drawer
              variant='temporary'
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: 'drawerPaper',
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden lgDown implementation='css'>
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant='permanent'
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
      </div>
    </div>
  );
}

ListItemLink.propTypes = {
  to: PropTypes.string.isRequired,
};

export default ResponsiveDrawer;
