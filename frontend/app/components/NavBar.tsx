import { Group, Title, Button, Box } from '@mantine/core';
import Link from 'next/link';

export default function NavBar() {
  return (
    <Box component="nav" py="md" style={{ borderBottom: '1px solid #eaeaea' }}>
      <Group justify="space-between" h="100%" px="md">
        <Title order={3}>CyberScraperDownloader</Title>
        <Group>
          <Link href="/" passHref legacyBehavior>
            <Button component="a" variant="subtle">Home</Button>
          </Link>
          <Link href="/about" passHref legacyBehavior>
            <Button component="a" variant="subtle">About</Button>
          </Link>
          <Link href="/contact" passHref legacyBehavior>
            <Button component="a" variant="subtle">Contact</Button>
          </Link>
        </Group>
      </Group>
    </Box>
  );
}