import React from 'react';
import { Grid } from '@material-ui/core';

import Footer from './Footer';
import Members from './Members';
import MemberHeader from './MemberHeader';
import Description from './Description';

function MemberSide(props) {
  return (
    <React.Fragment>
      <Grid item xs={12} container direction='column'>
        <MemberHeader switch={props.switch} />
        <Description current={props.current} />
        <Members />
      </Grid>
      <Footer />
    </React.Fragment>
  );
}

export default MemberSide;
