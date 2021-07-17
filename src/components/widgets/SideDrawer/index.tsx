import {
  useState,
  ForwardRefRenderFunction,
  forwardRef,
  useImperativeHandle,
} from "react";
import { useHistory } from "react-router";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import styles from "./index.module.scss";
import drawerItems from "./sideDrawerItems";
import { DrawerI } from "../../../interfaces";

interface SideDrawerProps {
  toggle: Function;
}
interface SideDrawerRefs {
  handleLogout: Function;
}
const SideDrawer: ForwardRefRenderFunction<SideDrawerProps, SideDrawerRefs> = (
  { handleLogout },
  ref
) => {
  useImperativeHandle(ref, () => ({
    toggle: () => {
      setOpen((prev) => !prev);
    },
  }));
  const [open, setOpen] = useState<boolean>(false);
  const history:any = useHistory();

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={styles.background}>
      <Drawer open={open}>
        <div className={`${styles.sideDrawerBackIcon}`}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div className={`ml-1 ${styles.logoImage}`}>
          <img width='150px' height='150px' src='/assets/images/freddys_logo.svg' />
          </div>
        <Divider />
        <List className="ml-2 mt-3">
          {drawerItems.map((item: DrawerI) => (
            <ListItem
              key={item.title}
              onClick={() => {
                if (item.path) {
                  history.push(item.path);
                } else {
                  handleLogout();
                }
              }}
              button
              className={styles.sideDrawerIcon}
            >
              <ListItemIcon>{<item.icon />}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};
export default forwardRef(SideDrawer);
