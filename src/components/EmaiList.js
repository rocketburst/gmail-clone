import {
  Container,
  Settings,
  SettingsLeft,
  SettingsRight,
  EmailSections,
  List,
} from "../styles/EmailListStyle";
import { Checkbox, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import EmailSection from "./EmailSection";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import EmailRow from "./EmailRow";

const EmaiList = () => {
  return (
    <Container>
      <Settings>
        <SettingsLeft>
          <Checkbox />

          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>

          <IconButton>
            <RedoIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </SettingsLeft>

        <SettingsRight>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>

          <IconButton>
            <ChevronRightIcon />
          </IconButton>

          <IconButton>
            <KeyboardHideIcon />
          </IconButton>

          <IconButton>
            <SettingsIcon />
          </IconButton>
        </SettingsRight>
      </Settings>

      <EmailSections>
        <EmailSection
          Icon={InboxIcon}
          title="Primary"
          color="red"
          selected={true}
        />
        <EmailSection Icon={PeopleIcon} title="Social" color="#1A73E8" />
        <EmailSection Icon={LocalOfferIcon} title="Promotions" color="green" />
      </EmailSections>

      <List>
        <EmailRow
          title="Twitch"
          subject="Important"
          description="test"
          time="10pm"
        />

        <EmailRow
          title="Twitch"
          subject="Important"
          description="test"
          time="10pm"
        />

        <EmailRow
          title="Twitch"
          subject="Important"
          description="test"
          time="10pm"
        />
      </List>
    </Container>
  );
};

export default EmaiList;