import { transform } from '@svgr/core';
import * as fs from 'fs/promises';
import * as path from 'path';
import { program } from 'commander';

const SVG_DIR = path.join(process.cwd(), 'public/svgs');
const COMPONENT_DIR = path.join(process.cwd(), 'src/components/icons');

program
  .option('-c, --current-color', 'SVG 색상을 currentColor로 변환')
  .option('-f, --force', '기존 파일 덮어쓰기')
  .parse(process.argv);

const options = program.opts();

async function generateSvgComponents() {
  try {
    await fs.mkdir(COMPONENT_DIR, { recursive: true });

    const files = await fs.readdir(SVG_DIR);
    const svgFiles = files.filter((file) => file.endsWith('.svg'));

    const componentNames: string[] = [];

    for (const file of svgFiles) {
      const componentName = path
        .basename(file, '.svg')
        .replace(/[^a-zA-Z0-9-]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '')
        .split('-')
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join('');

      const svgContent = await fs.readFile(path.join(SVG_DIR, file), 'utf-8');

      const componentPath = path.join(COMPONENT_DIR, `${componentName}.tsx`);

      const fileExists = await fs
        .access(componentPath)
        .then(() => true)
        .catch(() => false);

      if (fileExists && !options.force) {
        console.log(`⚠️ ${componentName} 컴포넌트가 이미 존재합니다. 건너뜁니다.`);
        continue;
      }

      const componentCode = await transform(
        svgContent,
        {
          plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
          typescript: true,
          prettier: true,
          exportType: 'named',
          jsxRuntime: 'automatic',
          namedExport: componentName,
          svgoConfig: {
            plugins: [
              {
                name: 'convertColors',
                params: {
                  currentColor: options.currentColor,
                },
              },
            ],
          },
        },
        {
          componentName,
        }
      );

      await fs.writeFile(path.join(COMPONENT_DIR, `${componentName}.tsx`), componentCode);

      componentNames.push(componentName);
    }

    const indexPath = path.join(COMPONENT_DIR, 'index.ts');
    let existingContent = '';

    try {
      existingContent = await fs.readFile(indexPath, 'utf-8');
    } catch {
      existingContent = ''; // 파일이 없는 경우 빈 문자열로 시작
    }

    if (!componentNames.length) {
      console.log('⚠️ 생성할 아이콘이 없습니다. 종료합니다.');
      return;
    }

    // 새로운 컴포넌트에 대한 export 문 생성
    const newExportLine = `export { ${componentNames} } from './${componentNames}';`;

    // 이미 해당 export 문이 존재하는지 확인
    if (!existingContent.includes(newExportLine)) {
      // 새로운 export 문을 마지막 줄에 추가
      const updatedContent = existingContent ? `${existingContent.trim()}\n${newExportLine}\n` : `${newExportLine}\n`;

      await fs.writeFile(indexPath, updatedContent);
      console.log(`✅ ${componentNames} 추가됨`);
    }

    console.log('✅ SVG 컴포넌트 생성 완료!');
  } catch (error) {
    console.error('에러 발생:', error);
  }
}

generateSvgComponents();
