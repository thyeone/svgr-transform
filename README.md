# Svgr Transform
지정된 폴더의 svg 파일들을 React Component로 변환합니다. 또한, 배럴 파일도 같이 생성합니다.

## Usage

### Install
``` bash
yarn add -D @svgr/core @svgr/plugin-jsx @svgr/plugin-prettier @svgr/plugin-svgo commander ts-node
```

### Keep Colors
``` bash
npx ts-node generate-icons.ts
```

### Replace Color With currentColor

``` bash
npx ts-node generate-icons.ts --current-color
```

### Import With Icon Component
``` tsx
import Icon from '@/components/Icon';

export default function Example() {
  return (
    <>
      <Icon name='IconCustomerService2Line1' />
    </>
  );
}
```
