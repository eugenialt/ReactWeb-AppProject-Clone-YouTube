import { Button, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import '@mantine/core/styles.css';


const colorTheme= ()=> {
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  const buttonTitle = colorScheme === 'light' ? 'light' : 'dark';
  return (
    <Button
    variant="subtle" 
     color="gray"
      onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
      size="md"
      aria-label="Toggle color scheme"
    >
      {buttonTitle}
      </Button>
  );
}

export default colorTheme