import { Grid } from '@mui/material';

function ProjectsSession() {
  return (
    <Grid
      container
      flexDirection={{ sm: 'row', xs: 'column-reverse' }}
      justifyContent={{ sm: 'flex-start', xs: 'flex-end' }}
      alignItems="center"
      sx={{
        minHeight: 'calc(100vh - 64px)',
      }}
    >
      <Grid item></Grid>
      <Grid item></Grid>
    </Grid>
  );
}

export default ProjectsSession;
