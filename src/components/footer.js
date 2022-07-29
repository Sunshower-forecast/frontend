import React, { useContext } from 'react';

import {
  Footer,
  Box,
  Anchor,
  Text,
  ResponsiveContext,
} from 'grommet';
import { Github } from 'grommet-icons';
import CustomIcon from './icons/CustomIcon';

function CustomFooter() {
  const screenSize = useContext(ResponsiveContext);
  return (
    <Footer
      margin={{ top: '30px' }}
      pad="large"
      align="start"
      direction={screenSize !== 'small' ? 'row' : 'column'}
      wrap
      background="semitransparent-white"
      justify="around"
    >
      <Box>
        <Anchor
          href="https://github.com/YuliaProkopovych/weather-forecast"
          label={(
            <Box direction="row" gap="10px" align="center">
              <Github />
              <Text>This project on GitHub</Text>
            </Box>
          )}
        />
      </Box>
      <Box>
        <Anchor
          href="https://api.met.no/weatherapi/locationforecast/2.0"
          label={(
            <Box direction="row" gap="10px" align="center">
              <CustomIcon size="30px" path="/icons/svg/weather.svg" />
              <Text>Weather forecast API</Text>
            </Box>
          )}
        />
      </Box>
      <Box>
        <Anchor
          href="https://api.met.no/weatherapi/sunrise/2.0"
          label={(
            <Box direction="row" gap="10px" align="center">
              <CustomIcon size="30px" path="/icons/svg/day-night.svg" />
              <Text>Solar and lunar forecast API</Text>
            </Box>
          )}
        />
      </Box>
    </Footer>
  );
}

export default CustomFooter;
