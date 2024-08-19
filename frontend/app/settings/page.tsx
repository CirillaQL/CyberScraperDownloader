'use client';
import { useState } from 'react';
import { Box, Checkbox, Title, Divider, Group, Button, TextInput, Text, Overlay, Input  } from '@mantine/core';

export default function Settings() {
    const [chosenSourceValue, setChosenSourceValue] = useState<string[]>([]);
    const [isDisabled, setIsDisabled] = useState(false);
    return (
        <main>
            <Box style={{ height: "100%", display: 'flex' }}>
                <Box style={{ width: '10%', padding: '1rem', backgroundColor: '#f0f0f0' }}>
                </Box>
                <Box style={{ width: '80%', padding: '1rem' }}>
                    <div>
                        <Title order={2}>Choose supported sources</Title>
                        <div style={{ marginTop: '30px'}}>
                        <Checkbox.Group
                            defaultValue={[]}
                            value={chosenSourceValue}
                            onChange={setChosenSourceValue}
                            withAsterisk
                        >
                            <Group mt="xs">
                                <Checkbox value="simpcity" label="SimpCity" />
                                <Checkbox value="torrents" label="Torrents" />
                                <Checkbox value="dirtyship" label="DirtyShip" />
                                <Checkbox value="pornhub" label="Pornhub" />
                                <Checkbox value="onlyfans" label="Onlyfans" />
                            </Group>
                        </Checkbox.Group>
                        </div>
                    </div>
                    <Divider my="md" />
                    <div>
                        <Title order={2}>SimpCity Settings</Title>
                        <Input.Wrapper label="Username" description="Input description" style={{ width: '50%'}}>
                            <Input placeholder="Input inside Input.Wrapper" />
                        </Input.Wrapper>

                        <Input.Wrapper label="Password" description="Input description" style={{ width: '50%'}}>
                            <Input placeholder="Input inside Input.Wrapper" />
                        </Input.Wrapper>
                    </div>
                    {/* <Box>
                        <Button onClick={() => setIsDisabled(!isDisabled)} mb="md">
                            {isDisabled ? 'Enable' : 'Disable'} Content
                        </Button>
                        <Box pos="relative" p="md" style={{ border: '1px solid #ccc' }}>
                            <Box opacity={isDisabled ? 0.5 : 1}>
                            <Text size="lg" mb="sm">Content Title</Text>
                            <TextInput
                                placeholder="Type something..."
                                disabled={isDisabled}
                                mb="md"
                            />
                            <Checkbox
                                label="Check me"
                                disabled={isDisabled}
                                mb="md"
                            />
                            <Text>This is some content that can be greyed out.</Text>
                            </Box>
                            {isDisabled && <Overlay opacity={0.1} color="#000" />}
                        </Box>
                    </Box> */}
                </Box>
                <Box style={{ width: '10%', padding: '1rem', backgroundColor: '#f0f0f0' }}>

                </Box>
            </Box>
        </main>
    )
}