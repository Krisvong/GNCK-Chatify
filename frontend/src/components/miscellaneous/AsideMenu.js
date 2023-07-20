import { Button, ButtonGroup } from "@chakra-ui/button";
import {
  Wrap,
  WrapItem,
  IconButton,
  AddIcon,
  ChatIcon,
  SunIcon,
  SettingsIcon,
} from "@chakra-ui/react";
import { Stack, Box } from "@chakra/Stack"

function AsideMenu() {
  return (
    <Stack direction="column">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="20%"
        py={12}
        bgImage="url('https://bit.ly/2Z4KKcF')"
        bgPosition="center"
        bgRepeat="no-repeat"
        mb={2}
      >
        <ButtonGroup gap="4">
          <Button colorScheme="whiteAlpha">WhiteAlpha</Button>
          <Button colorScheme="blackAlpha">BlackAlpha</Button>
        </ButtonGroup>
      </Box>

      <Wrap spacing={4}>
        <WrapItem>
          <IconButton aria-label="Add to friends" icon={<AddIcon />} />
        </WrapItem>
        <WrapItem>
          <IconButton aria-label="Chat" icon={<ChatIcon />} />
        </WrapItem>
        <WrapItem>
          <IconButton aria-label="light" icon={<SunIcon />} />
        </WrapItem>
        <WrapItem>
          <IconButton aria-label="Account" icon={<SettingsIcon />} />
        </WrapItem>
      </Wrap>
    </Stack>
  );
}

export default AsideMenu;
