import * as React from "react";
import "./leadCardStyles.css";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

interface LeadCardProps {
  firstName: string;
  emailAddress: string;
  id: string;
  avatar: string;
}

const LeadCard = (props: LeadCardProps) => {
  const [idVisible, setIdVisible] = React.useState<boolean>(false);

  const updateIdVisibility = (event: React.MouseEvent) => {
    event.preventDefault();
    if (idVisible === true) {
      setIdVisible(false);
    } else if (idVisible === false) {
      setIdVisible(true);
    }
  };

  return (
    <Card className="card">
      <CardHeader
        avatar={<img className="avatar_img" src={props.avatar} alt="avatar" />}
        title={props.firstName}
        subheader={`${props.emailAddress}${
          idVisible === true ? `\nid: ${props.id}` : ""
        }`}
        action={
          <IconButton aria-label="visibility" onClick={updateIdVisibility}>
            {idVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </IconButton>
        }
      />
    </Card>
  );
};

export default LeadCard;
