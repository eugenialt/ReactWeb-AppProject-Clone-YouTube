import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import '@mantine/core/styles.css';


const colorTheme= ()=> {
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  const buttonTitle = colorScheme === 'light' ? 'light' : 'dark';
  return (
    <ActionIcon
      onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
      variant="default"
      size="xl"
      aria-label="Toggle color scheme"
    >
      {buttonTitle}
      </ActionIcon>
  );
}

export default colorTheme