import { useIsFetching } from 'react-query';
import { Box } from '@mui/system';
import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
  const isFetching = useIsFetching();

  return (
    <>
      {isFetching &&
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />{' '}
        </Box>
      }
    </>
  );
};

export default Loading;
