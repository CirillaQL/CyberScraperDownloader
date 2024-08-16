import React from 'react';
import { TextInput, Flex, Box, ActionIcon } from '@mantine/core';
import { IconSend } from '@tabler/icons-react';

interface InputWithIconProps {
  placeholder?: string;
  onSubmit: () => void;
  width?: string | number;
}

const InputWithIcon: React.FC<InputWithIconProps> = ({
  placeholder = 'Please input URL you want to scrape and download',
  onSubmit,
  width = '70%'
}) => {
  return (
    <Flex justify="center" align="center" style={{ width: '100%' }}>
      <Box style={{ width }}>
        <TextInput
          placeholder={placeholder}
          size="xl"
          rightSection={
            <ActionIcon size="xl" onClick={onSubmit} variant="filled" color="blue">
              <IconSend size="1.1rem" />
            </ActionIcon>
          }
          rightSectionWidth={54}
        />
      </Box>
    </Flex>
  );
};

export default InputWithIcon;